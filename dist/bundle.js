/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \":root {\\r\\n    box-sizing: border-box;\\r\\n    --main-bg-color: #3F3E3C;\\r\\n    --text-yellow: #FFD60A;\\r\\n    --text-title: #F2F2F2;\\r\\n    --text-faded: #828282;\\r\\n    --text-description: #e0e0e0;\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n    box-sizing: inherit;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n}\\r\\n\\r\\n.wrapper {\\r\\n    position: relative;\\r\\n    margin: 0 auto;\\r\\n    max-width: 1280px;\\r\\n    max-height: 720px;\\r\\n    height: 100vh;\\r\\n    background-color: var(--main-bg-color);\\r\\n    background-image: url(/img/back.png);\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\n/***** PAGE ELEMENTS ******/\\r\\n\\r\\n\\r\\n\\r\\n.info__btn {\\r\\n    position: absolute;\\r\\n    top: 4rem;\\r\\n    right: 3.2rem;\\r\\n}\\r\\n\\r\\n\\r\\n/***** LOGO AND TITLE ****/\\r\\n\\r\\n\\r\\n.main__logo__container {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    justify-content: center;\\r\\n    margin: 6rem auto 0 auto;\\r\\n    transition: all 1s;\\r\\n}\\r\\n\\r\\n.main__logo__container img {\\r\\n    width: 93px;\\r\\n    height: 93px;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n.main__logo__container__move {\\r\\n    transform: translate(-34.5rem) translateY(-4rem);\\r\\n\\r\\n}\\r\\n\\r\\n.title__logo {\\r\\n    display: none;\\r\\n    font-family: Palanquin;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 3rem;\\r\\n    line-height: 92%;\\r\\n    letter-spacing: 0.08em;\\r\\n    text-align: center;\\r\\n    margin: 1.2rem auto;\\r\\n    color: var(--text-title);\\r\\n}\\r\\n\\r\\n.title__logo__tagline {\\r\\n    display: none;\\r\\n    font-family: Palanquin;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 1.3rem;\\r\\n    line-height: 92%;\\r\\n    letter-spacing: 0.08em;\\r\\n    text-align: center;\\r\\n    margin: -1rem auto 0 auto;\\r\\n    color: var(--text-yellow);\\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n/******  SEARCH FORM ELEMENTS*****/\\r\\n\\r\\n.search__form {\\r\\n    margin: 0 auto;\\r\\n    width: 35rem;\\r\\n    position: relative;\\r\\n    transition: all 1s;\\r\\n}\\r\\n\\r\\n.search__form__up {\\r\\n    transform: translateY(-9rem);\\r\\n}\\r\\n\\r\\n.search__btn {\\r\\n\\r\\n    position: absolute;\\r\\n    right: 0.5rem;\\r\\n    top: 0.3rem;\\r\\n    padding: 0.5rem;\\r\\n\\r\\n    text-decoration: none;\\r\\n    cursor: pointer;\\r\\n    border: none;\\r\\n    -webkit-appearance: none;\\r\\n    outline: none;\\r\\n    font: inherit;\\r\\n    color: inherit;\\r\\n    background: none\\r\\n}\\r\\n\\r\\n.search__form input {\\r\\n    position: relative;\\r\\n    width: 100%;\\r\\n    height: 3.5rem;\\r\\n    background-color: #2D2D2D;\\r\\n    opacity: 70%;\\r\\n    padding: 0.9rem 0 0 1rem;\\r\\n    border-top-style: hidden;\\r\\n    border-right-style: hidden;\\r\\n    border-left-style: hidden;\\r\\n    border-bottom-style: hidden;\\r\\n\\r\\n    caret-color: var(--text-yellow);\\r\\n}\\r\\n\\r\\n.search__form input::-webkit-input-placeholder {\\r\\n    top: 10px;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: 100;\\r\\n    font-size: 24px;\\r\\n    line-height: 28px;\\r\\n    letter-spacing: 0.1rem;\\r\\n    color: #4F4F4F;\\r\\n    \\r\\n}\\r\\n\\r\\n.search__form input::-moz-placeholder {\\r\\n    top: 10px;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: 100;\\r\\n    font-size: 24px;\\r\\n    line-height: 28px;\\r\\n    letter-spacing: 0.1rem;\\r\\n    color: #4F4F4F;\\r\\n}\\r\\n\\r\\n.search__form input:-ms-input-placeholder {\\r\\n    top: 10px;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: 100;\\r\\n    font-size: 24px;\\r\\n    line-height: 28px;\\r\\n    letter-spacing: 0.1rem;\\r\\n    color: #4F4F4F;\\r\\n}\\r\\n\\r\\n.search__form input:-moz-placeholder {\\r\\n    top: 10px;\\r\\n    font-family: Roboto;\\r\\n    font-style: normal;\\r\\n    font-weight: 100;\\r\\n    font-size: 24px;\\r\\n    line-height: 28px;\\r\\n    letter-spacing: 0.1rem;\\r\\n    color: #4F4F4F;\\r\\n\\r\\n    \\r\\n}\\r\\n\\r\\n\\r\\n\\r\\n.dice__roll {\\r\\n    animation: 1s ease-in-out 0s rolling__dice;\\r\\n}\\r\\n\\r\\n@keyframes rolling__dice {\\r\\n\\r\\n    100% {\\r\\n        transform: rotate(360deg);\\r\\n    }\\r\\n\\r\\n}\\r\\n\\r\\n/****** MOVIE INFO *******/\\r\\n\\r\\n\\r\\n.container__search__results {\\r\\n    display: grid;\\r\\n    grid-template-columns: 1fr 1fr;\\r\\n    grid-template-rows: 1fr;\\r\\n    grid-column-gap: 2rem;\\r\\n    margin: 0 2rem 0 2rem;\\r\\n}\\r\\n\\r\\n.movie__more {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.movie__poster {\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    justify-items: center;\\r\\n}\\r\\n\\r\\n.movie__info {\\r\\n    justify-self: start;\\r\\n    align-items: end;\\r\\n}\\r\\n\\r\\n.movie__poster img {\\r\\n    height: 350px;\\r\\n    width: auto;\\r\\n    margin-left: auto;\\r\\n}\\r\\n\\r\\n.movie__info__year {\\r\\n    font-family: Karma;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 3.5rem;\\r\\n    line-height: 5rem;\\r\\n    margin: 0 auto;\\r\\n    color: var(--text-faded);\\r\\n}\\r\\n\\r\\n.movie__info__length {\\r\\n    font-family: Karma;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 1.8rem;\\r\\n    line-height: 2.5rem;\\r\\n    margin: 0 auto 1rem auto;\\r\\n    color: var(--text-faded);\\r\\n}\\r\\n\\r\\n.movie__info__rating {\\r\\n    font-family: Karma;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 1.5rem;\\r\\n    line-height: 2rem;\\r\\n    margin: 0 auto 1.5rem auto;\\r\\n    color: var(--text-faded);\\r\\n}\\r\\n\\r\\n.rating__star {\\r\\n    display: inline-block;\\r\\n    width: 18px;\\r\\n    height: 18px;\\r\\n    /* background-image: url(/img/star.jpg); */\\r\\n}\\r\\n\\r\\n.movie__info__title {\\r\\n    font-family: Palanquin;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 3rem;\\r\\n    line-height: 5.5rem;\\r\\n    letter-spacing: 0.1rem;\\r\\n    margin: 0 auto 0.2rem auto;\\r\\n    color: var(--text-title);\\r\\n}\\r\\n\\r\\n.line {\\r\\n    display: flex;\\r\\n    height: 1px;\\r\\n    max-width: 470px;\\r\\n    background-color: var(--text-yellow);\\r\\n}\\r\\n\\r\\n.movie__info__description {\\r\\n    font-family: Karma;\\r\\nfont-style: normal;\\r\\nfont-weight: normal;\\r\\nfont-size: 1.2rem;\\r\\nline-height: 1.8rem;\\r\\nmargin: 2rem auto 0 auto;\\r\\ncolor: var(--text-description);\\r\\n}\\r\\n\\r\\n.movie__info__more {\\r\\n    font-family: Karma;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 1.2rem;\\r\\n    line-height: 2rem;\\r\\n    color: var(--text-yellow);\\r\\n    text-decoration: none;\\r\\n}\\r\\n\\r\\n.invisible {\\r\\n    display: none;\\r\\n}\\r\\n\\r\\n.container__carousel {\\r\\n    margin-top: -3rem;\\r\\n}\\r\\n\\r\\n\\r\\n.text__stripe {\\r\\n    font-family: Karma;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 24px;\\r\\n    line-height: 92%;\\r\\n    letter-spacing: 0.08em;\\r\\n    white-space: nowrap;\\r\\n\\r\\n    position: absolute;\\r\\n    bottom: 2rem;\\r\\n    color: #4F4F4F;\\r\\n}\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/style.css?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });