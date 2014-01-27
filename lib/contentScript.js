chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  if (request.greeting == 'from extension') {
    sendResponse({data: document.body.textContent});
  }
});

