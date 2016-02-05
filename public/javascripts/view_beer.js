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

	var components = __webpack_require__(1);
	components['bc-developer-bar'] =  __webpack_require__(12);

	// vue
	new Vue({
		el: 'body',
		ready: function() {
			var self = this;
			self.fetchBeer(BEER_ID)
				.then((data) => {
					self.beer = new self.Beer(data);
					return self.fetchComponents(BEER_ID);
				})
				.then((components) => {
					for (var component of components) {
						self.components.push(new self.Component(component));
					}
				})
		},
		data: {
			Beer: __webpack_require__(17), // Beer model
			Component: __webpack_require__(18), // Component model
			beer: {data: {}}, // empty beer object
			components: []
		},
		methods: {
			fetchBeer: function(id) {
				return $.ajax({
					method: 'GET',
					dataType: 'JSON',
					url: '/beers/' + id
				});
			},
			fetchComponents: function(id) {
				var self = this;
				return $.ajax({
					method: 'GET',
					dataType: 'JSON',
					url: '/components/beer/' + id
				})
			}
		},
		components: components
	})

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {};

	var components_context = __webpack_require__(2);
	components_context.keys().forEach(function(file) {
		var component = components_context(file);
		if (component.bc) {
			// Set options if provided by component data from db
			component.ready = function() {
				for (var option in this.options) {
					if (this.component.componentData[option]) {
						this.options[option].value = this.component.componentData[option];
					}
				}
			};
			module.exports[component.bc.directive] = component;
		}
	})

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./bc_color.vue": 3,
		"./bc_developer_bar.vue": 12
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 2;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(4)
	__vue_script__ = __webpack_require__(8)
	__vue_template__ = __webpack_require__(11)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/mads/Google Drive/sites/brewcontrol/vue_components/bc_color.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0787c334&file=bc_color.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bc_color.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-0787c334&file=bc_color.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bc_color.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n\t.bc-color-colorbox {\n\t\t-webkit-box-flex: 1;\n\t\t-webkit-flex: 1;\n\t\t    -ms-flex: 1;\n\t\t        flex: 1;\n\t}\n\t.bc-color-description {\n\t\t-webkit-box-flex: 2;\n\t\t-webkit-flex: 2;\n\t\t    -ms-flex: 2;\n\t\t        flex: 2;\n\t\tpadding: 0 1em 0 1em;\n\t}\n\tbc-color {\n\t\tbackground-color: #6C6D7A;\n\t\tdisplay: inline-block;\n\t}\n", ""]);

	// exports


/***/ },
/* 6 */
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
/* 7 */
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
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

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

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style>
	// 	.bc-color-colorbox {
	// 		flex: 1;
	// 	}
	// 	.bc-color-description {
	// 		flex: 2;
	// 		padding: 0 1em 0 1em;
	// 	}
	// 	bc-color {
	// 		background-color: #6C6D7A;
	// 		display: inline-block;
	// 	}
	// </style>
	//
	// <template lang='jade'>
	// bc-color.bc-component.large
	// 	.bc-color-colorbox(
	// 		v-bind:style="{ backgroundColor: beerColorHex }"
	// 	)
	// 	.bc-color-description(
	// 		v-if="options.hideDescription.value != 'True'"
	// 	)
	// 		h1 Beer color
	// 		p Color description: <b>{{ beerColorDescription }}</b>
	// 		p EBC: <b>{{ beer.data.target_ebc }}</b>
	// </template>
	//
	// <script>

	var BC = __webpack_require__(9);
	var bc = new BC();
	bc.id = 'bc_color';
	bc.name = 'Color';
	bc.directive = 'bc-color';
	bc.options = {
		colorDescription: new bc.Option({
			name: 'Color description',
			id: 'colorDescription'
		}),
		colorHex: new bc.Option({
			name: 'Color (hex value)',
			id: 'colorHex'
		}),
		hideDescription: new bc.Option({
			name: 'Hide description?',
			id: 'hideDescription',
			type: 'Boolean',
			value: false
		})
	};

	exports.default = {
		bc: bc,
		props: ['beer', 'component'],
		data: function data() {
			return {
				colors: __webpack_require__(10), //TODO: this is not good?
				options: bc.optionValues()
			};
		},
		computed: {
			beerColorHex: function beerColorHex() {
				return this.options.colorHex.value || "#" + this.calculatedColor().colorCode;
			},
			beerColorDescription: function beerColorDescription() {
				return this.options.colorDescription.value || this.calculatedColor().colorDescription;
			}
		},
		methods: {
			EbcToSrm: function EbcToSrm(ebc) {
				return ebc * 0.508;
			},
			calculatedColor: function calculatedColor() {
				var colorSrm = this.EbcToSrm(this.beer.data.target_ebc),
				    closestValue = 100000;
				for (var value in this.colors) {
					if (Math.abs(parseFloat(value) - parseFloat(colorSrm)) < Math.abs(parseFloat(closestValue) - parseFloat(colorSrm))) {
						closestValue = value;
					}
				}
				return this.colors[closestValue];
			}
		}
	};
	// </script>
	//

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function() {
		this.optionValues = function() {
			var obj = {};
			for (var option in this.options) {
				obj[option] = {};
				obj[option].value = '';
			}
			return obj;
		}
		this.options = {},
		this.Option = function(obj) {
			obj = obj || {};
			return {
				name: obj.name || '',
				id: obj.id || '',
				type: obj.type || 'String',
				value: obj.value || ''
			}
		}
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = {
		0	: { colorCode: "ffffff", colorDescription: "White"},
		0.5	: { colorCode: "fbf0cb", colorDescription: "Champagne"},
		1	: { colorCode: "f7e1a1", colorDescription: "Candleglow"},
		1.5	: { colorCode: "f4d380", colorDescription: "Broadway Lights"},
		2	: { colorCode: "f0c566", colorDescription: "Cream Can"},
		2.5	: { colorCode: "edb950", colorDescription: "Casablanca"},
		3	: { colorCode: "e9ad3f", colorDescription: "Tulip Tree"},
		3.5	: { colorCode: "e5a231", colorDescription: "Fire Bush"},
		4	: { colorCode: "e19726", colorDescription: "Buttercup"},
		4.5	: { colorCode: "dd8d1d", colorDescription: "Zest"},
		5	: { colorCode: "d98416", colorDescription: "Golden Bell"},
		5.5	: { colorCode: "d57b11", colorDescription: "Meteor"},
		6	: { colorCode: "d1730c", colorDescription: "Dark Goldenrod"},
		6.5	: { colorCode: "cd6c08", colorDescription: "Indochine"},
		7	: { colorCode: "c86505", colorDescription: "Alloy Orange"},
		7.5	: { colorCode: "c45e03", colorDescription: "Tawny"},
		8	: { colorCode: "c05801", colorDescription: "Rose of Sharon"},
		8.5	: { colorCode: "bc5200", colorDescription: "Ruddy Brown"},
		9	: { colorCode: "b74d00", colorDescription: "Mahogany"},
		9.5	: { colorCode: "b34800", colorDescription: "Fire"},
		10	: { colorCode: "af4300", colorDescription: "Orange"},
		10.5	: { colorCode: "ab3f00", colorDescription: "Dark Orange"},
		11	: { colorCode: "a73b00", colorDescription: "Chinese Red"},
		11.5	: { colorCode: "a33700", colorDescription: "Quora"},
		12	: { colorCode: "9f3400", colorDescription: "Sangria"},
		12.5	: { colorCode: "9b3000", colorDescription: "Dark Orange-Red"},
		13	: { colorCode: "972d00", colorDescription: "Totem Pole"},
		14	: { colorCode: "8f2800", colorDescription: "Peru Tan"},
		15	: { colorCode: "882300", colorDescription: "Red Beech"},
		16	: { colorCode: "811f00", colorDescription: "Maroon"},
		17	: { colorCode: "7b1b00", colorDescription: "Pueblo"},
		18	: { colorCode: "741800", colorDescription: "Cedar Wood"},
		19	: { colorCode: "6e1500", colorDescription: "Barn Red"},
		20	: { colorCode: "681200", colorDescription: "Rosewood"},
		21	: { colorCode: "631000", colorDescription: "Dark Red"},
		22	: { colorCode: "5e0e00", colorDescription: "Red Oxide"},
		23	: { colorCode: "590c00", colorDescription: "Rustic Red"},
		24	: { colorCode: "540b00", colorDescription: "Burnt Maroon"},
		25	: { colorCode: "500900", colorDescription: "Pheasant Red"},
		26	: { colorCode: "4c0800", colorDescription: "Brown Pod"},
		27	: { colorCode: "480700", colorDescription: "Temptress"},
		28	: { colorCode: "440600", colorDescription: "Dark Sienna"},
		29	: { colorCode: "410500", colorDescription: "Black Bean"},
		30	: { colorCode: "3d0500", colorDescription: "Dark Bronze"},
		31	: { colorCode: "3a0400", colorDescription: "Chocolate"},
		32	: { colorCode: "370400", colorDescription: "Autumn Maple"},
		33	: { colorCode: "340300", colorDescription: "Dark Cabernet"},
		34	: { colorCode: "320300", colorDescription: "Titian Maroon"},
		35	: { colorCode: "2f0200", colorDescription: "Sepia Black"},
		36	: { colorCode: "2d0200", colorDescription: "Dark Gold Wing"},
		37	: { colorCode: "2a0200", colorDescription: "Zinnwaldite Brown"},
		38	: { colorCode: "280100", colorDescription: "Diesel"},
		39	: { colorCode: "260100", colorDescription: "Licorice"},
		40	: { colorCode: "240100", colorDescription: "Black"},
		50	: { colorCode: "160000", colorDescription: "Smoky Black"},
		65	: { colorCode: "0d0000", colorDescription: "Coal Black"},
		80	: { colorCode: "000000", colorDescription: "Moonlight Black"}
	}

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<bc-color class=\"bc-component large\"><div v-bind:style=\"{ backgroundColor: beerColorHex }\" class=\"bc-color-colorbox\"></div><div v-if=\"options.hideDescription.value != 'True'\" class=\"bc-color-description\"><h1>Beer color</h1><p>Color description: <b>{{ beerColorDescription }}</b></p><p>EBC: <b>{{ beer.data.target_ebc }}</b></p></div></bc-color>";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(13)
	__vue_script__ = __webpack_require__(15)
	__vue_template__ = __webpack_require__(16)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "/Users/mads/Google Drive/sites/brewcontrol/vue_components/bc_developer_bar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(14);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36f2c6be&file=bc_developer_bar.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bc_developer_bar.vue", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/vue-loader/lib/style-rewriter.js?id=_v-36f2c6be&file=bc_developer_bar.vue!./../node_modules/vue-loader/lib/selector.js?type=style&index=0!./bc_developer_bar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, "\n", ""]);

	// exports


