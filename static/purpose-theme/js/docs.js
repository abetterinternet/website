/*

Documentation styles for Purpose - Website UI Kit
IMPORTANT: No need to include docs.css in your project. These styles are for documentation only.

Product Page: https://themes.getbootstrap.com/product/purpose-website-ui-kit/
Author: Webpixels
Author URI: https://www.webpixels.io

---

Copyright 2018 Webpixels

*/

"use strict";

$(document).ready(function() {

	// Copy code blocks to clipboard

	$("figure.highlight, div.highlight").each(function() {
	    var t = '<div class="code-clipboard"><button class="btn-clipboard" title="Copy to clipboard">Copy</button></div>';
	    $(this).before(t);
	    $(".btn-clipboard").tooltip().on("mouseleave", function() {
	        $(this).tooltip("hide")
	    });
	});

	var t = new Clipboard(".btn-clipboard", {
	    target: function(e) {
	        return e.parentNode.nextElementSibling
	    }
	});
	t.on("success", function(t) {
	    e(t.trigger).attr("title", "Copied!").tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle");
	    t.clearSelection()
	});
	t.on("error", function(t) {
	    var n = /Mac/i.test(navigator.userAgent) ? "⌘" : "Ctrl-";
	    var r = "Press " + n + "C to copy";
	    e(t.trigger).attr("title", r).tooltip("_fixTitle").tooltip("show").attr("title", "Copy to clipboard").tooltip("_fixTitle")
	});
});