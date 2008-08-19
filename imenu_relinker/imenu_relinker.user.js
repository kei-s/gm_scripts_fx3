// ==UserScript==
// @name        ime.nu relinker
// @namespace   http://ccm.sherry.jp/
// @description Relinks 2ch's ime.nu urls.
// @include     http://*.2ch.net/*
// @include     http://*.bbspink.com/*
// ==/UserScript==

(function () {
    var xpath_anchor = "//a";
    var res = document.evaluate(
	xpath_anchor, document, null,
	XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);

    var re_imenu = /^(https?):\/\/(?:[^\/]+?\.)*?(?:ime\.nu|ime\.st)\/(.+)$/i;
    var i, anchor;
    for (i = 0; anchor = res.snapshotItem(i); i++) {
	anchor.href = anchor.href.replace(re_imenu, "$1://$2");
    }
})();
