// function getCurrentTabContainer() {
//     // Get the current tab
//     return browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
//         let currentTab = tabs[0];  // There should only be one result
//         // Get the cookieStoreId from the tab, which represents the container
//         let cookieStoreId = currentTab.cookieStoreId;
//         // Get the container corresponding to the cookieStoreId
//         return browser.contextualIdentities.get(cookieStoreId);
//     });
// }

// Create a new 'style' element
let style = document.createElement('style');

// Set the CSS text
style.textContent = `
@keyframes fadeout {
    from { opacity: 1; }
    to { opacity: 0; }
}

.fadeout {
    animation-name: fadeout;
    animation-duration: 1s;
}
`;

// Append the 'style' element to the 'head' of the document
document.head.appendChild(style);



var div = document.createElement('div');
div.style.position = 'fixed';
div.style.zIndex = 9999;
// div.style.top = '0';
// div.style.right = '0';


div.style.left = '50%';  // Position the left edge in the middle
div.style.top = '5px';   // 5 pixels down from the top
div.style.transform = 'translateX(-50%)';

div.style.marginRight = '10px'
div.style.paddingLeft = '5px';
div.style.paddingRight = '5px';
div.style.opacity = 0.8;

div.style.borderRadius = '3px 3px 3px 3px';
div.style.borderLeftStyle = 'solid';
div.style.borderLeftWidth = '5px'

// div.style.borderBottomStyle = 'solid';
// div.style.borderBottomWidth = '2px'

div.style.backgroundColor = '#202122';
div.style.color = 'lightgrey';
// div.style.textShadow = "2px 2px black"
div.style.fontFamily = 'mono'
div.style.fontStyle = 'normal';
div.style.fontSize = '20px';

div.textContent = window.location.hostname;

if (window.location.protocol === 'https:') {
    div.style.borderLeftColor = 'lightgreen';  
    // div.style.borderBottomColor = 'green';
} else {
    div.style.borderLeftColor = 'red';  
    // div.style.borderBottomColor = 'red';
}

// getCurrentTabContainer().then(container => {
//     // console.log("Container name:", container.name);
//     console.log("Container color:", container.color);
//     // console.log("Container icon:", container.icon);
//   // div.style.borderBottomColor = container.color
// });

// Send a message to the background script
// browser.runtime.sendMessage({message: "getTabContainer"}).then(response => {
//     // Log the response from the background script
//     console.log("Container name:", response.name);
//     console.log("Container color:", response.color);
//     console.log("Container icon:", response.icon);
// });


// var but = document.createElement('button');
// but.style.left = '50%';  // Position the left edge in the middle
// but.style.top = '5px';   // 5 pixels down from the top
// but.style.transform = 'translateX(-50%)';
// but.click()
// document.body.append(but);


setTimeout(function() {
    div.classList.add('fadeout');
}, 3000);

div.addEventListener('animationend', function() {
    div.remove();
});

document.body.appendChild(div);

