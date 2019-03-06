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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./CSS/style.scss":
/*!************************!*\
  !*** ./CSS/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../CSS/style.scss */ "./CSS/style.scss");

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("ok");

    ready(); //burger menu Functionality

    headerCarousel(); //header automatic slideshow fuctionality

    imgSlider(); //imgsectionslider

    naklik();

    function headerCarousel() {
        var header = document.querySelector("header");

        //automatic slideshow - change background image every 7 sec - without loading background images

        if (header.classList.value.indexOf("debil") !== -1) {
            header.classList.remove("debil");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        } else if (header.classList.value.indexOf("backgroundChange backgroundChange1 backgroundChange2 backgroundChange3") !== -1) {
            header.classList.remove("backgroundChange3");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        } else if (header.classList.value.indexOf("backgroundChange backgroundChange1 backgroundChange2") !== -1) {
            header.classList.remove("backgroundChange2");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        } else if (header.classList.value.indexOf("backgroundChange backgroundChange1") !== -1) {
            header.classList.remove("backgroundChange1");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        } else if (header.classList.value.indexOf("backgroundChange") !== -1) {
            header.classList.add("backgroundChange1");
            header.classList.add("backgroundChange2");
            header.classList.add("backgroundChange3");
            // console.log(header);
            setTimeout(headerCarousel, 7000);
        }
    }

    function ready() {
        var menuTab = document.querySelector(".menu-tab");
        var menuHide = document.querySelector(".menu-hide");
        var menuStrip = document.querySelector(".menuStrip");

        console.log(menuTab);
        console.log(menuHide);
        console.log(menuStrip);

        menuTab.addEventListener("click", function () {
            menuHide.classList.toggle("show");
            menuTab.classList.toggle("active");
        });

        menuStrip.addEventListener("click", function () {
            menuHide.classList.removeClass("show");
            menuTab.classList.removeClass("active");
        });
    }

    function imgSlider() {
        var nextPicture = document.querySelector(".nav");
        var prevPicture = document.querySelector(".nav1");
        var listLi = document.querySelectorAll(".imgList");

        var counter = 0;
        listLi[counter].classList.remove('hidden');

        nextPicture.addEventListener("click", function () {
            listLi[counter].classList.add('hidden');
            if (counter >= listLi.length - 1) {
                counter = 0;
            } else {
                counter++;
            }
            listLi[counter].classList.remove('hidden');
        });

        prevPicture.addEventListener("click", function () {
            listLi[counter].classList.add('hidden');
            if (counter === 0) {
                counter = listLi.length - 1;
            } else {
                counter--;
            }
            listLi[counter].classList.remove('hidden');
        });
    }

    function naklik() {
        var napis = document.querySelector(".helloworldbox");
        console.log(napis);
        napis.addEventListener("click", function () {
            console.log("debil");
        });
    }
});

/***/ })

/******/ });
//# sourceMappingURL=home.out.js.map