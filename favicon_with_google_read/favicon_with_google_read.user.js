// ==UserScript==
// @name          Favicon with Google Reader
// @namespace     http://libelabo.jp/
// @description   A script to add favicons next to links on Google Reader
// @include       http://www.google.com/reader/view/*
// @include       https://www.google.com/reader/view/*
// ==/UserScript==

(function() {
	
	var showBlankIcon = false;
	
	
	
	var timerID = null;
	
	function findNode(root, xpath) {
		var result = document.evaluate(xpath, root, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
		if (! result.snapshotLength) return null;
		return result.snapshotItem(0);
	}
  
	function addFaviconToNode(link,node) {
		var favicon = document.createElement('img');
		favicon.setAttribute('class', 'entry-favicon');
		favicon.src = "http://" + link.hostname + "/favicon.ico";
		favicon.width = 16;
		favicon.alt   ="";
		favicon.style.border = "0";
		
		if( showBlankIcon ){
			var g = link.parentNode;
			
			var favicon_container = document.createElement('div');
			favicon_container.style.cssFloat = 'left';
			favicon_container.style.minWidth = '16px';
			favicon_container.style.minHeight = '16px';
			favicon_container.style.backgroundImage = 'url("chrome://global/skin/icons/folder-item.png")';
			
			favicon_container.appendChild(favicon);
			node.parentNode.insertBefore(favicon_container,node);
		}
		else{
			favicon.style.marginRight = "1ex";
			node.parentNode.insertBefore(favicon,node);
		}
	}
	
	function getFaviconImg(node){
		return findNode(node,'.//img[@class="entry-favicon"]');
	}
	
	function addFavicons() {
		var entries = document.getElementById('entries');
		for (var i=0; i< entries.childNodes.length; i++) {
			var entry = entries.childNodes[i];
			var collapsedTitle = findNode(entry, './/div[@class="collapsed"]//h2');
			var entryContainerTitle = findNode(entry, './/div[@class="entry-container"]//h2');
			
			var link = null;
			var title = null;
			if (entryContainerTitle != null) {
				link = entryContainerTitle.firstChild;
				title = link.firstChild.textContent;
			} else if (collapsedTitle != null) {
				link = collapsedTitle.parentNode.parentNode.firstChild;
				title = collapsedTitle.textContent;
			}
			if ( link != null ){
				if ( entryContainerTitle != null && getFaviconImg(entryContainerTitle) == null ){
					addFaviconToNode(link,link.firstChild);
				}
				else if (collapsedTitle != null && getFaviconImg(link.parentNode) == null){
					addFaviconToNode(link,collapsedTitle);
				}
			}
		}
	}

timerID = setInterval(addFavicons, 3000);

})();
