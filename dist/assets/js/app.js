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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("new Swiper('.slider__image', {\r\n\r\n    pagination: {\r\n        el: \".swiper-pagination\",\r\n        clickable: true,\r\n        dynamicBullets: true\r\n    },\r\n\r\n    keyboard: {\r\n        enabled: true,\r\n        onlyInViewport: true,\r\n        pageUpDown: true\r\n    },\r\n\r\n    mousewheel: {\r\n        sensitivity: 1,\r\n        eventsTarget: \".slider__image\" // Если больше одного слайдера, то стираем эту строку кода\r\n    },\r\n\r\n    breakpoints: {\r\n        250: {\r\n            slidesPerView: 1,\r\n        },\r\n\r\n        480: {\r\n            slidesPerView: 2,\r\n        },\r\n\r\n        992: {\r\n            slidesPerView: 3,\r\n        },\r\n\r\n        1200: {\r\n            slidesPerView: 4,\r\n        },\r\n\r\n        1600: {\r\n            slidesPerView: 5,\r\n        }\r\n    },\r\n\r\n    watchOverflow: true,\r\n\r\n    spaceBetween: 30,\r\n\r\n    slidesPerGroup: 1,\r\n\r\n    initialSlide: 0, //Слайд, с которого все начинается*(начинается с 0)\r\n\r\n    freeMode: true,\r\n\r\n    autoplay: {\r\n        delay: 1000,\r\n        stopOnLastSlide: true,\r\n        disableOnInteraction: true,\r\n    },\r\n\r\n    speed: 800,\r\n\r\n});\r\n\r\n/*wow = new WOW(\r\n{\r\nboxClass:     'wow',\r\nanimateClass: 'animated',\r\noffset:       0,\r\nmobile:       true,\r\nlive:         true\r\n}\r\n)\r\nwow.init();*/\r\n\r\nvar navbar = document.getElementById('nav');\r\nvar navToggle = document.getElementById('navToggle');\r\nvar headerLink = document.getElementsByClassName('nav__link');\r\nvar container = document.getElementsByClassName('container');\r\n\r\nnavToggle.addEventListener('click', event => {\r\n\r\n    if(navToggle.classList.contains('shown')) {\r\n        navbar.style.display = \"none\";\r\n        navToggle.classList.remove('shown');\r\n    }\r\n    else {\r\n        navToggle.classList.add('shown');\r\n        navbar.style.display = \"flex\";\r\n    }\r\n\r\n});\r\n\r\nfor(let i=0; i < container.length; i++) {\r\n    container[i].addEventListener('click', event => {\r\n        if(navToggle.classList.contains('shown')) {\r\n            navbar.style.display = \"none\";\r\n            navToggle.classList.remove('shown');\r\n        }\r\n    });\r\n}\r\n\r\n\r\nfor(let i=0; i < headerLink.length; i++) {\r\n    headerLink[i].addEventListener(\"click\", function(e) {\r\n        e.preventDefault();\r\n\r\n        var $this = e.currentTarget;\r\n        var id = $this.getAttribute('data-scroll');\r\n        var scrollTarget = document.getElementById(id);\r\n        var topOffset;\r\n\r\n        if(document.body.clientWidth <= 1000) {\r\n            topOffset = document.querySelector('.nav').offsetHeight - 60;\r\n        }\r\n        else {\r\n           topOffset = document.querySelector('.nav').offsetHeight - 100;\r\n        }\r\n\r\n        const elementPosition = scrollTarget.getBoundingClientRect().top;\r\n        const offsetPosition = elementPosition - topOffset;\r\n\r\n        window.scrollBy({\r\n            top: offsetPosition,\r\n            behavior: 'smooth'\r\n        });\r\n\r\n        if(document.body.clientWidth <= 700) {\r\n            navbar.style.display = \"none\";\r\n            navToggle.classList.remove('shown');\r\n        }\r\n\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });