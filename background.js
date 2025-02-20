chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "checkCyberbullying",
        title: "Check for Cyberbullying",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "checkCyberbullying") {
        fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: info.selectionText })
        })
        .then(response => response.json())
        .then(data => {
            let message = data.is_cyberbullying ? "⚠️ Cyberbullying Detected!" : "✅ No Cyberbullying Detected.";
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                func: alertUser,
                args: [message]
            });
        })
        .catch(error => console.error("Error:", error));
    }
});

function alertUser(message) {
    alert(message);
}
