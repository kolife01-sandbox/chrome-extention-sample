chrome.runtime.onMessage.addListener(function(msg) {
  console.log("content")
  $("body").css("background-color", msg.color);
});