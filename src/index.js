// ==UserScript==
// @name         shanbay word web phone optimize
// @namespace    https://github.com/x22x22
// @version      0.1
// @description  优化web版本的shanbay单词在手机下的下一个按钮无法点击的问题.
// @author       You
// @match        https://www.shanbay.com/bdc/review/
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let ua = navigator.userAgent.toLowerCase();
  let OLeft = 0;
  let viewWidth = window.innerWidth;
  if (/mobile|android|iphone|ipad|phone/i.test(ua) && viewWidth <= 767) {
    document.addEventListener('click', () => {
      let nextButtons = document.getElementsByClassName('continue continue-button');
      let progress = document.getElementsByClassName('row hide bottom-progress progress-box');
      if (progress && progress.length > 0) {
        progress[0].style.width = viewWidth - 120 + 'px';
      }
      if (
        nextButtons &&
        nextButtons.length > 0 &&
        (OLeft === 0 || nextButtons[0].style.left.replace('px', '') === OLeft)
      ) {
        OLeft = nextButtons[0].style.left.replace('px', '');
        nextButtons[0].style.left = OLeft - 30 + 'px';
      }
    });
  }
})();
