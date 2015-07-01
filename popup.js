function getCurrentTab() {
  return new Promise(function (resolve, reject) {
    var queryInfo = { active: true, currentWindow: true };

    chrome.tabs.query(queryInfo, function(tabs) {
      var tab = tabs[0];
      resolve(tab);
    });
  });
}

function highlightReact(tabID) {
  return new Promise(function (resolve, reject) {
    var opts = { file: 'highlightReact.js', runAt: 'document_end' };
    chrome.tabs.executeScript(tabID, opts, resolve);
  });
}

function render(statusText) {
  document.getElementById('message').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() {
  getCurrentTab()
    .then(function (tab) {
      return highlightReact(tab.id);
    })
    .then(function (result) {
      render(result);
    })
    .catch(console.error.bind(console));
});
