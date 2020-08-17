chrome.webRequest.onBeforeRequest.addListener(
	function(details){ 
		return {cancel: true}; },
	{urls: ["*://www.4chan.org/*"]},
	["blocking"]
);
