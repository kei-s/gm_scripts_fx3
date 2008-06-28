<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">
<head>
 <title>Changeset 14460 for lang/javascript/userscripts/googlereaderfullfeed.user.js - CodeRepos::Share - Trac</title><link rel="start" href="/share/wiki" /><link rel="search" href="/share/search" /><link rel="help" href="/share/wiki/TracGuide" /><link rel="stylesheet" href="/share/chrome/common/css/trac.css" type="text/css" /><link rel="stylesheet" href="/share/chrome/common/css/changeset.css" type="text/css" /><link rel="stylesheet" href="/share/chrome/common/css/diff.css" type="text/css" /><link rel="stylesheet" href="/share/chrome/common/css/code.css" type="text/css" /><link rel="icon" href="/share/chrome/common/trac.ico" type="image/x-icon" /><link rel="shortcut icon" href="/share/chrome/common/trac.ico" type="image/x-icon" /><link rel="prev" href="/share/changeset/14459/lang/javascript/userscripts/googlereaderfullfeed.user.js" title="Changeset 14459 for lang/javascript/userscripts/googlereaderfullfeed.user.js" /><link rel="alternate" href="?format=diff&amp;new=14460" title="Unified Diff" type="text/plain" /><link rel="alternate" href="?format=zip&amp;new=14460" title="Zip Archive" type="application/zip" /><style type="text/css">
</style>



<link rel="stylesheet" type="text/css" media="screen,tv,projection" title="ass-ari" href="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/styles/ass-ari.css"/>
<link rel="alternate stylesheet" type="text/css" media="screen,tv,projection" title="plants-repository" href="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/styles/plants-repository.css"/>
<link rel="alternate stylesheet" type="text/css" media="screen,tv,projection" title="default" href="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/styles/default.css"/>

<!-- temporary deleted
<link rel="stylesheet" type="text/css" media="screen,tv,projection" href="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/styles/trac-tooltip.css"/>
-->

<script type="text/javascript" src="http://s.hatena.ne.jp/js/HatenaStar.js"></script>
<script type="text/javascript" src="http://coderepos.org/share/htdocs/lib/jquery-1.2.2.min.js"></script>
<script type="text/javascript" src="http://svn.coderepos.org/share/lang/javascript/javascript-xpath/trunk/release/javascript-xpath-latest-cmp.js"></script>
<script type="text/javascript" src="http://svn.coderepos.org/share/lang/javascript/javascript-xpath/bindings/jquery/src/xpath4jquery.js"></script>
<script type="text/javascript" src="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/js/TracUtils.js"></script>
<script type="text/javascript" src="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/js/HatenaStarTrac.js"></script>
<script type="text/javascript" src="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/js/HatenaStarProgressive.js"></script>

<!-- temporary deleted
<script type="text/javascript" src="http://svn.coderepos.org/share/websites/coderepos.org/trac/share/js/TracTooltip.js"></script>
-->



<style type="text/css">

</style>
 <script type="text/javascript" src="/share/chrome/common/js/trac.js"></script>
</head>
<body>



<div id="banner">

<div id="header"><a id="logo" href="http://coderepos.org/"><img src="/share/chrome/common/trac_banner.png" alt="" /></a><hr /></div>

<form id="search" action="/share/search" method="get">
 <div>
  <label for="proj-search">Search:</label>
  <input type="text" id="proj-search" name="q" size="10" accesskey="f" value="" />
  <input type="submit" value="Search" />
  <input type="hidden" name="wiki" value="on" />
  <input type="hidden" name="changeset" value="on" />
  <input type="hidden" name="ticket" value="on" />
 </div>
</form>



<div id="metanav" class="nav"><ul><li class="first"><a href="/share/login">Login</a></li><li><a href="/share/settings">Settings</a></li><li><a accesskey="6" href="/share/wiki/TracGuide">Help/Guide</a></li><li class="last"><a href="/share/about">About Trac</a></li></ul></div>
</div>

