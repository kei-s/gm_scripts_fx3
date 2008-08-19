// ==UserScript==
// @name      mata nicovideo
// @namespace http://muumoo.jp/
// @include   http://www.nicovideo.jp/watch/*
// @author    pool
// @version   0.3
// ==/UserScript==

(function(){
	Number.prototype.z = function(len){
		var s = '0'.fill(len) + this.toString();
		return s.substr(s.length - len);
	};
	String.prototype.fill = function(len){
		var result = '';
		for(var i = 0; i < len; i++) result += this;
		return result;
	};

	var h1 = document.getElementsByTagName('h1').item(0);
	if(!h1) return;
	var span = document.createElement('span');
	h1.parentNode.insertBefore(span, h1);
	
	var a = document.createElement('a');
	a.appendChild(document.createTextNode('[\u307E\u305F\u898B\u3066\u308B]'));
	a.href = 'javascript:void 0';
	a.addEventListener('click',
		function(){
			this.parentNode.removeChild(this);
			
			var text = document.createElement('input');
			text.type = 'text';
			text.value = '';
			text.size = 20;
			text.setAttribute('maxlength', 10);
			
			var a = document.createElement('a');
			a.appendChild(document.createTextNode('[\u307E\u305F\u898B\u3066\u308B!]'));
			a.href = 'javascript:void 0';
			a.addEventListener('click',
				function(){
					unsafeWindow.matanicovideo_callback = function(){};
					var script = document.createElement('script');
					script.setAttribute('src', 'http://twitter.com/account/verify_credentials.json?callback=matanicovideo_callback');
					script.setAttribute('type', 'application/javascript');
					script.setAttribute('charset', 'utf-8');
					script.addEventListener('load', function(){
						var subject = h1.textContent;
						var url = location.href;
						
						var len = document.getElementById('flvplayer').wrappedJSObject.GetVariable('ContentLength').replace(/\D+/g, '');
						var lmin = Math.floor(len / 60);
						var lsec = len % 60;
						
						GM_xmlhttpRequest({
							method: 'POST',
							url: 'http://twitter.com/statuses/update.json',
							headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
							data: 'status=' + encodeURIComponent(
								'\u307E\u305F\u30CB\u30B3\u30CB\u30B3\u52D5\u753B\u898B\u3066\u308B : ' +
								subject + ' ' + url +
								' (' + (0 < len ? lmin.z(2) : '--') + ':' + (0 < len ? lsec.z(2) : '--') + ')' +
								((0 < text.value.length) ? ' ' + text.value : '')
							),
							onload: function(res){ GM_log('\u6295\u7A3F\u3057\u307E\u3057\u305F\u3002'); },
							onerror: function(res){ GM_log(res.status + ':' + res.statusText); }
						});
						a.parentNode.parentNode.removeChild(a.parentNode);
					}, false);
					document.getElementsByTagName('head').item(0).appendChild(script);
				}, false);
			span.appendChild(a);
			span.appendChild(text);
			text.focus();
		}, false);
	span.appendChild(a);
})();
