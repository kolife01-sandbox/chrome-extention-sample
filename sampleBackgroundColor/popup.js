$("#black").on("click", () => {
  console.log("black")
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      color: "black"
    });
  });
});
$("#red").on("click", () => {
  console.log("red")
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {
      color: "red"
    });
  });
});