// ==UserScript==
// @name           gist - ubiquity
// @namespace      http://d.hatena.ne.jp/youpy/
// @include        http://gist.github.com/*
// @require        http://gist.github.com/raw/3242/1a7950e033a207efcfc233ae8d9939b676bdbf46
// ==/UserScript==

(function() {
	var data = $X('id("gist_data")');
	if(!data)
		return;

	if(data[0].textContent.match(/(CmdUtils\.CreateCommand|makeSearchCommand)/)) {
		var link = document.createElement('link');
		with(link) {
			setAttribute('rel', 'commands');
			setAttribute('href', $X('//a[text()="raw"]')[0].href);
			setAttribute('name', data[0].textContent.match(/name: \"([^\"]+)\"/)[1]);
		}
    $X('//head')[0].appendChild(link);
	}
})();