<div id="mainnav" class="nav"><ul><li class="first"><a accesskey="1" href="/share/wiki">Wiki</a></li><li><a accesskey="2" href="/share/timeline">Timeline</a></li><li><a accesskey="3" href="/share/roadmap">Roadmap</a></li><li class="active"><a href="/share/browser">Browse Source</a></li><li><a href="/share/report">View Tickets</a></li><li class="last"><a accesskey="4" href="/share/search">Search</a></li></ul></div>
<div id="main">




<div id="ctxtnav" class="nav">
 <h2>Navigation</h2>
  <ul>
    <li class="first"> &larr; 
      <a class="prev" href="/share/changeset/14459/lang/javascript/userscripts/googlereaderfullfeed.user.js" title="Changeset 14459 for lang/javascript/userscripts/googlereaderfullfeed.user.js">Previous Change</a> 
    </li>
    <li class="last">
      <span class="missing">Next Change &rarr;</span>
    </li>
  </ul>
</div>

<div id="content" class="changeset">
 <div id="title">
    <h1>Changeset <a title="Show full changeset" href="/share/changeset/14460">
      14460</a> 
     for <a title="Show entry in browser" href="/share/browser/lang/javascript/userscripts/googlereaderfullfeed.user.js?rev=14460">
      lang/javascript/userscripts/googlereaderfullfeed.user.js</a> 
    </h1>
 </div>


<form method="post" id="prefs" action=""><div><input type="hidden"  name="__FORM_TOKEN" value="30bd3b4ff4f139cb4d0cee96" /></div>
 <div>
  <label for="style">View differences</label>
  <select id="style" name="style">
   <option value="inline" selected="selected">inline</option>
   <option value="sidebyside">side by side</option>
  </select>
  <div class="field">
   Show <input type="text" name="contextlines" id="contextlines" size="2"
     maxlength="3" value="2" />
   <label for="contextlines">lines around each change</label>
  </div>
  <fieldset id="ignore">
   <legend>Ignore:</legend>
   <div class="field">
    <input type="checkbox" id="blanklines" name="ignoreblanklines" />
    <label for="blanklines">Blank lines</label>
   </div>
   <div class="field">
    <input type="checkbox" id="case" name="ignorecase" />
    <label for="case">Case changes</label>
   </div>
   <div class="field">
    <input type="checkbox" id="whitespace" name="ignorewhitespace" />
    <label for="whitespace">White space changes</label>
   </div>
  </fieldset>
  <div class="buttons">
   <input type="submit" name="update" value="Update" />
  </div>
 </div>
</form>



<dl id="overview">
 <dt class="property time">Timestamp:</dt>
 <dd class="time">06/23/08 18:02:02 
  (5 days ago)</dd>
 <dt class="property author">Author:</dt>
 <dd class="author">mattn</dd>
 
 <dt class="property message">Message:</dt>
 <dd class="message" id="searchable"><p>
タブ修正 <br />
</p>
</dd>
 <dt class="property files">
   Files:
 </dt>
 <dd class="files">
  <ul>
   <li>
  <div class="mod"></div>
   <a title="Show entry in browser" href="/share/browser/lang/javascript/userscripts/googlereaderfullfeed.user.js?rev=14460">lang/javascript/userscripts/googlereaderfullfeed.user.js</a>
  <span class="comment">(modified)</span>
    (<a href="#file0" title="Show differences">1&nbsp;diff</a>)

   </li>
  </ul>
 </dd>
</dl>

