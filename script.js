// ==UserScript==
// @name         Reddit click history
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Reddit: on expando-button click: set visited link by modifying the history
// @author       eSantini
// @match        https://www.reddit.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Reddit: on expando-button click: set visited link by modifying the history
    document.getElementById('siteTable').addEventListener('click', function(ev){
        try {
            if(ev.target.classList.contains('expando-button')) {
                var url = ev.target.parentElement.querySelector('.title a').href;
                var currUrl = window.location.href;

		// set clicked URL in the browser URL bar.
		history.replaceState({}, '', url);

		// reSet current URL
		history.replaceState({}, '', currUrl);
            }
        }
        catch (e) {
			// fails with some external links like youtube
            //throw e;
        }
    });
    // Your code here...
})();
