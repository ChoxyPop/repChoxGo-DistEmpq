/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/animated-line.css":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/animated-line.css ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.animated-line-container {
  position: relative;
  overflow: hidden;
  height: 20px;
  margin-left: -32px;
  margin-right: -32px;
}

.animated-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 300%;
  height: 100%;
  background: repeating-linear-gradient(
    -45deg,
    var(--primary-color),
    var(--primary-color) 10px,
    var(--card-background-color) 10px,
    var(--card-background-color) 20px
  );
  animation: move-line 80s linear infinite;
}

@keyframes move-line {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/animated-line.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ;;;;;;GAMC;EACD,wCAAwC;AAC1C;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,2BAA2B;EAC7B;AACF","sourcesContent":[".animated-line-container {\n  position: relative;\n  overflow: hidden;\n  height: 20px;\n  margin-left: -32px;\n  margin-right: -32px;\n}\n\n.animated-line {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 300%;\n  height: 100%;\n  background: repeating-linear-gradient(\n    -45deg,\n    var(--primary-color),\n    var(--primary-color) 10px,\n    var(--card-background-color) 10px,\n    var(--card-background-color) 20px\n  );\n  animation: move-line 80s linear infinite;\n}\n\n@keyframes move-line {\n  from {\n    transform: translateX(0%);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/background-manager.css":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/background-manager.css ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.background-manager {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/background-manager.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,UAAU;EACV,6BAA6B;EAC7B,oBAAoB;EACpB,UAAU;AACZ","sourcesContent":[".background-manager {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  pointer-events: none;\n  z-index: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/badge.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/badge.css ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.badge {
  cursor: pointer;
  touch-action: manipulation;
}

.badge.circle {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  z-index: 10;
}

.badge.circle .pulse-element {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  animation: pulse 1.5s infinite ease-in-out;
  z-index: 11;
}

.badge.rectangle {
  width: 55px;
  height: 18px;
  border-radius: var(--border-radius-base);
  transition: all 0.3s ease;
  position: absolute;
  top: -5px;
  right: -35px;
  transform-origin: left center;
}

.badge.rectangle .pulse-element {
  display: none;
}

.badge-text {
  opacity: 0;
  white-space: nowrap;
  font-size: var(--font-size-tiny);
  letter-spacing: 0.028rem;
}

@media (max-width: 768px) {
  .badge.circle {
    width: 20px;
    height: 20px;
  }
  .badge.rectangle {
    width: 55px;
    height: 20px;
  }
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  75% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(0.5);
    opacity: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/badge.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,0CAA0C;EAC1C,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wCAAwC;EACxC,yBAAyB;EACzB,kBAAkB;EAClB,SAAS;EACT,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,mBAAmB;EACnB,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA;EACE;IACE,WAAW;IACX,YAAY;EACd;EACA;IACE,WAAW;IACX,YAAY;EACd;AACF;;AAEA;EACE;IACE,qBAAqB;IACrB,UAAU;EACZ;EACA;IACE,qBAAqB;EACvB;EACA;IACE,qBAAqB;IACrB,UAAU;EACZ;AACF","sourcesContent":[".badge {\n  cursor: pointer;\n  touch-action: manipulation;\n}\n\n.badge.circle {\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  position: absolute;\n  top: -5px;\n  right: -5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.3s ease;\n  z-index: 10;\n}\n\n.badge.circle .pulse-element {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  animation: pulse 1.5s infinite ease-in-out;\n  z-index: 11;\n}\n\n.badge.rectangle {\n  width: 55px;\n  height: 18px;\n  border-radius: var(--border-radius-base);\n  transition: all 0.3s ease;\n  position: absolute;\n  top: -5px;\n  right: -35px;\n  transform-origin: left center;\n}\n\n.badge.rectangle .pulse-element {\n  display: none;\n}\n\n.badge-text {\n  opacity: 0;\n  white-space: nowrap;\n  font-size: var(--font-size-tiny);\n  letter-spacing: 0.028rem;\n}\n\n@media (max-width: 768px) {\n  .badge.circle {\n    width: 20px;\n    height: 20px;\n  }\n  .badge.rectangle {\n    width: 55px;\n    height: 20px;\n  }\n}\n\n@keyframes pulse {\n  0% {\n    transform: scale(0.5);\n    opacity: 1;\n  }\n  75% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(0.5);\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/button.css":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/button.css ***!
  \*******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.button {
  padding: var(--spacing-tiny) var(--spacing-meduim);
  border-radius: var(--border-radius-base);
  border: var(--border-solid);
  gap: var(--spacing-small);
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  cursor: pointer;
  touch-action: manipulation;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

.button-label {
  font-size: var(--font-size-base);
  font-weight: 300;
}

.button-icon {
  width: 22px;
  height: 22px;
}

.button:active {
  box-shadow: var(--box-shadow-button);
}

.theme-button,
.holiday-button {
  position: relative;
  padding: var(--spacing-tiny);
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

.theme-button svg path {
  transition:
    fill 0.3s ease-in-out,
    color 0.3s ease-in-out;
}

@media (hover: none) {
  .button:hover {
    background: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/button.css"],"names":[],"mappings":"AAAA;EACE,kDAAkD;EAClD,wCAAwC;EACxC,2BAA2B;EAC3B,yBAAyB;EACzB;;0BAEwB;EACxB,eAAe;EACf,0BAA0B;EAC1B,yBAAiB;KAAjB,sBAAiB;UAAjB,iBAAiB;AACnB;;AAEA;EACE,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,oCAAoC;AACtC;;AAEA;;EAEE,kBAAkB;EAClB,4BAA4B;EAC5B;;0BAEwB;AAC1B;;AAEA;EACE;;0BAEwB;AAC1B;;AAEA;EACE;IACE,gBAAgB;EAClB;AACF","sourcesContent":[".button {\n  padding: var(--spacing-tiny) var(--spacing-meduim);\n  border-radius: var(--border-radius-base);\n  border: var(--border-solid);\n  gap: var(--spacing-small);\n  transition:\n    background-color 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n  cursor: pointer;\n  touch-action: manipulation;\n  user-select: none;\n}\n\n.button-label {\n  font-size: var(--font-size-base);\n  font-weight: 300;\n}\n\n.button-icon {\n  width: 22px;\n  height: 22px;\n}\n\n.button:active {\n  box-shadow: var(--box-shadow-button);\n}\n\n.theme-button,\n.holiday-button {\n  position: relative;\n  padding: var(--spacing-tiny);\n  transition:\n    background-color 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n}\n\n.theme-button svg path {\n  transition:\n    fill 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n}\n\n@media (hover: none) {\n  .button:hover {\n    background: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/footer-content.css":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/footer-content.css ***!
  \***************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer-content {
  text-align: center;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/footer-content.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB","sourcesContent":[".footer-content {\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/section.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/section.css ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.section,
.block {
  gap: var(--spacing-base);
}

.section-description {
  font-weight: 300;
}

.section-title span {
  display: inline-block;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/section.css"],"names":[],"mappings":"AAAA;;EAEE,wBAAwB;AAC1B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[".section,\n.block {\n  gap: var(--spacing-base);\n}\n\n.section-description {\n  font-weight: 300;\n}\n\n.section-title span {\n  display: inline-block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/stamp.css":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/stamp.css ***!
  \******************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.stamp-svg {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 20vh;
  z-index: 10;
  pointer-events: none;
  transform: translate(30%);
  opacity: 0.15;
}

.rotating {
  animation: rotate 80s infinite linear;
}

.mobile-stamp {
  position: absolute;
  bottom: -15px;
  right: -50px;
  height: auto;
  pointer-events: none;
  opacity: 0.05;
  z-index: -1;
}

.mobile-stamp svg {
  width: 250px;
  height: 250px;
}

@media (max-width: 768px) {
  .stamp-svg {
    display: none;
  }
}

@media (min-width: 769px) {
  .mobile-stamp {
    display: none;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/stamp.css"],"names":[],"mappings":"AAAA;EACE;IACE,uBAAuB;EACzB;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,eAAe;EACf,SAAS;EACT,QAAQ;EACR,YAAY;EACZ,WAAW;EACX,oBAAoB;EACpB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,aAAa;EACb,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;AACF","sourcesContent":["@keyframes rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.stamp-svg {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  height: 20vh;\n  z-index: 10;\n  pointer-events: none;\n  transform: translate(30%);\n  opacity: 0.15;\n}\n\n.rotating {\n  animation: rotate 80s infinite linear;\n}\n\n.mobile-stamp {\n  position: absolute;\n  bottom: -15px;\n  right: -50px;\n  height: auto;\n  pointer-events: none;\n  opacity: 0.05;\n  z-index: -1;\n}\n\n.mobile-stamp svg {\n  width: 250px;\n  height: 250px;\n}\n\n@media (max-width: 768px) {\n  .stamp-svg {\n    display: none;\n  }\n}\n\n@media (min-width: 769px) {\n  .mobile-stamp {\n    display: none;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/tooltip.css":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/tooltip.css ***!
  \********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.tooltip {
  position: absolute;
  padding: 4px var(--spacing-mini);
  font-size: var(--font-size-small);
  white-space: nowrap;
  opacity: 0;
  transform: scaleX(0);
  pointer-events: none;
  z-index: 100;
}

.tooltip.top {
  transform: translateY(-10px);
}

.tooltip.bottom {
  transform: translateY(10px);
}

.tooltip.left {
  transform: translateX(-10px);
}

.tooltip.right {
  transform: translateX(10px);
  border-radius: 15px 20px 20px 2px;
  transform-origin: left center;
  animation: tooltip-appear 0.2s ease-out forwards;
}

@keyframes tooltip-appear {
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/base/tooltip.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,gCAAgC;EAChC,iCAAiC;EACjC,mBAAmB;EACnB,UAAU;EACV,oBAAoB;EACpB,oBAAoB;EACpB,YAAY;AACd;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE,2BAA2B;EAC3B,iCAAiC;EACjC,6BAA6B;EAC7B,gDAAgD;AAClD;;AAEA;EACE;IACE,oBAAoB;IACpB,UAAU;EACZ;EACA;IACE,oBAAoB;IACpB,UAAU;EACZ;AACF","sourcesContent":[".tooltip {\n  position: absolute;\n  padding: 4px var(--spacing-mini);\n  font-size: var(--font-size-small);\n  white-space: nowrap;\n  opacity: 0;\n  transform: scaleX(0);\n  pointer-events: none;\n  z-index: 100;\n}\n\n.tooltip.top {\n  transform: translateY(-10px);\n}\n\n.tooltip.bottom {\n  transform: translateY(10px);\n}\n\n.tooltip.left {\n  transform: translateX(-10px);\n}\n\n.tooltip.right {\n  transform: translateX(10px);\n  border-radius: 15px 20px 20px 2px;\n  transform-origin: left center;\n  animation: tooltip-appear 0.2s ease-out forwards;\n}\n\n@keyframes tooltip-appear {\n  0% {\n    transform: scaleX(0);\n    opacity: 0;\n  }\n  100% {\n    transform: scaleX(1);\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/flex.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/flex.css ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.flex-wrap {
  flex-wrap: wrap;
}

.flex-nowrap {
  flex-wrap: nowrap;
}

.align-content-center {
  align-content: center;
}

.align-content-start {
  align-content: flex-start;
}

.align-items-center {
  align-items: center;
}

.align-items-start {
  align-items: flex-start;
}

.justify-content-start {
  justify-content: flex-start;
}

.justify-content-center {
  justify-content: center;
}

.justify-content-between {
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/flex.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC","sourcesContent":[".flex {\n  display: flex;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n\n.align-content-center {\n  align-content: center;\n}\n\n.align-content-start {\n  align-content: flex-start;\n}\n\n.align-items-center {\n  align-items: center;\n}\n\n.align-items-start {\n  align-items: flex-start;\n}\n\n.justify-content-start {\n  justify-content: flex-start;\n}\n\n.justify-content-center {\n  justify-content: center;\n}\n\n.justify-content-between {\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.css":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.css ***!
  \************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./variables.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/variables.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_flex_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./flex.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/flex.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./theme.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/theme.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_special_theme_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./special-theme.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/special-theme.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_tooltip_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/tooltip.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/tooltip.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_button_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/button.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_section_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/section.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/section.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_structural_card_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./structural/card.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/structural/card.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_structural_logo_container_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./structural/logo-container.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/structural/logo-container.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_badge_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/badge.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/badge.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_animated_line_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/animated-line.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/animated-line.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_stamp_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/stamp.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/stamp.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_background_manager_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/background-manager.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/background-manager.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_footer_content_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./base/footer-content.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/base/footer-content.css");
// Imports
















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_variables_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_flex_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_theme_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_special_theme_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_tooltip_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_button_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_section_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_structural_card_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_structural_logo_container_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_badge_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_animated_line_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_stamp_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_background_manager_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_base_footer_content_css__WEBPACK_IMPORTED_MODULE_15__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  -webkit-font-smoothing: inherit;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

html {
  font-size: 15px;
  font-family: "Inter", sans-serif;
}

html,
body,
main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1,
h2,
p {
  margin: 0;
}

h1,
h2 {
  font-weight: 500;
}

h1 {
  font-size: var(--font-size-h1);
}

h2 {
  font-size: var(--font-size-h2);
}

p {
  font-family: "Inter";
  line-height: 1.5;
}

main {
  position: relative;
  min-height: 100vh;
  width: auto;
  gap: var(--spacing-extra-large);
  height: -moz-min-content;
  height: min-content;
  padding: var(--spacing-large) 0px;
  overflow: hidden;
}

footer {
  font-size: var(--font-size-small);
  padding-bottom: var(--spacing-meduim);
  text-wrap: balance;
  font-weight: 300;
}

@media (max-width: 768px) {
  * {
    -webkit-tap-highlight-color: transparent;
  }
  html {
    font-size: 16px;
  }
  p {
    line-height: 1.4;
  }
}

@media (min-width: 1200px) {
  html {
    font-size: 16px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/main.css"],"names":[],"mappings":"AAgBA;EACE,sBAAsB;EACtB,+BAA+B;EAC/B;;mBAEiB;AACnB;;AAEA;EACE,eAAe;EACf,gCAAgC;AAClC;;AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;;EAGE,SAAS;AACX;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,oBAAoB;EACpB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,WAAW;EACX,+BAA+B;EAC/B,wBAAmB;EAAnB,mBAAmB;EACnB,iCAAiC;EACjC,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;EACjC,qCAAqC;EACrC,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE;IACE,wCAAwC;EAC1C;EACA;IACE,eAAe;EACjB;EACA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,eAAe;EACjB;AACF","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap\");\n@import url(\"./variables.css\");\n@import url(\"./flex.css\");\n@import url(\"./theme.css\");\n@import url(\"./special-theme.css\");\n@import url(\"./base/tooltip.css\");\n@import url(\"./base/button.css\");\n@import url(\"./base/section.css\");\n@import url(\"./structural/card.css\");\n@import url(\"./structural/logo-container.css\");\n@import url(\"./base/badge.css\");\n@import url(\"./base/animated-line.css\");\n@import url(\"./base/stamp.css\");\n@import url(\"./base/background-manager.css\");\n@import url(\"./base/footer-content.css\");\n\n* {\n  box-sizing: border-box;\n  -webkit-font-smoothing: inherit;\n  transition:\n    background-color 0.3s ease,\n    color 0.3s ease;\n}\n\nhtml {\n  font-size: 15px;\n  font-family: \"Inter\", sans-serif;\n}\n\nhtml,\nbody,\nmain {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nh1,\nh2,\np {\n  margin: 0;\n}\n\nh1,\nh2 {\n  font-weight: 500;\n}\n\nh1 {\n  font-size: var(--font-size-h1);\n}\n\nh2 {\n  font-size: var(--font-size-h2);\n}\n\np {\n  font-family: \"Inter\";\n  line-height: 1.5;\n}\n\nmain {\n  position: relative;\n  min-height: 100vh;\n  width: auto;\n  gap: var(--spacing-extra-large);\n  height: min-content;\n  padding: var(--spacing-large) 0px;\n  overflow: hidden;\n}\n\nfooter {\n  font-size: var(--font-size-small);\n  padding-bottom: var(--spacing-meduim);\n  text-wrap: balance;\n  font-weight: 300;\n}\n\n@media (max-width: 768px) {\n  * {\n    -webkit-tap-highlight-color: transparent;\n  }\n  html {\n    font-size: 16px;\n  }\n  p {\n    line-height: 1.4;\n  }\n}\n\n@media (min-width: 1200px) {\n  html {\n    font-size: 16px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/special-theme.css":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/special-theme.css ***!
  \*********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes swing {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(15deg);
  }
  50% {
    transform: rotate(-15deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0);
  }
}

.holiday-button:hover .button-icon {
  animation: swing 0.7s ease-in-out;
}

[data-theme="special"] .theme-button:hover svg path {
  fill: #324c33;
}

[data-theme="special"] .holiday-button {
  background: linear-gradient(#670a0a, #420707);
}

[data-theme="special"] .holiday-button:hover {
  border-color: var(--border-color) !important;
}

[data-theme="special"] .website-button svg .path-2 {
  fill: #bc9b3d;
}

[data-theme="special"] .website-button svg .path-3 {
  fill: #324c33;
}

[data-theme="special"] .website-button:hover svg .path-2 {
  fill: url(#b);
}

[data-theme="special"] .website-button:hover svg .path-3 {
  fill: url(#c);
}

[data-theme="special"] .bento-button:hover svg .path-0 {
  fill: #dbdbdb;
}

[data-theme="special"] .bento-button:hover svg .path-1 {
  fill: #ff8686;
}

[data-theme="special"] .bento-button:hover svg .path-2 {
  fill: #5aff88;
}

[data-theme="special"] .bento-button:hover svg .path-3 {
  fill: #768cff;
}

[data-theme="special"] .bento-button:hover svg .path-fill {
  fill: #ffffff;
}

[data-theme="special"] .bento-button svg .path-0 {
  fill: #817839;
}

[data-theme="special"] .bento-button svg .path-1 {
  fill: #324c33;
}

[data-theme="special"] .bento-button svg .path-2 {
  fill: #324c33;
}

[data-theme="special"] .bento-button svg .path-3 {
  fill: #324c33;
}

[data-theme="special"] .bento-button svg .path-fill {
  fill: #bc9b3d;
}

[data-theme="special"] .email-button .button-icon svg path {
  fill: #bc9b3d !important;
}

[data-theme="special"] .email-button:hover .button-icon svg path {
  fill: var(--fill-color) !important;
}

[data-theme="special"] .button:hover .button-label {
  color: #5e0043;
}

[data-theme="special"] .dashboard-button svg .path-1 {
  fill: #324c33;
}

[data-theme="special"] .dashboard-button:hover svg .path-1 {
  fill: inherit;
}

[data-theme="special"] .dashboard-button:hover svg .path-2 {
  fill: inherit;
}

[data-theme="special"] .dashboard-button:hover svg .path-3 {
  fill: inherit;
}

[data-theme="special"] .dashboard-button svg .path-2 {
  fill: #817839;
}

[data-theme="special"] .dashboard-button svg .path-3 {
  fill: #bc9b3d;
}

[data-theme="special"] .dashboard-button:hover svg .path-1 {
  fill: #45059d;
}

[data-theme="special"] .dashboard-button:hover svg .path-2 {
  fill: url(#paint0_linear_144_56);
}

[data-theme="special"] .dashboard-button:hover svg .path-3 {
  fill: url(#paint1_linear_144_56);
}

[data-theme="special"] .gumroad-button:hover svg .path-1 {
  fill: #000000;
}

[data-theme="special"] .gumroad-button:hover svg .path-2 {
  fill: #ff90e8;
  stroke: #000000;
}

[data-theme="special"] .gumroad-button:hover svg .path-3 {
  fill: #000000;
}

[data-theme="special"] .gumroad-button svg .path-1 {
  fill: #324c33;
}

[data-theme="special"] .gumroad-button svg .path-2 {
  fill: #bc9b3d;
  stroke: #324c33;
}

[data-theme="special"] .gumroad-button svg .path-3 {
  fill: #324c33;
}

[data-theme="special"] .twitter-button:hover svg rect {
  fill: var(--fill-color);
}
[data-theme="special"] .linkedin-button svg rect {
  fill: #bc9b3d;
}

[data-theme="special"] .linkedin-button svg path {
  fill: #324c33;
}

[data-theme="special"] .linkedin-button:hover svg rect {
  fill: #0085ff;
}

[data-theme="special"] .linkedin-button:hover svg path {
  fill: #ffffff;
}

[data-theme="special"] .twitter-button svg rect {
  fill: #bc9b3d;
}

[data-theme="special"] .twitter-button svg path {
  fill: #324c33;
}

[data-theme="special"] .twitter-button:hover svg rect {
  fill: var(--fill-color);
}

[data-theme="special"] .twitter-button:hover svg path {
  fill: #ffffff;
}

[data-theme="special"] .bluesky-button svg path {
  fill: #bc9b3d;
}

[data-theme="special"] .bluesky-button:hover svg path {
  fill: #0085ff;
}

[data-theme="special"] .github-button svg path {
  fill: #bc9b3d;
}

[data-theme="special"] .github-button:hover svg path {
  fill: var(--fill-color);
}

[data-theme="special"] .dribbble-button:hover svg {
  fill: #ffabe7;
}

[data-theme="special"] .dribbble-button svg path {
  stroke: #324c33;
}

[data-theme="special"] .dribbble-button:hover svg path {
  stroke: #5e0043;
}

[data-theme="special"] .dribbble-button svg {
  fill: #bc9b3d;
}

[data-theme="special"] .card {
  box-shadow:
    0 0 15px 0px rgba(255, 246, 157, 0.8),
    0 0 10px 0px rgba(229, 204, 107, 0.6),
    0 0 15px 15px rgba(205, 164, 62, 0.4);
}

[data-theme="special"] .tooltip,
[data-theme="special"] .theme-button:hover,
[data-theme="special"] .website-button:hover,
[data-theme="special"] .bento-button:hover,
[data-theme="special"] .email-button:hover,
[data-theme="special"] .dashboard-button:hover,
[data-theme="special"] .gumroad-button:hover,
[data-theme="special"] .linkedin-button:hover,
[data-theme="special"] .twitter-button:hover,
[data-theme="special"] .bluesky-button:hover,
[data-theme="special"] .github-button:hover,
[data-theme="special"] .layers-button:hover,
[data-theme="special"] .dribbble-button:hover,
[data-theme="special"] .codepen-button:hover {
  background: linear-gradient(
    315deg,
    rgb(205, 164, 60) 0%,
    rgb(255, 247, 158) 100%
  );
}

[data-theme="special"] .tooltip,
[data-theme="special"] .website-button:hover .button-label,
[data-theme="special"] .bento-button:hover .button-label,
[data-theme="special"] .dashboard-button:hover .button-label,
[data-theme="special"] .linkedin-button:hover .button-label,
[data-theme="special"] .twitter-button:hover .button-label,
[data-theme="special"] .bluesky-button:hover .button-label,
[data-theme="special"] .github-button:hover .button-label,
[data-theme="special"] .codepen-button:hover .button-label {
  color: var(--special-text-theme-color) !important;
}

[data-theme="special"] .animated-line {
  background: repeating-linear-gradient(
    -45deg,
    rgb(242, 226, 163),
    rgb(153, 134, 91) 10px,
    rgb(103, 10, 10) 10px,
    rgb(57, 5, 5) 20px
  );
}

[data-theme="special"] .badge.circle {
  background-color: rgba(153, 134, 91, 50%);
}

[data-theme="special"] .section-description {
  color: var(--text-light-color);
}

[data-theme="special"] .background-manager {
  opacity: 0.04;
}

[data-theme="dark"] .holiday-button:hover svg .path-1,
[data-theme="dark"] .holiday-button:hover svg .path-2 {
  fill: #d7d5ff;
}

[data-theme="special"] .codepen-button .button-icon svg path {
  fill: #bc9b3d;
}

[data-theme="special"] .codepen-button:hover .button-icon svg path {
  fill: var(--fill-color);
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/special-theme.css"],"names":[],"mappings":"AAAA;EACE;IACE,oBAAoB;EACtB;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,yBAAyB;EAC3B;EACA;IACE,wBAAwB;EAC1B;EACA;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;AACA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE;;;yCAGuC;AACzC;;AAEA;;;;;;;;;;;;;;EAcE;;;;GAIC;AACH;;AAEA;;;;;;;;;EASE,iDAAiD;AACnD;;AAEA;EACE;;;;;;GAMC;AACH;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,aAAa;AACf;;AAEA;;EAEE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["@keyframes swing {\n  0% {\n    transform: rotate(0);\n  }\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(-15deg);\n  }\n  75% {\n    transform: rotate(10deg);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n\n.holiday-button:hover .button-icon {\n  animation: swing 0.7s ease-in-out;\n}\n\n[data-theme=\"special\"] .theme-button:hover svg path {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .holiday-button {\n  background: linear-gradient(#670a0a, #420707);\n}\n\n[data-theme=\"special\"] .holiday-button:hover {\n  border-color: var(--border-color) !important;\n}\n\n[data-theme=\"special\"] .website-button svg .path-2 {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .website-button svg .path-3 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .website-button:hover svg .path-2 {\n  fill: url(#b);\n}\n\n[data-theme=\"special\"] .website-button:hover svg .path-3 {\n  fill: url(#c);\n}\n\n[data-theme=\"special\"] .bento-button:hover svg .path-0 {\n  fill: #dbdbdb;\n}\n\n[data-theme=\"special\"] .bento-button:hover svg .path-1 {\n  fill: #ff8686;\n}\n\n[data-theme=\"special\"] .bento-button:hover svg .path-2 {\n  fill: #5aff88;\n}\n\n[data-theme=\"special\"] .bento-button:hover svg .path-3 {\n  fill: #768cff;\n}\n\n[data-theme=\"special\"] .bento-button:hover svg .path-fill {\n  fill: #ffffff;\n}\n\n[data-theme=\"special\"] .bento-button svg .path-0 {\n  fill: #817839;\n}\n\n[data-theme=\"special\"] .bento-button svg .path-1 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .bento-button svg .path-2 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .bento-button svg .path-3 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .bento-button svg .path-fill {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .email-button .button-icon svg path {\n  fill: #bc9b3d !important;\n}\n\n[data-theme=\"special\"] .email-button:hover .button-icon svg path {\n  fill: var(--fill-color) !important;\n}\n\n[data-theme=\"special\"] .button:hover .button-label {\n  color: #5e0043;\n}\n\n[data-theme=\"special\"] .dashboard-button svg .path-1 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .dashboard-button:hover svg .path-1 {\n  fill: inherit;\n}\n\n[data-theme=\"special\"] .dashboard-button:hover svg .path-2 {\n  fill: inherit;\n}\n\n[data-theme=\"special\"] .dashboard-button:hover svg .path-3 {\n  fill: inherit;\n}\n\n[data-theme=\"special\"] .dashboard-button svg .path-2 {\n  fill: #817839;\n}\n\n[data-theme=\"special\"] .dashboard-button svg .path-3 {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .dashboard-button:hover svg .path-1 {\n  fill: #45059d;\n}\n\n[data-theme=\"special\"] .dashboard-button:hover svg .path-2 {\n  fill: url(#paint0_linear_144_56);\n}\n\n[data-theme=\"special\"] .dashboard-button:hover svg .path-3 {\n  fill: url(#paint1_linear_144_56);\n}\n\n[data-theme=\"special\"] .gumroad-button:hover svg .path-1 {\n  fill: #000000;\n}\n\n[data-theme=\"special\"] .gumroad-button:hover svg .path-2 {\n  fill: #ff90e8;\n  stroke: #000000;\n}\n\n[data-theme=\"special\"] .gumroad-button:hover svg .path-3 {\n  fill: #000000;\n}\n\n[data-theme=\"special\"] .gumroad-button svg .path-1 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .gumroad-button svg .path-2 {\n  fill: #bc9b3d;\n  stroke: #324c33;\n}\n\n[data-theme=\"special\"] .gumroad-button svg .path-3 {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .twitter-button:hover svg rect {\n  fill: var(--fill-color);\n}\n[data-theme=\"special\"] .linkedin-button svg rect {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .linkedin-button svg path {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .linkedin-button:hover svg rect {\n  fill: #0085ff;\n}\n\n[data-theme=\"special\"] .linkedin-button:hover svg path {\n  fill: #ffffff;\n}\n\n[data-theme=\"special\"] .twitter-button svg rect {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .twitter-button svg path {\n  fill: #324c33;\n}\n\n[data-theme=\"special\"] .twitter-button:hover svg rect {\n  fill: var(--fill-color);\n}\n\n[data-theme=\"special\"] .twitter-button:hover svg path {\n  fill: #ffffff;\n}\n\n[data-theme=\"special\"] .bluesky-button svg path {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .bluesky-button:hover svg path {\n  fill: #0085ff;\n}\n\n[data-theme=\"special\"] .github-button svg path {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .github-button:hover svg path {\n  fill: var(--fill-color);\n}\n\n[data-theme=\"special\"] .dribbble-button:hover svg {\n  fill: #ffabe7;\n}\n\n[data-theme=\"special\"] .dribbble-button svg path {\n  stroke: #324c33;\n}\n\n[data-theme=\"special\"] .dribbble-button:hover svg path {\n  stroke: #5e0043;\n}\n\n[data-theme=\"special\"] .dribbble-button svg {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .card {\n  box-shadow:\n    0 0 15px 0px rgba(255, 246, 157, 0.8),\n    0 0 10px 0px rgba(229, 204, 107, 0.6),\n    0 0 15px 15px rgba(205, 164, 62, 0.4);\n}\n\n[data-theme=\"special\"] .tooltip,\n[data-theme=\"special\"] .theme-button:hover,\n[data-theme=\"special\"] .website-button:hover,\n[data-theme=\"special\"] .bento-button:hover,\n[data-theme=\"special\"] .email-button:hover,\n[data-theme=\"special\"] .dashboard-button:hover,\n[data-theme=\"special\"] .gumroad-button:hover,\n[data-theme=\"special\"] .linkedin-button:hover,\n[data-theme=\"special\"] .twitter-button:hover,\n[data-theme=\"special\"] .bluesky-button:hover,\n[data-theme=\"special\"] .github-button:hover,\n[data-theme=\"special\"] .layers-button:hover,\n[data-theme=\"special\"] .dribbble-button:hover,\n[data-theme=\"special\"] .codepen-button:hover {\n  background: linear-gradient(\n    315deg,\n    rgb(205, 164, 60) 0%,\n    rgb(255, 247, 158) 100%\n  );\n}\n\n[data-theme=\"special\"] .tooltip,\n[data-theme=\"special\"] .website-button:hover .button-label,\n[data-theme=\"special\"] .bento-button:hover .button-label,\n[data-theme=\"special\"] .dashboard-button:hover .button-label,\n[data-theme=\"special\"] .linkedin-button:hover .button-label,\n[data-theme=\"special\"] .twitter-button:hover .button-label,\n[data-theme=\"special\"] .bluesky-button:hover .button-label,\n[data-theme=\"special\"] .github-button:hover .button-label,\n[data-theme=\"special\"] .codepen-button:hover .button-label {\n  color: var(--special-text-theme-color) !important;\n}\n\n[data-theme=\"special\"] .animated-line {\n  background: repeating-linear-gradient(\n    -45deg,\n    rgb(242, 226, 163),\n    rgb(153, 134, 91) 10px,\n    rgb(103, 10, 10) 10px,\n    rgb(57, 5, 5) 20px\n  );\n}\n\n[data-theme=\"special\"] .badge.circle {\n  background-color: rgba(153, 134, 91, 50%);\n}\n\n[data-theme=\"special\"] .section-description {\n  color: var(--text-light-color);\n}\n\n[data-theme=\"special\"] .background-manager {\n  opacity: 0.04;\n}\n\n[data-theme=\"dark\"] .holiday-button:hover svg .path-1,\n[data-theme=\"dark\"] .holiday-button:hover svg .path-2 {\n  fill: #d7d5ff;\n}\n\n[data-theme=\"special\"] .codepen-button .button-icon svg path {\n  fill: #bc9b3d;\n}\n\n[data-theme=\"special\"] .codepen-button:hover .button-icon svg path {\n  fill: var(--fill-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/structural/card.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/structural/card.css ***!
  \***********************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
  position: relative;
  border-radius: var(--border-radius-large);
  border: var(--border-solid);
  padding: var(--spacing-large);
  gap: var(--spacing-extra-large);
  max-width: 430px;
  width: 100%;
  overflow: hidden;
  opacity: 0;
  z-index: 10;
  transform: translateY(100px);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.title-container {
  gap: var(--spacing-base);
}

.card-title {
  position: relative;
  gap: var(--spacing-extra-small);
  overflow: hidden;
}

.card-title p {
  font-size: var(--font-size-base);
}

.theme-container {
  gap: var(--spacing-base);
  height: 100%;
}

@keyframes slide-in-up {
  from {
    transform: translateY(100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.card.animate-in {
  animation: slide-in-up 0.8s ease forwards;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/structural/card.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,yCAAyC;EACzC,2BAA2B;EAC3B,6BAA6B;EAC7B,+BAA+B;EAC/B,gBAAgB;EAChB,WAAW;EACX,gBAAgB;EAChB,UAAU;EACV,WAAW;EACX,4BAA4B;EAC5B;;uBAEqB;AACvB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,kBAAkB;EAClB,+BAA+B;EAC/B,gBAAgB;AAClB;;AAEA;EACE,gCAAgC;AAClC;;AAEA;EACE,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE;IACE,4BAA4B;IAC5B,UAAU;EACZ;EACA;IACE,wBAAwB;IACxB,UAAU;EACZ;AACF;;AAEA;EACE,yCAAyC;AAC3C","sourcesContent":[".card {\n  position: relative;\n  border-radius: var(--border-radius-large);\n  border: var(--border-solid);\n  padding: var(--spacing-large);\n  gap: var(--spacing-extra-large);\n  max-width: 430px;\n  width: 100%;\n  overflow: hidden;\n  opacity: 0;\n  z-index: 10;\n  transform: translateY(100px);\n  transition:\n    opacity 0.5s ease,\n    transform 0.5s ease;\n}\n\n.title-container {\n  gap: var(--spacing-base);\n}\n\n.card-title {\n  position: relative;\n  gap: var(--spacing-extra-small);\n  overflow: hidden;\n}\n\n.card-title p {\n  font-size: var(--font-size-base);\n}\n\n.theme-container {\n  gap: var(--spacing-base);\n  height: 100%;\n}\n\n@keyframes slide-in-up {\n  from {\n    transform: translateY(100px);\n    opacity: 0;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n\n.card.animate-in {\n  animation: slide-in-up 0.8s ease forwards;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/structural/logo-container.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/structural/logo-container.css ***!
  \*********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.logo-container {
  position: relative;
  display: inline-block;
  width: 64px;
  height: 64px;
  overflow: visible;
}

.logo {
  width: 100%;
  height: auto;
  display: block;
}

.logo-text {
  font-weight: 600;
}

.logo-sub-text {
  font-weight: 300;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/structural/logo-container.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".logo-container {\n  position: relative;\n  display: inline-block;\n  width: 64px;\n  height: 64px;\n  overflow: visible;\n}\n\n.logo {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n\n.logo-text {\n  font-weight: 600;\n}\n\n.logo-sub-text {\n  font-weight: 300;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/theme.css":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/theme.css ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
  background: var(--html-background-color);
}

body {
  background: var(--background-color);
}

.button {
  border-color: var(--border-button-color) !important;
  background-color: transparent;
}

.button-label {
  color: var(--text-light-color);
}

.theme-button svg path {
  fill: var(--text-light-color);
}

.theme-button:hover,
.holiday-button:hover {
  background-color: var(--border-button-color);
}

/* === BOTONES GENERALES === */
.website-button:hover .button-label,
.email-button:hover .button-label,
.whatsapp-button:hover .button-label,
.telegram-button:hover .button-label,
.trustpilot-button:hover .button-label,
.minecraft-button:hover .button-label,
.roblox-button:hover .button-label,
.discord-button:hover .button-label,
.deviantart-button:hover .button-label,
.instagram-button:hover .button-label,
.facebook-button:hover .button-label,
.tiktok-button:hover .button-label,
.google-button:hover .button-label,
.youtube-button:hover .button-label,
.bluesky-button:hover .button-label,
.twitter-button:hover .button-label,
.steam-button:hover .button-label,
.itch-button:hover .button-label,
.amongus-button:hover .button-label,
.patreon-button:hover .button-label,
.stickerly-button:hover .button-label,
.paypal-button:hover .button-label {
  color: var(--font-theme-color); /* El texto siempre se mantiene blanco */
}

/* === COLORES DE HOVER SEGÚN BOTÓN === */

/* Celeste logo → fondo azul fuerte */
.website-button:hover {
  background-color: #0066cc;
}

/* Multicolor logo → gris medio */
.email-button:hover {
  background-color: #cfcfcf;
}

/* Verde claro logo → verde oscuro */
.whatsapp-button:hover {
  background-color: #128c7e;
}

/* Celeste logo → azul medio */
.telegram-button:hover {
  background-color: #0078b5;
}

/* Verde claro logo → verde más oscuro */
.trustpilot-button:hover {
  background-color: #007f5f;
}

/* Marrón/verde logo → fondo gris piedra */
.minecraft-button:hover {
  background-color: #5b4b34;
}

/* Celeste logo → azul oscuro */
.roblox-button:hover {
  background-color: #004b87;
}

/* Violeta claro logo → violeta oscuro */
.discord-button:hover {
  background-color: #5865f2;
}

/* Verde logo → verde más oscuro */
.deviantart-button:hover {
  background-color: #1a4733;
}

/* Multicolor logo → rosa fuerte */
.instagram-button:hover {
  background-color: #e1306c;
}

/* Celeste/blanco logo → azul intenso */
.facebook-button:hover {
  background-color: #1877f2;
}

/* Logo oscuro (glitch) → gris suave */
.tiktok-button:hover {
  background-color: #cfcfcf;
}

/* Multicolor logo → gris claro */
.google-button:hover {
  background-color: #e6e6e6;
}

/* Rojo logo → rojo más oscuro */
.youtube-button:hover {
  background-color: #cc0000;
}

/* Celeste logo → azul fuerte */
.bluesky-button:hover {
  background-color: #0085ff;
}

/* Negro logo → gris oscuro */
.twitter-button:hover {
  background-color: #1a1a1a;
}

/* Azul logo → azul más oscuro */
.steam-button:hover {
  background-color: #1b2838;
}

/* Rojo logo → rojo medio */
.itch-button:hover {
  background-color: #ff3c3c;
}

/* Rojo con borde negro logo → rojo oscuro */
.amongus-button:hover {
  background-color: #b11226;
}

/* Naranja logo → naranja más fuerte */
.patreon-button:hover {
  background-color: #ff6f3c;
}

/* Celeste logo → azul cielo */
.stickerly-button:hover {
  background-color: #3eb9ff;
}

/* Azul/celeste logo → azul intenso */
.paypal-button:hover {
  background-color: #003087;
}


.badge.circle .pulse-element,
.badge.rectangle {
  background-color: var(--accent-color);
}

.badge.circle {
  background-color: rgba(31, 210, 72, 50%);
}

.badge-text {
  color: var(--font-theme-color);
}

.card {
  border-color: var(--border-color) !important;
  background-color: var(--card-background-color);
}

[data-theme="dark"] .background-manager {
  opacity: 0.04;
}

h1,
h2,
p,
.logo-text {
  color: var(--text-color);
}

.logo-sub-text {
  color: var(--text-light-color);
}

.tooltip {
  background-color: var(--primary-color);
  color: var(--tooltip-theme-color);
}

footer {
  color: var(--text-light-color);
}

.stamp-svg svg path,
.mobile-stamp svg path {
  fill: var(--primary-color);
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/theme.css"],"names":[],"mappings":"AAAA;EACE,wCAAwC;AAC1C;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mDAAmD;EACnD,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,4CAA4C;AAC9C;;AAEA,8BAA8B;AAC9B;;;;;;;;;;;;;;;;;;;;;;EAsBE,8BAA8B,EAAE,wCAAwC;AAC1E;;AAEA,yCAAyC;;AAEzC,qCAAqC;AACrC;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;AACjC;EACE,yBAAyB;AAC3B;;AAEA,oCAAoC;AACpC;EACE,yBAAyB;AAC3B;;AAEA,8BAA8B;AAC9B;EACE,yBAAyB;AAC3B;;AAEA,wCAAwC;AACxC;EACE,yBAAyB;AAC3B;;AAEA,0CAA0C;AAC1C;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,wCAAwC;AACxC;EACE,yBAAyB;AAC3B;;AAEA,kCAAkC;AAClC;EACE,yBAAyB;AAC3B;;AAEA,kCAAkC;AAClC;EACE,yBAAyB;AAC3B;;AAEA,uCAAuC;AACvC;EACE,yBAAyB;AAC3B;;AAEA,sCAAsC;AACtC;EACE,yBAAyB;AAC3B;;AAEA,iCAAiC;AACjC;EACE,yBAAyB;AAC3B;;AAEA,gCAAgC;AAChC;EACE,yBAAyB;AAC3B;;AAEA,+BAA+B;AAC/B;EACE,yBAAyB;AAC3B;;AAEA,6BAA6B;AAC7B;EACE,yBAAyB;AAC3B;;AAEA,gCAAgC;AAChC;EACE,yBAAyB;AAC3B;;AAEA,2BAA2B;AAC3B;EACE,yBAAyB;AAC3B;;AAEA,4CAA4C;AAC5C;EACE,yBAAyB;AAC3B;;AAEA,sCAAsC;AACtC;EACE,yBAAyB;AAC3B;;AAEA,8BAA8B;AAC9B;EACE,yBAAyB;AAC3B;;AAEA,qCAAqC;AACrC;EACE,yBAAyB;AAC3B;;;AAGA;;EAEE,qCAAqC;AACvC;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,4CAA4C;EAC5C,8CAA8C;AAChD;;AAEA;EACE,aAAa;AACf;;AAEA;;;;EAIE,wBAAwB;AAC1B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,sCAAsC;EACtC,iCAAiC;AACnC;;AAEA;EACE,8BAA8B;AAChC;;AAEA;;EAEE,0BAA0B;AAC5B","sourcesContent":["html {\n  background: var(--html-background-color);\n}\n\nbody {\n  background: var(--background-color);\n}\n\n.button {\n  border-color: var(--border-button-color) !important;\n  background-color: transparent;\n}\n\n.button-label {\n  color: var(--text-light-color);\n}\n\n.theme-button svg path {\n  fill: var(--text-light-color);\n}\n\n.theme-button:hover,\n.holiday-button:hover {\n  background-color: var(--border-button-color);\n}\n\n/* === BOTONES GENERALES === */\n.website-button:hover .button-label,\n.email-button:hover .button-label,\n.whatsapp-button:hover .button-label,\n.telegram-button:hover .button-label,\n.trustpilot-button:hover .button-label,\n.minecraft-button:hover .button-label,\n.roblox-button:hover .button-label,\n.discord-button:hover .button-label,\n.deviantart-button:hover .button-label,\n.instagram-button:hover .button-label,\n.facebook-button:hover .button-label,\n.tiktok-button:hover .button-label,\n.google-button:hover .button-label,\n.youtube-button:hover .button-label,\n.bluesky-button:hover .button-label,\n.twitter-button:hover .button-label,\n.steam-button:hover .button-label,\n.itch-button:hover .button-label,\n.amongus-button:hover .button-label,\n.patreon-button:hover .button-label,\n.stickerly-button:hover .button-label,\n.paypal-button:hover .button-label {\n  color: var(--font-theme-color); /* El texto siempre se mantiene blanco */\n}\n\n/* === COLORES DE HOVER SEGÚN BOTÓN === */\n\n/* Celeste logo → fondo azul fuerte */\n.website-button:hover {\n  background-color: #0066cc;\n}\n\n/* Multicolor logo → gris medio */\n.email-button:hover {\n  background-color: #cfcfcf;\n}\n\n/* Verde claro logo → verde oscuro */\n.whatsapp-button:hover {\n  background-color: #128c7e;\n}\n\n/* Celeste logo → azul medio */\n.telegram-button:hover {\n  background-color: #0078b5;\n}\n\n/* Verde claro logo → verde más oscuro */\n.trustpilot-button:hover {\n  background-color: #007f5f;\n}\n\n/* Marrón/verde logo → fondo gris piedra */\n.minecraft-button:hover {\n  background-color: #5b4b34;\n}\n\n/* Celeste logo → azul oscuro */\n.roblox-button:hover {\n  background-color: #004b87;\n}\n\n/* Violeta claro logo → violeta oscuro */\n.discord-button:hover {\n  background-color: #5865f2;\n}\n\n/* Verde logo → verde más oscuro */\n.deviantart-button:hover {\n  background-color: #1a4733;\n}\n\n/* Multicolor logo → rosa fuerte */\n.instagram-button:hover {\n  background-color: #e1306c;\n}\n\n/* Celeste/blanco logo → azul intenso */\n.facebook-button:hover {\n  background-color: #1877f2;\n}\n\n/* Logo oscuro (glitch) → gris suave */\n.tiktok-button:hover {\n  background-color: #cfcfcf;\n}\n\n/* Multicolor logo → gris claro */\n.google-button:hover {\n  background-color: #e6e6e6;\n}\n\n/* Rojo logo → rojo más oscuro */\n.youtube-button:hover {\n  background-color: #cc0000;\n}\n\n/* Celeste logo → azul fuerte */\n.bluesky-button:hover {\n  background-color: #0085ff;\n}\n\n/* Negro logo → gris oscuro */\n.twitter-button:hover {\n  background-color: #1a1a1a;\n}\n\n/* Azul logo → azul más oscuro */\n.steam-button:hover {\n  background-color: #1b2838;\n}\n\n/* Rojo logo → rojo medio */\n.itch-button:hover {\n  background-color: #ff3c3c;\n}\n\n/* Rojo con borde negro logo → rojo oscuro */\n.amongus-button:hover {\n  background-color: #b11226;\n}\n\n/* Naranja logo → naranja más fuerte */\n.patreon-button:hover {\n  background-color: #ff6f3c;\n}\n\n/* Celeste logo → azul cielo */\n.stickerly-button:hover {\n  background-color: #3eb9ff;\n}\n\n/* Azul/celeste logo → azul intenso */\n.paypal-button:hover {\n  background-color: #003087;\n}\n\n\n.badge.circle .pulse-element,\n.badge.rectangle {\n  background-color: var(--accent-color);\n}\n\n.badge.circle {\n  background-color: rgba(31, 210, 72, 50%);\n}\n\n.badge-text {\n  color: var(--font-theme-color);\n}\n\n.card {\n  border-color: var(--border-color) !important;\n  background-color: var(--card-background-color);\n}\n\n[data-theme=\"dark\"] .background-manager {\n  opacity: 0.04;\n}\n\nh1,\nh2,\np,\n.logo-text {\n  color: var(--text-color);\n}\n\n.logo-sub-text {\n  color: var(--text-light-color);\n}\n\n.tooltip {\n  background-color: var(--primary-color);\n  color: var(--tooltip-theme-color);\n}\n\nfooter {\n  color: var(--text-light-color);\n}\n\n.stamp-svg svg path,\n.mobile-stamp svg path {\n  fill: var(--primary-color);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/variables.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/variables.css ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #525dd4;
  --accent-color: #1fd248;
  --fill-color: #000000;
  --font-theme-color: #ffffff;
  --background-color: #ffffff;
  --html-background-color: #ffffff;
  --card-background-color: #ffffff;
  --text-color: #1e1e1e;
  --text-light-color: #646464;
  --border-color: #ebebeb;
  --border-button-color: #f3f3f3;
  --button-default-icon-color: #474747;
  --tooltip-theme-color: #ffffff;

  --font-family-base: "Inter", sans-serif;
  --font-family-heading: "Poppins", sans-serif;
  --font-size-tiny: 0.666rem; /* 10px */
  --font-size-small: 0.733rem; /* 11px */
  --font-size-base: 1rem; /* 15px */
  --font-size-h1: 1.867rem; /* 28px */
  --font-size-h2: 1.066rem; /* 16px */
  --line-height-base: 1.5;

  --spacing-extra-small: 0.133rem; /* 4px */
  --spacing-tiny: 0.4rem; /* 6px */
  --spacing-small: 0.533rem; /* 8px */
  --spacing-mini: 0.8rem; /* 12px */
  --spacing-base: 1rem; /* 15px */
  --spacing-meduim: 1.333rem; /* 20px */
  --spacing-large: 2rem; /* 30px */
  --spacing-extra-large: 3.333rem; /* 50px */

  --border-solid: 1px solid;
  --border-radius-small: 0.8rem; /* 12px */
  --border-radius-base: 1.333rem; /* 20px */
  --border-radius-large: 1.6rem; /* 24px */

  --box-shadow-button: 0 2px 6px rgba(0, 0, 0, 0.1);
}

[data-theme="dark"] {
  --background-color: #0d1118;
  --html-background-color: #0d1118;
  --card-background-color: #171d29;
  --border-button-color: #525dd4;
  --border-color: #525dd4;
  --text-color: #ffffff;
  --text-light-color: #d7d5ff;
  --fill-color: #ffffff;
  --button-default-icon-color: #525dd4;
}

/* Special Theme - New Year */
[data-theme="special"] {
  --background-color: radial-gradient(50% 51.7% at 50% 0%, #0d7073, #00291d);
  --html-background-color: #08463f;
  --card-background-color: #0d70732e;
  --text-color: #f7c953;
  --text-light-color: #f5edc9;
  --special-text-theme-color: #420c0c;
  --primary-color: #ffffff;
  --accent-color: #cda43c;
  --border-color: rgba(255, 246, 157, 0.8);
  --border-solid: 1px solid transparent;
}
`, "",{"version":3,"sources":["webpack://./src/assets/styles/variables.css"],"names":[],"mappings":"AAAA;EACE,wBAAwB;EACxB,uBAAuB;EACvB,qBAAqB;EACrB,2BAA2B;EAC3B,2BAA2B;EAC3B,gCAAgC;EAChC,gCAAgC;EAChC,qBAAqB;EACrB,2BAA2B;EAC3B,uBAAuB;EACvB,8BAA8B;EAC9B,oCAAoC;EACpC,8BAA8B;;EAE9B,uCAAuC;EACvC,4CAA4C;EAC5C,0BAA0B,EAAE,SAAS;EACrC,2BAA2B,EAAE,SAAS;EACtC,sBAAsB,EAAE,SAAS;EACjC,wBAAwB,EAAE,SAAS;EACnC,wBAAwB,EAAE,SAAS;EACnC,uBAAuB;;EAEvB,+BAA+B,EAAE,QAAQ;EACzC,sBAAsB,EAAE,QAAQ;EAChC,yBAAyB,EAAE,QAAQ;EACnC,sBAAsB,EAAE,SAAS;EACjC,oBAAoB,EAAE,SAAS;EAC/B,0BAA0B,EAAE,SAAS;EACrC,qBAAqB,EAAE,SAAS;EAChC,+BAA+B,EAAE,SAAS;;EAE1C,yBAAyB;EACzB,6BAA6B,EAAE,SAAS;EACxC,8BAA8B,EAAE,SAAS;EACzC,6BAA6B,EAAE,SAAS;;EAExC,iDAAiD;AACnD;;AAEA;EACE,2BAA2B;EAC3B,gCAAgC;EAChC,gCAAgC;EAChC,8BAA8B;EAC9B,uBAAuB;EACvB,qBAAqB;EACrB,2BAA2B;EAC3B,qBAAqB;EACrB,oCAAoC;AACtC;;AAEA,6BAA6B;AAC7B;EACE,0EAA0E;EAC1E,gCAAgC;EAChC,kCAAkC;EAClC,qBAAqB;EACrB,2BAA2B;EAC3B,mCAAmC;EACnC,wBAAwB;EACxB,uBAAuB;EACvB,wCAAwC;EACxC,qCAAqC;AACvC","sourcesContent":[":root {\n  --primary-color: #525dd4;\n  --accent-color: #1fd248;\n  --fill-color: #000000;\n  --font-theme-color: #ffffff;\n  --background-color: #ffffff;\n  --html-background-color: #ffffff;\n  --card-background-color: #ffffff;\n  --text-color: #1e1e1e;\n  --text-light-color: #646464;\n  --border-color: #ebebeb;\n  --border-button-color: #f3f3f3;\n  --button-default-icon-color: #474747;\n  --tooltip-theme-color: #ffffff;\n\n  --font-family-base: \"Inter\", sans-serif;\n  --font-family-heading: \"Poppins\", sans-serif;\n  --font-size-tiny: 0.666rem; /* 10px */\n  --font-size-small: 0.733rem; /* 11px */\n  --font-size-base: 1rem; /* 15px */\n  --font-size-h1: 1.867rem; /* 28px */\n  --font-size-h2: 1.066rem; /* 16px */\n  --line-height-base: 1.5;\n\n  --spacing-extra-small: 0.133rem; /* 4px */\n  --spacing-tiny: 0.4rem; /* 6px */\n  --spacing-small: 0.533rem; /* 8px */\n  --spacing-mini: 0.8rem; /* 12px */\n  --spacing-base: 1rem; /* 15px */\n  --spacing-meduim: 1.333rem; /* 20px */\n  --spacing-large: 2rem; /* 30px */\n  --spacing-extra-large: 3.333rem; /* 50px */\n\n  --border-solid: 1px solid;\n  --border-radius-small: 0.8rem; /* 12px */\n  --border-radius-base: 1.333rem; /* 20px */\n  --border-radius-large: 1.6rem; /* 24px */\n\n  --box-shadow-button: 0 2px 6px rgba(0, 0, 0, 0.1);\n}\n\n[data-theme=\"dark\"] {\n  --background-color: #0d1118;\n  --html-background-color: #0d1118;\n  --card-background-color: #171d29;\n  --border-button-color: #525dd4;\n  --border-color: #525dd4;\n  --text-color: #ffffff;\n  --text-light-color: #d7d5ff;\n  --fill-color: #ffffff;\n  --button-default-icon-color: #525dd4;\n}\n\n/* Special Theme - New Year */\n[data-theme=\"special\"] {\n  --background-color: radial-gradient(50% 51.7% at 50% 0%, #0d7073, #00291d);\n  --html-background-color: #08463f;\n  --card-background-color: #0d70732e;\n  --text-color: #f7c953;\n  --text-light-color: #f5edc9;\n  --special-text-theme-color: #420c0c;\n  --primary-color: #ffffff;\n  --accent-color: #cda43c;\n  --border-color: rgba(255, 246, 157, 0.8);\n  --border-solid: 1px solid transparent;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/main.css":
/*!************************************!*\
  !*** ./src/assets/styles/main.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!../../../node_modules/postcss-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./node_modules/postcss-loader/dist/cjs.js!./src/assets/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_use_1_node_modules_postcss_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@vercel/analytics/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEV_SCRIPT_URL: () => (/* binding */ DEV_SCRIPT_URL),
/* harmony export */   PROD_SCRIPT_URL: () => (/* binding */ PROD_SCRIPT_URL),
/* harmony export */   computeRoute: () => (/* binding */ computeRoute),
/* harmony export */   "default": () => (/* binding */ generic_default),
/* harmony export */   inject: () => (/* binding */ inject),
/* harmony export */   pageview: () => (/* binding */ pageview),
/* harmony export */   track: () => (/* binding */ track)
/* harmony export */ });
// package.json
var name = "@vercel/analytics";
var version = "1.4.1";

// src/queue.ts
var initQueue = () => {
  if (window.va)
    return;
  window.va = function a(...params) {
    (window.vaq = window.vaq || []).push(params);
  };
};

// src/utils.ts
function isBrowser() {
  return typeof window !== "undefined";
}
function detectEnvironment() {
  try {
    const env = "development";
    if (env === "development" || env === "test") {
      return "development";
    }
  } catch (e) {
  }
  return "production";
}
function setMode(mode = "auto") {
  if (mode === "auto") {
    window.vam = detectEnvironment();
    return;
  }
  window.vam = mode;
}
function getMode() {
  const mode = isBrowser() ? window.vam : detectEnvironment();
  return mode || "production";
}
function isProduction() {
  return getMode() === "production";
}
function isDevelopment() {
  return getMode() === "development";
}
function removeKey(key, { [key]: _, ...rest }) {
  return rest;
}
function parseProperties(properties, options) {
  if (!properties)
    return void 0;
  let props = properties;
  const errorProperties = [];
  for (const [key, value] of Object.entries(properties)) {
    if (typeof value === "object" && value !== null) {
      if (options.strip) {
        props = removeKey(key, props);
      } else {
        errorProperties.push(key);
      }
    }
  }
  if (errorProperties.length > 0 && !options.strip) {
    throw Error(
      `The following properties are not valid: ${errorProperties.join(
        ", "
      )}. Only strings, numbers, booleans, and null are allowed.`
    );
  }
  return props;
}
function computeRoute(pathname, pathParams) {
  if (!pathname || !pathParams) {
    return pathname;
  }
  let result = pathname;
  try {
    const entries = Object.entries(pathParams);
    for (const [key, value] of entries) {
      if (!Array.isArray(value)) {
        const matcher = turnValueToRegExp(value);
        if (matcher.test(result)) {
          result = result.replace(matcher, `/[${key}]`);
        }
      }
    }
    for (const [key, value] of entries) {
      if (Array.isArray(value)) {
        const matcher = turnValueToRegExp(value.join("/"));
        if (matcher.test(result)) {
          result = result.replace(matcher, `/[...${key}]`);
        }
      }
    }
    return result;
  } catch (e) {
    return pathname;
  }
}
function turnValueToRegExp(value) {
  return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// src/generic.ts
var DEV_SCRIPT_URL = "https://va.vercel-scripts.com/v1/script.debug.js";
var PROD_SCRIPT_URL = "/_vercel/insights/script.js";
function inject(props = {
  debug: true
}) {
  var _a;
  if (!isBrowser())
    return;
  setMode(props.mode);
  initQueue();
  if (props.beforeSend) {
    (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
  }
  const src = props.scriptSrc || (isDevelopment() ? DEV_SCRIPT_URL : PROD_SCRIPT_URL);
  if (document.head.querySelector(`script[src*="${src}"]`))
    return;
  const script = document.createElement("script");
  script.src = src;
  script.defer = true;
  script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
  script.dataset.sdkv = version;
  if (props.disableAutoTrack) {
    script.dataset.disableAutoTrack = "1";
  }
  if (props.endpoint) {
    script.dataset.endpoint = props.endpoint;
  }
  if (props.dsn) {
    script.dataset.dsn = props.dsn;
  }
  script.onerror = () => {
    const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
    console.log(
      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`
    );
  };
  if (isDevelopment() && props.debug === false) {
    script.dataset.debug = "false";
  }
  document.head.appendChild(script);
}
function track(name2, properties, options) {
  var _a, _b;
  if (!isBrowser()) {
    const msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
    if (isProduction()) {
      console.warn(msg);
    } else {
      throw new Error(msg);
    }
    return;
  }
  if (!properties) {
    (_a = window.va) == null ? void 0 : _a.call(window, "event", { name: name2, options });
    return;
  }
  try {
    const props = parseProperties(properties, {
      strip: isProduction()
    });
    (_b = window.va) == null ? void 0 : _b.call(window, "event", {
      name: name2,
      data: props,
      options
    });
  } catch (err) {
    if (err instanceof Error && isDevelopment()) {
      console.error(err);
    }
  }
}
function pageview({
  route,
  path
}) {
  var _a;
  (_a = window.va) == null ? void 0 : _a.call(window, "pageview", { route, path });
}
var generic_default = {
  inject,
  track,
  computeRoute
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./src/assets/effects/SnowEffect.js":
/*!******************************************!*\
  !*** ./src/assets/effects/SnowEffect.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SnowEffect)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SnowEffect = /*#__PURE__*/function () {
  function SnowEffect() {
    _classCallCheck(this, SnowEffect);
    this.container = null;
    this.canvas = null;
    this.context = null;
    this.snowflakes = [];
    this.animationFrameId = null;
    this.handleResize = this.handleResize.bind(this);
    this.isMobile = window.innerWidth <= 768;
  }
  return _createClass(SnowEffect, [{
    key: "init",
    value: function init() {
      if (this.container) return;
      this.container = document.createElement("div");
      this.container.className = "snow-effect-container";
      this.container.style.position = "fixed";
      this.container.style.top = "0";
      this.container.style.left = "0";
      this.container.style.width = "100%";
      this.container.style.height = "100%";
      this.container.style.pointerEvents = "none";
      this.container.style.zIndex = "9999";
      this.canvas = document.createElement("canvas");
      this.container.appendChild(this.canvas);
      document.body.appendChild(this.container);
      this.context = this.canvas.getContext("2d");
      this.updateCanvasSize();
      this.createSnowflakes();
      this.startAnimation();
      window.addEventListener("resize", this.handleResize);
    }

    /**
     * Cleans up the snow effect: removes container and cancels animation.
     */
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.container) {
        cancelAnimationFrame(this.animationFrameId);
        document.body.removeChild(this.container);
        this.container = null;
        this.canvas = null;
        this.context = null;
        this.snowflakes = [];
        window.removeEventListener("resize", this.handleResize);
      }
    }
  }, {
    key: "updateCanvasSize",
    value: function updateCanvasSize() {
      if (this.canvas) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        this.canvas.width = width;
        this.canvas.height = height;
        this.isMobile = width <= 768;
        this.createSnowflakes();
      }
    }
  }, {
    key: "handleResize",
    value: function handleResize() {
      this.updateCanvasSize();
    }
  }, {
    key: "createSnowflakes",
    value: function createSnowflakes() {
      var numberOfFlakes = this.isMobile ? 50 : 100;
      var maxRadius = this.isMobile ? 1 : 3;
      var maxSpeed = this.isMobile ? 0.5 : 1;
      this.snowflakes = [];
      for (var i = 0; i < numberOfFlakes; i++) {
        this.snowflakes.push({
          x: Math.random() * this.canvas.width,
          y: Math.random() * this.canvas.height,
          radius: Math.random() * maxRadius + 1,
          speed: Math.random() * maxSpeed + 0.5
        });
      }
    }
  }, {
    key: "startAnimation",
    value: function startAnimation() {
      var _this = this;
      var _animate = function animate() {
        _this.context.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
        _this.snowflakes.forEach(function (flake) {
          flake.y += flake.speed;
          if (flake.y > _this.canvas.height) {
            flake.y = 0;
            flake.x = Math.random() * _this.canvas.width;
          }
          _this.context.beginPath();
          _this.context.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
          _this.context.fillStyle = "rgba(255, 255, 255, 0.8)";
          _this.context.fill();
        });
        _this.animationFrameId = requestAnimationFrame(_animate);
      };
      _animate();
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/utils/BaseSvgManager.js":
/*!********************************************!*\
  !*** ./src/assets/utils/BaseSvgManager.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BaseSvgManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BaseSvgManager = /*#__PURE__*/function () {
  function BaseSvgManager(filePath) {
    _classCallCheck(this, BaseSvgManager);
    this.filePath = filePath;
    this.svgElement = null;
    this.containerElement = null;
  }
  return _createClass(BaseSvgManager, [{
    key: "loadSVG",
    value: function () {
      var _loadSVG = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var response;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(this.filePath);
            case 2:
              response = _context.sent;
              if (response.ok) {
                _context.next = 5;
                break;
              }
              throw new Error("Failed to load SVG: ".concat(response.statusText));
            case 5:
              return _context.abrupt("return", response.text());
            case 6:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function loadSVG() {
        return _loadSVG.apply(this, arguments);
      }
      return loadSVG;
    }()
  }, {
    key: "createSVG",
    value: function createSVG(container, svgContent, wrapperClassName, svgClassName) {
      if (this.containerElement) return;
      var svgWrapper = document.createElement("div");
      svgWrapper.className = wrapperClassName;
      svgWrapper.innerHTML = svgContent;
      var svgElement = svgWrapper.querySelector("svg");
      if (svgElement) {
        svgElement.classList.add(svgClassName);
        this.svgElement = svgElement;
      }
      container.appendChild(svgWrapper);
      this.containerElement = svgWrapper;
    }
  }, {
    key: "removeSVG",
    value: function removeSVG() {
      if (this.containerElement) {
        this.containerElement.remove();
        this.containerElement = null;
        this.svgElement = null;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/utils/FooterTextProvider.js":
/*!************************************************!*\
  !*** ./src/assets/utils/FooterTextProvider.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterTextProvider: () => (/* binding */ FooterTextProvider)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FooterTextProvider = /*#__PURE__*/function () {
  function FooterTextProvider(baseText) {
    _classCallCheck(this, FooterTextProvider);
    this.baseText = baseText;
  }
  return _createClass(FooterTextProvider, [{
    key: "getText",
    value: function getText() {
      var currentYear = new Date().getFullYear();
      return "\xA9 2024\u2014".concat(currentYear, ", ").concat(this.baseText);
    }
  }]);
}();

/***/ }),

/***/ "./src/assets/utils/HolidayEffectManager.js":
/*!**************************************************!*\
  !*** ./src/assets/utils/HolidayEffectManager.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HolidayEffectManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HolidayEffectManager = /*#__PURE__*/function () {
  function HolidayEffectManager() {
    _classCallCheck(this, HolidayEffectManager);
    this.currentEffect = null;
  }

  /**
   * Initializes the holiday effect.
   * @param {HolidayEffect} effect - Instance of a holiday effect.
   */
  return _createClass(HolidayEffectManager, [{
    key: "startEffect",
    value: function startEffect(effect) {
      this.stopEffect();
      this.currentEffect = effect;
      this.currentEffect.init();
    }

    /**
     * Stops the current holiday effect.
     */
  }, {
    key: "stopEffect",
    value: function stopEffect() {
      if (this.currentEffect) {
        this.currentEffect.destroy();
        this.currentEffect = null;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/assets/utils/ThemeResetter.js":
/*!*******************************************!*\
  !*** ./src/assets/utils/ThemeResetter.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   resetInvalidTheme: () => (/* binding */ resetInvalidTheme)
/* harmony export */ });
/* harmony import */ var _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ThemeService.js */ "./src/services/ThemeService.js");

var ALLOWED_THEMES = ["light", "dark"];
function resetInvalidTheme() {
  var currentTheme = _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_0__["default"].getCurrentTheme();
  if (!ALLOWED_THEMES.includes(currentTheme)) {
    _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_0__["default"].applyTheme("light");
  }
}

/***/ }),

/***/ "./src/components/base/Block.js":
/*!**************************************!*\
  !*** ./src/components/base/Block.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Block)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Block = /*#__PURE__*/function () {
  function Block() {
    _classCallCheck(this, Block);
    this.buttons = [];
    this.blockElement = null;
  }

  /**
   * Adds a button to the block
   * @param {Button} button - The button object to be added
   */
  return _createClass(Block, [{
    key: "addButton",
    value: function addButton(button) {
      this.buttons.push(button);
    }

    /**
     * Renders the block
     * @returns {HTMLElement} - The HTML element of the block
     */
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.blockElement = document.createElement("div");
      this.blockElement.className = "block flex flex-wrap";
      this.buttons.forEach(function (button) {
        _this.blockElement.appendChild(button.render());
      });
      return this.blockElement;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/base/Button.js":
/*!***************************************!*\
  !*** ./src/components/base/Button.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Button = /*#__PURE__*/function () {
  /**
   * Constructor for the base button
   * @param {Object} config - Button configuration
   * @param {string} config.label - Button text (optional)
   * @param {string} config.icon - SVG icon code (optional)
   * @param {string} config.className - Additional styling class for the button
   * @param {Function} config.onClick - Callback function for button click
   */
  function Button(_ref) {
    var _ref$label = _ref.label,
      label = _ref$label === void 0 ? "" : _ref$label,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? "" : _ref$icon,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? "" : _ref$className,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? null : _ref$onClick,
      _ref$ariaLabel = _ref.ariaLabel,
      ariaLabel = _ref$ariaLabel === void 0 ? null : _ref$ariaLabel;
    _classCallCheck(this, Button);
    this.label = label;
    this.icon = icon;
    this.className = className;
    this.onClick = onClick;
    this.ariaLabel = ariaLabel;
    this.buttonElement = null;
  }

  /**
   * Creates the HTML element for the button
   * @returns {HTMLButtonElement} - The button element
   */
  return _createClass(Button, [{
    key: "render",
    value: function render() {
      this.buttonElement = document.createElement("button");
      this.buttonElement.className = "button flex align-content-center align-items-center ".concat(this.className);

      // Add SVG icon if provided
      if (this.icon) {
        var iconElement = this.createIconElement();
        this.buttonElement.appendChild(iconElement);
      }

      // Add button label if provided
      if (this.label) {
        var labelElement = this.createLabelElement();
        this.buttonElement.appendChild(labelElement);
      }

      // Add click event listener if provided
      if (typeof this.onClick === "function") {
        this.buttonElement.addEventListener("click", this.onClick);
      }

      // Add aria label if provided
      if (this.ariaLabel) {
        this.buttonElement.setAttribute("aria-label", this.ariaLabel);
      }
      return this.buttonElement;
    }

    /**
     * Creates the SVG icon element
     * @returns {HTMLElement} - The SVG icon element
     */
  }, {
    key: "createIconElement",
    value: function createIconElement() {
      var wrapper = document.createElement("span");
      wrapper.className = "button-icon";
      wrapper.innerHTML = this.icon;
      return wrapper;
    }

    /**
     * Creates the text element for the button
     * @returns {HTMLElement} - The text element
     */
  }, {
    key: "createLabelElement",
    value: function createLabelElement() {
      var span = document.createElement("span");
      span.className = "button-label";
      span.textContent = this.label;
      return span;
    }

    /**
     * Updates the button's styling classes
     * @param {string} newClassName - The new styling class
     */
  }, {
    key: "updateClassName",
    value: function updateClassName(newClassName) {
      this.buttonElement.className = "button ".concat(newClassName);
    }
  }]);
}();


/***/ }),

/***/ "./src/components/base/Section.js":
/*!****************************************!*\
  !*** ./src/components/base/Section.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var _TooltipManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TooltipManager.js */ "./src/components/base/TooltipManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Section = /*#__PURE__*/function () {
  function Section(title) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var tooltip = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, Section);
    this.name = name;
    this.title = title;
    this.titleLevel = "h2";
    this.description = "";
    this.blocks = [];
    this.sectionElement = null;
    this.tooltip = tooltip;
    this.tooltipManager = new _TooltipManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  /**
   * Sets the heading level
   * @param {string} level - Heading level (h1, h2, etc.)
   */
  return _createClass(Section, [{
    key: "setTitleLevel",
    value: function setTitleLevel(level) {
      this.titleLevel = level;
    }

    /**
     * Sets the section description
     * @param {string} description - Description text
     */
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      this.description = description;
    }

    /**
     * Adds a block to the section
     * @param {Block} block - Block to be added
     */
  }, {
    key: "addBlock",
    value: function addBlock(block) {
      this.blocks.push(block);
      if (this.sectionElement) {
        this.sectionElement.appendChild(block.render());
      }
    }

    /**
     * Renders the section
     * @returns {HTMLElement} - DOM element of the section
     */
  }, {
    key: "render",
    value: function render() {
      var _this = this;
      this.sectionElement = document.createElement("section");
      this.sectionElement.className = "section flex flex-col";

      // Add the title if it exists
      if (this.title) {
        var titleElement = document.createElement(this.titleLevel);
        titleElement.className = "section-title";
        var titleTextElement = document.createElement("span");
        titleTextElement.textContent = this.title;

        // Attach tooltip if provided
        if (this.tooltip) {
          this.tooltipManager.attachTooltip(titleTextElement, this.tooltip.content, this.tooltip.position);
        }
        titleElement.appendChild(titleTextElement);
        this.sectionElement.appendChild(titleElement);
      }

      // Set the 'name' attribute if provided
      if (this.name) {
        this.sectionElement.setAttribute("name", this.name);
      }

      // Add description if it exists
      if (this.description) {
        var descriptionElement = document.createElement("p");
        descriptionElement.textContent = this.description;
        descriptionElement.className = "section-description";
        this.sectionElement.appendChild(descriptionElement);
      }

      // Render and append blocks
      this.blocks.forEach(function (block) {
        _this.sectionElement.appendChild(block.render());
      });
      return this.sectionElement;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/base/TooltipManager.js":
/*!***********************************************!*\
  !*** ./src/components/base/TooltipManager.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TooltipManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var TooltipManager = /*#__PURE__*/function () {
  function TooltipManager() {
    _classCallCheck(this, TooltipManager);
    this.tooltipElement = null;
  }

  /**
   * Creates a tooltip if it doesn't already exist
   */
  return _createClass(TooltipManager, [{
    key: "createTooltip",
    value: function createTooltip() {
      if (!this.tooltipElement) {
        var tooltip = document.createElement("div");
        document.body.appendChild(tooltip);
        this.tooltipElement = tooltip;
      }
    }

    /**
     * Displays the tooltip
     * @param {HTMLElement} target - The element the tooltip is attached to
     * @param {string} content - The text content of the tooltip
     * @param {string} position - The position of the tooltip: top, bottom, left, right
     */
  }, {
    key: "showTooltip",
    value: function showTooltip(target, content) {
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "top";
      this.createTooltip();
      this.tooltipElement.innerHTML = content;
      this.tooltipElement.className = "tooltip ".concat(position);
      var targetRect = target.getBoundingClientRect();
      var top = 0;
      var left = 0;
      switch (position) {
        case "top":
          top = targetRect.top + window.scrollY - this.tooltipElement.offsetHeight - 8;
          left = targetRect.left + window.scrollX + (targetRect.width - this.tooltipElement.offsetWidth) / 2;
          break;
        case "bottom":
          top = targetRect.bottom + window.scrollY + 8;
          left = targetRect.left + window.scrollX + (targetRect.width - this.tooltipElement.offsetWidth) / 2;
          break;
        case "left":
          top = targetRect.top + window.scrollY + (targetRect.height - this.tooltipElement.offsetHeight) / 2;
          left = targetRect.left + window.scrollX - this.tooltipElement.offsetWidth - 8;
          break;
        case "right":
          top = targetRect.top + window.scrollY + (targetRect.height - this.tooltipElement.offsetHeight) / 2;
          left = targetRect.right + window.scrollX + 8;
          break;
        default:
          break;
      }
      this.tooltipElement.style.top = "".concat(top, "px");
      this.tooltipElement.style.left = "".concat(left, "px");
      this.tooltipElement.style.opacity = 1;
    }

    /**
     * Hides the tooltip
     */
  }, {
    key: "hideTooltip",
    value: function hideTooltip() {
      var _this = this;
      if (this.tooltipElement) {
        this.tooltipElement.style.opacity = 0;
        setTimeout(function () {
          if (_this.tooltipElement) {
            _this.tooltipElement.remove();
            _this.tooltipElement = null;
          }
        }, 300);
      }
    }

    /**
     * Attaches a tooltip to an element
     * @param {HTMLElement} element - The element the tooltip is attached to
     * @param {string} content - The text content of the tooltip
     * @param {string} position - The position of the tooltip: top, bottom, left, right
     */
  }, {
    key: "attachTooltip",
    value: function attachTooltip(element, content) {
      var _this2 = this;
      var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "top";
      var isTouchDevice = "ontouchstart" in window;
      if (isTouchDevice) {
        element.addEventListener("click", function (event) {
          event.stopPropagation();
          if (_this2.tooltipElement) {
            _this2.hideTooltip();
          } else {
            _this2.showTooltip(element, content, position);
          }
        });
        document.addEventListener("click", function (event) {
          if (_this2.tooltipElement && !element.contains(event.target)) {
            _this2.hideTooltip();
          }
        });
      } else {
        element.addEventListener("mouseenter", function () {
          return _this2.showTooltip(element, content, position);
        });
        element.addEventListener("mouseleave", function () {
          return _this2.hideTooltip();
        });
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/decorative/BackgroundManager.js":
/*!********************************************************!*\
  !*** ./src/components/decorative/BackgroundManager.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BackgroundManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BackgroundManager = /*#__PURE__*/function () {
  function BackgroundManager(imageUrl) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, BackgroundManager);
    this.imageUrl = imageUrl;
    this.size = options.size || "cover";
    this.repeat = options.repeat || "no-repeat";
    this.targetElement = options.targetElement || document.body;
    this.backgroundElement = null;
  }
  return _createClass(BackgroundManager, [{
    key: "initialize",
    value: function initialize() {
      if (this.backgroundElement) return;
      this.backgroundElement = document.createElement("div");
      this.backgroundElement.className = "background-manager";
      this.backgroundElement.style.backgroundImage = "url('".concat(this.imageUrl, "')");
      this.backgroundElement.style.backgroundSize = this.size;
      this.backgroundElement.style.backgroundRepeat = this.repeat;
      this.targetElement.style.position = "relative";
      this.targetElement.appendChild(this.backgroundElement);
    }
  }, {
    key: "updateBackground",
    value: function updateBackground(imageUrl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (imageUrl) this.imageUrl = imageUrl;
      if (options.opacity !== undefined) this.opacity = options.opacity;
      if (options.size !== undefined) this.size = options.size;
      if (options.repeat !== undefined) this.repeat = options.repeat;
      if (this.backgroundElement) {
        this.backgroundElement.style.backgroundImage = "url('".concat(this.imageUrl, "')");
        this.backgroundElement.style.backgroundSize = this.size;
        this.backgroundElement.style.backgroundRepeat = this.repeat;
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.backgroundElement) {
        this.backgroundElement.remove();
        this.backgroundElement = null;
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/decorative/BadgeElement.js":
/*!***************************************************!*\
  !*** ./src/components/decorative/BadgeElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BadgeElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BadgeElement = /*#__PURE__*/function () {
  function BadgeElement() {
    var defaultText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    _classCallCheck(this, BadgeElement);
    this.state = "circle";
    this.text = defaultText;
  }
  return _createClass(BadgeElement, [{
    key: "render",
    value: function render() {
      var _this = this;
      this.element = document.createElement("div");
      this.element.className = "badge circle";
      this.pulseElement = document.createElement("div");
      this.pulseElement.className = "pulse-element";
      this.element.appendChild(this.pulseElement);
      this.textElement = document.createElement("span");
      this.textElement.className = "badge-text";
      this.textElement.textContent = this.text;
      this.textElement.style.opacity = "0";
      this.element.appendChild(this.textElement);
      this.element.addEventListener("mouseenter", function () {
        return _this.updateState("rectangle");
      });
      this.element.addEventListener("mouseleave", function () {
        return _this.updateState("circle");
      });
      return this.element;
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      var _this2 = this;
      this.state = state;
      this.element.className = "badge ".concat(this.state, " flex align-items-center justify-content-center");
      if (state === "rectangle") {
        setTimeout(function () {
          _this2.textElement.style.opacity = "1";
        }, 120);
      } else {
        this.textElement.style.opacity = "0";
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/components/decorative/CardStampManager.js":
/*!*******************************************************!*\
  !*** ./src/components/decorative/CardStampManager.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardStampManager)
/* harmony export */ });
/* harmony import */ var _assets_utils_BaseSvgManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/utils/BaseSvgManager.js */ "./src/assets/utils/BaseSvgManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var CardStampManager = /*#__PURE__*/function (_BaseSvgManager) {
  function CardStampManager(filePath, cardElement) {
    var _this;
    _classCallCheck(this, CardStampManager);
    _this = _callSuper(this, CardStampManager, [filePath]);
    _this.cardElement = cardElement;
    return _this;
  }
  _inherits(CardStampManager, _BaseSvgManager);
  return _createClass(CardStampManager, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var svgContent;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(window.innerWidth <= 768)) {
                _context.next = 11;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return this.loadSVG();
            case 4:
              svgContent = _context.sent;
              this.createSVG(this.cardElement, svgContent, "mobile-stamp");
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0.message);
            case 11:
              window.addEventListener("resize", this.handleResize.bind(this));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 8]]);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
  }, {
    key: "handleResize",
    value: function () {
      var _handleResize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var svgContent;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.innerWidth <= 768)) {
                _context2.next = 8;
                break;
              }
              if (this.svgElement) {
                _context2.next = 6;
                break;
              }
              _context2.next = 4;
              return this.loadSVG();
            case 4:
              svgContent = _context2.sent;
              this.createSVG(this.cardElement, svgContent, "mobile-stamp");
            case 6:
              _context2.next = 9;
              break;
            case 8:
              this.removeSVG();
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function handleResize() {
        return _handleResize.apply(this, arguments);
      }
      return handleResize;
    }()
  }]);
}(_assets_utils_BaseSvgManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/decorative/DecorativeElement.js":
/*!********************************************************!*\
  !*** ./src/components/decorative/DecorativeElement.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DecorativeElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DecorativeElement = /*#__PURE__*/function () {
  function DecorativeElement(className, animationStyle) {
    var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    _classCallCheck(this, DecorativeElement);
    this.className = className;
    this.animationStyle = animationStyle;
    this.name = name;
  }
  return _createClass(DecorativeElement, [{
    key: "render",
    value: function render() {
      var element = document.createElement("div");
      element.className = this.className;
      if (this.animationStyle) {
        element.style.animation = this.animationStyle;
      }
      if (this.name) {
        element.setAttribute("name", this.name);
      }
      return element;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/decorative/StampElement.js":
/*!***************************************************!*\
  !*** ./src/components/decorative/StampElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StampSvgManager)
/* harmony export */ });
/* harmony import */ var _assets_utils_BaseSvgManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/utils/BaseSvgManager.js */ "./src/assets/utils/BaseSvgManager.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var StampSvgManager = /*#__PURE__*/function (_BaseSvgManager) {
  function StampSvgManager(filePath) {
    _classCallCheck(this, StampSvgManager);
    return _callSuper(this, StampSvgManager, [filePath]);
  }
  _inherits(StampSvgManager, _BaseSvgManager);
  return _createClass(StampSvgManager, [{
    key: "initialize",
    value: function () {
      var _initialize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var svgContent;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(window.innerWidth > 768)) {
                _context.next = 11;
                break;
              }
              _context.prev = 1;
              _context.next = 4;
              return this.loadSVG();
            case 4:
              svgContent = _context.sent;
              this.createSVG(document.body, svgContent, "stamp-svg", "rotating");
              _context.next = 11;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              console.error(_context.t0.message);
            case 11:
              window.addEventListener("resize", this.handleResize.bind(this));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 8]]);
      }));
      function initialize() {
        return _initialize.apply(this, arguments);
      }
      return initialize;
    }()
  }, {
    key: "handleResize",
    value: function () {
      var _handleResize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var svgContent;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.innerWidth > 768)) {
                _context2.next = 8;
                break;
              }
              if (this.containerElement) {
                _context2.next = 6;
                break;
              }
              _context2.next = 4;
              return this.loadSVG();
            case 4:
              svgContent = _context2.sent;
              this.createSVG(document.body, svgContent, "stamp-svg", "rotating");
            case 6:
              _context2.next = 9;
              break;
            case 8:
              this.removeSVG();
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function handleResize() {
        return _handleResize.apply(this, arguments);
      }
      return handleResize;
    }()
  }]);
}(_assets_utils_BaseSvgManager_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/sections/CodeSection.js":
/*!************************************************!*\
  !*** ./src/components/sections/CodeSection.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeSection)
/* harmony export */ });
/* harmony import */ var _base_Section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Section.js */ "./src/components/base/Section.js");
/* harmony import */ var _base_Block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Block.js */ "./src/components/base/Block.js");
/* harmony import */ var _base_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Button.js */ "./src/components/base/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var CodeSection = /*#__PURE__*/function () {
  function CodeSection() {
    _classCallCheck(this, CodeSection);
  }
  return _createClass(CodeSection, null, [{
    key: "create",
    value: function create() {
      var steamIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\"><g fill-rule=\"nonzero\"><path d=\"M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328h.002z\" fill=\"url(#prefix___Linear1)\" transform=\"translate(3.939 3.939) scale(7.8769)\"/><path d=\"M242.688 192.866l.023 1.245-61.676 89.6c-9.988-.457-20.007 1.3-29.523 5.214a64.283 64.283 0 00-11.8 6.302L4.27 239.403s-3.135 51.562 9.924 89.986l95.752 39.51c4.726 21.488 19.535 40.33 41.29 49.388 35.4 14.707 76.643-2.284 91.396-37.667a70.11 70.11 0 005.388-28.798l88.166-63.055 2.167.04c52.814 0 95.743-43.055 95.743-95.94 0-52.886-42.85-95.784-95.743-95.894-52.791 0-95.744 43.008-95.744 95.893h.079zM227.879 374.43c-11.453 27.569-43.055 40.542-70.522 29.097a53.871 53.871 0 01-27.758-26.482l31.169 12.918a39.779 39.779 0 0015.257 3.048c16.006 0 30.516-9.68 36.66-24.465 8.38-20.126-1.269-43.591-21.386-51.996l-32.296-13.351c12.43-4.726 26.561-4.884 39.779.606 13.39 5.538 23.63 15.967 29.113 29.303 5.482 13.335 5.45 28.041-.079 41.322m110.623-117.642c-35.005-.094-63.755-28.9-63.787-63.905.04-34.997 28.79-63.795 63.787-63.89 35.005.087 63.764 28.885 63.803 63.89-.031 35.005-28.798 63.819-63.803 63.905m-47.797-64.007c-.023-26.301 21.59-47.97 47.892-48.01 26.427 0 47.923 21.504 47.923 48.01.016 26.308-21.614 47.97-47.923 47.994-26.301-.04-47.915-21.693-47.9-47.994h.008z\" fill=\"#fff\"/></g><g fill-rule=\"nonzero\"><path d=\"M1.305 41.202C5.259 54.386 17.488 64 31.959 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C15.001 0 1.124 13.193.028 29.874c2.074 3.477 2.879 5.628 1.275 11.328h.002z\" fill=\"url(#prefix___Linear2)\" transform=\"scale(7.8769)\"/><path d=\"M238.75 188.928l.023 1.244-61.676 89.6c-9.988-.457-20.008 1.3-29.523 5.215a64.283 64.283 0 00-11.8 6.301L.331 235.464s-3.135 51.563 9.925 89.986l95.752 39.51c4.726 21.489 19.534 40.33 41.29 49.389 35.4 14.706 76.643-2.284 91.396-37.667a70.11 70.11 0 005.388-28.798l88.166-63.055 2.166.04c52.815 0 95.744-43.056 95.744-95.941 0-52.886-42.85-95.783-95.744-95.894-52.79 0-95.744 43.008-95.744 95.894h.08zM223.94 370.49c-11.452 27.57-43.055 40.543-70.521 29.098a53.871 53.871 0 01-27.759-26.483l31.17 12.919a39.779 39.779 0 0015.257 3.048c16.006 0 30.515-9.68 36.659-24.466 8.381-20.125-1.268-43.59-21.386-51.995l-32.295-13.352c12.43-4.726 26.56-4.883 39.778.607 13.391 5.537 23.631 15.966 29.113 29.302 5.483 13.336 5.451 28.042-.078 41.322M334.5 252.85c-35.005-.095-63.756-28.9-63.787-63.905.039-34.998 28.79-63.796 63.787-63.89 35.005.087 63.763 28.885 63.803 63.89-.032 35.004-28.798 63.818-63.803 63.905m-47.797-64.008c-.024-26.3 21.59-47.97 47.891-48.01 26.427 0 47.923 21.504 47.923 48.01.016 26.309-21.614 47.97-47.923 47.994-26.3-.04-47.915-21.693-47.9-47.994h.009z\" fill=\"#fff\"/></g><defs><linearGradient id=\"prefix___Linear1\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(0 64 -64 0 31.994 0)\"><stop offset=\"0\" stop-color=\"#111d2e\"/><stop offset=\".21\" stop-color=\"#051839\"/><stop offset=\".41\" stop-color=\"#0a1b48\"/><stop offset=\".58\" stop-color=\"#132e62\"/><stop offset=\".74\" stop-color=\"#144b7e\"/><stop offset=\".87\" stop-color=\"#136497\"/><stop offset=\"1\" stop-color=\"#1387b8\"/></linearGradient><linearGradient id=\"prefix___Linear2\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(0 64 -64 0 31.994 0)\"><stop offset=\"0\" stop-color=\"#111d2e\"/><stop offset=\".21\" stop-color=\"#051839\"/><stop offset=\".41\" stop-color=\"#0a1b48\"/><stop offset=\".58\" stop-color=\"#132e62\"/><stop offset=\".74\" stop-color=\"#144b7e\"/><stop offset=\".87\" stop-color=\"#136497\"/><stop offset=\"1\" stop-color=\"#1387b8\"/></linearGradient></defs></svg>\n    ";
      var minecraftIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"22\" height=\"22\" viewBox=\"0 0 512 512\" id=\"svg1\" xml:space=\"preserve\"><defs id=\"defs1\"></defs><path id=\"bg1\" fill=\"#81563a\" d=\"M 0,0 H 512 V 512 H 0 Z\"></path><path id=\"bg2\" fill=\"#61b441\" d=\"M 0,0 V 128 H 64 V 64 H 128 V 128 H 256 V 192 H 320 V 128 H 384 V 64 H 448 V 192 H 512 V 0 Z\"></path><rect id=\"rect1\" width=\"64\" height=\"64\" x=\"0\" y=\"0\" fill=\"#86d562\"></rect><rect id=\"rect2\" width=\"64\" height=\"64\" x=\"64\" y=\"0\" fill=\"#52a535\"></rect><rect id=\"rect3\" width=\"64\" height=\"64\" x=\"128\" y=\"0\" fill=\"#6cc349\"></rect><rect id=\"rect4\" width=\"64\" height=\"64\" x=\"192\" y=\"0\" fill=\"#86d562\"></rect><rect id=\"rect5\" width=\"64\" height=\"64\" x=\"256\" y=\"0\" fill=\"#6cc349\"></rect><rect id=\"rect6\" width=\"64\" height=\"64\" x=\"320\" y=\"0\" fill=\"#52a535\"></rect><rect id=\"rect7\" width=\"64\" height=\"64\" x=\"384\" y=\"0\" fill=\"#6cc349\"></rect><rect id=\"rect8\" width=\"64\" height=\"64\" x=\"448\" y=\"0\" fill=\"#52a535\"></rect><rect id=\"rect9\" width=\"64\" height=\"64\" x=\"0\" y=\"64\" fill=\"#52a535\"></rect><rect id=\"rect10\" width=\"64\" height=\"64\" x=\"64\" y=\"64\" fill=\"#66412c\"></rect><rect id=\"rect11\" width=\"64\" height=\"64\" x=\"128\" y=\"64\" fill=\"#52a535\"></rect><rect id=\"rect12\" width=\"64\" height=\"64\" x=\"192\" y=\"64\" fill=\"#3c8527\"></rect><rect id=\"rect13\" width=\"64\" height=\"64\" x=\"256\" y=\"64\" fill=\"#52a535\"></rect><rect id=\"rect14\" width=\"64\" height=\"64\" x=\"320\" y=\"64\" fill=\"#6cc349\"></rect><rect id=\"rect15\" width=\"64\" height=\"64\" x=\"384\" y=\"64\" fill=\"#66412c\"></rect><rect id=\"rect16\" width=\"64\" height=\"64\" x=\"448\" y=\"64\" fill=\"#6cc349\"></rect><rect id=\"rect17\" width=\"64\" height=\"64\" x=\"0\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect18\" width=\"64\" height=\"64\" x=\"64\" y=\"128\" fill=\"#998f8b\"></rect><rect id=\"rect19\" width=\"64\" height=\"64\" x=\"128\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect20\" width=\"64\" height=\"64\" x=\"192\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect21\" width=\"64\" height=\"64\" x=\"256\" y=\"128\" fill=\"#6cc349\"></rect><rect id=\"rect22\" width=\"64\" height=\"64\" x=\"320\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect23\" width=\"64\" height=\"64\" x=\"384\" y=\"128\" fill=\"#805539\"></rect><rect id=\"rect24\" width=\"64\" height=\"64\" x=\"448\" y=\"128\" fill=\"#52a535\"></rect><rect id=\"rect25\" width=\"64\" height=\"64\" x=\"0\" y=\"192\" fill=\"#976746\"></rect><rect id=\"rect26\" width=\"64\" height=\"64\" x=\"64\" y=\"192\" fill=\"#805539\"></rect><rect id=\"rect27\" width=\"64\" height=\"64\" x=\"128\" y=\"192\" fill=\"#976746\"></rect><rect id=\"rect28\" width=\"64\" height=\"64\" x=\"192\" y=\"192\" fill=\"#ad7a54\"></rect><rect id=\"rect29\" width=\"64\" height=\"64\" x=\"256\" y=\"192\" fill=\"#66412c\"></rect><rect id=\"rect30\" width=\"64\" height=\"64\" x=\"320\" y=\"192\" fill=\"#805539\"></rect><rect id=\"rect31\" width=\"64\" height=\"64\" x=\"384\" y=\"192\" fill=\"#976746\"></rect><rect id=\"rect32\" width=\"64\" height=\"64\" x=\"448\" y=\"192\" fill=\"#66412c\"></rect><rect id=\"rect33\" width=\"64\" height=\"64\" x=\"0\" y=\"256\" fill=\"#805539\"></rect><rect id=\"rect34\" width=\"64\" height=\"64\" x=\"64\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect35\" width=\"64\" height=\"64\" x=\"128\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect36\" width=\"64\" height=\"64\" x=\"192\" y=\"256\" fill=\"#976746\"></rect><rect id=\"rect37\" width=\"64\" height=\"64\" x=\"256\" y=\"256\" fill=\"#805539\"></rect><rect id=\"rect38\" width=\"64\" height=\"64\" x=\"320\" y=\"256\" fill=\"#ad7a54\"></rect><rect id=\"rect39\" width=\"64\" height=\"64\" x=\"384\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect40\" width=\"64\" height=\"64\" x=\"448\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect41\" width=\"64\" height=\"64\" x=\"0\" y=\"320\" fill=\"#ad7a54\"></rect><rect id=\"rect42\" width=\"64\" height=\"64\" x=\"64\" y=\"320\" fill=\"#805539\"></rect><rect id=\"rect43\" width=\"64\" height=\"64\" x=\"128\" y=\"320\" fill=\"#66412c\"></rect><rect id=\"rect44\" width=\"64\" height=\"64\" x=\"192\" y=\"320\" fill=\"#66412c\"></rect><rect id=\"rect45\" width=\"64\" height=\"64\" x=\"256\" y=\"320\" fill=\"#998f8b\"></rect><rect id=\"rect46\" width=\"64\" height=\"64\" x=\"320\" y=\"320\" fill=\"#805539\"></rect><rect id=\"rect47\" width=\"64\" height=\"64\" x=\"384\" y=\"320\" fill=\"#976746\"></rect><rect id=\"rect48\" width=\"64\" height=\"64\" x=\"448\" y=\"320\" fill=\"#805539\"></rect><rect id=\"rect49\" width=\"64\" height=\"64\" x=\"0\" y=\"384\" fill=\"#805539\"></rect><rect id=\"rect50\" width=\"64\" height=\"64\" x=\"64\" y=\"384\" fill=\"#976746\"></rect><rect id=\"rect51\" width=\"64\" height=\"64\" x=\"128\" y=\"384\" fill=\"#66412c\"></rect><rect id=\"rect52\" width=\"64\" height=\"64\" x=\"192\" y=\"384\" fill=\"#ad7a54\"></rect><rect id=\"rect53\" width=\"64\" height=\"64\" x=\"256\" y=\"384\" fill=\"#976746\"></rect><rect id=\"rect54\" width=\"64\" height=\"64\" x=\"320\" y=\"384\" fill=\"#ad7a54\"></rect><rect id=\"rect55\" width=\"64\" height=\"64\" x=\"384\" y=\"384\" fill=\"#805539\"></rect><rect id=\"rect56\" width=\"64\" height=\"64\" x=\"448\" y=\"384\" fill=\"#976746\"></rect><rect id=\"rect57\" width=\"64\" height=\"64\" x=\"0\" y=\"448\" fill=\"#66412c\"></rect><rect id=\"rect58\" width=\"64\" height=\"64\" x=\"64\" y=\"448\" fill=\"#805539\"></rect><rect id=\"rect59\" width=\"64\" height=\"64\" x=\"128\" y=\"448\" fill=\"#998f8b\"></rect><rect id=\"rect60\" width=\"64\" height=\"64\" x=\"192\" y=\"448\" fill=\"#805539\"></rect><rect id=\"rect61\" width=\"64\" height=\"64\" x=\"256\" y=\"448\" fill=\"#805539\"></rect><rect id=\"rect62\" width=\"64\" height=\"64\" x=\"320\" y=\"448\" fill=\"#976746\"></rect><rect id=\"rect63\" width=\"64\" height=\"64\" x=\"384\" y=\"448\" fill=\"#66412c\"></rect><rect id=\"rect64\" width=\"64\" height=\"64\" x=\"448\" y=\"448\" fill=\"#ad7a54\"></rect><rect id=\"rect65\" width=\"64\" height=\"4.4\" x=\"384\" y=\"64\" fill=\"#503120\"></rect><rect id=\"rect66\" width=\"64\" height=\"4.4\" x=\"320\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect67\" width=\"64\" height=\"4.4\" x=\"128\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect68\" width=\"64\" height=\"4.4\" x=\"192\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect69\" width=\"64\" height=\"4.4\" x=\"64\" y=\"64\" fill=\"#503120\"></rect><rect id=\"rect70\" width=\"64\" height=\"4.4\" x=\"0\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect71\" width=\"64\" height=\"4.4\" x=\"64\" y=\"192\" fill=\"#65402a\"></rect><rect id=\"rect72\" width=\"64\" height=\"4.4\" x=\"256\" y=\"192\" fill=\"#503120\"></rect><rect id=\"rect73\" width=\"64\" height=\"4.4\" x=\"448\" y=\"192\" fill=\"#503120\"></rect><rect id=\"rect74\" width=\"64\" height=\"4.4\" x=\"384\" y=\"256\" fill=\"#503120\"></rect><rect id=\"rect75\" width=\"64\" height=\"4.4\" x=\"192\" y=\"320\" fill=\"#503120\"></rect><rect id=\"rect76\" width=\"64\" height=\"4.4\" x=\"128\" y=\"256\" fill=\"#503120\"></rect><rect id=\"rect77\" width=\"64\" height=\"4.4\" x=\"0\" y=\"256\" fill=\"#65402a\"></rect><rect id=\"rect78\" width=\"64\" height=\"4.4\" x=\"256\" y=\"384\" fill=\"#764d34\"></rect><rect id=\"rect79\" width=\"64\" height=\"4.4\" x=\"0\" y=\"448\" fill=\"#503120\"></rect><rect id=\"rect80\" width=\"64\" height=\"4.4\" x=\"320\" y=\"448\" fill=\"#764d34\"></rect><rect id=\"rect81\" width=\"64\" height=\"4.4\" x=\"320\" y=\"320\" fill=\"#65402a\"></rect><rect id=\"rect82\" width=\"64\" height=\"4.4\" x=\"384\" y=\"384\" fill=\"#65402a\"></rect><script xmlns=\"\"></script></svg>\n  ";
      var robloxIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1333.35 1333.35\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M272.91 0L0 1060.43l1060.43 272.91L1333.34 272.9 272.91-.01zm316.86 536.5l207 53.25-53.28 207.02-207-53.28 53.28-207z\" fill=\"#1a81e2ff\" fill-rule=\"nonzero\"/></svg>\n  ";
      var itchIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\"><path d=\"M71.19 33.84C49.383 46.788 6.413 96.156 6 109.103v21.433c0 27.168 25.395 51.044 48.448 51.044 27.679 0 50.745-22.944 50.75-50.173 0 27.226 22.274 50.173 49.96 50.173 27.683 0 49.243-22.944 49.243-50.173 0 27.226 23.677 50.173 51.356 50.173h.498c27.679 0 51.378-22.944 51.378-50.173 0 27.226 21.55 50.173 49.23 50.173 27.679 0 49.954-22.944 49.954-50.173 0 27.226 23.065 50.173 50.745 50.173 23.043 0 48.438-23.874 48.438-51.044v-21.433c-.43-12.947-43.395-62.315-65.195-75.263-67.773-2.381-114.787-2.79-184.822-2.782-70.01.005-165.507 1.097-184.797 2.782h.005zm132.863 134.945a57.163 57.163 0 01-9.742 12.541 57.88 57.88 0 01-40.569 16.554 58.039 58.039 0 01-40.65-16.558c-3.777-3.709-6.649-7.675-9.295-12.293v.009c-2.623 4.627-6.309 8.589-10.085 12.302a58.06 58.06 0 01-40.637 16.546c-1.9 0-3.867-.52-5.473-1.063-2.216 23.18-3.165 45.318-3.491 61.487v.09c-.045 8.21-.08 14.948-.122 24.31.43 48.642-4.817 157.618 21.438 184.392 40.682 9.498 115.542 13.817 190.656 13.84h.006c75.11-.023 149.974-4.342 190.657-13.817 26.254-26.78 21.008-135.755 21.437-184.38-.038-9.363-.077-16.106-.12-24.31v-.09c-.339-16.152-1.277-38.297-3.505-61.472-1.605.543-3.588 1.07-5.495 1.07a58.094 58.094 0 01-40.648-16.544c-3.788-3.72-7.462-7.682-10.092-12.302l-.012-.016c-2.639 4.613-5.513 8.586-9.3 12.293a58.046 58.046 0 01-40.644 16.553c-15.791 0-30.122-6.332-40.57-16.553a57.496 57.496 0 01-9.746-12.542 56.959 56.959 0 01-9.647 12.542 58.073 58.073 0 01-40.66 16.553c-.551 0-1.107-.023-1.65-.045h-.018c-.55.022-1.1.045-1.65.045a58.065 58.065 0 01-40.656-16.553 56.851 56.851 0 01-9.656-12.537l-.061-.052zm-41.75 53.985l-.004.019h.045c16.53.036 31.23 0 49.411 19.861 14.337-1.5 29.285-2.252 44.278-2.227h.023c14.992-.023 29.94.746 44.277 2.238 18.204-19.854 32.88-19.81 49.411-19.854h.045v-.023c7.825 0 39.054 0 60.831 61.147l23.4 83.897c17.334 62.414-5.546 63.952-34.085 63.997-42.333-1.56-65.76-32.315-65.76-63.047-23.428 3.844-50.768 5.767-78.097 5.767h-.011c-27.331 0-54.662-1.923-78.085-5.767 0 30.732-23.428 61.464-65.756 63.047-28.539-.045-51.424-1.583-34.086-63.974l23.383-83.897c21.777-61.147 53.029-61.147 60.83-61.147l-.05-.037zm93.712 48.055v.015c-.039.039-44.554 40.922-52.554 55.463l29.149-1.167v25.418c0 1.191 11.7.707 23.405.167h.016c11.707.543 23.405 1.024 23.405-.165v-25.418l29.149 1.162c-8-14.54-52.554-55.46-52.554-55.46v-.013l-.005.004-.011-.006z\" fill=\"#f72a2aff\" fill-rule=\"nonzero\"/></svg>\n  ";
      var amongusIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Layer_1\" x=\"0px\" y=\"0px\" width=\"22px\" height=\"22px\" viewBox=\"0 0 150 198\" enable-background=\"new 0 0 150 198\" xml:space=\"preserve\">  <image id=\"image0\" width=\"22\" height=\"22\" x=\"0\" y=\"0\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADGCAMAAAAHUYknAAAABGdBTUEAALGPC/xhBQAAACBjSFJN AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACf1BMVEUAAAAcAAwcAAwcAAwb AAsRAAAbAAscAAscAAwbAAsbAAsaAAobAAsZAAgcAAwbAAsUIDASKDoQKDkTKTkTKDgRIjMSKToS KTkSKDkSKToSKDoQJzoQKToQJjYTKDkSJzkXFCMxOjo2Ozs2Ojw3Ojs1Ozs1OT02PDw3OTw2Ojs2 Ozw3Ojs3OjozMzM2Ojw3OzwcAQw7BAxGBQ1mCA5xCQ5bBw0mAgyGCw+mDhDGERG7EBCbDQ97Cg4x AwywDxBRBg2QDA83Aw8tAhStDhiCCS0hAQ5oBi+pDR9QBCR6CDjBEBORCitcBSqkDSKkFRiOGB1s HSVWICo/Iy80JDITKToTJjcVHy4VHCsXFSMZDRoZCxcbAw4nARG3DxhhHihFBB9+CDUeJzeNCi6v FBabCyazDhq8DxU/AxyICTBuBzIzUWI7W2xUeYtLb4AjPU6CGiBDZXZkjZ90obN8q72Vytyo0+LC 3+rI4+ybzd5cg5WWCym6EhMbM0SEtce12ebv9fj8/Pz1+Pri7/TO5u4rR1igDCRKIS0pSGBQfJvb 7PJsl6liBi2ZFxseOE1HcpRPfaGDts10BzVXhqg4XXp6rcXV6fC73OiMwNSh0OAaM0ZLd5pci6wx U21gkK9tnrro8vYzAhdyo74tTWeu1uRLBCI8YoBWBSdTgaQWLkCQxdhfiZ4iPlNpmbdahJ1Qe5g5 AxmHu9B2qMJ/sclDbY1klbNAaIclQ1o0WHN1CCMUITEaCBQYEB13GyIWGigaBhEpJjQsFyODCTM9 AxKuDh03OzwiDxgpHiQuKC0zMzYrIScmFh4nGiEfCBIdBA81NzkxMDMwLDAsJSohCxUkExv///9F ao9VAAAAMHRSTlMAP3+/jw8vb6/Pn0/fH+9f738/r18P74/fz59PHy+/b78fX6/fjz8vb8/vn08P f7/2AEuIAAAAAWJLR0TUCbsLhQAAAAd0SU1FB+cFDQ8rAm49DU8AAASXelRYdFJhdyBwcm9maWxl IHR5cGUgeG1wAABYhb1YSZLjOAy84xXzBAkkQfE5siXeJmKO/fzJBGVbm7eqiC5HaeECJJYEaMuf f/+Tf/Cn2gUJ11DzkDvrLdjFUo7amVqybMXmMKnO9XK5VMVqjESOpBxSnEIXp9zFgLWDFYlDHjM2 ppDHOKdouENgCNikGmqYoe6ahzDmwbDRJiqzXju+29XmHDgn1AA00SpxhLFN3Jc7kocYjF24I953 aJeGOKVOlOBq9qFgOodOJ+DpAt+6kEPRGZt6UzdeTfWKcQ38hyLcI6694Db5tjHAHFwjRrrdRxcD FSItjEljjLY1TpZJGjjkiA9EwqCa/U/njFXARMyZmqEMH0eiuCquE2WIGR5CRoTokzzAMGjg/BYF ICBYCIVacV8V+AgrbvPi1tcM1xJVc+06GnTxEa8rmx9B0lngwGoTTBmApyN4d3jdi8SWcOKADhDU rhS0WM+FuCZsTAw+TYXWJrg/Cm5Y44TEdPHyGvAzvBA4bYWLSw85xpSt+emdN86FCwZAnIxIYFFN 6rGpbjlYRPHNTMZxZxzUc31LHvmZ/qN6Wetv8k90d+B3Re5guz+dJIS8wHDYfkwOiolM0oSE9KWa KKja9cDto7jOE392Tg7J6xYpQlYFLUcdriLF2O5UcOc8aQ4ygXldiriStBgqzvxWBTKeUQs2Ypfa ZE1kfy5ajrJxVS8n/QvRZEIxy+UmVt5Bfi7W2TeaOckmd7YHsyDcPUp+8njN4N8dgzNqjCw1wY2c PVmBhjvbGkG4i3cH8BveQpqGFIaQQWEKJqoCLHgHKj4VIEqouZgN6vMDAoPwJz7y5YCAKRDyvRbc EGxaha8hEDnN2xGahkAfFHjIPKID7hggJoiIrKxsWSBCBjoTVmBMJC6CFsM7jdmjo0NLa5pAdD2i lbXDvPG4v0Jq1lM8nhO0J48tmhVGevgLY0CDFGhxpo+AiHCwFJhC51NEdGIyeyCoDHxLLrW0BGPk yYYSqZQ9oiJTCguwIwcQUB5qsAKpBvVsUPCeAJZ6Vb61n7VncDjwzAGCXHZNEpmU+8eYcBD6CpA9 Cu7I9nzrXR7yFY15uNitLl6zn+XqI1U/cb1sff/C9SsEORuzeV7zVE6J+ry0rMUxgniC2D6j+Kfo VGVa/bQ6sjjKUh3rNibv3Q/RvbeqxfWy9f1Hrh/ocLANLkaOuetNBbyP7ntmoC6lo7l+ADb1xau/ kM9dL1vff1cj1+Jk6/ufu162vr83prWbuY1+o4J2HKvH8Mgn9OATIwTGnVKEx30eRvvlVM2F7VRm zvoJnQIHByyDMgvOtHZyrBALG9atHsX/pMfzsFn9K8OxszzJOHlhkmNEIbFn5qytkbs5R09035go j+PM70z8IGp7Vp2TSl6x6pveK8fmu+u9bwrajVTyPavOSSW/LWg3UsnnrNJ61or84MxjzYsOtj2Z rJIz3vPrcWiX31bGW2GU7yvj8rVhORvdTiTyOED97kQi79viHcHLM9JfQnQI/PlXZK6STX749/lH fux/xmgzJ7+l0LSWeAwJfweR/wECtfxjLK33zAAADalJREFUeNrFnPlDFOcdxtldbhBqc5ieqUeU S1gBxRU1lpZjABURrU1ACBERtUlj1mhIomKK1gCuqNF60Cx2RVNssTFo06ZNqQseKKL+Q51ddue9 r5lZ+vwGvMeH9/2+z7zHzBsXZ1kOh9PpQhTvdDocCdZLNqvEpOQUN1Ou1CTH7DOlpaa7xUqJT5vF dpsTnyHBFG22zDmzAuVIlmeaUXJmzNss0aUKFVKGM6ZNlqDcUqDJYgeWphBTpFJjBJZpiUqXMwYx lpBqESoUY2m2Y3GolhUWFUe1vHAFDyze5gajB/uKwqKSlR5Mq0pXL2eypdsaYfGUGtYUlazysLR2 9TJGR2baR5VEgSrxCLS2iN5mTruoEomiC0tFUGGtXkPjSrUJCw/31+WgQlpH68tUWwLfgbXUSmmo kEqWxYYrAZnErChWggqpmOxKG/rRiTTVWmUq3TKKSAOz3FjwM+fnq0xQ6SoluKz6BNxYZb8wR+Xx rCQiLNG2xir7pVkqXcsxrBS7Gqu8otIClmcd5q7JVrCgYVilVVvB8qzEuCzMJzKhLtRqLFHpIxIN sAzz7gXN3Wu19TJ1b9hYt6l+cwNdW7Zu3fqrbdu2/fqNN960MBrnAKpGTWsSIm2vb5DWlq3fm/t9 c1jQ1KFZa+Ezbdz0ljxTRC+8+JIZrBS4D1s5TG/XqTOF9fI8dTC0D3ewqbabhAqDzVUFQ/pQY7rW RgtQIb2iGGLQOKzQtDYG1SZrUCHNU6FKgBxe07Sd9KjabJ1Kj32FjkwDWO06Ft0TLHZgVD+Q54qH x6G2K1Y9GOGSxoLsoUOj+8N2RiW7d+/es5fUb/Tfv8PI8kNzoUXDepco/J3fvrfvfS9N+z84ENHB ffs+3EPS/chUaHWSVB+hgfXx3k+8LB06fASo6+inhw56P3nvd0j2l+XCC5pqVelY3STWMaTY479n QnkPHCF0Qif7bLd6N0Ku1UPF6oXL7DvpO8Wk2n+Epq4DB70fwmVI2So0NeqnYsHTheM+32l2Y316 hK6uQ97PFJsLWuLrD0SNnG3BjXXG5/OdZWN9foSlc969UDE/FmNBE9PmEBbx7NmEtJXPd56NtZ+J 1fUHLxT4Eg8hKOIrqFigtAsXdapLXo4OM7k+h7vxFTEWtNOm0bA2gtIuhxprgId1iIl12OuFLOwn CgOxnIoFGfzJENYfeVjec10MrC+8cHTNVRiIfioWGId9ISrfIBfLe/CDA0ePdtE60fs+wPopiybB 4Yh3uZDN7vYwVhMztK7IYEXg/nTgBIq1X//tx6AsKpPDSTuNC4Sx8AcPKOqqTxhbKNoJo9W6zoV+ s4dnEZnJjAOBIRpWLxZavmuyWGG0cydCg/OL/eGfoODCjD7RxT6k6BFg+WZ0VoULESvmHdyTr34+ 1vUI1ukvzWL9mYrlEBzHaXys4QiW74ZZrL9QhqLwNMcvi2W6G/9KwUoRULlHpLHkTILQeR+JlSai iviDFJa5fhykYIkP5IYUsHwDN5WpvrxGYiUIqSL+wLZTBEt/NqoOyEGfbxjHQvpwWfHq0tJVntLS kkLCH4iFD2EQUV1Ti/xT1yhYYIm6ZjV8FABxaQKsBh+u03+Tb7GvdCoI6wVs+vI6ehJQjPsDgQUW Y7d8pL6Wi7GbA+HUAGsuGlorsPMJsI0+wsACE5szPppO3/jqPJ/p1OClSNo+DMsILfzUEnRigIEF FonHfSxdujF4itafN8/euASnwx/V0Qn7Gg8Ta4iBVceMeXwIDAx8PQg0MHANT3EVYL2EhFYRG6uH gQXtP1z1WRMIrcgaIzqbWcfG6mBgQTObYWtUo6CkeWjEEwdy4MBBY2BBDtEwaoXqYh8eWg5WaHnc Yixod7LPni6M9mF0K7kwXE91W2V3d3dNa836NhkseMvtuGmoi7ehYuaiHl+sM63fpUEyqMqYWMiG zRmTVKMXoEKiO1zRgVjStENDhZs8bTMQ2XS7Y6qpLsNFNLwamdVETwv/rmkmsNDt3Nu3lKHuXEdK MHZ1MW9SxHobKbThulqD3bqCQoENiEQsrBWxPPgx3bC0r56809eA60VjyWMRq5couu/MSXEzXb5y oYEU2AqM+kO5SSzqtvzwZY653rp6nIaEUBkPaj9B1Y/PaxiniYxDjOHbd0ZHL6LdNnr5yvD1Bpbg fcBkJlYPPq9hHXLachDVsOVntJ01C1gf2cH1zT9cMFa6dSwbDqO++afbnUHb8LOE5fnWWv9tC1cD Uc1RweKc628w35Fb/vVvN47lUMHSPBxt/M4U1Ob/vBmthobVbhVLd9Zjqkxvbe+Fln3Qe1NOomrz WPqYfFeBbHPdhlAegOUwi7VTxBXqzLp64dn1d8fqeqPp19GwkpWw2iSwwq3WW1dXX08G2+b6+rpv ezcgaUtpWK6YYKnIBiyp16RUZVQDvTTlVsLqtg7BwXKaxeq0DiGFlaCG1WodgtQyEsuhhjUWC6xC y1haLLD+S2KlKWLFwCGq/SQWOIyulcKy9DIsXXfbeVg9Ulg7rGPg6g5Yx4rBUGylYMUrYmn2Y2kG FpjMuzhYHTQs4euwqrqriqXRsGx/KnbagmX1VWtCY7ZgaTZTNWn2YN21F2uHBawR6Jc2TyLGLGDB i7UW6yhoHwKsVAtY9j5/OmEspxUsO42+usU2LDsdtVKzD8vGoA8fA/jtwZJaxEppp8bAAq8a1Mpj 2dZcnSwsMLEJyGPZFV0zjaWVm8XCd6FtGozdWDWqWMSevS3ziLA7wNVkWsVqsSPqI40FZptgDwK8 httMYpUxsbRd1r5wgxuLhgXWieQmJRgilIMX61yRxtKG7MRifJYhr7ZoQQFbsSy6V1NLtJxmoxbo o0A3p2o+ltZqoR93tlBqiVPF6qdy7TJtq01jtIEFYWVwqgZYPVQsrcXkDLqtBSrETcPiPauFWPpC yIyBVcIlgNUo/N0weCO+1gyW1qJs+NXoCwTAtuATMp7Ny2Bp2pgaWNsYmr2KigU+P2w3iRVqMekx eXcMzwz8Af6Gn2dcslihGJMJ/urKMY1TCXylBvRyJydHlQhLb7KaSr5ftHWO0fI1GpUg3zIDh6hg t29AjBVGa+2+S2NrauuuYeUBzYLc1gUcYgjPEVDFmtFYa2u3oZrW1jFeYuAPbuQeGTAUiZg3iaUk 4A+wm8J7zY3/X6x0BAuKeTy4AJbfVJUyAnUg7xvA1yo0M7PMBhZ29QjY1W3sZ2WJHRYY7UlxjODC x+JsYAFvxG/zc7Oaa3ax8AsroM/qUDevmgUsxkBEe7EcGYyQp8Qey4VjwVecIFyzgAVMnrz7Cr49 pxGaLMwCFqiCvHQEuWvI7a/t0TUUaPeX2Y/V0VMbgKfBYO1KuQEIuZmJKokaawMB/d+poMPoNAG/ P7xlhDx6wWAnqbB7rMxhAV90l/lhNaIlod5o+AP1XiLhZ1H9IqoOUQm0oQ5tudFv44oXFCecNVe5 ZVTWgeYCL2syLqETfK8lxGp3SyiAN3qt8SfWRbJJ3AKFWH63UOVkISDimVccOnhxbwOWv5+TKyOO qQSn6NNX81j+ZmoJxt9dcTxlumKBVdbcQc9UYSQRXT+X4HDqIj4ZFk7mWVj+kSG2uYDhmxSnIJd1 LG4mMHyVbnSON4OVgnxWz80EHgBKl5Y5zWA5EHPm5QFmmq5CxX1fiYeVKYcFzNSlhJVoEgu6ooT3 MAVmqnj/qUkskI/rLCCP4sVzRr4RNax0KSxj+qB6C6ThEMKlD8CaA+fj7YwBM3WrUYHiG+WxQvmk nAVMmNUiHl5CqmEBZ+E0MzBT1Rt/nSaxOLtTQGAFo3prvzxWOYIFXb3LdAhgpqqhBflihwALq0PC IcyaKfJfi2Y2gCMYEviRGfMgtJRvPTWNNS6MeagP1e+4lhnoKNY4hsXqfmhNon4Xq1msCVBpOzU9 MC3FWU1YxiUkgqdPB4Z1D6q1WUCletHv/AULjc4QPH16MKz7ULXuMjwwO0bgPz9Y9NpiaaYlWdl6 8Q+jectlsSbDWMFHbgQs0GP4V8cQAuV+PKUnz8nNWyoBtSA7iMUIHwssFiZmMk66ZRXJoJPN5zMt XbAokhSKEb5DBPBanshSPZoKGspdwqHKzwEJpyWx/Ea66UjOcUms6SCsAhbY/Gw42ZSRnesQ/WQ1 ks01EcSURY/0HDSVHBY03o2cT2WoHgYJ5UpQBaUcogLMH56BrM/FVJPBoBRXNp7GcAh3Bbutyqn/ /pQovB5PB6nKIxqLSAK6opzOVdFcDlf1AA5Mvks8nKJTBRfiWFlEEsiuy7GNl9Bmth+v6wmae/IR C+o5o6l05eBYi8k0z+CyyvyBqNobaZU9Igt4Mv1g4vk4hPd4fGLi3v0gWwVEbOUQaR7IDChD99iV 3Z+e0ZOgSKRH5BNpph7LQz1+KqxSQjmUp2MukWpCmooZw2pUNKNfSnJJ+aIbHYQWqBiTnDwivu7J 9OP4fTMQhBYy5zdL83GwqUkR2KQ9UAXc+SAF7MEzNtOzCVuCSgA142BEjN1/+pyCNv7wqXjEy2hR lsz0VG+yvFzSxaanJ4CeSniQnLKzlkgxRbQkqyDHeqUCJLlpPImWn7soNkQF+fmmkAzNz3utwFai RQuz5FdhgmGwOCu3INsiT05BQX7e4vnWaUi6Bfn56jGXnZufvzgWPHTA/NwCjvS/q8P8D02xG212 RxoxAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIzLTA1LTEzVDE1OjQzOjAyKzAwOjAw6VGydAAAACV0 RVh0ZGF0ZTptb2RpZnkAMjAyMy0wNS0xM1QxNTo0MzowMiswMDowMJgMCsgAAAAodEVYdGRhdGU6 dGltZXN0YW1wADIwMjMtMDUtMTNUMTU6NDM6MDIrMDA6MDDPGSsXAAAAAElFTkSuQmCC\"/></svg>\n  ";
      var steamButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Steam",
        icon: steamIcon,
        className: "steam-button",
        onClick: function onClick() {
          return window.open("https://steamcommunity.com/id/choxypop", "_blank");
        }
      });
      var minecraftButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Minecraft",
        icon: minecraftIcon,
        className: "minecraft-button",
        onClick: function onClick() {
          return window.open("https://xbox.com/play/user/choxypop", "_blank");
        }
      });
      var robloxButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Roblox",
        icon: robloxIcon,
        className: "roblox-button",
        onClick: function onClick() {
          return window.open("https://www.roblox.com/es/users/432698417/profile", "_blank");
        }
      });
      var itchButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Tienda de Apps",
        icon: itchIcon,
        className: "itch-button",
        onClick: function onClick() {
          return window.open("https://choxypop.itch.io/", "_blank");
        }
      });
      var amongusButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Among Us",
        icon: amongusIcon,
        className: "amongus-button",
        onClick: function onClick() {
          return window.open("https://amongus.choxypop.com/", "_blank");
        }
      });
      var codeBlock = new _base_Block_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      codeBlock.addButton(steamButton);
      codeBlock.addButton(minecraftButton);
      codeBlock.addButton(robloxButton);
      codeBlock.addButton(itchButton);
      codeBlock.addButton(amongusButton);
      var codeSection = new _base_Section_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Perfil de Juegos", "code");
      codeSection.addBlock(codeBlock);
      return codeSection;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/sections/MainSection.js":
/*!************************************************!*\
  !*** ./src/components/sections/MainSection.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainSection)
/* harmony export */ });
/* harmony import */ var _base_Section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Section.js */ "./src/components/base/Section.js");
/* harmony import */ var _base_Block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Block.js */ "./src/components/base/Block.js");
/* harmony import */ var _base_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Button.js */ "./src/components/base/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var MainSection = /*#__PURE__*/function () {
  function MainSection() {
    _classCallCheck(this, MainSection);
  }
  return _createClass(MainSection, null, [{
    key: "create",
    value: function create() {
      var websiteIcon = "\n      <svg width=\"22\" height=\"22\" id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 122.88 116.87\"><defs><style>.cls-1{fill: #0a8de4ff;fill-rule:evenodd;}.cls-2{fill:#fff;}</style></defs><polygon class=\"cls-1\" points=\"61.37 8.24 80.43 0 90.88 17.79 111.15 22.32 109.15 42.85 122.88 58.43 109.2 73.87 111.15 94.55 91 99 80.43 116.87 61.51 108.62 42.45 116.87 32 99.08 11.73 94.55 13.73 74.01 0 58.43 13.68 42.99 11.73 22.32 31.88 17.87 42.45 0 61.37 8.24 61.37 8.24\"/><path class=\"cls-2\" d=\"M37.92,65c-6.07-6.53,3.25-16.26,10-10.1,2.38,2.17,5.84,5.34,8.24,7.49L74.66,39.66C81.1,33,91.27,42.78,84.91,49.48L61.67,77.2a7.13,7.13,0,0,1-9.9.44C47.83,73.89,42.05,68.5,37.92,65Z\"/></svg>\n    ";
      var emailIcon = "\n      <svg width=\"22\" height=\"22\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 122.88 92.12\" style=\"enable-background:new 0 0 122.88 92.12\" xml:space=\"preserve\"><style type=\"text/css\"><![CDATA[.st0{fill:#EA4335;}.st1{fill:#C5221F;}.st2{fill:#FBBC04;}.st3{fill:#34A853;}.st4{fill:#4285F4;}]]></style><g><path class=\"st4\" d=\"M8.36,92.12h19.54V44.67L0,23.76v60.08C0,88.42,3.78,92.12,8.36,92.12L8.36,92.12z\"/><path class=\"st3\" d=\"M94.97,92.12h19.54c4.67,0,8.36-3.78,8.36-8.36v-60L94.97,44.67V92.12L94.97,92.12z\"/><path class=\"st2\" d=\"M94.97,8.4v36.27l27.91-20.91V12.58c0-10.37-11.82-16.25-20.11-10.05L94.97,8.4L94.97,8.4z\"/><polygon class=\"st0\" points=\"27.9,44.67 27.9,8.4 61.44,33.57 94.97,8.4 94.97,44.67 61.44,69.76 27.9,44.67\"/><path class=\"st1\" d=\"M0,12.58v11.18l27.91,20.91V8.4l-7.8-5.87C11.82-3.66,0,2.29,0,12.58L0,12.58z\"/></g></svg>\n    ";
      var whatsappIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z\" fill=\"#25D366\"/></svg>\n    ";
      var telegramIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_4507_2)\"><path d=\"M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z\" fill=\"url(#paint0_linear_4507_2)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M10.8638 23.7466C17.8603 20.6984 22.5257 18.6888 24.8601 17.7179C31.5251 14.9456 32.91 14.4641 33.8127 14.4482C34.0113 14.4447 34.4552 14.4939 34.7427 14.7272C34.9855 14.9242 35.0523 15.1904 35.0843 15.3771C35.1163 15.5639 35.1561 15.9895 35.1244 16.3219C34.7633 20.1169 33.2004 29.3263 32.4053 33.5767C32.0689 35.3752 31.4065 35.9782 30.7652 36.0373C29.3714 36.1655 28.3131 35.1162 26.9632 34.2313C24.8509 32.8467 23.6576 31.9847 21.6072 30.6336C19.2377 29.0721 20.7738 28.2139 22.1242 26.8113C22.4776 26.4442 28.6183 20.8587 28.7372 20.352C28.7521 20.2886 28.7659 20.0524 28.6255 19.9277C28.4852 19.803 28.2781 19.8456 28.1286 19.8795C27.9168 19.9276 24.5423 22.158 18.0053 26.5707C17.0475 27.2284 16.1799 27.5489 15.4026 27.5321C14.5457 27.5135 12.8973 27.0475 11.6719 26.6492C10.1689 26.1606 8.97432 25.9023 9.07834 25.0726C9.13252 24.6404 9.72767 24.1984 10.8638 23.7466Z\" fill=\"white\"/></g><defs><linearGradient id=\"paint0_linear_4507_2\" x1=\"24\" y1=\"0\" x2=\"24\" y2=\"47.644\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#2AABEE\"/><stop offset=\"1\" stop-color=\"#229ED9\"/></linearGradient><clipPath id=\"clip0_4507_2\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n    ";
      var googleIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><mask id=\"mask0_4507_2\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"48\" height=\"48\"><path d=\"M47.5391 19.5474H24.5113V28.7747H37.7431C37.5304 30.0805 37.0528 31.3652 36.3534 32.5366C35.552 33.8786 34.5613 34.9004 33.5459 35.6785C30.5042 38.0093 26.958 38.4859 24.4952 38.4859C18.2738 38.4859 12.9581 34.4649 10.9002 29.0011C10.8172 28.8029 10.762 28.5981 10.6949 28.3956C10.2401 27.005 9.99169 25.5323 9.99169 24.0015C9.99169 22.4084 10.2607 20.8835 10.7513 19.4432C12.6864 13.7628 18.122 9.52012 24.4997 9.52012C25.7824 9.52012 27.0178 9.67282 28.1892 9.97738C30.8665 10.6734 32.7603 12.0442 33.9207 13.1286L40.9225 6.27151C36.6634 2.36633 31.1111 5.90435e-09 24.488 5.90435e-09C19.1933 -0.000113959 14.305 1.64956 10.2992 4.43757C7.05062 6.69857 4.38633 9.72576 2.58825 13.2415C0.915782 16.5013 0 20.1138 0 23.9979C0 27.8822 0.917181 31.5322 2.58966 34.7619V34.7837C4.3562 38.2124 6.93949 41.1646 10.0792 43.4152C12.8221 45.3814 17.7403 48 24.488 48C28.3684 48 31.8075 47.3004 34.8405 45.9893C37.0285 45.0435 38.9671 43.8098 40.7222 42.2244C43.0413 40.1294 44.8575 37.5382 46.0972 34.557C47.3369 31.5757 48 28.2044 48 24.5493C48 22.8471 47.829 21.1184 47.5391 19.5473V19.5474Z\" fill=\"white\"/></mask><g mask=\"url(#mask0_4507_2)\"><g filter=\"url(#filter0_f_4507_2)\"><path d=\"M-0.2771 24.1023C-0.251646 27.9253 0.8377 31.8696 2.48661 35.0538V35.0757C3.67802 37.3881 5.30634 39.2148 7.16097 41.0246L18.3625 36.9374C16.2432 35.8609 15.9198 35.2013 14.4007 33.9976C12.8482 32.4322 11.6912 30.6351 10.9706 28.5278H10.9416L10.9706 28.5059C10.4966 27.1144 10.4498 25.6373 10.4323 24.1023H-0.2771Z\" fill=\"url(#paint0_radial_4507_2)\"/></g><g filter=\"url(#filter1_f_4507_2)\"><path d=\"M24.5875 -0.233215C23.4803 3.65637 23.9037 7.43718 24.5875 9.63702C25.866 9.63797 27.0976 9.79037 28.2654 10.094C30.9427 10.79 32.8363 12.1609 33.9967 13.2452L41.1778 6.21297C36.9237 2.31245 31.8041 -0.22707 24.5875 -0.233215Z\" fill=\"url(#paint1_radial_4507_2)\"/></g><g filter=\"url(#filter2_f_4507_2)\"><path d=\"M24.5635 -0.263977C19.1328 -0.264094 14.1191 1.42793 10.0104 4.28752C8.48491 5.34929 7.08495 6.57581 5.83838 7.93972C5.51181 11.0034 8.28302 14.7691 13.7709 14.7379C16.4335 11.6406 20.3716 9.63667 24.7546 9.63667C24.7586 9.63667 24.7625 9.63699 24.7665 9.63701L24.5875 -0.263276C24.5794 -0.263281 24.5716 -0.263977 24.5635 -0.263977Z\" fill=\"url(#paint2_radial_4507_2)\"/></g><g filter=\"url(#filter3_f_4507_2)\"><path d=\"M42.4876 25.2109L37.6404 28.5408C37.4277 29.8467 36.9498 31.1313 36.2503 32.3027C35.449 33.6448 34.4584 34.6666 33.4429 35.4447C30.4075 37.7707 26.8707 38.2496 24.4085 38.2515C21.8636 42.586 21.4175 44.757 24.5875 48.2552C28.5101 48.2523 31.9877 47.5443 35.0551 46.2183C37.2724 45.2598 39.2369 44.0096 41.0156 42.4028C43.3658 40.2798 45.2067 37.6537 46.463 34.6325C47.7193 31.6112 48.3911 28.1948 48.3911 24.4908L42.4876 25.2109Z\" fill=\"url(#paint3_radial_4507_2)\"/></g><g filter=\"url(#filter4_f_4507_2)\"><path d=\"M24.2295 19.1382V29.0666H47.5506C47.7557 27.7069 48.434 25.9474 48.434 24.4907C48.434 22.7885 48.2632 20.7094 47.9733 19.1382H24.2295Z\" fill=\"#3086FF\"/></g><g filter=\"url(#filter5_f_4507_2)\"><path d=\"M5.94966 7.5892C4.51051 9.16383 3.28103 10.9263 2.3062 12.8324C0.633758 16.0922 -0.281982 20.0552 -0.281982 23.9393C-0.281982 23.9941 -0.277452 24.0476 -0.277087 24.1022C0.463586 25.5224 9.95397 25.2504 10.4323 24.1022C10.4317 24.0487 10.4257 23.9964 10.4257 23.9427C10.4257 22.3496 10.6948 21.1754 11.1854 19.7352C11.7906 17.9586 12.7382 16.3227 13.9499 14.9131C14.2246 14.5625 14.9573 13.8086 15.171 13.3564C15.2524 13.1841 15.0232 13.0875 15.0104 13.0268C14.996 12.959 14.6887 13.0135 14.6198 12.963C14.4011 12.8027 13.9682 12.7189 13.7053 12.6445C13.1433 12.4854 12.212 12.1345 11.6947 11.7707C10.0596 10.621 7.50794 9.24759 5.94966 7.5892Z\" fill=\"url(#paint4_radial_4507_2)\"/></g><g filter=\"url(#filter6_f_4507_2)\"><path d=\"M11.7299 13.0336C15.5215 15.3304 16.6119 11.8743 19.1328 10.7928L14.7476 1.69913C13.1345 2.37712 11.6104 3.21946 10.1963 4.20365C8.08448 5.67348 6.21956 7.46709 4.67902 9.50825L11.7299 13.0336Z\" fill=\"url(#paint5_radial_4507_2)\"/></g><g filter=\"url(#filter7_f_4507_2)\"><path d=\"M13.2731 36.2349C8.1833 38.0724 7.38648 38.1383 6.91797 41.2925C7.81327 42.1662 8.7752 42.9744 9.79741 43.7071C12.5403 45.6733 17.8164 48.2919 24.5641 48.2919C24.572 48.2919 24.5796 48.2912 24.5875 48.2912V38.0763C24.5824 38.0763 24.5765 38.0766 24.5714 38.0766C22.0447 38.0766 20.0255 37.413 17.9553 36.2589C17.4448 35.9743 16.5188 36.7384 16.048 36.3968C15.3987 35.9257 13.8362 36.8027 13.2731 36.2349Z\" fill=\"url(#paint6_radial_4507_2)\"/></g><g opacity=\"0.5\" filter=\"url(#filter8_f_4507_2)\"><path d=\"M21.6067 37.7545V48.1142C22.5508 48.2248 23.5334 48.2919 24.5641 48.2919C25.5973 48.2919 26.597 48.2388 27.5683 48.1413V37.8244C26.4798 38.0105 25.4546 38.0766 24.5714 38.0766C23.5543 38.0766 22.5651 37.9582 21.6067 37.7545Z\" fill=\"url(#paint7_linear_4507_2)\"/></g></g><defs><filter id=\"filter0_f_4507_2\" x=\"-0.747179\" y=\"23.6322\" width=\"19.5797\" height=\"17.8625\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter1_f_4507_2\" x=\"23.4367\" y=\"-0.703295\" width=\"18.2112\" height=\"14.4186\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter2_f_4507_2\" x=\"5.34242\" y=\"-0.734056\" width=\"19.8941\" height=\"15.9422\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter3_f_4507_2\" x=\"21.8837\" y=\"24.0207\" width=\"26.9775\" height=\"24.7046\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter4_f_4507_2\" x=\"23.7594\" y=\"18.6681\" width=\"25.1447\" height=\"10.8685\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter5_f_4507_2\" x=\"-0.752062\" y=\"7.11912\" width=\"16.4106\" height=\"18.419\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter6_f_4507_2\" x=\"1.37417\" y=\"-1.60572\" width=\"21.0634\" height=\"18.7161\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"1.65243\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter7_f_4507_2\" x=\"6.44789\" y=\"35.7239\" width=\"18.6097\" height=\"13.0381\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><filter id=\"filter8_f_4507_2\" x=\"21.1366\" y=\"37.2845\" width=\"6.90177\" height=\"11.4775\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\"/><feGaussianBlur stdDeviation=\"0.23504\" result=\"effect1_foregroundBlur_4507_2\"/></filter><radialGradient id=\"paint0_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-0.997443 -23.9038 35.8622 -1.43445 18.1382 40.6645)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.141612\" stop-color=\"#1ABD4D\"/><stop offset=\"0.247515\" stop-color=\"#6EC30D\"/><stop offset=\"0.311547\" stop-color=\"#8AC502\"/><stop offset=\"0.366013\" stop-color=\"#A2C600\"/><stop offset=\"0.445673\" stop-color=\"#C8C903\"/><stop offset=\"0.540305\" stop-color=\"#EBCB03\"/><stop offset=\"0.615636\" stop-color=\"#F7CD07\"/><stop offset=\"0.699345\" stop-color=\"#FDCD04\"/><stop offset=\"0.771242\" stop-color=\"#FDCE05\"/><stop offset=\"0.860566\" stop-color=\"#FFCE0A\"/></radialGradient><radialGradient id=\"paint1_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(16.9393 -4.07113e-05 -2.38089e-05 21.4185 40.506 12.7364)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.408458\" stop-color=\"#FB4E5A\"/><stop offset=\"1\" stop-color=\"#FF4540\"/></radialGradient><radialGradient id=\"paint2_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-23.7332 12.8698 17.8375 31.532 31.2553 -3.36438)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.231273\" stop-color=\"#FF4541\"/><stop offset=\"0.311547\" stop-color=\"#FF4540\"/><stop offset=\"0.457516\" stop-color=\"#FF4640\"/><stop offset=\"0.540305\" stop-color=\"#FF473F\"/><stop offset=\"0.699346\" stop-color=\"#FF5138\"/><stop offset=\"0.771242\" stop-color=\"#FF5B33\"/><stop offset=\"0.860566\" stop-color=\"#FF6C29\"/><stop offset=\"1\" stop-color=\"#FF8C18\"/></radialGradient><radialGradient id=\"paint3_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-43.0409 -55.0094 -20.7393 15.555 24.9404 45.1486)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.131546\" stop-color=\"#0CBA65\"/><stop offset=\"0.209784\" stop-color=\"#0BB86D\"/><stop offset=\"0.297297\" stop-color=\"#09B479\"/><stop offset=\"0.396257\" stop-color=\"#08AD93\"/><stop offset=\"0.477124\" stop-color=\"#0AA6A9\"/><stop offset=\"0.568425\" stop-color=\"#0D9CC6\"/><stop offset=\"0.667385\" stop-color=\"#1893DD\"/><stop offset=\"0.768727\" stop-color=\"#258BF1\"/><stop offset=\"0.858506\" stop-color=\"#3086FF\"/></radialGradient><radialGradient id=\"paint4_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-3.04591 25.7043 36.3002 4.12336 22.4842 4.26946)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.366013\" stop-color=\"#FF4E3A\"/><stop offset=\"0.457516\" stop-color=\"#FF8A1B\"/><stop offset=\"0.540305\" stop-color=\"#FFA312\"/><stop offset=\"0.615636\" stop-color=\"#FFB60C\"/><stop offset=\"0.771242\" stop-color=\"#FFCD0A\"/><stop offset=\"0.860566\" stop-color=\"#FECF0A\"/><stop offset=\"0.915033\" stop-color=\"#FECF08\"/><stop offset=\"1\" stop-color=\"#FDCD01\"/></radialGradient><radialGradient id=\"paint5_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-8.80425 9.53355 -27.4644 -24.3132 18.2009 4.00284)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.315904\" stop-color=\"#FF4C3C\"/><stop offset=\"0.603818\" stop-color=\"#FF692C\"/><stop offset=\"0.726837\" stop-color=\"#FF7825\"/><stop offset=\"0.884534\" stop-color=\"#FF8D1B\"/><stop offset=\"1\" stop-color=\"#FF9F13\"/></radialGradient><radialGradient id=\"paint6_radial_4507_2\" cx=\"0\" cy=\"0\" r=\"1\" gradientTransform=\"matrix(-23.7332 -12.8698 17.8375 -31.532 31.2553 51.2464)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0.231273\" stop-color=\"#0FBC5F\"/><stop offset=\"0.311547\" stop-color=\"#0FBC5F\"/><stop offset=\"0.366013\" stop-color=\"#0FBC5E\"/><stop offset=\"0.457516\" stop-color=\"#0FBC5D\"/><stop offset=\"0.540305\" stop-color=\"#12BC58\"/><stop offset=\"0.699346\" stop-color=\"#28BF3C\"/><stop offset=\"0.771242\" stop-color=\"#38C02B\"/><stop offset=\"0.860566\" stop-color=\"#52C218\"/><stop offset=\"0.915033\" stop-color=\"#67C30F\"/><stop offset=\"1\" stop-color=\"#86C504\"/></radialGradient><linearGradient id=\"paint7_linear_4507_2\" x1=\"21.6067\" y1=\"43.0232\" x2=\"27.5683\" y2=\"43.0232\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#0FBC5C\"/><stop offset=\"1\" stop-color=\"#0CBA65\"/></linearGradient></defs></svg>\n    ";
      var trustpilotIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 799.89 761\" width=\"22\" height=\"22\"><path d=\"M799.89 290.83H494.44L400.09 0l-94.64 290.83L0 290.54l247.37 179.92L152.72 761l247.37-179.63L647.16 761l-94.35-290.54z\" fill=\"#00b67a\"/><path d=\"M574.04 536.24l-21.23-65.78-152.72 110.91z\" fill=\"#005128\"/></svg>\n    ";
      var websiteButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Sitio Web",
        icon: websiteIcon,
        className: "website-button",
        onClick: function onClick() {
          return window.open("https://choxypop.com/", "_blank");
        }
      });
      var emailButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Email",
        icon: emailIcon,
        className: "email-button",
        onClick: function onClick() {
          return window.open("mailto:info@choxypop.com", "_blank");
        }
      });
      var whatsappButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Mi WhatsApp",
        icon: whatsappIcon,
        className: "whatsapp-button",
        onClick: function onClick() {
          return window.open("https://wa.me/+542494060873", "_blank");
        }
      });
      var telegramButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Mi Telegram",
        icon: telegramIcon,
        className: "telegram-button",
        onClick: function onClick() {
          return window.open("https://t.me/choxypop", "_blank");
        }
      });
      var googleButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Reseñas de Google",
        icon: googleIcon,
        className: "google-button",
        onClick: function onClick() {
          return window.open("https://g.page/r/CWzqR9xPAVS-EBM/review", "_blank");
        }
      });
      var trustpilotButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Reseñas de Trustpilot",
        icon: trustpilotIcon,
        className: "trustpilot-button",
        onClick: function onClick() {
          return window.open("https://www.trustpilot.com/review/choxypop.com", "_blank");
        }
      });
      var mainBlock = new _base_Block_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      mainBlock.addButton(websiteButton);
      mainBlock.addButton(emailButton);
      mainBlock.addButton(whatsappButton);
      mainBlock.addButton(telegramButton);
      mainBlock.addButton(googleButton);
      mainBlock.addButton(trustpilotButton);
      var mainSection = new _base_Section_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Más Sobre Mi", "main", {
        content: "Por WA respondo más rapido. 😉",
        position: "right"
      });
      mainSection.setTitleLevel("h1");
      mainSection.setDescription("¿Quieres saber más sobre mis proyectos, hablar conmigo, preguntar algunas cosas o dar tu opinion? Pues no dudes en visitar cualquiera de los siguientes enlaces.");
      mainSection.addBlock(mainBlock);
      return mainSection;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/sections/MiscSection.js":
/*!************************************************!*\
  !*** ./src/components/sections/MiscSection.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MiscSection)
/* harmony export */ });
/* harmony import */ var _base_Section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Section.js */ "./src/components/base/Section.js");
/* harmony import */ var _base_Block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Block.js */ "./src/components/base/Block.js");
/* harmony import */ var _base_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Button.js */ "./src/components/base/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var MiscSection = /*#__PURE__*/function () {
  function MiscSection() {
    _classCallCheck(this, MiscSection);
  }
  return _createClass(MiscSection, null, [{
    key: "create",
    value: function create() {
      var patreonIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22px\" height=\"22px\" viewBox=\"0 0 640 640\"><path fill=\"#d64b00\" d=\"M554 217.8C553.9 152.4 503 98.8 443.3 79.5C369.1 55.5 271.3 59 200.4 92.4C114.6 132.9 87.6 221.7 86.6 310.2C85.8 383 93 574.6 201.2 576C281.5 577 293.5 473.5 330.7 423.7C357.1 388.2 391.2 378.2 433.1 367.8C505.1 350 554.2 293.1 554.1 217.8L554 217.8z\"/></svg>\n    ";
      var stickerlyIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22px\" height=\"22px\" viewBox=\"-4.8 -4.8 57.60 57.60\" id=\"b\" fill=\"#0fa8f5\" stroke=\"#0fa8f5\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"/><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><g id=\"SVGRepo_iconCarrier\"> <defs> <style>.c{fill:none;stroke:#1fc7ff;stroke-linecap:round;stroke-linejoin:round;}</style> </defs> <path class=\"c\" d=\"m20.83,45.2679c-10.8073-1.597-18.9953-11.2358-18.2874-22.6398C3.2073,11.9213,11.9213,3.2073,22.6282,2.5427c11.404-.7079,21.0427,7.4801,22.6398,18.2874.2767,1.8724-.3654,3.7674-1.7038,5.1058l-17.6283,17.6283c-1.3384,1.3384-3.2334,1.9805-5.1058,1.7038Z\"/> <g> <ellipse class=\"c\" cx=\"17.4017\" cy=\"18.3001\" rx=\"3.0459\" ry=\"4.3001\"/> <ellipse class=\"c\" cx=\"30.5983\" cy=\"18.3001\" rx=\"3.0459\" ry=\"4.3001\"/> <path class=\"c\" d=\"m33.6442,27.8345c-1.4611,4.6199-5.6618,6.1655-9.255,6.1655-3.5932,0-7.2564-1.3216-9.255-6.1655\"/> </g> </g></svg>\n    ";
      var paypalIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22px\" height=\"22px\" preserveAspectRatio=\"xMidYMid\" viewBox=\"0 0 256 302\" id=\"paypal\"><path fill=\"#27346A\" d=\"M217.168 23.507C203.234 7.625 178.046.816 145.823.816h-93.52A13.393 13.393 0 0 0 39.076 12.11L.136 259.077c-.774 4.87 2.997 9.28 7.933 9.28h57.736l14.5-91.971-.45 2.88c1.033-6.501 6.593-11.296 13.177-11.296h27.436c53.898 0 96.101-21.892 108.429-85.221.366-1.873.683-3.696.957-5.477-1.556-.824-1.556-.824 0 0 3.671-23.407-.025-39.34-12.686-53.765\"></path><path fill=\"#27346A\" d=\"M102.397 68.84a11.737 11.737 0 0 1 5.053-1.14h73.318c8.682 0 16.78.565 24.18 1.756a101.6 101.6 0 0 1 6.177 1.182 89.928 89.928 0 0 1 8.59 2.347c3.638 1.215 7.026 2.63 10.14 4.287 3.67-23.416-.026-39.34-12.687-53.765C203.226 7.625 178.046.816 145.823.816H52.295C45.71.816 40.108 5.61 39.076 12.11L.136 259.068c-.774 4.878 2.997 9.282 7.925 9.282h57.744L95.888 77.58a11.717 11.717 0 0 1 6.509-8.74z\"></path><path fill=\"#2790C3\" d=\"M228.897 82.749c-12.328 63.32-54.53 85.221-108.429 85.221H93.024c-6.584 0-12.145 4.795-13.168 11.296L61.817 293.621c-.674 4.262 2.622 8.124 6.934 8.124h48.67a11.71 11.71 0 0 0 11.563-9.88l.474-2.48 9.173-58.136.591-3.213a11.71 11.71 0 0 1 11.562-9.88h7.284c47.147 0 84.064-19.154 94.852-74.55 4.503-23.15 2.173-42.478-9.739-56.054-3.613-4.112-8.1-7.508-13.327-10.28-.283 1.79-.59 3.604-.957 5.477z\"></path><path fill=\"#1F264F\" d=\"M216.952 72.128a89.928 89.928 0 0 0-5.818-1.49 109.904 109.904 0 0 0-6.177-1.174c-7.408-1.199-15.5-1.765-24.19-1.765h-73.309a11.57 11.57 0 0 0-5.053 1.149 11.683 11.683 0 0 0-6.51 8.74l-15.582 98.798-.45 2.88c1.025-6.501 6.585-11.296 13.17-11.296h27.444c53.898 0 96.1-21.892 108.428-85.221.367-1.873.675-3.688.958-5.477-3.122-1.648-6.501-3.072-10.14-4.279a83.26 83.26 0 0 0-2.77-.865\"></path></svg>\n    ";
      var patreonButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Patreon",
        icon: patreonIcon,
        className: "patreon-button",
        onClick: function onClick() {
          return window.open("https://patreon.com/choxypop", "_blank");
        }
      });
      var stickerlyButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Stickers",
        icon: stickerlyIcon,
        className: "stickerly-button",
        onClick: function onClick() {
          return window.open("https://sticker.ly/user/choxypop", "_blank");
        }
      });
      var paypalButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "PayPal",
        icon: paypalIcon,
        className: "paypal-button",
        onClick: function onClick() {
          return window.open("https://paypal.me/noctrow", "_blank");
        }
      });
      var miscBlock = new _base_Block_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      miscBlock.addButton(patreonButton);
      miscBlock.addButton(stickerlyButton);
      miscBlock.addButton(paypalButton);
      var miscSection = new _base_Section_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Contenido Exclusivo", "misc");
      miscSection.addBlock(miscBlock);
      return miscSection;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/sections/ProjectsSection.js":
/*!****************************************************!*\
  !*** ./src/components/sections/ProjectsSection.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsSection)
/* harmony export */ });
/* harmony import */ var _base_Section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Section.js */ "./src/components/base/Section.js");
/* harmony import */ var _base_Block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Block.js */ "./src/components/base/Block.js");
/* harmony import */ var _base_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Button.js */ "./src/components/base/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var ProjectsSection = /*#__PURE__*/function () {
  function ProjectsSection() {
    _classCallCheck(this, ProjectsSection);
  }
  return _createClass(ProjectsSection, null, [{
    key: "create",
    value: function create() {
      var whatsappIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z\" fill=\"#25D366\"/></svg>\n    ";
      var minecraftIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:svg=\"http://www.w3.org/2000/svg\" version=\"1.1\" width=\"22\" height=\"22\" viewBox=\"0 0 512 512\" id=\"svg1\" xml:space=\"preserve\"><defs id=\"defs1\"></defs><path id=\"bg1\" fill=\"#81563a\" d=\"M 0,0 H 512 V 512 H 0 Z\"></path><path id=\"bg2\" fill=\"#61b441\" d=\"M 0,0 V 128 H 64 V 64 H 128 V 128 H 256 V 192 H 320 V 128 H 384 V 64 H 448 V 192 H 512 V 0 Z\"></path><rect id=\"rect1\" width=\"64\" height=\"64\" x=\"0\" y=\"0\" fill=\"#86d562\"></rect><rect id=\"rect2\" width=\"64\" height=\"64\" x=\"64\" y=\"0\" fill=\"#52a535\"></rect><rect id=\"rect3\" width=\"64\" height=\"64\" x=\"128\" y=\"0\" fill=\"#6cc349\"></rect><rect id=\"rect4\" width=\"64\" height=\"64\" x=\"192\" y=\"0\" fill=\"#86d562\"></rect><rect id=\"rect5\" width=\"64\" height=\"64\" x=\"256\" y=\"0\" fill=\"#6cc349\"></rect><rect id=\"rect6\" width=\"64\" height=\"64\" x=\"320\" y=\"0\" fill=\"#52a535\"></rect><rect id=\"rect7\" width=\"64\" height=\"64\" x=\"384\" y=\"0\" fill=\"#6cc349\"></rect><rect id=\"rect8\" width=\"64\" height=\"64\" x=\"448\" y=\"0\" fill=\"#52a535\"></rect><rect id=\"rect9\" width=\"64\" height=\"64\" x=\"0\" y=\"64\" fill=\"#52a535\"></rect><rect id=\"rect10\" width=\"64\" height=\"64\" x=\"64\" y=\"64\" fill=\"#66412c\"></rect><rect id=\"rect11\" width=\"64\" height=\"64\" x=\"128\" y=\"64\" fill=\"#52a535\"></rect><rect id=\"rect12\" width=\"64\" height=\"64\" x=\"192\" y=\"64\" fill=\"#3c8527\"></rect><rect id=\"rect13\" width=\"64\" height=\"64\" x=\"256\" y=\"64\" fill=\"#52a535\"></rect><rect id=\"rect14\" width=\"64\" height=\"64\" x=\"320\" y=\"64\" fill=\"#6cc349\"></rect><rect id=\"rect15\" width=\"64\" height=\"64\" x=\"384\" y=\"64\" fill=\"#66412c\"></rect><rect id=\"rect16\" width=\"64\" height=\"64\" x=\"448\" y=\"64\" fill=\"#6cc349\"></rect><rect id=\"rect17\" width=\"64\" height=\"64\" x=\"0\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect18\" width=\"64\" height=\"64\" x=\"64\" y=\"128\" fill=\"#998f8b\"></rect><rect id=\"rect19\" width=\"64\" height=\"64\" x=\"128\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect20\" width=\"64\" height=\"64\" x=\"192\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect21\" width=\"64\" height=\"64\" x=\"256\" y=\"128\" fill=\"#6cc349\"></rect><rect id=\"rect22\" width=\"64\" height=\"64\" x=\"320\" y=\"128\" fill=\"#66412c\"></rect><rect id=\"rect23\" width=\"64\" height=\"64\" x=\"384\" y=\"128\" fill=\"#805539\"></rect><rect id=\"rect24\" width=\"64\" height=\"64\" x=\"448\" y=\"128\" fill=\"#52a535\"></rect><rect id=\"rect25\" width=\"64\" height=\"64\" x=\"0\" y=\"192\" fill=\"#976746\"></rect><rect id=\"rect26\" width=\"64\" height=\"64\" x=\"64\" y=\"192\" fill=\"#805539\"></rect><rect id=\"rect27\" width=\"64\" height=\"64\" x=\"128\" y=\"192\" fill=\"#976746\"></rect><rect id=\"rect28\" width=\"64\" height=\"64\" x=\"192\" y=\"192\" fill=\"#ad7a54\"></rect><rect id=\"rect29\" width=\"64\" height=\"64\" x=\"256\" y=\"192\" fill=\"#66412c\"></rect><rect id=\"rect30\" width=\"64\" height=\"64\" x=\"320\" y=\"192\" fill=\"#805539\"></rect><rect id=\"rect31\" width=\"64\" height=\"64\" x=\"384\" y=\"192\" fill=\"#976746\"></rect><rect id=\"rect32\" width=\"64\" height=\"64\" x=\"448\" y=\"192\" fill=\"#66412c\"></rect><rect id=\"rect33\" width=\"64\" height=\"64\" x=\"0\" y=\"256\" fill=\"#805539\"></rect><rect id=\"rect34\" width=\"64\" height=\"64\" x=\"64\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect35\" width=\"64\" height=\"64\" x=\"128\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect36\" width=\"64\" height=\"64\" x=\"192\" y=\"256\" fill=\"#976746\"></rect><rect id=\"rect37\" width=\"64\" height=\"64\" x=\"256\" y=\"256\" fill=\"#805539\"></rect><rect id=\"rect38\" width=\"64\" height=\"64\" x=\"320\" y=\"256\" fill=\"#ad7a54\"></rect><rect id=\"rect39\" width=\"64\" height=\"64\" x=\"384\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect40\" width=\"64\" height=\"64\" x=\"448\" y=\"256\" fill=\"#66412c\"></rect><rect id=\"rect41\" width=\"64\" height=\"64\" x=\"0\" y=\"320\" fill=\"#ad7a54\"></rect><rect id=\"rect42\" width=\"64\" height=\"64\" x=\"64\" y=\"320\" fill=\"#805539\"></rect><rect id=\"rect43\" width=\"64\" height=\"64\" x=\"128\" y=\"320\" fill=\"#66412c\"></rect><rect id=\"rect44\" width=\"64\" height=\"64\" x=\"192\" y=\"320\" fill=\"#66412c\"></rect><rect id=\"rect45\" width=\"64\" height=\"64\" x=\"256\" y=\"320\" fill=\"#998f8b\"></rect><rect id=\"rect46\" width=\"64\" height=\"64\" x=\"320\" y=\"320\" fill=\"#805539\"></rect><rect id=\"rect47\" width=\"64\" height=\"64\" x=\"384\" y=\"320\" fill=\"#976746\"></rect><rect id=\"rect48\" width=\"64\" height=\"64\" x=\"448\" y=\"320\" fill=\"#805539\"></rect><rect id=\"rect49\" width=\"64\" height=\"64\" x=\"0\" y=\"384\" fill=\"#805539\"></rect><rect id=\"rect50\" width=\"64\" height=\"64\" x=\"64\" y=\"384\" fill=\"#976746\"></rect><rect id=\"rect51\" width=\"64\" height=\"64\" x=\"128\" y=\"384\" fill=\"#66412c\"></rect><rect id=\"rect52\" width=\"64\" height=\"64\" x=\"192\" y=\"384\" fill=\"#ad7a54\"></rect><rect id=\"rect53\" width=\"64\" height=\"64\" x=\"256\" y=\"384\" fill=\"#976746\"></rect><rect id=\"rect54\" width=\"64\" height=\"64\" x=\"320\" y=\"384\" fill=\"#ad7a54\"></rect><rect id=\"rect55\" width=\"64\" height=\"64\" x=\"384\" y=\"384\" fill=\"#805539\"></rect><rect id=\"rect56\" width=\"64\" height=\"64\" x=\"448\" y=\"384\" fill=\"#976746\"></rect><rect id=\"rect57\" width=\"64\" height=\"64\" x=\"0\" y=\"448\" fill=\"#66412c\"></rect><rect id=\"rect58\" width=\"64\" height=\"64\" x=\"64\" y=\"448\" fill=\"#805539\"></rect><rect id=\"rect59\" width=\"64\" height=\"64\" x=\"128\" y=\"448\" fill=\"#998f8b\"></rect><rect id=\"rect60\" width=\"64\" height=\"64\" x=\"192\" y=\"448\" fill=\"#805539\"></rect><rect id=\"rect61\" width=\"64\" height=\"64\" x=\"256\" y=\"448\" fill=\"#805539\"></rect><rect id=\"rect62\" width=\"64\" height=\"64\" x=\"320\" y=\"448\" fill=\"#976746\"></rect><rect id=\"rect63\" width=\"64\" height=\"64\" x=\"384\" y=\"448\" fill=\"#66412c\"></rect><rect id=\"rect64\" width=\"64\" height=\"64\" x=\"448\" y=\"448\" fill=\"#ad7a54\"></rect><rect id=\"rect65\" width=\"64\" height=\"4.4\" x=\"384\" y=\"64\" fill=\"#503120\"></rect><rect id=\"rect66\" width=\"64\" height=\"4.4\" x=\"320\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect67\" width=\"64\" height=\"4.4\" x=\"128\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect68\" width=\"64\" height=\"4.4\" x=\"192\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect69\" width=\"64\" height=\"4.4\" x=\"64\" y=\"64\" fill=\"#503120\"></rect><rect id=\"rect70\" width=\"64\" height=\"4.4\" x=\"0\" y=\"128\" fill=\"#503120\"></rect><rect id=\"rect71\" width=\"64\" height=\"4.4\" x=\"64\" y=\"192\" fill=\"#65402a\"></rect><rect id=\"rect72\" width=\"64\" height=\"4.4\" x=\"256\" y=\"192\" fill=\"#503120\"></rect><rect id=\"rect73\" width=\"64\" height=\"4.4\" x=\"448\" y=\"192\" fill=\"#503120\"></rect><rect id=\"rect74\" width=\"64\" height=\"4.4\" x=\"384\" y=\"256\" fill=\"#503120\"></rect><rect id=\"rect75\" width=\"64\" height=\"4.4\" x=\"192\" y=\"320\" fill=\"#503120\"></rect><rect id=\"rect76\" width=\"64\" height=\"4.4\" x=\"128\" y=\"256\" fill=\"#503120\"></rect><rect id=\"rect77\" width=\"64\" height=\"4.4\" x=\"0\" y=\"256\" fill=\"#65402a\"></rect><rect id=\"rect78\" width=\"64\" height=\"4.4\" x=\"256\" y=\"384\" fill=\"#764d34\"></rect><rect id=\"rect79\" width=\"64\" height=\"4.4\" x=\"0\" y=\"448\" fill=\"#503120\"></rect><rect id=\"rect80\" width=\"64\" height=\"4.4\" x=\"320\" y=\"448\" fill=\"#764d34\"></rect><rect id=\"rect81\" width=\"64\" height=\"4.4\" x=\"320\" y=\"320\" fill=\"#65402a\"></rect><rect id=\"rect82\" width=\"64\" height=\"4.4\" x=\"384\" y=\"384\" fill=\"#65402a\"></rect><script xmlns=\"\"></script></svg>\n    ";
      var robloxIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1333.35 1333.35\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M272.91 0L0 1060.43l1060.43 272.91L1333.34 272.9 272.91-.01zm316.86 536.5l207 53.25-53.28 207.02-207-53.28 53.28-207z\" fill=\"#1a81e2ff\" fill-rule=\"nonzero\"/></svg>\n    ";
      var discordIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M40.634 8.31118C37.5747 6.90741 34.294 5.87318 30.8638 5.28084C30.8013 5.2694 30.7389 5.29797 30.7067 5.35511C30.2848 6.10554 29.8175 7.08454 29.4902 7.85403C25.8008 7.30169 22.1304 7.30169 18.5166 7.85403C18.1893 7.06744 17.705 6.10554 17.2811 5.35511C17.249 5.29988 17.1866 5.27131 17.1241 5.28084C13.6958 5.87129 10.4151 6.90552 7.35387 8.31118C7.32737 8.3226 7.30465 8.34167 7.28958 8.36641C1.06678 17.6631 -0.637901 26.7313 0.19836 35.6871C0.202144 35.7309 0.22674 35.7729 0.260796 35.7995C4.36642 38.8146 8.34341 40.645 12.2466 41.8582C12.309 41.8773 12.3752 41.8545 12.415 41.803C13.3383 40.5422 14.1613 39.2127 14.867 37.8146C14.9086 37.7327 14.8688 37.6356 14.7837 37.6032C13.4783 37.108 12.2352 36.5042 11.0395 35.8186C10.9449 35.7633 10.9373 35.628 11.0243 35.5633C11.2759 35.3747 11.5276 35.1785 11.7679 34.9805C11.8114 34.9443 11.872 34.9366 11.9231 34.9595C19.7786 38.546 28.2831 38.546 36.0459 34.9595C36.097 34.9348 36.1576 34.9424 36.203 34.9786C36.4433 35.1766 36.6949 35.3747 36.9484 35.5633C37.0354 35.628 37.0298 35.7633 36.9352 35.8186C35.7394 36.5175 34.4964 37.108 33.189 37.6013C33.1039 37.6337 33.0661 37.7327 33.1077 37.8146C33.8285 39.2107 34.6515 40.5402 35.5578 41.8011C35.5957 41.8545 35.6637 41.8773 35.7262 41.8582C39.6483 40.645 43.6252 38.8146 47.7309 35.7995C47.7668 35.7729 47.7895 35.7328 47.7933 35.689C48.7942 25.3352 46.117 16.3413 40.6964 8.3683C40.6832 8.34167 40.6605 8.3226 40.634 8.31118ZM16.04 30.234C13.675 30.234 11.7263 28.0627 11.7263 25.3961C11.7263 22.7296 13.6372 20.5583 16.04 20.5583C18.4617 20.5583 20.3916 22.7486 20.3538 25.3961C20.3538 28.0627 18.4428 30.234 16.04 30.234ZM31.9895 30.234C29.6245 30.234 27.6758 28.0627 27.6758 25.3961C27.6758 22.7296 29.5867 20.5583 31.9895 20.5583C34.4113 20.5583 36.3411 22.7486 36.3033 25.3961C36.3033 28.0627 34.4113 30.234 31.9895 30.234Z\" fill=\"#5865F2\"/></svg>\n    ";
      var whatsappButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Comunidad de WhatsApp",
        icon: whatsappIcon,
        className: "whatsapp-button",
        onClick: function onClick() {
          return window.open("https://go.choxypop.com/wagroup", "_blank");
        }
      });
      var minecraftButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Realm de Minecraft",
        icon: minecraftIcon,
        className: "minecraft-button",
        onClick: function onClick() {
          return window.open("https://minecraft.choxypop.com/", "_blank");
        }
      });
      var robloxButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Grupo de Roblox",
        icon: robloxIcon,
        className: "roblox-button",
        onClick: function onClick() {
          return window.open("https://roblox.choxypop.com/", "_blank");
        }
      });
      var discordButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Servidor de Discord",
        icon: discordIcon,
        className: "discord-button",
        onClick: function onClick() {
          return window.open("https://discord.choxypop.com/", "_blank");
        }
      });
      var projectsBlock = new _base_Block_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      projectsBlock.addButton(whatsappButton);
      projectsBlock.addButton(minecraftButton);
      projectsBlock.addButton(robloxButton);
      projectsBlock.addButton(discordButton);
      var projectsSection = new _base_Section_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Comunidad", "projects", {
        content: "Interactua con la comunidad. 😘",
        position: "right"
      });
      projectsSection.addBlock(projectsBlock);
      return projectsSection;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/sections/SocialMediaSection.js":
/*!*******************************************************!*\
  !*** ./src/components/sections/SocialMediaSection.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SocialMediaSection)
/* harmony export */ });
/* harmony import */ var _base_Section_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Section.js */ "./src/components/base/Section.js");
/* harmony import */ var _base_Block_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base/Block.js */ "./src/components/base/Block.js");
/* harmony import */ var _base_Button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base/Button.js */ "./src/components/base/Button.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var SocialMediaSection = /*#__PURE__*/function () {
  function SocialMediaSection() {
    _classCallCheck(this, SocialMediaSection);
  }
  return _createClass(SocialMediaSection, null, [{
    key: "create",
    value: function create() {
      var deviantartIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 333333 333333\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path fill=\"#05cc47\" d=\"M269835 60606V0h-60600l-6065 6128-28641 54503-8969 6060H63478v83194h56122l5025 6059-61121 116789v60600l60605-11 6060-6128 28641-54492 8969-6065 102074 11 2-83200h-56116l-5025-6128z\"/></svg>\n    ";
      var whatsappIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M0 48L3.374 35.674C1.292 32.066 0.198 27.976 0.2 23.782C0.206 10.67 10.876 0 23.986 0C30.348 0.002 36.32 2.48 40.812 6.976C45.302 11.472 47.774 17.448 47.772 23.804C47.766 36.918 37.096 47.588 23.986 47.588C20.006 47.586 16.084 46.588 12.61 44.692L0 48ZM13.194 40.386C16.546 42.376 19.746 43.568 23.978 43.57C34.874 43.57 43.75 34.702 43.756 23.8C43.76 12.876 34.926 4.02 23.994 4.016C13.09 4.016 4.22 12.884 4.216 23.784C4.214 28.234 5.518 31.566 7.708 35.052L5.71 42.348L13.194 40.386ZM35.968 29.458C35.82 29.21 35.424 29.062 34.828 28.764C34.234 28.466 31.312 27.028 30.766 26.83C30.222 26.632 29.826 26.532 29.428 27.128C29.032 27.722 27.892 29.062 27.546 29.458C27.2 29.854 26.852 29.904 26.258 29.606C25.664 29.308 23.748 28.682 21.478 26.656C19.712 25.08 18.518 23.134 18.172 22.538C17.826 21.944 18.136 21.622 18.432 21.326C18.7 21.06 19.026 20.632 19.324 20.284C19.626 19.94 19.724 19.692 19.924 19.294C20.122 18.898 20.024 18.55 19.874 18.252C19.724 17.956 18.536 15.03 18.042 13.84C17.558 12.682 17.068 12.838 16.704 12.82L15.564 12.8C15.168 12.8 14.524 12.948 13.98 13.544C13.436 14.14 11.9 15.576 11.9 18.502C11.9 21.428 14.03 24.254 14.326 24.65C14.624 25.046 18.516 31.05 24.478 33.624C25.896 34.236 27.004 34.602 27.866 34.876C29.29 35.328 30.586 35.264 31.61 35.112C32.752 34.942 35.126 33.674 35.622 32.286C36.118 30.896 36.118 29.706 35.968 29.458Z\" fill=\"#25D366\"/></svg>\n    ";
      var instagramIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 132.004 132\"><defs><linearGradient id=\"b\"><stop offset=\"0\" stop-color=\"#3771c8\"/><stop stop-color=\"#3771c8\" offset=\".128\"/><stop offset=\"1\" stop-color=\"#60f\" stop-opacity=\"0\"/></linearGradient><linearGradient id=\"a\"><stop offset=\"0\" stop-color=\"#fd5\"/><stop offset=\".1\" stop-color=\"#fd5\"/><stop offset=\".5\" stop-color=\"#ff543e\"/><stop offset=\"1\" stop-color=\"#c837ab\"/></linearGradient><radialGradient id=\"c\" cx=\"158.429\" cy=\"578.088\" r=\"65\" xlink:href=\"#a\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(0 -1.98198 1.8439 0 -1031.402 454.004)\" fx=\"158.429\" fy=\"578.088\"/><radialGradient id=\"d\" cx=\"147.694\" cy=\"473.455\" r=\"65\" xlink:href=\"#b\" gradientUnits=\"userSpaceOnUse\" gradientTransform=\"matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)\" fx=\"147.694\" fy=\"473.455\"/></defs><path fill=\"url(#c)\" d=\"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z\" transform=\"translate(1.004 1)\"/><path fill=\"url(#d)\" d=\"M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z\" transform=\"translate(1.004 1)\"/><path fill=\"#fff\" d=\"M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z\"/></svg>\n    ";
      var facebookIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" viewBox=\"0 0 512 509.64\"><rect fill=\"#0866FF\" width=\"512\" height=\"509.64\" rx=\"115.612\" ry=\"115.612\"/><path fill=\"#fff\" d=\"M287.015 509.64h-92.858V332.805h-52.79v-78.229h52.79v-33.709c0-87.134 39.432-127.522 124.977-127.522 16.217 0 44.203 3.181 55.651 6.361v70.915c-6.043-.636-16.536-.953-29.576-.953-41.976 0-58.194 15.9-58.194 57.241v27.667h83.618l-14.365 78.229h-69.253V509.64z\"/></svg>\n    ";
      var tiktokIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M34.353 17.327C37.4397 19.5413 41.2211 20.8442 45.3051 20.8442V12.9573C44.5322 12.9574 43.7613 12.8765 43.0051 12.7158V18.9239C38.9214 18.9239 35.1405 17.621 32.053 15.4068V31.5018C32.053 39.5533 25.5492 46.0799 17.5268 46.0799C14.5334 46.0799 11.7512 45.1717 9.44006 43.6141C12.0779 46.3209 15.7565 48 19.8263 48C27.8492 48 34.3534 41.4734 34.3534 33.4216V17.327H34.353V17.327ZM37.1904 9.37002C35.6129 7.64048 34.5772 5.40538 34.353 2.93438V1.91995H32.1735C32.7221 5.06059 34.5934 7.74377 37.1904 9.37002ZM14.5142 37.4356C13.6329 36.2759 13.1566 34.8572 13.1587 33.3985C13.1587 29.7161 16.1336 26.7303 19.8037 26.7303C20.4877 26.7301 21.1675 26.8352 21.8194 27.0428V18.9796C21.0576 18.8748 20.2888 18.8303 19.5203 18.8466V25.1226C18.868 24.9151 18.1878 24.8096 17.5037 24.8103C13.8335 24.8103 10.8589 27.7958 10.8589 31.4787C10.8589 34.0828 12.3458 36.3374 14.5142 37.4356Z\" fill=\"#FF004F\"/><path d=\"M32.0529 15.4067C35.1404 17.6209 38.9213 18.9237 43.005 18.9237V12.7156C40.7255 12.2283 38.7075 11.0328 37.1903 9.37002C34.5931 7.74361 32.722 5.06043 32.1733 1.91995H26.4482V33.4213C26.4352 37.0937 23.4655 40.0673 19.8032 40.0673C17.6451 40.0673 15.7279 39.0349 14.5136 37.4356C12.3454 36.3374 10.8585 34.0827 10.8585 31.4789C10.8585 27.7963 13.8331 24.8105 17.5032 24.8105C18.2064 24.8105 18.8842 24.9204 19.5199 25.1228V18.8468C11.6384 19.0102 5.2998 25.473 5.2998 33.4214C5.2998 37.3892 6.87827 40.9861 9.44013 43.6143C11.7513 45.1717 14.5335 46.08 17.5268 46.08C25.5494 46.08 32.0531 39.5531 32.0531 31.5018V15.4067H32.0529Z\" fill=\"black\"/><path d=\"M43.0051 12.7156V11.037C40.9495 11.0401 38.9343 10.4624 37.1903 9.36987C38.7342 11.0661 40.7671 12.2357 43.0051 12.7156ZM32.1734 1.91997C32.1211 1.61982 32.0809 1.3177 32.053 1.01443V0H24.148V31.5016C24.1354 35.1735 21.1658 38.1471 17.5033 38.1471C16.428 38.1471 15.4128 37.891 14.5137 37.4358C15.7279 39.0349 17.6452 40.0671 19.8033 40.0671C23.4652 40.0671 26.4354 37.0938 26.4482 33.4214V1.91997H32.1734ZM19.5203 18.8468V17.0598C18.8598 16.9692 18.1938 16.9237 17.5271 16.924C9.50383 16.9239 3 23.4508 3 31.5016C3 36.5491 5.55612 40.9974 9.44034 43.614C6.87848 40.986 5.30002 37.3889 5.30002 33.4213C5.30002 25.473 11.6385 19.0102 19.5203 18.8468Z\" fill=\"#00F2EA\"/></svg>\n    ";
      var youtubeIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_4507_2)\"><path d=\"M47.044 12.3709C46.7726 11.3497 46.2378 10.4178 45.493 9.66822C44.7483 8.91869 43.8197 8.37791 42.8003 8.1C39.0476 7.09091 24.0476 7.09091 24.0476 7.09091C24.0476 7.09091 9.04761 7.09091 5.29488 8.1C4.27547 8.37791 3.34693 8.91869 2.60218 9.66822C1.85744 10.4178 1.32262 11.3497 1.05124 12.3709C0.0476075 16.14 0.0476074 24 0.0476074 24C0.0476074 24 0.0476075 31.86 1.05124 35.6291C1.32262 36.6503 1.85744 37.5822 2.60218 38.3318C3.34693 39.0813 4.27547 39.6221 5.29488 39.9C9.04761 40.9091 24.0476 40.9091 24.0476 40.9091C24.0476 40.9091 39.0476 40.9091 42.8003 39.9C43.8197 39.6221 44.7483 39.0813 45.493 38.3318C46.2378 37.5822 46.7726 36.6503 47.044 35.6291C48.0476 31.86 48.0476 24 48.0476 24C48.0476 24 48.0476 16.14 47.044 12.3709Z\" fill=\"#FF0302\"/><path d=\"M19.1385 31.1373V16.8628L31.684 24.0001L19.1385 31.1373Z\" fill=\"#FEFEFE\"/></g><defs><clipPath id=\"clip0_4507_2\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n    ";
      var blueskyIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.8576 6.06892C16.1772 10.1191 21.8992 18.3312 24 22.7383C26.1009 18.3315 31.8225 10.119 37.1424 6.06892C40.9808 3.14646 47.2 0.885231 47.2 8.08059C47.2 9.5176 46.3876 20.1522 45.9111 21.8787C44.2548 27.8812 38.2196 29.4122 32.8511 28.4856C42.2351 30.1053 44.6223 35.4704 39.4668 40.8355C29.6756 51.0249 25.394 38.2789 24.2964 35.013C24.0953 34.4142 24.0012 34.1341 23.9998 34.3723C23.9984 34.1341 23.9043 34.4142 23.7032 35.013C22.6061 38.2789 18.3246 51.0252 8.5328 40.8355C3.37728 35.4704 5.7644 30.1049 15.1486 28.4856C9.77992 29.4122 3.74456 27.8812 2.08856 21.8787C1.61207 20.1521 0.799683 9.51744 0.799683 8.08059C0.799683 0.885231 7.01904 3.14646 10.8573 6.06892H10.8576Z\" fill=\"#1185FE\"/></svg>\n    ";
      var twitterIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g clip-path=\"url(#clip0_4507_2)\"><path d=\"M47.044 12.3709C46.7726 11.3497 46.2378 10.4178 45.493 9.66822C44.7483 8.91869 43.8197 8.37791 42.8003 8.1C39.0476 7.09091 24.0476 7.09091 24.0476 7.09091C24.0476 7.09091 9.04761 7.09091 5.29488 8.1C4.27547 8.37791 3.34693 8.91869 2.60218 9.66822C1.85744 10.4178 1.32262 11.3497 1.05124 12.3709C0.0476075 16.14 0.0476074 24 0.0476074 24C0.0476074 24 0.0476075 31.86 1.05124 35.6291C1.32262 36.6503 1.85744 37.5822 2.60218 38.3318C3.34693 39.0813 4.27547 39.6221 5.29488 39.9C9.04761 40.9091 24.0476 40.9091 24.0476 40.9091C24.0476 40.9091 39.0476 40.9091 42.8003 39.9C43.8197 39.6221 44.7483 39.0813 45.493 38.3318C46.2378 37.5822 46.7726 36.6503 47.044 35.6291C48.0476 31.86 48.0476 24 48.0476 24C48.0476 24 48.0476 16.14 47.044 12.3709Z\" fill=\"#FF0302\"/><path d=\"M19.1385 31.1373V16.8628L31.684 24.0001L19.1385 31.1373Z\" fill=\"#FEFEFE\"/></g><defs><clipPath id=\"clip0_4507_2\"><rect width=\"48\" height=\"48\" fill=\"white\"/></clipPath></defs></svg>\n    ";
      var deviantartButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "DeviantArt",
        icon: deviantartIcon,
        className: "deviantart-button",
        onClick: function onClick() {
          return window.open("https://www.deviantart.com/choxypop", "_blank");
        }
      });
      var whatsappButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Canal de WhatsApp",
        icon: whatsappIcon,
        className: "whatsapp-button",
        onClick: function onClick() {
          return window.open("https://whatsapp.com/channel/0029VaFZXi4FHWq38h6MIO0H", "_blank");
        }
      });
      var instagramButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Instagram",
        icon: instagramIcon,
        className: "instagram-button",
        onClick: function onClick() {
          return window.open("https://instagram.com/choxypop", "_blank");
        }
      });
      var facebookButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Facebook",
        icon: facebookIcon,
        className: "facebook-button",
        onClick: function onClick() {
          return window.open("https://facebook.com/choxypop.oficial", "_blank");
        }
      });
      var tiktokButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "TikTok",
        icon: tiktokIcon,
        className: "tiktok-button",
        onClick: function onClick() {
          return window.open("https://tiktok.com/@choxypop", "_blank");
        }
      });
      var youtubeButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "YouTube",
        icon: youtubeIcon,
        className: "youtube-button",
        onClick: function onClick() {
          return window.open("https://youtube.com/@choxypop", "_blank");
        }
      });
      var blueskyButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "BlueSky",
        icon: blueskyIcon,
        className: "bluesky-button",
        onClick: function onClick() {
          return window.open("https://bsky.app/profile/choxypop.com", "_blank");
        }
      });
      var twitterButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Twitter",
        icon: twitterIcon,
        className: "twitter-button",
        onClick: function onClick() {
          return window.open("https://x.com/choxypop", "_blank");
        }
      });
      var socialBlock = new _base_Block_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      socialBlock.addButton(deviantartButton);
      socialBlock.addButton(whatsappButton);
      socialBlock.addButton(instagramButton);
      socialBlock.addButton(facebookButton);
      socialBlock.addButton(tiktokButton);
      socialBlock.addButton(youtubeButton);
      socialBlock.addButton(blueskyButton);
      socialBlock.addButton(twitterButton);
      var socialSection = new _base_Section_js__WEBPACK_IMPORTED_MODULE_0__["default"]("Redes Sociales", "social media");
      socialSection.addBlock(socialBlock);
      return socialSection;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/statical/CardHeader.js":
/*!***********************************************!*\
  !*** ./src/components/statical/CardHeader.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CardHeader)
/* harmony export */ });
/* harmony import */ var _LogoContainer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoContainer.js */ "./src/components/statical/LogoContainer.js");
/* harmony import */ var _TextElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextElement.js */ "./src/components/statical/TextElement.js");
/* harmony import */ var _SubTextElement_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubTextElement.js */ "./src/components/statical/SubTextElement.js");
/* harmony import */ var _ThemedContainer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ThemedContainer.js */ "./src/components/statical/ThemedContainer.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var CardHeader = /*#__PURE__*/function () {
  function CardHeader(logoSrc, logoAlt, badgeText, cardHeaderText, cardHeaderSubText) {
    var name = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;
    _classCallCheck(this, CardHeader);
    this.logoContainer = new _LogoContainer_js__WEBPACK_IMPORTED_MODULE_0__["default"](logoSrc, logoAlt, badgeText);
    this.cardHeaderText = new _TextElement_js__WEBPACK_IMPORTED_MODULE_1__["default"](cardHeaderText);
    this.cardHeaderSubText = new _SubTextElement_js__WEBPACK_IMPORTED_MODULE_2__["default"](cardHeaderSubText);
    this.name = name;
  }
  return _createClass(CardHeader, [{
    key: "render",
    value: function render() {
      var cardHeader = document.createElement("div");
      cardHeader.className = "card-header flex align-content-start justify-content-between";
      if (this.name) {
        cardHeader.setAttribute("name", this.name);
      }
      var titleContainer = document.createElement("div");
      titleContainer.className = "title-container flex flex-col";
      cardHeader.appendChild(titleContainer);
      var themedContainer = new _ThemedContainer_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
      cardHeader.appendChild(themedContainer.render());
      var logoElement = this.logoContainer.render();
      titleContainer.appendChild(logoElement);
      var cardTitle = document.createElement("div");
      cardTitle.className = "card-title flex flex-col flex-nowrap";
      titleContainer.appendChild(cardTitle);
      var textElement = this.cardHeaderText.render();
      cardTitle.appendChild(textElement);
      var subTextElement = this.cardHeaderSubText.render();
      cardTitle.appendChild(subTextElement);
      return cardHeader;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/statical/LogoContainer.js":
/*!**************************************************!*\
  !*** ./src/components/statical/LogoContainer.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogoContainer)
/* harmony export */ });
/* harmony import */ var _LogoElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogoElement.js */ "./src/components/statical/LogoElement.js");
/* harmony import */ var _decorative_BadgeElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorative/BadgeElement.js */ "./src/components/decorative/BadgeElement.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var LogoContainer = /*#__PURE__*/function () {
  function LogoContainer(logoSrc, logoAlt, badgeText) {
    _classCallCheck(this, LogoContainer);
    this.logo = new _LogoElement_js__WEBPACK_IMPORTED_MODULE_0__["default"](logoSrc, logoAlt);
    this.badge = new _decorative_BadgeElement_js__WEBPACK_IMPORTED_MODULE_1__["default"](badgeText);
  }
  return _createClass(LogoContainer, [{
    key: "render",
    value: function render() {
      var container = document.createElement("div");
      container.className = "logo-container";
      var logoElement = this.logo.render();
      container.appendChild(logoElement);
      var badgeElement = this.badge.render();
      container.appendChild(badgeElement);
      return container;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/statical/LogoElement.js":
/*!************************************************!*\
  !*** ./src/components/statical/LogoElement.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogoElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LogoElement = /*#__PURE__*/function () {
  function LogoElement(src) {
    var alt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    _classCallCheck(this, LogoElement);
    this.src = src;
    this.alt = alt;
  }
  return _createClass(LogoElement, [{
    key: "render",
    value: function render() {
      var logo = document.createElement("img");
      logo.src = this.src;
      logo.alt = this.alt;
      logo.className = "logo";
      logo.loading = "lazy";
      return logo;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/statical/SubTextElement.js":
/*!***************************************************!*\
  !*** ./src/components/statical/SubTextElement.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SubTextElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var SubTextElement = /*#__PURE__*/function () {
  function SubTextElement(text) {
    _classCallCheck(this, SubTextElement);
    this.text = text;
  }
  return _createClass(SubTextElement, [{
    key: "render",
    value: function render() {
      var subTextElement = document.createElement("p");
      subTextElement.className = "logo-sub-text";
      subTextElement.textContent = this.text;
      return subTextElement;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/statical/TextElement.js":
/*!************************************************!*\
  !*** ./src/components/statical/TextElement.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogoTextElement)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var LogoTextElement = /*#__PURE__*/function () {
  function LogoTextElement(text) {
    _classCallCheck(this, LogoTextElement);
    this.text = text;
  }
  return _createClass(LogoTextElement, [{
    key: "render",
    value: function render() {
      var textElement = document.createElement("p");
      textElement.className = "logo-text";
      textElement.textContent = this.text;
      return textElement;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/statical/ThemedContainer.js":
/*!****************************************************!*\
  !*** ./src/components/statical/ThemedContainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemedContainer)
/* harmony export */ });
/* harmony import */ var _base_Button_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/Button.js */ "./src/components/base/Button.js");
/* harmony import */ var _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ThemeService.js */ "./src/services/ThemeService.js");
/* harmony import */ var _assets_utils_HolidayEffectManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/utils/HolidayEffectManager.js */ "./src/assets/utils/HolidayEffectManager.js");
/* harmony import */ var _assets_effects_SnowEffect_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/effects/SnowEffect.js */ "./src/assets/effects/SnowEffect.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var ThemedContainer = /*#__PURE__*/function () {
  function ThemedContainer() {
    _classCallCheck(this, ThemedContainer);
    this.themeButton = null;
    this.holidayButton = null;
    this.effectManager = new _assets_utils_HolidayEffectManager_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.themeIcons = {
      light: "\n        <svg width=\"22\" height=\"22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M12.111 2.111V2a1 1 0 0 0-1-1h-.222a1 1 0 0 0-1 1v.593a1 1 0 0 0 1 1h.222a1 1 0 0 0 1-1V2.11ZM11 13.963a2.963 2.963 0 1 0 0-5.926 2.963 2.963 0 0 0 0 5.926Zm0 2.222a5.185 5.185 0 1 0 0-10.37 5.185 5.185 0 0 0 0 10.37Zm.111 2.222a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-.222a1 1 0 0 1-1-1v-.593a1 1 0 0 1 1-1h.222Zm7.296-7.518a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v.222a1 1 0 0 1-1 1h-.593a1 1 0 0 1-1-1v-.222Zm-16.296-1H2a1 1 0 0 0-1 1v.222a1 1 0 0 0 1 1h.593a1 1 0 0 0 1-1v-.222a1 1 0 0 0-1-1H2.11ZM16.16 5.684a1 1 0 0 1 0-1.415l.079-.078.262-.262.078-.079a1 1 0 0 1 1.415 0l.157.158a1 1 0 0 1 0 1.414l-.079.078-.262.262-.078.079a1 1 0 0 1-1.415 0l-.157-.157ZM3.93 16.5l-.079.078a1 1 0 0 0 0 1.415l.158.157a1 1 0 0 0 1.414 0l.078-.079.262-.262.079-.078a1 1 0 0 0 0-1.415l-.157-.157a1 1 0 0 0-1.415 0l-.078.079-.262.262ZM5.684 5.84a1 1 0 0 1-1.415 0l-.078-.078-.262-.262-.079-.078a1 1 0 0 1 0-1.414l.158-.158a1 1 0 0 1 1.414 0l.078.079.262.262.079.078a1 1 0 0 1 0 1.415l-.157.157ZM16.5 18.072l.078.079a1 1 0 0 0 1.414 0l.158-.158a1 1 0 0 0 0-1.414l-.079-.078-.262-.262-.078-.079a1 1 0 0 0-1.415 0l-.157.157a1 1 0 0 0 0 1.415l.079.078.262.262Z\" fill=\"currentColor\"/></svg>",
      dark: "\n        <svg width=\"22\" height=\"22\" viewBox=\"0 0 22 22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16.5312 3.4375C17.0835 3.4375 17.5312 3.88522 17.5312 4.4375V4.46875V4.46875C17.5312 4.84845 17.8391 5.15625 18.2188 5.15625V5.15625H18.25C18.8023 5.15625 19.25 5.60397 19.25 6.15625V6.21875C19.25 6.77103 18.8023 7.21875 18.25 7.21875H18.2188V7.21875C17.8391 7.21875 17.5312 7.52655 17.5312 7.90625V7.90625V7.9375C17.5312 8.48978 17.0835 8.9375 16.5312 8.9375H16.4688C15.9165 8.9375 15.4688 8.48978 15.4688 7.9375V7.90625V7.90625C15.4688 7.52655 15.1609 7.21875 14.7812 7.21875V7.21875H14.75C14.1977 7.21875 13.75 6.77103 13.75 6.21875V6.15625C13.75 5.60397 14.1977 5.15625 14.75 5.15625H14.7812V5.15625C15.1609 5.15625 15.4688 4.84845 15.4688 4.46875V4.46875V4.4375C15.4688 3.88522 15.9165 3.4375 16.4688 3.4375H16.5312ZM7.5625 7.21874C7.5625 7.09003 7.41205 7.01821 7.31876 7.10688C6.19808 8.17204 5.5 9.67694 5.5 11.3438C5.5 14.5712 8.11634 17.1875 11.3438 17.1875C13.0106 17.1875 14.5155 16.4894 15.5806 15.3687C15.6693 15.2754 15.5975 15.125 15.4688 15.125V15.125C11.1022 15.125 7.5625 11.5852 7.5625 7.21874V7.21874ZM3.4375 11.3438C3.4375 8.14628 5.33512 5.39432 8.06292 4.14854C8.41589 3.98734 8.82678 4.0833 9.10117 4.35768L9.52259 4.7791C9.79698 5.05349 9.88031 5.46025 9.78897 5.8374C9.68189 6.27953 9.625 6.74196 9.625 7.21874C9.625 10.4461 12.2413 13.0625 15.4688 13.0625C15.9456 13.0625 16.408 13.0056 16.8502 12.8985C17.2273 12.8072 17.6341 12.8905 17.9084 13.1649L18.3298 13.5863C18.6042 13.8607 18.7002 14.2716 18.539 14.6245C17.2932 17.3524 14.5412 19.25 11.3438 19.25C6.97724 19.25 3.4375 15.7103 3.4375 11.3438Z\" fill=\"currentColor\"/>\n        </svg>"
    };
    this.specialThemeIcon = "\n      <svg width=\"22\" height=\"22\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path class=\"path-1\" d=\"M18.843 6.336c.267-1.129.424-1.747 0-2-.255-.154-.629-.211-1.078-.167a8.448 8.448 0 0 0-3.35 1.045c-.454.251-1.047.774-1.113 1.008-.082.29.053.7.303.92.061.054.345.18.633.278 1.132.392 2.692.553 3.8.392.42-.06.613-.154.852-.413.332-.359.064-.252-.047-1.063ZM10.482 3.867c-.61-1.015-1.356-1.816-2.355-2.531-.311-.224-.39-.26-.7-.326-.676-.144-1.084 1.326-1.202 1.826-.551.699-1.141.66-.942 1.202.105.284.366.53.942.89.609.38 1.204.662 1.902.9.663.225 1.585.408 1.814.36.33-.069.902-.337.902-.852.063-.236-.098-1.03-.361-1.469Z\" fill=\"#525DD4\"/><path d=\"M11.967 6.368a.915.915 0 0 0 1.117-.627.884.884 0 0 0-.645-1.086l-.125-.033a.916.916 0 0 0-1.117.627c-.13.473.159.96.645 1.086l.125.033ZM7.766 20.959a.915.915 0 0 0 1.116-.627c.13-.473-.306-.49-.793-.616l-.589-.157c-.486-.126-.838-.316-.968.157s.158.96.645 1.086l.589.157Z\" fill=\"#CDA43C\"/><path d=\"M15.196 10.886c-.165-1.537-1.272-2.967-2.8-3.617-.359-.152-1.355-.373-1.731-.384-1.826-.05-3.426.861-4.344 2.471-.059.102-.306.842-.55 1.645-.362 1.19-.482 1.53-.644 1.833-.558 1.04-1.339 1.9-2.392 2.63a1.5 1.5 0 0 0-.594.833l-.02.072c-.104.38-.154.55-.097.674.048.105.17.178.396.316.953.587 3.123 1.35 5.885 2.07 3.23.841 5.795 1.235 6.588 1.011a.316.316 0 0 0 .221-.22l.152-.552a1.312 1.312 0 0 0-.079-.908c-.541-1.146-.79-2.32-.739-3.498.014-.345.083-.678.388-1.9.394-1.575.43-1.825.36-2.476Z\" fill=\"url(#a)\"/><path class=\"path-2\" d=\"M17.68 9.46c-.477-.422-.843-.644-1.56-.942-.153-.063-.761-.19-.972-.2a.1.1 0 0 0-.092.148l.13.224c.285.497.403.754.603 1.31.199.553.39 1.281.468 1.787.032.206.073.402.091.436.043.077.207.122.282.075.033-.02.207-.253.389-.518.182-.265.333-.482.336-.481.017.004 1.354.133 1.444.14a.289.289 0 0 0 .181-.061c.069-.06.074-.08.05-.183-.032-.144-.497-.832-.8-1.184a7.012 7.012 0 0 0-.55-.55ZM7.836 6.7a5.258 5.258 0 0 0-.325-.133c-.22-.077-.81-.188-1.128-.211-.641-.046-1.477.068-2.146.293-.477.162-1.174.477-1.273.575-.074.075-.08.093-.05.174.006.017.011.03.018.043.034.064.128.102.827.395.342.143.625.266.63.273.004.008.028.256.052.552.025.295.06.563.078.594.018.031.077.067.13.08.133.034.18 0 .46-.32.326-.377.865-.88 1.323-1.239a6.911 6.911 0 0 1 1.2-.784l.21-.113a.098.098 0 0 0-.006-.179Z\" fill=\"#525DD4\"/><defs><linearGradient id=\"a\" x1=\"12.065\" y1=\"19.919\" x2=\"5.592\" y2=\"2.583\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#CDA43C\"/><stop offset=\"1\" stop-color=\"#FFF69D\" stop-opacity=\".8\"/></linearGradient></defs></svg>\n    ";
  }
  return _createClass(ThemedContainer, [{
    key: "render",
    value: function render() {
      var _this = this;
      var container = document.createElement("div");
      container.className = "theme-container flex";
      this.themeButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        icon: this.getCurrentThemeIcon(),
        className: "theme-button",
        ariaLabel: "Change theme",
        onClick: function onClick() {
          return _this.handleThemeChange();
        }
      });
      this.holidayButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
        icon: this.specialThemeIcon,
        className: "holiday-button",
        ariaLabel: "Select holiday special theme",
        onClick: function onClick() {
          return _this.handleHolidayMode();
        }
      });
      container.appendChild(this.themeButton.render());
      // container.appendChild(this.holidayButton.render());

      // this.initializeSpecialTheme();

      return container;
    }
  }, {
    key: "handleThemeChange",
    value: function handleThemeChange() {
      var newTheme = _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleTheme();
      this.updateThemeIcon(newTheme);
      this.effectManager.stopEffect();
    }
  }, {
    key: "handleHolidayMode",
    value: function handleHolidayMode() {
      var newTheme = _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__["default"].toggleSpecialTheme();
      if (newTheme === _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__["default"].SPECIAL_THEME) {
        var effect = new _assets_effects_SnowEffect_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.effectManager.startEffect(effect);
      } else {
        this.effectManager.stopEffect();
      }
    }

    /**
     * Updates theme icon dynamically.
     * @param {string} newTheme - The newly applied theme.
     */
  }, {
    key: "updateThemeIcon",
    value: function updateThemeIcon(newTheme) {
      var newIcon = newTheme === "dark" ? this.themeIcons.dark : this.themeIcons.light;
      this.themeButton.buttonElement.querySelector(".button-icon").innerHTML = newIcon;
    }
  }, {
    key: "initializeSpecialTheme",
    value: function initializeSpecialTheme() {
      if (_services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentTheme() === _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__["default"].SPECIAL_THEME) {
        var effect = new _assets_effects_SnowEffect_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.effectManager.startEffect(effect);
      }
    }
  }, {
    key: "getCurrentThemeIcon",
    value: function getCurrentThemeIcon() {
      var currentTheme = _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_1__["default"].getCurrentTheme();
      return currentTheme === "dark" ? this.themeIcons.dark : this.themeIcons.light;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/structural/Card.js":
/*!*******************************************!*\
  !*** ./src/components/structural/Card.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
/* harmony import */ var _statical_CardHeader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../statical/CardHeader.js */ "./src/components/statical/CardHeader.js");
/* harmony import */ var _decorative_DecorativeElement_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorative/DecorativeElement.js */ "./src/components/decorative/DecorativeElement.js");
/* harmony import */ var _sections_MainSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/MainSection.js */ "./src/components/sections/MainSection.js");
/* harmony import */ var _sections_ProjectsSection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sections/ProjectsSection.js */ "./src/components/sections/ProjectsSection.js");
/* harmony import */ var _sections_SocialMediaSection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections/SocialMediaSection.js */ "./src/components/sections/SocialMediaSection.js");
/* harmony import */ var _sections_CodeSection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sections/CodeSection.js */ "./src/components/sections/CodeSection.js");
/* harmony import */ var _sections_MiscSection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/MiscSection.js */ "./src/components/sections/MiscSection.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }







var Card = /*#__PURE__*/function () {
  function Card() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, Card);
    this.name = name;
    this.header = new _statical_CardHeader_js__WEBPACK_IMPORTED_MODULE_0__["default"]("https://raw.githubusercontent.com/ChoxyPop/contenido/f46b9427a46c6a8c3237854283f60579470fc3e0/profile.png", "Foto de perfil de ChoxyPop", "Creando", "ChoxyPop", "Femboy de minicomics, memes y videojuegos.");
    this.decorativeElement = new _decorative_DecorativeElement_js__WEBPACK_IMPORTED_MODULE_1__["default"]("animated-line");
    this.mainSection = _sections_MainSection_js__WEBPACK_IMPORTED_MODULE_2__["default"].create();
    this.projectsSection = _sections_ProjectsSection_js__WEBPACK_IMPORTED_MODULE_3__["default"].create();
    this.socialMediaSection = _sections_SocialMediaSection_js__WEBPACK_IMPORTED_MODULE_4__["default"].create();
    this.codeSection = _sections_CodeSection_js__WEBPACK_IMPORTED_MODULE_5__["default"].create();
    this.miscSection = _sections_MiscSection_js__WEBPACK_IMPORTED_MODULE_6__["default"].create();
  }
  return _createClass(Card, [{
    key: "render",
    value: function render() {
      var cardElement = document.createElement("div");
      cardElement.className = "card animate-in flex flex-col flex-nowrap align-content-center justify-content-start";
      if (this.name) {
        cardElement.setAttribute("name", this.name);
      }
      var animatedLineContainer = document.createElement("div");
      animatedLineContainer.className = "animated-line-container";
      cardElement.appendChild(this.header.render());
      cardElement.appendChild(animatedLineContainer);
      animatedLineContainer.appendChild(this.decorativeElement.render());
      cardElement.appendChild(this.mainSection.render());
      cardElement.appendChild(this.projectsSection.render());
      cardElement.appendChild(this.socialMediaSection.render());
      cardElement.appendChild(this.codeSection.render());
      cardElement.appendChild(this.miscSection.render());
      return cardElement;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/structural/Footer.js":
/*!*********************************************!*\
  !*** ./src/components/structural/Footer.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Footer = /*#__PURE__*/function () {
  function Footer(footerTextProvider) {
    _classCallCheck(this, Footer);
    this.footerTextProvider = footerTextProvider;
  }
  return _createClass(Footer, [{
    key: "render",
    value: function render() {
      var footerContent = document.createElement("div");
      footerContent.className = "footer-content";
      footerContent.textContent = this.footerTextProvider.getText();
      return footerContent;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/structural/Header.js":
/*!*********************************************!*\
  !*** ./src/components/structural/Header.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Header = /*#__PURE__*/function () {
  function Header(headerText) {
    _classCallCheck(this, Header);
    this.headerText = headerText;
  }
  return _createClass(Header, [{
    key: "render",
    value: function render() {
      var headerContent = document.createElement("div");
      headerContent.className = "header-content";
      headerContent.textContent = this.headerText;
      return headerContent;
    }
  }]);
}();


/***/ }),

/***/ "./src/components/structural/Page.js":
/*!*******************************************!*\
  !*** ./src/components/structural/Page.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Page = /*#__PURE__*/function () {
  function Page() {
    _classCallCheck(this, Page);
    this.headerElement = null;
    this.mainElement = null;
    this.footerElement = null;
  }

  /**
   * Initializes the main container structure: header, main, and footer
   */
  return _createClass(Page, [{
    key: "initializeContainer",
    value: function initializeContainer() {
      this.headerElement = this.createElement("header", "header");
      this.mainElement = this.createElement("main", "flex flex-col flex-nowrap align-content-center align-items-center justify-content-start");
      this.footerElement = this.createElement("footer", "footer flex align-content-center align-items-center justify-content-center");
      document.body.append(this.headerElement, this.mainElement, this.footerElement);
    }

    /**
     * Creates an HTML element with a specified tag and class name
     * @param {string} tag - The HTML tag name
     * @param {string} className - The class name(s) to apply
     * @returns {HTMLElement} - Created HTML element
     */
  }, {
    key: "createElement",
    value: function createElement(tag, className) {
      var element = document.createElement(tag);
      element.className = className;
      return element;
    }

    /**
     * Adds content to the header
     * @param {Object} header - Instance of the Header class
     */
  }, {
    key: "addHeaderContent",
    value: function addHeaderContent(header) {
      this.appendContent(this.headerElement, header.render());
      this.headerElement.setAttribute("role", "banner");
    }

    /**
     * Adds content to the main container
     * @param {HTMLElement} element - Element to append to the main container
     */
  }, {
    key: "addMainContent",
    value: function addMainContent(element) {
      this.appendContent(this.mainElement, element);
      this.mainElement.setAttribute("role", "main");
    }

    /**
     * Adds content to the footer
     * @param {Object} footer - Instance of the Footer class
     */
  }, {
    key: "addFooterContent",
    value: function addFooterContent(footer) {
      this.appendContent(this.footerElement, footer.render());
      this.footerElement.setAttribute("role", "contentinfo");
    }

    /**
     * Appends content to a specified container if it exists
     * @param {HTMLElement} container - Target container element
     * @param {HTMLElement} content - Content to append
     */
  }, {
    key: "appendContent",
    value: function appendContent(container, content) {
      if (container) {
        container.appendChild(content);
      }
    }
  }]);
}();


/***/ }),

/***/ "./src/services/ThemeService.js":
/*!**************************************!*\
  !*** ./src/services/ThemeService.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ThemeUtils)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ThemeUtils = /*#__PURE__*/function () {
  function ThemeUtils() {
    _classCallCheck(this, ThemeUtils);
  }
  return _createClass(ThemeUtils, null, [{
    key: "getCurrentTheme",
    value:
    /**
     * Gets the current theme (checks data-theme attribute or sets default based on date).
     * @returns {string} Current theme: 'dark', 'special', or 'light' (default).
     */
    function getCurrentTheme() {
      var storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme;
      }
      return "light";
    }

    /**
     * Applies the specified theme.
     * @param {string} theme - Theme to apply: 'dark', 'special', or 'light'.
     */
  }, {
    key: "applyTheme",
    value: function applyTheme(theme) {
      if (theme === ThemeUtils.DARK_THEME || theme === ThemeUtils.SPECIAL_THEME) {
        document.documentElement.setAttribute("data-theme", theme);
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
      localStorage.setItem("theme", theme);
    }

    /**
     * Toggles between 'light' and 'dark' themes.
     * @returns {string} The new active theme.
     */
  }, {
    key: "toggleTheme",
    value: function toggleTheme() {
      var currentTheme = this.getCurrentTheme();
      var newTheme = currentTheme === this.DARK_THEME ? "light" : this.DARK_THEME;
      this.applyTheme(newTheme);
      return newTheme;
    }

    /**
     * Toggles a special holiday theme.
     * @returns {string} The new active theme.
     */
  }, {
    key: "toggleSpecialTheme",
    value: function toggleSpecialTheme() {
      var currentTheme = this.getCurrentTheme();
      var newTheme = currentTheme === this.SPECIAL_THEME ? "light" : this.SPECIAL_THEME;
      this.applyTheme(newTheme);
      return newTheme;
    }
  }]);
}();
_defineProperty(ThemeUtils, "DARK_THEME", "dark");
_defineProperty(ThemeUtils, "SPECIAL_THEME", "special");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _vercel_analytics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vercel/analytics */ "./node_modules/@vercel/analytics/dist/index.mjs");
/* harmony import */ var _components_structural_Page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/structural/Page.js */ "./src/components/structural/Page.js");
/* harmony import */ var _components_structural_Card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/structural/Card.js */ "./src/components/structural/Card.js");
/* harmony import */ var _components_structural_Footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/structural/Footer.js */ "./src/components/structural/Footer.js");
/* harmony import */ var _components_structural_Header_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/structural/Header.js */ "./src/components/structural/Header.js");
/* harmony import */ var _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/ThemeService.js */ "./src/services/ThemeService.js");
/* harmony import */ var _components_decorative_StampElement_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/decorative/StampElement.js */ "./src/components/decorative/StampElement.js");
/* harmony import */ var _components_decorative_CardStampManager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/decorative/CardStampManager.js */ "./src/components/decorative/CardStampManager.js");
/* harmony import */ var _components_decorative_BackgroundManager_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/decorative/BackgroundManager.js */ "./src/components/decorative/BackgroundManager.js");
/* harmony import */ var _assets_utils_FooterTextProvider_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/utils/FooterTextProvider.js */ "./src/assets/utils/FooterTextProvider.js");
/* harmony import */ var _assets_utils_ThemeResetter_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/utils/ThemeResetter.js */ "./src/assets/utils/ThemeResetter.js");
/* harmony import */ var _assets_styles_main_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/styles/main.css */ "./src/assets/styles/main.css");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }












