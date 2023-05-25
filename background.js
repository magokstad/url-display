// Listen for messages from content scripts
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "getTabContainer") {
        // Get the cookieStoreId from the tab that sent the message
        let cookieStoreId = sender.tab.cookieStoreId;
        // Get the container corresponding to the cookieStoreId
        return browser.contextualIdentities.get(cookieStoreId);
    }
});

