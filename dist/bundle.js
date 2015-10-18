/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	var weather = __webpack_require__(5);
	weather();


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./weather.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./weather.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* This stylesheet is forked from this code pen: http://codepen.io/anon/pen/xwPjeB */\n/* SUNNY */\n.sunny {\n    animation: sunny 15s linear infinite;\n    background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);\n    height: 140px;\n    width: 20px;\n    margin-left: -15px;\n    position: absolute;\n    left: 90px;\n    top: 20px;\n}\n.sunny:before {\n    background: linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);\n    content: '';\n    height: 140px;\n    width: 20px;\n    opacity: 1;\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    transform: rotate(90deg);\n}\n.sunny:after {\n    background: #FFEE44;\n    border-radius: 50%;\n    box-shadow: rgba(255,255,0,0.2) 0 0 0 15px;\n    content: '';\n    height: 80px;\n    width: 80px;\n    position: absolute;\n    left: -30px;\n    top: 30px;\n}\n@keyframes sunny {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n}\n\n/* CLOUDY */\n.cloudy {\n    animation: cloudy 5s ease-in-out infinite;\n    background: #FFFFFF;\n    border-radius: 50%;\n    box-shadow:\n    #FFFFFF 65px -15px 0 -5px,\n    #FFFFFF 25px -25px,\n    #FFFFFF 30px 10px,\n    #FFFFFF 60px 15px 0 -10px,\n    #FFFFFF 85px 5px 0 -5px;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 255px;\n    top: 70px;\n}\n.cloudy:after {\n    animation: cloudy_shadow 5s ease-in-out infinite;\n    background: #000000;\n    border-radius: 50%;\n    content: '';\n    height: 15px;\n    width: 120px;\n    opacity: 0.2;\n    position: absolute;\n    left: 5px;\n    bottom: -60px;\n    transform: scale(.7);\n}\n@keyframes cloudy {\n    50% { transform: translateY(-20px); }\n}\n@keyframes cloudy_shadow {\n    50% { transform: translateY(20px) scale(1); opacity:.05; }\n}\n\n/* RAINY */\n.rainy {\n    animation: rainy 5s ease-in-out infinite 1s;\n    background: #CCCCCC;\n    border-radius: 50%;\n    box-shadow:\n    #CCCCCC 65px -15px 0 -5px,\n    #CCCCCC 25px -25px,\n    #CCCCCC 30px 10px,\n    #CCCCCC 60px 15px 0 -10px,\n    #CCCCCC 85px 5px 0 -5px;\n    display: block;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 427px;\n    top: 70px;\n}\n.rainy:after {\n    animation: rainy_shadow 5s ease-in-out infinite 1s;\n    background: #000000;\n    border-radius: 50%;\n    content: '';\n    height: 15px;\n    width: 120px;\n    opacity: 0.2;\n    position: absolute;\n    left: 5px;\n    bottom: -60px;\n    transform: scale(.7);\n}\n.rainy:before {\n    animation: rainy_rain .7s infinite linear;\n    content: '';\n    background: #CCCCCC;\n    border-radius: 50%;\n    display: block;\n    height: 6px;\n    width: 3px;\n    opacity: 0.3;\n    transform: scale(.9);\n}\n@keyframes rainy {\n    50% { transform: translateY(-20px); }\n}\n@keyframes rainy_shadow {\n    50% { transform: translateY(20px) scale(1); opacity: 0.05; }\n}\n@keyframes rainy_rain {\n    0% {\n        box-shadow:\n        rgba(0,0,0,0) 30px 30px,\n        rgba(0,0,0,0) 40px 40px,\n        #000 50px 75px,\n        #000 55px 50px,\n        #000 70px 100px,\n        #000 80px 95px,\n        #000 110px 45px,\n        #000 90px 35px;\n    }\n    25% {\n        box-shadow:\n        #000 30px 45px,\n        #000 40px 60px,\n        #000 50px 90px,\n        #000 55px 65px,\n        rgba(0,0,0,0) 70px 120px,\n        rgba(0,0,0,0) 80px 120px,\n        #000 110px 70px,\n        #000 90px 60px;\n    }\n    26% {\n        box-shadow:\n        #000 30px 45px,\n        #000 40px 60px,\n        #000 50px 90px,\n        #000 55px 65px,\n        rgba(0,0,0,0) 70px 40px,\n        rgba(0,0,0,0) 80px 20px,\n        #000 110px 70px,\n        #000 90px 60px;\n    }\n    50% {\n        box-shadow:\n        #000 30px 70px,\n        #000 40px 80px,\n        rgba(0,0,0,0) 50px 100px,\n        #000 55px 80px,\n        #000 70px 60px,\n        #000 80px 45px,\n        #000 110px 95px,\n        #000 90px 85px;\n    }\n    51% {\n        box-shadow:\n        #000 30px 70px,\n        #000 40px 80px,\n        rgba(0,0,0,0) 50px 45px,\n        #000 55px 80px,\n        #000 70px 60px,\n        #000 80px 45px,\n        #000 110px 95px,\n        #000 90px 85px;\n    }\n    75% {\n        box-shadow:\n        #000 30px 95px,\n        #000 40px 100px,\n        #000 50px 60px,\n        rgba(0,0,0,0) 55px 95px,\n        #000 70px 80px,\n        #000 80px 70px,\n        rgba(0,0,0,0) 110px 120px,\n        rgba(0,0,0,0) 90px 110px;\n    }\n    76% {\n        box-shadow:\n        #000 30px 95px,\n        #000 40px 100px,\n        #000 50px 60px,\n        rgba(0,0,0,0) 55px 35px,\n        #000 70px 80px,\n        #000 80px 70px,\n        rgba(0,0,0,0) 110px 25px,\n        rgba(0,0,0,0) 90px 15px;\n    }\n    100% {\n        box-shadow:\n        rgba(0,0,0,0) 30px 120px,\n        rgba(0,0,0,0) 40px 120px,\n        #000 50px 75px,\n        #000 55px 50px,\n        #000 70px 100px,\n        #000 80px 95px,\n        #000 110px 45px,\n        #000 90px 35px;\n    }\n}\n\n\n/* RAINBOW */\n.rainbow {\n    animation: rainbow 5s ease-in-out infinite;\n    border-radius: 170px 0 0 0;\n    box-shadow:\n    #FB323C -2px -2px 0 1px,\n    #F99716 -4px -4px 0 3px,\n    #FEE124 -6px -6px 0 5px,\n    #AFDF2E -8px -8px 0 7px,\n    #6AD7F8 -10px -10px 0 9px,\n    #60B1F5 -12px -12px 0 11px,\n    #A3459B -14px -14px 0 13px;\n    height: 70px;\n    width: 70px;\n    margin-left: -40px;\n    position: absolute;\n    left: 610px;\n    top: 71px;\n    transform: rotate(40deg);\n}\n.rainbow:after {\n    animation: rainbow_shadow 5s ease-in-out infinite;\n    background: #000000;\n    border-radius: 50%;\n    content: '';\n    opacity: 0.2;\n    height: 15px;\n    width: 120px;\n    position: absolute;\n    bottom: -23px;\n    left: 17px;\n    transform: rotate(-40deg);\n    transform-origin: 50% 50%;\n}\n@keyframes rainbow {\n    50% { transform: rotate(50deg); }\n}\n@keyframes rainbow_shadow {\n    50% { transform:  rotate(-50deg) translate(10px) scale(.7); opacity: 0.05; }\n}\n\n/* STARRY */\n.starry {\n    animation: starry_star 5s ease-in-out infinite;\n    background: #fff;\n    border-radius: 50%;\n    box-shadow:\n    #FFFFFF 26px 7px 0 -1px,\n    rgba(255,255,255,0.1) -36px -19px 0 -1px,\n    rgba(255,255,255,0.1) -51px -34px 0 -1px,\n    #FFFFFF -52px -62px 0 -1px,\n    #FFFFFF 14px -37px,\n    rgba(255,255,255,0.1) 41px -19px,\n    #FFFFFF 34px -50px,\n    rgba(255,255,255,0.1) 14px -71px 0 -1px,\n    #FFFFFF 64px -21px 0 -1px,\n    rgba(255,255,255,0.1) 32px -85px 0 -1px,\n    #FFFFFF 64px -90px,\n    rgba(255,255,255,0.1) 60px -67px 0 -1px,\n    #FFFFFF 34px -127px,\n    rgba(255,255,255,0.1) -26px -103px 0 -1px;\n    height: 4px;\n    width: 4px;\n    margin-left: -10px;\n    opacity: 1;\n    position: absolute;\n    left: 777px;\n    top: 150px;\n}\n.starry:after {\n    animation: starry 5s ease-in-out infinite;\n    border-radius: 50%;\n    box-shadow: #FFFFFF -25px 0;\n    content: '';\n    height: 100px;\n    width: 100px;\n    position: absolute;\n    top: -106px;\n    transform: rotate(-5deg);\n    transform-origin: 0 50%;\n}\n\n@keyframes starry {\n    50% { transform: rotate(10deg); }\n}\n@keyframes starry_star {\n    50% {\n        box-shadow:\n        rgba(255,255,255,0.1) 26px 7px 0 -1px,\n        #FFFFFF -36px -19px 0 -1px,\n        #FFFFFF -51px -34px 0 -1px,\n        rgba(255,255,255,0.1) -52px -62px 0 -1px,\n        rgba(255,255,255,0.1) 14px -37px,\n        #FFFFFF 41px -19px,\n        rgba(255,255,255,0.1) 34px -50px,\n        #FFFFFF 14px -71px 0 -1px,\n        rgba(255,255,255,0.1) 64px -21px 0 -1px,\n        #FFFFFF 32px -85px 0 -1px,\n        rgba(255,255,255,0.1) 64px -90px,\n        #FFFFFF 60px -67px 0 -1px,\n        rgba(255,255,255,0.1) 34px -127px,\n        #FFFFFF -26px -103px 0 -1px;\n    }\n}\n\n/* STORMY */\n.stormy {\n    animation: stormy 5s ease-in-out infinite;\n    background: #222222;\n    border-radius: 50%;\n    box-shadow:\n    #222222 65px -15px 0 -5px,\n    #222222 25px -25px,\n    #222222 30px 10px,\n    #222222 60px 15px 0 -10px,\n    #222222 85px 5px 0 -5px;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 947px;\n    top: 70px;\n}\n.stormy:after {\n    animation: stormy_shadow 5s ease-in-out infinite;\n    background: #000;\n    border-radius: 50%;\n    content: '';\n    height: 15px;\n    width: 120px;\n    opacity: 0.2;\n    position: absolute;\n    left: 5px;\n    bottom: -60px;\n    transform: scale(.7);\n}\n.stormy:before {\n    animation: stormy_thunder 2s steps(1, end) infinite;\n    border-left: 0px solid transparent;\n    border-right: 7px solid transparent;\n    border-top: 43px solid yellow;\n    box-shadow: yellow -7px -32px;\n    content: '';\n    display: block;\n    height: 0;\n    width: 0;\n    position: absolute;\n    left: 57px;\n    top: 70px;\n    transform: rotate(14deg);\n    transform-origin: 50% -60px;\n}\n@keyframes stormy {\n    50% { transform: translateY(-20px); }\n}\n@keyframes stormy_shadow {\n    50% { transform: translateY(20px) scale(1); opacity: 0.05; }\n}\n@keyframes stormy_thunder {\n    0%  { transform: rotate(20deg); opacity:1; }\n    5%  { transform: rotate(-34deg); opacity:1; }\n    10% { transform: rotate(0deg); opacity:1; }\n    15% { transform: rotate(-34deg); opacity:0; }\n}\n\n/* SNOWY */\n.snowy {\n    animation: snowy 5s ease-in-out infinite 1s;\n    background: #FFFFFF;\n    border-radius: 50%;\n    box-shadow:\n    #FFFFFF 65px -15px 0 -5px,\n    #FFFFFF 25px -25px,\n    #FFFFFF 30px 10px,\n    #FFFFFF 60px 15px 0 -10px,\n    #FFFFFF 85px 5px 0 -5px;\n    display: block;\n    height: 50px;\n    width: 50px;\n    margin-left: -60px;\n    position: absolute;\n    left: 1112px;\n    top: 70px;\n}\n.snowy:after {\n    animation: snowy_shadow 5s ease-in-out infinite 1s;\n    background: #000000;\n    border-radius: 50%;\n    content: '';\n    height: 15px;\n    width: 120px;\n    opacity: 0.2;\n    position: absolute;\n    left: 8px;\n    bottom: -60px;\n    transform: scale(.7);\n}\n.snowy:before {\n    animation: snowy_snow 2s infinite linear;\n    content: '';\n    border-radius: 50%;\n    display: block;\n    height: 7px;\n    width: 7px;\n    opacity: 0.8;\n    transform: scale(.9);\n}\n@keyframes snowy {\n    50% { transform: translateY(-20px); }\n}\n@keyframes snowy_shadow {\n    50% { transform: translateY(20px) scale(1); opacity: 0.05; }\n}\n@keyframes snowy_snow {\n    0% {\n        box-shadow:\n        rgba(238,238,238,0) 30px 30px,\n        rgba(238,238,238,0) 40px 40px,\n        #EEEEEE 50px 75px,\n        #EEEEEE 55px 50px,\n        #EEEEEE 70px 100px,\n        #EEEEEE 80px 95px,\n        #EEEEEE 110px 45px,\n        #EEEEEE 90px 35px;\n    }\n    25% {\n        box-shadow:\n        #EEEEEE 30px 45px,\n        #EEEEEE 40px 60px,\n        #EEEEEE 50px 90px,\n        #EEEEEE 55px 65px,\n        rgba(238,238,238,0) 70px 120px,\n        rgba(238,238,238,0) 80px 120px,\n        #EEEEEE 110px 70px,\n        #EEEEEE 90px 60px;\n    }\n    26% {\n        box-shadow:\n        #EEEEEE 30px 45px,\n        #EEEEEE 40px 60px,\n        #EEEEEE 50px 90px,\n        #EEEEEE 55px 65px,\n        rgba(238,238,238,0) 70px 40px,\n        rgba(238,238,238,0) 80px 20px,\n        #EEEEEE 110px 70px,\n        #EEEEEE 90px 60px;\n    }\n    50% {\n        box-shadow:\n        #EEEEEE 30px 70px,\n        #EEEEEE 40px 80px,\n        rgba(238,238,238,0) 50px 100px,\n        #EEEEEE 55px 80px,\n        #EEEEEE 70px 60px,\n        #EEEEEE 80px 45px,\n        #EEEEEE 110px 95px,\n        #EEEEEE 90px 85px;\n    }\n    51% {\n        box-shadow:\n        #EEEEEE 30px 70px,\n        #EEEEEE 40px 80px,\n        rgba(238,238,238,0) 50px 45px,\n        #EEEEEE 55px 80px,\n        #EEEEEE 70px 60px,\n        #EEEEEE 80px 45px,\n        #EEEEEE 110px 95px,\n        #EEEEEE 90px 85px;\n    }\n    75% {\n        box-shadow:\n        #EEEEEE 30px 95px,\n        #EEEEEE 40px 100px,\n        #EEEEEE 50px 60px,\n        rgba(238,238,238,0) 55px 95px,\n        #EEEEEE 70px 80px,\n        #EEEEEE 80px 70px,\n        rgba(238,238,238,0) 110px 120px,\n        rgba(238,238,238,0) 90px 110px;\n    }\n    76% {\n        box-shadow:\n        #EEEEEE 30px 95px,\n        #EEEEEE 40px 100px,\n        #EEEEEE 50px 60px,\n        rgba(238,238,238,0) 55px 35px,\n        #EEEEEE 70px 80px,\n        #EEEEEE 80px 70px,\n        rgba(238,238,238,0) 110px 25px,\n        rgba(238,238,238,0) 90px 15px;\n    }\n    100% {\n        box-shadow:\n        rgba(238,238,238,0) 30px 120px,\n        rgba(238,238,238,0) 40px 120px,\n        #EEEEEE 50px 75px,\n        #EEEEEE 55px 50px,\n        #EEEEEE 70px 100px,\n        #EEEEEE 80px 95px,\n        #EEEEEE 110px 45px,\n        #EEEEEE 90px 35px;\n    }\n}\nbody {\n    font-family: sans-serif;\n    background: #f5f5f5;\n    margin: 0;\n}\n.icons-container {\n    background: linear-gradient(left, #00BBFF, #00BBFF 14.3%, #2EB5E5 14.3%, #2EB5E5 28.6%, #E6E6E6 28.6%, #E6E6E6 42.9%, #F3D166 42.9%, #F3D166 57.2%, #222233 57.2%, #222233 71.5%, #444444 71.5%, #444444 85.8%, #85DB8C 85.8%);\n    transform: scale(.9);\n    width: 1200px;\n    position: absolute;\n    height: 210px;\n    left: 50%;\n    top: 50%;\n    margin: -65px -600px;\n}", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = function () {
	    console.log('Hello!');
	};

/***/ }
/******/ ]);