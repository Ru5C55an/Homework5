/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks sync recursive \\.(png|gif|svg|jpg)$":
/*!******************************************!*\
  !*** ./blocks sync \.(png|gif|svg|jpg)$ ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./logo/logo.svg": "./blocks/logo/logo.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./blocks sync recursive \\.(png|gif|svg|jpg)$";

/***/ }),

/***/ "./blocks/logo/logo.svg":
/*!******************************!*\
  !*** ./blocks/logo/logo.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/logo.svg");

/***/ }),

/***/ "./img sync recursive \\.(png|gif|svg|jpg)$":
/*!***************************************!*\
  !*** ./img sync \.(png|gif|svg|jpg)$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./img sync recursive \\.(png|gif|svg|jpg)$";

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_2__);

global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
global.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;



__webpack_require__("./blocks sync recursive \\.(png|gif|svg|jpg)$");

__webpack_require__("./img sync recursive \\.(png|gif|svg|jpg)$");

jquery__WEBPACK_IMPORTED_MODULE_0___default()('#btn-tooltip').tooltip();
var firstbutton = document.getElementById('first');
var secondbutton = document.getElementById('second');
firstbutton.addEventListener("click", function () {
  var animals = {
    text: "Животные",
    childs: [{
      text: "Млекопитающие",
      childs: [{
        text: "Коровы"
      }, {
        text: "Ослы"
      }, {
        text: "Собаки"
      }, {
        text: "Тигры"
      }]
    }, {
      text: "Другие",
      childs: [{
        text: "Змеи"
      }, {
        text: "Птицы"
      }, {
        text: "Ящерицы"
      }]
    }]
  };
  var fish = {
    text: "Рыбы",
    childs: [{
      text: "Аквариумные",
      childs: [{
        text: "Гуппи"
      }, {
        text: "Скалярии"
      }]
    }, {
      text: "Морские",
      childs: [{
        text: "Морская форель"
      }]
    }]
  };
  var tree = document.createElement("ul");
  formation(tree, animals);
  formation(tree, fish);
  var body = document.getElementsByTagName("body");
  body[0].appendChild(tree);

  function formation(top, block) {
    var current = document.createElement("li");
    current.innerHTML = block.text;

    if (block.hasOwnProperty("childs")) {
      var child = document.createElement("ul");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = block.childs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var i = _step.value;
          formation(child, i);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      current.appendChild(child);
    }

    top.appendChild(current);
  }

  function recursion(parent_node) {
    console.log(parent_node);
    var s = parent_node.children;

    if (s.length > 0) {
      for (var i = 0; i < s.length; i++) {
        recursion(s[i]);
      }
    }
  }

  recursion(document.getElementById("html"));
});
secondbutton.addEventListener("click", function () {
  var animals = {
    text: "Животные",
    children: [{
      text: "Млекопитающие",
      children: [{
        text: "Коровы"
      }, {
        text: "Ослы"
      }, {
        text: "Собаки"
      }, {
        text: "Тигры"
      }]
    }, {
      text: "Другие",
      children: [{
        text: "Змеи"
      }, {
        text: "Птицы"
      }, {
        text: "Ящерицы"
      }]
    }]
  };
  var fish = {
    text: "Рыбы",
    children: [{
      text: "Аквариумные",
      children: [{
        text: "Гуппи"
      }, {
        text: "Скалярии"
      }]
    }, {
      text: "Морские",
      children: [{
        text: "Морская форель"
      }]
    }]
  };
  var all = [animals, fish];
  var root = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#root');

  var generate = function generate(structure, parent) {
    parent.append('<ul></ul>');
    if (!structure) return;

    for (var i = 0; i < structure.length; i++) {
      var contains = structure[i].children ? "[".concat(structure[i].children.length, "]") : '';
      parent.children("ul").append("<li><span>".concat(structure[i].text, "</span> <span class=\"count\"></span></li>"));
      generate(structure[i].children, parent.children("ul").children('li:last-child'));
    }
  };

  var count = function count(element) {
    return element.find('li').length;
  };

  generate(all, root);
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('li').each(function () {
    var counter = count(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children('.count').addClass(counter > 0 ? 'red' : 'gray').html("[".concat(counter, "]"));
  });
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('li').click(function () {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children().not('span').slideToggle();
    event.stopPropagation();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./js/index.js ./scss/style.scss @babel/polyfill ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/index.js */"./js/index.js");
__webpack_require__(/*! ./scss/style.scss */"./scss/style.scss");
module.exports = __webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map