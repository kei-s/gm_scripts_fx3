// ==UserScript==
// @name           mata niconico diag
// @namespace      http://mirupreza.tumblr.com/
// @description    Usage: F2 -> "***: ****" on Twitter!
// @include        http://www.nicovideo.jp/watch/*
// @author         miru
// @version        0.1
// ==/UserScript==
//


(function (){

    // --- user customize start ---
    
    var defaultTag = "\u307e\u305f\u30cb\u30b3"
    var useTinyURL = true
    var useAlert   = true
    var replaceTag = true
    
    // --- user customize end   ---

    var w = window
    if (typeof unsafeWindow != 'undefined') { w = unsafeWindow }
    function debug(arguments) { try{ w.console.log(arguments)   } catch(e) {} }
    function error(arguments) { try{ w.console.error(arguments) } catch(e) {} }
    
    var Browsing = function() { this.init.apply(this, arguments) }
    
    Number.prototype.zs = function(len){
	var s = this.toString();
	return s.substr(s.length - len);
    };
    Number.prototype.z = function(len){
	var s = '0'.fill(len) + this.toString();
	return s.substr(s.length - len);
    };
    String.prototype.fill = function(len){
	var result = '';
	for(var i = 0; i < len; i++) result += this;
	return result;
    };
    
    Browsing.prototype = {
	
	init : function(url) {
	    var m = defaultTag + ': "' + document.title + '" '
		var m = prompt(m,'')
	    if (m == null) return
	    if (m == '') m = defaultTag
	    else if (!replaceTag) m += ' ' + defaultTag
	    var t = document.title
	    var len = document.getElementById('flvplayer').wrappedJSObject.GetVariable('ContentLength');
	    var lmin = Math.floor(len / 60);
	    var lsec = len % 60;
	    var s = [m,': "',t,'" ',url,' (',lmin.zs(3),':',lsec.z(2),')'].join('')
	    var l = t.length || true
	    while (l && s.length > 140) {
		t = t.slice(0, -8)
		l = t.length
		t += '...'
		s = [m,' "',t,'" ',url].join('')
	    }
	    if (!l) {
		var c = 'comment too long!'
		    if (useAlert) alert(c)
		error(c)
		return
	    }
	    
	    this.post(s)
	},

	post : function(status) {
	    GM_xmlhttpRequest({
		method : 'post',
		url    : 'http://twitter.com/statuses/update.json',
		headers: { 'Content-type': 'application/x-www-form-urlencoded', },
		data   : 'status=' + encodeURIComponent(status),
		onload : function(res) {
		    debug('Loaded - ' + status + ' - ' + res.status + ': ' + res.statusText)
		},
		onerror: function(res) {
		    if (useAlert) alert('post failed!')
		    error('Failed - ' + status + ' - ' + res.status + ': ' + res.statusText)
		},
	    })
	},
	
    }

    addEventListener('keypress', function(e){
	var v = (e.keyCode == 113)
	
	if (v) {
	    if (useTinyURL) {
		createTinyURL(document.location.href, function(url) {
		    new Browsing(url)
		}, tinyURLError)
	    }
	    else {
		new Browsing(document.location.href);
	    }
	}
    }, true)
    
    function createTinyURL(url,callback,error) {
	GM_xmlhttpRequest({
	    method : 'get',
	    url    : 'http://tinyurl.com/api-create.php?url=' + url,
	    onload : function(res) {
		if (res.responseText != 'Error') callback(res.responseText)
		else if (typeof error == 'function') error(res)
	    },
	    onerror: error,
	})
    }
    
    function tinyURLError(res) {
	if (useAlert) alert('tinyurl failed!')
	error('TinyURL Failed - ' + res.status + ': ' + res.statusText)
    }
    
})()