(0,_vercel_analytics__WEBPACK_IMPORTED_MODULE_0__.inject)();
var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);
    this.page = new _components_structural_Page_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.backgroundManager = new _components_decorative_BackgroundManager_js__WEBPACK_IMPORTED_MODULE_8__["default"]("/background-noise.png", {
      size: "128px",
      repeat: "repeat"
    });
  }
  return _createClass(App, [{
    key: "initialize",
    value: function initialize() {
      (0,_assets_utils_ThemeResetter_js__WEBPACK_IMPORTED_MODULE_10__.resetInvalidTheme)();
      _services_ThemeService_js__WEBPACK_IMPORTED_MODULE_5__["default"].applyTheme(_services_ThemeService_js__WEBPACK_IMPORTED_MODULE_5__["default"].getCurrentTheme());
      this.page.initializeContainer();
      var header = new _components_structural_Header_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
      this.page.addHeaderContent(header);
      var card = new _components_structural_Card_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var cardElement = card.render();
      this.page.addMainContent(cardElement);
      var footerTextProvider = new _assets_utils_FooterTextProvider_js__WEBPACK_IMPORTED_MODULE_9__.FooterTextProvider("creado con 💜 por ChoxyPop. Todos los derechos reservados. (Diseño y codigo hecho por Alina Polozhai)");
      var footer = new _components_structural_Footer_js__WEBPACK_IMPORTED_MODULE_3__["default"](footerTextProvider);
      this.page.addFooterContent(footer);
      var stampSvg = new _components_decorative_StampElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]("/stamp.svg");
      stampSvg.initialize();
      var cardStampManager = new _components_decorative_CardStampManager_js__WEBPACK_IMPORTED_MODULE_7__["default"]("/stamp.svg", cardElement);
      cardStampManager.initialize();
      this.backgroundManager.initialize();
    }
  }]);
}();

var app = new App();
app.initialize();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map