/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// <style>
	// </style>
	//
	// <template lang='jade'>
	// bc-developer-bar
	// </template>
	//
	// <script>
	exports.default = {
		props: ['beer'],
		name: 'test',
		data: function data() {}
	};
	// </script>
	//

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<bc-developer-bar></bc-developer-bar>";

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = function(data) {
		var self = this;
		this.data = (!data) ? false : data;
		this.save = function() {
			return $.ajax({
				method: 'PUT',
				url: '/beers/',
				data: self.data
			}).done(function(beer) {
				console.log("saved beer", beer);
				if (beer) self.data = beer;
			})
		}
		this.delete = function() {
			return $.ajax({
				method: 'DELETE',
				url: '/beers/',
				data: self.data
			}).done(function() {
				self.data = false;
			})
		}
	}

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(data) {
		var self = this;
		self.data = data || false;
		self.type = data.type || false;

		self.hidden = true;

		self.parseJSON = function(str) {
			try {
				var obj = JSON.parse(str);
				return obj;
			}
			catch(error) {
				console.log("error when parsing component data: ", error);
				return {};
			}
		}

		self.componentData = (!self.data.data) ? false : self.parseJSON(self.data.data);

		self.save = function(event, useComponentData) {
			if (useComponentData) self.data.data = (self.componentData) ? JSON.stringify(self.componentData) : "";
			return $.ajax({
				method: 'PUT',
				url: '/components/',
				data: self.data
			}).done(function(component) {
				console.log("saved component", component);
				self.hidden = true;
				if (component) {
					self.data = component;
					self.componentData = (!self.data.data) ? false : self.parseJSON(self.data.data);
				}
			})
		}
		self.saveComponentData = function(event) {
			return self.save(event, true);
		}
		self.delete = function() {
			return $.ajax({
				method: 'DELETE',
				url: '/components/',
				data: self.data
			}).done(function(success) {
				self.data = false;
			})
		}
	}

/***/ }
/******/ ]);