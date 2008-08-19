// ==UserScript==
// @name           easy I'm reading now
// @namespace      http://d.hatena.ne.jp/Uchimata/
// @description    Usage: Ctrl + Shift + Enter -> "Browsing: ****" on Twitter!
// @include        *
// @version        0.3.0
// ==/UserScript==
//
// last modified: 2007/11/27 10:10:45
// histry : http://twitter.g.hatena.ne.jp/Uchimata/20071008/1191837376
// 


(function (){

  // --- user customize start ---

  var useTinyURL = true
  var useAlert   = true
  var defaultTag = "Browsing:"
  var replaceTag = true

  // --- user customize end   ---


  var w = window
  if (typeof unsafeWindow != 'undefined') { w = unsafeWindow }
  function debug(arguments) { try{ w.console.log(arguments)   } catch(e) {} }
  function error(arguments) { try{ w.console.error(arguments) } catch(e) {} }

  var Browsing = function() { this.init.apply(this, arguments) }

  Browsing.prototype = {

    init : function(url) {
      var m = defaultTag + ' "' + document.title + '" '
      var m = prompt(m,'')
      if (m == null) return
      if (m == '') m = defaultTag
      else if (!replaceTag) m += ' ' + defaultTag
      var t = document.title
      var s = [m,' "',t,'" ',url].join('')
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
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
        data   : 'status=' + encodeURIComponent(status),
        onload : function(res) {
          if (useAlert) alert('twittered!')
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
    var c = (e.ctrlKey)
    var s = (e.shiftKey)
    var v = (e.keyCode == 13)
    if (c && s && v) {
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
