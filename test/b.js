(function() {
  'use strict';
	let doc = document.evaluate('//*[@id="app"]/div/div[2]/div/div/div[1]/div[3]/div[1]/div/div[2]/div/div[2]/div[2]/ul/li/img/@src', document.body);
	let nodes = doc.iterateNext();
	let alertText = '';
	while (nodes) {
		alertText += "https:"+nodes.textContent.split("@")[0] + "\n";
		nodes = doc.iterateNext();
	}
	console.log(alertText);
})();
