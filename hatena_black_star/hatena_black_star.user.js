// Hatena Black Star user script
// 2008-07-05
// by Hamachiya2. (http://d.hatena.ne.jp/Hamachiya2/20080705/HatenaBlackStar)

// ==UserScript==
// @name           Hatena Black Star
// @namespace      http://hamachiya.com/
// @description    Hatena Black Star
// @include        http://b.hatena.ne.jp/entry/*
// @version        0.4
// ==/UserScript==


location.href = 'javascript:(' + function() { (function (w) {

	if (typeof(w.Ten) == 'undefined') {
		return;
	}

	HatenaBookmarkBlackStar = new Ten.Class({
		initialize: function(li, entryTitle) {
			var comment = '';
			var tags    = '';
			var commentSpans = Ten.DOM.getElementsByTagAndClassName('span', 'comment', li);
			if (commentSpans.length > 0) {
				comment = Ten.DOM.scrapeText(commentSpans[0]);
			}

	        var tagsSpans = Ten.DOM.getElementsByTagAndClassName('span', 'user-tag', li);
			if (tagsSpans.length > 0) {
				$A(tagsSpans[0].getElementsByTagName('a')).each(function(a) {
					tags += '[' + Ten.DOM.scrapeText(a)+ ']';
				});
			}

			var title = tags + comment;
			if (title.length == 0) {
				var name = Ten.DOM.scrapeText(li.getElementsByTagName('a')[1]);
				title = name + 'のブックマーク';
	        }

			// this.uri   = 'http://b.hatena.ne.jp/keyword/' + li.getElementsByTagName('a')[1].href;
			var u = li.getElementsByTagName('a')[1].href;

			if (u.indexOf('#') == -1) {
				this.uri = u + '#_HatenaBlackStar';
			} else {
				this.uri = u + '_HatenaBlackStar';
			}

			this.title = title + ' - ' + entryTitle;

			this.comment_container = Hatena.Star.EntryLoader.createCommentContainer();
			var target = commentSpans[0] || li;
			target.appendChild(this.comment_container);

			this.star_container = Hatena.Star.EntryLoader.createStarContainer();
			this.star_container.className = 'hatena-star-star-container BlackStarContainer';
			target.appendChild(this.star_container);
		}
	});

	HatenaBookmarkBlackStarEntry = new Ten.Class({
		initialize: function(dd, entryUri, entryTitle) {

			this.title = entryTitle;

			if (entryUri.indexOf('#') == -1) {
				this.uri = entryUri + '#_HatenaBlackStar';
			} else {
				this.uri = entryUri + '_HatenaBlackStar';
			}

			this.comment_container = Hatena.Star.EntryLoader.createCommentContainer();
			dd.appendChild(this.comment_container);
			this.star_container = Hatena.Star.EntryLoader.createStarContainer();
			this.star_container.className = 'hatena-star-star-container BlackStarContainer';
			dd.appendChild(this.star_container);
		}
	});

	var tryCount = 0;
	var tryMax = 300;
	function waitForHatenaStar() {
//		if (Hatena.Star.EntryLoader.loaded) {

		var s = document.getElementsByClassName('hatena-star-add-button');
		if (s.length) {

//		var u = document.getElementById('bookmarked_user');
//		if (u && (u.innerHTML.indexOf('hatena-star-add-button') > -1)) {

			Hatena.Star.EntryLoader.loaded = false;

			Hatena.Star.EntryLoader.loadEntries = function() {
				var entries = [];

				// entry
				var dd = document.getElementById('entry_star_count');

				var title = document.getElementsByTagName('h1');
				title.length && (title = title[0].getElementsByTagName('a'));

				var u = document.getElementById('entrylink_url');
				u && (u = u.getElementsByTagName('a'));

				if(dd && u.length && title.length) {
					entries.push(new HatenaBookmarkBlackStarEntry(dd, u[0].href, title[0].innerHTML));
				}

				// bookmark
				title = Ten.DOM.scrapeText(Ten.DOM.getElementsByTagAndClassName('span', 'title', document.body)[0]);
				var ul = document.getElementById('bookmarked_user');
				if (ul) {
					$A(ul.getElementsByTagName('li')).each(function(li) {
						if (li.className != 'more') {
							entries.push(new HatenaBookmarkBlackStar(li, title));
						}
					});
				}
				return entries;
			}
			new Hatena.Star.EntryLoader();

		} else {
			if (++tryCount > tryMax) {
				setTimeout(waitForHatenaStar, 400);
			}
		}
	}

	setTimeout(waitForHatenaStar, 700);

})(window); }.toString() + ')()';



GM_addStyle(<><![CDATA[

	.BlackStarContainer {
		margin-left: 6px;
	}

	.BlackStarContainer .hatena-star-add-button {
		border: 1px solid #888 ! important;
		background-color: #aaa ! important;
	}

	.BlackStarContainer a {
		text-decoration: none ! important;
		color: #444 ! important;
		font-size: 10px;
		position: relative;
	}

	.BlackStarContainer a:before {
		content: '★';
	}

	.BlackStarContainer a .hatena-star-star {
		filter: alpha(opacity=00);
		-moz-opacity:0.00;
		opacity:0.00;

		position: absolute;
		top: 0;
		left: 0;
	}

	.BlackStarContainer .hatena-star-inner-count {
		color: #555 ! important;
	}

]]></>);

