chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "Eric"
    });
});

chrome.storage.local.get(['name'], data => {

});