<div class="diff">
 <div id="legend">
  <h3>Legend:</h3>
  <dl>
   <dt class="unmod"></dt><dd>Unmodified</dd>
   <dt class="add"></dt><dd>Added</dd>
   <dt class="rem"></dt><dd>Removed</dd>
   <dt class="mod"></dt><dd>Modified</dd>
   <dt class="cp"></dt><dd>Copied</dd>
   <dt class="mv"></dt><dd>Moved</dd>
  </dl>
 </div>
 <ul class="entries"><li class="entry" id="file0"><h2><a href="/share/browser/lang/javascript/userscripts/googlereaderfullfeed.user.js?rev=14460" title="Show new revision 14460 of this file in browser">lang/javascript/userscripts/googlereaderfullfeed.user.js</a></h2><table class="inline" summary="Differences" cellspacing="0">
     <colgroup><col class="lineno" /><col class="lineno" /><col class="content" /></colgroup>
     <thead><tr>
      <th title="Revision 14459"><a href="/share/browser/lang/javascript/userscripts/googlereaderfullfeed.user.js?rev=14459" title="Show old version of lang/javascript/userscripts/googlereaderfullfeed.user.js">r14459</a></th>
      <th title="Revision 14460"><a href="/share/browser/lang/javascript/userscripts/googlereaderfullfeed.user.js?rev=14460" title="Show new version of lang/javascript/userscripts/googlereaderfullfeed.user.js">r14460</a></th>
      <th>&nbsp;</th></tr>
     </thead><tbody><tr><th>493</th><th>493</th><td class="l"><span>&nbsp; &nbsp; if (!lastItem || lastItem.link != currentItem.link) {</span>&nbsp;</td></tr><tr><th>494</th><th>494</th><td class="l"><span>&nbsp; &nbsp; &nbsp; lastItem = currentItem;</span>&nbsp;</td></tr></tbody><tbody class="mod"><tr class="first"><th>495</th><th>&nbsp;</th><td class="l"><del>&nbsp; &nbsp; &nbsp; &nbsp;</del>&nbsp; if (currentItem.link) FullFeed.preFilters.forEach(function(filter) {&nbsp;</td></tr><tr class="last"><th>&nbsp;</th><th>495</th><td class="r"><ins>&nbsp; &nbsp; </ins>&nbsp; if (currentItem.link) FullFeed.preFilters.forEach(function(filter) {&nbsp;</td></tr></tbody><tbody><tr><th>496</th><th>496</th><td class="l"><span>&nbsp; &nbsp; &nbsp; &nbsp; filter(currentItem);</span>&nbsp;</td></tr><tr><th>497</th><th>497</th><td class="l"><span>&nbsp; &nbsp; &nbsp; });</span>&nbsp;</td></tr></tbody><tbody class="mod"><tr class="first"><th>498</th><th>&nbsp;</th><td class="l">&nbsp; &nbsp; }<del>&nbsp; </del>&nbsp;</td></tr><tr class="last"><th>&nbsp;</th><th>498</th><td class="r">&nbsp; &nbsp; }<ins></ins>&nbsp;</td></tr></tbody><tbody><tr><th>499</th><th>499</th><td class="l"><span>&nbsp; } catch (e) {}</span>&nbsp;</td></tr><tr><th>500</th><th>500</th><td class="l"><span>&nbsp; timer = setTimeout(arguments.callee, 200);</span>&nbsp;</td></tr></tbody></table></li></ul>
</div>

</div>
<script type="text/javascript">searchHighlight()</script>
<div id="altlinks"><h3>Download in other formats:</h3><ul><li class="first"><a href="?format=diff&amp;new=14460" class="diff">Unified Diff</a></li><li class="last"><a href="?format=zip&amp;new=14460" class="zip">Zip Archive</a></li></ul></div>

</div>

<div id="footer">
 <hr />
 <a id="tracpowered" href="http://trac.edgewall.org/"><img src="/share/chrome/common/trac_logo_mini.png" height="30" width="107"
   alt="Trac Powered"/></a>
 <p class="left">
  Powered by <a href="/share/about"><strong>Trac 0.10.4</strong></a><br />
  By <a href="http://www.edgewall.org/">Edgewall Software</a>.
 </p>
 <p class="right">
  Visit the Trac open source project at<br /><a href="http://trac.edgewall.org/">http://trac.edgewall.org/</a>
 </p>
</div>


<div id="hosted-by">
Hosted by <a href="http://www.infomarks.co.jp/">INFOMARKS Corporation<br />
<img src="http://www.infomarks.co.jp/img/infomarks.gif" style="width: 160px; height: 38px;" alt="infomarks" />
</a>
</div>

 </body>
</html>

