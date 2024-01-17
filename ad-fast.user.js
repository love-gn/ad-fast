// ==UserScript==
// @name         ad-fast
// @version      0.1.0
// @license      GPL-2.0-only
// @description  Ad Accelerator
// @description:zh-CN 广告加速器
// @match        *://v.qq.com/*
// @match        *://www.iqiyi.com/*
// @connect      raw.githubusercontent.com
// @grant        none
// ==/UserScript==

(function() {
    let rate = 0
    window.Date.now = () => {
    	return new window.Date().getTime() + (rate += 1000)
    }
    setInterval(() => {
    	rate = 0
    },600000)
})();
