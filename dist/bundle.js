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
      var minecraftIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 1037 1139.627\" id=\"minecraft\"><path fill=\"#97C767\" d=\"M483.302 1125.112c-16.934-7.874-55.926-25.793-86.645-39.818-85.554-39.063-157.734-72.115-170.429-78.038-6.3-2.941-19.834-9.09-30.074-13.664-10.239-4.575-36.342-16.468-58.003-26.43-21.66-9.961-61.457-28.155-88.438-40.434l-49.05-22.32V170.339l4.654-1.465c5.827-1.834 291.854-95.833 418.858-137.65L519.007-.001l165.107 54.402c90.81 29.92 207.48 68.356 259.273 85.411l94.166 31.01-.36 366.534-.358 366.534-66.596 30.237c-36.629 16.632-153.285 69.688-259.238 117.902-105.955 48.214-193.602 87.604-194.776 87.53-1.17-.072-15.989-6.572-32.922-14.447z\"></path><path fill=\"#88B858\" d=\"M446.067 1107.669a86781.035 86781.035 0 0 0-133.192-60.988c-35.052-16.004-73.075-33.6-84.498-39.102-11.42-5.503-25.92-12.106-32.224-14.678-6.302-2.57-39.169-17.371-73.04-32.893-33.87-15.521-74.475-34.09-90.229-41.265C17.13 911.57 3.435 905.098 2.45 904.366c-1.42-1.06-1.79-55.621-1.79-264.44 0-144.708.428-309.505.95-366.215l.95-103.107 105.391-34.701a197643.512 197643.512 0 0 1 167.687-55.136 135816.455 135816.455 0 0 0 152.594-50.201L518.523.8l28.58 9.215 28.575 9.216-12.53 4.129c-6.894 2.271-12.534 4.5-12.534 4.954 0 .453 5.965 2.78 13.248 5.172l13.248 4.349 13.131-4.681 13.133-4.68 60.998 20.09c33.551 11.05 60.678 20.611 60.283 21.247-.393.638-5.803 2.967-12.02 5.177l-11.312 4.019 14.654 4.74 14.658 4.739 9.885-3.771c5.436-2.075 12.137-4.021 14.896-4.325 3.688-.405 27.12 6.765 88.65 27.132l83.641 27.683-7.734 3.3c-4.254 1.814-11.924 5.251-17.043 7.634a806.896 806.896 0 0 1-18.617 8.325c-5.818 2.492-8.504 4.293-7.162 4.8 9.48 3.578 28.215 9.42 30.211 9.42 1.354 0 6.551-1.832 11.545-4.072 4.996-2.238 11.664-4.894 14.814-5.898 3.15-1.004 11.016-4.07 17.477-6.812l11.75-4.982 34.797 11.599c19.14 6.379 35.926 11.599 37.307 11.599 2.383 0 2.49 18.157 2.145 366.686l-.357 366.687-148.23 67.305c-81.525 37.019-154.674 70.274-162.55 73.904-54.165 24.946-208.768 94.983-209.56 94.929-.538-.04-32.23-14.421-70.433-31.96zM388.46 461.92l-.396-21.838-5.013-2.532c-6.315-3.188-39.763-18.861-49.804-23.337l-7.554-3.366.393 22.234.396 22.234 30.074 14.103c16.542 7.757 30.576 14.157 31.188 14.224.611.064.932-9.71.716-21.722zm-64.127-75.599v-21.532l-6.087-2.66c-3.347-1.464-10.437-4.637-15.754-7.05l-9.667-4.391v43.854l13.963 6.551c7.68 3.603 14.77 6.599 15.754 6.658 1.36.079 1.791-5.101 1.791-21.43zm140.378-21.505c9.001-3.979 16.706-7.767 17.122-8.416.415-.648 7.821-4.192 16.461-7.875s15.981-6.969 16.315-7.303c.557-.555-11.487-6.355-26.594-12.809l-6.028-2.575-17.13 7.353c-9.42 4.043-17.707 7.354-18.415 7.354-1.709 0-33.7-14.273-35.219-15.714-.652-.618 6.276-4.229 15.396-8.025 9.121-3.794 16.582-7.303 16.582-7.797 0-1.024-30.035-14.343-32.225-14.288-.787.02-9.146 3.193-18.574 7.054l-17.144 7.021 8.422 3.723c21.523 9.52 25.053 11.27 24.507 12.148-.319.519-8.354 4.096-17.854 7.95s-17.076 7.206-16.835 7.446c1.766 1.768 69.614 31.898 71.916 31.938 1.614.026 10.296-3.204 19.297-7.185zM98.051 328.31v-22.258l-9.668-4.389c-5.315-2.416-12.405-5.589-15.754-7.052l-6.086-2.659.002 22.505.003 22.506 14.677 6.729c8.071 3.701 15.16 6.763 15.75 6.803.593.041 1.074-9.943 1.075-22.185zm548.87-11.533c8.077-3.618 15.653-7.366 16.835-8.329 1.182-.962 8.455-4.551 16.164-7.975 7.711-3.426 13.512-6.662 12.891-7.193-.619-.531-7.992-3.733-16.38-7.115-13.823-5.574-15.708-5.996-20.052-4.491-9.336 3.231-62.799 26.437-62.789 27.25.018 1.348 31.928 14.282 35.428 14.361 1.767.04 9.822-2.888 17.902-6.508zm134.595-31.014c7.381-3.348 13.525-6.731 13.656-7.519.13-.787-7.076-4.193-16.012-7.566l-16.248-6.134-15.207 6.696c-8.363 3.686-15.205 7.103-15.205 7.596 0 1.136 29.97 12.803 33.193 12.925 1.323.048 8.442-2.651 15.823-5.998zm-379.488-16.617c5.317-2.08 9.667-4.21 9.667-4.734 0-.526-6.752-3.751-15.006-7.168-8.25-3.415-15.019-6.708-15.037-7.315-.018-.608 1.418-1.688 3.19-2.4 7.262-2.919 30.023-11.716 45.47-17.572 9.06-3.437 16.186-6.866 15.833-7.623-1.266-2.737-26.45-12.194-30.128-11.314-3.146.753-39.48 14.774-57.579 22.216-3.688 1.52-7.522 2.762-8.519 2.762-2.6 0-37.049 13.227-37.018 14.212.014.453 7.586 4.011 16.827 7.905a6475.423 6475.423 0 0 1 32.5 13.824l15.698 6.741 7.216-2.875a3419.758 3419.758 0 0 1 16.886-6.659zm308.99-12.394c6.695-2.929 12.682-5.79 13.301-6.362.621-.57-6.79-4.063-16.469-7.758l-17.6-6.719-16.463 7.111c-11.967 5.169-15.762 7.383-13.889 8.103 1.418.544 9.473 3.715 17.896 7.046 10.426 4.122 16.236 5.713 18.186 4.979 1.577-.593 8.342-3.474 15.038-6.4zm134.67-.222c7.912-3.672 13.877-7.118 13.256-7.66-.619-.542-8.352-3.611-17.18-6.821l-16.05-5.836-15.015 6.662c-8.256 3.664-14.686 6.985-14.29 7.383.817.816 32.188 12.756 33.827 12.873.588.042 7.54-2.927 15.452-6.601zm-310.182-13.612c8.31-3.281 15.104-6.344 15.1-6.804-.004-.458-7.143-3.652-15.863-7.097-8.723-3.443-15.324-6.777-14.674-7.409.652-.632 7.631-3.721 15.51-6.862 10.924-4.358 13.643-5.946 11.457-6.691-1.574-.538-13.793-5.465-27.152-10.951-35.376-14.525-33.197-14.201-50.63-7.544-8.026 3.063-14.585 5.904-14.578 6.312.006.407 13.89 6.158 30.847 12.782 16.958 6.622 31.131 12.524 31.497 13.116.366.59-6.422 3.872-15.084 7.292-8.662 3.419-15.748 6.54-15.748 6.935 0 1.014 28.833 12.584 31.776 12.751 1.337.074 9.231-2.548 17.542-5.83zm236.924-12.88c7.578-3.277 14.744-6.752 15.924-7.723 1.184-.971 7.805-4.204 14.711-7.186 6.912-2.982 12.068-5.847 11.46-6.363-.608-.518-7.774-3.291-15.925-6.164l-14.816-5.221-13.395 5.701c-7.367 3.136-14.146 5.703-15.068 5.703-3.53 0-32.998 13.308-31.879 14.396 1.492 1.452 30.574 12.575 33.234 12.712 1.09.056 8.178-2.579 15.754-5.855zm-537.252-27.612c8.771-3.104 15.685-6.068 15.364-6.586-.32-.52-6.383-3.375-13.47-6.348l-12.892-5.405-15.872 5.434c-8.728 2.988-16.154 5.894-16.502 6.455-.61.989 25.014 12.876 26.627 12.354.442-.146 7.976-2.802 16.745-5.904zm399.668.441c8.125-3.261 14.248-6.4 13.605-6.978-.64-.578-8.004-3.614-16.36-6.748l-15.196-5.698-14.164 5.618c-7.79 3.091-14.67 6.109-15.29 6.709-1.089 1.053 26.126 12.537 30.485 12.864 1.181.09 8.797-2.505 16.92-5.767zm262.707.371c4.926-2.264 10.123-4.515 11.553-5.003 4.51-1.542 1.4-3.396-14.676-8.753l-15.629-5.209-12.283 5.336c-6.756 2.934-12.283 5.763-12.283 6.285 0 .524 2.096 1.656 4.654 2.515 2.561.86 9.166 3.187 14.682 5.17 5.514 1.982 11.15 3.645 12.525 3.69 1.377.045 6.531-1.767 11.457-4.031zM156.948 183.63c19.17-6.745 35.054-12.464 35.297-12.708s-5.867-3.133-13.578-6.42l-14.02-5.98-18.619 6.562a7144.685 7144.685 0 0 1-35.566 12.408c-9.32 3.217-16.41 6.367-15.754 7.004 1.618 1.567 23.695 11.306 25.747 11.358.9.022 17.323-5.479 36.493-12.224zm167.733-13.311c17.127-6.02 31.145-11.269 31.15-11.663.005-.396-6.275-3.157-13.955-6.138l-13.963-5.42-12.173 4.232c-25.516 8.869-49.236 17.515-51.428 18.74-1.924 1.077-1.722 1.497 1.302 2.692 1.97.78 8.092 3.352 13.605 5.716 5.516 2.364 10.991 3.958 12.173 3.542l33.29-11.701zm244.79 5.458c20.244-8.281 35.158-14.147 38.787-15.255 3.863-1.179 2.986-3.021-2.146-4.524-2.56-.75-8.844-2.969-13.963-4.928a5203.447 5203.447 0 0 0-25.475-9.632c-8.89-3.336-15.814-6.416-15.387-6.844.426-.426 13.64-5.703 29.36-11.724l28.585-10.947-14.439-5.339-14.439-5.34-26.684 9.596c-14.678 5.279-28.297 10.208-30.268 10.957-3.23 1.229-2.26 1.842 10.025 6.311 14.416 5.245 17.551 7.071 14.203 8.271-1.117.399-7.775 2.893-14.799 5.539l-12.768 4.81 15.203 5.606c8.361 3.084 14.752 6.009 14.2 6.498-.55.487-7.314 3.305-15.03 6.26-7.715 2.955-13.633 5.774-13.148 6.271.891.911 27.801 11.445 29.564 11.572.525.038 8.902-3.182 18.62-7.158zm-163.363-34.884c7.405-2.683 21.357-7.646 31.005-11.031 9.646-3.386 17.06-6.564 16.47-7.065-1.734-1.473-25.37-9.971-27.638-9.938-1.144.019-9.166 2.628-17.83 5.804-8.665 3.173-21.03 7.614-27.48 9.871-18.29 6.399-18.203 6.055-3.07 11.926 7.351 2.853 13.75 5.214 14.222 5.248.47.033 6.916-2.133 14.321-4.815zm346.087-11.847c7.32-2.896 12.811-5.726 12.201-6.284-.607-.559-7.625-3.131-15.592-5.716l-14.484-4.698-13.068 4.896c-7.189 2.692-13.076 5.276-13.084 5.74-.014.666 27.223 10.854 30.035 11.234.377.051 6.674-2.277 13.992-5.172zM573.066 80.121c2.385-1.334 2.271-1.591-1.252-2.931-2.125-.809-8.357-2.835-13.855-4.505l-9.994-3.035-11.922 4.271C495.7 88.372 492.597 89.657 495.44 90.782c1.556.616 7.355 2.805 12.891 4.868l10.062 3.749 26.032-8.909c14.315-4.899 27.204-9.564 28.641-10.369zm92.112 9.749c.006-.421-5.965-2.731-13.268-5.137l-13.277-4.374-11.785 4.388c-6.48 2.412-11.785 4.75-11.785 5.191 0 .443 5.934 2.745 13.182 5.116l13.182 4.311 11.871-4.367c6.528-2.402 11.874-4.709 11.88-5.128zM380.46 84.718c19.703-7.083 19.008-5.994 6.888-10.797-5.907-2.341-12.108-4.292-13.779-4.335-1.672-.043-9.338 2.02-17.034 4.583-14.537 4.844-14.959 5.539-5.242 8.635 2.108.673 6.41 2.196 9.561 3.388 7.58 2.864 7.528 2.868 19.606-1.474zm76.713-5.714c16.075-5.213 28.691-9.987 28.037-10.608-.656-.621-6.668-3.034-13.365-5.361l-12.174-4.23-12.173 4.086c-6.695 2.249-13.46 4.687-15.038 5.419-1.575.733-3.83 1.275-5.013 1.206-3.02-.176-25.778 7.535-25.778 8.734 0 .754 22.6 9.686 25.67 10.144.333.048 13.758-4.176 29.834-9.39z\"></path><path fill=\"#B7835A\" d=\"M446.067 1107.669a86781.035 86781.035 0 0 0-133.192-60.988c-35.052-16.004-73.075-33.6-84.498-39.102-11.42-5.503-25.92-12.106-32.224-14.678-6.302-2.57-39.169-17.371-73.04-32.893-33.87-15.521-74.475-34.09-90.229-41.265C17.13 911.57 3.435 905.098 2.45 904.366 1.028 903.305.66 841.823.66 605.316c0-163.743.311-297.714.69-297.714.38 0 6.167 2.53 12.862 5.624 20.134 9.302 18.092 11.05 17.634-15.097l-.396-22.579-14.644-6.531-14.645-6.53-.035-46.073-.036-46.074 4.655-1.021c2.561-.562 18.833-5.783 36.162-11.604 80.786-27.137 236.118-77.826 238.491-77.826 1.455 0 7.745 1.996 13.978 4.435l11.331 4.437 15.586-4.841 15.585-4.839-11.429-4.096c-6.286-2.251-11.938-4.544-12.56-5.095-.925-.818 137.064-47.229 191.608-64.448l14.32-4.521 27.213 9.188 27.211 9.188-12.529 4.095c-6.895 2.251-12.533 4.466-12.533 4.92 0 .453 6.141 2.847 13.646 5.319l13.643 4.494 13.926-4.676 13.924-4.678 59.348 19.857c32.64 10.922 59.563 20.076 59.828 20.342.264.264-3.564 1.948-8.506 3.74-17.955 6.512-17.922 5.48-.393 11.438l15.756 5.355 11.457-4.278c6.301-2.354 12.752-4.563 14.336-4.91 1.584-.349 36.387 10.412 77.338 23.911 40.951 13.5 78.484 25.842 83.408 27.431 4.922 1.586 8.951 3.07 8.951 3.299s-11.604 5.45-25.779 11.604c-14.178 6.154-25.779 11.555-25.775 12 0 .446 7.416 3.354 16.48 6.46 9.06 3.106 15.987 6.059 15.392 6.56-.596.502-6.674 3.356-13.506 6.346-8.459 3.699-13.713 5.201-16.469 4.708-7.29-1.305-31.898-10.344-31.529-11.579.197-.665 6.141-3.677 13.205-6.697 11.783-5.033 12.55-5.6 9.266-6.836-1.969-.74-9.703-3.475-17.186-6.073l-13.606-4.729-27.908 11.796c-15.35 6.488-28.076 11.962-28.279 12.167-.205.205 4.943 2.194 11.438 4.424 6.496 2.229 15.543 5.8 20.104 7.938 4.564 2.139 14.875 6.008 22.914 8.601 8.041 2.593 22.678 7.51 32.523 10.928 9.846 3.42 18.42 6.215 19.055 6.214.633-.001 11.268-4.6 23.631-10.217 12.361-5.616 24.682-11.149 27.377-12.295 6.11-2.596 5.291-3.182-12.775-9.153-7.484-2.475-14.115-4.959-14.738-5.522-.62-.563 5.055-3.748 12.613-7.075l13.74-6.05 17.463 5.65a5540.804 5540.804 0 0 0 36.244 11.547l18.78 5.898 12.395-5.727c6.818-3.151 13.354-5.727 14.521-5.727 1.873 0 2.082 43.314 1.766 366.685l-.359 366.687-148.23 67.305c-81.525 37.019-154.674 70.275-162.55 73.904-54.165 24.946-208.769 94.983-209.56 94.929-.537-.04-32.229-14.421-70.432-31.96zM388.78 461.441v-22.317l-15.753-7.367-15.754-7.367v-45.341l-10.779-4.912c-5.929-2.702-17.648-8.217-26.042-12.256-8.394-4.038-18.043-8.534-21.443-9.993l-6.183-2.649v91.083l15.296 6.866c8.415 3.776 15.986 7.509 16.828 8.294 1.891 1.759 59.563 27.899 62.041 28.119 1.361.121 1.79-5.174 1.79-22.16zm111.708-79.998a23136.21 23136.21 0 0 1 35.403-15.402c9.625-4.179 17.68-8.111 17.9-8.743.38-1.08-65.022-30.355-71.205-31.874-1.61-.396-10.343 2.479-19.972 6.58l-17.107 7.282-6.52-2.485c-3.59-1.368-11.356-4.686-17.263-7.374l-10.734-4.887 17.512-7.219c9.631-3.969 17.233-7.666 16.895-8.212-.338-.548-15.144-7.395-32.899-15.215-29.896-13.167-35.789-16.367-30.142-16.367 1.193 0 3.287-.594 4.654-1.32 4.493-2.387 25.361-10.151 27.26-10.146 1.02.004 8.738 2.908 17.15 6.453 8.411 3.544 15.844 6.445 16.517 6.445.674 0 8.896 3.292 18.271 7.315l17.047 7.316 16.136-6.733c8.875-3.703 16.664-7.232 17.31-7.845 1.02-.968-28.576-14.422-31.563-14.35-.616.015-8.893-3.25-18.394-7.258l-17.275-7.286-17.582 7.014-17.583 7.012-15.599-6.558c-8.579-3.605-15.61-6.945-15.626-7.419-.017-.476 14.633-6.554 32.553-13.507 17.92-6.955 33.066-13.043 33.656-13.531 1.263-1.042-28.714-13.511-31.866-13.253-1.182.095-13.104 4.45-26.495 9.678-13.39 5.226-28.73 11.151-34.092 13.165l-9.746 3.663-14.6-6.156c-8.032-3.388-15.247-6.625-16.035-7.199-.787-.571-7.877-3.762-15.754-7.087-7.876-3.326-14.51-6.217-14.74-6.425-.229-.207 7.003-3.127 16.072-6.486 9.067-3.36 16.218-6.55 15.886-7.087-.333-.537-6.778-3.472-14.323-6.521-10.439-4.22-13.168-5.853-11.416-6.833 1.94-1.086 54.906-19.773 62.584-22.081 1.38-.416 2.506-1.214 2.506-1.778 0-1.636-26.153-11.531-30.479-11.531-2.163 0-10.85 2.604-19.308 5.786a4182.589 4182.589 0 0 1-31.077 11.524c-8.637 3.156-15.892 5.928-16.124 6.158-.23.231 5.754 2.916 13.298 5.965 7.545 3.049 13.981 5.97 14.302 6.488.322.519-5.365 3.055-12.633 5.635-7.27 2.581-14.83 5.29-16.799 6.021-3.264 1.214-2.376 1.843 10.024 7.096 7.484 3.17 14.12 6.244 14.747 6.833.627.587-7.429 4.113-17.9 7.837a62116.368 62116.368 0 0 0-35.81 12.743c-9.222 3.284-16.312 6.41-15.755 6.947 2.813 2.71 28.501 12.773 31.04 12.158 2.83-.687 5.76-1.761 22.247-8.154 4.333-1.68 8.927-3.377 10.211-3.771 3.011-.925 34.54 12.635 32.987 14.188-.646.646-8.535 4.007-17.53 7.467l-16.359 6.291 6.445 2.803c3.545 1.54 10.11 4.491 14.587 6.557 4.48 2.065 8.99 3.75 10.025 3.741 1.037-.007 8.968-2.906 17.626-6.445 8.66-3.537 16.604-6.43 17.654-6.43 2.688 0 33.197 13.288 33.197 14.457 0 .529-7.732 3.986-17.186 7.683-9.452 3.696-17.187 7.225-17.187 7.837 0 1.14 29.073 14.421 31.563 14.421 3.143 0 34.366 14.839 33.315 15.833-.632.597-8.443 4.13-17.358 7.852-9.298 3.88-15.677 7.3-14.954 8.021.69.691 19.264 9.316 41.273 19.168 22.011 9.851 45.495 20.421 52.19 23.485 6.695 3.065 12.817 5.638 13.604 5.716.798.079 9.497-3.371 19.343-7.666zm-391.524-71.567c5.965 2.719 17.067 7.916 24.67 11.55 14.32 6.843 25.796 11.958 26.834 11.958.328 0 .598-9.697.598-21.548v-21.549l-12.53-5.795c-6.895-3.188-15.433-6.971-18.978-8.407-6.308-2.561-22.245-10.22-39.385-18.929-4.726-2.4-11.985-5.885-16.13-7.741l-7.54-3.375.378 45.874.377 45.874 15.038 6.853 15.038 6.854.393-23.28.393-23.279 10.846 4.943-.002-.003zm179.565-8.092c-1.97-1.229-9.235-4.559-16.147-7.395l-12.568-5.156.395 22.303.393 22.304 15.038 6.775 15.038 6.776.716-21.684.717-21.685-3.582-2.238zm394.742 28.649c8.17-3.814 14.855-7.189 14.855-7.5 0-.309-7.088-3.341-15.754-6.735-8.664-3.396-15.754-6.602-15.754-7.125 0-.522 6.607-3.846 14.68-7.384 8.074-3.537 14.45-7.038 14.166-7.777-.28-.74-8.27-4.439-17.756-8.223l-17.244-6.878-34.117 14.726c-18.764 8.099-33.613 15.229-32.996 15.847.62.618 16.152 7.214 34.521 14.659 18.365 7.445 33.748 13.89 34.18 14.319 1.13 1.13 4.581-.157 21.22-7.929zm-363.866-14.999c-1.529-1.157-3.785-2.05-5.014-1.985-1.228.064-.298 1.001 2.064 2.083 5.553 2.542 6.402 2.515 2.95-.098zm462.83-29.52c8.966-4.054 15.782-7.836 15.15-8.41-1.52-1.371-32.3-12.864-34.452-12.864-2.379 0-31.867 13.122-31.867 14.18 0 .667 31.127 13.694 34.262 14.338.334.068 7.94-3.191 16.906-7.244zM708.67 258.18c8.316-3.553 17.242-7.68 19.834-9.17 4.38-2.52 14.2-6.71 39.084-16.68 5.514-2.208 15.381-6.479 21.926-9.484 6.545-3.008 12.164-5.469 12.49-5.469 1.471 0 16.342-7.298 16.98-8.336.396-.641-7.039-3.935-16.523-7.318-16.672-5.95-17.42-6.084-22.48-4.021-2.879 1.173-14.256 5.807-25.283 10.296-11.027 4.488-25.852 10.952-32.939 14.362s-24.094 10.753-37.787 16.317c-24.197 9.83-27.074 11.174-25.824 12.063.885.629 33.383 13.602 34.471 13.761.51.078 7.735-2.769 16.051-6.321zm138.111-1.665c9.188-4.19 14.047-7.116 12.891-7.763-1.02-.569-9.117-3.706-17.99-6.971l-16.133-5.935-15.088 6.734c-8.299 3.704-14.572 7.234-13.94 7.848 1.515 1.473 30.612 12.54 33.368 12.692 1.18.066 8.783-2.906 16.892-6.605zm-310.13-13.536c8.47-3.437 15.392-6.574 15.388-6.974-.004-.4-7.129-3.537-15.832-6.974-8.7-3.437-15.557-6.515-15.23-6.841s7.512-3.375 15.967-6.773l15.375-6.182-16.604-6.313c-9.133-3.473-16.594-6.635-16.58-7.028.03-.731 27.594-11.798 31.48-12.637 4.2-.906 63.017-23.86 62.985-24.582-.014-.403-13.895-5.833-30.846-12.063-16.95-6.231-30.31-11.755-29.689-12.275s13.535-5.672 28.697-11.45c15.164-5.779 27.566-10.888 27.563-11.356-.008-1.025-25.86-10.157-28.76-10.157-1.547 0-42.98 14.445-60.027 20.93-1.234.47 4.14 3.142 12.645 6.286 8.135 3.008 15.045 5.723 15.354 6.031.307.308-6.174 3.025-14.404 6.042-8.229 3.014-14.63 6.019-14.227 6.674.406.655 2.81 1.81 5.34 2.564 13.846 4.126 26.418 10.191 21.123 10.191-2.293 0-24.359 8.508-26.744 10.312-1.765 1.334-15.975 7.134-26.146 10.668-7.419 2.579-8.207 2.443-26.08-4.517l-13.755-5.356-14.172 5.291c-7.794 2.909-14.649 5.756-15.235 6.323-.586.568 12.604 6.579 29.311 13.358 16.707 6.777 30.545 12.873 30.752 13.542.208.672-6.472 3.839-14.842 7.042l-15.217 5.822 14.89 6.151c8.188 3.385 15.534 6.671 16.322 7.305 2.667 2.142 32.928 14.196 34.37 13.69.788-.273 8.361-3.309 16.827-6.744zm-373.012-13.427c8.825-3.149 16.045-6.067 16.045-6.48 0-.416-6.454-3.561-14.342-6.992l-14.339-6.239-15.378 5.381c-20.729 7.253-20.325 6.906-12.267 10.461a1891.36 1891.36 0 0 1 14.793 6.621c4.333 1.965 8.23 3.438 8.66 3.274.433-.165 8.005-2.875 16.828-6.026zm73.17-27.32c8.97-3.258 15.706-6.297 14.97-6.752-.736-.456-7.259-3.396-14.495-6.534l-13.156-5.706-17.198 5.97c-9.457 3.284-17.2 6.378-17.208 6.875-.007.498 5.626 3.305 12.52 6.238 6.892 2.937 13.12 5.887 13.834 6.56.718.673 2.006.784 2.865.25.857-.537 8.898-3.641 17.868-6.901zm-123.338-3.375c45.624-15.254 80.71-27.611 80.104-28.216-.3-.301-6.114-2.958-12.919-5.906-6.809-2.948-12.549-5.952-12.76-6.674-.213-.721 14.361-6.228 32.388-12.237l32.772-10.924-12.604-5.336-12.606-5.336-35.206 11.38c-19.362 6.259-42.778 13.728-52.034 16.597-9.255 2.868-16.822 5.653-16.815 6.192.007.537 5.193 3.184 11.526 5.879 6.333 2.698 11.81 5.382 12.17 5.966.36.583-15.132 6.324-34.429 12.756-19.295 6.432-35.387 12.188-35.76 12.792-.486.784 21.892 11.846 26.096 12.898.213.053 13.745-4.371 30.077-9.831zm519.1 5.882c4.942-2.224 11.118-4.895 13.72-5.936 2.604-1.039 4.217-2.342 3.582-2.896-.635-.552-8.348-3.65-17.139-6.886l-15.982-5.882-15.525 6.241c-8.537 3.433-15.523 6.674-15.523 7.204 0 .528 3.223 2.15 7.16 3.605a786.251 786.251 0 0 1 14.322 5.483c9.925 3.934 14.98 3.75 25.384-.933zm65.304-27.737l14.785-6.033-15.859-5.74c-8.723-3.157-15.859-6.199-15.859-6.759 0-.562 6.152-3.404 13.672-6.317 7.52-2.914 13.457-5.511 13.195-5.771-.264-.264-7.543-3.002-16.178-6.091l-15.7-5.613-13.37 5.188c-7.354 2.854-13.393 5.833-13.418 6.621-.027.788 6.15 3.612 13.727 6.278 7.578 2.664 13.775 5.312 13.775 5.881s-5.639 3.172-12.53 5.782-13.01 5.146-13.595 5.637c-.803.671 27.908 12.267 31.854 12.864.394.058 7.37-2.609 15.501-5.927zm-258.969-25.254c4.333-1.563 9.167-3.276 10.741-3.808 2.554-.859 2.321-1.257-2.147-3.656-2.757-1.48-5.979-2.758-7.16-2.839-1.18-.081-5.289-1.565-9.126-3.299l-6.978-3.15 15.852-5.671c8.72-3.118 15.64-5.882 15.38-6.141-.258-.258-6.899-2.922-14.759-5.917l-14.287-5.445-15.597 5.556c-8.579 3.055-21.932 7.788-29.67 10.518-20.576 7.259-20.354 6.709-5.065 12.566 48.938 18.753 46.036 17.841 50.646 15.92 2.36-.987 7.84-3.072 12.17-4.634zm314.723-22.702c7.318-2.896 12.81-5.704 12.201-6.238-.609-.535-7.916-3.362-16.238-6.286-16.525-5.804-14.738-5.839-30.697.593a429.984 429.984 0 0 1-7.52 2.905c-2.56.962-4.654 2.263-4.654 2.89 0 1.166 27.658 11.086 31.48 11.29 1.166.061 8.108-2.259 15.428-5.154zm-65.336-22.302c6.975-2.562 12.686-5.002 12.69-5.426.005-.422-6.599-2.919-14.673-5.545-8.07-2.626-15.406-5.356-16.297-6.064-2.477-1.974-26.432-9.817-29.98-9.817-5.08 0-29.893 9.47-27.95 10.668 2.427 1.501 59.11 20.594 61.538 20.729 1.096.058 7.695-1.987 14.672-4.545zm-283.906-9.548c4.412-1.509 25.33-8.385 46.48-15.279 43.184-14.077 41.623-12.521 20.014-19.92l-11.705-4.009-14.582 5.237-14.582 5.237-14.148-5.088-14.148-5.088-29.742 9.514c-16.355 5.232-30.243 9.987-30.86 10.563-.618.578 5.505 3.448 13.604 6.379a3116.941 3116.941 0 0 1 27.617 10.169c7.09 2.658 13.146 4.88 13.458 4.933.315.052 4.181-1.138 8.594-2.648zm144.465-7.435c15.541-5.599 28.457-10.364 28.7-10.586.243-.225-6.317-2.67-14.575-5.436l-15.018-5.028-29.004 9.904c-15.952 5.448-29.25 10.151-29.552 10.451-.299.301 2.232 1.571 5.627 2.821a1361.91 1361.91 0 0 1 13.334 5.018c3.938 1.51 8.302 2.81 9.695 2.891 1.396.079 15.25-4.438 30.793-10.035z\"></path><path fill=\"#72B147\" d=\"M477.574 1121.634c-34.979-16.444-48.505-22.65-116.004-53.219-12.998-5.887-27.82-12.688-32.94-15.112s-29.932-13.86-55.139-25.412l-45.829-21.003-.394-22.131-.393-22.131-13.413-5.974c-7.376-3.286-14.45-6.373-15.719-6.859-2.059-.79-2.308 1.46-2.308 20.903 0 16.86-.403 21.627-1.79 21.066-.983-.396-16.29-7.485-34.014-15.755-17.723-8.271-38.668-17.929-46.545-21.462l-14.32-6.429-.717-22.528-.716-22.529-15.038-6.774-15.038-6.774-.716 21.991-.716 21.99-20.05-9.432c-11.029-5.188-25.272-11.796-31.65-14.685l-11.603-5.253-.796-60.878c-.722-55.2.265-305.063 1.204-305.063.217 0 6.642 2.899 14.28 6.445 7.635 3.544 14.126 6.444 14.421 6.444s.537-20.489.537-45.532v-45.531l-12.532-5.523c-6.892-3.038-13.874-6.338-15.515-7.336-2.957-1.794-2.984-2.433-2.999-70.678-.007-37.876.196-68.867.452-68.867s5.942 2.53 12.638 5.624c20.134 9.302 18.092 11.05 17.634-15.097l-.396-22.579-14.644-6.531-14.645-6.529-.035-46.074-.036-46.074 4.655-1.021c2.561-.562 18.833-5.783 36.162-11.604 80.786-27.137 236.118-77.826 238.491-77.826 1.456 0 7.745 1.996 13.978 4.436l11.331 4.436 15.587-4.842 15.585-4.839-11.429-4.096c-6.286-2.251-11.938-4.544-12.56-5.095-.925-.817 137.064-47.229 191.608-64.448L519.82.923l27.211 9.188 27.213 9.188-12.53 4.095c-6.894 2.251-12.532 4.466-12.532 4.92 0 .453 6.14 2.847 13.645 5.319l13.645 4.494 13.926-4.676 13.924-4.678 59.346 19.857c32.641 10.922 59.563 20.076 59.828 20.342.266.264-3.563 1.948-8.504 3.74-17.955 6.512-17.922 5.48-.393 11.438l15.754 5.355 11.457-4.278c6.303-2.354 12.754-4.563 14.338-4.91 1.584-.349 36.385 10.412 77.338 23.911 40.95 13.5 78.484 25.843 83.406 27.431 4.924 1.586 8.951 3.07 8.951 3.299s-11.602 5.45-25.779 11.604c-14.178 6.154-25.777 11.555-25.773 12 0 .446 7.416 3.354 16.48 6.46 9.06 3.106 15.985 6.059 15.39 6.56-.594.502-6.672 3.356-13.504 6.346-8.46 3.699-13.715 5.201-16.47 4.708-7.29-1.305-31.899-10.344-31.53-11.579.2-.665 6.143-3.677 13.205-6.697 11.785-5.033 12.551-5.6 9.268-6.836-1.97-.74-9.703-3.475-17.188-6.073l-13.607-4.729-27.908 11.796c-15.35 6.488-28.076 11.962-28.279 12.167-.205.205 4.943 2.194 11.438 4.424 6.496 2.229 15.543 5.8 20.104 7.938 4.564 2.139 14.875 6.008 22.914 8.601 8.041 2.593 22.678 7.51 32.523 10.928 9.846 3.42 18.42 6.215 19.055 6.214.633-.001 11.268-4.6 23.631-10.217 12.361-5.616 24.682-11.149 27.377-12.295 6.11-2.596 5.291-3.182-12.775-9.153-7.484-2.475-14.115-4.959-14.738-5.522-.62-.563 5.055-3.748 12.613-7.075l13.74-6.05 17.463 5.65a5540.804 5540.804 0 0 0 36.244 11.547l18.78 5.898 12.395-5.727c6.818-3.151 13.354-5.727 14.52-5.727 1.871 0 2.123 43.656 2.123 366.391v366.392l-158.61 72.125a551026.886 551026.886 0 0 1-223.776 101.707c-35.842 16.271-68.064 30.924-71.609 32.561-34.596 15.969-66.58 30.382-67.229 30.292-.438-.062-17.878-8.138-38.75-17.949h-.004v-.004zM452.906 995.71l-.396-22.249-15.395-7.029-15.396-7.028V1004.519l14.681 6.638c8.073 3.648 15.18 6.674 15.79 6.721.61.042.933-9.932.716-22.168zm64.768-15.786v-22.279l-10.383-4.75a3408.087 3408.087 0 0 1-21.84-10.111c-17.105-8.006-29.554-13.617-30.209-13.617-.32 0-.563 10.148-.54 22.556l.041 22.559 30.392 13.877c16.716 7.632 30.875 13.916 31.466 13.964.591.044 1.073-9.945 1.073-22.199zm-162.156-28.728l-.395-22.366-13.605-6.202c-7.48-3.411-14.41-6.237-15.396-6.278-1.355-.056-1.79 5.119-1.79 21.323 0 15.55.49 21.713 1.79 22.551 2.648 1.705 27.388 13.126 28.68 13.239.612.052.934-9.967.716-22.267zm-225.96-57.185v-22.265l-12.53-5.8c-6.894-3.189-13.982-6.366-15.754-7.061l-3.224-1.261v45.277l14.681 6.648c8.073 3.657 15.162 6.666 15.753 6.688.592.022 1.074-9.981 1.074-22.226zm355.176-21.103v-21.887l-3.938-1.571c-2.165-.865-8.934-3.893-15.038-6.724l-11.099-5.148V881.201l14.68 6.685c8.074 3.676 14.842 6.733 15.038 6.796.197.059.357-9.738.357-21.774zM226.946 846.75v-22.265l-12.532-5.801c-6.893-3.189-13.98-6.365-15.753-7.061l-3.224-1.261v45.277l14.681 6.648c8.074 3.657 15.164 6.666 15.753 6.688.591.022 1.075-9.981 1.075-22.225zm128.572-33.068l-.395-22.389-27.927-12.802c-15.359-7.041-29.378-13.384-31.15-14.097l-3.222-1.294v45.202l29.717 13.752c16.345 7.564 30.54 13.813 31.543 13.886 1.426.105 1.743-4.802 1.434-22.258zm96.674-23.493c-1.302-1.157-61.414-28.589-62.649-28.589-.458 0-.657 10.11-.44 22.471l.396 22.471 31.508 14.479 31.507 14.481.396-22.163c.215-12.188-.107-22.607-.718-23.15zm-258.187-4.007v-22.683l-14.68-6.694c-8.074-3.682-15.18-6.688-15.79-6.679-.61.009-.934 10.106-.716 22.444l.395 22.426 15.038 6.859c8.271 3.773 15.2 6.894 15.396 6.934.197.041.357-10.133.357-22.607zm32.941-31.044v-22.216l-7.52-3.404c-4.136-1.872-11.224-5.078-15.754-7.124l-8.235-3.722v44.509l14.681 6.977c8.074 3.837 15.164 7.026 15.753 7.087.591.06 1.074-9.889 1.075-22.107zM162.5 725.977v-22.734l-30.968-14.145c-17.033-7.779-31.534-14.358-32.225-14.622-2.097-.798-1.566 43.787.534 45.148 1.475.953 61.145 28.729 62.3 29.002.197.048.36-10.146.36-22.649zm355.175-67.216v-22.638l-13.446-5.99c-7.396-3.294-14.484-6.388-15.753-6.874-2.06-.79-2.308 1.513-2.308 21.542v22.425l14.68 6.977c8.074 3.837 15.164 7.026 15.754 7.087.591.058 1.073-10.077 1.073-22.529zM388.76 645.953l-.02-22.558-31.847-14.654-31.846-14.655-.396 21.726c-.295 16.195.07 22.167 1.433 23.46 1.381 1.311 60.503 29.001 62.338 29.2.198.02.35-10.112.338-22.519zm-97.368-44.439v-22.598l-30.568-13.922c-16.813-7.658-30.992-13.923-31.508-13.923-.517 0-.938 9.909-.938 22.022v22.022l7.52 3.229c6.303 2.708 21.528 9.808 49.768 23.202 2.757 1.309 5.174 2.42 5.371 2.471.195.054.355-10.075.355-22.503zm-160.724-28.331l-.395-22.285-31.194-14.234c-17.157-7.829-31.496-14.235-31.865-14.235-.37 0-.67 9.992-.67 22.204v22.205l9.98 4.462c5.487 2.454 19.183 8.862 30.432 14.239 11.25 5.376 21.276 9.812 22.28 9.853 1.423.062 1.74-4.861 1.432-22.209zm30.398-31.214v-21.993l-14.328-6.65c-7.88-3.656-14.649-6.649-15.038-6.649-.39 0-.709 9.683-.709 21.516v21.517l14.68 7.004c8.074 3.851 14.841 7.058 15.038 7.127.196.065.357-9.776.357-21.872zm227.714-80.528v-22.317l-15.753-7.367-15.754-7.367v-45.341l-10.779-4.912c-5.929-2.702-17.648-8.217-26.042-12.256-8.394-4.038-18.043-8.536-21.443-9.993l-6.183-2.65v91.084l15.296 6.867c8.415 3.776 15.986 7.509 16.828 8.292 1.891 1.761 59.563 27.901 62.041 28.121 1.361.12 1.79-5.175 1.79-22.161zm-259.222-25.752v-22.292l-15.097-7.066c-8.304-3.887-15.393-7.067-15.753-7.067-.36 0-.658 10.022-.658 22.271v22.272l14.681 6.978c8.073 3.837 15.162 7.025 15.753 7.086.592.06 1.074-9.922 1.074-22.182zm370.93-54.246a23136.21 23136.21 0 0 1 35.403-15.402c9.625-4.179 17.68-8.111 17.9-8.743.38-1.08-65.022-30.355-71.205-31.874-1.61-.396-10.343 2.479-19.972 6.579l-17.107 7.283-6.52-2.485c-3.59-1.368-11.356-4.686-17.263-7.374l-10.734-4.887 17.512-7.219c9.631-3.969 17.233-7.666 16.895-8.212-.338-.548-15.144-7.395-32.899-15.215-29.896-13.167-35.789-16.367-30.142-16.367 1.193 0 3.287-.594 4.654-1.32 4.493-2.387 25.361-10.151 27.26-10.146 1.02.004 8.738 2.908 17.15 6.453 8.411 3.544 15.844 6.445 16.517 6.445.674 0 8.896 3.292 18.271 7.315l17.047 7.316 16.136-6.733c8.875-3.703 16.664-7.232 17.31-7.845 1.02-.968-28.576-14.422-31.563-14.35-.616.015-8.893-3.25-18.394-7.258l-17.275-7.286-17.582 7.014-17.583 7.012-15.599-6.558c-8.579-3.605-15.61-6.945-15.626-7.419-.017-.476 14.633-6.554 32.553-13.507 17.92-6.955 33.066-13.043 33.656-13.531 1.263-1.042-28.714-13.511-31.866-13.254-1.182.097-13.104 4.452-26.495 9.678-13.39 5.227-28.73 11.152-34.092 13.167l-9.746 3.663-14.6-6.158c-8.032-3.386-15.247-6.625-16.035-7.197-.787-.571-7.877-3.762-15.754-7.087-7.876-3.326-14.51-6.217-14.74-6.425-.229-.207 7.003-3.127 16.072-6.486 9.067-3.36 16.218-6.55 15.886-7.087-.333-.537-6.778-3.472-14.323-6.521-10.439-4.22-13.168-5.853-11.416-6.833 1.94-1.086 54.906-19.773 62.584-22.081 1.38-.416 2.506-1.214 2.506-1.778 0-1.636-26.153-11.531-30.479-11.531-2.163 0-10.85 2.604-19.308 5.786a4138.394 4138.394 0 0 1-31.077 11.523c-8.637 3.157-15.892 5.929-16.124 6.16-.23.231 5.754 2.916 13.298 5.965 7.545 3.049 13.981 5.97 14.302 6.488.322.519-5.365 3.055-12.633 5.635-7.27 2.581-14.83 5.29-16.799 6.021-3.264 1.215-2.376 1.841 10.024 7.096 7.484 3.169 14.12 6.245 14.747 6.833.627.587-7.429 4.113-17.9 7.837a62116.368 62116.368 0 0 0-35.81 12.743c-9.222 3.283-16.312 6.41-15.755 6.947 2.813 2.71 28.501 12.773 31.04 12.158 2.83-.687 5.76-1.761 22.247-8.154 4.333-1.68 8.927-3.377 10.211-3.771 3.011-.925 34.54 12.635 32.987 14.188-.646.646-8.535 4.007-17.53 7.467l-16.359 6.291 6.445 2.803c3.545 1.54 10.11 4.491 14.587 6.557 4.48 2.064 8.99 3.748 10.025 3.741 1.037-.007 8.968-2.906 17.626-6.445 8.66-3.537 16.604-6.43 17.654-6.43 2.688 0 33.197 13.288 33.197 14.457 0 .529-7.732 3.986-17.186 7.683-9.452 3.696-17.187 7.225-17.187 7.837 0 1.14 29.073 14.421 31.563 14.421 3.143 0 34.366 14.839 33.315 15.833-.632.597-8.443 4.13-17.358 7.852-9.298 3.88-15.677 7.3-14.954 8.021.69.69 19.264 9.315 41.273 19.168 22.011 9.85 45.495 20.42 52.19 23.484 6.695 3.065 12.817 5.639 13.604 5.716.798.078 9.497-3.372 19.343-7.667zm-391.524-71.567c5.965 2.719 17.067 7.916 24.67 11.55 14.32 6.843 25.796 11.958 26.834 11.958.328 0 .598-9.697.598-21.548v-21.549l-12.53-5.795c-6.895-3.188-15.433-6.971-18.978-8.407-6.308-2.561-22.245-10.22-39.385-18.929-4.726-2.4-11.985-5.885-16.13-7.741l-7.54-3.375.378 45.874.377 45.874 15.038 6.853 15.038 6.854.393-23.28.393-23.279 10.846 4.943-.002-.003zm179.565-8.092c-1.97-1.229-9.235-4.559-16.147-7.395l-12.568-5.156.395 22.303.393 22.304 15.038 6.775 15.038 6.776.716-21.684.717-21.685-3.582-2.238zm394.742 28.649c8.17-3.814 14.855-7.189 14.855-7.5 0-.309-7.088-3.341-15.754-6.735-8.664-3.396-15.754-6.602-15.754-7.125 0-.522 6.607-3.846 14.68-7.384 8.074-3.537 14.45-7.038 14.166-7.777-.28-.74-8.27-4.439-17.756-8.223l-17.244-6.878-34.117 14.726c-18.764 8.099-33.613 15.229-32.996 15.847.62.618 16.152 7.214 34.521 14.659 18.365 7.445 33.748 13.89 34.18 14.319 1.13 1.13 4.581-.157 21.22-7.929zm-363.866-14.999c-1.529-1.157-3.785-2.05-5.014-1.985-1.228.064-.298 1.001 2.064 2.083 5.553 2.542 6.402 2.515 2.95-.098zm462.83-29.52c8.966-4.054 15.782-7.836 15.15-8.41-1.52-1.371-32.3-12.864-34.452-12.864-2.379 0-31.867 13.122-31.867 14.18 0 .667 31.127 13.694 34.262 14.338.334.068 7.94-3.191 16.906-7.244zM708.67 258.18c8.316-3.553 17.242-7.68 19.834-9.17 4.38-2.52 14.2-6.71 39.084-16.68 5.514-2.208 15.381-6.479 21.926-9.484 6.545-3.008 12.164-5.469 12.49-5.469 1.471 0 16.342-7.298 16.98-8.336.396-.641-7.039-3.935-16.523-7.318-16.672-5.95-17.42-6.084-22.48-4.021-2.879 1.173-14.256 5.807-25.283 10.296-11.027 4.488-25.852 10.952-32.939 14.362s-24.094 10.753-37.787 16.317c-24.197 9.83-27.074 11.174-25.824 12.063.885.629 33.383 13.602 34.471 13.761.51.078 7.735-2.769 16.051-6.321zm138.111-1.665c9.188-4.19 14.047-7.116 12.891-7.763-1.02-.569-9.117-3.706-17.99-6.971l-16.133-5.935-15.088 6.734c-8.299 3.704-14.572 7.234-13.94 7.848 1.515 1.473 30.612 12.54 33.368 12.692 1.18.066 8.783-2.906 16.892-6.605zm-310.13-13.536c8.47-3.437 15.392-6.574 15.388-6.974-.004-.4-7.129-3.537-15.832-6.974-8.7-3.437-15.557-6.515-15.23-6.841s7.512-3.375 15.967-6.773l15.375-6.182-16.604-6.313c-9.133-3.473-16.594-6.635-16.58-7.028.03-.731 27.594-11.798 31.48-12.637 4.2-.906 63.017-23.86 62.985-24.582-.014-.403-13.895-5.833-30.846-12.063-16.95-6.231-30.31-11.755-29.689-12.275s13.535-5.672 28.697-11.45c15.164-5.779 27.566-10.888 27.563-11.356-.008-1.025-25.86-10.157-28.76-10.157-1.547 0-42.98 14.445-60.027 20.93-1.234.47 4.14 3.142 12.645 6.286 8.135 3.008 15.045 5.723 15.354 6.031.307.308-6.174 3.025-14.404 6.042-8.229 3.014-14.63 6.019-14.227 6.674.406.655 2.81 1.81 5.34 2.564 13.846 4.126 26.418 10.191 21.123 10.191-2.293 0-24.359 8.508-26.744 10.312-1.765 1.334-15.975 7.134-26.146 10.668-7.419 2.579-8.207 2.443-26.08-4.517l-13.755-5.356-14.172 5.291c-7.794 2.909-14.649 5.756-15.235 6.323-.586.568 12.604 6.579 29.311 13.358 16.707 6.777 30.545 12.873 30.752 13.542.208.672-6.472 3.839-14.842 7.042l-15.217 5.822 14.89 6.151c8.188 3.385 15.534 6.671 16.322 7.305 2.667 2.142 32.928 14.196 34.37 13.69.788-.273 8.361-3.309 16.827-6.744zm-373.012-13.427c8.825-3.149 16.045-6.067 16.045-6.48 0-.416-6.454-3.561-14.342-6.992l-14.339-6.239-15.378 5.381c-20.729 7.253-20.325 6.906-12.267 10.461a1891.36 1891.36 0 0 1 14.793 6.621c4.333 1.965 8.23 3.438 8.66 3.274.433-.165 8.005-2.875 16.828-6.026zm73.17-27.32c8.97-3.258 15.706-6.297 14.97-6.752-.736-.456-7.259-3.396-14.495-6.534l-13.156-5.706-17.198 5.97c-9.457 3.284-17.2 6.378-17.208 6.875-.007.498 5.626 3.305 12.52 6.238 6.892 2.937 13.12 5.887 13.834 6.56.718.673 2.006.784 2.865.25.857-.537 8.898-3.641 17.868-6.901zm-123.338-3.375c45.624-15.254 80.71-27.611 80.104-28.216-.3-.301-6.114-2.958-12.919-5.906-6.809-2.948-12.549-5.952-12.76-6.674-.213-.721 14.361-6.228 32.388-12.237l32.772-10.924-12.604-5.336-12.606-5.336-35.206 11.38c-19.362 6.259-42.778 13.728-52.034 16.597-9.255 2.868-16.822 5.653-16.815 6.192.007.537 5.193 3.184 11.526 5.879 6.333 2.698 11.81 5.382 12.17 5.966.36.583-15.132 6.324-34.429 12.756-19.295 6.432-35.387 12.188-35.76 12.792-.486.784 21.892 11.846 26.096 12.898.213.053 13.745-4.371 30.077-9.831zm519.1 5.882c4.942-2.224 11.118-4.895 13.72-5.936 2.604-1.039 4.217-2.342 3.582-2.896-.635-.552-8.348-3.65-17.139-6.886l-15.982-5.882-15.525 6.241c-8.537 3.433-15.523 6.674-15.523 7.204 0 .528 3.223 2.15 7.16 3.605a786.251 786.251 0 0 1 14.322 5.483c9.925 3.934 14.98 3.75 25.384-.933zm65.304-27.737l14.785-6.033-15.859-5.74c-8.723-3.157-15.859-6.199-15.859-6.759 0-.562 6.152-3.404 13.672-6.317 7.52-2.914 13.457-5.511 13.195-5.771-.264-.264-7.543-3.002-16.178-6.091l-15.7-5.613-13.37 5.188c-7.354 2.854-13.393 5.833-13.418 6.621-.027.788 6.15 3.612 13.727 6.278 7.578 2.664 13.775 5.312 13.775 5.881s-5.639 3.172-12.53 5.782-13.01 5.146-13.595 5.637c-.803.671 27.908 12.267 31.854 12.864.394.058 7.37-2.609 15.501-5.927zm-258.969-25.254c4.333-1.563 9.167-3.276 10.741-3.808 2.554-.859 2.321-1.257-2.147-3.656-2.757-1.48-5.979-2.758-7.16-2.839-1.18-.081-5.289-1.565-9.126-3.299l-6.978-3.15 15.852-5.671c8.72-3.118 15.64-5.882 15.38-6.141-.258-.258-6.899-2.922-14.759-5.917l-14.287-5.445-15.597 5.556c-8.579 3.055-21.932 7.788-29.67 10.518-20.576 7.259-20.354 6.709-5.065 12.566 48.938 18.753 46.036 17.841 50.646 15.92 2.36-.987 7.84-3.072 12.17-4.634zm314.723-22.702c7.318-2.896 12.81-5.704 12.201-6.238-.609-.535-7.916-3.362-16.238-6.286-16.525-5.804-14.738-5.839-30.697.593a429.984 429.984 0 0 1-7.52 2.905c-2.56.962-4.654 2.263-4.654 2.89 0 1.166 27.658 11.086 31.48 11.29 1.166.061 8.108-2.259 15.428-5.154zm-65.336-22.302c6.975-2.562 12.686-5.002 12.69-5.426.005-.422-6.599-2.919-14.673-5.545-8.07-2.626-15.406-5.356-16.297-6.064-2.477-1.974-26.432-9.817-29.98-9.817-5.08 0-29.893 9.47-27.95 10.668 2.427 1.501 59.11 20.594 61.538 20.729 1.096.058 7.695-1.987 14.672-4.545zm-283.906-9.548c4.412-1.509 25.33-8.385 46.48-15.279 43.184-14.077 41.623-12.521 20.014-19.92l-11.705-4.009-14.582 5.237-14.582 5.237-14.148-5.088-14.148-5.088-29.742 9.514c-16.355 5.232-30.243 9.987-30.86 10.563-.618.578 5.505 3.448 13.604 6.379a3116.941 3116.941 0 0 1 27.617 10.169c7.09 2.658 13.146 4.88 13.458 4.933.315.052 4.181-1.138 8.594-2.648zm144.465-7.435c15.541-5.599 28.457-10.364 28.7-10.586.243-.225-6.317-2.67-14.575-5.436l-15.018-5.028-29.004 9.904c-15.952 5.448-29.25 10.151-29.552 10.451-.299.301 2.232 1.571 5.627 2.821a1361.91 1361.91 0 0 1 13.334 5.018c3.938 1.51 8.302 2.81 9.695 2.891 1.396.079 15.25-4.438 30.793-10.035z\"></path><path fill=\"#946A49\" d=\"M477.574 1121.634c-34.979-16.444-48.505-22.65-116.004-53.219-12.998-5.887-27.82-12.688-32.94-15.112s-29.932-13.86-55.139-25.412l-45.829-21.003-.394-22.131-.393-22.131-13.413-5.974c-7.376-3.286-14.45-6.373-15.719-6.859-2.059-.79-2.308 1.46-2.308 20.903 0 16.86-.403 21.627-1.79 21.066-.983-.396-16.29-7.485-34.014-15.755-17.723-8.271-38.668-17.929-46.545-21.462l-14.32-6.429-.717-22.528-.716-22.529-15.038-6.774-15.038-6.774-.716 21.991-.716 21.99-20.05-9.432c-11.029-5.188-25.272-11.796-31.65-14.685l-11.603-5.253-.796-60.878c-.722-55.2.265-305.063 1.204-305.063.217 0 6.642 2.899 14.28 6.445 7.635 3.544 14.126 6.444 14.421 6.444s.537-20.489.537-45.532v-45.531l-12.532-5.523c-6.892-3.038-13.874-6.338-15.515-7.336-2.958-1.794-2.984-2.432-2.999-70.745-.01-49.324.433-68.75 1.552-68.285.861.356 7.791 3.562 15.397 7.12 7.607 3.56 14.214 6.09 14.68 5.623.467-.465.848-10.797.848-22.959 0-20.471.187-22.042 2.507-21.154 1.38.527 8.465 3.659 15.75 6.956l13.241 5.998.004 23.26c.006 20.612.291 23.435 2.513 24.79 1.377.841 8.628 4.335 16.111 7.762l13.605 6.233.394-22.072c.291-16.295.854-22.052 2.148-21.996.965.043 14.965 6.401 31.113 14.132 16.146 7.73 29.842 13.779 30.434 13.445.59-.336 1.074-10.792 1.074-23.235v-22.626l-31.866-14.475-31.865-14.475-.395-22.991-.394-22.992-5.785-2.315c-3.185-1.271-5.263-2.832-4.62-3.466.642-.634 24.268-8.853 52.498-18.268 28.23-9.413 52.03-17.817 52.885-18.674 1.123-1.123.073-2.179-3.755-3.778-2.92-1.222-8.997-3.904-13.5-5.961l-8.188-3.74 33.298-10.819c18.313-5.952 33.297-11.506 33.297-12.347s-5.8-3.771-12.889-6.511c-7.089-2.741-12.89-5.348-12.89-5.79 0-.443 6.768-2.995 15.041-5.668 8.272-2.675 14.557-5.291 13.964-5.815-.592-.525-5.75-2.754-11.46-4.956-5.71-2.201-10.383-4.414-10.383-4.917 0-.502 7.571-3.375 16.828-6.383l16.827-5.469 12.831 4.953 12.831 4.951 15.097-4.7a20555.14 20555.14 0 0 1 32.028-9.938l16.935-5.238 12.813 4.621c7.05 2.542 13.098 5.076 13.441 5.632.611.989-47.752 17.864-78.382 27.352-8.47 2.622-15.396 5.229-15.396 5.792s5.476 3.177 12.167 5.806c6.692 2.63 12.165 5.103 12.16 5.497-.005.394-19.175 7.422-42.602 15.618-55.773 19.514-57.632 20.206-57.632 21.472 0 .594 5.48 3.275 12.174 5.959 6.695 2.685 12.174 5.238 12.174 5.676 0 .438-7.09 3.268-15.754 6.284-8.665 3.02-15.754 5.951-15.754 6.519 0 .565 6.48 3.829 14.4 7.25l14.4 6.221-17.443 6.182c-9.593 3.399-18.003 6.183-18.688 6.183s-7.594-2.854-15.354-6.341l-14.106-6.34-17.73 6.326c-9.75 3.481-18.318 6.524-19.038 6.766-.72.238 9.72 5.484 23.2 11.654l24.508 11.221.394 22.063.395 22.062 15.328 6.999 15.325 6.997.428-22.041.427-22.042-9.754-4.492c-5.365-2.473-9.554-4.688-9.309-4.922.245-.235 8.367-3.354 18.05-6.93l17.603-6.5 14.62 6.546c8.04 3.601 15.073 6.951 15.63 7.447.558.497-6.71 3.73-16.148 7.188l-17.162 6.284 4.011 2.438c2.206 1.341 6.355 3.212 9.222 4.159 2.863.945 5.59 2.707 6.052 3.915.464 1.208.843 11.688.843 23.291v21.094l15.396 7.377c8.467 4.06 16.361 8.053 17.544 8.878 1.182.825 8.432 4.372 16.111 7.884l13.963 6.386v45.776l-4.653-1.953c-2.562-1.075-8.845-3.942-13.964-6.37-5.12-2.429-10.115-4.416-11.1-4.416-1.354-.003-1.79 5.352-1.79 21.999v22.001l31.15 13.995c17.131 7.698 31.937 14.619 32.901 15.383 1.22.961 1.875 8.19 2.148 23.604l.395 22.22 13.605 6.203c7.482 3.411 14.088 6.235 14.68 6.277.59.042 1.074-9.667 1.074-21.575 0-25.11-2.147-23.565 18.977-13.645l13.963 6.558v-91.418l-23.272-11.297c-12.8-6.212-27.3-13.101-32.225-15.306l-8.95-4.012v-21.287c0-13.779.522-21.286 1.49-21.286.816 0 4.014 1.288 7.103 2.864 5.383 2.745 9.673 3.962 6.214 1.763-.957-.608 6.09-4.15 16.595-8.341l18.256-7.281 16.82 7.45 16.82 7.452-16.229 6.813c-8.927 3.747-17.43 7.259-18.897 7.804-1.945.724 5.222 4.611 26.495 14.371 16.041 7.358 35.93 16.236 44.201 19.73 8.271 3.493 19.776 8.549 25.568 11.234 5.793 2.688 11.702 4.884 13.13 4.884 1.43 0 10.334-3.473 19.79-7.716l17.19-7.715 13.358 5.988c24.291 10.89 19.861 10.736 40.381 1.399 9.953-4.528 18.096-8.644 18.096-9.146s-4.996-3.083-11.102-5.736a1486.394 1486.394 0 0 1-21.84-9.743c-17.025-7.797-36.203-16.025-37.344-16.025-1.094 0-55.628-23.684-88.363-38.374l-19.014-8.531 17.58-7.061 17.58-7.061 15.753 6.773c8.665 3.725 17.365 6.826 19.334 6.893 1.97.065 10.8-2.865 19.624-6.511l16.042-6.631 15.78 6.62c8.678 3.641 16.975 6.619 18.44 6.619 2.581 0 18.058-6.373 39.313-16.189 5.713-2.637 14.102-6.275 18.645-8.085 4.541-1.81 8.574-3.794 8.955-4.413.381-.62-6.393-3.923-15.053-7.343-8.662-3.421-15.754-6.583-15.758-7.029s3.695-2.322 8.225-4.169a735.862 735.862 0 0 0 16.113-6.845l7.877-3.485-15.402-6.077c-8.47-3.341-15.719-6.393-16.105-6.779-.389-.387 5.957-3.429 14.094-6.76l14.797-6.058 15.287 5.813c8.406 3.197 16.494 5.813 17.973 5.813s9.73-2.935 18.336-6.52l15.648-6.518 16.566 6.159c9.111 3.389 16.807 6.676 17.098 7.307.291.629-6.56 4.076-15.225 7.656a7081.383 7081.383 0 0 0-32.22 13.434l-16.466 6.923 6.44 2.697c3.542 1.486 11.435 4.579 17.54 6.877 6.104 2.298 11.098 4.571 11.098 5.05 0 .48-6.604 3.643-14.678 7.027-37.543 15.74-84.14 36.337-84.14 37.191 0 .926 11.712 5.924 52.386 22.354l20.164 8.145 19.938-9.228c33.447-15.479 79.146-36.187 97.273-44.081 9.453-4.116 17.51-7.995 17.9-8.617.81-1.277 29.391-14.325 31.383-14.325 2.938 0 30.205-13.45 29.176-14.392-.617-.563-6.922-3.122-14.014-5.688a3279.49 3279.49 0 0 1-16.426-5.982c-3.205-1.196-2.162-1.933 11.166-7.897 8.088-3.62 14.191-7.034 13.564-7.586-.629-.555-8.059-3.436-16.512-6.405-8.453-2.969-15.082-5.864-14.729-6.437.352-.568 6.41-3.453 13.46-6.408l12.817-5.377 16.813 5.875c9.246 3.231 17.988 5.875 19.426 5.875s9.068-2.862 16.96-6.36l14.345-6.361 15.824 5.646c8.703 3.104 16.676 5.645 17.721 5.645 1.043 0 7.934-2.797 15.31-6.215l13.413-6.214-14.3-4.701c-7.866-2.584-16.235-5.568-18.599-6.628-2.36-1.062-11.303-4.418-19.86-7.46l-15.569-5.532 12.365-5.312 12.365-5.313 35.426 11.467 35.424 11.465 14.346-6.396c7.89-3.52 14.816-6.397 15.396-6.397.578 0 1.051 164.875 1.051 366.392v366.392l-158.61 72.125a526459.608 526459.608 0 0 1-223.776 101.707c-35.84 16.271-68.064 30.924-71.609 32.561-34.594 15.969-66.579 30.382-67.229 30.292-.43-.065-17.869-8.141-38.743-17.952zM452.906 995.71l-.396-22.249-15.395-7.029-15.396-7.028V1004.519l14.681 6.638c8.073 3.648 15.18 6.674 15.79 6.721.61.042.933-9.932.716-22.168zm64.768-15.786v-22.279l-10.383-4.75a3408.087 3408.087 0 0 1-21.84-10.111c-17.105-8.006-29.554-13.617-30.209-13.617-.32 0-.563 10.148-.54 22.556l.041 22.559 30.392 13.877c16.716 7.632 30.875 13.916 31.466 13.964.591.044 1.073-9.945 1.073-22.199zm-162.156-28.728l-.395-22.366-13.605-6.202c-7.48-3.411-14.41-6.237-15.396-6.278-1.355-.056-1.79 5.119-1.79 21.323 0 15.55.49 21.713 1.79 22.551 2.648 1.705 27.388 13.126 28.68 13.239.612.052.934-9.967.716-22.267zm-225.96-57.185v-22.265l-12.53-5.8c-6.894-3.189-13.982-6.366-15.754-7.061l-3.224-1.261v45.277l14.681 6.648c8.073 3.657 15.162 6.666 15.753 6.688.592.022 1.074-9.981 1.074-22.226zm355.176-21.103v-21.887l-3.938-1.571c-2.165-.865-8.934-3.893-15.038-6.724l-11.099-5.148V881.201l14.68 6.685c8.074 3.676 14.842 6.733 15.038 6.796.197.059.357-9.738.357-21.774zM226.946 846.75v-22.265l-12.532-5.801c-6.893-3.189-13.98-6.365-15.753-7.061l-3.224-1.261v45.277l14.681 6.648c8.074 3.657 15.164 6.666 15.753 6.688.591.022 1.075-9.981 1.075-22.225zm128.572-33.068l-.395-22.389-27.927-12.802c-15.359-7.041-29.378-13.384-31.15-14.097l-3.222-1.294v45.202l29.717 13.752c16.345 7.564 30.54 13.813 31.543 13.886 1.426.105 1.743-4.802 1.434-22.258zm96.674-23.493c-1.302-1.157-61.414-28.589-62.649-28.589-.458 0-.657 10.11-.44 22.471l.396 22.471 31.508 14.479 31.507 14.481.396-22.163c.215-12.188-.107-22.607-.718-23.15zm-258.187-4.007v-22.683l-14.68-6.694c-8.074-3.682-15.18-6.688-15.79-6.679-.61.009-.934 10.106-.716 22.444l.395 22.426 15.038 6.859c8.271 3.773 15.2 6.894 15.396 6.934.197.041.357-10.133.357-22.607zm32.941-31.044v-22.216l-7.52-3.404c-4.136-1.872-11.224-5.078-15.754-7.124l-8.235-3.722v44.509l14.681 6.977c8.074 3.837 15.164 7.026 15.753 7.087.591.06 1.074-9.889 1.075-22.107zM162.5 725.977v-22.734l-30.968-14.145c-17.033-7.779-31.534-14.358-32.225-14.622-2.097-.798-1.566 43.787.534 45.148 1.475.953 61.145 28.729 62.3 29.002.197.048.36-10.146.36-22.649zm355.175-67.216v-22.638l-13.446-5.99c-7.396-3.294-14.484-6.388-15.753-6.874-2.06-.79-2.308 1.513-2.308 21.542v22.425l14.68 6.977c8.074 3.837 15.164 7.026 15.754 7.087.591.058 1.073-10.077 1.073-22.529zM388.76 645.953l-.02-22.558-31.847-14.654-31.846-14.655-.396 21.726c-.295 16.195.07 22.167 1.433 23.46 1.381 1.311 60.503 29.001 62.338 29.2.198.02.35-10.112.338-22.519zm-97.368-44.439v-22.598l-30.568-13.922c-16.813-7.658-30.992-13.923-31.508-13.923-.517 0-.938 9.909-.938 22.022v22.022l7.52 3.229c6.303 2.708 21.528 9.808 49.768 23.202 2.757 1.309 5.174 2.42 5.371 2.471.195.054.355-10.075.355-22.503zm-160.724-28.331l-.395-22.285-31.194-14.234c-17.157-7.829-31.496-14.235-31.865-14.235-.37 0-.67 9.992-.67 22.204v22.205l9.98 4.462c5.487 2.454 19.183 8.862 30.432 14.239 11.25 5.376 21.276 9.812 22.28 9.853 1.423.062 1.74-4.861 1.432-22.209zm30.398-31.214v-21.993l-14.328-6.65c-7.88-3.656-14.649-6.649-15.038-6.649-.39 0-.709 9.683-.709 21.516v21.517l14.68 7.004c8.074 3.851 14.841 7.058 15.038 7.127.196.065.357-9.776.357-21.872zm292.161-96.687v-21.291l-6.803-2.899a971.86 971.86 0 0 1-15.074-6.635l-8.27-3.733.395 21.649.396 21.646 13.604 6.203c7.484 3.411 14.09 6.235 14.681 6.277.59.041 1.071-9.505 1.071-21.217zm-323.669-9.593v-22.292l-15.097-7.066c-8.304-3.887-15.393-7.067-15.753-7.067-.36 0-.658 10.022-.658 22.271v22.272l14.681 6.978c8.073 3.837 15.162 7.025 15.753 7.086.592.06 1.074-9.922 1.074-22.182zm388.116-6.333V406.46l-4.654-2.015c-2.56-1.107-9.487-4.25-15.396-6.982l-10.742-4.97.45 23.076.445 23.076 14.591 6.68c8.023 3.675 14.751 6.735 14.946 6.803.2.069.36-10.179.36-22.772zm-356.926-48.012c-1.827-1.625-27.326-13.589-28.964-13.589-.476 0-.688 10.092-.472 22.427l.396 22.426 15.038 6.775 15.038 6.774.395-21.594c.296-16.126-.065-22.003-1.43-23.219zm66.198 5.962v-21.982l-14.456-6.661c-7.95-3.665-15.04-6.662-15.754-6.662-.72 0-1.299 9.764-1.299 21.884v21.885l14.681 6.723c8.074 3.697 15.164 6.738 15.753 6.759.591.019 1.075-9.857 1.075-21.946zm127.462-55.354c-1.183-.764-2.792-1.39-3.58-1.39-.787 0-.466.625.716 1.39 1.182.764 2.792 1.387 3.58 1.387s.465-.624-.716-1.387zm-93.09-42.893c-5.12-2.094-12.808-5.404-17.084-7.359l-7.775-3.554 18.158-6.937c9.987-3.815 18.158-7.097 18.158-7.291 0-.193-6.435-3.151-14.297-6.572-7.863-3.421-13.824-6.625-13.247-7.12 1.357-1.167 32.941-12.799 34.75-12.799.757 0 6.05 2.122 11.765 4.716 5.713 2.593 11.995 5.395 13.955 6.226 3.491 1.477 3.417 1.574-3.404 4.593-3.833 1.695-7.49 3.084-8.126 3.084-2.042 0-18.53 7.502-18.508 8.422.011.487 6.737 3.786 14.945 7.332 8.208 3.544 14.48 6.881 13.94 7.415-.975.965-8.835 4.196-25.328 10.412l-8.594 3.237-9.308-3.805zm61.983-2.721c-8.05-3.663-14.646-6.983-14.659-7.376-.012-.396 7.937-3.745 17.662-7.447l17.685-6.73 15.234 6.646c8.378 3.655 15.235 7.054 15.235 7.554 0 1.058-33.015 14.368-35.11 14.155-.774-.079-7.996-3.14-16.047-6.802zm421.062-28.547c-9.625-3.689-17.03-7.176-16.46-7.744.57-.571 7.644-3.927 15.72-7.459l14.682-6.422 17.891 6.701c9.84 3.687 17.891 7.109 17.891 7.607 0 1.014-28.982 14.206-30.963 14.093-.696-.039-9.138-3.089-18.76-6.776zm-278.678-1.345c-8.508-3.604-14.952-7.054-14.32-7.665.631-.61 7.855-3.773 16.056-7.027l14.91-5.918 16.956 6.875c9.325 3.781 16.957 7.205 16.957 7.608 0 1.197-29.789 12.896-32.552 12.782-1.395-.054-9.499-3.05-18.007-6.655zm70.965.716c-8.07-3.237-14.68-6.317-14.68-6.846s7.164-3.875 15.92-7.438l15.92-6.48 16.305 6.503c8.967 3.576 16.3 6.87 16.291 7.318-.02 1.324-29.189 12.996-32.26 12.908-1.548-.046-9.42-2.73-17.496-5.965zm-204.135-28.717l-14.016-5.89 16.467-6.123 16.47-6.122 14.017 5.821c7.71 3.203 14.182 5.976 14.38 6.164.481.456-30.98 12.301-32.284 12.153-.559-.062-7.324-2.765-15.034-6.003zm116.874-6.741c-1.532-1.343-30.817-12.932-32.682-12.934-1.338-.001-13.396-4.91-44.477-18.108-7.133-3.029-13.117-6.152-13.299-6.939-.182-.789 7.587-4.232 17.266-7.654 43.815-15.498 76.054-28.084 76.671-29.936.277-.834-2.91-2.651-7.085-4.037-4.176-1.386-10.079-3.632-13.118-4.991l-5.524-2.471 8.39-3.091a3625.554 3625.554 0 0 0 14.542-5.394c3.384-1.266 5.64-2.77 5.013-3.341-.628-.571-7.427-3.368-15.109-6.214l-13.968-5.173-26.133 9.366c-37.706 13.516-38.552 13.856-37.298 15.053.627.598 6.87 3.281 13.87 5.96l12.728 4.872-15.253 5.379-15.253 5.379-14.912-5.831c-8.2-3.206-15.43-5.829-16.064-5.829-2.095 0-27.705-10.491-27.705-11.349 0-.982 44.374-16.489 94.775-33.123l35.344-11.664 13.73 5.08 13.728 5.08 14.66-5.168 14.66-5.169 16.053 5.895 16.055 5.897 28.946-10.688c15.922-5.876 29.252-10.989 29.623-11.359.371-.372-.223-.999-1.318-1.396-10.752-3.87-33.074-11.776-43.24-15.314l-12.6-4.386-14.55 5.028-14.554 5.029-15.813-4.983c-8.698-2.74-22.362-7.241-30.368-10.001l-14.554-5.018-29.844 9.612-29.843 9.612-11.732-4.043c-6.453-2.225-11.49-4.435-11.196-4.914.296-.479 33.156-11.79 73.021-25.137l72.483-24.27 13.73 4.853 13.727 4.853 12.705-4.061 12.701-4.061 13.023 4.162 13.023 4.162-13.31 4.439c-7.319 2.441-12.698 4.792-11.95 5.224s7.627 2.853 15.287 5.38l13.926 4.594 14.36-4.708 14.356-4.706 14.322 4.694c7.875 2.582 14.32 4.904 14.32 5.16s-5.154 2.298-11.457 4.537c-6.3 2.238-11.457 4.432-11.457 4.875 0 .441 5.48 2.587 12.174 4.768 6.695 2.182 12.172 4.474 12.172 5.094 0 .623-5.477 2.99-12.172 5.264s-12.174 4.492-12.174 4.931c0 .439 5.48 2.582 12.174 4.762 6.695 2.182 12.172 4.491 12.172 5.135 0 .643-1.77 1.827-3.938 2.632-14.654 5.441-21.49 8.231-23.988 9.792-1.574.984-11.563 4.679-22.197 8.208-10.635 3.528-27.713 9.455-37.953 13.165-29.215 10.59-28.053 10.471-43.948 4.516l-13.635-5.106-14.383 5.278c-7.908 2.904-14.609 5.906-14.888 6.672-.849 2.327 23.188 10.855 28.851 10.236 2.758-.302 10.56-2.758 17.338-5.459l12.325-4.911 7.726 3.154c4.248 1.734 10.824 4.259 14.615 5.607 3.787 1.352 6.688 2.62 6.443 2.821s-13.818 5.408-30.165 11.57c-16.344 6.162-29.716 11.567-29.715 12.015.001.444 6.513 3.288 14.471 6.318 7.957 3.031 13.917 5.985 13.244 6.567-.672.582-7.509 3.394-15.194 6.248l-13.974 5.189-16.472-6.365-16.47-6.366-16.458 5.996c-9.052 3.298-15.975 6.447-15.386 7 .864.809 45.18 19.166 58.916 24.407 1.883.717 3.125 1.604 2.761 1.965-1.933 1.933-32.656 13.052-33.65 12.182v-.001h.006zm139.162-167.66c7.492-2.4 13.621-4.857 13.621-5.46 0-.604-5.842-2.962-12.982-5.245l-12.984-4.149-11.72 4.092c-6.448 2.251-12.618 4.559-13.716 5.126-1.66.859 5.262 3.733 23.816 9.888.187.059 6.471-1.853 13.965-4.252zm-87.35-10.852c6.304-2.066 11.942-4.191 12.53-4.721.585-.529-4.41-2.744-11.1-4.923l-12.168-3.962-12.167 3.962c-6.69 2.179-11.656 4.473-11.03 5.098.923.923 19.22 7.815 21.76 8.195.392.059 5.87-1.582 12.175-3.649zM231.964 215.705c-7.085-3.143-13.066-5.897-13.293-6.125-.225-.228 7.344-3.155 16.821-6.51 9.48-3.353 17.231-6.572 17.231-7.156s-5.828-3.503-12.95-6.491c-7.126-2.988-12.443-5.922-11.816-6.521.625-.597 7.26-3.175 14.743-5.726s14.143-5.109 14.797-5.684c.656-.573 2.912-.206 5.013.815 2.103 1.021 8.01 3.582 13.13 5.692 5.12 2.108 9.795 4.293 10.39 4.854.593.562-6.013 3.555-14.682 6.656-8.667 3.099-15.759 6.038-15.759 6.529 0 .49 5.822 3.334 12.94 6.318 7.115 2.983 13.22 5.881 13.563 6.438.803 1.298-30.578 12.942-34.38 12.759-1.575-.072-8.662-2.705-15.748-5.848zm319.49-6.574c-.577-.584-7.866-3.7-16.202-6.927-8.336-3.226-14.56-6.233-13.83-6.685.73-.452 15.172-6.059 32.09-12.46l30.76-11.639 14.68 5.374c8.074 2.957 14.68 5.775 14.68 6.268 0 .491-6.28 3.354-13.963 6.358-7.68 3.006-14.607 5.956-15.396 6.554-.787.599-7.553 3.505-15.037 6.458-7.48 2.952-14.309 5.906-15.168 6.565-.865.656-2.04.717-2.615.134zm184.13-6.958c-8.939-3.343-16.518-6.343-16.838-6.666-.322-.323 5.531-3.061 13.012-6.083 7.48-3.024 13.445-5.628 13.258-5.788-.188-.161-7.107-2.697-15.379-5.635-8.27-2.939-16.006-6.146-17.188-7.124-1.182-.98-8.43-3.969-16.109-6.643-7.676-2.672-13.96-5.242-13.963-5.709 0-.466 4.67-2.641 10.381-4.833s11.783-4.854 13.494-5.914c2.75-1.706 5.07-1.24 20.063 4.026l16.953 5.955 14.107-5.583c10.787-4.271 13.48-5.844 11.443-6.688-1.465-.605-8.459-3.166-15.543-5.687l-12.879-4.582 7.15-3.115c3.936-1.714 9.73-3.984 12.881-5.048 3.15-1.063 6.695-2.713 7.877-3.667s7.303-3.776 13.605-6.272c6.301-2.496 11.658-4.738 11.904-4.981.246-.244-6.54-2.772-15.082-5.618l-15.53-5.175-12.468 5.027c-6.855 2.764-13.736 5.026-15.29 5.026-2.839 0-59.08-19.23-63.097-21.574-1.455-.85-1.56-1.269-.332-1.298.998-.023 7.252-2.202 13.896-4.839l12.076-4.796 16.182 5.599 16.182 5.6 13.893-5.242 13.893-5.244 31.221 10.347c17.172 5.691 31.678 10.755 32.232 11.25.555.496-4.584 3.107-11.418 5.802l-12.432 4.897 16.961 5.654 16.961 5.653 12.764-5.222 12.762-5.22 34.393 11.076c22.475 7.235 33.502 11.408 31.822 12.038-1.414.529-13.654 5.855-27.205 11.835l-24.635 10.875-17.615-6.228-17.613-6.226-27.928 11.748c-15.36 6.461-27.67 12.341-27.355 13.065.314.724 7.35 3.731 15.631 6.684 8.283 2.952 15.271 5.58 15.533 5.842.477.477-25.13 10.965-33.168 13.584-2.363.771-9.453 3.604-15.756 6.296l-11.457 4.896-16.25-6.075zM305.35 189.74c-9.146-3.859-13.297-6.272-12.02-6.986 1.072-.601 8.55-3.438 16.616-6.307l14.667-5.217 14.183 5.527c7.802 3.041 13.997 6.085 13.771 6.768-.456 1.368-29.104 12.447-31.65 12.24-.878-.072-7.882-2.782-15.567-6.025zm329.762.222c-8.27-3.152-15.53-6.214-16.143-6.805-1.24-1.207 24.016-11.608 28.188-11.608 2.658 0 35.641 11.55 34.893 12.22-1.076.962-29.412 12.113-30.563 12.025-.734-.057-8.103-2.681-16.375-5.832zm224.43-14.035l-14.027-5.32 6.15-2.647c3.383-1.456 8.854-3.822 12.158-5.257 7.9-3.435 8.697-3.345 25.951 2.927l14.771 5.371-11.428 5.287c-6.287 2.906-13.258 5.212-15.49 5.123-2.23-.091-10.37-2.558-18.085-5.484zm-260.949-23.913c-9.45-3.59-23.252-8.716-30.664-11.392-15.242-5.501-15.91-5.895-12.146-7.147 1.49-.496 4.74-1.8 7.225-2.897 2.48-1.097 5.23-1.995 6.105-1.995s2.713-.644 4.08-1.432c1.367-.786 10.754-4.606 20.855-8.488l18.37-7.061 14.93 5.143c8.21 2.829 14.927 5.616 14.927 6.194s-6.244 3.47-13.877 6.426l-13.875 5.376 14.117 5.155c7.766 2.835 14.336 5.816 14.605 6.623.268.807-5.449 3.708-12.707 6.445a15237.33 15237.33 0 0 0-13.975 5.276c-.43.167-8.517-2.636-17.97-6.226zM124 140.457l-12.002-5.223 33.485-11.181c18.418-6.148 34.41-11.19 35.536-11.202 2.685-.029 24.445 8.874 24.445 10.003 0 .706-67.287 23.021-68.96 22.868-.275-.023-5.902-2.393-12.504-5.265zm535.103-11.455c-7.68-2.81-13.965-5.552-13.965-6.098 0-2.199 24.775-10.382 29.197-9.642 7.688 1.285 29.803 9.885 28.56 11.108-1.997 1.963-23.85 9.945-26.93 9.839-1.595-.055-9.18-2.4-16.862-5.207z\"></path><path fill=\"#64A43A\" d=\"M497.568 1130.389a8284.62 8284.62 0 0 1-31.81-14.731l-12.53-5.854v-21.575c0-17.51.376-21.575 2-21.575 1.1 0 6.737 2.216 12.53 4.922 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.213v-68.213l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.977-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.262.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.821c-8.45-3.75-15.83-6.813-16.4-6.804-.57.012-1.216 9.907-1.433 21.993l-.395 21.975-15.038-6.772-15.038-6.774-.716-23.362-.716-23.363-32.08-14.753c-17.647-8.113-32.317-14.752-32.604-14.752-.285 0-.35 20.651-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314v46.362l15.754 7.311 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.202-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6658.637 6658.637 0 0 1-30.992-14.229c-7.002-3.248-13.285-5.906-13.963-5.906-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.527-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.97-.69-.69-8.085-4.376-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.443-15.762-6.443-.879 0-1.424 8.245-1.424 21.602 0 11.881-.56 21.387-1.244 21.124-.687-.263-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.724V819.6c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.545 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.197.708-22.197 2.034 0 30.24 13.435 31.136 14.83.58.9 1.063 11.379 1.074 23.283l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.067l.392 22.848 14.646 6.593c36.401 16.393 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.087-.394-23.087 11.135 5.146c6.125 2.829 13.237 6.058 15.81 7.168l4.674 2.022-.379-46.016-.378-46.013-30.792-14.108c-16.936-7.761-31.597-14.134-32.582-14.163-1.354-.044-1.79 5.184-1.79 21.521v21.579l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.832-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.836 0 12.781-.568 22.296-1.332 22.296-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.469-1.79 21.425-.984-.03-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.854 3.242 1.276c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.311-15.755-7.311V459.886l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.624 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.54-14.93-6.997-16.11-7.684-1.729-1.005-2.229-5.421-2.546-22.516-.22-11.695-.086-22.08.297-23.076.51-1.327 2.91-.737 8.99 2.21 15.972 7.739 21.194 9.914 22.26 9.267.59-.358 1.073-10.671 1.073-22.918 0-20.618.187-22.196 2.507-21.308 1.38.526 8.465 3.656 15.75 6.955l13.241 5.998.005 23.771.004 23.772 14.68 6.806c8.074 3.743 15.485 7.131 16.47 7.53 1.388.563 1.79-4.313 1.79-21.626 0-16.967.434-22.333 1.79-22.274.985.042 15.003 6.4 31.15 14.13s29.844 13.779 30.434 13.445c.592-.336 1.074-10.792 1.074-23.235v-22.628l-31.866-14.474-31.865-14.476-.393-22.991-.393-22.992-5.788-2.315c-3.183-1.271-5.262-2.832-4.618-3.466.642-.634 24.265-8.853 52.495-18.267 28.23-9.413 52.027-17.817 52.885-18.674 1.123-1.123.073-2.179-3.755-3.778-2.922-1.222-8.998-3.902-13.502-5.959l-8.19-3.742 33.298-10.819c18.314-5.952 33.297-11.506 33.297-12.347s-5.8-3.77-12.889-6.511c-7.088-2.741-12.89-5.348-12.89-5.79 0-.443 6.77-2.995 15.042-5.668 8.272-2.675 14.557-5.291 13.964-5.815s-5.75-2.754-11.46-4.956c-5.71-2.201-10.385-4.414-10.385-4.917 0-.502 7.573-3.375 16.828-6.383l16.827-5.469 12.832 4.953 12.831 4.951 15.097-4.7c8.302-2.584 22.716-7.058 32.028-9.938l16.934-5.238 12.814 4.621c7.047 2.542 13.098 5.076 13.441 5.632.608.989-47.752 17.864-78.383 27.352-8.468 2.622-15.396 5.229-15.396 5.793 0 .563 5.478 3.175 12.17 5.804 6.691 2.63 12.163 5.103 12.158 5.497-.004.394-19.174 7.422-42.6 15.618-55.776 19.514-57.634 20.206-57.634 21.472 0 .594 5.48 3.275 12.174 5.959 6.696 2.685 12.174 5.238 12.174 5.676 0 .438-7.088 3.268-15.754 6.284-8.664 3.02-15.754 5.951-15.754 6.519 0 .565 6.48 3.829 14.4 7.25l14.4 6.221-17.442 6.182c-9.593 3.399-18.003 6.183-18.688 6.183-.687 0-7.595-2.854-15.354-6.339L151.48 209l-17.73 6.328c-9.75 3.479-18.319 6.523-19.038 6.765-.72.239 9.72 5.484 23.2 11.654l24.508 11.221.394 22.063.393 22.062 15.328 6.999 15.327 6.998.427-22.042.426-22.041-9.752-4.493c-5.365-2.472-9.554-4.688-9.309-4.922.243-.235 8.367-3.353 18.05-6.93l17.603-6.5 14.62 6.547c8.04 3.6 15.073 6.951 15.63 7.446.558.497-6.71 3.731-16.148 7.188l-17.162 6.284 4.011 2.438c2.206 1.342 6.355 3.214 9.22 4.159 2.866.945 5.59 2.708 6.054 3.915.463 1.208.842 11.688.842 23.291v21.095l15.396 7.377c8.47 4.059 16.364 8.052 17.545 8.877 1.182.825 8.432 4.373 16.111 7.884l13.964 6.386v45.776l-4.654-1.955c-2.56-1.075-8.844-3.942-13.965-6.37-5.118-2.429-10.113-4.416-11.099-4.416-1.354-.003-1.79 5.352-1.79 21.999v22.001l31.15 13.997c17.133 7.698 31.938 14.62 32.903 15.381 1.218.961 1.875 8.19 2.148 23.604l.393 22.221 13.605 6.201c7.484 3.411 14.09 6.235 14.68 6.277.592.042 1.074-9.592 1.074-21.407 0-11.814.421-21.481.937-21.481.514 0 5.187 2.017 10.383 4.481 5.196 2.466 12.187 5.665 15.534 7.111l6.087 2.626v-91.41l-23.273-11.297c-12.8-6.212-27.3-13.101-32.224-15.306l-8.95-4.012v-21.287c0-13.779.524-21.287 1.49-21.287.817 0 4.014 1.289 7.103 2.865 5.383 2.747 9.673 3.963 6.215 1.763-.957-.608 6.088-4.148 16.595-8.341l18.256-7.281 16.818 7.45 16.821 7.452-16.228 6.813c-8.927 3.747-17.43 7.259-18.897 7.804-1.945.725 5.222 4.611 26.495 14.371 16.04 7.358 35.93 16.236 44.201 19.73 8.27 3.493 19.775 8.549 25.568 11.234 5.793 2.688 11.701 4.884 13.13 4.884 1.43 0 10.334-3.473 19.79-7.716l17.19-7.715 13.358 5.99c24.291 10.888 19.861 10.734 40.381 1.397 9.951-4.528 18.096-8.644 18.096-9.146s-4.996-3.083-11.102-5.736a1497.053 1497.053 0 0 1-21.84-9.743c-17.025-7.797-36.203-16.025-37.344-16.025-1.094 0-55.629-23.684-88.366-38.374l-19.013-8.531 17.581-7.061 17.58-7.061 15.754 6.773c8.665 3.725 17.365 6.826 19.334 6.893 1.97.065 10.8-2.865 19.623-6.511l16.043-6.631 15.78 6.62c8.678 3.641 16.975 6.619 18.438 6.619 2.582 0 18.06-6.373 39.316-16.189 5.711-2.637 14.102-6.275 18.645-8.083 4.541-1.811 8.572-3.796 8.953-4.414.383-.618-6.39-3.923-15.05-7.343-8.663-3.419-15.755-6.583-15.759-7.029-.006-.445 3.693-2.322 8.225-4.169a726.234 726.234 0 0 0 16.113-6.845l7.877-3.485-15.402-6.077c-8.47-3.341-15.719-6.393-16.105-6.779-.389-.387 5.953-3.429 14.094-6.76l14.797-6.058 15.287 5.813c8.406 3.197 16.494 5.813 17.973 5.813s9.73-2.934 18.336-6.52l15.648-6.518 16.566 6.159c9.111 3.389 16.5 6.806 16.42 7.593-.082.787-6.936 4.233-15.227 7.657a6238.157 6238.157 0 0 0-31.54 13.146l-16.468 6.922 6.441 2.697c3.543 1.486 11.436 4.579 17.541 6.877 6.104 2.298 11.098 4.571 11.098 5.05 0 .48-6.604 3.643-14.678 7.027-37.545 15.74-84.14 36.337-84.14 37.191 0 .926 11.712 5.924 52.386 22.354l20.164 8.146 19.938-9.228c33.447-15.479 79.143-36.188 97.273-44.082 9.451-4.116 17.508-7.995 17.9-8.617.81-1.277 29.39-14.325 31.383-14.325 2.938 0 30.205-13.45 29.176-14.392-.617-.563-6.924-3.122-14.014-5.688a3387.902 3387.902 0 0 1-16.426-5.982c-3.207-1.194-2.164-1.933 11.166-7.897 8.088-3.62 14.19-7.034 13.561-7.587-.625-.554-8.055-3.435-16.508-6.404s-15.082-5.864-14.729-6.435c.352-.57 6.408-3.455 13.457-6.411l12.818-5.376 16.813 5.875c9.246 3.231 17.988 5.875 19.424 5.875 1.44 0 9.072-2.862 16.961-6.36l14.346-6.361 15.824 5.646c8.703 3.104 16.676 5.645 17.721 5.645s7.934-2.797 15.311-6.215l13.41-6.214-14.299-4.701c-7.863-2.584-16.234-5.568-18.598-6.628-2.36-1.061-11.3-4.418-19.863-7.46l-15.564-5.532 12.365-5.312 12.363-5.313 35.426 11.466 35.426 11.465 14.342-6.396c7.891-3.521 14.844-6.397 15.453-6.397 1.66 0 .453 731.532-1.209 733.13-.756.725-13.94 6.938-29.3 13.809-38.909 17.402-84.233 37.921-99.536 45.06-7.09 3.306-29.326 13.426-49.412 22.489-20.086 9.065-69.387 31.47-109.56 49.786-40.173 18.318-85.608 38.957-100.97 45.865-15.359 6.905-36.307 16.413-46.543 21.127-19.51 8.979-63.609 29.091-75.963 34.644l-7.217 3.242-19.278-8.876.011-.004zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm-.337-115.987l-.379-44.978-31.507-14.551c-17.329-8.002-32-14.104-32.603-13.558-.603.548-.925 21.219-.717 45.937l.38 44.94 31.507 14.528c17.33 7.993 32 14.108 32.603 13.594.604-.512.925-21.173.716-45.912zm162.17-131.492v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.088 2.283.137 2.504-1.799 2.504-21.965zm95.931-47.702l-.026-22.557-14.382-6.445c-7.909-3.545-14.988-6.66-15.727-6.923-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.429zm-257.766-48.818v-45.595l-15.396-6.934c-8.467-3.814-15.896-7.352-16.507-7.863-.61-.511-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.36c.715-30.074.576-44.837-.43-45.843-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.469-2.307 43.666-1.27-.487-8.358-3.581-15.755-6.874l-13.446-5.99-.063-22.996c-.035-12.646-.028-33.308.015-45.911l.076-22.914-16.842-7.474c-40.496-17.969-46.305-20.455-47.799-20.455-1.143 0-1.292 12.421-.54 44.755.573 24.616 1.25 45.114 1.502 45.551.252.438 14.356 7.143 31.341 14.901l30.88 14.108v45.194l-17.544-7.951c-9.649-4.374-23.6-10.775-31-14.228-7.4-3.451-14.008-6.273-14.68-6.273s-1.224 10.335-1.224 22.967v22.969l16.47 7.738 16.47 7.739V627.173l14.97 7.063c8.233 3.885 15.628 7.062 16.434 7.062.916 0 1.611-8.275 1.858-22.146l.395-22.146 15.038 6.852 15.038 6.854.392 22.952.394 22.954 16.076 7.301c8.845 4.016 16.24 7.336 16.438 7.38.196.042.358-20.44.358-45.518h-.006zm97.204-27.538l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.72 1.071-45.405zm160.586-15.006v-22.258l-9.667-4.389a1472.693 1472.693 0 0 0-15.754-7.05l-6.087-2.66V592.022l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zm0-137.953v-21.291l-6.803-2.899a971.86 971.86 0 0 1-15.074-6.635l-8.27-3.733.395 21.649.396 21.647 13.604 6.202c7.484 3.411 14.09 6.235 14.681 6.277s1.071-9.505 1.071-21.217zm64.447-15.925v-22.895l-4.654-2.015c-2.56-1.107-9.487-4.25-15.396-6.982l-10.742-4.97.45 23.076.445 23.076 14.591 6.681c8.023 3.674 14.751 6.734 14.946 6.802.2.067.36-10.181.36-22.773zm-356.926-48.013c-1.827-1.625-27.326-13.589-28.964-13.589-.476 0-.688 10.092-.472 22.427l.396 22.426 15.038 6.775 15.038 6.774.395-21.594c.296-16.126-.065-22.003-1.43-23.219zm66.198 5.962v-21.982l-14.456-6.661c-7.95-3.665-15.04-6.662-15.754-6.662-.72 0-1.299 9.764-1.299 21.884v21.885l14.681 6.723c8.074 3.697 15.164 6.738 15.753 6.759.591.019 1.075-9.857 1.075-21.946zm127.462-55.354c-1.183-.764-2.792-1.39-3.58-1.39-.787 0-.466.625.716 1.39 1.182.764 2.792 1.387 3.58 1.387s.465-.624-.716-1.387zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.676a1616.703 1616.703 0 0 1 15.791 7.065l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm50.126-527.197c-5.12-2.094-12.808-5.404-17.084-7.359l-7.775-3.554 18.158-6.937c9.987-3.815 18.158-7.097 18.158-7.291 0-.193-6.435-3.151-14.297-6.572-7.863-3.421-13.824-6.625-13.247-7.12 1.357-1.167 32.941-12.799 34.75-12.799.757 0 6.05 2.122 11.765 4.716 5.713 2.593 11.995 5.395 13.955 6.226 3.491 1.477 3.417 1.574-3.404 4.593-3.833 1.695-7.49 3.084-8.126 3.084-2.042 0-18.53 7.502-18.508 8.422.011.487 6.737 3.786 14.945 7.332 8.208 3.544 14.48 6.881 13.94 7.415-.975.965-8.835 4.196-25.328 10.412l-8.594 3.237-9.308-3.805zm61.983-2.721c-8.05-3.663-14.646-6.983-14.659-7.376-.012-.396 7.937-3.745 17.662-7.447l17.685-6.73 15.234 6.646c8.378 3.655 15.235 7.054 15.235 7.554 0 1.058-33.015 14.368-35.11 14.155-.774-.079-7.996-3.14-16.047-6.802zm421.062-28.547c-9.625-3.689-17.03-7.176-16.46-7.744.57-.571 7.644-3.927 15.72-7.459l14.682-6.422 17.891 6.701c9.84 3.687 17.891 7.109 17.891 7.607 0 1.014-28.982 14.206-30.963 14.093-.696-.039-9.138-3.089-18.76-6.776zm-278.678-1.345c-8.508-3.604-14.952-7.054-14.32-7.665.631-.61 7.855-3.773 16.056-7.027l14.91-5.918 16.956 6.875c9.325 3.781 16.957 7.205 16.957 7.608 0 1.197-29.789 12.896-32.552 12.782-1.395-.054-9.499-3.05-18.007-6.655zm70.965.716c-8.07-3.237-14.68-6.317-14.68-6.846s7.164-3.875 15.92-7.438l15.92-6.48 16.305 6.503c8.967 3.576 16.3 6.87 16.291 7.318-.02 1.324-29.189 12.996-32.26 12.908-1.548-.046-9.42-2.73-17.496-5.965zm-204.135-28.717l-14.016-5.89 16.467-6.123 16.47-6.122 14.017 5.821c7.71 3.203 14.182 5.976 14.38 6.164.481.456-30.98 12.301-32.284 12.153-.559-.062-7.324-2.765-15.034-6.003zm116.874-6.741c-1.532-1.343-30.817-12.932-32.682-12.934-1.338-.001-13.396-4.91-44.477-18.108-7.133-3.029-13.117-6.152-13.299-6.939-.182-.789 7.587-4.232 17.266-7.654 43.815-15.498 76.054-28.084 76.671-29.936.277-.834-2.91-2.651-7.085-4.037-4.176-1.386-10.079-3.632-13.118-4.991l-5.524-2.471 8.39-3.091a3625.554 3625.554 0 0 0 14.542-5.394c3.384-1.266 5.64-2.77 5.013-3.341-.628-.571-7.427-3.368-15.109-6.214l-13.968-5.173-26.133 9.366c-37.706 13.516-38.552 13.856-37.298 15.053.627.598 6.87 3.281 13.87 5.96l12.728 4.872-15.253 5.379-15.253 5.379-14.912-5.831c-8.2-3.206-15.43-5.829-16.064-5.829-2.095 0-27.705-10.491-27.705-11.349 0-.982 44.374-16.489 94.775-33.123l35.344-11.664 13.73 5.08 13.728 5.08 14.66-5.168 14.66-5.169 16.053 5.895 16.055 5.897 28.946-10.688c15.922-5.876 29.252-10.989 29.623-11.359.371-.372-.223-.999-1.318-1.396-10.752-3.87-33.074-11.776-43.24-15.314l-12.6-4.386-14.55 5.028-14.554 5.029-15.813-4.983c-8.698-2.74-22.362-7.241-30.368-10.001l-14.554-5.018-29.844 9.612-29.843 9.612-11.732-4.043c-6.453-2.225-11.49-4.435-11.196-4.914.296-.479 33.156-11.79 73.021-25.137l72.483-24.27 13.73 4.853 13.727 4.853 12.705-4.061 12.701-4.061 13.023 4.162 13.023 4.162-13.31 4.439c-7.319 2.441-12.698 4.792-11.95 5.224s7.627 2.853 15.287 5.38l13.926 4.594 14.36-4.708 14.356-4.706 14.322 4.694c7.875 2.582 14.32 4.904 14.32 5.16s-5.154 2.298-11.457 4.537c-6.3 2.238-11.457 4.432-11.457 4.875 0 .441 5.48 2.587 12.174 4.768 6.695 2.182 12.172 4.474 12.172 5.094 0 .623-5.477 2.99-12.172 5.264s-12.174 4.492-12.174 4.931c0 .439 5.48 2.582 12.174 4.762 6.695 2.182 12.172 4.491 12.172 5.135 0 .643-1.77 1.827-3.938 2.632-14.654 5.441-21.49 8.231-23.988 9.792-1.574.984-11.563 4.679-22.197 8.208-10.635 3.528-27.713 9.455-37.953 13.165-29.215 10.59-28.053 10.471-43.948 4.516l-13.635-5.106-14.383 5.278c-7.908 2.904-14.609 5.906-14.888 6.672-.849 2.327 23.188 10.855 28.851 10.236 2.758-.302 10.56-2.758 17.338-5.459l12.325-4.911 7.726 3.154c4.248 1.734 10.824 4.259 14.615 5.607 3.787 1.352 6.688 2.62 6.443 2.821s-13.818 5.408-30.165 11.57c-16.344 6.162-29.716 11.567-29.715 12.015.001.444 6.513 3.288 14.471 6.318 7.957 3.031 13.917 5.985 13.244 6.567-.672.582-7.509 3.394-15.194 6.248l-13.974 5.189-16.472-6.365-16.47-6.366-16.458 5.996c-9.052 3.298-15.975 6.447-15.386 7 .864.809 45.18 19.166 58.916 24.407 1.883.717 3.125 1.604 2.761 1.965-1.933 1.933-32.656 13.052-33.65 12.182v-.001h.006zm139.162-167.66c7.492-2.4 13.621-4.857 13.621-5.46 0-.604-5.842-2.962-12.982-5.245l-12.984-4.149-11.72 4.092c-6.448 2.251-12.618 4.559-13.716 5.126-1.66.859 5.262 3.733 23.816 9.888.187.059 6.471-1.853 13.965-4.252zm-87.35-10.852c6.304-2.066 11.942-4.191 12.53-4.721.585-.529-4.41-2.744-11.1-4.923l-12.168-3.962-12.167 3.962c-6.69 2.179-11.656 4.473-11.03 5.098.923.923 19.22 7.815 21.76 8.195.392.059 5.87-1.582 12.175-3.649zM231.964 215.705c-7.085-3.143-13.066-5.897-13.293-6.125-.225-.228 7.344-3.155 16.821-6.51 9.48-3.353 17.231-6.572 17.231-7.156s-5.828-3.503-12.95-6.491c-7.126-2.988-12.443-5.922-11.816-6.521.625-.597 7.26-3.175 14.743-5.726s14.143-5.109 14.797-5.684c.656-.573 2.912-.206 5.013.815 2.103 1.021 8.01 3.582 13.13 5.692 5.12 2.108 9.795 4.293 10.39 4.854.593.562-6.013 3.555-14.682 6.656-8.667 3.099-15.759 6.038-15.759 6.529 0 .49 5.822 3.334 12.94 6.318 7.115 2.983 13.22 5.881 13.563 6.438.803 1.298-30.578 12.942-34.38 12.759-1.575-.072-8.662-2.705-15.748-5.848zm319.49-6.574c-.577-.584-7.866-3.7-16.202-6.927-8.336-3.226-14.56-6.233-13.83-6.685.73-.452 15.172-6.059 32.09-12.46l30.76-11.639 14.68 5.374c8.074 2.957 14.68 5.775 14.68 6.268 0 .491-6.28 3.354-13.963 6.358-7.68 3.006-14.607 5.956-15.396 6.554-.787.599-7.553 3.505-15.037 6.458-7.48 2.952-14.309 5.906-15.168 6.565-.865.656-2.04.717-2.615.134zm184.13-6.958c-8.939-3.343-16.518-6.343-16.838-6.666-.322-.323 5.531-3.061 13.012-6.083 7.48-3.024 13.445-5.628 13.258-5.788-.188-.161-7.107-2.697-15.379-5.635-8.27-2.939-16.006-6.146-17.188-7.124-1.182-.98-8.43-3.969-16.109-6.643-7.676-2.672-13.96-5.242-13.963-5.709 0-.466 4.67-2.641 10.381-4.833s11.783-4.854 13.494-5.914c2.75-1.706 5.07-1.24 20.063 4.026l16.953 5.955 14.107-5.583c10.787-4.271 13.48-5.844 11.443-6.688-1.465-.605-8.459-3.166-15.543-5.687l-12.879-4.582 7.15-3.115c3.936-1.714 9.73-3.984 12.881-5.048 3.15-1.063 6.695-2.713 7.877-3.667s7.303-3.776 13.605-6.272c6.301-2.496 11.658-4.738 11.904-4.981.246-.244-6.54-2.772-15.082-5.618l-15.53-5.175-12.468 5.027c-6.855 2.764-13.736 5.026-15.29 5.026-2.839 0-59.08-19.23-63.097-21.574-1.455-.85-1.56-1.269-.332-1.298.998-.023 7.252-2.202 13.896-4.839l12.076-4.796 16.182 5.599 16.182 5.6 13.893-5.242 13.893-5.244 31.221 10.347c17.172 5.691 31.678 10.755 32.232 11.25.555.496-4.584 3.107-11.418 5.802l-12.432 4.897 16.961 5.654 16.961 5.653 12.764-5.222 12.762-5.22 34.393 11.076c22.475 7.235 33.502 11.408 31.822 12.038-1.414.529-13.654 5.855-27.205 11.835l-24.635 10.875-17.615-6.228-17.613-6.226-27.928 11.748c-15.36 6.461-27.67 12.341-27.355 13.065.314.724 7.35 3.731 15.631 6.684 8.283 2.952 15.271 5.58 15.533 5.842.477.477-25.13 10.965-33.168 13.584-2.363.771-9.453 3.604-15.756 6.296l-11.457 4.896-16.25-6.075zM305.35 189.74c-9.146-3.859-13.297-6.272-12.02-6.986 1.072-.601 8.55-3.438 16.616-6.307l14.667-5.217 14.183 5.527c7.802 3.041 13.997 6.085 13.771 6.768-.456 1.368-29.104 12.447-31.65 12.24-.878-.072-7.882-2.782-15.567-6.025zm329.762.222c-8.27-3.152-15.53-6.214-16.143-6.805-1.24-1.207 24.016-11.608 28.188-11.608 2.658 0 35.641 11.55 34.893 12.22-1.076.962-29.412 12.113-30.563 12.025-.734-.057-8.103-2.681-16.375-5.832zm224.43-14.035l-14.027-5.32 6.15-2.647c3.383-1.456 8.854-3.822 12.158-5.257 7.9-3.435 8.697-3.345 25.951 2.927l14.771 5.371-11.428 5.287c-6.287 2.906-13.258 5.212-15.49 5.123-2.23-.091-10.37-2.558-18.085-5.484zm-260.949-23.913c-9.45-3.59-23.252-8.716-30.664-11.392-15.242-5.501-15.91-5.895-12.146-7.147 1.49-.496 4.74-1.8 7.225-2.897 2.48-1.097 5.23-1.995 6.105-1.995s2.713-.644 4.08-1.432c1.367-.786 10.754-4.606 20.855-8.488l18.37-7.061 14.93 5.143c8.21 2.829 14.927 5.616 14.927 6.194s-6.244 3.47-13.877 6.426l-13.875 5.376 14.117 5.155c7.766 2.835 14.336 5.816 14.605 6.623.268.807-5.449 3.708-12.707 6.445a15237.33 15237.33 0 0 0-13.975 5.276c-.43.167-8.517-2.636-17.97-6.226zM124 140.457l-12.002-5.223 33.485-11.181c18.418-6.148 34.41-11.19 35.536-11.202 2.685-.029 24.445 8.874 24.445 10.003 0 .706-67.287 23.021-68.96 22.868-.275-.023-5.902-2.393-12.504-5.265zm535.103-11.455c-7.68-2.81-13.965-5.552-13.965-6.098 0-2.199 24.775-10.382 29.197-9.642 7.688 1.285 29.803 9.885 28.56 11.108-1.997 1.963-23.85 9.945-26.93 9.839-1.595-.055-9.18-2.4-16.862-5.207z\"></path><path fill=\"#5A9A30\" d=\"M497.568 1130.389a8284.62 8284.62 0 0 1-31.81-14.731l-12.53-5.854v-21.575c0-17.51.376-21.575 2-21.575 1.1 0 6.737 2.216 12.53 4.922 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.213v-68.213l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.977-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.262.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.821c-8.45-3.75-15.83-6.813-16.4-6.804-.57.012-1.216 9.907-1.433 21.993l-.395 21.975-15.038-6.772-15.038-6.774-.716-23.362-.716-23.363-32.08-14.753c-17.647-8.113-32.317-14.752-32.604-14.752-.285 0-.35 20.651-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314v46.362l15.754 7.311 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.202-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6658.637 6658.637 0 0 1-30.992-14.229c-7.002-3.248-13.285-5.906-13.963-5.906-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.527-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.97-.69-.69-8.085-4.376-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.443-15.762-6.443-.879 0-1.424 8.245-1.424 21.602 0 11.881-.56 21.387-1.244 21.124-.687-.263-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.724V819.6c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.545 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.197.708-22.197 2.034 0 30.24 13.435 31.136 14.83.58.9 1.063 11.379 1.074 23.283l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.067l.392 22.848 14.646 6.593c36.401 16.393 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.087-.394-23.087 11.135 5.146c6.125 2.829 13.237 6.058 15.81 7.168l4.674 2.022-.379-46.016-.378-46.013-30.792-14.108c-16.936-7.761-31.597-14.134-32.582-14.163-1.354-.044-1.79 5.184-1.79 21.521v21.579l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.832-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.836 0 12.781-.568 22.296-1.332 22.296-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.469-1.79 21.425-.984-.03-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.854 3.242 1.276c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.311-15.755-7.311V459.886l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.624 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.54-14.93-6.997-16.11-7.684-1.737-1.01-2.226-5.544-2.543-23.652-.257-14.519.118-22.401 1.065-22.401.803 0 7.912 2.898 15.798 6.444 7.888 3.544 14.643 6.445 15.012 6.445s.85-10.228 1.065-22.729l.394-22.726 15.038 6.916 15.037 6.916.393 23.483.392 23.482 16.078 7.281c8.844 4.004 17.57 7.696 19.394 8.206 1.821.511 9.395 3.75 16.827 7.199l13.514 6.271v22.96c0 12.63-.482 22.962-1.074 22.964-.59 0-8.808-3.484-18.26-7.746-32.754-14.763-43.693-19.467-45.275-19.467-1.15 0-1.302 12.306-.545 44.755.572 24.616 1.25 45.114 1.502 45.551.252.438 14.356 7.145 31.34 14.901l30.88 14.108v45.194l-17.545-7.95c-9.648-4.375-23.6-10.776-31-14.229-7.4-3.451-14.008-6.273-14.68-6.273-.673 0-1.224 10.335-1.224 22.969v22.967l16.47 7.738 16.47 7.739V627.175l14.97 7.063c8.233 3.885 15.63 7.062 16.434 7.062.917 0 1.611-8.275 1.86-22.146l.394-22.146 15.038 6.852 15.038 6.854.393 23 .394 22.998 8.2 3.615a2812.276 2812.276 0 0 1 16.436 7.314l8.234 3.7v-91.153l-15.396-6.934c-8.467-3.814-15.896-7.352-16.507-7.863-.61-.511-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.36c.715-30.074.576-44.836-.43-45.843-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.469-2.307 43.666-1.27-.487-8.358-3.581-15.754-6.874l-13.447-5.99-.066-22.996c-.116-40.188.182-67.269.743-67.831.3-.299 7.09 2.416 15.09 6.034 8 3.617 14.813 6.577 15.143 6.577.331 0 .6-30.612.6-68.028 0-37.921.554-68.026 1.252-68.026.69 0 7.502 2.898 15.138 6.444 7.64 3.545 14.485 6.444 15.218 6.444.761 0 1.332-9.172 1.332-21.401v-21.401l15.396 7.029 15.396 7.029.395 22.196.396 22.197-15.223-7.109c-8.374-3.909-15.486-7.108-15.81-7.108s-.418 20.695-.21 45.989l.378 45.99 15.038 6.773 15.038 6.776.395-22.774c.458-26.426-1.879-24.688 19.713-14.666l13.48 6.256.392 24.053.394 24.052 6.444 3.152c3.545 1.733 10.633 4.873 15.754 6.973 5.12 2.104 16.544 7.076 25.388 11.054l16.076 7.233.394 22.899.392 22.9 15.038 6.775 15.038 6.774.396-22.041c.217-12.122.644-22.041.946-22.041.304 0 7.538 3.152 16.076 7.008l15.523 7.005.395-22.906.395-22.906 3.241.814c3.27.818 23.196 10.251 32.49 15.376 10.733 5.917 58.86 28.499 60.741 28.499 1.095 0 7.691 2.639 14.663 5.864 6.972 3.227 14.15 6.441 15.954 7.146l3.278 1.282-.415-46.25-.416-46.25 12.172-5.527c6.697-3.039 17.977-7.905 25.064-10.813 7.09-2.908 19.98-8.69 28.643-12.851a3349.562 3349.562 0 0 1 29.002-13.73c7.287-3.396 13.248-6.47 13.248-6.835s-7.25-3.706-16.11-7.424c-8.862-3.719-16.757-7.244-17.546-7.837-1.635-1.228-36.057-15.747-37.334-15.747-.459 0-8.773 3.473-18.477 7.719l-17.639 7.715-18.057-7.909c-9.932-4.352-18.058-8.343-18.058-8.87 0-1.053 31.388-14.411 33.86-14.411.842 0 7.981-2.821 15.868-6.271s16.842-7.074 19.898-8.057c4.895-1.572 11.938-4.409 21.314-8.587 8.846-3.938 16.143-6.938 19.025-7.817 1.8-.549 9.682-3.801 17.512-7.227l14.238-6.228 16.146 6.479c8.881 3.563 16.3 6.623 16.484 6.799.188.175-3.355 1.836-7.877 3.688-4.52 1.853-13.693 5.872-20.39 8.933-6.696 3.06-13.462 6.136-15.038 6.835-9.783 4.341-16.922 7.397-20.045 8.587-4.178 1.587-4.648 3.644-1.08 4.719 1.38.415 17.633 6.936 36.117 14.489 18.486 7.552 34.373 13.732 35.303 13.732.932 0 11.584-4.568 23.676-10.154 56.777-26.225 74.715-34.364 86.27-39.147 6.861-2.84 18.855-8.366 26.658-12.281 7.801-3.915 19.53-9.341 26.066-12.059 6.537-2.717 17.363-7.5 24.06-10.628 9.843-4.6 11.626-5.892 9.308-6.75-1.574-.585-5.119-1.98-7.877-3.103-2.756-1.122-9.039-3.372-13.963-5.003-4.924-1.63-8.95-3.393-8.95-3.917 0-.525 2.74-2.146 6.085-3.602 3.35-1.456 9.43-4.158 13.518-6.004 4.082-1.849 8.326-3.358 9.426-3.358s9.064 2.521 17.703 5.603l15.705 5.603 32.154-14.238c17.686-7.829 42.64-19.082 55.45-25.006 12.812-5.923 25.7-11.644 28.642-12.709 2.941-1.066 10.381-4.257 16.527-7.091 6.15-2.832 11.492-5.149 11.873-5.149 1.387 0-.236 731.795-1.627 733.128-.756.727-13.939 6.939-29.299 13.811-38.908 17.402-84.232 37.921-99.535 45.06-7.09 3.306-29.326 13.426-49.41 22.489-20.088 9.065-69.39 31.47-109.563 49.786-40.172 18.318-85.607 38.957-100.969 45.865-15.359 6.905-36.305 16.413-46.545 21.127-19.506 8.979-63.607 29.091-75.96 34.643l-7.219 3.243-19.277-8.876h-.003zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm-.337-115.987l-.379-44.978-31.507-14.551c-17.329-8.002-32-14.104-32.603-13.558-.603.548-.925 21.219-.717 45.937l.38 44.94 31.507 14.528c17.33 7.993 32 14.108 32.603 13.594.604-.512.925-21.173.716-45.912zm162.17-131.492v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.088 2.283.137 2.504-1.799 2.504-21.965zm95.931-47.702l-.026-22.557-14.382-6.445c-7.909-3.545-14.988-6.66-15.727-6.923-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.429zm-160.562-76.356l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.72 1.071-45.405zm160.586-15.006v-22.258l-9.667-4.389a1472.693 1472.693 0 0 0-15.754-7.05l-6.087-2.66V592.022l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.677a1589.925 1589.925 0 0 1 15.791 7.064l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm257.79-385.515l-15.038-7.019-.394-22.927-.393-22.929 9.701 4.442c5.336 2.443 12.604 5.581 16.146 6.972l6.445 2.529.395 23.061c.217 12.683-.106 23.021-.716 22.974-.61-.045-7.876-3.243-16.147-7.103zm-194.417-44.457l-14.68-7.004v-21.67c0-20.047.187-21.597 2.505-20.711 1.38.529 8.467 3.66 15.75 6.957l13.242 5.997.004 21.841c.004 12.014-.478 21.785-1.067 21.719-.592-.07-7.68-3.277-15.754-7.129zm-83.964-129.709c-6.99-3.505-12.469-6.61-12.173-6.901.298-.291 7.728-3.171 16.513-6.401l15.972-5.872 13.772 6.001c7.575 3.302 13.277 6.481 12.672 7.068-1.235 1.196-31.786 12.811-33.162 12.608-.485-.072-6.6-2.998-13.594-6.503zm556.936.847a9352.168 9352.168 0 0 0-16.47-6.475c-1.308-.511 3.532-3.318 12.39-7.186l14.537-6.35 16.604 6.096c9.133 3.352 16.596 6.417 16.582 6.811-.025.734-27.316 12.969-28.604 12.821-.394-.045-7.162-2.619-15.039-5.717zm-108.623-13.976c-9.252-3.552-16.31-6.895-15.682-7.428 1.87-1.592 60.73-26.28 62.656-26.28.977 0 9.393 2.824 18.705 6.275l16.934 6.275-7.762 3.438c-4.268 1.893-15.494 6.521-24.947 10.29-9.45 3.766-20.762 8.432-25.133 10.368l-7.949 3.519-16.822-6.457zm-538.586-28.048c-7.68-3.708-12.083-6.58-11.063-7.211 3.188-1.97 30.823-10.859 33.772-10.866 3.104-.006 26.58 10.071 26.563 11.401-.01.706-34.248 13.026-35.833 12.893-.374-.028-6.422-2.827-13.439-6.217zm133.07.307c-7.086-3.143-13.063-5.893-13.279-6.11-.55-.55 31.813-12.269 33.884-12.269.92 0 5.683 1.699 10.582 3.776s11.164 4.73 13.92 5.897l5.012 2.121-17.08 6.276c-9.396 3.45-17.772 6.218-18.619 6.147-.847-.068-7.335-2.695-14.42-5.838zm173.284-11.982c-6.3-2.643-13.39-5.53-15.754-6.414-4.208-1.574-3.994-1.722 10.58-7.239 8.182-3.099 16.236-5.601 17.901-5.56 3.87.093 29.978 10.604 30.542 12.3.464 1.391-26.27 12.054-29.703 11.847-1.16-.07-7.263-2.291-13.566-4.934zm129.611-2.043c-12.488-5.074-13.313-5.643-10.025-6.938 1.97-.775 8.512-3.38 14.537-5.787l10.96-4.375 11.241 4.362c6.182 2.399 12.85 5.003 14.818 5.787 3.293 1.309 2.484 1.868-10.023 6.951-7.482 3.039-14.572 5.527-15.754 5.527-1.18.001-8.27-2.488-15.754-5.527zm98.908-12.198c-18.424-6.845-18.494-5.848.98-13.568l11.81-4.684 16.632 6.102 16.631 6.1-8.05 3.396c-4.433 1.867-11.106 4.599-14.839 6.068l-6.783 2.673-16.38-6.087zm111.98-6.903c-17.526-6.396-31.866-12.03-31.866-12.52 0-1.144 25.846-11.4 28.727-11.4 1.195 0 16.004-5.83 32.91-12.956 16.906-7.127 35.787-14.982 41.96-17.458l11.22-4.503 16.244 5.348c8.934 2.939 17.693 5.625 19.47 5.966 4.862.938 30.487 9.5 31.702 10.594 1.207 1.085-22.727 11.577-26.408 11.577-1.316 0-9.86-2.624-18.99-5.829l-16.598-5.828-28.61 11.885c-15.735 6.536-28.61 12.396-28.61 13.02 0 1.235.412 1.414 19.172 8.373 14.414 5.346 14.896 3.776-3.686 12.009-4.479 1.984-9.635 3.55-11.457 3.48-1.82-.072-17.652-5.363-35.178-11.757h-.003zm-306.485-17.761c-7.285-2.808-13.242-5.503-13.235-5.989.007-.487 6.401-3.242 14.211-6.123l14.201-5.238 13.715 5.105c7.544 2.81 13.712 5.487 13.707 5.953-.007.666-20.976 8.905-27.919 10.973-.788.232-7.393-1.872-14.68-4.681zm-124.24-23.459c-5.513-2.3-11.292-4.723-12.842-5.382-2.277-.968-.767-1.905 7.877-4.887 5.881-2.028 27.635-9.513 48.338-16.632l37.646-12.944 12.122 4.417c12.236 4.456 14.194 5.945 9.617 7.313-5.38 1.604-24.14 8.349-26.853 9.651-4.16 1.998-63.748 22.896-64.904 22.761-.538-.062-5.487-1.995-11-4.297zm-94.384-13.419l-11.317-4.686 15.261-5.11 15.263-5.111 8.946 3.643c4.92 2.004 10.558 4.288 12.526 5.077 3.24 1.298 2.224 1.895-10.688 6.279-7.846 2.666-15.258 4.79-16.47 4.721-1.212-.072-7.297-2.237-13.52-4.813zm222.562-9.529c-20.056-7.799-19.608-6.722-5.012-12.118 7.09-2.621 14.461-4.802 16.382-4.844 1.92-.042 10.057-2.394 18.081-5.223l14.588-5.144 13.021 4.713c7.164 2.591 12.884 4.851 12.713 5.019-1.015.993-57.119 22.095-58.239 21.906-.436-.074-5.626-2.012-11.534-4.309zm-215.59-12.487l-12.757-5.105 15.583-4.853 15.583-4.853 11.97 4.628c6.582 2.545 11.733 4.863 11.445 5.15-.288.288-6.947 2.688-14.795 5.33l-14.273 4.807-12.757-5.104zm474.811-5.489c-14.57-5.083-27.01-9.754-27.639-10.38-.627-.627 4.32-3.129 10.994-5.561l12.14-4.423 14.067 5.039c15.914 5.698 19.57 5.663 33.041-.317 4.531-2.014 9.85-3.669 11.818-3.684 1.971-.013 9.98 2.167 17.801 4.844l14.22 4.865-11.355 4.569c-6.244 2.512-12.42 4.563-13.719 4.559-1.299-.004-8.2 2.249-15.34 5.007-7.139 2.756-14.455 4.946-16.256 4.867-1.799-.079-15.197-4.303-29.772-9.385zm-382.339-4.998c-5.88-2.328-10.914-4.454-11.182-4.724-.27-.27 6.154-2.693 14.273-5.388l14.763-4.897 12.174 4.616c13.688 5.188 14.248 4.046-5.456 11.13-5.758 2.071-11.235 3.705-12.174 3.631-.937-.073-6.515-2.039-12.398-4.368zm240.877-.085c-6.52-2.424-11.477-4.785-11.016-5.248.465-.461 6.408-2.845 13.211-5.296 6.803-2.45 12.594-5.136 12.871-5.965.275-.83-5.273-3.339-12.334-5.575-7.06-2.238-12.627-4.408-12.369-4.825s5.957-2.66 12.662-4.983l12.193-4.228 13.1 4.188c7.205 2.302 13.328 4.557 13.607 5.011.281.455-4.92 2.671-11.559 4.925s-12.07 4.593-12.07 5.199 6.182 3.159 13.732 5.676c7.553 2.517 13.19 5.061 12.531 5.652-2.449 2.203-25.21 10.055-28.893 9.968-2.096-.051-9.147-2.075-15.666-4.499zm-57.966-41.509c-6.892-2.347-12.53-4.737-12.53-5.313 0-.572 12.442-5.014 27.65-9.866l27.65-8.824 11.734 3.847c6.453 2.116 11.732 4.197 11.732 4.625s-4.67 2.512-10.383 4.632l-23.787 8.827c-7.373 2.735-14.783 5.281-16.47 5.657-1.684.374-8.704-1.239-15.596-3.585zm87.364-10.893c-6.105-2.059-11.094-4.096-11.084-4.525.008-.431 5.37-2.571 11.916-4.755l11.904-3.974 12.43 3.854c6.836 2.12 12.428 4.337 12.428 4.929 0 1.263-21.215 8.53-24.352 8.343-1.179-.071-7.138-1.813-13.242-3.872zM474.066 24.183c-6.262-2.158-10.739-4.321-9.953-4.808.79-.487 7.402-2.807 14.7-5.152l13.268-4.266 12.304 4.158c6.768 2.288 12.567 4.422 12.89 4.743.892.893-25.706 9.488-28.962 9.359-1.574-.06-7.984-1.875-14.247-4.034z\"></path><path fill=\"#5A5952\" d=\"M497.568 1130.389a8284.62 8284.62 0 0 1-31.81-14.731l-12.53-5.854v-21.575c0-17.51.376-21.575 2-21.575 1.1 0 6.737 2.216 12.53 4.922 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.213v-68.213l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.977-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.262.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.821c-8.45-3.75-15.83-6.813-16.4-6.804-.57.012-1.216 9.907-1.433 21.993l-.395 21.975-15.038-6.772-15.038-6.774-.716-23.362-.716-23.363-32.08-14.753c-17.647-8.113-32.317-14.752-32.604-14.752-.285 0-.35 20.651-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314v46.362l15.754 7.311 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.202-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6658.637 6658.637 0 0 1-30.992-14.229c-7.002-3.248-13.285-5.906-13.963-5.906-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.527-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.97-.69-.69-8.085-4.376-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.443-15.762-6.443-.879 0-1.424 8.245-1.424 21.602 0 11.881-.56 21.387-1.244 21.124-.687-.263-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.724V819.6c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.545 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.197.708-22.197 2.034 0 30.24 13.435 31.136 14.83.58.9 1.063 11.379 1.074 23.283l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.067l.392 22.848 14.646 6.593c36.401 16.393 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.087-.394-23.087 11.135 5.146c6.125 2.829 13.237 6.058 15.81 7.168l4.674 2.022-.379-46.016-.378-46.013-30.792-14.108c-16.936-7.761-31.597-14.134-32.582-14.163-1.354-.044-1.79 5.184-1.79 21.521v21.579l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.832-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.836 0 12.781-.568 22.296-1.332 22.296-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.469-1.79 21.425-.984-.03-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.854 3.242 1.276c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.311-15.755-7.311V459.886l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.624 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.54-14.93-6.997-16.11-7.684-1.737-1.01-2.226-5.544-2.543-23.652-.257-14.519.118-22.401 1.065-22.401.803 0 7.912 2.898 15.798 6.444 7.888 3.544 14.657 6.445 15.05 6.445.387 0 .704-9.99.704-22.199s.393-22.199.87-22.199c.48 0 7.567 3.007 15.753 6.683l14.885 6.681V337.295l17.544 7.927a5406.735 5406.735 0 0 0 31.15 13.943c7.483 3.312 14.41 6.678 15.395 7.481 1.985 1.624 2.677 45.509.716 45.512-.59 0-8.808-3.484-18.26-7.746-32.754-14.763-43.693-19.467-45.275-19.467-1.15 0-1.302 12.306-.545 44.755.572 24.616 1.25 45.114 1.502 45.551.252.438 14.356 7.145 31.34 14.901l30.88 14.108v45.194l-17.545-7.95c-9.648-4.375-23.6-10.776-31-14.229-7.4-3.451-14.008-6.273-14.68-6.273-.673 0-1.224 10.335-1.224 22.969v22.967l16.47 7.738 16.47 7.739V627.179l14.97 7.063c8.233 3.885 15.63 7.062 16.434 7.062.917 0 1.611-8.275 1.858-22.146l.396-22.146 15.038 6.852 15.038 6.854.393 23 .394 22.998 8.2 3.615a2812.276 2812.276 0 0 1 16.436 7.314l8.234 3.7v-91.154l-15.396-6.934c-8.467-3.814-15.896-7.352-16.507-7.863-.61-.511-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.36c.715-30.074.576-44.836-.43-45.843-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.469-2.307 43.666-1.27-.487-8.358-3.581-15.755-6.874l-13.446-5.99-.066-22.996c-.113-39.094.175-67.263.693-67.781.271-.271 6.782 2.442 14.465 6.032 7.683 3.591 14.52 6.529 15.193 6.529s1.223-30.612 1.223-68.028c0-37.415.264-68.026.59-68.026.322 0 7.572 3.151 16.11 7.004l15.522 7.004.377 46.024.38 46.021 15.217 7.124c8.37 3.918 15.45 7.124 15.733 7.124s.517-9.99.517-22.198c0-13.291.554-22.199 1.38-22.199.76 0 8.17 3.026 16.47 6.723l15.09 6.724v91.959l14.681 6.741c8.073 3.707 15.163 6.737 15.754 6.733.591-.007 1.073-9.678 1.073-21.492 0-14.759.497-21.483 1.586-21.483.873 0 8.284 3.005 16.471 6.682l14.884 6.681v45.554l14.97 7.063c8.233 3.884 15.628 7.062 16.435 7.062.916 0 1.61-8.22 1.856-21.974l.396-21.976 15.038 6.779 15.038 6.777.395-22.896c.3-17.375.816-22.725 2.148-22.185.965.392 8.358 3.774 16.434 7.518l14.68 6.806v45.557l10.383 4.75c5.713 2.613 15.54 7.163 21.841 10.112 20.746 9.711 29.61 13.618 30.89 13.618.693 0 1.438-9.921 1.655-22.045l.396-22.045 15.525 7.007c8.536 3.854 15.778 7.008 16.092 7.008.312 0 .737-20.686.944-45.966l.38-45.966 14.321-6.484c41.631-18.854 84.141-38.555 95.066-44.06 15.066-7.592 27.49-13.149 35.732-15.985 3.412-1.174 21.457-9.249 40.102-17.947 18.645-8.696 44.211-20.298 56.813-25.78 12.605-5.481 31.615-14.053 42.248-19.046 89.96-42.236 224.81-103.672 230.275-104.912l3.277-.743-.473 365.367c-.299 230.56-.979 365.854-1.846 366.686-.756.724-13.94 6.938-29.3 13.809-38.907 17.402-84.23 37.921-99.536 45.06-7.09 3.306-29.324 13.426-49.412 22.489-20.084 9.065-69.387 31.469-109.56 49.786s-85.606 38.957-100.97 45.865c-15.357 6.905-36.303 16.413-46.543 21.126-19.508 8.979-63.609 29.092-75.963 34.644l-7.217 3.243-19.274-8.885zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm-.337-115.987l-.379-44.978-31.507-14.551c-17.329-8.002-32-14.104-32.603-13.558-.603.548-.925 21.219-.717 45.937l.38 44.94 31.507 14.528c17.33 7.993 32 14.108 32.603 13.594.604-.512.925-21.173.716-45.912zm162.17-131.492v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.088 2.283.137 2.504-1.799 2.504-21.965zm95.931-47.702l-.026-22.557-14.382-6.445c-7.909-3.545-14.988-6.66-15.727-6.923-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.429zm-160.562-76.356l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.72 1.071-45.405zm160.586-15.006v-22.258l-9.667-4.389a1472.693 1472.693 0 0 0-15.754-7.05l-6.087-2.66V592.022l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.677a1589.925 1589.925 0 0 1 15.791 7.064l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm461.347-587.27c-14.467-5.754-15.902-6.631-12.89-7.862 1.864-.764 6.251-2.635 9.747-4.158 15.186-6.617 16.463-6.808 24.71-3.685 4.183 1.583 9.214 3.41 11.183 4.06 1.971.647 5.832 2.155 8.582 3.347l5 2.165-4.283 1.737c-7.982 3.238-10.002 4.084-17.176 7.201-3.939 1.712-7.482 3.238-7.877 3.393-.392.152-8.04-2.635-16.996-6.198z\"></path><path fill=\"#765338\" d=\"M497.586 1130.398a8250.163 8250.163 0 0 1-31.828-14.741l-12.53-5.854v-21.575c0-17.51.376-21.576 2-21.576 1.1 0 6.737 2.217 12.53 4.923 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.214v-68.212l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.978-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.263.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.822c-8.45-3.75-15.83-6.813-16.4-6.803-.57.012-1.216 9.907-1.433 21.993l-.395 21.974-15.038-6.771-15.038-6.774-.716-23.362-.716-23.363-32.082-14.752c-17.646-8.113-32.316-14.752-32.603-14.752-.285 0-.35 20.65-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314V912.946l15.754 7.312 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.201-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6648.647 6648.647 0 0 1-30.992-14.23c-7.002-3.247-13.285-5.905-13.963-5.905-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.528-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.971-.69-.689-8.085-4.375-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.444-15.762-6.444-.879 0-1.424 8.246-1.424 21.603 0 11.881-.56 21.387-1.244 21.124-.687-.264-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.723v-22.188c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.544 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.198.708-22.198 2.034 0 30.24 13.436 31.136 14.83.58.901 1.063 11.379 1.074 23.284l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.066l.392 22.849 14.646 6.593c36.401 16.392 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.043-.394-23.044 7.555 3.396c4.154 1.867 32.893 14.992 63.86 29.169 35.823 16.397 56.541 25.163 56.95 24.098.353-.924.472-21.632.264-46.02l-.379-44.339-31.507-14.551c-17.329-8.002-31.974-14.13-32.543-13.616-.568.515-1.214 10.662-1.432 22.554l-.397 21.621-15.038-6.916-15.038-6.915-.716-23.131-.716-23.132-30.792-14.106c-16.936-7.76-31.597-14.131-32.582-14.161-1.354-.044-1.79 5.185-1.79 21.521v21.58l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.834-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.835 0 12.78-.568 22.297-1.332 22.297-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.468-1.79 21.425-.984-.032-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.856 3.242 1.278c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.312-15.755-7.31V459.881l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.623 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.539-14.93-6.996-16.11-7.684-1.737-1.009-2.226-5.544-2.543-23.652-.257-14.518.118-22.4 1.065-22.4.803 0 7.912 2.898 15.798 6.444 7.888 3.544 14.657 6.445 15.05 6.445.387 0 .704-9.99.704-22.199s.393-22.199.87-22.199c.48 0 7.567 3.005 15.753 6.683l14.885 6.681v22.678c0 12.474-.31 22.679-.689 22.679-.38 0-6.167-2.531-12.862-5.624-20.033-9.257-17.956-11.024-17.956 15.281v22.74l15.667 7.281c8.615 4.004 16.028 6.919 16.471 6.477.44-.44.803-10.631.803-22.643v-21.839l18.26 8.229a8905.578 8905.578 0 0 0 30.435 13.646c6.694 2.979 12.98 6.066 13.964 6.861 1.985 1.604 2.677 45.493.716 45.495-.59 0-8.808-3.484-18.26-7.746C78.9 389.644 67.96 384.94 66.378 384.94c-1.15 0-1.302 12.306-.545 44.755.572 24.616 1.25 45.112 1.502 45.551.252.438 14.356 7.143 31.34 14.901l30.88 14.108v45.194l-17.545-7.951c-9.648-4.374-23.6-10.775-31-14.228-7.4-3.451-14.008-6.273-14.68-6.273-.673 0-1.224 10.335-1.224 22.967v22.969l16.47 7.738 16.47 7.737V627.174l14.97 7.063c8.233 3.883 15.63 7.061 16.434 7.061.917 0 1.611-8.274 1.858-22.146l.396-22.146 15.038 6.852 15.038 6.854.393 22.997.394 23.001 8.2 3.615a2812.276 2812.276 0 0 1 16.436 7.314l8.234 3.7V580.182l-15.396-6.934c-8.467-3.813-15.896-7.351-16.507-7.861-.61-.512-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.359c.715-30.075.576-44.838-.43-45.844-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.467-2.307 43.666-1.27-.487-8.358-3.581-15.754-6.874l-13.447-5.99-.066-22.996c-.113-39.095.175-67.264.693-67.781.271-.271 6.782 2.442 14.465 6.032 7.683 3.591 14.52 6.529 15.193 6.529s1.223-30.612 1.223-68.028c0-37.414.264-68.026.59-68.026.322 0 7.572 3.15 16.11 7.004l15.522 7.004.377 46.022.38 46.022 15.217 7.124c8.37 3.917 15.45 7.124 15.733 7.124s.517-9.99.517-22.198c0-13.291.554-22.199 1.38-22.199.76 0 8.17 3.024 16.47 6.723l15.09 6.722v91.961l14.681 6.741c8.073 3.707 15.163 6.737 15.754 6.731.591-.007 1.073-9.677 1.073-21.491 0-14.759.497-21.483 1.586-21.483.873 0 8.284 3.005 16.471 6.682l14.884 6.681v45.554l14.97 7.063c8.233 3.884 15.628 7.062 16.435 7.062.916 0 1.61-8.221 1.856-21.975l.396-21.975 15.038 6.777 15.038 6.779.395-22.896c.3-17.375.816-22.725 2.148-22.185.965.392 8.358 3.774 16.434 7.518l14.68 6.806v45.557l10.383 4.749a3337.07 3337.07 0 0 1 21.841 10.113c20.871 9.77 29.612 13.616 30.926 13.616.72 0 1.298-9.854 1.298-22.146v-22.148l6.086 2.614c3.35 1.437 10.751 4.836 16.452 7.554l10.362 4.94.377-46.408.375-46.41 14.324-6.484c41.635-18.854 84.141-38.555 95.066-44.06 15.066-7.592 27.49-13.149 35.732-15.985 3.412-1.174 21.457-9.25 40.102-17.947 18.645-8.696 44.211-20.298 56.813-25.78 12.605-5.481 31.615-14.053 42.248-19.046 87.953-41.293 224.777-103.659 230.084-104.873l3.084-.707-.398 228.93c-.223 125.911-.482 290.559-.58 365.885l-.178 136.955-96.313 43.777c-52.973 24.079-118.225 53.782-145.006 66.008l-48.695 22.228-.393-21.434c-.293-15.725-.863-21.44-2.15-21.452-.965-.008-8.357 2.997-16.434 6.679l-14.68 6.695v44.669l-45.47 20.662a55910.161 55910.161 0 0 0-89.155 40.621 49509.372 49509.372 0 0 1-52.31 23.878l-8.63 3.919-19.299-8.888zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm161.833-247.479v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.087 2.283.138 2.504-1.798 2.504-21.964zm637.671-29.229l9.668-4.391v-22.412c0-20.017-.246-22.315-2.307-21.525-1.27.485-8.357 3.58-15.754 6.873l-13.447 5.989v45.176l6.086-2.661c3.35-1.463 10.438-4.637 15.754-7.049zm-541.74-18.475l-.026-22.557-14.382-6.444c-7.909-3.544-14.988-6.659-15.727-6.922-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.431zm-160.562-76.354l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.721 1.071-45.405zm372.19 62.175l14.68-6.695v-45.326l-8.235 3.722c-4.527 2.047-11.617 5.252-15.754 7.124l-7.52 3.403v22.219c0 12.218.482 22.224 1.074 22.23.592.01 7.68-2.995 15.754-6.677zm-211.604-77.181v-22.258l-9.667-4.39c-5.315-2.414-12.405-5.586-15.754-7.049l-6.087-2.662v45.146l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zm-64.447-29.327v-22.941l-15.236-7.133c-8.382-3.923-15.793-7.134-16.47-7.134-.679 0-1.233 10.208-1.233 22.688v22.687l15.396 7.271c8.468 4 15.88 7.325 16.47 7.389.59.064 1.073-10.209 1.073-22.827zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.676a1616.703 1616.703 0 0 1 15.791 7.065l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm461.347-587.27c-14.467-5.754-15.902-6.631-12.89-7.862 1.864-.764 6.251-2.635 9.747-4.158 15.186-6.617 16.463-6.808 24.71-3.685 4.183 1.583 9.214 3.41 11.183 4.06 1.971.647 5.832 2.155 8.582 3.347l5 2.165-4.283 1.737c-7.982 3.238-10.002 4.084-17.176 7.201-3.939 1.712-7.482 3.238-7.877 3.393-.392.152-8.04-2.635-16.996-6.198z\"></path><path fill=\"#496E2E\" d=\"M501.563 1132.184l-15.396-7.271v-22.089c0-12.15.561-21.876 1.246-21.612.684.263 7.762 3.377 15.727 6.923l14.484 6.444.023 22.557c.015 12.406-.135 22.504-.333 22.438-.192-.064-7.283-3.39-15.75-7.39zm17.58-176.858l.037-182.983 14.645-6.533 14.643-6.533.38-45.383c.208-24.96.091-45.383-.259-45.383-.348 0-6.883 2.899-14.52 6.445-7.639 3.544-14.133 6.443-14.432 6.443s-.379-61.932-.178-137.624l.363-137.624 14.322-6.484c41.72-18.895 84.146-38.557 95.066-44.061 15.068-7.592 27.49-13.149 35.734-15.985 3.41-1.174 21.457-9.249 40.102-17.947 18.643-8.696 44.21-20.298 56.811-25.78 12.605-5.481 31.617-14.053 42.25-19.046 89.391-41.968 224.801-103.669 230.221-104.902l3.223-.73v45.76c0 25.169-.426 76.74-.945 114.604l-.947 68.842-14.447 6.498-14.45 6.498-.394 22.281c-.219 12.255.174 22.282.865 22.282.693 0 7.316-2.831 14.717-6.291l13.455-6.29.365 137.612c.201 75.688-.12 138.032-.717 138.544-.596.514-14.762 6.993-31.482 14.4l-30.4 13.47-.033 22.558c-.018 12.405.201 22.557.484 22.557s6.244-2.659 13.248-5.906c7.002-3.248 20.95-9.65 30.99-14.229l18.262-8.324v136.983l-32.582 14.681a24641.119 24641.119 0 0 0-65.52 29.663c-18.118 8.238-49.376 22.437-69.462 31.55s-55.854 25.375-79.484 36.138l-42.967 19.569-.393-21.242c-.29-15.572-.865-21.248-2.148-21.259-.965-.008-8.359 2.996-16.434 6.678l-14.68 6.695v44.768l-12.53 5.577c-6.894 3.067-28 12.604-46.905 21.189-18.902 8.589-35.178 15.946-36.162 16.356-1.387.574-1.789-4.168-1.789-21.013 0-11.965-.56-21.541-1.246-21.278-.684.264-7.762 3.378-15.727 6.924l-14.484 6.444-.023 21.664c-.02 15.618-.527 22.049-1.818 23.041-.982.756-12.422 6.086-25.42 11.846-12.996 5.761-26.689 11.996-30.434 13.861l-6.803 3.392.032-182.983zm113.105 86.354l13.605-6.201.396-22.365c.217-12.303.057-22.365-.357-22.365-1.35 0-27.203 11.799-29.039 13.253-1.289 1.021-1.79 7.393-1.79 22.727 0 16.131.437 21.288 1.79 21.232.983-.044 7.913-2.868 15.395-6.281zm102.043-138.082l9.666-4.39V876.83c0-12.581-.56-22.17-1.28-21.9-.706.264-7.796 3.361-15.755 6.886l-14.473 6.41v45.082l6.088-2.661a1617.48 1617.48 0 0 0 15.754-7.049zm125.46-11.67l14.481-6.443.025-22.477.025-22.476-15.396 7.028-15.396 7.029-.396 22.38c-.223 12.763.156 22.169.89 21.892.705-.268 7.801-3.389 15.766-6.933zm-160.815-17.981l13.514-6.271V845.43c0-12.234-.242-22.245-.537-22.245-.297 0-7.545 3.199-16.11 7.11l-15.575 7.111-.395 22.354c-.46 25.995-2.722 24.317 19.103 14.187zm-50.034-23.102l30.607-13.871V791.838l-20.408 9.296c-11.225 5.112-24.92 11.321-30.434 13.795-5.516 2.477-10.832 5.102-11.816 5.836-2.414 1.803-2.58 43.953-.172 43.953.89 0 15.39-6.244 32.223-13.873zm308.235-3.313l14.484-6.446.023-22.51.025-22.509-13.963 6.53c-7.682 3.593-14.77 6.862-15.754 7.269-2.102.86-2.645 45.391-.545 44.587.687-.265 7.765-3.377 15.73-6.921zm-226.844-34.28l15.096-7.067v-21.576c0-11.864-.578-21.573-1.283-21.573s-8.117 3.188-16.469 7.091l-15.188 7.091v21.552c0 12.795.56 21.554 1.373 21.554.756-.004 8.168-3.185 16.471-7.072zm113.557-51.158l30.436-13.844v-45.187l-18.262 8.313c-10.04 4.572-24.543 11.256-32.225 14.849l-13.963 6.538v21.58c0 16.305.438 21.582 1.791 21.587.984.002 15.484-6.221 32.223-13.836zm-215.899-39.132c21.986-9.69 20.051-6.643 20.051-31.57 0-11.797-.482-21.46-1.074-21.473-.59-.014-15.074 6.271-32.186 13.964l-31.11 13.987-.04 22.469-.037 22.469 15.396-6.923c8.467-3.81 21.518-9.624 29-12.923zm366.992-29.892l9.668-4.391v-22.412c0-20.017-.246-22.315-2.307-21.525-1.27.485-8.357 3.58-15.754 6.873l-13.447 5.989v45.176l6.086-2.661c3.35-1.463 10.438-4.637 15.754-7.049zm-53.707-21.203l30.436-13.844v-45.204l-12.53 5.729c-6.894 3.151-21.23 9.738-31.866 14.638l-19.334 8.909-.395 21.8c-.309 16.925.012 21.801 1.432 21.807 1.003.006 15.521-6.22 32.257-13.835zM664.83 660.416l14.68-6.695v-45.326l-8.234 3.722c-4.527 2.047-11.617 5.252-15.754 7.124l-7.52 3.403v22.219c0 12.218.482 22.224 1.074 22.23.592.01 7.68-2.995 15.754-6.677zm99.328-45.68c9.764-4.369 23.875-10.708 31.357-14.085l13.605-6.141.395-22.567c.217-12.411-.154-22.347-.828-22.077-.672.27-15.189 6.878-32.262 14.685l-31.037 14.194v21.969c0 12.081.23 21.967.508 21.967s8.495-3.578 18.262-7.945zM634.04 582.781l12.53-5.799v-44.458l-3.222 1.263c-1.77.691-8.86 3.869-15.754 7.059l-12.53 5.8v44.457l3.222-1.261c1.774-.695 8.861-3.871 15.754-7.061zm241.77-18.596l30.7-14.098.394-22.422c.217-12.333.205-22.424-.023-22.424-.232 0-14.588 6.421-31.902 14.269l-31.482 14.265-.396 22.255c-.215 12.239.15 22.253.813 22.253.657 0 15.013-6.344 31.896-14.098zm-503.856 464.05l-14.68-6.684V929.327l15.396 7.029 15.396 7.031.377 45.878c.208 25.232-.113 45.826-.717 45.767-.6-.062-7.698-3.121-15.772-6.797zm-127.586-58.893c-8.144-3.802-15.41-7.518-16.15-8.26-.758-.758-1.174-10.767-.95-22.907l.396-21.562 16.112 7.226 16.111 7.226v22.682c0 12.475-.16 22.642-.357 22.595-.198-.05-7.022-3.2-15.162-7zm61.706-17.225l-14.68-7.005v-22.297c0-13.902.54-22.295 1.433-22.295.787 0 8.196 3.062 16.466 6.804l15.035 6.803.003 22.557c.002 17.124-.428 22.541-1.786 22.497-.986-.035-8.398-3.212-16.47-7.064zm195.847-2.964l-15.038-6.988-.396-22.254c-.229-13.07.157-22.254.94-22.254.734 0 7.84 2.997 15.79 6.66l14.456 6.662v22.697c0 12.484-.16 22.646-.358 22.582-.192-.063-7.122-3.259-15.394-7.105zm-324.743-9.958l-14.68-6.977v-45.512l-16.112-7.772-16.11-7.771-.396-22.689c-.219-12.532.165-22.469.856-22.198.687.271 8.115 3.657 16.506 7.526l15.256 7.037v45.308l11.811 5.396c6.497 2.968 13.747 6.363 16.112 7.544l4.301 2.148.395 22.557c.308 17.573-.008 22.537-1.433 22.467-1.004-.047-8.43-3.228-16.506-7.064zm226.283-34.126l-14.68-6.685v-22.562c0-12.41.483-22.53 1.074-22.49.592.04 7.843 3.159 16.111 6.932l15.038 6.86.395 22.427c.308 17.479-.009 22.403-1.433 22.315-1.004-.064-8.43-3.12-16.505-6.797zM81.222 894.48l-16.11-7.317v-21.964c0-16.612.436-21.968 1.79-21.975.983-.006 8.395 3.023 16.47 6.731l14.68 6.74v22.629c0 12.443-.162 22.593-.358 22.549-.198-.041-7.609-3.368-16.472-7.393zm194.416-94.24l-15.038-7.021-.393-22.934-.393-22.938 6.121 2.676a1561.917 1561.917 0 0 1 15.79 7.065l9.666 4.39v22.976c0 12.635-.16 22.936-.357 22.888-.197-.046-7.123-3.243-15.396-7.102zm194.06-2.542c-7.878-3.66-14.795-7.319-15.374-8.129-1.787-2.505-1.317-43.723.498-43.723.877 0 8.288 3.038 16.471 6.753l14.875 6.753v22.606c0 12.434-.482 22.557-1.074 22.498-.592-.058-7.52-3.1-15.397-6.758zm-422.13-9.97l-13.966-6.561v-22.673c0-12.471.257-22.673.567-22.673.313 0 7.402 3.189 15.754 7.092l15.187 7.091v22.268c0 16.929-.43 22.238-1.79 22.143-.985-.07-8.073-3.079-15.753-6.687zm160.76-64.383c-9.846-4.285-24.024-10.536-31.508-13.89l-13.605-6.101-.395-22.436c-.219-12.465.173-22.436.881-22.436 1.165 0 9.624 3.675 46.773 20.321 7.091 3.178 13.695 6.096 14.681 6.484 1.386.551 1.79-4.337 1.79-21.643 0-12.293.556-22.353 1.233-22.353s8.088 3.211 16.471 7.135l15.235 7.132v45.814l-3.223-1.26c-1.772-.693-8.926-3.9-15.896-7.126-6.97-3.227-12.917-5.866-13.212-5.866s-.714 9.902-.93 22.005l-.397 22.004-17.898-7.784zm99.176-46.28l-14.68-6.977v-22.272c0-12.249.482-22.276 1.074-22.28.591-.006 7.68 3.022 15.754 6.73l14.68 6.741v22.628c0 12.445-.482 22.577-1.074 22.518-.59-.06-7.678-3.252-15.754-7.088zM81.226 665.93l-14.677-6.729-.002-23.189-.003-23.188 15.754 7.311 15.754 7.311v22.681c0 12.476-.48 22.647-1.074 22.608-.59-.041-7.678-3.104-15.75-6.804l-.002-.001zm290.793-51.375l-14.613-6.62-.425-22.72c-.274-14.75.077-22.516 1.008-22.131.787.323 8.037 3.652 16.11 7.396l14.681 6.807v21.98c0 12.09-.482 21.965-1.074 21.943-.59-.021-7.65-3.014-15.687-6.655zm97.356-.489l-14.644-6.959-.395-23.299-.395-23.301-16.068-7.225-16.069-7.224-.043-22.93-.043-22.932-15.396-6.812c-8.467-3.747-15.878-6.8-16.47-6.787-.59.013-1.074 9.993-1.074 22.176v22.152l-13.963-6.559c-21.145-9.93-18.977-11.571-18.977 14.36 0 12.302-.485 22.367-1.077 22.367-.594 0-14.458-6.124-30.81-13.606-16.353-7.483-30.046-13.604-30.432-13.604-.383 0-.697 9.667-.697 21.481 0 14.131-.519 21.482-1.515 21.482-.83 0-12.915-5.231-26.853-11.625-13.938-6.395-31.785-14.364-39.662-17.712a5447.837 5447.837 0 0 1-21.84-9.332l-7.52-3.246v-46.649l31.046 14.206c17.073 7.814 31.591 14.207 32.26 14.207.668 0 1.038-10.065.82-22.369l-.395-22.367-29.359-13.469c-16.146-7.407-34.545-15.999-40.884-19.091-11.586-5.65-24.719-11.498-25.83-11.498-.33 0-.598 9.989-.598 22.199 0 12.684-.569 22.198-1.327 22.198-.73 0-7.659-2.871-15.396-6.379l-14.068-6.379-.394-22.98c-.217-12.639-.045-22.979.383-22.979.425 0 6.98 2.898 14.564 6.443 7.586 3.544 14.342 6.445 15.016 6.445.673 0 1.223-30.253 1.223-67.229s.482-67.504 1.074-67.844c.592-.338 7.842 2.452 16.111 6.2l15.038 6.816.377 46.026.38 46.026 15.217 7.124c8.368 3.918 15.45 7.124 15.733 7.124s.517-9.99.517-22.198c0-13.291.554-22.199 1.38-22.199.76 0 8.17 3.026 16.47 6.723l15.09 6.724v91.959l14.68 6.741c8.074 3.707 15.164 6.736 15.755 6.732.591-.007 1.073-9.677 1.073-21.491 0-14.218.516-21.483 1.523-21.483 1.602 0 17.16 6.894 25.688 11.383l5.013 2.639.396 22.465.396 22.466 14.933 7.043c8.213 3.875 15.61 7.045 16.434 7.045.98 0 1.5-7.467 1.5-21.482 0-11.814.416-21.482.924-21.482.507 0 7.25 2.899 14.982 6.444 7.733 3.545 14.76 6.444 15.615 6.444 1.071 0 1.422-7.125 1.128-22.933-.276-14.893.076-22.726 1.006-22.342.788.324 8.038 3.652 16.112 7.396l14.68 6.805v45.558l10.383 4.75a3358.27 3358.27 0 0 1 21.841 10.111c20.746 9.711 29.61 13.619 30.89 13.619.693 0 1.438-9.919 1.655-22.041l.396-22.041 15.038 6.773 15.038 6.774.395 23.143c.217 12.729.136 23.145-.179 23.145s-6.82-2.9-14.458-6.444c-7.637-3.545-14.484-6.445-15.217-6.445-.792 0-1.332 18.276-1.332 45.113 0 24.813-.482 45.063-1.074 45.002-.592-.051-7.664-3.234-15.719-7.062zM49 513.528l-15.396-7.273v-45.773c0-41.494.216-45.688 2.307-44.888 1.27.488 8.357 3.581 15.754 6.876l13.447 5.988v46.269c0 25.449-.16 46.227-.357 46.173-.2-.053-7.288-3.37-15.755-7.372zm78.805-102.175c-.438-.438-14.242-6.849-30.673-14.243l-29.874-13.444-.394-22.276c-.217-12.253-.06-22.277.351-22.277s7.031 2.825 14.716 6.278c7.685 3.454 18.16 7.989 23.28 10.08 5.12 2.091 12.854 5.55 17.185 7.685l7.878 3.885.395 22.556c.354 20.19-.204 24.416-2.864 21.756zM16.776 360.599l-14.68-6.976V309.136l6.086 2.662c3.35 1.463 10.438 4.635 15.754 7.05l9.667 4.389v22.26c0 12.241-.48 22.219-1.073 22.169-.592-.051-7.68-3.231-15.754-7.067zm31.507-31.26l-14.68-6.685v-22.562c0-12.41.392-22.563.87-22.563s7.566 3.005 15.752 6.683l14.885 6.681v22.678c0 12.474-.482 22.626-1.074 22.565-.589-.064-7.679-3.122-15.753-6.797zM672.54 228.986c-14.467-5.754-15.902-6.631-12.89-7.862 1.864-.764 6.251-2.635 9.747-4.158 15.186-6.617 16.463-6.808 24.71-3.685 4.183 1.583 9.214 3.41 11.183 4.06 1.971.647 5.832 2.155 8.582 3.347l5 2.165-4.283 1.737c-7.982 3.238-10.002 4.084-17.176 7.201-3.939 1.712-7.482 3.238-7.877 3.393-.392.152-8.04-2.635-16.996-6.198z\"></path><path fill=\"#5B422D\" d=\"M501.563 1132.184l-15.396-7.271v-22.089c0-12.15.561-21.876 1.246-21.612.684.263 7.762 3.377 15.727 6.923l14.484 6.444.023 22.557c.015 12.406-.135 22.504-.333 22.438-.192-.064-7.283-3.39-15.75-7.39zm17.58-176.858l.037-182.983 14.645-6.533 14.643-6.533.38-45.383c.208-24.96.091-45.383-.259-45.383-.348 0-6.883 2.899-14.52 6.445-7.639 3.544-14.127 6.443-14.424 6.443-.295 0-.52-31.097-.504-69.103l.035-69.103 15.72-7.005 15.72-7.004V482.27l15.203-7.116c8.361-3.915 15.771-6.764 16.471-6.333.697.432 1.268 10.735 1.268 22.898 0 12.164.482 22.074 1.074 22.023.59-.051 7.842-3.434 16.111-7.519l15.04-7.428.714-22.688.715-22.688 13.096-5.955c7.2-3.275 21.21-9.501 31.13-13.833l18.038-7.877.02-23.369c.018-22.987-.029-23.354-2.947-22.428-1.63.518-14.037 6.096-27.568 12.398-13.53 6.301-26.715 12.339-29.295 13.418l-4.689 1.962.395-22.241.395-22.244 31.297-14.22c17.215-7.821 31.877-14.22 32.582-14.22.707 0 1.283 9.414 1.283 20.918 0 18.646.252 20.824 2.31 20.035 1.267-.486 8.341-3.573 15.718-6.858l13.412-5.973.395-22.143.393-22.142 16.47-7.534 16.47-7.532.396 21.343c.217 11.738.62 21.344.893 21.344.277 0 6.75-2.9 14.39-6.445 7.636-3.545 14.761-6.443 15.83-6.443 1.07 0 8.194-2.901 15.831-6.445 7.64-3.546 14.45-6.445 15.14-6.445s1.253 10.157 1.253 22.572v22.572l-15.754 7-15.754 7v45.369l7.518-3.342c4.137-1.838 18.215-8.275 31.285-14.304s24.51-10.962 25.42-10.962c1.182 0 1.658 6.173 1.658 21.482 0 11.814.273 21.481.611 21.481s6.941-2.871 14.68-6.379l14.068-6.379.393-22.623.393-22.623 16.076-7.298 16.078-7.298.377-46.023.38-46.021-11.12 5.183c-6.115 2.852-14.986 6.649-19.71 8.439-4.73 1.79-14.233 5.859-21.126 9.045l-12.53 5.79v-43.586l11.813-5.285c33.563-15.013 92.377-42.152 125.54-57.927 10.558-5.023 20.708-9.514 22.556-9.977l3.355-.842v21.637c0 11.901.332 21.639.738 21.639.408 0 6.957-2.905 14.553-6.455 7.596-3.551 13.97-6.289 14.162-6.087.684.71 1.334 92.54.98 137.972l-.357 45.947-14.68 6.601-14.682 6.603-.395 22.282c-.217 12.254.174 22.282.867 22.282.691 0 7.314-2.831 14.715-6.291l13.457-6.29.365 137.612c.2 75.688-.123 138.031-.719 138.544s-14.762 6.992-31.482 14.4l-30.4 13.47-.033 22.557c-.018 12.406.201 22.558.484 22.558s6.246-2.659 13.248-5.906a6401.956 6401.956 0 0 1 30.992-14.23l18.26-8.323v136.983l-32.582 14.681a25295.502 25295.502 0 0 0-65.52 29.66 95750.927 95750.927 0 0 1-69.462 31.553 65311.639 65311.639 0 0 0-79.484 36.138l-42.965 19.569-.395-21.242c-.29-15.572-.86-21.248-2.148-21.259-.965-.009-8.359 2.996-16.434 6.678l-14.68 6.695v44.768l-12.53 5.577c-6.894 3.064-28 12.602-46.905 21.188-18.902 8.591-35.178 15.948-36.16 16.357-1.389.575-1.79-4.167-1.79-21.012 0-11.967-.562-21.541-1.245-21.278-.686.263-7.764 3.378-15.729 6.922l-14.482 6.445-.025 21.665c-.02 15.618-.527 22.049-1.818 23.041-.982.756-12.422 6.086-25.42 11.846-12.996 5.758-26.689 11.996-30.434 13.861l-6.803 3.392.024-182.978zm113.105 86.354l13.605-6.201.396-22.365c.217-12.303.057-22.365-.357-22.365-1.35 0-27.203 11.799-29.039 13.253-1.289 1.021-1.79 7.393-1.79 22.727 0 16.131.437 21.288 1.79 21.232.983-.044 7.913-2.868 15.395-6.281zm102.043-138.082l9.666-4.39V876.83c0-12.581-.56-22.17-1.28-21.9-.706.264-7.796 3.361-15.755 6.886l-14.473 6.41v45.082l6.088-2.661a1617.48 1617.48 0 0 0 15.754-7.049zm125.46-11.67l14.481-6.443.025-22.477.025-22.476-15.396 7.028-15.396 7.029-.396 22.38c-.223 12.763.156 22.169.89 21.892.705-.268 7.801-3.389 15.766-6.933zm-160.815-17.981l13.514-6.271V845.43c0-12.234-.242-22.245-.537-22.245-.297 0-7.545 3.199-16.11 7.11l-15.575 7.111-.395 22.354c-.46 25.995-2.722 24.317 19.103 14.187zm-50.034-23.102l30.607-13.871V791.838l-20.408 9.296c-11.225 5.112-24.92 11.321-30.434 13.795-5.516 2.477-10.832 5.102-11.816 5.836-2.414 1.803-2.58 43.953-.172 43.953.89 0 15.39-6.244 32.223-13.873zm308.235-3.313l14.484-6.446.023-22.51.025-22.509-13.963 6.53c-7.682 3.593-14.77 6.862-15.754 7.269-2.102.86-2.645 45.391-.545 44.587.687-.265 7.765-3.377 15.73-6.921zm-226.844-34.28l15.096-7.067v-21.576c0-11.864-.578-21.573-1.283-21.573s-8.117 3.188-16.469 7.091l-15.188 7.091v21.552c0 12.795.56 21.554 1.373 21.554.756-.004 8.168-3.185 16.471-7.072zm113.557-51.158l30.436-13.844v-45.187l-18.262 8.313c-10.04 4.572-24.543 11.256-32.225 14.849l-13.963 6.538v21.58c0 16.305.438 21.582 1.791 21.587.984.002 15.484-6.221 32.223-13.836zm-215.899-39.132c21.986-9.69 20.051-6.643 20.051-31.57 0-11.797-.482-21.46-1.074-21.473-.59-.014-15.074 6.271-32.186 13.964l-31.11 13.987-.04 22.469-.037 22.469 15.396-6.923c8.467-3.81 21.518-9.624 29-12.923zm366.992-29.892l9.668-4.391v-22.412c0-20.017-.246-22.315-2.307-21.525-1.27.485-8.357 3.58-15.754 6.873l-13.447 5.989v45.176l6.086-2.661c3.35-1.463 10.438-4.637 15.754-7.049zm-53.707-21.203l30.436-13.844v-45.204l-12.53 5.729c-6.894 3.151-21.23 9.738-31.866 14.638l-19.334 8.909-.395 21.8c-.309 16.925.012 21.801 1.432 21.807 1.003.006 15.521-6.22 32.257-13.835zM664.83 660.416l14.68-6.695v-45.326l-8.234 3.722c-4.527 2.047-11.617 5.252-15.754 7.124l-7.52 3.403v22.219c0 12.218.482 22.224 1.074 22.23.592.01 7.68-2.995 15.754-6.677zm99.328-45.68c9.764-4.369 23.875-10.708 31.357-14.085l13.605-6.141.395-22.567c.217-12.411-.154-22.347-.828-22.077-.672.27-15.189 6.878-32.262 14.685l-31.037 14.194v21.969c0 12.081.23 21.967.508 21.967s8.495-3.578 18.262-7.945zM634.04 582.781l12.53-5.799v-44.458l-3.222 1.263c-1.77.691-8.86 3.869-15.754 7.059l-12.53 5.8v44.457l3.222-1.261c1.774-.695 8.861-3.871 15.754-7.061zm241.77-18.596l30.7-14.098.394-22.422c.217-12.333.205-22.424-.023-22.424-.232 0-14.588 6.421-31.902 14.269l-31.482 14.265-.396 22.255c-.215 12.239.15 22.253.813 22.253.657 0 15.013-6.344 31.896-14.098zm-208.83-42.987l12.531-5.799v-22.264c0-12.246-.295-22.264-.656-22.264s-7.45 3.18-15.754 7.066l-15.098 7.067V529.517l3.223-1.26c1.773-.693 8.861-3.869 15.754-7.059zm63.015-74.757l13.963-6.308v-45.021l-14.68 6.841-14.68 6.839-.395 22.554c-.217 12.404.104 22.293.717 21.978.612-.315 7.395-3.413 15.075-6.883zm227.83-150.195l13.848-6.345v-21.225c0-11.673-.275-21.224-.61-21.224-.339 0-6.942 2.869-14.68 6.378l-14.069 6.379-.396 21.681c-.217 11.925.158 21.46.834 21.19.673-.269 7.456-3.345 15.073-6.834zm-585.87 731.989l-14.68-6.684V929.327l15.395 7.029 15.396 7.031.377 45.878c.208 25.232-.113 45.826-.717 45.767-.6-.062-7.698-3.121-15.772-6.797zm-127.587-58.893c-8.144-3.802-15.41-7.518-16.15-8.26-.758-.758-1.174-10.767-.95-22.907l.396-21.562 16.112 7.226 16.111 7.226v22.682c0 12.475-.16 22.642-.357 22.595-.198-.05-7.022-3.2-15.162-7zm61.706-17.225l-14.68-7.005v-22.297c0-13.902.54-22.295 1.433-22.295.787 0 8.196 3.062 16.466 6.804l15.035 6.803.003 22.557c.002 17.124-.428 22.541-1.786 22.497-.986-.035-8.398-3.212-16.47-7.064zm195.847-2.964l-15.038-6.988-.396-22.254c-.229-13.07.157-22.254.94-22.254.734 0 7.84 2.997 15.79 6.66l14.456 6.662v22.697c0 12.484-.16 22.646-.358 22.582-.192-.063-7.122-3.259-15.394-7.105zm-324.743-9.958l-14.68-6.977v-45.512l-16.112-7.772-16.11-7.771-.396-22.689c-.219-12.532.165-22.469.856-22.198.687.271 8.115 3.657 16.506 7.526l15.256 7.037v45.308l11.811 5.396c6.497 2.968 13.747 6.363 16.112 7.544l4.301 2.148.395 22.557c.308 17.573-.008 22.537-1.433 22.467-1.004-.047-8.43-3.228-16.506-7.064zm226.283-34.126l-14.68-6.685v-22.562c0-12.41.483-22.53 1.074-22.49.592.04 7.843 3.159 16.111 6.932l15.038 6.86.395 22.427c.308 17.479-.009 22.403-1.433 22.315-1.004-.064-8.43-3.12-16.505-6.797zM81.222 894.48l-16.11-7.317v-21.964c0-16.612.436-21.968 1.79-21.975.983-.006 8.395 3.023 16.47 6.731l14.68 6.74v22.629c0 12.443-.162 22.593-.358 22.549-.198-.041-7.609-3.368-16.472-7.393zm194.416-94.24l-15.038-7.021-.393-22.934-.393-22.938 6.121 2.676a1561.917 1561.917 0 0 1 15.79 7.065l9.666 4.39v22.976c0 12.635-.16 22.936-.357 22.888-.197-.046-7.123-3.243-15.396-7.102zm194.06-2.542c-7.878-3.66-14.795-7.319-15.374-8.129-1.787-2.505-1.317-43.723.498-43.723.877 0 8.288 3.038 16.471 6.753l14.875 6.753v22.606c0 12.434-.482 22.557-1.074 22.498-.592-.058-7.52-3.1-15.397-6.758zm-422.13-9.97l-13.966-6.561v-22.673c0-12.471.257-22.673.567-22.673.313 0 7.402 3.189 15.754 7.092l15.187 7.091v22.268c0 16.929-.43 22.238-1.79 22.143-.985-.07-8.073-3.079-15.753-6.687zm160.76-64.383c-9.846-4.285-24.024-10.536-31.508-13.89l-13.605-6.101-.395-22.436c-.219-12.465.173-22.436.881-22.436 1.165 0 9.624 3.675 46.773 20.321 7.091 3.178 13.695 6.096 14.681 6.484 1.386.551 1.79-4.337 1.79-21.643 0-12.293.556-22.353 1.233-22.353s8.088 3.211 16.471 7.135l15.235 7.132v45.814l-3.223-1.26c-1.772-.693-8.926-3.9-15.896-7.126-6.97-3.227-12.917-5.866-13.212-5.866s-.714 9.902-.93 22.005l-.397 22.004-17.898-7.784zm99.176-46.28l-14.68-6.977v-22.272c0-12.249.482-22.276 1.074-22.28.591-.006 7.68 3.022 15.754 6.73l14.68 6.741v22.628c0 12.445-.482 22.577-1.074 22.518-.59-.06-7.678-3.252-15.754-7.088zM81.226 665.93l-14.677-6.729-.002-23.189-.003-23.188 15.754 7.311 15.754 7.311v22.681c0 12.476-.48 22.647-1.074 22.608-.59-.041-7.678-3.104-15.75-6.804l-.002-.001zm290.793-51.375l-14.613-6.62-.425-22.72c-.274-14.75.077-22.516 1.008-22.131.787.323 8.037 3.652 16.11 7.396l14.681 6.807v21.98c0 12.09-.482 21.965-1.074 21.943-.59-.021-7.65-3.014-15.687-6.655zm97.356-.489l-14.644-6.959-.395-23.299-.395-23.301-16.068-7.225-16.069-7.224-.043-22.557c-.023-12.407.163-22.558.413-22.558s14.482 6.445 31.626 14.322c17.144 7.876 31.438 14.321 31.768 14.321s.598-9.99.598-22.198c0-12.21.483-22.203 1.073-22.208.593-.005 7.683 3.024 15.755 6.731l14.68 6.74v22.628c.001 12.445-.24 22.628-.537 22.628-.295 0-6.784-2.9-14.422-6.444-7.637-3.545-14.484-6.445-15.217-6.445-.792 0-1.332 18.276-1.332 45.113 0 24.813-.482 45.063-1.074 45.002-.59-.056-7.662-3.239-15.717-7.067zM262.75 564.505c-14.572-6.733-29.717-13.527-33.656-15.099-3.938-1.569-13.122-5.507-20.409-8.749l-13.248-5.894V488.288l31.046 14.205c17.073 7.814 31.591 14.207 32.26 14.207.668 0 1.038-10.065.82-22.368l-.395-22.368-29.359-13.474c-16.146-7.408-35.214-16.318-42.37-19.797-7.157-3.479-15.696-7.399-18.977-8.712l-5.965-2.387V291.541l3.271.819c1.8.452 8.89 3.416 15.753 6.588l12.482 5.769v91.66l13.932 6.511c7.663 3.581 15.38 6.874 17.15 7.318l3.216.807.396-22.204.395-22.204 15.038 6.878 15.038 6.879.378 46.028.38 46.027 13.493 6.264c21.696 10.07 19.406 11.741 19.406-14.156 0-12.263.256-22.295.566-22.295.313 0 7.402 3.19 15.754 7.091l15.187 7.092v45.502l15.754 7.31 15.754 7.309v22.284c0 12.255-.485 22.283-1.077 22.283-.594 0-14.458-6.124-30.81-13.605-16.353-7.484-30.046-13.605-30.432-13.605-.383 0-.697 9.667-.697 21.482 0 16.259-.436 21.47-1.79 21.43-.984-.034-13.712-5.566-28.284-12.298zm109.918-41.067l-15.396-7.159v-21.988c0-12.095.416-21.988.924-21.988.507 0 7.25 2.9 14.982 6.445 7.733 3.544 14.73 6.443 15.547 6.443.964 0 1.487-7.807 1.487-22.197 0-12.211.296-22.198.657-22.198s7.45 3.18 15.754 7.065l15.096 7.067v22.389c0 25.902 2.07 24.181-17.956 14.931-6.694-3.095-12.789-5.624-13.54-5.624-.797 0-1.537 9.225-1.766 21.986l-.396 21.987-15.393-7.159zM49 513.528l-15.396-7.273v-45.773c0-41.494.216-45.688 2.307-44.888 1.27.488 8.357 3.581 15.754 6.876l13.447 5.988v46.269c0 25.449-.16 46.227-.357 46.173-.2-.053-7.288-3.37-15.755-7.372zm96.312-47.699l-13.604-6.276-.393-22.982-.396-22.981 8.271 3.736c4.548 2.056 11.652 5.268 15.787 7.141l7.521 3.404v22.217c0 16.87-.43 22.192-1.79 22.119-.985-.056-7.913-2.925-15.396-6.378zm-17.507-54.476c-.438-.438-14.242-6.849-30.673-14.243l-29.874-13.444-.394-22.276c-.217-12.253-.09-22.277.28-22.277s8.281 3.436 17.581 7.633a9304.186 9304.186 0 0 0 30.868 13.863l13.964 6.231v22.656c0 12.461-.214 22.656-.477 22.656s-.835-.359-1.275-.799zM16.776 360.599l-14.68-6.976V309.137l6.086 2.66c3.35 1.463 10.438 4.635 15.754 7.05l9.667 4.389v22.26c0 12.241-.48 22.219-1.073 22.169s-7.68-3.23-15.754-7.066zm31.507-31.26l-14.68-6.685v-22.562c0-12.41.256-22.563.566-22.563.313 0 7.402 3.19 15.754 7.092l15.187 7.091v22.269c0 12.248-.482 22.216-1.074 22.155-.589-.064-7.679-3.122-15.753-6.797z\"></path><path fill=\"#3B6121\" d=\"M550.613 1078.108c0-24.419-.254-44.396-.564-44.396-.313 0-7.4 3.189-15.754 7.091l-15.188 7.091v-92.357l12.531-5.522c20.928-9.224 18.977-5.928 18.977-32.082v-22.622l15.754-6.963 15.754-6.966v-91.039l-6.086 2.661c-3.348 1.463-10.438 4.635-15.754 7.049l-9.668 4.392v-68.686c0-37.775-.31-68.683-.688-68.683-.38 0-6.17 2.53-12.863 5.622-20.032 9.256-17.959 11.014-17.936-15.195l.02-22.65 13.014-5.694c20.064-8.78 18.455-6.082 18.455-30.907 0-11.771-.55-21.401-1.223-21.401-.674 0-7.43 2.899-15.014 6.445-7.588 3.544-14.125 6.444-14.533 6.444-.406 0-.74-10.635-.74-23.631 0-13.727.563-23.631 1.342-23.631.738 0 7.826-3.007 15.754-6.682l14.412-6.681v-46.843l15.238-7.133c8.381-3.923 15.471-7.133 15.754-7.133s.516 10.312.516 22.915c0 12.956.572 22.915 1.314 22.915 1.328 0 30.301-12.75 31.625-13.92.396-.348 1.04-10.95 1.434-23.563l.715-22.933 13.096-5.954c7.2-3.275 21.21-9.501 31.13-13.833l18.038-7.877.02-23.369c.018-22.987-.029-23.354-2.947-22.428-1.63.518-14.037 6.096-27.568 12.398-13.53 6.302-26.715 12.34-29.295 13.418l-4.689 1.962.395-22.241.395-22.244 31.297-14.219c17.215-7.822 31.877-14.221 32.582-14.221.707 0 1.283 9.414 1.283 20.918 0 18.646.252 20.824 2.31 20.035 1.267-.485 8.341-3.573 15.718-6.857l13.412-5.974.393-22.143.395-22.142 16.47-7.533 16.468-7.533.398 21.343c.217 11.738.62 21.344.893 21.344.277 0 6.75-2.9 14.39-6.444 7.636-3.546 14.761-6.444 15.83-6.444 1.07 0 8.194-2.901 15.831-6.445 7.64-3.546 14.45-6.444 15.14-6.444s1.253 10.156 1.253 22.571v22.572l-15.754 7-15.754 7v45.369l7.518-3.342c4.137-1.837 18.215-8.275 31.285-14.304s24.51-10.962 25.42-10.962c1.182 0 1.658 6.173 1.658 21.482 0 11.814.273 21.481.611 21.481s6.941-2.87 14.68-6.379l14.068-6.379.393-22.979c.22-12.831.977-22.98 1.72-22.98.728 0 8.122-3.207 16.435-7.127l15.11-7.125v-91.656l-11.1 5.176c-6.106 2.846-14.968 6.641-19.692 8.431-4.729 1.789-14.232 5.86-21.125 9.045l-12.53 5.79v-43.586l11.813-5.285c33.563-15.013 92.377-42.152 125.54-57.927 10.558-5.023 20.708-9.513 22.556-9.977l3.355-.842v21.637c0 11.901.332 21.639.738 21.639s6.945-2.901 14.531-6.445c7.584-3.546 14.023-6.445 14.311-6.445.283 0 .35 41.271.146 91.714l-.367 91.713-15.037 6.916-15.037 6.917-.379 46.4-.377 46.401-15.742 6.992-15.732 6.991v45.238l13.963-6.503c7.68-3.577 16.863-7.673 20.408-9.102 3.545-1.432 11.44-4.896 17.545-7.701l11.1-5.1v46.544l-14.375 6.326c-7.906 3.479-14.979 7.055-15.715 7.94-.738.89-1.52 11.501-1.738 23.586l-.396 21.967-15.037 6.774-15.039 6.775-.395-22.04c-.29-16.267-.854-22.024-2.148-21.978-.965.036-15.609 6.386-32.545 14.11l-30.79 14.046-.38 45.325c-.23 27.717.146 45.323.975 45.323.74 0 7.6-2.899 15.234-6.443 7.64-3.546 14.451-6.445 15.143-6.445.688 0 1.252 10.032 1.252 22.295 0 25.794-2.066 24.085 17.955 14.834 6.691-3.091 12.48-5.621 12.861-5.621.38 0 .69 10.194.69 22.654v22.654l-15.755 6.965-15.754 6.964V856.015l6.088-2.658a1640.662 1640.662 0 0 0 15.887-7.11c5.391-2.448 10.063-4.449 10.383-4.449s.584 9.974.584 22.162v22.164l3.223-1.235c1.771-.678 15.678-7.106 30.902-14.284 15.225-7.18 27.953-13.053 28.285-13.053s.605 10.203.605 22.674v22.677l-32.189 14.408-32.188 14.405-.393-21.895-.395-21.896-31.867 14.436-31.865 14.435-.014 22.293-.014 22.296-31.854 14.406-31.852 14.408-.396-21.211c-.3-16.179-.834-21.21-2.246-21.21-1.605 0-33.795 14.528-76.127 34.363-7.09 3.321-16.11 7.192-20.05 8.603-3.939 1.408-12.8 5.178-19.692 8.374l-12.53 5.815v44.714l-15.1 7.065c-8.304 3.888-15.714 7.068-16.47 7.068-.814 0-1.373-8.732-1.373-21.481 0-11.814-.256-21.482-.566-21.482s-7.4 3.189-15.754 7.091l-15.188 7.091v-22.941c0-26.642 2.307-24.879-19.39-14.81l-13.478 6.256-.396 23.266-.393 23.268-16.107 7.229-16.109 7.232-.004 22.321-.004 22.322-14.682 6.695c-8.072 3.684-15.162 6.688-15.754 6.678-.59-.008-1.072-19.994-1.072-44.413l-.002.006zm17.037-52.953l14.473-6.41V973.723l-15.396 7.028-15.396 7.029-.395 22.381c-.232 13.226.145 22.181.924 21.891.726-.267 7.833-3.373 15.79-6.897zm41.325-64.585l6.088-2.662v-22.249c0-12.237-.482-22.254-1.074-22.258-.59-.007-7.68 3.023-15.754 6.729l-14.68 6.742v45.134l9.666-4.39c5.318-2.41 12.408-5.583 15.754-7.046zm133.171-15.085c7.691-3.654 18.656-8.786 24.367-11.402l10.383-4.756V884.838l-3.223 1.261c-1.77.692-8.86 3.869-15.754 7.061l-12.53 5.8v-22.851c0-12.565-.317-22.849-.706-22.849-.39 0-7.162 2.899-15.049 6.444s-14.979 6.444-15.762 6.444c-.88 0-1.424-8.352-1.424-21.913v-21.914l16.111-7.201 16.111-7.203.395 21.956c.217 12.075.695 21.955 1.066 21.955.861 0 26.23-11.508 36.492-16.555 4.332-2.131 16.256-7.532 26.494-12.007 10.24-4.474 29.092-12.882 41.891-18.686l23.273-10.554v-10.969c0-6.034.426-26.543.945-45.574.8-29.283.633-34.594-1.076-34.538-1.109.035-15.875 6.386-32.81 14.107l-30.792 14.044-.717 24.001-.715 24.003-15.523 7.003c-8.537 3.853-15.77 7.003-16.076 7.003s-.729-10.237-.945-22.751l-.395-22.752-14.324 6.388a6348.633 6348.633 0 0 0-31.83 14.337l-17.508 7.949-.393 22.897-.395 22.896-15.039 6.774-15.037 6.774-.395-21.974c-.262-14.62-.914-21.974-1.949-21.974-1.768 0-61.516 26.974-63.197 28.53-.604.557-.924 21.331-.717 46.166l.38 45.152 15.036-6.86c8.271-3.776 15.504-6.896 16.076-6.938.572-.039 1.215 9.877 1.432 22.034l.396 22.107 19.334-8.565c10.635-4.712 24.813-11.068 31.508-14.125l12.172-5.563.396 22.717.393 22.718 7.82-3.459c4.305-1.895 14.117-6.443 21.81-10.099zM868.2 888.962l6.086-2.661v-23.119c0-20.666-.246-23.023-2.309-22.232-1.268.486-8.355 3.58-15.754 6.874l-13.447 5.989v46.589l9.668-4.391c5.32-2.415 12.407-5.586 15.756-7.049zM638.693 763.62l8.594-4.166.393-22.946.393-22.945 15.361-6.797c8.45-3.737 15.844-6.787 16.436-6.771.592.013 1.072 9.976 1.072 22.139v22.114l15.756-7.312 15.754-7.309v-44.88c0-24.686-.416-44.88-.924-44.88s-7.248 2.898-14.98 6.443c-7.732 3.544-14.408 6.445-14.832 6.445-.426 0-.77-9.99-.77-22.199 0-14.391-.524-22.198-1.487-22.198-.818 0-7.814 2.899-15.545 6.444-7.734 3.544-14.479 6.446-14.984 6.446-.508 0-.924-20.286-.924-45.079v-45.077l-3.275 1.245c-5.42 2.062-58.938 27.567-60.117 28.652-.604.555-.924 21.082-.717 45.619l.38 44.61 30.79-14.106c16.938-7.761 31.275-13.822 31.865-13.472 1.95 1.157 1.275 42.929-.715 44.479-.986.768-15.002 7.387-31.15 14.71-16.146 7.318-30.164 13.938-31.148 14.707-2.244 1.751-2.598 45.442-.365 45.442.783 0 7.875-2.899 15.762-6.443 7.887-3.546 14.658-6.445 15.047-6.445.391 0 .707 9.98.707 22.181v22.182l7.52-3.335c4.127-1.83 11.377-5.206 16.103-7.498zm210.852-95.861l24.67-11.182.395-22.981c.451-26.46-2.066-22.395 20.084-32.426l12.53-5.676v-45.127c0-24.817-.448-45.125-.995-45.125s-15.047 6.25-32.223 13.892l-31.23 13.891v92.688l-16.469 7.739-16.47 7.737v44.469l7.52-3.361c4.135-1.847 18.62-8.391 32.188-14.538zm-49.377-23.382l9.668-4.391v-45.173c0-24.846-.52-45.173-1.156-45.173-1.602 0-60.879 27.116-62.254 28.476-.61.606-.934 11.135-.717 23.396l.395 22.291 15.525-7.007c8.537-3.853 15.79-7.007 16.111-7.007.324 0 .588 9.969.588 22.148v22.147l6.086-2.662c3.35-1.46 10.44-4.632 15.754-7.045zm-98.818-46.571l11.1-5.129v-45.148c0-24.833-.254-45.149-.566-45.149-.31 0-7.4 3.189-15.754 7.091l-15.188 7.091v90.405l4.654-2.015c2.562-1.108 9.652-4.324 15.754-7.146zm-134.414-30.912l15.188-7.091V538.25c0-11.854-.293-21.552-.654-21.552-1.172 0-27.219 11.947-29.064 13.33-1.289.969-1.789 7.274-1.789 22.649 0 11.719.256 21.307.566 21.307.311.002 7.401-3.188 15.753-7.09zm389.853-39.688l14.885-6.682V475.129l-4.654 2.016c-2.56 1.107-9.65 4.322-15.754 7.144l-11.1 5.13v22.234c0 12.229.391 22.235.87 22.235s7.566-3.008 15.753-6.682zm-289.81-6.008l12.531-5.799v-22.264c0-12.246-.295-22.264-.656-22.264s-7.45 3.18-15.754 7.066l-15.098 7.067V529.517l3.223-1.26c1.773-.693 8.861-3.869 15.754-7.059zm226.798-57.779l13.445-5.99V413.687l-6.086 2.66a1550.69 1550.69 0 0 0-15.754 7.05l-9.666 4.39v21.696c0 19.358.248 21.601 2.307 20.811 1.27-.489 8.358-3.582 15.754-6.875zm-163.783-16.978l13.963-6.308v-45.021l-14.68 6.841-14.68 6.839-.395 22.554c-.217 12.404.104 22.293.717 21.978.612-.315 7.395-3.413 15.075-6.883zm228.231-11.667l13.447-5.989V383.676l-15.754 7.311-15.754 7.312v22.118c0 19.747.248 22.022 2.307 21.232 1.27-.486 8.357-3.581 15.754-6.875zm-.4-138.528l13.847-6.345v-21.225c0-11.673-.275-21.224-.61-21.224-.339 0-6.942 2.869-14.68 6.378l-14.069 6.379-.396 21.681c-.217 11.925.158 21.46.834 21.19.673-.269 7.456-3.345 15.073-6.834zm14.17 430.186l.395-22.612 16.111-7.199 16.111-7.2v-46.792l6.088-2.662c3.346-1.463 10.436-4.635 15.754-7.049l9.666-4.391-.023 46.128-.018 46.129-29.96 13.256c-16.48 7.29-30.987 13.648-32.24 14.132-2.037.78-2.24-1.549-1.885-21.74z\"></path><path fill=\"#4F3624\" d=\"M550.613 1078.108c0-24.419-.254-44.396-.564-44.396-.313 0-7.4 3.189-15.754 7.091l-15.188 7.091v-92.357l12.531-5.522c20.928-9.224 18.977-5.928 18.977-32.082v-22.622l15.754-6.963 15.754-6.966v-91.039l-6.086 2.661c-3.348 1.463-10.438 4.635-15.754 7.049l-9.668 4.392v-68.686c0-37.775-.31-68.683-.688-68.683-.38 0-6.17 2.53-12.863 5.622-20.032 9.256-17.959 11.014-17.936-15.195l.02-22.65 13.014-5.694c20.064-8.78 18.455-6.082 18.455-30.907 0-11.771-.55-21.401-1.223-21.401-.674 0-7.43 2.899-15.014 6.445-7.588 3.544-14.143 6.444-14.568 6.444-.424 0-.598-10.429-.38-23.173l.392-23.172 15.04-6.848 15.036-6.849.395-23.057.395-23.056 15.15-7.076c8.332-3.891 15.406-7.074 15.72-7.074s.565 9.989.565 22.198c0 13.969.535 22.198 1.443 22.198.795 0 14.813-6.184 31.15-13.741 16.338-7.556 30.527-14.076 31.531-14.488 1.445-.593 1.744 4.065 1.432 22.321l-.395 23.072-20.05 9.455a14814.037 14814.037 0 0 1-31.866 14.982l-11.814 5.529v45.134c0 42.396.152 45.075 2.506 44.172 1.38-.525 15.395-6.882 31.148-14.122 15.754-7.238 29.13-12.87 29.72-12.516 1.946 1.173 1.274 42.938-.718 44.488-.984.768-15.002 7.387-31.148 14.71-16.146 7.319-30.166 13.938-31.148 14.707-2.244 1.751-2.6 45.443-.367 45.443.783 0 7.875-2.9 15.762-6.444 7.887-3.546 14.645-6.445 15.014-6.445.367 0 .846 9.914 1.063 22.033l.396 22.035 14.32-6.422c7.877-3.532 15.125-7.083 16.111-7.889 1.293-1.06 1.79-7.682 1.79-23.863v-22.396l15.395-6.812c8.47-3.746 15.881-6.803 16.471-6.787.592.013 1.074 9.976 1.074 22.139v22.114l15.754-7.312 15.754-7.309v-44.88c0-24.686-.416-44.88-.924-44.88s-7.248 2.898-14.98 6.443c-7.732 3.544-14.408 6.445-14.832 6.445-.426 0-.77-9.99-.77-22.199 0-14.391-.524-22.197-1.487-22.197-.818 0-7.814 2.898-15.545 6.443-7.734 3.544-14.479 6.446-14.984 6.446-.508 0-.924-20.339-.924-45.198v-45.198l15.754-7.31 15.754-7.311V379.015l15.1-7.066c8.303-3.888 15.715-7.067 16.47-7.067.845 0 1.372 17.344 1.372 45.266 0 35.646.381 45.113 1.791 44.542.984-.398 8.395-3.787 16.47-7.53l14.68-6.807V394.77l15.22-7.125c8.371-3.919 15.457-6.888 15.746-6.597.291.29.69 20.615.893 45.167.203 24.554.781 44.643 1.291 44.646.51 0 7.76-3.19 16.111-7.09l15.188-7.093v-45.535l14.68-6.806c8.074-3.742 15.484-7.131 16.471-7.53 1.387-.562 1.79 4.313 1.79 21.625 0 12.293.483 22.359 1.073 22.37.592.008 7.682-2.997 15.754-6.68l14.68-6.695V381.96l16.436-7.723 16.436-7.723.395-23.064.393-23.066 15.574-7.11c8.564-3.909 15.814-7.109 16.111-7.109.295 0 .537 9.989.537 22.198 0 12.208.484 22.187 1.074 22.172.592-.016 14.932-6.345 31.865-14.063l30.793-14.035.395-23.239.395-23.241 6.051-2.646c3.326-1.454 10.406-4.623 15.73-7.04l9.682-4.396-.37 68.746-.374 68.745-15.037 6.915-15.039 6.917-.375 46.4-.377 46.402-15.746 6.994-15.734 6.991v45.236l13.963-6.502c7.682-3.578 16.865-7.675 20.408-9.104 3.547-1.432 11.441-4.896 17.545-7.7l11.1-5.1v46.542l-14.373 6.327c-7.906 3.479-14.98 7.055-15.717 7.94-.736.889-1.52 11.501-1.736 23.586l-.396 21.967-15.039 6.774-15.037 6.775-.395-22.04c-.29-16.267-.854-22.024-2.148-21.977-.963.035-15.609 6.385-32.545 14.11l-30.79 14.045-.38 45.325c-.229 27.719.146 45.323.975 45.323.742 0 7.6-2.899 15.234-6.443 7.641-3.546 14.451-6.445 15.141-6.445s1.254 10.032 1.254 22.295c0 25.794-2.066 24.086 17.955 14.834 6.693-3.091 12.482-5.621 12.861-5.621s.69 10.194.69 22.654v22.654l-15.755 6.965-15.754 6.964V856.007l6.086-2.659c3.35-1.464 10.5-4.662 15.89-7.109 5.39-2.448 10.062-4.449 10.382-4.449.322 0 .582 9.973.582 22.162v22.164l3.223-1.233c1.773-.68 15.682-7.107 30.904-14.287 15.225-7.179 27.953-13.052 28.287-13.052.332 0 .604 10.203.604 22.674v22.677l-32.189 14.407-32.188 14.406-.393-21.895-.395-21.896-31.867 14.438-31.867 14.435-.012 22.293-.014 22.296-31.854 14.406-31.854 14.408-.395-21.211c-.3-16.179-.834-21.21-2.246-21.21-1.605 0-33.795 14.528-76.127 34.363-7.09 3.323-16.11 7.193-20.05 8.603s-12.8 5.178-19.692 8.374l-12.533 5.815v44.714l-15.098 7.065c-8.303 3.888-15.713 7.068-16.469 7.068-.814 0-1.373-8.732-1.373-21.481 0-11.814-.256-21.482-.566-21.482s-7.4 3.189-15.754 7.091l-15.188 7.091v-22.941c0-26.642 2.307-24.879-19.39-14.81l-13.478 6.256-.396 23.266-.395 23.268-16.107 7.229-16.107 7.232-.004 22.321-.004 22.322-14.682 6.695c-8.074 3.684-15.162 6.688-15.754 6.679-.59-.009-1.072-19.994-1.072-44.413h-.003v.011zm17.037-52.953l14.473-6.41V973.723l-15.396 7.028-15.396 7.029-.395 22.381c-.232 13.226.145 22.181.924 21.891.726-.267 7.833-3.373 15.79-6.897zm41.325-64.585l6.088-2.662v-22.249c0-12.237-.482-22.254-1.074-22.258-.59-.007-7.68 3.023-15.754 6.729l-14.68 6.742v45.134l9.666-4.39c5.318-2.41 12.408-5.583 15.754-7.046zm133.171-15.085c7.691-3.654 18.656-8.786 24.367-11.402l10.383-4.756V884.838l-3.223 1.261c-1.77.692-8.86 3.869-15.754 7.061l-12.53 5.8v-22.851c0-12.565-.317-22.849-.706-22.849-.39 0-7.162 2.899-15.049 6.444s-14.979 6.444-15.762 6.444c-.88 0-1.424-8.352-1.424-21.913v-21.914l16.111-7.201 16.111-7.203.395 21.956c.217 12.075.695 21.955 1.066 21.955.861 0 26.23-11.508 36.492-16.555 4.332-2.131 16.256-7.532 26.494-12.007 10.24-4.474 29.092-12.882 41.891-18.686l23.273-10.554v-10.969c0-6.034.426-26.543.945-45.574.8-29.283.633-34.594-1.076-34.538-1.109.035-15.875 6.386-32.81 14.107l-30.792 14.044-.717 24.001-.715 24.003-15.523 7.003c-8.537 3.853-15.77 7.003-16.076 7.003s-.729-10.237-.945-22.751l-.395-22.752-14.324 6.388a6348.633 6348.633 0 0 0-31.83 14.337l-17.508 7.949-.393 22.897-.395 22.896-15.039 6.774-15.037 6.774-.395-21.974c-.262-14.62-.914-21.974-1.949-21.974-1.768 0-61.516 26.974-63.197 28.53-.604.557-.924 21.331-.717 46.166l.38 45.152 15.036-6.86c8.271-3.776 15.504-6.896 16.076-6.938.572-.039 1.215 9.877 1.432 22.034l.396 22.107 19.334-8.565c10.635-4.712 24.813-11.068 31.508-14.125l12.172-5.563.396 22.717.393 22.718 7.82-3.459c4.305-1.895 14.117-6.443 21.81-10.099zM868.2 888.962l6.086-2.661v-23.119c0-20.666-.246-23.023-2.309-22.232-1.268.486-8.355 3.58-15.754 6.874l-13.447 5.989v46.589l9.668-4.391c5.32-2.415 12.407-5.586 15.756-7.049zm-18.654-221.203l24.67-11.182.395-22.981c.451-26.46-2.066-22.395 20.084-32.426l12.53-5.676v-45.127c0-24.817-.448-45.125-.995-45.125s-15.047 6.25-32.223 13.892l-31.23 13.891v92.688l-16.469 7.739-16.47 7.737v44.469l7.52-3.361c4.135-1.847 18.62-8.391 32.188-14.538zm-49.377-23.382l9.668-4.391v-45.173c0-24.846-.52-45.173-1.156-45.173-1.602 0-60.879 27.116-62.254 28.476-.61.606-.934 11.135-.717 23.396l.395 22.291 15.525-7.007c8.537-3.853 15.79-7.007 16.111-7.007.324 0 .588 9.969.588 22.148v22.147l6.086-2.662c3.35-1.46 10.44-4.632 15.754-7.045zm-98.818-46.571l11.1-5.129v-45.148c0-24.833-.254-45.149-.566-45.149-.31 0-7.4 3.189-15.754 7.091l-15.188 7.091v90.405l4.654-2.015c2.562-1.108 9.652-4.324 15.754-7.146zm-134.414-30.912l15.188-7.091V538.25c0-11.854-.293-21.552-.654-21.552-1.172 0-27.219 11.947-29.064 13.33-1.289.969-1.789 7.274-1.789 22.649 0 11.719.256 21.307.566 21.307.311.002 7.401-3.188 15.753-7.09zm389.853-39.688l14.885-6.682V475.129l-4.654 2.016c-2.56 1.107-9.65 4.322-15.754 7.144l-11.1 5.13v22.234c0 12.229.391 22.235.87 22.235s7.566-3.008 15.753-6.682zm-63.012-63.787l13.445-5.99V413.687l-6.086 2.66a1550.69 1550.69 0 0 0-15.754 7.05l-9.666 4.39v21.696c0 19.358.248 21.601 2.307 20.811 1.27-.489 8.358-3.582 15.754-6.875zm64.448-28.645l13.447-5.989V383.676l-15.754 7.311-15.754 7.312v22.118c0 19.747.248 22.022 2.307 21.232 1.27-.486 8.357-3.581 15.754-6.875zm13.77 291.658l.395-22.612 16.111-7.199 16.111-7.2v-46.792l6.088-2.662c3.346-1.463 10.436-4.635 15.754-7.049l9.666-4.391-.023 46.128-.018 46.129-29.96 13.256c-16.48 7.29-30.987 13.648-32.24 14.132-2.037.78-2.24-1.549-1.885-21.74z\"></path><path fill=\"#362518\" d=\"M582.443 1041.338l.395-22.662 12.617-6.083c6.941-3.345 14.191-6.476 16.111-6.958l3.494-.875v44.131l-15.395 6.982c-8.469 3.839-15.896 7.239-16.508 7.555-.61.317-.93-9.625-.714-22.09zm97.067-44.146c0-12.21-.256-22.198-.566-22.198s-7.4 3.189-15.754 7.091l-15.188 7.091V943.39l13.514-6.271c21.717-10.08 19.426-11.742 19.426 14.087v22.234l9.668-4.392c5.316-2.413 12.406-5.585 15.754-7.048l6.086-2.662v45.914l-15.098 7.068c-8.303 3.888-15.713 7.067-16.469 7.067-.817.003-1.373-8.99-1.373-22.195zm65.88-30.065v-22.188l13.612-6.361c21.715-10.146 19.465-11.836 19.006 14.268l-.396 22.464-15.52 7.003c-8.538 3.854-15.79 7.006-16.112 7.006-.326-.002-.59-9.988-.59-22.192zm-194.777-3.195v-22.76l13.45-5.989c7.395-3.294 14.483-6.388 15.753-6.874 2.061-.79 2.307 1.537 2.307 21.859v22.746l-14.473 6.41c-7.957 3.523-15.047 6.623-15.754 6.887-.72.268-1.283-9.479-1.283-22.282v.003zm323.858-52.311c.104-10.438.586-31.136 1.074-45.994l.887-27.018 15.04-6.771 15.036-6.771.38 45.152c.222 26.753-.17 45.701-.966 46.497-1.607 1.606-28.408 13.878-30.31 13.878-.759 0-1.249-8.139-1.142-18.977v.004h.001zm130.14-17.115v-22.075l13.447-5.99c7.396-3.293 14.484-6.387 15.754-6.874 2.06-.79 2.307 1.477 2.303 21.109l-.004 21.993-13.244 5.997c-7.283 3.298-14.37 6.429-15.748 6.956-2.32.889-2.508-.682-2.508-21.116zm-194.775-2.511v-23.083l6.086-2.662c3.35-1.463 10.438-4.635 15.754-7.049l9.668-4.392v46.497l-14.47 6.409c-7.96 3.524-15.048 6.625-15.755 6.888-.723.269-1.283-9.611-1.283-22.608zm-225.959-80.431l.393-23.074 15.04-6.775 15.036-6.775.396 22.224c.227 12.705-.188 22.806-.967 23.583-1.264 1.266-28.209 13.896-29.643 13.896-.357-.003-.47-10.386-.255-23.079zm194.773-42.992l.396-23.062 13.604-6.201c7.484-3.411 14.41-6.235 15.396-6.277 1.36-.059 1.791 5.292 1.791 22.188v22.266l-12.53 5.8c-6.894 3.188-13.999 6.372-15.79 7.072l-3.258 1.273.391-23.059zm-99.14-.605V745.69l8.234-3.639c4.53-2.001 15.971-7.357 25.422-11.903 9.453-4.545 20.568-9.718 24.705-11.495l7.518-3.233v-46.222l15.396-6.812c8.47-3.747 15.896-6.802 16.506-6.787.611.013.934 10.15.717 22.527-.453 25.904 2.051 21.923-20.086 31.947l-12.53 5.676v44.449l-22.558 10.908c-27.664 13.377-40.32 19.143-42.025 19.143-.72-.004-1.299-9.912-1.299-22.282zm227.713-11.819V733.51l15.09-6.722c8.301-3.697 15.73-6.725 16.506-6.725.893 0 1.271 8.305 1.023 22.357l-.395 22.356-15.523 7.003c-8.537 3.853-15.787 7.003-16.11 7.003-.324.004-.59-10.183-.59-22.634zm97.388-44.805v-22.884l6.086-2.662c3.35-1.463 10.453-4.642 15.791-7.065l9.701-4.404-.393 22.921-.395 22.921-15.396 7.029-15.396 7.028v-22.884h.002zm-453.998-44.661v-46.151l15.26-6.822c8.391-3.751 15.414-6.651 15.61-6.443.194.209.58 20.681.856 45.491l.498 45.111-5.014 2.438c-2.756 1.342-10.006 4.709-16.109 7.482l-11.102 5.045v-46.151h.001zm259.547-49.894l.395-23.073 15.037-6.83c8.27-3.759 15.54-6.374 16.152-5.814.611.561.934 10.634.715 22.389l-.398 21.37-8.592 4.135c-4.727 2.274-11.992 5.657-16.148 7.518l-7.553 3.382.392-23.077zm161.834-27.992l.395-22.426 15.037-6.86c8.27-3.774 15.521-6.894 16.111-6.934.592-.038 1.074 10.115 1.074 22.564v22.64l-15.09 6.722c-8.297 3.698-15.727 6.722-16.506 6.722-.89-.002-1.269-8.329-1.02-22.428zm-259.22-19.259l.392-23.066 31.865-14.433 31.865-14.432v-45.203l-6.086 2.656c-3.348 1.46-14.143 6.343-23.99 10.852-9.846 4.506-24.988 11.279-33.654 15.051-8.664 3.771-19.459 8.524-23.988 10.563l-8.236 3.707V378.334l13.45-5.988c7.395-3.295 14.483-6.389 15.753-6.875 2.09-.801 2.307 3.352 2.307 44.382 0 24.896.482 45.233 1.072 45.194.594-.04 7.844-3.159 16.113-6.932l15.037-6.858.717-23.403.715-23.403 15.04-6.849 15.036-6.849.38 45.06c.226 27.059.917 45.062 1.731 45.062.742 0 8.145-3.182 16.447-7.069l15.098-7.067v-45.333l15.395-6.811c8.471-3.747 15.863-6.802 16.436-6.788.572.013 1.215 9.914 1.432 21.999l.396 21.973 15.037-6.776 15.037-6.778.395 22.041c.217 12.121.98 22.04 1.69 22.04.712 0 7.544-2.9 15.18-6.445 7.638-3.545 14.448-6.443 15.14-6.443.688 0 1.252 9.891 1.252 21.981v21.982l-14.68 6.804c-8.072 3.744-15.469 7.125-16.432 7.517-1.328.538-1.852-4.68-2.148-21.533l-.396-22.245-31.865 14.518-31.865 14.517v44.884l-19.693 8.989c-10.83 4.942-29.035 13.483-40.459 18.979-20.77 9.991-35.652 16.798-36.73 16.798-.323-.005-.405-10.385-.187-23.072zm-193.669-3.193v-21.965l14.682-6.695c8.072-3.683 15.162-6.688 15.754-6.679s1.072 9.898 1.072 21.979v21.961l-14.883 6.683c-8.186 3.675-15.273 6.682-15.754 6.682-.476-.002-.87-9.885-.87-21.966zm128.897-12.52v-22.903l6.086-2.66c3.348-1.464 10.438-4.637 15.754-7.05l9.668-4.392v45.811l-6.088 2.662a1552.36 1552.36 0 0 0-15.752 7.049l-9.668 4.39v-22.907zm-64.125-16.563l.393-22.344 28.342-13.416c15.588-7.378 29.943-13.819 31.904-14.313l3.563-.894-.396 21.938-.396 21.94-29.359 13.758c-16.146 7.566-30.502 14.188-31.9 14.715-2.382.896-2.52-.492-2.15-21.384zm-33.264-31.354v-22.249l6.088-2.659a1581.225 1581.225 0 0 0 15.754-7.051l9.668-4.39V514.8l-14.682 6.695c-8.07 3.683-15.162 6.688-15.754 6.678-.589-.008-1.074-10.028-1.074-22.266zm422.491-100.08c0-15.804-.479-22.317-1.639-22.317-.9 0-7.965 2.898-15.699 6.445-7.73 3.543-14.39 6.444-14.793 6.444-.406 0-.914-9.97-1.13-22.151l-.396-22.153-15.396 7.034-15.395 7.032v-45.806l15.188-7.091c8.354-3.901 15.441-7.091 15.754-7.091s.566 9.989.566 22.198c0 12.208.482 22.187 1.072 22.172.592-.016 14.934-6.313 31.865-13.999l30.793-13.971.395-23.021.393-23.021 14.645-6.68c8.055-3.674 15.13-6.672 15.72-6.663.591.009 1.06 10.167 1.042 22.573l-.033 22.557-15.72 7.004-15.724 7.007v92.041l-14.47 6.408c-7.96 3.525-15.05 6.624-15.755 6.888-.72.269-1.283-9.294-1.283-21.839zm-97.36-1.945l.023-22.521 14.484-6.443c7.965-3.546 15.043-6.66 15.727-6.923.686-.264 1.244 9.596 1.244 21.905v22.383l-12.529 5.801c-6.893 3.189-13.982 6.366-15.754 7.061l-3.223 1.26.028-22.523z\"></path></svg>\n    ";
      var robloxIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1333.35 1333.35\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M272.91 0L0 1060.43l1060.43 272.91L1333.34 272.9 272.91-.01zm316.86 536.5l207 53.25-53.28 207.02-207-53.28 53.28-207z\" fill=\"#1a81e2ff\" fill-rule=\"nonzero\"/></svg>\n  ";
      var itchIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 512 512\" xmlns=\"http://www.w3.org/2000/svg\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" stroke-linejoin=\"round\" stroke-miterlimit=\"2\"><path d=\"M71.19 33.84C49.383 46.788 6.413 96.156 6 109.103v21.433c0 27.168 25.395 51.044 48.448 51.044 27.679 0 50.745-22.944 50.75-50.173 0 27.226 22.274 50.173 49.96 50.173 27.683 0 49.243-22.944 49.243-50.173 0 27.226 23.677 50.173 51.356 50.173h.498c27.679 0 51.378-22.944 51.378-50.173 0 27.226 21.55 50.173 49.23 50.173 27.679 0 49.954-22.944 49.954-50.173 0 27.226 23.065 50.173 50.745 50.173 23.043 0 48.438-23.874 48.438-51.044v-21.433c-.43-12.947-43.395-62.315-65.195-75.263-67.773-2.381-114.787-2.79-184.822-2.782-70.01.005-165.507 1.097-184.797 2.782h.005zm132.863 134.945a57.163 57.163 0 01-9.742 12.541 57.88 57.88 0 01-40.569 16.554 58.039 58.039 0 01-40.65-16.558c-3.777-3.709-6.649-7.675-9.295-12.293v.009c-2.623 4.627-6.309 8.589-10.085 12.302a58.06 58.06 0 01-40.637 16.546c-1.9 0-3.867-.52-5.473-1.063-2.216 23.18-3.165 45.318-3.491 61.487v.09c-.045 8.21-.08 14.948-.122 24.31.43 48.642-4.817 157.618 21.438 184.392 40.682 9.498 115.542 13.817 190.656 13.84h.006c75.11-.023 149.974-4.342 190.657-13.817 26.254-26.78 21.008-135.755 21.437-184.38-.038-9.363-.077-16.106-.12-24.31v-.09c-.339-16.152-1.277-38.297-3.505-61.472-1.605.543-3.588 1.07-5.495 1.07a58.094 58.094 0 01-40.648-16.544c-3.788-3.72-7.462-7.682-10.092-12.302l-.012-.016c-2.639 4.613-5.513 8.586-9.3 12.293a58.046 58.046 0 01-40.644 16.553c-15.791 0-30.122-6.332-40.57-16.553a57.496 57.496 0 01-9.746-12.542 56.959 56.959 0 01-9.647 12.542 58.073 58.073 0 01-40.66 16.553c-.551 0-1.107-.023-1.65-.045h-.018c-.55.022-1.1.045-1.65.045a58.065 58.065 0 01-40.656-16.553 56.851 56.851 0 01-9.656-12.537l-.061-.052zm-41.75 53.985l-.004.019h.045c16.53.036 31.23 0 49.411 19.861 14.337-1.5 29.285-2.252 44.278-2.227h.023c14.992-.023 29.94.746 44.277 2.238 18.204-19.854 32.88-19.81 49.411-19.854h.045v-.023c7.825 0 39.054 0 60.831 61.147l23.4 83.897c17.334 62.414-5.546 63.952-34.085 63.997-42.333-1.56-65.76-32.315-65.76-63.047-23.428 3.844-50.768 5.767-78.097 5.767h-.011c-27.331 0-54.662-1.923-78.085-5.767 0 30.732-23.428 61.464-65.756 63.047-28.539-.045-51.424-1.583-34.086-63.974l23.383-83.897c21.777-61.147 53.029-61.147 60.83-61.147l-.05-.037zm93.712 48.055v.015c-.039.039-44.554 40.922-52.554 55.463l29.149-1.167v25.418c0 1.191 11.7.707 23.405.167h.016c11.707.543 23.405 1.024 23.405-.165v-25.418l29.149 1.162c-8-14.54-52.554-55.46-52.554-55.46v-.013l-.005.004-.011-.006z\" fill=\"#f72a2aff\" fill-rule=\"nonzero\"/></svg>\n  ";
      var amongusIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" id=\"among-us\"><g><path fill=\"#770a39\" d=\"M11.27 31a2.11 2.11 0 0 1-2.37-1.92c-.16-4-.42-16.18.58-24.55a4 4 0 0 1 4-3.53h4.93a8 8 0 0 1 8 7.73c.16 5.88.08 13.89-.25 19.4a2 2 0 0 1-2 1.87h-1.89A2.07 2.07 0 0 1 20 28v-4h-4v4a3 3 0 0 1-3 3Z\"></path><path fill=\"#770a39\" d=\"M9.13 8v.11C9 9.27 9 10.47 8.91 11.72c-.15 3.11-.2 8.54-.15 12.26H5.84a2 2 0 0 1-2-1.87 77.13 77.13 0 0 1 .06-9.76c.09-1 .21-1.88.37-2.73A2 2 0 0 1 6.24 8h2.85Z\"></path><path fill=\"#c01701\" d=\"M9.13 8v.11C9 9.27 9 10.47 8.91 11.72V12h-2.8a2 2 0 0 0-2 1.64c-.16.85-.28 1.77-.37 2.73v2.66c0-1.62 0-5.19.18-6.66.09-1 .21-1.88.37-2.73A2 2 0 0 1 6.24 8h2.85zm12.03 13H15.8c-1.8 0-3.39-3.17-3.89-4.89a34.61 34.61 0 0 1-1.05-13.34 1 1 0 0 1 .93-.77c1.67-.66 4.31-.64 7.13-.48a6.29 6.29 0 0 1 6.69 6.62l-.4 7.08c-.12 2.1-1.89 5.78-4.05 5.78z\"></path><path fill=\"#4a646d\" d=\"M28.48 10.9a3.76 3.76 0 0 1-.8 2 3.62 3.62 0 0 1-2.58 1.35l-6.2.44h-.26a3.65 3.65 0 0 1-3.64-3.6V9a2 2 0 0 1 2-2h7.84a3.67 3.67 0 0 1 3.61 3.12 4.07 4.07 0 0 1 .03.78Z\"></path><path fill=\"#93c8da\" d=\"M28.48 10.9a3.42 3.42 0 0 1-1.38.38l-6.2.44h-.26A3.65 3.65 0 0 1 17 8.09V7h7.84a3.67 3.67 0 0 1 3.61 3.12 4.07 4.07 0 0 1 .03.78Z\"></path><rect width=\"4.44\" height=\"1.6\" x=\"21.55\" y=\"8.57\" fill=\"#fff\" rx=\".8\"></rect><path d=\"M29.44 10A4.67 4.67 0 0 0 27 6.57 9.08 9.08 0 0 0 18.37 0h-4.93a5 5 0 0 0-4.95 4.41c-.11.86-.19 1.74-.27 2.59A1.43 1.43 0 0 0 8 7H6.24a3 3 0 0 0-3 2.46 65.54 65.54 0 0 0-.4 12.74 3 3 0 0 0 3 2.8h1.94c0 1.69.08 3.1.12 4.12A3.09 3.09 0 0 0 11.27 32H13a4 4 0 0 0 4-4v-3h2v3a3.08 3.08 0 0 0 3.27 3h1.85a3 3 0 0 0 3-2.81c.22-3.75.33-9.69.33-13.73a4.79 4.79 0 0 0 1-.9 4.7 4.7 0 0 0 .99-3.56ZM5.84 23a1 1 0 0 1-1-.94 62.15 62.15 0 0 1 .41-12.25 1 1 0 0 1 1-.81h1.81c-.29 4.22-.34 10.5-.31 14Zm19.28 5.07a1 1 0 0 1-1 .93h-1.85c-.76 0-1.27-.4-1.27-1v-3a1 1 0 0 0 0-2h-4a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2h-1.73c-.82 0-1.35-.37-1.37-1-.16-3.95-.43-16 .57-24.39a3 3 0 0 1 3-2.65h4.93a7 7 0 0 1 6.3 4H17a3 3 0 0 0-3 3v2.09a4.64 4.64 0 0 0 4.64 4.64H19l6.2-.44h.27c-.04 3.75-.14 9.35-.35 12.82Zm1.78-15.76a2.63 2.63 0 0 1-1.87 1l-6.2.44a2.57 2.57 0 0 1-2-.7 2.61 2.61 0 0 1-.83-1.96V9a1 1 0 0 1 1-1h7.84a2.65 2.65 0 0 1 2.06 4.31Z\"></path></g></svg>\n    ";
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
      var emailIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22px\" height=\"22px\" viewBox=\"0 -4 32 32\" fill=\"none\"><path d=\"M29.0909 0H2.90909C1.30244 0 0 1.30244 0 2.90909V20.3636C0 21.9703 1.30244 23.2727 2.90909 23.2727H29.0909C30.6976 23.2727 32 21.9703 32 20.3636V2.90909C32 1.30244 30.6976 0 29.0909 0Z\" fill=\"url(#paint0_linear_103_1797)\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M29.0909 0H2.90909C2.52332 0 2.15223 0.0738135 1.79583 0.221441C1.43942 0.369069 1.12483 0.579272 0.852049 0.852054L13.943 13.943C14.2157 14.2157 14.5303 14.4259 14.8867 14.5735C15.2431 14.7212 15.6142 14.7951 16 14.7951C16.3857 14.7951 16.7568 14.7212 17.1133 14.5735C17.4696 14.4259 17.7842 14.2157 18.057 13.943L31.1479 0.852049C30.8752 0.57927 30.5606 0.369067 30.2042 0.22144C29.8478 0.0738131 29.4767 0 29.0909 0Z\" fill=\"url(#paint1_linear_103_1797)\"/><defs><linearGradient id=\"paint0_linear_103_1797\" x1=\"16\" y1=\"0\" x2=\"16\" y2=\"23.2727\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FAC227\"/><stop offset=\"1\" stop-color=\"#FAA627\"/></linearGradient><linearGradient id=\"paint1_linear_103_1797\" x1=\"16.0002\" y1=\"0\" x2=\"16.0002\" y2=\"14.7951\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FCE4B1\"/><stop offset=\"1\" stop-color=\"#FFD272\"/></linearGradient></defs></svg>\n    ";
      var whatsappIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"22px\" height=\"22px\" viewBox=\"0 0 1024 1024\" id=\"whatsapp\"><defs><path id=\"b\" d=\"M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z\"></path></defs><linearGradient id=\"a\" x1=\"512.001\" x2=\"512.001\" y1=\".978\" y2=\"1025.023\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#61fd7d\"></stop><stop offset=\"1\" stop-color=\"#2bb826\"></stop></linearGradient><use xlink:href=\"#b\" fill=\"url(#a)\" overflow=\"visible\"></use><path fill=\"#FFF\" d=\"M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z\"></path></svg>\n    ";
      var telegramIcon = "\n      <svg width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Telegram\" role=\"img\" viewBox=\"0 0 512 512\"><rect width=\"512\" height=\"512\" rx=\"15%\" fill=\"#37aee2\"/><path fill=\"#c8daea\" d=\"M199 404c-11 0-10-4-13-14l-32-105 245-144\"/><path fill=\"#a9c9dd\" d=\"M199 404c7 0 11-4 16-8l45-43-56-34\"/><path fill=\"#f6fbfe\" d=\"M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4\"/></svg>\n    ";
      var googleIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22px\" height=\"22px\" fill=\"none\" viewBox=\"0 0 256 256\" id=\"google\"><rect width=\"224\" height=\"224\" x=\"16\" y=\"16\" fill=\"url(#paint0_linear_531_13626)\" rx=\"70\"></rect><path fill=\"#4285F4\" d=\"M192.224 129.249C192.224 123.786 191.78 119.8 190.821 115.666H128.443V140.321H165.058C164.32 146.449 160.333 155.676 151.475 161.877L151.351 162.702L171.073 177.981L172.44 178.117C184.989 166.528 192.224 149.475 192.224 129.249Z\"></path><path fill=\"#34A853\" d=\"M128.443 194.208C146.381 194.208 161.44 188.302 172.439 178.115L151.475 161.875C145.864 165.787 138.335 168.518 128.443 168.518C110.874 168.518 95.9625 156.929 90.647 140.91L89.8679 140.976L69.36 156.848L69.0918 157.593C80.017 179.296 102.458 194.208 128.443 194.208Z\"></path><path fill=\"#FBBC05\" d=\"M90.6476 140.912C89.245 136.779 88.4333 132.349 88.4333 127.773C88.4333 123.195 89.245 118.766 90.5738 114.633L90.5366 113.752L69.7718 97.626L69.0924 97.9491C64.5896 106.955 62.0059 117.069 62.0059 127.773C62.0059 138.476 64.5896 148.589 69.0924 157.595L90.6476 140.912Z\"></path><path fill=\"#EB4335\" d=\"M128.443 87.0221C140.918 87.0221 149.334 92.4109 154.132 96.9142L172.882 78.6068C161.367 67.903 146.381 61.333 128.443 61.333C102.458 61.333 80.017 76.2445 69.0918 97.9473L90.5732 114.631C95.9625 98.6119 110.874 87.0221 128.443 87.0221Z\"></path><defs><linearGradient id=\"paint0_linear_531_13626\" x1=\"16\" x2=\"208\" y1=\"16\" y2=\"240\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#fff\"></stop><stop offset=\"1\" stop-color=\"#ACCCFF\"></stop></linearGradient></defs></svg>\n    ";
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
        label: "WhatsApp",
        icon: whatsappIcon,
        className: "whatsapp-button",
        onClick: function onClick() {
          return window.open("https://wa.me/+542494060873", "_blank");
        }
      });
      var telegramButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Telegram",
        icon: telegramIcon,
        className: "telegram-button",
        onClick: function onClick() {
          return window.open("https://t.me/choxypop", "_blank");
        }
      });
      var googleButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Google (Reseñas)",
        icon: googleIcon,
        className: "google-button",
        onClick: function onClick() {
          return window.open("https://g.page/r/CWzqR9xPAVS-EBM/review", "_blank");
        }
      });
      var trustpilotButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Trustpilot",
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
      var patreonIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Patreon\" viewBox=\"0 0 512 512\" id=\"patreon\"><rect width=\"512\" height=\"512\" fill=\"#052d49\" rx=\"15%\"></rect><circle cx=\"310\" cy=\"223\" r=\"113\" fill=\"#fff\"></circle><path fill=\"#f96854\" d=\"M165 410V110h-56v300\"></path></svg>\n      ";
      var stickerlyIcon = "\n      <svg width=\"22px\" height=\"22px\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"48\" height=\"48\" fill=\"white\" fill-opacity=\"0.01\"/><path d=\"M24 44C35.0457 44 44 35.0457 44 24C44 24 33.5 27 27 20C20.5 13 24 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z\" fill=\"#2F88FF\" stroke=\"#000000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M44 24L24 4\" stroke=\"#000000\" stroke-width=\"4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>\n    ";
      var paypalIcon = "\n      <svg width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28.87 28.87\" id=\"paypal\"><defs><linearGradient id=\"linear-gradient\" x1=\"-3.04\" x2=\"29.49\" y1=\"-2.41\" y2=\"28.95\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#253b80\"></stop><stop offset=\"1\" stop-color=\"#179bd7\"></stop></linearGradient></defs><g id=\"Layer_2\"><g id=\"Layer_1-2\"><rect width=\"28.87\" height=\"28.87\" rx=\"6.48\" ry=\"6.48\" style=\"fill:url(#linear-gradient)\"></rect><path id=\"_Path_\" d=\"M19.88 10.5l-.05.29c-.66 3.37-2.9 4.53-5.77 4.53H12.6a.71.71 0 0 0-.7.6l-.75 4.74-.21 1.34a.37.37 0 0 0 .37.43h2.59a.62.62 0 0 0 .62-.52v-.13l.48-3.09v-.17a.62.62 0 0 1 .62-.53h.39c2.51 0 4.47-1 5-4a3.38 3.38 0 0 0-.52-3 2.47 2.47 0 0 0-.61-.49z\" style=\"fill:#fff;opacity:.3\"></path><path id=\"_Path_2\" d=\"M19.19 10.23l-.31-.08-.33-.06a8.1 8.1 0 0 0-1.28-.09h-3.9a.62.62 0 0 0-.61.53l-.83 5.25v.15a.71.71 0 0 1 .7-.6h1.46c2.87 0 5.11-1.16 5.77-4.53 0-.1 0-.2.05-.29a3.49 3.49 0 0 0-.54-.23z\" style=\"fill:#fff;opacity:.5\"></path><path id=\"_Path_3\" d=\"M12.75 10.52a.62.62 0 0 1 .61-.53h3.9a8.1 8.1 0 0 1 1.29.09l.33.06.31.08h.15a3.54 3.54 0 0 1 .54.23 3.18 3.18 0 0 0-.67-2.86c-.74-.84-2.08-1.21-3.79-1.21h-5a.71.71 0 0 0-.7.6L7.66 20.17a.43.43 0 0 0 .42.49h3.07l.77-4.89z\" style=\"fill:#fff\"></path></g></g></svg>\n    ";
      var pinterestIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" width=\"22px\" height=\"22px\" viewBox=\"0 0 256 256\" xml:space=\"preserve\"><g style=\"stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;\" transform=\"translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)\"><path d=\"M 44.913 26.682 H 15.231 c -8.28 0 -15.002 -3.611 -15.211 -11.841 C 0.016 14.972 0 15.099 0 15.231 v 31.303 c 8.265 10.233 20.908 16.784 35.087 16.784 h 0.682 c 8.28 0 12.002 3.611 12.211 11.841 c 0.003 -0.131 0.02 -0.258 0.02 -0.39 C 48 83.181 44.181 90 35.769 90 h 39 C 83.181 90 90 83.181 90 74.769 C 90 42.732 69.814 26.682 44.913 26.682 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(216,0,33); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\"/><path d=\"M 90 74.769 L 90 74.769 c 0 -24.901 -20.186 -45.087 -45.087 -45.087 H 15.231 c -8.28 0 -15.002 -6.611 -15.211 -14.841 C 0.016 14.972 0 15.099 0 15.231 C 0 6.819 6.819 0 15.231 0 h 59.538 C 83.181 0 90 6.819 90 15.231 V 74.769\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(230,0,35); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\"/><path d=\"M 0 74.769 V 43.534 c 8.265 10.233 20.908 16.784 35.087 16.784 h 0.682 c 8.28 0 15.002 6.611 15.211 14.841 c 0.003 -0.131 0.02 -0.258 0.02 -0.39 C 51 83.181 44.181 90 35.769 90 H 15.231 C 6.819 90 0 83.181 0 74.769 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(203,0,31); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(1 0 0 1 0 0) \" stroke-linecap=\"round\"/><path d=\"M 11.625 24.41 c 0.675 -0.564 1.768 -2.423 2.014 -3.371 c 0.133 -0.51 0.68 -2.593 0.68 -2.593 c 0.356 0.678 1.395 1.252 2.5 1.252 c 3.289 0 5.66 -3.025 5.66 -6.784 c 0 -3.603 -2.94 -6.299 -6.724 -6.299 c -4.706 0 -7.206 3.16 -7.206 6.6 c 0 1.6 0.852 3.591 2.214 4.225 c 0.207 0.096 0.317 0.054 0.365 -0.146 c 0.036 -0.152 0.22 -0.892 0.303 -1.237 c 0.026 -0.11 0.013 -0.205 -0.076 -0.313 c -0.451 -0.546 -0.812 -1.552 -0.812 -2.489 c 0 -2.405 1.821 -4.733 4.925 -4.733 c 2.679 0 4.556 1.826 4.556 4.437 c 0 2.95 -1.49 4.994 -3.428 4.994 c -1.071 0 -1.872 -0.885 -1.615 -1.971 c 0.307 -1.297 0.903 -2.696 0.903 -3.631 c 0 -0.838 -0.45 -1.536 -1.38 -1.536 c -1.095 0 -1.974 1.132 -1.974 2.649 c 0 0.966 0.326 1.619 0.326 1.619 s -1.081 4.57 -1.279 5.421 c -0.219 0.942 -0.133 2.269 -0.038 3.132 L 11.625 24.41 z\" style=\"stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255,255,255); fill-rule: nonzero; opacity: 1;\" transform=\" matrix(2.81 0 0 2.81 1.4065934065934016 1.4065934065934016) \" stroke-linecap=\"round\"/></g></svg>\n    ";
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
      var pinterestButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Pinterest",
        icon: pinterestIcon,
        className: "pinterest-button",
        onClick: function onClick() {
          return window.open("https://pinterest.com/choxypop", "_blank");
        }
      });
      var miscBlock = new _base_Block_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
      miscBlock.addButton(patreonButton);
      miscBlock.addButton(stickerlyButton);
      miscBlock.addButton(paypalButton);
      miscBlock.addButton(pinterestButton);
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
      var whatsappIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"22px\" height=\"22px\" viewBox=\"0 0 1024 1024\" id=\"whatsapp\"><defs><path id=\"b\" d=\"M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z\"></path></defs><linearGradient id=\"a\" x1=\"512.001\" x2=\"512.001\" y1=\".978\" y2=\"1025.023\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#61fd7d\"></stop><stop offset=\"1\" stop-color=\"#2bb826\"></stop></linearGradient><use xlink:href=\"#b\" fill=\"url(#a)\" overflow=\"visible\"></use><path fill=\"#FFF\" d=\"M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z\"></path></svg>\n    ";
      var minecraftIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"22\" height=\"22\" viewBox=\"0 0 1037 1139.627\" id=\"minecraft\"><path fill=\"#97C767\" d=\"M483.302 1125.112c-16.934-7.874-55.926-25.793-86.645-39.818-85.554-39.063-157.734-72.115-170.429-78.038-6.3-2.941-19.834-9.09-30.074-13.664-10.239-4.575-36.342-16.468-58.003-26.43-21.66-9.961-61.457-28.155-88.438-40.434l-49.05-22.32V170.339l4.654-1.465c5.827-1.834 291.854-95.833 418.858-137.65L519.007-.001l165.107 54.402c90.81 29.92 207.48 68.356 259.273 85.411l94.166 31.01-.36 366.534-.358 366.534-66.596 30.237c-36.629 16.632-153.285 69.688-259.238 117.902-105.955 48.214-193.602 87.604-194.776 87.53-1.17-.072-15.989-6.572-32.922-14.447z\"></path><path fill=\"#88B858\" d=\"M446.067 1107.669a86781.035 86781.035 0 0 0-133.192-60.988c-35.052-16.004-73.075-33.6-84.498-39.102-11.42-5.503-25.92-12.106-32.224-14.678-6.302-2.57-39.169-17.371-73.04-32.893-33.87-15.521-74.475-34.09-90.229-41.265C17.13 911.57 3.435 905.098 2.45 904.366c-1.42-1.06-1.79-55.621-1.79-264.44 0-144.708.428-309.505.95-366.215l.95-103.107 105.391-34.701a197643.512 197643.512 0 0 1 167.687-55.136 135816.455 135816.455 0 0 0 152.594-50.201L518.523.8l28.58 9.215 28.575 9.216-12.53 4.129c-6.894 2.271-12.534 4.5-12.534 4.954 0 .453 5.965 2.78 13.248 5.172l13.248 4.349 13.131-4.681 13.133-4.68 60.998 20.09c33.551 11.05 60.678 20.611 60.283 21.247-.393.638-5.803 2.967-12.02 5.177l-11.312 4.019 14.654 4.74 14.658 4.739 9.885-3.771c5.436-2.075 12.137-4.021 14.896-4.325 3.688-.405 27.12 6.765 88.65 27.132l83.641 27.683-7.734 3.3c-4.254 1.814-11.924 5.251-17.043 7.634a806.896 806.896 0 0 1-18.617 8.325c-5.818 2.492-8.504 4.293-7.162 4.8 9.48 3.578 28.215 9.42 30.211 9.42 1.354 0 6.551-1.832 11.545-4.072 4.996-2.238 11.664-4.894 14.814-5.898 3.15-1.004 11.016-4.07 17.477-6.812l11.75-4.982 34.797 11.599c19.14 6.379 35.926 11.599 37.307 11.599 2.383 0 2.49 18.157 2.145 366.686l-.357 366.687-148.23 67.305c-81.525 37.019-154.674 70.274-162.55 73.904-54.165 24.946-208.768 94.983-209.56 94.929-.538-.04-32.23-14.421-70.433-31.96zM388.46 461.92l-.396-21.838-5.013-2.532c-6.315-3.188-39.763-18.861-49.804-23.337l-7.554-3.366.393 22.234.396 22.234 30.074 14.103c16.542 7.757 30.576 14.157 31.188 14.224.611.064.932-9.71.716-21.722zm-64.127-75.599v-21.532l-6.087-2.66c-3.347-1.464-10.437-4.637-15.754-7.05l-9.667-4.391v43.854l13.963 6.551c7.68 3.603 14.77 6.599 15.754 6.658 1.36.079 1.791-5.101 1.791-21.43zm140.378-21.505c9.001-3.979 16.706-7.767 17.122-8.416.415-.648 7.821-4.192 16.461-7.875s15.981-6.969 16.315-7.303c.557-.555-11.487-6.355-26.594-12.809l-6.028-2.575-17.13 7.353c-9.42 4.043-17.707 7.354-18.415 7.354-1.709 0-33.7-14.273-35.219-15.714-.652-.618 6.276-4.229 15.396-8.025 9.121-3.794 16.582-7.303 16.582-7.797 0-1.024-30.035-14.343-32.225-14.288-.787.02-9.146 3.193-18.574 7.054l-17.144 7.021 8.422 3.723c21.523 9.52 25.053 11.27 24.507 12.148-.319.519-8.354 4.096-17.854 7.95s-17.076 7.206-16.835 7.446c1.766 1.768 69.614 31.898 71.916 31.938 1.614.026 10.296-3.204 19.297-7.185zM98.051 328.31v-22.258l-9.668-4.389c-5.315-2.416-12.405-5.589-15.754-7.052l-6.086-2.659.002 22.505.003 22.506 14.677 6.729c8.071 3.701 15.16 6.763 15.75 6.803.593.041 1.074-9.943 1.075-22.185zm548.87-11.533c8.077-3.618 15.653-7.366 16.835-8.329 1.182-.962 8.455-4.551 16.164-7.975 7.711-3.426 13.512-6.662 12.891-7.193-.619-.531-7.992-3.733-16.38-7.115-13.823-5.574-15.708-5.996-20.052-4.491-9.336 3.231-62.799 26.437-62.789 27.25.018 1.348 31.928 14.282 35.428 14.361 1.767.04 9.822-2.888 17.902-6.508zm134.595-31.014c7.381-3.348 13.525-6.731 13.656-7.519.13-.787-7.076-4.193-16.012-7.566l-16.248-6.134-15.207 6.696c-8.363 3.686-15.205 7.103-15.205 7.596 0 1.136 29.97 12.803 33.193 12.925 1.323.048 8.442-2.651 15.823-5.998zm-379.488-16.617c5.317-2.08 9.667-4.21 9.667-4.734 0-.526-6.752-3.751-15.006-7.168-8.25-3.415-15.019-6.708-15.037-7.315-.018-.608 1.418-1.688 3.19-2.4 7.262-2.919 30.023-11.716 45.47-17.572 9.06-3.437 16.186-6.866 15.833-7.623-1.266-2.737-26.45-12.194-30.128-11.314-3.146.753-39.48 14.774-57.579 22.216-3.688 1.52-7.522 2.762-8.519 2.762-2.6 0-37.049 13.227-37.018 14.212.014.453 7.586 4.011 16.827 7.905a6475.423 6475.423 0 0 1 32.5 13.824l15.698 6.741 7.216-2.875a3419.758 3419.758 0 0 1 16.886-6.659zm308.99-12.394c6.695-2.929 12.682-5.79 13.301-6.362.621-.57-6.79-4.063-16.469-7.758l-17.6-6.719-16.463 7.111c-11.967 5.169-15.762 7.383-13.889 8.103 1.418.544 9.473 3.715 17.896 7.046 10.426 4.122 16.236 5.713 18.186 4.979 1.577-.593 8.342-3.474 15.038-6.4zm134.67-.222c7.912-3.672 13.877-7.118 13.256-7.66-.619-.542-8.352-3.611-17.18-6.821l-16.05-5.836-15.015 6.662c-8.256 3.664-14.686 6.985-14.29 7.383.817.816 32.188 12.756 33.827 12.873.588.042 7.54-2.927 15.452-6.601zm-310.182-13.612c8.31-3.281 15.104-6.344 15.1-6.804-.004-.458-7.143-3.652-15.863-7.097-8.723-3.443-15.324-6.777-14.674-7.409.652-.632 7.631-3.721 15.51-6.862 10.924-4.358 13.643-5.946 11.457-6.691-1.574-.538-13.793-5.465-27.152-10.951-35.376-14.525-33.197-14.201-50.63-7.544-8.026 3.063-14.585 5.904-14.578 6.312.006.407 13.89 6.158 30.847 12.782 16.958 6.622 31.131 12.524 31.497 13.116.366.59-6.422 3.872-15.084 7.292-8.662 3.419-15.748 6.54-15.748 6.935 0 1.014 28.833 12.584 31.776 12.751 1.337.074 9.231-2.548 17.542-5.83zm236.924-12.88c7.578-3.277 14.744-6.752 15.924-7.723 1.184-.971 7.805-4.204 14.711-7.186 6.912-2.982 12.068-5.847 11.46-6.363-.608-.518-7.774-3.291-15.925-6.164l-14.816-5.221-13.395 5.701c-7.367 3.136-14.146 5.703-15.068 5.703-3.53 0-32.998 13.308-31.879 14.396 1.492 1.452 30.574 12.575 33.234 12.712 1.09.056 8.178-2.579 15.754-5.855zm-537.252-27.612c8.771-3.104 15.685-6.068 15.364-6.586-.32-.52-6.383-3.375-13.47-6.348l-12.892-5.405-15.872 5.434c-8.728 2.988-16.154 5.894-16.502 6.455-.61.989 25.014 12.876 26.627 12.354.442-.146 7.976-2.802 16.745-5.904zm399.668.441c8.125-3.261 14.248-6.4 13.605-6.978-.64-.578-8.004-3.614-16.36-6.748l-15.196-5.698-14.164 5.618c-7.79 3.091-14.67 6.109-15.29 6.709-1.089 1.053 26.126 12.537 30.485 12.864 1.181.09 8.797-2.505 16.92-5.767zm262.707.371c4.926-2.264 10.123-4.515 11.553-5.003 4.51-1.542 1.4-3.396-14.676-8.753l-15.629-5.209-12.283 5.336c-6.756 2.934-12.283 5.763-12.283 6.285 0 .524 2.096 1.656 4.654 2.515 2.561.86 9.166 3.187 14.682 5.17 5.514 1.982 11.15 3.645 12.525 3.69 1.377.045 6.531-1.767 11.457-4.031zM156.948 183.63c19.17-6.745 35.054-12.464 35.297-12.708s-5.867-3.133-13.578-6.42l-14.02-5.98-18.619 6.562a7144.685 7144.685 0 0 1-35.566 12.408c-9.32 3.217-16.41 6.367-15.754 7.004 1.618 1.567 23.695 11.306 25.747 11.358.9.022 17.323-5.479 36.493-12.224zm167.733-13.311c17.127-6.02 31.145-11.269 31.15-11.663.005-.396-6.275-3.157-13.955-6.138l-13.963-5.42-12.173 4.232c-25.516 8.869-49.236 17.515-51.428 18.74-1.924 1.077-1.722 1.497 1.302 2.692 1.97.78 8.092 3.352 13.605 5.716 5.516 2.364 10.991 3.958 12.173 3.542l33.29-11.701zm244.79 5.458c20.244-8.281 35.158-14.147 38.787-15.255 3.863-1.179 2.986-3.021-2.146-4.524-2.56-.75-8.844-2.969-13.963-4.928a5203.447 5203.447 0 0 0-25.475-9.632c-8.89-3.336-15.814-6.416-15.387-6.844.426-.426 13.64-5.703 29.36-11.724l28.585-10.947-14.439-5.339-14.439-5.34-26.684 9.596c-14.678 5.279-28.297 10.208-30.268 10.957-3.23 1.229-2.26 1.842 10.025 6.311 14.416 5.245 17.551 7.071 14.203 8.271-1.117.399-7.775 2.893-14.799 5.539l-12.768 4.81 15.203 5.606c8.361 3.084 14.752 6.009 14.2 6.498-.55.487-7.314 3.305-15.03 6.26-7.715 2.955-13.633 5.774-13.148 6.271.891.911 27.801 11.445 29.564 11.572.525.038 8.902-3.182 18.62-7.158zm-163.363-34.884c7.405-2.683 21.357-7.646 31.005-11.031 9.646-3.386 17.06-6.564 16.47-7.065-1.734-1.473-25.37-9.971-27.638-9.938-1.144.019-9.166 2.628-17.83 5.804-8.665 3.173-21.03 7.614-27.48 9.871-18.29 6.399-18.203 6.055-3.07 11.926 7.351 2.853 13.75 5.214 14.222 5.248.47.033 6.916-2.133 14.321-4.815zm346.087-11.847c7.32-2.896 12.811-5.726 12.201-6.284-.607-.559-7.625-3.131-15.592-5.716l-14.484-4.698-13.068 4.896c-7.189 2.692-13.076 5.276-13.084 5.74-.014.666 27.223 10.854 30.035 11.234.377.051 6.674-2.277 13.992-5.172zM573.066 80.121c2.385-1.334 2.271-1.591-1.252-2.931-2.125-.809-8.357-2.835-13.855-4.505l-9.994-3.035-11.922 4.271C495.7 88.372 492.597 89.657 495.44 90.782c1.556.616 7.355 2.805 12.891 4.868l10.062 3.749 26.032-8.909c14.315-4.899 27.204-9.564 28.641-10.369zm92.112 9.749c.006-.421-5.965-2.731-13.268-5.137l-13.277-4.374-11.785 4.388c-6.48 2.412-11.785 4.75-11.785 5.191 0 .443 5.934 2.745 13.182 5.116l13.182 4.311 11.871-4.367c6.528-2.402 11.874-4.709 11.88-5.128zM380.46 84.718c19.703-7.083 19.008-5.994 6.888-10.797-5.907-2.341-12.108-4.292-13.779-4.335-1.672-.043-9.338 2.02-17.034 4.583-14.537 4.844-14.959 5.539-5.242 8.635 2.108.673 6.41 2.196 9.561 3.388 7.58 2.864 7.528 2.868 19.606-1.474zm76.713-5.714c16.075-5.213 28.691-9.987 28.037-10.608-.656-.621-6.668-3.034-13.365-5.361l-12.174-4.23-12.173 4.086c-6.695 2.249-13.46 4.687-15.038 5.419-1.575.733-3.83 1.275-5.013 1.206-3.02-.176-25.778 7.535-25.778 8.734 0 .754 22.6 9.686 25.67 10.144.333.048 13.758-4.176 29.834-9.39z\"></path><path fill=\"#B7835A\" d=\"M446.067 1107.669a86781.035 86781.035 0 0 0-133.192-60.988c-35.052-16.004-73.075-33.6-84.498-39.102-11.42-5.503-25.92-12.106-32.224-14.678-6.302-2.57-39.169-17.371-73.04-32.893-33.87-15.521-74.475-34.09-90.229-41.265C17.13 911.57 3.435 905.098 2.45 904.366 1.028 903.305.66 841.823.66 605.316c0-163.743.311-297.714.69-297.714.38 0 6.167 2.53 12.862 5.624 20.134 9.302 18.092 11.05 17.634-15.097l-.396-22.579-14.644-6.531-14.645-6.53-.035-46.073-.036-46.074 4.655-1.021c2.561-.562 18.833-5.783 36.162-11.604 80.786-27.137 236.118-77.826 238.491-77.826 1.455 0 7.745 1.996 13.978 4.435l11.331 4.437 15.586-4.841 15.585-4.839-11.429-4.096c-6.286-2.251-11.938-4.544-12.56-5.095-.925-.818 137.064-47.229 191.608-64.448l14.32-4.521 27.213 9.188 27.211 9.188-12.529 4.095c-6.895 2.251-12.533 4.466-12.533 4.92 0 .453 6.141 2.847 13.646 5.319l13.643 4.494 13.926-4.676 13.924-4.678 59.348 19.857c32.64 10.922 59.563 20.076 59.828 20.342.264.264-3.564 1.948-8.506 3.74-17.955 6.512-17.922 5.48-.393 11.438l15.756 5.355 11.457-4.278c6.301-2.354 12.752-4.563 14.336-4.91 1.584-.349 36.387 10.412 77.338 23.911 40.951 13.5 78.484 25.842 83.408 27.431 4.922 1.586 8.951 3.07 8.951 3.299s-11.604 5.45-25.779 11.604c-14.178 6.154-25.779 11.555-25.775 12 0 .446 7.416 3.354 16.48 6.46 9.06 3.106 15.987 6.059 15.392 6.56-.596.502-6.674 3.356-13.506 6.346-8.459 3.699-13.713 5.201-16.469 4.708-7.29-1.305-31.898-10.344-31.529-11.579.197-.665 6.141-3.677 13.205-6.697 11.783-5.033 12.55-5.6 9.266-6.836-1.969-.74-9.703-3.475-17.186-6.073l-13.606-4.729-27.908 11.796c-15.35 6.488-28.076 11.962-28.279 12.167-.205.205 4.943 2.194 11.438 4.424 6.496 2.229 15.543 5.8 20.104 7.938 4.564 2.139 14.875 6.008 22.914 8.601 8.041 2.593 22.678 7.51 32.523 10.928 9.846 3.42 18.42 6.215 19.055 6.214.633-.001 11.268-4.6 23.631-10.217 12.361-5.616 24.682-11.149 27.377-12.295 6.11-2.596 5.291-3.182-12.775-9.153-7.484-2.475-14.115-4.959-14.738-5.522-.62-.563 5.055-3.748 12.613-7.075l13.74-6.05 17.463 5.65a5540.804 5540.804 0 0 0 36.244 11.547l18.78 5.898 12.395-5.727c6.818-3.151 13.354-5.727 14.521-5.727 1.873 0 2.082 43.314 1.766 366.685l-.359 366.687-148.23 67.305c-81.525 37.019-154.674 70.275-162.55 73.904-54.165 24.946-208.769 94.983-209.56 94.929-.537-.04-32.229-14.421-70.432-31.96zM388.78 461.441v-22.317l-15.753-7.367-15.754-7.367v-45.341l-10.779-4.912c-5.929-2.702-17.648-8.217-26.042-12.256-8.394-4.038-18.043-8.534-21.443-9.993l-6.183-2.649v91.083l15.296 6.866c8.415 3.776 15.986 7.509 16.828 8.294 1.891 1.759 59.563 27.899 62.041 28.119 1.361.121 1.79-5.174 1.79-22.16zm111.708-79.998a23136.21 23136.21 0 0 1 35.403-15.402c9.625-4.179 17.68-8.111 17.9-8.743.38-1.08-65.022-30.355-71.205-31.874-1.61-.396-10.343 2.479-19.972 6.58l-17.107 7.282-6.52-2.485c-3.59-1.368-11.356-4.686-17.263-7.374l-10.734-4.887 17.512-7.219c9.631-3.969 17.233-7.666 16.895-8.212-.338-.548-15.144-7.395-32.899-15.215-29.896-13.167-35.789-16.367-30.142-16.367 1.193 0 3.287-.594 4.654-1.32 4.493-2.387 25.361-10.151 27.26-10.146 1.02.004 8.738 2.908 17.15 6.453 8.411 3.544 15.844 6.445 16.517 6.445.674 0 8.896 3.292 18.271 7.315l17.047 7.316 16.136-6.733c8.875-3.703 16.664-7.232 17.31-7.845 1.02-.968-28.576-14.422-31.563-14.35-.616.015-8.893-3.25-18.394-7.258l-17.275-7.286-17.582 7.014-17.583 7.012-15.599-6.558c-8.579-3.605-15.61-6.945-15.626-7.419-.017-.476 14.633-6.554 32.553-13.507 17.92-6.955 33.066-13.043 33.656-13.531 1.263-1.042-28.714-13.511-31.866-13.253-1.182.095-13.104 4.45-26.495 9.678-13.39 5.226-28.73 11.151-34.092 13.165l-9.746 3.663-14.6-6.156c-8.032-3.388-15.247-6.625-16.035-7.199-.787-.571-7.877-3.762-15.754-7.087-7.876-3.326-14.51-6.217-14.74-6.425-.229-.207 7.003-3.127 16.072-6.486 9.067-3.36 16.218-6.55 15.886-7.087-.333-.537-6.778-3.472-14.323-6.521-10.439-4.22-13.168-5.853-11.416-6.833 1.94-1.086 54.906-19.773 62.584-22.081 1.38-.416 2.506-1.214 2.506-1.778 0-1.636-26.153-11.531-30.479-11.531-2.163 0-10.85 2.604-19.308 5.786a4182.589 4182.589 0 0 1-31.077 11.524c-8.637 3.156-15.892 5.928-16.124 6.158-.23.231 5.754 2.916 13.298 5.965 7.545 3.049 13.981 5.97 14.302 6.488.322.519-5.365 3.055-12.633 5.635-7.27 2.581-14.83 5.29-16.799 6.021-3.264 1.214-2.376 1.843 10.024 7.096 7.484 3.17 14.12 6.244 14.747 6.833.627.587-7.429 4.113-17.9 7.837a62116.368 62116.368 0 0 0-35.81 12.743c-9.222 3.284-16.312 6.41-15.755 6.947 2.813 2.71 28.501 12.773 31.04 12.158 2.83-.687 5.76-1.761 22.247-8.154 4.333-1.68 8.927-3.377 10.211-3.771 3.011-.925 34.54 12.635 32.987 14.188-.646.646-8.535 4.007-17.53 7.467l-16.359 6.291 6.445 2.803c3.545 1.54 10.11 4.491 14.587 6.557 4.48 2.065 8.99 3.75 10.025 3.741 1.037-.007 8.968-2.906 17.626-6.445 8.66-3.537 16.604-6.43 17.654-6.43 2.688 0 33.197 13.288 33.197 14.457 0 .529-7.732 3.986-17.186 7.683-9.452 3.696-17.187 7.225-17.187 7.837 0 1.14 29.073 14.421 31.563 14.421 3.143 0 34.366 14.839 33.315 15.833-.632.597-8.443 4.13-17.358 7.852-9.298 3.88-15.677 7.3-14.954 8.021.69.691 19.264 9.316 41.273 19.168 22.011 9.851 45.495 20.421 52.19 23.485 6.695 3.065 12.817 5.638 13.604 5.716.798.079 9.497-3.371 19.343-7.666zm-391.524-71.567c5.965 2.719 17.067 7.916 24.67 11.55 14.32 6.843 25.796 11.958 26.834 11.958.328 0 .598-9.697.598-21.548v-21.549l-12.53-5.795c-6.895-3.188-15.433-6.971-18.978-8.407-6.308-2.561-22.245-10.22-39.385-18.929-4.726-2.4-11.985-5.885-16.13-7.741l-7.54-3.375.378 45.874.377 45.874 15.038 6.853 15.038 6.854.393-23.28.393-23.279 10.846 4.943-.002-.003zm179.565-8.092c-1.97-1.229-9.235-4.559-16.147-7.395l-12.568-5.156.395 22.303.393 22.304 15.038 6.775 15.038 6.776.716-21.684.717-21.685-3.582-2.238zm394.742 28.649c8.17-3.814 14.855-7.189 14.855-7.5 0-.309-7.088-3.341-15.754-6.735-8.664-3.396-15.754-6.602-15.754-7.125 0-.522 6.607-3.846 14.68-7.384 8.074-3.537 14.45-7.038 14.166-7.777-.28-.74-8.27-4.439-17.756-8.223l-17.244-6.878-34.117 14.726c-18.764 8.099-33.613 15.229-32.996 15.847.62.618 16.152 7.214 34.521 14.659 18.365 7.445 33.748 13.89 34.18 14.319 1.13 1.13 4.581-.157 21.22-7.929zm-363.866-14.999c-1.529-1.157-3.785-2.05-5.014-1.985-1.228.064-.298 1.001 2.064 2.083 5.553 2.542 6.402 2.515 2.95-.098zm462.83-29.52c8.966-4.054 15.782-7.836 15.15-8.41-1.52-1.371-32.3-12.864-34.452-12.864-2.379 0-31.867 13.122-31.867 14.18 0 .667 31.127 13.694 34.262 14.338.334.068 7.94-3.191 16.906-7.244zM708.67 258.18c8.316-3.553 17.242-7.68 19.834-9.17 4.38-2.52 14.2-6.71 39.084-16.68 5.514-2.208 15.381-6.479 21.926-9.484 6.545-3.008 12.164-5.469 12.49-5.469 1.471 0 16.342-7.298 16.98-8.336.396-.641-7.039-3.935-16.523-7.318-16.672-5.95-17.42-6.084-22.48-4.021-2.879 1.173-14.256 5.807-25.283 10.296-11.027 4.488-25.852 10.952-32.939 14.362s-24.094 10.753-37.787 16.317c-24.197 9.83-27.074 11.174-25.824 12.063.885.629 33.383 13.602 34.471 13.761.51.078 7.735-2.769 16.051-6.321zm138.111-1.665c9.188-4.19 14.047-7.116 12.891-7.763-1.02-.569-9.117-3.706-17.99-6.971l-16.133-5.935-15.088 6.734c-8.299 3.704-14.572 7.234-13.94 7.848 1.515 1.473 30.612 12.54 33.368 12.692 1.18.066 8.783-2.906 16.892-6.605zm-310.13-13.536c8.47-3.437 15.392-6.574 15.388-6.974-.004-.4-7.129-3.537-15.832-6.974-8.7-3.437-15.557-6.515-15.23-6.841s7.512-3.375 15.967-6.773l15.375-6.182-16.604-6.313c-9.133-3.473-16.594-6.635-16.58-7.028.03-.731 27.594-11.798 31.48-12.637 4.2-.906 63.017-23.86 62.985-24.582-.014-.403-13.895-5.833-30.846-12.063-16.95-6.231-30.31-11.755-29.689-12.275s13.535-5.672 28.697-11.45c15.164-5.779 27.566-10.888 27.563-11.356-.008-1.025-25.86-10.157-28.76-10.157-1.547 0-42.98 14.445-60.027 20.93-1.234.47 4.14 3.142 12.645 6.286 8.135 3.008 15.045 5.723 15.354 6.031.307.308-6.174 3.025-14.404 6.042-8.229 3.014-14.63 6.019-14.227 6.674.406.655 2.81 1.81 5.34 2.564 13.846 4.126 26.418 10.191 21.123 10.191-2.293 0-24.359 8.508-26.744 10.312-1.765 1.334-15.975 7.134-26.146 10.668-7.419 2.579-8.207 2.443-26.08-4.517l-13.755-5.356-14.172 5.291c-7.794 2.909-14.649 5.756-15.235 6.323-.586.568 12.604 6.579 29.311 13.358 16.707 6.777 30.545 12.873 30.752 13.542.208.672-6.472 3.839-14.842 7.042l-15.217 5.822 14.89 6.151c8.188 3.385 15.534 6.671 16.322 7.305 2.667 2.142 32.928 14.196 34.37 13.69.788-.273 8.361-3.309 16.827-6.744zm-373.012-13.427c8.825-3.149 16.045-6.067 16.045-6.48 0-.416-6.454-3.561-14.342-6.992l-14.339-6.239-15.378 5.381c-20.729 7.253-20.325 6.906-12.267 10.461a1891.36 1891.36 0 0 1 14.793 6.621c4.333 1.965 8.23 3.438 8.66 3.274.433-.165 8.005-2.875 16.828-6.026zm73.17-27.32c8.97-3.258 15.706-6.297 14.97-6.752-.736-.456-7.259-3.396-14.495-6.534l-13.156-5.706-17.198 5.97c-9.457 3.284-17.2 6.378-17.208 6.875-.007.498 5.626 3.305 12.52 6.238 6.892 2.937 13.12 5.887 13.834 6.56.718.673 2.006.784 2.865.25.857-.537 8.898-3.641 17.868-6.901zm-123.338-3.375c45.624-15.254 80.71-27.611 80.104-28.216-.3-.301-6.114-2.958-12.919-5.906-6.809-2.948-12.549-5.952-12.76-6.674-.213-.721 14.361-6.228 32.388-12.237l32.772-10.924-12.604-5.336-12.606-5.336-35.206 11.38c-19.362 6.259-42.778 13.728-52.034 16.597-9.255 2.868-16.822 5.653-16.815 6.192.007.537 5.193 3.184 11.526 5.879 6.333 2.698 11.81 5.382 12.17 5.966.36.583-15.132 6.324-34.429 12.756-19.295 6.432-35.387 12.188-35.76 12.792-.486.784 21.892 11.846 26.096 12.898.213.053 13.745-4.371 30.077-9.831zm519.1 5.882c4.942-2.224 11.118-4.895 13.72-5.936 2.604-1.039 4.217-2.342 3.582-2.896-.635-.552-8.348-3.65-17.139-6.886l-15.982-5.882-15.525 6.241c-8.537 3.433-15.523 6.674-15.523 7.204 0 .528 3.223 2.15 7.16 3.605a786.251 786.251 0 0 1 14.322 5.483c9.925 3.934 14.98 3.75 25.384-.933zm65.304-27.737l14.785-6.033-15.859-5.74c-8.723-3.157-15.859-6.199-15.859-6.759 0-.562 6.152-3.404 13.672-6.317 7.52-2.914 13.457-5.511 13.195-5.771-.264-.264-7.543-3.002-16.178-6.091l-15.7-5.613-13.37 5.188c-7.354 2.854-13.393 5.833-13.418 6.621-.027.788 6.15 3.612 13.727 6.278 7.578 2.664 13.775 5.312 13.775 5.881s-5.639 3.172-12.53 5.782-13.01 5.146-13.595 5.637c-.803.671 27.908 12.267 31.854 12.864.394.058 7.37-2.609 15.501-5.927zm-258.969-25.254c4.333-1.563 9.167-3.276 10.741-3.808 2.554-.859 2.321-1.257-2.147-3.656-2.757-1.48-5.979-2.758-7.16-2.839-1.18-.081-5.289-1.565-9.126-3.299l-6.978-3.15 15.852-5.671c8.72-3.118 15.64-5.882 15.38-6.141-.258-.258-6.899-2.922-14.759-5.917l-14.287-5.445-15.597 5.556c-8.579 3.055-21.932 7.788-29.67 10.518-20.576 7.259-20.354 6.709-5.065 12.566 48.938 18.753 46.036 17.841 50.646 15.92 2.36-.987 7.84-3.072 12.17-4.634zm314.723-22.702c7.318-2.896 12.81-5.704 12.201-6.238-.609-.535-7.916-3.362-16.238-6.286-16.525-5.804-14.738-5.839-30.697.593a429.984 429.984 0 0 1-7.52 2.905c-2.56.962-4.654 2.263-4.654 2.89 0 1.166 27.658 11.086 31.48 11.29 1.166.061 8.108-2.259 15.428-5.154zm-65.336-22.302c6.975-2.562 12.686-5.002 12.69-5.426.005-.422-6.599-2.919-14.673-5.545-8.07-2.626-15.406-5.356-16.297-6.064-2.477-1.974-26.432-9.817-29.98-9.817-5.08 0-29.893 9.47-27.95 10.668 2.427 1.501 59.11 20.594 61.538 20.729 1.096.058 7.695-1.987 14.672-4.545zm-283.906-9.548c4.412-1.509 25.33-8.385 46.48-15.279 43.184-14.077 41.623-12.521 20.014-19.92l-11.705-4.009-14.582 5.237-14.582 5.237-14.148-5.088-14.148-5.088-29.742 9.514c-16.355 5.232-30.243 9.987-30.86 10.563-.618.578 5.505 3.448 13.604 6.379a3116.941 3116.941 0 0 1 27.617 10.169c7.09 2.658 13.146 4.88 13.458 4.933.315.052 4.181-1.138 8.594-2.648zm144.465-7.435c15.541-5.599 28.457-10.364 28.7-10.586.243-.225-6.317-2.67-14.575-5.436l-15.018-5.028-29.004 9.904c-15.952 5.448-29.25 10.151-29.552 10.451-.299.301 2.232 1.571 5.627 2.821a1361.91 1361.91 0 0 1 13.334 5.018c3.938 1.51 8.302 2.81 9.695 2.891 1.396.079 15.25-4.438 30.793-10.035z\"></path><path fill=\"#72B147\" d=\"M477.574 1121.634c-34.979-16.444-48.505-22.65-116.004-53.219-12.998-5.887-27.82-12.688-32.94-15.112s-29.932-13.86-55.139-25.412l-45.829-21.003-.394-22.131-.393-22.131-13.413-5.974c-7.376-3.286-14.45-6.373-15.719-6.859-2.059-.79-2.308 1.46-2.308 20.903 0 16.86-.403 21.627-1.79 21.066-.983-.396-16.29-7.485-34.014-15.755-17.723-8.271-38.668-17.929-46.545-21.462l-14.32-6.429-.717-22.528-.716-22.529-15.038-6.774-15.038-6.774-.716 21.991-.716 21.99-20.05-9.432c-11.029-5.188-25.272-11.796-31.65-14.685l-11.603-5.253-.796-60.878c-.722-55.2.265-305.063 1.204-305.063.217 0 6.642 2.899 14.28 6.445 7.635 3.544 14.126 6.444 14.421 6.444s.537-20.489.537-45.532v-45.531l-12.532-5.523c-6.892-3.038-13.874-6.338-15.515-7.336-2.957-1.794-2.984-2.433-2.999-70.678-.007-37.876.196-68.867.452-68.867s5.942 2.53 12.638 5.624c20.134 9.302 18.092 11.05 17.634-15.097l-.396-22.579-14.644-6.531-14.645-6.529-.035-46.074-.036-46.074 4.655-1.021c2.561-.562 18.833-5.783 36.162-11.604 80.786-27.137 236.118-77.826 238.491-77.826 1.456 0 7.745 1.996 13.978 4.436l11.331 4.436 15.587-4.842 15.585-4.839-11.429-4.096c-6.286-2.251-11.938-4.544-12.56-5.095-.925-.817 137.064-47.229 191.608-64.448L519.82.923l27.211 9.188 27.213 9.188-12.53 4.095c-6.894 2.251-12.532 4.466-12.532 4.92 0 .453 6.14 2.847 13.645 5.319l13.645 4.494 13.926-4.676 13.924-4.678 59.346 19.857c32.641 10.922 59.563 20.076 59.828 20.342.266.264-3.563 1.948-8.504 3.74-17.955 6.512-17.922 5.48-.393 11.438l15.754 5.355 11.457-4.278c6.303-2.354 12.754-4.563 14.338-4.91 1.584-.349 36.385 10.412 77.338 23.911 40.95 13.5 78.484 25.843 83.406 27.431 4.924 1.586 8.951 3.07 8.951 3.299s-11.602 5.45-25.779 11.604c-14.178 6.154-25.777 11.555-25.773 12 0 .446 7.416 3.354 16.48 6.46 9.06 3.106 15.985 6.059 15.39 6.56-.594.502-6.672 3.356-13.504 6.346-8.46 3.699-13.715 5.201-16.47 4.708-7.29-1.305-31.899-10.344-31.53-11.579.2-.665 6.143-3.677 13.205-6.697 11.785-5.033 12.551-5.6 9.268-6.836-1.97-.74-9.703-3.475-17.188-6.073l-13.607-4.729-27.908 11.796c-15.35 6.488-28.076 11.962-28.279 12.167-.205.205 4.943 2.194 11.438 4.424 6.496 2.229 15.543 5.8 20.104 7.938 4.564 2.139 14.875 6.008 22.914 8.601 8.041 2.593 22.678 7.51 32.523 10.928 9.846 3.42 18.42 6.215 19.055 6.214.633-.001 11.268-4.6 23.631-10.217 12.361-5.616 24.682-11.149 27.377-12.295 6.11-2.596 5.291-3.182-12.775-9.153-7.484-2.475-14.115-4.959-14.738-5.522-.62-.563 5.055-3.748 12.613-7.075l13.74-6.05 17.463 5.65a5540.804 5540.804 0 0 0 36.244 11.547l18.78 5.898 12.395-5.727c6.818-3.151 13.354-5.727 14.52-5.727 1.871 0 2.123 43.656 2.123 366.391v366.392l-158.61 72.125a551026.886 551026.886 0 0 1-223.776 101.707c-35.842 16.271-68.064 30.924-71.609 32.561-34.596 15.969-66.58 30.382-67.229 30.292-.438-.062-17.878-8.138-38.75-17.949h-.004v-.004zM452.906 995.71l-.396-22.249-15.395-7.029-15.396-7.028V1004.519l14.681 6.638c8.073 3.648 15.18 6.674 15.79 6.721.61.042.933-9.932.716-22.168zm64.768-15.786v-22.279l-10.383-4.75a3408.087 3408.087 0 0 1-21.84-10.111c-17.105-8.006-29.554-13.617-30.209-13.617-.32 0-.563 10.148-.54 22.556l.041 22.559 30.392 13.877c16.716 7.632 30.875 13.916 31.466 13.964.591.044 1.073-9.945 1.073-22.199zm-162.156-28.728l-.395-22.366-13.605-6.202c-7.48-3.411-14.41-6.237-15.396-6.278-1.355-.056-1.79 5.119-1.79 21.323 0 15.55.49 21.713 1.79 22.551 2.648 1.705 27.388 13.126 28.68 13.239.612.052.934-9.967.716-22.267zm-225.96-57.185v-22.265l-12.53-5.8c-6.894-3.189-13.982-6.366-15.754-7.061l-3.224-1.261v45.277l14.681 6.648c8.073 3.657 15.162 6.666 15.753 6.688.592.022 1.074-9.981 1.074-22.226zm355.176-21.103v-21.887l-3.938-1.571c-2.165-.865-8.934-3.893-15.038-6.724l-11.099-5.148V881.201l14.68 6.685c8.074 3.676 14.842 6.733 15.038 6.796.197.059.357-9.738.357-21.774zM226.946 846.75v-22.265l-12.532-5.801c-6.893-3.189-13.98-6.365-15.753-7.061l-3.224-1.261v45.277l14.681 6.648c8.074 3.657 15.164 6.666 15.753 6.688.591.022 1.075-9.981 1.075-22.225zm128.572-33.068l-.395-22.389-27.927-12.802c-15.359-7.041-29.378-13.384-31.15-14.097l-3.222-1.294v45.202l29.717 13.752c16.345 7.564 30.54 13.813 31.543 13.886 1.426.105 1.743-4.802 1.434-22.258zm96.674-23.493c-1.302-1.157-61.414-28.589-62.649-28.589-.458 0-.657 10.11-.44 22.471l.396 22.471 31.508 14.479 31.507 14.481.396-22.163c.215-12.188-.107-22.607-.718-23.15zm-258.187-4.007v-22.683l-14.68-6.694c-8.074-3.682-15.18-6.688-15.79-6.679-.61.009-.934 10.106-.716 22.444l.395 22.426 15.038 6.859c8.271 3.773 15.2 6.894 15.396 6.934.197.041.357-10.133.357-22.607zm32.941-31.044v-22.216l-7.52-3.404c-4.136-1.872-11.224-5.078-15.754-7.124l-8.235-3.722v44.509l14.681 6.977c8.074 3.837 15.164 7.026 15.753 7.087.591.06 1.074-9.889 1.075-22.107zM162.5 725.977v-22.734l-30.968-14.145c-17.033-7.779-31.534-14.358-32.225-14.622-2.097-.798-1.566 43.787.534 45.148 1.475.953 61.145 28.729 62.3 29.002.197.048.36-10.146.36-22.649zm355.175-67.216v-22.638l-13.446-5.99c-7.396-3.294-14.484-6.388-15.753-6.874-2.06-.79-2.308 1.513-2.308 21.542v22.425l14.68 6.977c8.074 3.837 15.164 7.026 15.754 7.087.591.058 1.073-10.077 1.073-22.529zM388.76 645.953l-.02-22.558-31.847-14.654-31.846-14.655-.396 21.726c-.295 16.195.07 22.167 1.433 23.46 1.381 1.311 60.503 29.001 62.338 29.2.198.02.35-10.112.338-22.519zm-97.368-44.439v-22.598l-30.568-13.922c-16.813-7.658-30.992-13.923-31.508-13.923-.517 0-.938 9.909-.938 22.022v22.022l7.52 3.229c6.303 2.708 21.528 9.808 49.768 23.202 2.757 1.309 5.174 2.42 5.371 2.471.195.054.355-10.075.355-22.503zm-160.724-28.331l-.395-22.285-31.194-14.234c-17.157-7.829-31.496-14.235-31.865-14.235-.37 0-.67 9.992-.67 22.204v22.205l9.98 4.462c5.487 2.454 19.183 8.862 30.432 14.239 11.25 5.376 21.276 9.812 22.28 9.853 1.423.062 1.74-4.861 1.432-22.209zm30.398-31.214v-21.993l-14.328-6.65c-7.88-3.656-14.649-6.649-15.038-6.649-.39 0-.709 9.683-.709 21.516v21.517l14.68 7.004c8.074 3.851 14.841 7.058 15.038 7.127.196.065.357-9.776.357-21.872zm227.714-80.528v-22.317l-15.753-7.367-15.754-7.367v-45.341l-10.779-4.912c-5.929-2.702-17.648-8.217-26.042-12.256-8.394-4.038-18.043-8.536-21.443-9.993l-6.183-2.65v91.084l15.296 6.867c8.415 3.776 15.986 7.509 16.828 8.292 1.891 1.761 59.563 27.901 62.041 28.121 1.361.12 1.79-5.175 1.79-22.161zm-259.222-25.752v-22.292l-15.097-7.066c-8.304-3.887-15.393-7.067-15.753-7.067-.36 0-.658 10.022-.658 22.271v22.272l14.681 6.978c8.073 3.837 15.162 7.025 15.753 7.086.592.06 1.074-9.922 1.074-22.182zm370.93-54.246a23136.21 23136.21 0 0 1 35.403-15.402c9.625-4.179 17.68-8.111 17.9-8.743.38-1.08-65.022-30.355-71.205-31.874-1.61-.396-10.343 2.479-19.972 6.579l-17.107 7.283-6.52-2.485c-3.59-1.368-11.356-4.686-17.263-7.374l-10.734-4.887 17.512-7.219c9.631-3.969 17.233-7.666 16.895-8.212-.338-.548-15.144-7.395-32.899-15.215-29.896-13.167-35.789-16.367-30.142-16.367 1.193 0 3.287-.594 4.654-1.32 4.493-2.387 25.361-10.151 27.26-10.146 1.02.004 8.738 2.908 17.15 6.453 8.411 3.544 15.844 6.445 16.517 6.445.674 0 8.896 3.292 18.271 7.315l17.047 7.316 16.136-6.733c8.875-3.703 16.664-7.232 17.31-7.845 1.02-.968-28.576-14.422-31.563-14.35-.616.015-8.893-3.25-18.394-7.258l-17.275-7.286-17.582 7.014-17.583 7.012-15.599-6.558c-8.579-3.605-15.61-6.945-15.626-7.419-.017-.476 14.633-6.554 32.553-13.507 17.92-6.955 33.066-13.043 33.656-13.531 1.263-1.042-28.714-13.511-31.866-13.254-1.182.097-13.104 4.452-26.495 9.678-13.39 5.227-28.73 11.152-34.092 13.167l-9.746 3.663-14.6-6.158c-8.032-3.386-15.247-6.625-16.035-7.197-.787-.571-7.877-3.762-15.754-7.087-7.876-3.326-14.51-6.217-14.74-6.425-.229-.207 7.003-3.127 16.072-6.486 9.067-3.36 16.218-6.55 15.886-7.087-.333-.537-6.778-3.472-14.323-6.521-10.439-4.22-13.168-5.853-11.416-6.833 1.94-1.086 54.906-19.773 62.584-22.081 1.38-.416 2.506-1.214 2.506-1.778 0-1.636-26.153-11.531-30.479-11.531-2.163 0-10.85 2.604-19.308 5.786a4138.394 4138.394 0 0 1-31.077 11.523c-8.637 3.157-15.892 5.929-16.124 6.16-.23.231 5.754 2.916 13.298 5.965 7.545 3.049 13.981 5.97 14.302 6.488.322.519-5.365 3.055-12.633 5.635-7.27 2.581-14.83 5.29-16.799 6.021-3.264 1.215-2.376 1.841 10.024 7.096 7.484 3.169 14.12 6.245 14.747 6.833.627.587-7.429 4.113-17.9 7.837a62116.368 62116.368 0 0 0-35.81 12.743c-9.222 3.283-16.312 6.41-15.755 6.947 2.813 2.71 28.501 12.773 31.04 12.158 2.83-.687 5.76-1.761 22.247-8.154 4.333-1.68 8.927-3.377 10.211-3.771 3.011-.925 34.54 12.635 32.987 14.188-.646.646-8.535 4.007-17.53 7.467l-16.359 6.291 6.445 2.803c3.545 1.54 10.11 4.491 14.587 6.557 4.48 2.064 8.99 3.748 10.025 3.741 1.037-.007 8.968-2.906 17.626-6.445 8.66-3.537 16.604-6.43 17.654-6.43 2.688 0 33.197 13.288 33.197 14.457 0 .529-7.732 3.986-17.186 7.683-9.452 3.696-17.187 7.225-17.187 7.837 0 1.14 29.073 14.421 31.563 14.421 3.143 0 34.366 14.839 33.315 15.833-.632.597-8.443 4.13-17.358 7.852-9.298 3.88-15.677 7.3-14.954 8.021.69.69 19.264 9.315 41.273 19.168 22.011 9.85 45.495 20.42 52.19 23.484 6.695 3.065 12.817 5.639 13.604 5.716.798.078 9.497-3.372 19.343-7.667zm-391.524-71.567c5.965 2.719 17.067 7.916 24.67 11.55 14.32 6.843 25.796 11.958 26.834 11.958.328 0 .598-9.697.598-21.548v-21.549l-12.53-5.795c-6.895-3.188-15.433-6.971-18.978-8.407-6.308-2.561-22.245-10.22-39.385-18.929-4.726-2.4-11.985-5.885-16.13-7.741l-7.54-3.375.378 45.874.377 45.874 15.038 6.853 15.038 6.854.393-23.28.393-23.279 10.846 4.943-.002-.003zm179.565-8.092c-1.97-1.229-9.235-4.559-16.147-7.395l-12.568-5.156.395 22.303.393 22.304 15.038 6.775 15.038 6.776.716-21.684.717-21.685-3.582-2.238zm394.742 28.649c8.17-3.814 14.855-7.189 14.855-7.5 0-.309-7.088-3.341-15.754-6.735-8.664-3.396-15.754-6.602-15.754-7.125 0-.522 6.607-3.846 14.68-7.384 8.074-3.537 14.45-7.038 14.166-7.777-.28-.74-8.27-4.439-17.756-8.223l-17.244-6.878-34.117 14.726c-18.764 8.099-33.613 15.229-32.996 15.847.62.618 16.152 7.214 34.521 14.659 18.365 7.445 33.748 13.89 34.18 14.319 1.13 1.13 4.581-.157 21.22-7.929zm-363.866-14.999c-1.529-1.157-3.785-2.05-5.014-1.985-1.228.064-.298 1.001 2.064 2.083 5.553 2.542 6.402 2.515 2.95-.098zm462.83-29.52c8.966-4.054 15.782-7.836 15.15-8.41-1.52-1.371-32.3-12.864-34.452-12.864-2.379 0-31.867 13.122-31.867 14.18 0 .667 31.127 13.694 34.262 14.338.334.068 7.94-3.191 16.906-7.244zM708.67 258.18c8.316-3.553 17.242-7.68 19.834-9.17 4.38-2.52 14.2-6.71 39.084-16.68 5.514-2.208 15.381-6.479 21.926-9.484 6.545-3.008 12.164-5.469 12.49-5.469 1.471 0 16.342-7.298 16.98-8.336.396-.641-7.039-3.935-16.523-7.318-16.672-5.95-17.42-6.084-22.48-4.021-2.879 1.173-14.256 5.807-25.283 10.296-11.027 4.488-25.852 10.952-32.939 14.362s-24.094 10.753-37.787 16.317c-24.197 9.83-27.074 11.174-25.824 12.063.885.629 33.383 13.602 34.471 13.761.51.078 7.735-2.769 16.051-6.321zm138.111-1.665c9.188-4.19 14.047-7.116 12.891-7.763-1.02-.569-9.117-3.706-17.99-6.971l-16.133-5.935-15.088 6.734c-8.299 3.704-14.572 7.234-13.94 7.848 1.515 1.473 30.612 12.54 33.368 12.692 1.18.066 8.783-2.906 16.892-6.605zm-310.13-13.536c8.47-3.437 15.392-6.574 15.388-6.974-.004-.4-7.129-3.537-15.832-6.974-8.7-3.437-15.557-6.515-15.23-6.841s7.512-3.375 15.967-6.773l15.375-6.182-16.604-6.313c-9.133-3.473-16.594-6.635-16.58-7.028.03-.731 27.594-11.798 31.48-12.637 4.2-.906 63.017-23.86 62.985-24.582-.014-.403-13.895-5.833-30.846-12.063-16.95-6.231-30.31-11.755-29.689-12.275s13.535-5.672 28.697-11.45c15.164-5.779 27.566-10.888 27.563-11.356-.008-1.025-25.86-10.157-28.76-10.157-1.547 0-42.98 14.445-60.027 20.93-1.234.47 4.14 3.142 12.645 6.286 8.135 3.008 15.045 5.723 15.354 6.031.307.308-6.174 3.025-14.404 6.042-8.229 3.014-14.63 6.019-14.227 6.674.406.655 2.81 1.81 5.34 2.564 13.846 4.126 26.418 10.191 21.123 10.191-2.293 0-24.359 8.508-26.744 10.312-1.765 1.334-15.975 7.134-26.146 10.668-7.419 2.579-8.207 2.443-26.08-4.517l-13.755-5.356-14.172 5.291c-7.794 2.909-14.649 5.756-15.235 6.323-.586.568 12.604 6.579 29.311 13.358 16.707 6.777 30.545 12.873 30.752 13.542.208.672-6.472 3.839-14.842 7.042l-15.217 5.822 14.89 6.151c8.188 3.385 15.534 6.671 16.322 7.305 2.667 2.142 32.928 14.196 34.37 13.69.788-.273 8.361-3.309 16.827-6.744zm-373.012-13.427c8.825-3.149 16.045-6.067 16.045-6.48 0-.416-6.454-3.561-14.342-6.992l-14.339-6.239-15.378 5.381c-20.729 7.253-20.325 6.906-12.267 10.461a1891.36 1891.36 0 0 1 14.793 6.621c4.333 1.965 8.23 3.438 8.66 3.274.433-.165 8.005-2.875 16.828-6.026zm73.17-27.32c8.97-3.258 15.706-6.297 14.97-6.752-.736-.456-7.259-3.396-14.495-6.534l-13.156-5.706-17.198 5.97c-9.457 3.284-17.2 6.378-17.208 6.875-.007.498 5.626 3.305 12.52 6.238 6.892 2.937 13.12 5.887 13.834 6.56.718.673 2.006.784 2.865.25.857-.537 8.898-3.641 17.868-6.901zm-123.338-3.375c45.624-15.254 80.71-27.611 80.104-28.216-.3-.301-6.114-2.958-12.919-5.906-6.809-2.948-12.549-5.952-12.76-6.674-.213-.721 14.361-6.228 32.388-12.237l32.772-10.924-12.604-5.336-12.606-5.336-35.206 11.38c-19.362 6.259-42.778 13.728-52.034 16.597-9.255 2.868-16.822 5.653-16.815 6.192.007.537 5.193 3.184 11.526 5.879 6.333 2.698 11.81 5.382 12.17 5.966.36.583-15.132 6.324-34.429 12.756-19.295 6.432-35.387 12.188-35.76 12.792-.486.784 21.892 11.846 26.096 12.898.213.053 13.745-4.371 30.077-9.831zm519.1 5.882c4.942-2.224 11.118-4.895 13.72-5.936 2.604-1.039 4.217-2.342 3.582-2.896-.635-.552-8.348-3.65-17.139-6.886l-15.982-5.882-15.525 6.241c-8.537 3.433-15.523 6.674-15.523 7.204 0 .528 3.223 2.15 7.16 3.605a786.251 786.251 0 0 1 14.322 5.483c9.925 3.934 14.98 3.75 25.384-.933zm65.304-27.737l14.785-6.033-15.859-5.74c-8.723-3.157-15.859-6.199-15.859-6.759 0-.562 6.152-3.404 13.672-6.317 7.52-2.914 13.457-5.511 13.195-5.771-.264-.264-7.543-3.002-16.178-6.091l-15.7-5.613-13.37 5.188c-7.354 2.854-13.393 5.833-13.418 6.621-.027.788 6.15 3.612 13.727 6.278 7.578 2.664 13.775 5.312 13.775 5.881s-5.639 3.172-12.53 5.782-13.01 5.146-13.595 5.637c-.803.671 27.908 12.267 31.854 12.864.394.058 7.37-2.609 15.501-5.927zm-258.969-25.254c4.333-1.563 9.167-3.276 10.741-3.808 2.554-.859 2.321-1.257-2.147-3.656-2.757-1.48-5.979-2.758-7.16-2.839-1.18-.081-5.289-1.565-9.126-3.299l-6.978-3.15 15.852-5.671c8.72-3.118 15.64-5.882 15.38-6.141-.258-.258-6.899-2.922-14.759-5.917l-14.287-5.445-15.597 5.556c-8.579 3.055-21.932 7.788-29.67 10.518-20.576 7.259-20.354 6.709-5.065 12.566 48.938 18.753 46.036 17.841 50.646 15.92 2.36-.987 7.84-3.072 12.17-4.634zm314.723-22.702c7.318-2.896 12.81-5.704 12.201-6.238-.609-.535-7.916-3.362-16.238-6.286-16.525-5.804-14.738-5.839-30.697.593a429.984 429.984 0 0 1-7.52 2.905c-2.56.962-4.654 2.263-4.654 2.89 0 1.166 27.658 11.086 31.48 11.29 1.166.061 8.108-2.259 15.428-5.154zm-65.336-22.302c6.975-2.562 12.686-5.002 12.69-5.426.005-.422-6.599-2.919-14.673-5.545-8.07-2.626-15.406-5.356-16.297-6.064-2.477-1.974-26.432-9.817-29.98-9.817-5.08 0-29.893 9.47-27.95 10.668 2.427 1.501 59.11 20.594 61.538 20.729 1.096.058 7.695-1.987 14.672-4.545zm-283.906-9.548c4.412-1.509 25.33-8.385 46.48-15.279 43.184-14.077 41.623-12.521 20.014-19.92l-11.705-4.009-14.582 5.237-14.582 5.237-14.148-5.088-14.148-5.088-29.742 9.514c-16.355 5.232-30.243 9.987-30.86 10.563-.618.578 5.505 3.448 13.604 6.379a3116.941 3116.941 0 0 1 27.617 10.169c7.09 2.658 13.146 4.88 13.458 4.933.315.052 4.181-1.138 8.594-2.648zm144.465-7.435c15.541-5.599 28.457-10.364 28.7-10.586.243-.225-6.317-2.67-14.575-5.436l-15.018-5.028-29.004 9.904c-15.952 5.448-29.25 10.151-29.552 10.451-.299.301 2.232 1.571 5.627 2.821a1361.91 1361.91 0 0 1 13.334 5.018c3.938 1.51 8.302 2.81 9.695 2.891 1.396.079 15.25-4.438 30.793-10.035z\"></path><path fill=\"#946A49\" d=\"M477.574 1121.634c-34.979-16.444-48.505-22.65-116.004-53.219-12.998-5.887-27.82-12.688-32.94-15.112s-29.932-13.86-55.139-25.412l-45.829-21.003-.394-22.131-.393-22.131-13.413-5.974c-7.376-3.286-14.45-6.373-15.719-6.859-2.059-.79-2.308 1.46-2.308 20.903 0 16.86-.403 21.627-1.79 21.066-.983-.396-16.29-7.485-34.014-15.755-17.723-8.271-38.668-17.929-46.545-21.462l-14.32-6.429-.717-22.528-.716-22.529-15.038-6.774-15.038-6.774-.716 21.991-.716 21.99-20.05-9.432c-11.029-5.188-25.272-11.796-31.65-14.685l-11.603-5.253-.796-60.878c-.722-55.2.265-305.063 1.204-305.063.217 0 6.642 2.899 14.28 6.445 7.635 3.544 14.126 6.444 14.421 6.444s.537-20.489.537-45.532v-45.531l-12.532-5.523c-6.892-3.038-13.874-6.338-15.515-7.336-2.958-1.794-2.984-2.432-2.999-70.745-.01-49.324.433-68.75 1.552-68.285.861.356 7.791 3.562 15.397 7.12 7.607 3.56 14.214 6.09 14.68 5.623.467-.465.848-10.797.848-22.959 0-20.471.187-22.042 2.507-21.154 1.38.527 8.465 3.659 15.75 6.956l13.241 5.998.004 23.26c.006 20.612.291 23.435 2.513 24.79 1.377.841 8.628 4.335 16.111 7.762l13.605 6.233.394-22.072c.291-16.295.854-22.052 2.148-21.996.965.043 14.965 6.401 31.113 14.132 16.146 7.73 29.842 13.779 30.434 13.445.59-.336 1.074-10.792 1.074-23.235v-22.626l-31.866-14.475-31.865-14.475-.395-22.991-.394-22.992-5.785-2.315c-3.185-1.271-5.263-2.832-4.62-3.466.642-.634 24.268-8.853 52.498-18.268 28.23-9.413 52.03-17.817 52.885-18.674 1.123-1.123.073-2.179-3.755-3.778-2.92-1.222-8.997-3.904-13.5-5.961l-8.188-3.74 33.298-10.819c18.313-5.952 33.297-11.506 33.297-12.347s-5.8-3.771-12.889-6.511c-7.089-2.741-12.89-5.348-12.89-5.79 0-.443 6.768-2.995 15.041-5.668 8.272-2.675 14.557-5.291 13.964-5.815-.592-.525-5.75-2.754-11.46-4.956-5.71-2.201-10.383-4.414-10.383-4.917 0-.502 7.571-3.375 16.828-6.383l16.827-5.469 12.831 4.953 12.831 4.951 15.097-4.7a20555.14 20555.14 0 0 1 32.028-9.938l16.935-5.238 12.813 4.621c7.05 2.542 13.098 5.076 13.441 5.632.611.989-47.752 17.864-78.382 27.352-8.47 2.622-15.396 5.229-15.396 5.792s5.476 3.177 12.167 5.806c6.692 2.63 12.165 5.103 12.16 5.497-.005.394-19.175 7.422-42.602 15.618-55.773 19.514-57.632 20.206-57.632 21.472 0 .594 5.48 3.275 12.174 5.959 6.695 2.685 12.174 5.238 12.174 5.676 0 .438-7.09 3.268-15.754 6.284-8.665 3.02-15.754 5.951-15.754 6.519 0 .565 6.48 3.829 14.4 7.25l14.4 6.221-17.443 6.182c-9.593 3.399-18.003 6.183-18.688 6.183s-7.594-2.854-15.354-6.341l-14.106-6.34-17.73 6.326c-9.75 3.481-18.318 6.524-19.038 6.766-.72.238 9.72 5.484 23.2 11.654l24.508 11.221.394 22.063.395 22.062 15.328 6.999 15.325 6.997.428-22.041.427-22.042-9.754-4.492c-5.365-2.473-9.554-4.688-9.309-4.922.245-.235 8.367-3.354 18.05-6.93l17.603-6.5 14.62 6.546c8.04 3.601 15.073 6.951 15.63 7.447.558.497-6.71 3.73-16.148 7.188l-17.162 6.284 4.011 2.438c2.206 1.341 6.355 3.212 9.222 4.159 2.863.945 5.59 2.707 6.052 3.915.464 1.208.843 11.688.843 23.291v21.094l15.396 7.377c8.467 4.06 16.361 8.053 17.544 8.878 1.182.825 8.432 4.372 16.111 7.884l13.963 6.386v45.776l-4.653-1.953c-2.562-1.075-8.845-3.942-13.964-6.37-5.12-2.429-10.115-4.416-11.1-4.416-1.354-.003-1.79 5.352-1.79 21.999v22.001l31.15 13.995c17.131 7.698 31.937 14.619 32.901 15.383 1.22.961 1.875 8.19 2.148 23.604l.395 22.22 13.605 6.203c7.482 3.411 14.088 6.235 14.68 6.277.59.042 1.074-9.667 1.074-21.575 0-25.11-2.147-23.565 18.977-13.645l13.963 6.558v-91.418l-23.272-11.297c-12.8-6.212-27.3-13.101-32.225-15.306l-8.95-4.012v-21.287c0-13.779.522-21.286 1.49-21.286.816 0 4.014 1.288 7.103 2.864 5.383 2.745 9.673 3.962 6.214 1.763-.957-.608 6.09-4.15 16.595-8.341l18.256-7.281 16.82 7.45 16.82 7.452-16.229 6.813c-8.927 3.747-17.43 7.259-18.897 7.804-1.945.724 5.222 4.611 26.495 14.371 16.041 7.358 35.93 16.236 44.201 19.73 8.271 3.493 19.776 8.549 25.568 11.234 5.793 2.688 11.702 4.884 13.13 4.884 1.43 0 10.334-3.473 19.79-7.716l17.19-7.715 13.358 5.988c24.291 10.89 19.861 10.736 40.381 1.399 9.953-4.528 18.096-8.644 18.096-9.146s-4.996-3.083-11.102-5.736a1486.394 1486.394 0 0 1-21.84-9.743c-17.025-7.797-36.203-16.025-37.344-16.025-1.094 0-55.628-23.684-88.363-38.374l-19.014-8.531 17.58-7.061 17.58-7.061 15.753 6.773c8.665 3.725 17.365 6.826 19.334 6.893 1.97.065 10.8-2.865 19.624-6.511l16.042-6.631 15.78 6.62c8.678 3.641 16.975 6.619 18.44 6.619 2.581 0 18.058-6.373 39.313-16.189 5.713-2.637 14.102-6.275 18.645-8.085 4.541-1.81 8.574-3.794 8.955-4.413.381-.62-6.393-3.923-15.053-7.343-8.662-3.421-15.754-6.583-15.758-7.029s3.695-2.322 8.225-4.169a735.862 735.862 0 0 0 16.113-6.845l7.877-3.485-15.402-6.077c-8.47-3.341-15.719-6.393-16.105-6.779-.389-.387 5.957-3.429 14.094-6.76l14.797-6.058 15.287 5.813c8.406 3.197 16.494 5.813 17.973 5.813s9.73-2.935 18.336-6.52l15.648-6.518 16.566 6.159c9.111 3.389 16.807 6.676 17.098 7.307.291.629-6.56 4.076-15.225 7.656a7081.383 7081.383 0 0 0-32.22 13.434l-16.466 6.923 6.44 2.697c3.542 1.486 11.435 4.579 17.54 6.877 6.104 2.298 11.098 4.571 11.098 5.05 0 .48-6.604 3.643-14.678 7.027-37.543 15.74-84.14 36.337-84.14 37.191 0 .926 11.712 5.924 52.386 22.354l20.164 8.145 19.938-9.228c33.447-15.479 79.146-36.187 97.273-44.081 9.453-4.116 17.51-7.995 17.9-8.617.81-1.277 29.391-14.325 31.383-14.325 2.938 0 30.205-13.45 29.176-14.392-.617-.563-6.922-3.122-14.014-5.688a3279.49 3279.49 0 0 1-16.426-5.982c-3.205-1.196-2.162-1.933 11.166-7.897 8.088-3.62 14.191-7.034 13.564-7.586-.629-.555-8.059-3.436-16.512-6.405-8.453-2.969-15.082-5.864-14.729-6.437.352-.568 6.41-3.453 13.46-6.408l12.817-5.377 16.813 5.875c9.246 3.231 17.988 5.875 19.426 5.875s9.068-2.862 16.96-6.36l14.345-6.361 15.824 5.646c8.703 3.104 16.676 5.645 17.721 5.645 1.043 0 7.934-2.797 15.31-6.215l13.413-6.214-14.3-4.701c-7.866-2.584-16.235-5.568-18.599-6.628-2.36-1.062-11.303-4.418-19.86-7.46l-15.569-5.532 12.365-5.312 12.365-5.313 35.426 11.467 35.424 11.465 14.346-6.396c7.89-3.52 14.816-6.397 15.396-6.397.578 0 1.051 164.875 1.051 366.392v366.392l-158.61 72.125a526459.608 526459.608 0 0 1-223.776 101.707c-35.84 16.271-68.064 30.924-71.609 32.561-34.594 15.969-66.579 30.382-67.229 30.292-.43-.065-17.869-8.141-38.743-17.952zM452.906 995.71l-.396-22.249-15.395-7.029-15.396-7.028V1004.519l14.681 6.638c8.073 3.648 15.18 6.674 15.79 6.721.61.042.933-9.932.716-22.168zm64.768-15.786v-22.279l-10.383-4.75a3408.087 3408.087 0 0 1-21.84-10.111c-17.105-8.006-29.554-13.617-30.209-13.617-.32 0-.563 10.148-.54 22.556l.041 22.559 30.392 13.877c16.716 7.632 30.875 13.916 31.466 13.964.591.044 1.073-9.945 1.073-22.199zm-162.156-28.728l-.395-22.366-13.605-6.202c-7.48-3.411-14.41-6.237-15.396-6.278-1.355-.056-1.79 5.119-1.79 21.323 0 15.55.49 21.713 1.79 22.551 2.648 1.705 27.388 13.126 28.68 13.239.612.052.934-9.967.716-22.267zm-225.96-57.185v-22.265l-12.53-5.8c-6.894-3.189-13.982-6.366-15.754-7.061l-3.224-1.261v45.277l14.681 6.648c8.073 3.657 15.162 6.666 15.753 6.688.592.022 1.074-9.981 1.074-22.226zm355.176-21.103v-21.887l-3.938-1.571c-2.165-.865-8.934-3.893-15.038-6.724l-11.099-5.148V881.201l14.68 6.685c8.074 3.676 14.842 6.733 15.038 6.796.197.059.357-9.738.357-21.774zM226.946 846.75v-22.265l-12.532-5.801c-6.893-3.189-13.98-6.365-15.753-7.061l-3.224-1.261v45.277l14.681 6.648c8.074 3.657 15.164 6.666 15.753 6.688.591.022 1.075-9.981 1.075-22.225zm128.572-33.068l-.395-22.389-27.927-12.802c-15.359-7.041-29.378-13.384-31.15-14.097l-3.222-1.294v45.202l29.717 13.752c16.345 7.564 30.54 13.813 31.543 13.886 1.426.105 1.743-4.802 1.434-22.258zm96.674-23.493c-1.302-1.157-61.414-28.589-62.649-28.589-.458 0-.657 10.11-.44 22.471l.396 22.471 31.508 14.479 31.507 14.481.396-22.163c.215-12.188-.107-22.607-.718-23.15zm-258.187-4.007v-22.683l-14.68-6.694c-8.074-3.682-15.18-6.688-15.79-6.679-.61.009-.934 10.106-.716 22.444l.395 22.426 15.038 6.859c8.271 3.773 15.2 6.894 15.396 6.934.197.041.357-10.133.357-22.607zm32.941-31.044v-22.216l-7.52-3.404c-4.136-1.872-11.224-5.078-15.754-7.124l-8.235-3.722v44.509l14.681 6.977c8.074 3.837 15.164 7.026 15.753 7.087.591.06 1.074-9.889 1.075-22.107zM162.5 725.977v-22.734l-30.968-14.145c-17.033-7.779-31.534-14.358-32.225-14.622-2.097-.798-1.566 43.787.534 45.148 1.475.953 61.145 28.729 62.3 29.002.197.048.36-10.146.36-22.649zm355.175-67.216v-22.638l-13.446-5.99c-7.396-3.294-14.484-6.388-15.753-6.874-2.06-.79-2.308 1.513-2.308 21.542v22.425l14.68 6.977c8.074 3.837 15.164 7.026 15.754 7.087.591.058 1.073-10.077 1.073-22.529zM388.76 645.953l-.02-22.558-31.847-14.654-31.846-14.655-.396 21.726c-.295 16.195.07 22.167 1.433 23.46 1.381 1.311 60.503 29.001 62.338 29.2.198.02.35-10.112.338-22.519zm-97.368-44.439v-22.598l-30.568-13.922c-16.813-7.658-30.992-13.923-31.508-13.923-.517 0-.938 9.909-.938 22.022v22.022l7.52 3.229c6.303 2.708 21.528 9.808 49.768 23.202 2.757 1.309 5.174 2.42 5.371 2.471.195.054.355-10.075.355-22.503zm-160.724-28.331l-.395-22.285-31.194-14.234c-17.157-7.829-31.496-14.235-31.865-14.235-.37 0-.67 9.992-.67 22.204v22.205l9.98 4.462c5.487 2.454 19.183 8.862 30.432 14.239 11.25 5.376 21.276 9.812 22.28 9.853 1.423.062 1.74-4.861 1.432-22.209zm30.398-31.214v-21.993l-14.328-6.65c-7.88-3.656-14.649-6.649-15.038-6.649-.39 0-.709 9.683-.709 21.516v21.517l14.68 7.004c8.074 3.851 14.841 7.058 15.038 7.127.196.065.357-9.776.357-21.872zm292.161-96.687v-21.291l-6.803-2.899a971.86 971.86 0 0 1-15.074-6.635l-8.27-3.733.395 21.649.396 21.646 13.604 6.203c7.484 3.411 14.09 6.235 14.681 6.277.59.041 1.071-9.505 1.071-21.217zm-323.669-9.593v-22.292l-15.097-7.066c-8.304-3.887-15.393-7.067-15.753-7.067-.36 0-.658 10.022-.658 22.271v22.272l14.681 6.978c8.073 3.837 15.162 7.025 15.753 7.086.592.06 1.074-9.922 1.074-22.182zm388.116-6.333V406.46l-4.654-2.015c-2.56-1.107-9.487-4.25-15.396-6.982l-10.742-4.97.45 23.076.445 23.076 14.591 6.68c8.023 3.675 14.751 6.735 14.946 6.803.2.069.36-10.179.36-22.772zm-356.926-48.012c-1.827-1.625-27.326-13.589-28.964-13.589-.476 0-.688 10.092-.472 22.427l.396 22.426 15.038 6.775 15.038 6.774.395-21.594c.296-16.126-.065-22.003-1.43-23.219zm66.198 5.962v-21.982l-14.456-6.661c-7.95-3.665-15.04-6.662-15.754-6.662-.72 0-1.299 9.764-1.299 21.884v21.885l14.681 6.723c8.074 3.697 15.164 6.738 15.753 6.759.591.019 1.075-9.857 1.075-21.946zm127.462-55.354c-1.183-.764-2.792-1.39-3.58-1.39-.787 0-.466.625.716 1.39 1.182.764 2.792 1.387 3.58 1.387s.465-.624-.716-1.387zm-93.09-42.893c-5.12-2.094-12.808-5.404-17.084-7.359l-7.775-3.554 18.158-6.937c9.987-3.815 18.158-7.097 18.158-7.291 0-.193-6.435-3.151-14.297-6.572-7.863-3.421-13.824-6.625-13.247-7.12 1.357-1.167 32.941-12.799 34.75-12.799.757 0 6.05 2.122 11.765 4.716 5.713 2.593 11.995 5.395 13.955 6.226 3.491 1.477 3.417 1.574-3.404 4.593-3.833 1.695-7.49 3.084-8.126 3.084-2.042 0-18.53 7.502-18.508 8.422.011.487 6.737 3.786 14.945 7.332 8.208 3.544 14.48 6.881 13.94 7.415-.975.965-8.835 4.196-25.328 10.412l-8.594 3.237-9.308-3.805zm61.983-2.721c-8.05-3.663-14.646-6.983-14.659-7.376-.012-.396 7.937-3.745 17.662-7.447l17.685-6.73 15.234 6.646c8.378 3.655 15.235 7.054 15.235 7.554 0 1.058-33.015 14.368-35.11 14.155-.774-.079-7.996-3.14-16.047-6.802zm421.062-28.547c-9.625-3.689-17.03-7.176-16.46-7.744.57-.571 7.644-3.927 15.72-7.459l14.682-6.422 17.891 6.701c9.84 3.687 17.891 7.109 17.891 7.607 0 1.014-28.982 14.206-30.963 14.093-.696-.039-9.138-3.089-18.76-6.776zm-278.678-1.345c-8.508-3.604-14.952-7.054-14.32-7.665.631-.61 7.855-3.773 16.056-7.027l14.91-5.918 16.956 6.875c9.325 3.781 16.957 7.205 16.957 7.608 0 1.197-29.789 12.896-32.552 12.782-1.395-.054-9.499-3.05-18.007-6.655zm70.965.716c-8.07-3.237-14.68-6.317-14.68-6.846s7.164-3.875 15.92-7.438l15.92-6.48 16.305 6.503c8.967 3.576 16.3 6.87 16.291 7.318-.02 1.324-29.189 12.996-32.26 12.908-1.548-.046-9.42-2.73-17.496-5.965zm-204.135-28.717l-14.016-5.89 16.467-6.123 16.47-6.122 14.017 5.821c7.71 3.203 14.182 5.976 14.38 6.164.481.456-30.98 12.301-32.284 12.153-.559-.062-7.324-2.765-15.034-6.003zm116.874-6.741c-1.532-1.343-30.817-12.932-32.682-12.934-1.338-.001-13.396-4.91-44.477-18.108-7.133-3.029-13.117-6.152-13.299-6.939-.182-.789 7.587-4.232 17.266-7.654 43.815-15.498 76.054-28.084 76.671-29.936.277-.834-2.91-2.651-7.085-4.037-4.176-1.386-10.079-3.632-13.118-4.991l-5.524-2.471 8.39-3.091a3625.554 3625.554 0 0 0 14.542-5.394c3.384-1.266 5.64-2.77 5.013-3.341-.628-.571-7.427-3.368-15.109-6.214l-13.968-5.173-26.133 9.366c-37.706 13.516-38.552 13.856-37.298 15.053.627.598 6.87 3.281 13.87 5.96l12.728 4.872-15.253 5.379-15.253 5.379-14.912-5.831c-8.2-3.206-15.43-5.829-16.064-5.829-2.095 0-27.705-10.491-27.705-11.349 0-.982 44.374-16.489 94.775-33.123l35.344-11.664 13.73 5.08 13.728 5.08 14.66-5.168 14.66-5.169 16.053 5.895 16.055 5.897 28.946-10.688c15.922-5.876 29.252-10.989 29.623-11.359.371-.372-.223-.999-1.318-1.396-10.752-3.87-33.074-11.776-43.24-15.314l-12.6-4.386-14.55 5.028-14.554 5.029-15.813-4.983c-8.698-2.74-22.362-7.241-30.368-10.001l-14.554-5.018-29.844 9.612-29.843 9.612-11.732-4.043c-6.453-2.225-11.49-4.435-11.196-4.914.296-.479 33.156-11.79 73.021-25.137l72.483-24.27 13.73 4.853 13.727 4.853 12.705-4.061 12.701-4.061 13.023 4.162 13.023 4.162-13.31 4.439c-7.319 2.441-12.698 4.792-11.95 5.224s7.627 2.853 15.287 5.38l13.926 4.594 14.36-4.708 14.356-4.706 14.322 4.694c7.875 2.582 14.32 4.904 14.32 5.16s-5.154 2.298-11.457 4.537c-6.3 2.238-11.457 4.432-11.457 4.875 0 .441 5.48 2.587 12.174 4.768 6.695 2.182 12.172 4.474 12.172 5.094 0 .623-5.477 2.99-12.172 5.264s-12.174 4.492-12.174 4.931c0 .439 5.48 2.582 12.174 4.762 6.695 2.182 12.172 4.491 12.172 5.135 0 .643-1.77 1.827-3.938 2.632-14.654 5.441-21.49 8.231-23.988 9.792-1.574.984-11.563 4.679-22.197 8.208-10.635 3.528-27.713 9.455-37.953 13.165-29.215 10.59-28.053 10.471-43.948 4.516l-13.635-5.106-14.383 5.278c-7.908 2.904-14.609 5.906-14.888 6.672-.849 2.327 23.188 10.855 28.851 10.236 2.758-.302 10.56-2.758 17.338-5.459l12.325-4.911 7.726 3.154c4.248 1.734 10.824 4.259 14.615 5.607 3.787 1.352 6.688 2.62 6.443 2.821s-13.818 5.408-30.165 11.57c-16.344 6.162-29.716 11.567-29.715 12.015.001.444 6.513 3.288 14.471 6.318 7.957 3.031 13.917 5.985 13.244 6.567-.672.582-7.509 3.394-15.194 6.248l-13.974 5.189-16.472-6.365-16.47-6.366-16.458 5.996c-9.052 3.298-15.975 6.447-15.386 7 .864.809 45.18 19.166 58.916 24.407 1.883.717 3.125 1.604 2.761 1.965-1.933 1.933-32.656 13.052-33.65 12.182v-.001h.006zm139.162-167.66c7.492-2.4 13.621-4.857 13.621-5.46 0-.604-5.842-2.962-12.982-5.245l-12.984-4.149-11.72 4.092c-6.448 2.251-12.618 4.559-13.716 5.126-1.66.859 5.262 3.733 23.816 9.888.187.059 6.471-1.853 13.965-4.252zm-87.35-10.852c6.304-2.066 11.942-4.191 12.53-4.721.585-.529-4.41-2.744-11.1-4.923l-12.168-3.962-12.167 3.962c-6.69 2.179-11.656 4.473-11.03 5.098.923.923 19.22 7.815 21.76 8.195.392.059 5.87-1.582 12.175-3.649zM231.964 215.705c-7.085-3.143-13.066-5.897-13.293-6.125-.225-.228 7.344-3.155 16.821-6.51 9.48-3.353 17.231-6.572 17.231-7.156s-5.828-3.503-12.95-6.491c-7.126-2.988-12.443-5.922-11.816-6.521.625-.597 7.26-3.175 14.743-5.726s14.143-5.109 14.797-5.684c.656-.573 2.912-.206 5.013.815 2.103 1.021 8.01 3.582 13.13 5.692 5.12 2.108 9.795 4.293 10.39 4.854.593.562-6.013 3.555-14.682 6.656-8.667 3.099-15.759 6.038-15.759 6.529 0 .49 5.822 3.334 12.94 6.318 7.115 2.983 13.22 5.881 13.563 6.438.803 1.298-30.578 12.942-34.38 12.759-1.575-.072-8.662-2.705-15.748-5.848zm319.49-6.574c-.577-.584-7.866-3.7-16.202-6.927-8.336-3.226-14.56-6.233-13.83-6.685.73-.452 15.172-6.059 32.09-12.46l30.76-11.639 14.68 5.374c8.074 2.957 14.68 5.775 14.68 6.268 0 .491-6.28 3.354-13.963 6.358-7.68 3.006-14.607 5.956-15.396 6.554-.787.599-7.553 3.505-15.037 6.458-7.48 2.952-14.309 5.906-15.168 6.565-.865.656-2.04.717-2.615.134zm184.13-6.958c-8.939-3.343-16.518-6.343-16.838-6.666-.322-.323 5.531-3.061 13.012-6.083 7.48-3.024 13.445-5.628 13.258-5.788-.188-.161-7.107-2.697-15.379-5.635-8.27-2.939-16.006-6.146-17.188-7.124-1.182-.98-8.43-3.969-16.109-6.643-7.676-2.672-13.96-5.242-13.963-5.709 0-.466 4.67-2.641 10.381-4.833s11.783-4.854 13.494-5.914c2.75-1.706 5.07-1.24 20.063 4.026l16.953 5.955 14.107-5.583c10.787-4.271 13.48-5.844 11.443-6.688-1.465-.605-8.459-3.166-15.543-5.687l-12.879-4.582 7.15-3.115c3.936-1.714 9.73-3.984 12.881-5.048 3.15-1.063 6.695-2.713 7.877-3.667s7.303-3.776 13.605-6.272c6.301-2.496 11.658-4.738 11.904-4.981.246-.244-6.54-2.772-15.082-5.618l-15.53-5.175-12.468 5.027c-6.855 2.764-13.736 5.026-15.29 5.026-2.839 0-59.08-19.23-63.097-21.574-1.455-.85-1.56-1.269-.332-1.298.998-.023 7.252-2.202 13.896-4.839l12.076-4.796 16.182 5.599 16.182 5.6 13.893-5.242 13.893-5.244 31.221 10.347c17.172 5.691 31.678 10.755 32.232 11.25.555.496-4.584 3.107-11.418 5.802l-12.432 4.897 16.961 5.654 16.961 5.653 12.764-5.222 12.762-5.22 34.393 11.076c22.475 7.235 33.502 11.408 31.822 12.038-1.414.529-13.654 5.855-27.205 11.835l-24.635 10.875-17.615-6.228-17.613-6.226-27.928 11.748c-15.36 6.461-27.67 12.341-27.355 13.065.314.724 7.35 3.731 15.631 6.684 8.283 2.952 15.271 5.58 15.533 5.842.477.477-25.13 10.965-33.168 13.584-2.363.771-9.453 3.604-15.756 6.296l-11.457 4.896-16.25-6.075zM305.35 189.74c-9.146-3.859-13.297-6.272-12.02-6.986 1.072-.601 8.55-3.438 16.616-6.307l14.667-5.217 14.183 5.527c7.802 3.041 13.997 6.085 13.771 6.768-.456 1.368-29.104 12.447-31.65 12.24-.878-.072-7.882-2.782-15.567-6.025zm329.762.222c-8.27-3.152-15.53-6.214-16.143-6.805-1.24-1.207 24.016-11.608 28.188-11.608 2.658 0 35.641 11.55 34.893 12.22-1.076.962-29.412 12.113-30.563 12.025-.734-.057-8.103-2.681-16.375-5.832zm224.43-14.035l-14.027-5.32 6.15-2.647c3.383-1.456 8.854-3.822 12.158-5.257 7.9-3.435 8.697-3.345 25.951 2.927l14.771 5.371-11.428 5.287c-6.287 2.906-13.258 5.212-15.49 5.123-2.23-.091-10.37-2.558-18.085-5.484zm-260.949-23.913c-9.45-3.59-23.252-8.716-30.664-11.392-15.242-5.501-15.91-5.895-12.146-7.147 1.49-.496 4.74-1.8 7.225-2.897 2.48-1.097 5.23-1.995 6.105-1.995s2.713-.644 4.08-1.432c1.367-.786 10.754-4.606 20.855-8.488l18.37-7.061 14.93 5.143c8.21 2.829 14.927 5.616 14.927 6.194s-6.244 3.47-13.877 6.426l-13.875 5.376 14.117 5.155c7.766 2.835 14.336 5.816 14.605 6.623.268.807-5.449 3.708-12.707 6.445a15237.33 15237.33 0 0 0-13.975 5.276c-.43.167-8.517-2.636-17.97-6.226zM124 140.457l-12.002-5.223 33.485-11.181c18.418-6.148 34.41-11.19 35.536-11.202 2.685-.029 24.445 8.874 24.445 10.003 0 .706-67.287 23.021-68.96 22.868-.275-.023-5.902-2.393-12.504-5.265zm535.103-11.455c-7.68-2.81-13.965-5.552-13.965-6.098 0-2.199 24.775-10.382 29.197-9.642 7.688 1.285 29.803 9.885 28.56 11.108-1.997 1.963-23.85 9.945-26.93 9.839-1.595-.055-9.18-2.4-16.862-5.207z\"></path><path fill=\"#64A43A\" d=\"M497.568 1130.389a8284.62 8284.62 0 0 1-31.81-14.731l-12.53-5.854v-21.575c0-17.51.376-21.575 2-21.575 1.1 0 6.737 2.216 12.53 4.922 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.213v-68.213l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.977-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.262.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.821c-8.45-3.75-15.83-6.813-16.4-6.804-.57.012-1.216 9.907-1.433 21.993l-.395 21.975-15.038-6.772-15.038-6.774-.716-23.362-.716-23.363-32.08-14.753c-17.647-8.113-32.317-14.752-32.604-14.752-.285 0-.35 20.651-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314v46.362l15.754 7.311 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.202-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6658.637 6658.637 0 0 1-30.992-14.229c-7.002-3.248-13.285-5.906-13.963-5.906-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.527-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.97-.69-.69-8.085-4.376-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.443-15.762-6.443-.879 0-1.424 8.245-1.424 21.602 0 11.881-.56 21.387-1.244 21.124-.687-.263-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.724V819.6c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.545 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.197.708-22.197 2.034 0 30.24 13.435 31.136 14.83.58.9 1.063 11.379 1.074 23.283l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.067l.392 22.848 14.646 6.593c36.401 16.393 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.087-.394-23.087 11.135 5.146c6.125 2.829 13.237 6.058 15.81 7.168l4.674 2.022-.379-46.016-.378-46.013-30.792-14.108c-16.936-7.761-31.597-14.134-32.582-14.163-1.354-.044-1.79 5.184-1.79 21.521v21.579l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.832-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.836 0 12.781-.568 22.296-1.332 22.296-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.469-1.79 21.425-.984-.03-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.854 3.242 1.276c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.311-15.755-7.311V459.886l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.624 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.54-14.93-6.997-16.11-7.684-1.729-1.005-2.229-5.421-2.546-22.516-.22-11.695-.086-22.08.297-23.076.51-1.327 2.91-.737 8.99 2.21 15.972 7.739 21.194 9.914 22.26 9.267.59-.358 1.073-10.671 1.073-22.918 0-20.618.187-22.196 2.507-21.308 1.38.526 8.465 3.656 15.75 6.955l13.241 5.998.005 23.771.004 23.772 14.68 6.806c8.074 3.743 15.485 7.131 16.47 7.53 1.388.563 1.79-4.313 1.79-21.626 0-16.967.434-22.333 1.79-22.274.985.042 15.003 6.4 31.15 14.13s29.844 13.779 30.434 13.445c.592-.336 1.074-10.792 1.074-23.235v-22.628l-31.866-14.474-31.865-14.476-.393-22.991-.393-22.992-5.788-2.315c-3.183-1.271-5.262-2.832-4.618-3.466.642-.634 24.265-8.853 52.495-18.267 28.23-9.413 52.027-17.817 52.885-18.674 1.123-1.123.073-2.179-3.755-3.778-2.922-1.222-8.998-3.902-13.502-5.959l-8.19-3.742 33.298-10.819c18.314-5.952 33.297-11.506 33.297-12.347s-5.8-3.77-12.889-6.511c-7.088-2.741-12.89-5.348-12.89-5.79 0-.443 6.77-2.995 15.042-5.668 8.272-2.675 14.557-5.291 13.964-5.815s-5.75-2.754-11.46-4.956c-5.71-2.201-10.385-4.414-10.385-4.917 0-.502 7.573-3.375 16.828-6.383l16.827-5.469 12.832 4.953 12.831 4.951 15.097-4.7c8.302-2.584 22.716-7.058 32.028-9.938l16.934-5.238 12.814 4.621c7.047 2.542 13.098 5.076 13.441 5.632.608.989-47.752 17.864-78.383 27.352-8.468 2.622-15.396 5.229-15.396 5.793 0 .563 5.478 3.175 12.17 5.804 6.691 2.63 12.163 5.103 12.158 5.497-.004.394-19.174 7.422-42.6 15.618-55.776 19.514-57.634 20.206-57.634 21.472 0 .594 5.48 3.275 12.174 5.959 6.696 2.685 12.174 5.238 12.174 5.676 0 .438-7.088 3.268-15.754 6.284-8.664 3.02-15.754 5.951-15.754 6.519 0 .565 6.48 3.829 14.4 7.25l14.4 6.221-17.442 6.182c-9.593 3.399-18.003 6.183-18.688 6.183-.687 0-7.595-2.854-15.354-6.339L151.48 209l-17.73 6.328c-9.75 3.479-18.319 6.523-19.038 6.765-.72.239 9.72 5.484 23.2 11.654l24.508 11.221.394 22.063.393 22.062 15.328 6.999 15.327 6.998.427-22.042.426-22.041-9.752-4.493c-5.365-2.472-9.554-4.688-9.309-4.922.243-.235 8.367-3.353 18.05-6.93l17.603-6.5 14.62 6.547c8.04 3.6 15.073 6.951 15.63 7.446.558.497-6.71 3.731-16.148 7.188l-17.162 6.284 4.011 2.438c2.206 1.342 6.355 3.214 9.22 4.159 2.866.945 5.59 2.708 6.054 3.915.463 1.208.842 11.688.842 23.291v21.095l15.396 7.377c8.47 4.059 16.364 8.052 17.545 8.877 1.182.825 8.432 4.373 16.111 7.884l13.964 6.386v45.776l-4.654-1.955c-2.56-1.075-8.844-3.942-13.965-6.37-5.118-2.429-10.113-4.416-11.099-4.416-1.354-.003-1.79 5.352-1.79 21.999v22.001l31.15 13.997c17.133 7.698 31.938 14.62 32.903 15.381 1.218.961 1.875 8.19 2.148 23.604l.393 22.221 13.605 6.201c7.484 3.411 14.09 6.235 14.68 6.277.592.042 1.074-9.592 1.074-21.407 0-11.814.421-21.481.937-21.481.514 0 5.187 2.017 10.383 4.481 5.196 2.466 12.187 5.665 15.534 7.111l6.087 2.626v-91.41l-23.273-11.297c-12.8-6.212-27.3-13.101-32.224-15.306l-8.95-4.012v-21.287c0-13.779.524-21.287 1.49-21.287.817 0 4.014 1.289 7.103 2.865 5.383 2.747 9.673 3.963 6.215 1.763-.957-.608 6.088-4.148 16.595-8.341l18.256-7.281 16.818 7.45 16.821 7.452-16.228 6.813c-8.927 3.747-17.43 7.259-18.897 7.804-1.945.725 5.222 4.611 26.495 14.371 16.04 7.358 35.93 16.236 44.201 19.73 8.27 3.493 19.775 8.549 25.568 11.234 5.793 2.688 11.701 4.884 13.13 4.884 1.43 0 10.334-3.473 19.79-7.716l17.19-7.715 13.358 5.99c24.291 10.888 19.861 10.734 40.381 1.397 9.951-4.528 18.096-8.644 18.096-9.146s-4.996-3.083-11.102-5.736a1497.053 1497.053 0 0 1-21.84-9.743c-17.025-7.797-36.203-16.025-37.344-16.025-1.094 0-55.629-23.684-88.366-38.374l-19.013-8.531 17.581-7.061 17.58-7.061 15.754 6.773c8.665 3.725 17.365 6.826 19.334 6.893 1.97.065 10.8-2.865 19.623-6.511l16.043-6.631 15.78 6.62c8.678 3.641 16.975 6.619 18.438 6.619 2.582 0 18.06-6.373 39.316-16.189 5.711-2.637 14.102-6.275 18.645-8.083 4.541-1.811 8.572-3.796 8.953-4.414.383-.618-6.39-3.923-15.05-7.343-8.663-3.419-15.755-6.583-15.759-7.029-.006-.445 3.693-2.322 8.225-4.169a726.234 726.234 0 0 0 16.113-6.845l7.877-3.485-15.402-6.077c-8.47-3.341-15.719-6.393-16.105-6.779-.389-.387 5.953-3.429 14.094-6.76l14.797-6.058 15.287 5.813c8.406 3.197 16.494 5.813 17.973 5.813s9.73-2.934 18.336-6.52l15.648-6.518 16.566 6.159c9.111 3.389 16.5 6.806 16.42 7.593-.082.787-6.936 4.233-15.227 7.657a6238.157 6238.157 0 0 0-31.54 13.146l-16.468 6.922 6.441 2.697c3.543 1.486 11.436 4.579 17.541 6.877 6.104 2.298 11.098 4.571 11.098 5.05 0 .48-6.604 3.643-14.678 7.027-37.545 15.74-84.14 36.337-84.14 37.191 0 .926 11.712 5.924 52.386 22.354l20.164 8.146 19.938-9.228c33.447-15.479 79.143-36.188 97.273-44.082 9.451-4.116 17.508-7.995 17.9-8.617.81-1.277 29.39-14.325 31.383-14.325 2.938 0 30.205-13.45 29.176-14.392-.617-.563-6.924-3.122-14.014-5.688a3387.902 3387.902 0 0 1-16.426-5.982c-3.207-1.194-2.164-1.933 11.166-7.897 8.088-3.62 14.19-7.034 13.561-7.587-.625-.554-8.055-3.435-16.508-6.404s-15.082-5.864-14.729-6.435c.352-.57 6.408-3.455 13.457-6.411l12.818-5.376 16.813 5.875c9.246 3.231 17.988 5.875 19.424 5.875 1.44 0 9.072-2.862 16.961-6.36l14.346-6.361 15.824 5.646c8.703 3.104 16.676 5.645 17.721 5.645s7.934-2.797 15.311-6.215l13.41-6.214-14.299-4.701c-7.863-2.584-16.234-5.568-18.598-6.628-2.36-1.061-11.3-4.418-19.863-7.46l-15.564-5.532 12.365-5.312 12.363-5.313 35.426 11.466 35.426 11.465 14.342-6.396c7.891-3.521 14.844-6.397 15.453-6.397 1.66 0 .453 731.532-1.209 733.13-.756.725-13.94 6.938-29.3 13.809-38.909 17.402-84.233 37.921-99.536 45.06-7.09 3.306-29.326 13.426-49.412 22.489-20.086 9.065-69.387 31.47-109.56 49.786-40.173 18.318-85.608 38.957-100.97 45.865-15.359 6.905-36.307 16.413-46.543 21.127-19.51 8.979-63.609 29.091-75.963 34.644l-7.217 3.242-19.278-8.876.011-.004zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm-.337-115.987l-.379-44.978-31.507-14.551c-17.329-8.002-32-14.104-32.603-13.558-.603.548-.925 21.219-.717 45.937l.38 44.94 31.507 14.528c17.33 7.993 32 14.108 32.603 13.594.604-.512.925-21.173.716-45.912zm162.17-131.492v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.088 2.283.137 2.504-1.799 2.504-21.965zm95.931-47.702l-.026-22.557-14.382-6.445c-7.909-3.545-14.988-6.66-15.727-6.923-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.429zm-257.766-48.818v-45.595l-15.396-6.934c-8.467-3.814-15.896-7.352-16.507-7.863-.61-.511-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.36c.715-30.074.576-44.837-.43-45.843-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.469-2.307 43.666-1.27-.487-8.358-3.581-15.755-6.874l-13.446-5.99-.063-22.996c-.035-12.646-.028-33.308.015-45.911l.076-22.914-16.842-7.474c-40.496-17.969-46.305-20.455-47.799-20.455-1.143 0-1.292 12.421-.54 44.755.573 24.616 1.25 45.114 1.502 45.551.252.438 14.356 7.143 31.341 14.901l30.88 14.108v45.194l-17.544-7.951c-9.649-4.374-23.6-10.775-31-14.228-7.4-3.451-14.008-6.273-14.68-6.273s-1.224 10.335-1.224 22.967v22.969l16.47 7.738 16.47 7.739V627.173l14.97 7.063c8.233 3.885 15.628 7.062 16.434 7.062.916 0 1.611-8.275 1.858-22.146l.395-22.146 15.038 6.852 15.038 6.854.392 22.952.394 22.954 16.076 7.301c8.845 4.016 16.24 7.336 16.438 7.38.196.042.358-20.44.358-45.518h-.006zm97.204-27.538l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.72 1.071-45.405zm160.586-15.006v-22.258l-9.667-4.389a1472.693 1472.693 0 0 0-15.754-7.05l-6.087-2.66V592.022l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zm0-137.953v-21.291l-6.803-2.899a971.86 971.86 0 0 1-15.074-6.635l-8.27-3.733.395 21.649.396 21.647 13.604 6.202c7.484 3.411 14.09 6.235 14.681 6.277s1.071-9.505 1.071-21.217zm64.447-15.925v-22.895l-4.654-2.015c-2.56-1.107-9.487-4.25-15.396-6.982l-10.742-4.97.45 23.076.445 23.076 14.591 6.681c8.023 3.674 14.751 6.734 14.946 6.802.2.067.36-10.181.36-22.773zm-356.926-48.013c-1.827-1.625-27.326-13.589-28.964-13.589-.476 0-.688 10.092-.472 22.427l.396 22.426 15.038 6.775 15.038 6.774.395-21.594c.296-16.126-.065-22.003-1.43-23.219zm66.198 5.962v-21.982l-14.456-6.661c-7.95-3.665-15.04-6.662-15.754-6.662-.72 0-1.299 9.764-1.299 21.884v21.885l14.681 6.723c8.074 3.697 15.164 6.738 15.753 6.759.591.019 1.075-9.857 1.075-21.946zm127.462-55.354c-1.183-.764-2.792-1.39-3.58-1.39-.787 0-.466.625.716 1.39 1.182.764 2.792 1.387 3.58 1.387s.465-.624-.716-1.387zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.676a1616.703 1616.703 0 0 1 15.791 7.065l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm50.126-527.197c-5.12-2.094-12.808-5.404-17.084-7.359l-7.775-3.554 18.158-6.937c9.987-3.815 18.158-7.097 18.158-7.291 0-.193-6.435-3.151-14.297-6.572-7.863-3.421-13.824-6.625-13.247-7.12 1.357-1.167 32.941-12.799 34.75-12.799.757 0 6.05 2.122 11.765 4.716 5.713 2.593 11.995 5.395 13.955 6.226 3.491 1.477 3.417 1.574-3.404 4.593-3.833 1.695-7.49 3.084-8.126 3.084-2.042 0-18.53 7.502-18.508 8.422.011.487 6.737 3.786 14.945 7.332 8.208 3.544 14.48 6.881 13.94 7.415-.975.965-8.835 4.196-25.328 10.412l-8.594 3.237-9.308-3.805zm61.983-2.721c-8.05-3.663-14.646-6.983-14.659-7.376-.012-.396 7.937-3.745 17.662-7.447l17.685-6.73 15.234 6.646c8.378 3.655 15.235 7.054 15.235 7.554 0 1.058-33.015 14.368-35.11 14.155-.774-.079-7.996-3.14-16.047-6.802zm421.062-28.547c-9.625-3.689-17.03-7.176-16.46-7.744.57-.571 7.644-3.927 15.72-7.459l14.682-6.422 17.891 6.701c9.84 3.687 17.891 7.109 17.891 7.607 0 1.014-28.982 14.206-30.963 14.093-.696-.039-9.138-3.089-18.76-6.776zm-278.678-1.345c-8.508-3.604-14.952-7.054-14.32-7.665.631-.61 7.855-3.773 16.056-7.027l14.91-5.918 16.956 6.875c9.325 3.781 16.957 7.205 16.957 7.608 0 1.197-29.789 12.896-32.552 12.782-1.395-.054-9.499-3.05-18.007-6.655zm70.965.716c-8.07-3.237-14.68-6.317-14.68-6.846s7.164-3.875 15.92-7.438l15.92-6.48 16.305 6.503c8.967 3.576 16.3 6.87 16.291 7.318-.02 1.324-29.189 12.996-32.26 12.908-1.548-.046-9.42-2.73-17.496-5.965zm-204.135-28.717l-14.016-5.89 16.467-6.123 16.47-6.122 14.017 5.821c7.71 3.203 14.182 5.976 14.38 6.164.481.456-30.98 12.301-32.284 12.153-.559-.062-7.324-2.765-15.034-6.003zm116.874-6.741c-1.532-1.343-30.817-12.932-32.682-12.934-1.338-.001-13.396-4.91-44.477-18.108-7.133-3.029-13.117-6.152-13.299-6.939-.182-.789 7.587-4.232 17.266-7.654 43.815-15.498 76.054-28.084 76.671-29.936.277-.834-2.91-2.651-7.085-4.037-4.176-1.386-10.079-3.632-13.118-4.991l-5.524-2.471 8.39-3.091a3625.554 3625.554 0 0 0 14.542-5.394c3.384-1.266 5.64-2.77 5.013-3.341-.628-.571-7.427-3.368-15.109-6.214l-13.968-5.173-26.133 9.366c-37.706 13.516-38.552 13.856-37.298 15.053.627.598 6.87 3.281 13.87 5.96l12.728 4.872-15.253 5.379-15.253 5.379-14.912-5.831c-8.2-3.206-15.43-5.829-16.064-5.829-2.095 0-27.705-10.491-27.705-11.349 0-.982 44.374-16.489 94.775-33.123l35.344-11.664 13.73 5.08 13.728 5.08 14.66-5.168 14.66-5.169 16.053 5.895 16.055 5.897 28.946-10.688c15.922-5.876 29.252-10.989 29.623-11.359.371-.372-.223-.999-1.318-1.396-10.752-3.87-33.074-11.776-43.24-15.314l-12.6-4.386-14.55 5.028-14.554 5.029-15.813-4.983c-8.698-2.74-22.362-7.241-30.368-10.001l-14.554-5.018-29.844 9.612-29.843 9.612-11.732-4.043c-6.453-2.225-11.49-4.435-11.196-4.914.296-.479 33.156-11.79 73.021-25.137l72.483-24.27 13.73 4.853 13.727 4.853 12.705-4.061 12.701-4.061 13.023 4.162 13.023 4.162-13.31 4.439c-7.319 2.441-12.698 4.792-11.95 5.224s7.627 2.853 15.287 5.38l13.926 4.594 14.36-4.708 14.356-4.706 14.322 4.694c7.875 2.582 14.32 4.904 14.32 5.16s-5.154 2.298-11.457 4.537c-6.3 2.238-11.457 4.432-11.457 4.875 0 .441 5.48 2.587 12.174 4.768 6.695 2.182 12.172 4.474 12.172 5.094 0 .623-5.477 2.99-12.172 5.264s-12.174 4.492-12.174 4.931c0 .439 5.48 2.582 12.174 4.762 6.695 2.182 12.172 4.491 12.172 5.135 0 .643-1.77 1.827-3.938 2.632-14.654 5.441-21.49 8.231-23.988 9.792-1.574.984-11.563 4.679-22.197 8.208-10.635 3.528-27.713 9.455-37.953 13.165-29.215 10.59-28.053 10.471-43.948 4.516l-13.635-5.106-14.383 5.278c-7.908 2.904-14.609 5.906-14.888 6.672-.849 2.327 23.188 10.855 28.851 10.236 2.758-.302 10.56-2.758 17.338-5.459l12.325-4.911 7.726 3.154c4.248 1.734 10.824 4.259 14.615 5.607 3.787 1.352 6.688 2.62 6.443 2.821s-13.818 5.408-30.165 11.57c-16.344 6.162-29.716 11.567-29.715 12.015.001.444 6.513 3.288 14.471 6.318 7.957 3.031 13.917 5.985 13.244 6.567-.672.582-7.509 3.394-15.194 6.248l-13.974 5.189-16.472-6.365-16.47-6.366-16.458 5.996c-9.052 3.298-15.975 6.447-15.386 7 .864.809 45.18 19.166 58.916 24.407 1.883.717 3.125 1.604 2.761 1.965-1.933 1.933-32.656 13.052-33.65 12.182v-.001h.006zm139.162-167.66c7.492-2.4 13.621-4.857 13.621-5.46 0-.604-5.842-2.962-12.982-5.245l-12.984-4.149-11.72 4.092c-6.448 2.251-12.618 4.559-13.716 5.126-1.66.859 5.262 3.733 23.816 9.888.187.059 6.471-1.853 13.965-4.252zm-87.35-10.852c6.304-2.066 11.942-4.191 12.53-4.721.585-.529-4.41-2.744-11.1-4.923l-12.168-3.962-12.167 3.962c-6.69 2.179-11.656 4.473-11.03 5.098.923.923 19.22 7.815 21.76 8.195.392.059 5.87-1.582 12.175-3.649zM231.964 215.705c-7.085-3.143-13.066-5.897-13.293-6.125-.225-.228 7.344-3.155 16.821-6.51 9.48-3.353 17.231-6.572 17.231-7.156s-5.828-3.503-12.95-6.491c-7.126-2.988-12.443-5.922-11.816-6.521.625-.597 7.26-3.175 14.743-5.726s14.143-5.109 14.797-5.684c.656-.573 2.912-.206 5.013.815 2.103 1.021 8.01 3.582 13.13 5.692 5.12 2.108 9.795 4.293 10.39 4.854.593.562-6.013 3.555-14.682 6.656-8.667 3.099-15.759 6.038-15.759 6.529 0 .49 5.822 3.334 12.94 6.318 7.115 2.983 13.22 5.881 13.563 6.438.803 1.298-30.578 12.942-34.38 12.759-1.575-.072-8.662-2.705-15.748-5.848zm319.49-6.574c-.577-.584-7.866-3.7-16.202-6.927-8.336-3.226-14.56-6.233-13.83-6.685.73-.452 15.172-6.059 32.09-12.46l30.76-11.639 14.68 5.374c8.074 2.957 14.68 5.775 14.68 6.268 0 .491-6.28 3.354-13.963 6.358-7.68 3.006-14.607 5.956-15.396 6.554-.787.599-7.553 3.505-15.037 6.458-7.48 2.952-14.309 5.906-15.168 6.565-.865.656-2.04.717-2.615.134zm184.13-6.958c-8.939-3.343-16.518-6.343-16.838-6.666-.322-.323 5.531-3.061 13.012-6.083 7.48-3.024 13.445-5.628 13.258-5.788-.188-.161-7.107-2.697-15.379-5.635-8.27-2.939-16.006-6.146-17.188-7.124-1.182-.98-8.43-3.969-16.109-6.643-7.676-2.672-13.96-5.242-13.963-5.709 0-.466 4.67-2.641 10.381-4.833s11.783-4.854 13.494-5.914c2.75-1.706 5.07-1.24 20.063 4.026l16.953 5.955 14.107-5.583c10.787-4.271 13.48-5.844 11.443-6.688-1.465-.605-8.459-3.166-15.543-5.687l-12.879-4.582 7.15-3.115c3.936-1.714 9.73-3.984 12.881-5.048 3.15-1.063 6.695-2.713 7.877-3.667s7.303-3.776 13.605-6.272c6.301-2.496 11.658-4.738 11.904-4.981.246-.244-6.54-2.772-15.082-5.618l-15.53-5.175-12.468 5.027c-6.855 2.764-13.736 5.026-15.29 5.026-2.839 0-59.08-19.23-63.097-21.574-1.455-.85-1.56-1.269-.332-1.298.998-.023 7.252-2.202 13.896-4.839l12.076-4.796 16.182 5.599 16.182 5.6 13.893-5.242 13.893-5.244 31.221 10.347c17.172 5.691 31.678 10.755 32.232 11.25.555.496-4.584 3.107-11.418 5.802l-12.432 4.897 16.961 5.654 16.961 5.653 12.764-5.222 12.762-5.22 34.393 11.076c22.475 7.235 33.502 11.408 31.822 12.038-1.414.529-13.654 5.855-27.205 11.835l-24.635 10.875-17.615-6.228-17.613-6.226-27.928 11.748c-15.36 6.461-27.67 12.341-27.355 13.065.314.724 7.35 3.731 15.631 6.684 8.283 2.952 15.271 5.58 15.533 5.842.477.477-25.13 10.965-33.168 13.584-2.363.771-9.453 3.604-15.756 6.296l-11.457 4.896-16.25-6.075zM305.35 189.74c-9.146-3.859-13.297-6.272-12.02-6.986 1.072-.601 8.55-3.438 16.616-6.307l14.667-5.217 14.183 5.527c7.802 3.041 13.997 6.085 13.771 6.768-.456 1.368-29.104 12.447-31.65 12.24-.878-.072-7.882-2.782-15.567-6.025zm329.762.222c-8.27-3.152-15.53-6.214-16.143-6.805-1.24-1.207 24.016-11.608 28.188-11.608 2.658 0 35.641 11.55 34.893 12.22-1.076.962-29.412 12.113-30.563 12.025-.734-.057-8.103-2.681-16.375-5.832zm224.43-14.035l-14.027-5.32 6.15-2.647c3.383-1.456 8.854-3.822 12.158-5.257 7.9-3.435 8.697-3.345 25.951 2.927l14.771 5.371-11.428 5.287c-6.287 2.906-13.258 5.212-15.49 5.123-2.23-.091-10.37-2.558-18.085-5.484zm-260.949-23.913c-9.45-3.59-23.252-8.716-30.664-11.392-15.242-5.501-15.91-5.895-12.146-7.147 1.49-.496 4.74-1.8 7.225-2.897 2.48-1.097 5.23-1.995 6.105-1.995s2.713-.644 4.08-1.432c1.367-.786 10.754-4.606 20.855-8.488l18.37-7.061 14.93 5.143c8.21 2.829 14.927 5.616 14.927 6.194s-6.244 3.47-13.877 6.426l-13.875 5.376 14.117 5.155c7.766 2.835 14.336 5.816 14.605 6.623.268.807-5.449 3.708-12.707 6.445a15237.33 15237.33 0 0 0-13.975 5.276c-.43.167-8.517-2.636-17.97-6.226zM124 140.457l-12.002-5.223 33.485-11.181c18.418-6.148 34.41-11.19 35.536-11.202 2.685-.029 24.445 8.874 24.445 10.003 0 .706-67.287 23.021-68.96 22.868-.275-.023-5.902-2.393-12.504-5.265zm535.103-11.455c-7.68-2.81-13.965-5.552-13.965-6.098 0-2.199 24.775-10.382 29.197-9.642 7.688 1.285 29.803 9.885 28.56 11.108-1.997 1.963-23.85 9.945-26.93 9.839-1.595-.055-9.18-2.4-16.862-5.207z\"></path><path fill=\"#5A9A30\" d=\"M497.568 1130.389a8284.62 8284.62 0 0 1-31.81-14.731l-12.53-5.854v-21.575c0-17.51.376-21.575 2-21.575 1.1 0 6.737 2.216 12.53 4.922 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.213v-68.213l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.977-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.262.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.821c-8.45-3.75-15.83-6.813-16.4-6.804-.57.012-1.216 9.907-1.433 21.993l-.395 21.975-15.038-6.772-15.038-6.774-.716-23.362-.716-23.363-32.08-14.753c-17.647-8.113-32.317-14.752-32.604-14.752-.285 0-.35 20.651-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314v46.362l15.754 7.311 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.202-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6658.637 6658.637 0 0 1-30.992-14.229c-7.002-3.248-13.285-5.906-13.963-5.906-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.527-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.97-.69-.69-8.085-4.376-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.443-15.762-6.443-.879 0-1.424 8.245-1.424 21.602 0 11.881-.56 21.387-1.244 21.124-.687-.263-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.724V819.6c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.545 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.197.708-22.197 2.034 0 30.24 13.435 31.136 14.83.58.9 1.063 11.379 1.074 23.283l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.067l.392 22.848 14.646 6.593c36.401 16.393 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.087-.394-23.087 11.135 5.146c6.125 2.829 13.237 6.058 15.81 7.168l4.674 2.022-.379-46.016-.378-46.013-30.792-14.108c-16.936-7.761-31.597-14.134-32.582-14.163-1.354-.044-1.79 5.184-1.79 21.521v21.579l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.832-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.836 0 12.781-.568 22.296-1.332 22.296-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.469-1.79 21.425-.984-.03-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.854 3.242 1.276c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.311-15.755-7.311V459.886l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.624 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.54-14.93-6.997-16.11-7.684-1.737-1.01-2.226-5.544-2.543-23.652-.257-14.519.118-22.401 1.065-22.401.803 0 7.912 2.898 15.798 6.444 7.888 3.544 14.643 6.445 15.012 6.445s.85-10.228 1.065-22.729l.394-22.726 15.038 6.916 15.037 6.916.393 23.483.392 23.482 16.078 7.281c8.844 4.004 17.57 7.696 19.394 8.206 1.821.511 9.395 3.75 16.827 7.199l13.514 6.271v22.96c0 12.63-.482 22.962-1.074 22.964-.59 0-8.808-3.484-18.26-7.746-32.754-14.763-43.693-19.467-45.275-19.467-1.15 0-1.302 12.306-.545 44.755.572 24.616 1.25 45.114 1.502 45.551.252.438 14.356 7.145 31.34 14.901l30.88 14.108v45.194l-17.545-7.95c-9.648-4.375-23.6-10.776-31-14.229-7.4-3.451-14.008-6.273-14.68-6.273-.673 0-1.224 10.335-1.224 22.969v22.967l16.47 7.738 16.47 7.739V627.175l14.97 7.063c8.233 3.885 15.63 7.062 16.434 7.062.917 0 1.611-8.275 1.86-22.146l.394-22.146 15.038 6.852 15.038 6.854.393 23 .394 22.998 8.2 3.615a2812.276 2812.276 0 0 1 16.436 7.314l8.234 3.7v-91.153l-15.396-6.934c-8.467-3.814-15.896-7.352-16.507-7.863-.61-.511-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.36c.715-30.074.576-44.836-.43-45.843-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.469-2.307 43.666-1.27-.487-8.358-3.581-15.754-6.874l-13.447-5.99-.066-22.996c-.116-40.188.182-67.269.743-67.831.3-.299 7.09 2.416 15.09 6.034 8 3.617 14.813 6.577 15.143 6.577.331 0 .6-30.612.6-68.028 0-37.921.554-68.026 1.252-68.026.69 0 7.502 2.898 15.138 6.444 7.64 3.545 14.485 6.444 15.218 6.444.761 0 1.332-9.172 1.332-21.401v-21.401l15.396 7.029 15.396 7.029.395 22.196.396 22.197-15.223-7.109c-8.374-3.909-15.486-7.108-15.81-7.108s-.418 20.695-.21 45.989l.378 45.99 15.038 6.773 15.038 6.776.395-22.774c.458-26.426-1.879-24.688 19.713-14.666l13.48 6.256.392 24.053.394 24.052 6.444 3.152c3.545 1.733 10.633 4.873 15.754 6.973 5.12 2.104 16.544 7.076 25.388 11.054l16.076 7.233.394 22.899.392 22.9 15.038 6.775 15.038 6.774.396-22.041c.217-12.122.644-22.041.946-22.041.304 0 7.538 3.152 16.076 7.008l15.523 7.005.395-22.906.395-22.906 3.241.814c3.27.818 23.196 10.251 32.49 15.376 10.733 5.917 58.86 28.499 60.741 28.499 1.095 0 7.691 2.639 14.663 5.864 6.972 3.227 14.15 6.441 15.954 7.146l3.278 1.282-.415-46.25-.416-46.25 12.172-5.527c6.697-3.039 17.977-7.905 25.064-10.813 7.09-2.908 19.98-8.69 28.643-12.851a3349.562 3349.562 0 0 1 29.002-13.73c7.287-3.396 13.248-6.47 13.248-6.835s-7.25-3.706-16.11-7.424c-8.862-3.719-16.757-7.244-17.546-7.837-1.635-1.228-36.057-15.747-37.334-15.747-.459 0-8.773 3.473-18.477 7.719l-17.639 7.715-18.057-7.909c-9.932-4.352-18.058-8.343-18.058-8.87 0-1.053 31.388-14.411 33.86-14.411.842 0 7.981-2.821 15.868-6.271s16.842-7.074 19.898-8.057c4.895-1.572 11.938-4.409 21.314-8.587 8.846-3.938 16.143-6.938 19.025-7.817 1.8-.549 9.682-3.801 17.512-7.227l14.238-6.228 16.146 6.479c8.881 3.563 16.3 6.623 16.484 6.799.188.175-3.355 1.836-7.877 3.688-4.52 1.853-13.693 5.872-20.39 8.933-6.696 3.06-13.462 6.136-15.038 6.835-9.783 4.341-16.922 7.397-20.045 8.587-4.178 1.587-4.648 3.644-1.08 4.719 1.38.415 17.633 6.936 36.117 14.489 18.486 7.552 34.373 13.732 35.303 13.732.932 0 11.584-4.568 23.676-10.154 56.777-26.225 74.715-34.364 86.27-39.147 6.861-2.84 18.855-8.366 26.658-12.281 7.801-3.915 19.53-9.341 26.066-12.059 6.537-2.717 17.363-7.5 24.06-10.628 9.843-4.6 11.626-5.892 9.308-6.75-1.574-.585-5.119-1.98-7.877-3.103-2.756-1.122-9.039-3.372-13.963-5.003-4.924-1.63-8.95-3.393-8.95-3.917 0-.525 2.74-2.146 6.085-3.602 3.35-1.456 9.43-4.158 13.518-6.004 4.082-1.849 8.326-3.358 9.426-3.358s9.064 2.521 17.703 5.603l15.705 5.603 32.154-14.238c17.686-7.829 42.64-19.082 55.45-25.006 12.812-5.923 25.7-11.644 28.642-12.709 2.941-1.066 10.381-4.257 16.527-7.091 6.15-2.832 11.492-5.149 11.873-5.149 1.387 0-.236 731.795-1.627 733.128-.756.727-13.939 6.939-29.299 13.811-38.908 17.402-84.232 37.921-99.535 45.06-7.09 3.306-29.326 13.426-49.41 22.489-20.088 9.065-69.39 31.47-109.563 49.786-40.172 18.318-85.607 38.957-100.969 45.865-15.359 6.905-36.305 16.413-46.545 21.127-19.506 8.979-63.607 29.091-75.96 34.643l-7.219 3.243-19.277-8.876h-.003zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm-.337-115.987l-.379-44.978-31.507-14.551c-17.329-8.002-32-14.104-32.603-13.558-.603.548-.925 21.219-.717 45.937l.38 44.94 31.507 14.528c17.33 7.993 32 14.108 32.603 13.594.604-.512.925-21.173.716-45.912zm162.17-131.492v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.088 2.283.137 2.504-1.799 2.504-21.965zm95.931-47.702l-.026-22.557-14.382-6.445c-7.909-3.545-14.988-6.66-15.727-6.923-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.429zm-160.562-76.356l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.72 1.071-45.405zm160.586-15.006v-22.258l-9.667-4.389a1472.693 1472.693 0 0 0-15.754-7.05l-6.087-2.66V592.022l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.677a1589.925 1589.925 0 0 1 15.791 7.064l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm257.79-385.515l-15.038-7.019-.394-22.927-.393-22.929 9.701 4.442c5.336 2.443 12.604 5.581 16.146 6.972l6.445 2.529.395 23.061c.217 12.683-.106 23.021-.716 22.974-.61-.045-7.876-3.243-16.147-7.103zm-194.417-44.457l-14.68-7.004v-21.67c0-20.047.187-21.597 2.505-20.711 1.38.529 8.467 3.66 15.75 6.957l13.242 5.997.004 21.841c.004 12.014-.478 21.785-1.067 21.719-.592-.07-7.68-3.277-15.754-7.129zm-83.964-129.709c-6.99-3.505-12.469-6.61-12.173-6.901.298-.291 7.728-3.171 16.513-6.401l15.972-5.872 13.772 6.001c7.575 3.302 13.277 6.481 12.672 7.068-1.235 1.196-31.786 12.811-33.162 12.608-.485-.072-6.6-2.998-13.594-6.503zm556.936.847a9352.168 9352.168 0 0 0-16.47-6.475c-1.308-.511 3.532-3.318 12.39-7.186l14.537-6.35 16.604 6.096c9.133 3.352 16.596 6.417 16.582 6.811-.025.734-27.316 12.969-28.604 12.821-.394-.045-7.162-2.619-15.039-5.717zm-108.623-13.976c-9.252-3.552-16.31-6.895-15.682-7.428 1.87-1.592 60.73-26.28 62.656-26.28.977 0 9.393 2.824 18.705 6.275l16.934 6.275-7.762 3.438c-4.268 1.893-15.494 6.521-24.947 10.29-9.45 3.766-20.762 8.432-25.133 10.368l-7.949 3.519-16.822-6.457zm-538.586-28.048c-7.68-3.708-12.083-6.58-11.063-7.211 3.188-1.97 30.823-10.859 33.772-10.866 3.104-.006 26.58 10.071 26.563 11.401-.01.706-34.248 13.026-35.833 12.893-.374-.028-6.422-2.827-13.439-6.217zm133.07.307c-7.086-3.143-13.063-5.893-13.279-6.11-.55-.55 31.813-12.269 33.884-12.269.92 0 5.683 1.699 10.582 3.776s11.164 4.73 13.92 5.897l5.012 2.121-17.08 6.276c-9.396 3.45-17.772 6.218-18.619 6.147-.847-.068-7.335-2.695-14.42-5.838zm173.284-11.982c-6.3-2.643-13.39-5.53-15.754-6.414-4.208-1.574-3.994-1.722 10.58-7.239 8.182-3.099 16.236-5.601 17.901-5.56 3.87.093 29.978 10.604 30.542 12.3.464 1.391-26.27 12.054-29.703 11.847-1.16-.07-7.263-2.291-13.566-4.934zm129.611-2.043c-12.488-5.074-13.313-5.643-10.025-6.938 1.97-.775 8.512-3.38 14.537-5.787l10.96-4.375 11.241 4.362c6.182 2.399 12.85 5.003 14.818 5.787 3.293 1.309 2.484 1.868-10.023 6.951-7.482 3.039-14.572 5.527-15.754 5.527-1.18.001-8.27-2.488-15.754-5.527zm98.908-12.198c-18.424-6.845-18.494-5.848.98-13.568l11.81-4.684 16.632 6.102 16.631 6.1-8.05 3.396c-4.433 1.867-11.106 4.599-14.839 6.068l-6.783 2.673-16.38-6.087zm111.98-6.903c-17.526-6.396-31.866-12.03-31.866-12.52 0-1.144 25.846-11.4 28.727-11.4 1.195 0 16.004-5.83 32.91-12.956 16.906-7.127 35.787-14.982 41.96-17.458l11.22-4.503 16.244 5.348c8.934 2.939 17.693 5.625 19.47 5.966 4.862.938 30.487 9.5 31.702 10.594 1.207 1.085-22.727 11.577-26.408 11.577-1.316 0-9.86-2.624-18.99-5.829l-16.598-5.828-28.61 11.885c-15.735 6.536-28.61 12.396-28.61 13.02 0 1.235.412 1.414 19.172 8.373 14.414 5.346 14.896 3.776-3.686 12.009-4.479 1.984-9.635 3.55-11.457 3.48-1.82-.072-17.652-5.363-35.178-11.757h-.003zm-306.485-17.761c-7.285-2.808-13.242-5.503-13.235-5.989.007-.487 6.401-3.242 14.211-6.123l14.201-5.238 13.715 5.105c7.544 2.81 13.712 5.487 13.707 5.953-.007.666-20.976 8.905-27.919 10.973-.788.232-7.393-1.872-14.68-4.681zm-124.24-23.459c-5.513-2.3-11.292-4.723-12.842-5.382-2.277-.968-.767-1.905 7.877-4.887 5.881-2.028 27.635-9.513 48.338-16.632l37.646-12.944 12.122 4.417c12.236 4.456 14.194 5.945 9.617 7.313-5.38 1.604-24.14 8.349-26.853 9.651-4.16 1.998-63.748 22.896-64.904 22.761-.538-.062-5.487-1.995-11-4.297zm-94.384-13.419l-11.317-4.686 15.261-5.11 15.263-5.111 8.946 3.643c4.92 2.004 10.558 4.288 12.526 5.077 3.24 1.298 2.224 1.895-10.688 6.279-7.846 2.666-15.258 4.79-16.47 4.721-1.212-.072-7.297-2.237-13.52-4.813zm222.562-9.529c-20.056-7.799-19.608-6.722-5.012-12.118 7.09-2.621 14.461-4.802 16.382-4.844 1.92-.042 10.057-2.394 18.081-5.223l14.588-5.144 13.021 4.713c7.164 2.591 12.884 4.851 12.713 5.019-1.015.993-57.119 22.095-58.239 21.906-.436-.074-5.626-2.012-11.534-4.309zm-215.59-12.487l-12.757-5.105 15.583-4.853 15.583-4.853 11.97 4.628c6.582 2.545 11.733 4.863 11.445 5.15-.288.288-6.947 2.688-14.795 5.33l-14.273 4.807-12.757-5.104zm474.811-5.489c-14.57-5.083-27.01-9.754-27.639-10.38-.627-.627 4.32-3.129 10.994-5.561l12.14-4.423 14.067 5.039c15.914 5.698 19.57 5.663 33.041-.317 4.531-2.014 9.85-3.669 11.818-3.684 1.971-.013 9.98 2.167 17.801 4.844l14.22 4.865-11.355 4.569c-6.244 2.512-12.42 4.563-13.719 4.559-1.299-.004-8.2 2.249-15.34 5.007-7.139 2.756-14.455 4.946-16.256 4.867-1.799-.079-15.197-4.303-29.772-9.385zm-382.339-4.998c-5.88-2.328-10.914-4.454-11.182-4.724-.27-.27 6.154-2.693 14.273-5.388l14.763-4.897 12.174 4.616c13.688 5.188 14.248 4.046-5.456 11.13-5.758 2.071-11.235 3.705-12.174 3.631-.937-.073-6.515-2.039-12.398-4.368zm240.877-.085c-6.52-2.424-11.477-4.785-11.016-5.248.465-.461 6.408-2.845 13.211-5.296 6.803-2.45 12.594-5.136 12.871-5.965.275-.83-5.273-3.339-12.334-5.575-7.06-2.238-12.627-4.408-12.369-4.825s5.957-2.66 12.662-4.983l12.193-4.228 13.1 4.188c7.205 2.302 13.328 4.557 13.607 5.011.281.455-4.92 2.671-11.559 4.925s-12.07 4.593-12.07 5.199 6.182 3.159 13.732 5.676c7.553 2.517 13.19 5.061 12.531 5.652-2.449 2.203-25.21 10.055-28.893 9.968-2.096-.051-9.147-2.075-15.666-4.499zm-57.966-41.509c-6.892-2.347-12.53-4.737-12.53-5.313 0-.572 12.442-5.014 27.65-9.866l27.65-8.824 11.734 3.847c6.453 2.116 11.732 4.197 11.732 4.625s-4.67 2.512-10.383 4.632l-23.787 8.827c-7.373 2.735-14.783 5.281-16.47 5.657-1.684.374-8.704-1.239-15.596-3.585zm87.364-10.893c-6.105-2.059-11.094-4.096-11.084-4.525.008-.431 5.37-2.571 11.916-4.755l11.904-3.974 12.43 3.854c6.836 2.12 12.428 4.337 12.428 4.929 0 1.263-21.215 8.53-24.352 8.343-1.179-.071-7.138-1.813-13.242-3.872zM474.066 24.183c-6.262-2.158-10.739-4.321-9.953-4.808.79-.487 7.402-2.807 14.7-5.152l13.268-4.266 12.304 4.158c6.768 2.288 12.567 4.422 12.89 4.743.892.893-25.706 9.488-28.962 9.359-1.574-.06-7.984-1.875-14.247-4.034z\"></path><path fill=\"#5A5952\" d=\"M497.568 1130.389a8284.62 8284.62 0 0 1-31.81-14.731l-12.53-5.854v-21.575c0-17.51.376-21.575 2-21.575 1.1 0 6.737 2.216 12.53 4.922 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.213v-68.213l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.977-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.262.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.821c-8.45-3.75-15.83-6.813-16.4-6.804-.57.012-1.216 9.907-1.433 21.993l-.395 21.975-15.038-6.772-15.038-6.774-.716-23.362-.716-23.363-32.08-14.753c-17.647-8.113-32.317-14.752-32.604-14.752-.285 0-.35 20.651-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314v46.362l15.754 7.311 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.202-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6658.637 6658.637 0 0 1-30.992-14.229c-7.002-3.248-13.285-5.906-13.963-5.906-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.527-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.97-.69-.69-8.085-4.376-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.443-15.762-6.443-.879 0-1.424 8.245-1.424 21.602 0 11.881-.56 21.387-1.244 21.124-.687-.263-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.724V819.6c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.545 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.197.708-22.197 2.034 0 30.24 13.435 31.136 14.83.58.9 1.063 11.379 1.074 23.283l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.067l.392 22.848 14.646 6.593c36.401 16.393 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.087-.394-23.087 11.135 5.146c6.125 2.829 13.237 6.058 15.81 7.168l4.674 2.022-.379-46.016-.378-46.013-30.792-14.108c-16.936-7.761-31.597-14.134-32.582-14.163-1.354-.044-1.79 5.184-1.79 21.521v21.579l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.832-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.836 0 12.781-.568 22.296-1.332 22.296-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.469-1.79 21.425-.984-.03-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.854 3.242 1.276c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.311-15.755-7.311V459.886l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.624 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.54-14.93-6.997-16.11-7.684-1.737-1.01-2.226-5.544-2.543-23.652-.257-14.519.118-22.401 1.065-22.401.803 0 7.912 2.898 15.798 6.444 7.888 3.544 14.657 6.445 15.05 6.445.387 0 .704-9.99.704-22.199s.393-22.199.87-22.199c.48 0 7.567 3.007 15.753 6.683l14.885 6.681V337.295l17.544 7.927a5406.735 5406.735 0 0 0 31.15 13.943c7.483 3.312 14.41 6.678 15.395 7.481 1.985 1.624 2.677 45.509.716 45.512-.59 0-8.808-3.484-18.26-7.746-32.754-14.763-43.693-19.467-45.275-19.467-1.15 0-1.302 12.306-.545 44.755.572 24.616 1.25 45.114 1.502 45.551.252.438 14.356 7.145 31.34 14.901l30.88 14.108v45.194l-17.545-7.95c-9.648-4.375-23.6-10.776-31-14.229-7.4-3.451-14.008-6.273-14.68-6.273-.673 0-1.224 10.335-1.224 22.969v22.967l16.47 7.738 16.47 7.739V627.179l14.97 7.063c8.233 3.885 15.63 7.062 16.434 7.062.917 0 1.611-8.275 1.858-22.146l.396-22.146 15.038 6.852 15.038 6.854.393 23 .394 22.998 8.2 3.615a2812.276 2812.276 0 0 1 16.436 7.314l8.234 3.7v-91.154l-15.396-6.934c-8.467-3.814-15.896-7.352-16.507-7.863-.61-.511-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.36c.715-30.074.576-44.836-.43-45.843-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.469-2.307 43.666-1.27-.487-8.358-3.581-15.755-6.874l-13.446-5.99-.066-22.996c-.113-39.094.175-67.263.693-67.781.271-.271 6.782 2.442 14.465 6.032 7.683 3.591 14.52 6.529 15.193 6.529s1.223-30.612 1.223-68.028c0-37.415.264-68.026.59-68.026.322 0 7.572 3.151 16.11 7.004l15.522 7.004.377 46.024.38 46.021 15.217 7.124c8.37 3.918 15.45 7.124 15.733 7.124s.517-9.99.517-22.198c0-13.291.554-22.199 1.38-22.199.76 0 8.17 3.026 16.47 6.723l15.09 6.724v91.959l14.681 6.741c8.073 3.707 15.163 6.737 15.754 6.733.591-.007 1.073-9.678 1.073-21.492 0-14.759.497-21.483 1.586-21.483.873 0 8.284 3.005 16.471 6.682l14.884 6.681v45.554l14.97 7.063c8.233 3.884 15.628 7.062 16.435 7.062.916 0 1.61-8.22 1.856-21.974l.396-21.976 15.038 6.779 15.038 6.777.395-22.896c.3-17.375.816-22.725 2.148-22.185.965.392 8.358 3.774 16.434 7.518l14.68 6.806v45.557l10.383 4.75c5.713 2.613 15.54 7.163 21.841 10.112 20.746 9.711 29.61 13.618 30.89 13.618.693 0 1.438-9.921 1.655-22.045l.396-22.045 15.525 7.007c8.536 3.854 15.778 7.008 16.092 7.008.312 0 .737-20.686.944-45.966l.38-45.966 14.321-6.484c41.631-18.854 84.141-38.555 95.066-44.06 15.066-7.592 27.49-13.149 35.732-15.985 3.412-1.174 21.457-9.249 40.102-17.947 18.645-8.696 44.211-20.298 56.813-25.78 12.605-5.481 31.615-14.053 42.248-19.046 89.96-42.236 224.81-103.672 230.275-104.912l3.277-.743-.473 365.367c-.299 230.56-.979 365.854-1.846 366.686-.756.724-13.94 6.938-29.3 13.809-38.907 17.402-84.23 37.921-99.536 45.06-7.09 3.306-29.324 13.426-49.412 22.489-20.084 9.065-69.387 31.469-109.56 49.786s-85.606 38.957-100.97 45.865c-15.357 6.905-36.303 16.413-46.543 21.126-19.508 8.979-63.609 29.092-75.963 34.644l-7.217 3.243-19.274-8.885zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm-.337-115.987l-.379-44.978-31.507-14.551c-17.329-8.002-32-14.104-32.603-13.558-.603.548-.925 21.219-.717 45.937l.38 44.94 31.507 14.528c17.33 7.993 32 14.108 32.603 13.594.604-.512.925-21.173.716-45.912zm162.17-131.492v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.088 2.283.137 2.504-1.799 2.504-21.965zm95.931-47.702l-.026-22.557-14.382-6.445c-7.909-3.545-14.988-6.66-15.727-6.923-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.429zm-160.562-76.356l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.72 1.071-45.405zm160.586-15.006v-22.258l-9.667-4.389a1472.693 1472.693 0 0 0-15.754-7.05l-6.087-2.66V592.022l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.677a1589.925 1589.925 0 0 1 15.791 7.064l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm461.347-587.27c-14.467-5.754-15.902-6.631-12.89-7.862 1.864-.764 6.251-2.635 9.747-4.158 15.186-6.617 16.463-6.808 24.71-3.685 4.183 1.583 9.214 3.41 11.183 4.06 1.971.647 5.832 2.155 8.582 3.347l5 2.165-4.283 1.737c-7.982 3.238-10.002 4.084-17.176 7.201-3.939 1.712-7.482 3.238-7.877 3.393-.392.152-8.04-2.635-16.996-6.198z\"></path><path fill=\"#765338\" d=\"M497.586 1130.398a8250.163 8250.163 0 0 1-31.828-14.741l-12.53-5.854v-21.575c0-17.51.376-21.576 2-21.576 1.1 0 6.737 2.217 12.53 4.923 11.376 5.313 49.837 22.289 50.503 22.289.224 0 .407-30.695.407-68.214v-68.212l-13.028-6.063c-24.458-11.386-47.396-22.246-49.55-23.456-1.73-.978-2.224-5.404-2.542-22.896-.253-13.877.125-21.687 1.048-21.687.794 0 6.921 2.531 13.615 5.624 20.021 9.25 17.955 10.958 17.955-14.836 0-12.263.564-22.296 1.253-22.296s7.502 2.899 15.14 6.443c7.636 3.546 14.483 6.445 15.217 6.445.766 0 1.316-9.59 1.298-22.556l-.033-22.558-15.363-6.822c-8.45-3.75-15.83-6.813-16.4-6.803-.57.012-1.216 9.907-1.433 21.993l-.395 21.974-15.038-6.771-15.038-6.774-.716-23.362-.716-23.363-32.082-14.752c-17.646-8.113-32.316-14.752-32.603-14.752-.285 0-.35 20.65-.14 45.892l.376 45.896 16.112 7.313 16.11 7.314V912.946l15.754 7.312 15.754 7.311v22.283c0 12.255-.269 22.282-.597 22.282-.33 0-7.01-2.899-14.849-6.445-7.837-3.544-14.997-6.443-15.909-6.443-1.202 0-1.548 6.201-1.263 22.556l.395 22.557 16.112 7.796 16.111 7.798V1065.047l-18.26-8.325a6648.647 6648.647 0 0 1-30.992-14.23c-7.002-3.247-13.285-5.905-13.963-5.905-.677 0-1.23 9.667-1.23 21.481 0 11.815-.483 21.475-1.075 21.462-.59-.009-14.93-6.358-31.866-14.107l-30.792-14.091-.716-22.751-.716-22.749-28.644-13.197c-15.753-7.255-31.92-14.465-35.927-16.021-4.005-1.556-19.317-8.676-34.026-15.823-14.709-7.15-27.702-12.999-28.878-12.999-1.799 0-2.136 3.417-2.136 21.638 0 20.015-.187 21.563-2.506 20.677-1.377-.528-8.452-3.657-15.72-6.956l-13.214-5.997-.393-22.613-.392-22.614-15.038-6.911-15.038-6.913-.396-22.716c-.218-12.492-.962-23.278-1.652-23.971-.69-.689-8.085-4.375-16.433-8.188l-15.175-6.93v22.834c0 12.558-.316 22.832-.706 22.832-.389 0-7.16-2.9-15.048-6.444-7.887-3.545-14.979-6.444-15.762-6.444-.879 0-1.424 8.246-1.424 21.603 0 11.881-.56 21.387-1.244 21.124-.687-.264-7.764-3.377-15.729-6.922l-14.48-6.444-.026-45.454-.026-45.454 7.52 3.404c4.136 1.873 11.225 5.079 15.754 7.124l8.234 3.723v-22.188c0-15.699.48-22.18 1.64-22.18.902 0 7.966 2.898 15.7 6.443 7.731 3.544 14.406 6.444 14.83 6.444.423 0 .771-9.989.771-22.198 0-12.21.32-22.198.708-22.198 2.034 0 30.24 13.436 31.136 14.83.58.901 1.063 11.379 1.074 23.284l.022 21.646 8.951 4.005c11.292 5.054 49.768 23.206 52.632 24.834 1.741.989 2.222 5.546 2.542 24.066l.392 22.849 14.646 6.593c36.401 16.392 47.341 21.161 48.53 21.161.708 0 1.101-9.896.881-22.257l-.396-22.254-15.038-6.914-15.038-6.911-.393-23.043-.394-23.044 7.555 3.396c4.154 1.867 32.893 14.992 63.86 29.169 35.823 16.397 56.541 25.163 56.95 24.098.353-.924.472-21.632.264-46.02l-.379-44.339-31.507-14.551c-17.329-8.002-31.974-14.13-32.543-13.616-.568.515-1.214 10.662-1.432 22.554l-.397 21.621-15.038-6.916-15.038-6.915-.716-23.131-.716-23.132-30.792-14.106c-16.936-7.76-31.597-14.131-32.582-14.161-1.354-.044-1.79 5.185-1.79 21.521v21.58l-3.183-1.012c-1.75-.557-8.68-3.66-15.396-6.898l-12.212-5.889-.392-22.95-.393-22.949-31.834-14.511-31.832-14.507-.378 45.689c-.208 25.132-.679 45.691-1.048 45.691s-6.146-2.531-12.843-5.624c-20.022-9.25-17.955-10.958-17.955 14.835 0 12.78-.568 22.297-1.332 22.297-.73 0-7.579-2.899-15.217-6.443-7.636-3.547-14.449-6.445-15.139-6.445-.688 0-1.253 9.667-1.253 21.481 0 16.263-.435 21.468-1.79 21.425-.984-.032-7.913-2.908-15.396-6.391l-13.605-6.333-.378-45.855-.377-45.856 3.242 1.278c1.783.702 8.272 3.589 14.421 6.416 6.148 2.828 11.771 5.142 12.495 5.142.727 0 1.492-9.923 1.711-22.151l.395-22.152 15.396 7.033 15.396 7.032v-91.664l-15.753-7.312-15.755-7.31V459.881l-15.754-7.311-15.754-7.311v-22.282c0-12.256.312-22.283.691-22.283.38 0 6.167 2.53 12.861 5.623 20.021 9.25 17.955 10.957 17.955-14.825v-22.283l-13.964-6.436c-7.68-3.539-14.93-6.996-16.11-7.684-1.737-1.009-2.226-5.544-2.543-23.652-.257-14.518.118-22.4 1.065-22.4.803 0 7.912 2.898 15.798 6.444 7.888 3.544 14.657 6.445 15.05 6.445.387 0 .704-9.99.704-22.199s.393-22.199.87-22.199c.48 0 7.567 3.005 15.753 6.683l14.885 6.681v22.678c0 12.474-.31 22.679-.689 22.679-.38 0-6.167-2.531-12.862-5.624-20.033-9.257-17.956-11.024-17.956 15.281v22.74l15.667 7.281c8.615 4.004 16.028 6.919 16.471 6.477.44-.44.803-10.631.803-22.643v-21.839l18.26 8.229a8905.578 8905.578 0 0 0 30.435 13.646c6.694 2.979 12.98 6.066 13.964 6.861 1.985 1.604 2.677 45.493.716 45.495-.59 0-8.808-3.484-18.26-7.746C78.9 389.644 67.96 384.94 66.378 384.94c-1.15 0-1.302 12.306-.545 44.755.572 24.616 1.25 45.112 1.502 45.551.252.438 14.356 7.143 31.34 14.901l30.88 14.108v45.194l-17.545-7.951c-9.648-4.374-23.6-10.775-31-14.228-7.4-3.451-14.008-6.273-14.68-6.273-.673 0-1.224 10.335-1.224 22.967v22.969l16.47 7.738 16.47 7.737V627.174l14.97 7.063c8.233 3.883 15.63 7.061 16.434 7.061.917 0 1.611-8.274 1.858-22.146l.396-22.146 15.038 6.852 15.038 6.854.393 22.997.394 23.001 8.2 3.615a2812.276 2812.276 0 0 1 16.436 7.314l8.234 3.7V580.182l-15.396-6.934c-8.467-3.813-15.896-7.351-16.507-7.861-.61-.512-.934-11.01-.716-23.33l.396-22.401 15.218 6.953 15.22 6.951 1.055-44.359c.715-30.075.576-44.838-.43-45.844-1.706-1.706-28.45-14.019-30.45-14.019-.787 0-1.329 18.134-1.329 44.549 0 40.37-.217 44.467-2.307 43.666-1.27-.487-8.358-3.581-15.754-6.874l-13.447-5.99-.066-22.996c-.113-39.095.175-67.264.693-67.781.271-.271 6.782 2.442 14.465 6.032 7.683 3.591 14.52 6.529 15.193 6.529s1.223-30.612 1.223-68.028c0-37.414.264-68.026.59-68.026.322 0 7.572 3.15 16.11 7.004l15.522 7.004.377 46.022.38 46.022 15.217 7.124c8.37 3.917 15.45 7.124 15.733 7.124s.517-9.99.517-22.198c0-13.291.554-22.199 1.38-22.199.76 0 8.17 3.024 16.47 6.723l15.09 6.722v91.961l14.681 6.741c8.073 3.707 15.163 6.737 15.754 6.731.591-.007 1.073-9.677 1.073-21.491 0-14.759.497-21.483 1.586-21.483.873 0 8.284 3.005 16.471 6.682l14.884 6.681v45.554l14.97 7.063c8.233 3.884 15.628 7.062 16.435 7.062.916 0 1.61-8.221 1.856-21.975l.396-21.975 15.038 6.777 15.038 6.779.395-22.896c.3-17.375.816-22.725 2.148-22.185.965.392 8.358 3.774 16.434 7.518l14.68 6.806v45.557l10.383 4.749a3337.07 3337.07 0 0 1 21.841 10.113c20.871 9.77 29.612 13.616 30.926 13.616.72 0 1.298-9.854 1.298-22.146v-22.148l6.086 2.614c3.35 1.437 10.751 4.836 16.452 7.554l10.362 4.94.377-46.408.375-46.41 14.324-6.484c41.635-18.854 84.141-38.555 95.066-44.06 15.066-7.592 27.49-13.149 35.732-15.985 3.412-1.174 21.457-9.25 40.102-17.947 18.645-8.696 44.211-20.298 56.813-25.78 12.605-5.481 31.615-14.053 42.248-19.046 87.953-41.293 224.777-103.659 230.084-104.873l3.084-.707-.398 228.93c-.223 125.911-.482 290.559-.58 365.885l-.178 136.955-96.313 43.777c-52.973 24.079-118.225 53.782-145.006 66.008l-48.695 22.228-.393-21.434c-.293-15.725-.863-21.44-2.15-21.452-.965-.008-8.357 2.997-16.434 6.679l-14.68 6.695v44.669l-45.47 20.662a55910.161 55910.161 0 0 0-89.155 40.621 49509.372 49509.372 0 0 1-52.31 23.878l-8.63 3.919-19.299-8.888zM357.272 952.01v-22.985l-15.186-7.092c-8.352-3.899-15.763-7.091-16.47-7.091-.706 0-1.284 10.327-1.284 22.948v22.948l14.68 7.005c8.074 3.852 15.485 7.059 16.471 7.125 1.363.096 1.79-5.36 1.79-22.858zm161.833-247.479v-68.527l-14.679-6.805c-8.073-3.743-15.485-7.132-16.47-7.532-1.41-.57-1.79 9.04-1.79 45.258 0 25.29-.232 45.983-.518 45.983-.284 0-7.399-3.224-15.813-7.161-8.414-3.938-15.608-7.16-15.99-7.16-.38 0-.516 10.111-.299 22.473l.395 22.475 30.791 14.67c16.937 8.066 31.6 14.71 32.582 14.762 1.411.07 1.791-14.519 1.791-68.436zm-161.833 17.768V700.18l15.396 7.036 15.396 7.034 1.077-32.538c.594-17.896.915-38.313.717-45.374-.34-12.081-.572-12.948-3.94-14.683-4.348-2.238-36.859-17.562-51.2-24.132l-10.384-4.756V685.6l-13.513-6.271c-21.83-10.133-19.565-11.838-19.105 14.369l.396 22.541 30.074 13.937c16.542 7.665 31.205 14.004 32.582 14.087 2.283.138 2.504-1.798 2.504-21.964zm637.671-29.229l9.668-4.391v-22.412c0-20.017-.246-22.315-2.307-21.525-1.27.485-8.357 3.58-15.754 6.873l-13.447 5.989v45.176l6.086-2.661c3.35-1.463 10.438-4.637 15.754-7.049zm-541.74-18.475l-.026-22.557-14.382-6.444c-7.909-3.544-14.988-6.659-15.727-6.922-.805-.285-1.348 8.705-1.348 22.316v22.793l13.964 6.56c7.682 3.606 14.77 6.616 15.755 6.685 1.361.097 1.783-5.26 1.764-22.431zm-160.562-76.354l.185-19.43-31.99-14.585c-17.596-8.021-32.434-14.586-32.977-14.586-.54 0-.808 10.34-.59 22.979l.393 22.979 16.077 7.296 16.078 7.298.392 22.941.393 22.942 15.038 6.777 15.038 6.775.892-25.981c.488-14.288.973-34.721 1.071-45.405zm372.19 62.175l14.68-6.695v-45.326l-8.235 3.722c-4.527 2.047-11.617 5.252-15.754 7.124l-7.52 3.403v22.219c0 12.218.482 22.224 1.074 22.23.592.01 7.68-2.995 15.754-6.677zm-211.604-77.181v-22.258l-9.667-4.39c-5.315-2.414-12.405-5.586-15.754-7.049l-6.087-2.662v45.146l13.964 6.6c7.682 3.631 14.77 6.662 15.754 6.735 1.362.105 1.79-5.196 1.79-22.122zm-64.447-29.327v-22.941l-15.236-7.133c-8.382-3.923-15.793-7.134-16.47-7.134-.679 0-1.233 10.208-1.233 22.688v22.687l15.396 7.271c8.468 4 15.88 7.325 16.47 7.389.59.064 1.073-10.209 1.073-22.827zM211.192 816.256l-15.038-6.88-.396-22.42-.394-22.421 6.123 2.676a1616.703 1616.703 0 0 1 15.791 7.065l9.667 4.392v22.258c0 12.242-.16 22.248-.358 22.233-.197-.013-7.125-3.12-15.395-6.903zm461.347-587.27c-14.467-5.754-15.902-6.631-12.89-7.862 1.864-.764 6.251-2.635 9.747-4.158 15.186-6.617 16.463-6.808 24.71-3.685 4.183 1.583 9.214 3.41 11.183 4.06 1.971.647 5.832 2.155 8.582 3.347l5 2.165-4.283 1.737c-7.982 3.238-10.002 4.084-17.176 7.201-3.939 1.712-7.482 3.238-7.877 3.393-.392.152-8.04-2.635-16.996-6.198z\"></path><path fill=\"#496E2E\" d=\"M501.563 1132.184l-15.396-7.271v-22.089c0-12.15.561-21.876 1.246-21.612.684.263 7.762 3.377 15.727 6.923l14.484 6.444.023 22.557c.015 12.406-.135 22.504-.333 22.438-.192-.064-7.283-3.39-15.75-7.39zm17.58-176.858l.037-182.983 14.645-6.533 14.643-6.533.38-45.383c.208-24.96.091-45.383-.259-45.383-.348 0-6.883 2.899-14.52 6.445-7.639 3.544-14.133 6.443-14.432 6.443s-.379-61.932-.178-137.624l.363-137.624 14.322-6.484c41.72-18.895 84.146-38.557 95.066-44.061 15.068-7.592 27.49-13.149 35.734-15.985 3.41-1.174 21.457-9.249 40.102-17.947 18.643-8.696 44.21-20.298 56.811-25.78 12.605-5.481 31.617-14.053 42.25-19.046 89.391-41.968 224.801-103.669 230.221-104.902l3.223-.73v45.76c0 25.169-.426 76.74-.945 114.604l-.947 68.842-14.447 6.498-14.45 6.498-.394 22.281c-.219 12.255.174 22.282.865 22.282.693 0 7.316-2.831 14.717-6.291l13.455-6.29.365 137.612c.201 75.688-.12 138.032-.717 138.544-.596.514-14.762 6.993-31.482 14.4l-30.4 13.47-.033 22.558c-.018 12.405.201 22.557.484 22.557s6.244-2.659 13.248-5.906c7.002-3.248 20.95-9.65 30.99-14.229l18.262-8.324v136.983l-32.582 14.681a24641.119 24641.119 0 0 0-65.52 29.663c-18.118 8.238-49.376 22.437-69.462 31.55s-55.854 25.375-79.484 36.138l-42.967 19.569-.393-21.242c-.29-15.572-.865-21.248-2.148-21.259-.965-.008-8.359 2.996-16.434 6.678l-14.68 6.695v44.768l-12.53 5.577c-6.894 3.067-28 12.604-46.905 21.189-18.902 8.589-35.178 15.946-36.162 16.356-1.387.574-1.789-4.168-1.789-21.013 0-11.965-.56-21.541-1.246-21.278-.684.264-7.762 3.378-15.727 6.924l-14.484 6.444-.023 21.664c-.02 15.618-.527 22.049-1.818 23.041-.982.756-12.422 6.086-25.42 11.846-12.996 5.761-26.689 11.996-30.434 13.861l-6.803 3.392.032-182.983zm113.105 86.354l13.605-6.201.396-22.365c.217-12.303.057-22.365-.357-22.365-1.35 0-27.203 11.799-29.039 13.253-1.289 1.021-1.79 7.393-1.79 22.727 0 16.131.437 21.288 1.79 21.232.983-.044 7.913-2.868 15.395-6.281zm102.043-138.082l9.666-4.39V876.83c0-12.581-.56-22.17-1.28-21.9-.706.264-7.796 3.361-15.755 6.886l-14.473 6.41v45.082l6.088-2.661a1617.48 1617.48 0 0 0 15.754-7.049zm125.46-11.67l14.481-6.443.025-22.477.025-22.476-15.396 7.028-15.396 7.029-.396 22.38c-.223 12.763.156 22.169.89 21.892.705-.268 7.801-3.389 15.766-6.933zm-160.815-17.981l13.514-6.271V845.43c0-12.234-.242-22.245-.537-22.245-.297 0-7.545 3.199-16.11 7.11l-15.575 7.111-.395 22.354c-.46 25.995-2.722 24.317 19.103 14.187zm-50.034-23.102l30.607-13.871V791.838l-20.408 9.296c-11.225 5.112-24.92 11.321-30.434 13.795-5.516 2.477-10.832 5.102-11.816 5.836-2.414 1.803-2.58 43.953-.172 43.953.89 0 15.39-6.244 32.223-13.873zm308.235-3.313l14.484-6.446.023-22.51.025-22.509-13.963 6.53c-7.682 3.593-14.77 6.862-15.754 7.269-2.102.86-2.645 45.391-.545 44.587.687-.265 7.765-3.377 15.73-6.921zm-226.844-34.28l15.096-7.067v-21.576c0-11.864-.578-21.573-1.283-21.573s-8.117 3.188-16.469 7.091l-15.188 7.091v21.552c0 12.795.56 21.554 1.373 21.554.756-.004 8.168-3.185 16.471-7.072zm113.557-51.158l30.436-13.844v-45.187l-18.262 8.313c-10.04 4.572-24.543 11.256-32.225 14.849l-13.963 6.538v21.58c0 16.305.438 21.582 1.791 21.587.984.002 15.484-6.221 32.223-13.836zm-215.899-39.132c21.986-9.69 20.051-6.643 20.051-31.57 0-11.797-.482-21.46-1.074-21.473-.59-.014-15.074 6.271-32.186 13.964l-31.11 13.987-.04 22.469-.037 22.469 15.396-6.923c8.467-3.81 21.518-9.624 29-12.923zm366.992-29.892l9.668-4.391v-22.412c0-20.017-.246-22.315-2.307-21.525-1.27.485-8.357 3.58-15.754 6.873l-13.447 5.989v45.176l6.086-2.661c3.35-1.463 10.438-4.637 15.754-7.049zm-53.707-21.203l30.436-13.844v-45.204l-12.53 5.729c-6.894 3.151-21.23 9.738-31.866 14.638l-19.334 8.909-.395 21.8c-.309 16.925.012 21.801 1.432 21.807 1.003.006 15.521-6.22 32.257-13.835zM664.83 660.416l14.68-6.695v-45.326l-8.234 3.722c-4.527 2.047-11.617 5.252-15.754 7.124l-7.52 3.403v22.219c0 12.218.482 22.224 1.074 22.23.592.01 7.68-2.995 15.754-6.677zm99.328-45.68c9.764-4.369 23.875-10.708 31.357-14.085l13.605-6.141.395-22.567c.217-12.411-.154-22.347-.828-22.077-.672.27-15.189 6.878-32.262 14.685l-31.037 14.194v21.969c0 12.081.23 21.967.508 21.967s8.495-3.578 18.262-7.945zM634.04 582.781l12.53-5.799v-44.458l-3.222 1.263c-1.77.691-8.86 3.869-15.754 7.059l-12.53 5.8v44.457l3.222-1.261c1.774-.695 8.861-3.871 15.754-7.061zm241.77-18.596l30.7-14.098.394-22.422c.217-12.333.205-22.424-.023-22.424-.232 0-14.588 6.421-31.902 14.269l-31.482 14.265-.396 22.255c-.215 12.239.15 22.253.813 22.253.657 0 15.013-6.344 31.896-14.098zm-503.856 464.05l-14.68-6.684V929.327l15.396 7.029 15.396 7.031.377 45.878c.208 25.232-.113 45.826-.717 45.767-.6-.062-7.698-3.121-15.772-6.797zm-127.586-58.893c-8.144-3.802-15.41-7.518-16.15-8.26-.758-.758-1.174-10.767-.95-22.907l.396-21.562 16.112 7.226 16.111 7.226v22.682c0 12.475-.16 22.642-.357 22.595-.198-.05-7.022-3.2-15.162-7zm61.706-17.225l-14.68-7.005v-22.297c0-13.902.54-22.295 1.433-22.295.787 0 8.196 3.062 16.466 6.804l15.035 6.803.003 22.557c.002 17.124-.428 22.541-1.786 22.497-.986-.035-8.398-3.212-16.47-7.064zm195.847-2.964l-15.038-6.988-.396-22.254c-.229-13.07.157-22.254.94-22.254.734 0 7.84 2.997 15.79 6.66l14.456 6.662v22.697c0 12.484-.16 22.646-.358 22.582-.192-.063-7.122-3.259-15.394-7.105zm-324.743-9.958l-14.68-6.977v-45.512l-16.112-7.772-16.11-7.771-.396-22.689c-.219-12.532.165-22.469.856-22.198.687.271 8.115 3.657 16.506 7.526l15.256 7.037v45.308l11.811 5.396c6.497 2.968 13.747 6.363 16.112 7.544l4.301 2.148.395 22.557c.308 17.573-.008 22.537-1.433 22.467-1.004-.047-8.43-3.228-16.506-7.064zm226.283-34.126l-14.68-6.685v-22.562c0-12.41.483-22.53 1.074-22.49.592.04 7.843 3.159 16.111 6.932l15.038 6.86.395 22.427c.308 17.479-.009 22.403-1.433 22.315-1.004-.064-8.43-3.12-16.505-6.797zM81.222 894.48l-16.11-7.317v-21.964c0-16.612.436-21.968 1.79-21.975.983-.006 8.395 3.023 16.47 6.731l14.68 6.74v22.629c0 12.443-.162 22.593-.358 22.549-.198-.041-7.609-3.368-16.472-7.393zm194.416-94.24l-15.038-7.021-.393-22.934-.393-22.938 6.121 2.676a1561.917 1561.917 0 0 1 15.79 7.065l9.666 4.39v22.976c0 12.635-.16 22.936-.357 22.888-.197-.046-7.123-3.243-15.396-7.102zm194.06-2.542c-7.878-3.66-14.795-7.319-15.374-8.129-1.787-2.505-1.317-43.723.498-43.723.877 0 8.288 3.038 16.471 6.753l14.875 6.753v22.606c0 12.434-.482 22.557-1.074 22.498-.592-.058-7.52-3.1-15.397-6.758zm-422.13-9.97l-13.966-6.561v-22.673c0-12.471.257-22.673.567-22.673.313 0 7.402 3.189 15.754 7.092l15.187 7.091v22.268c0 16.929-.43 22.238-1.79 22.143-.985-.07-8.073-3.079-15.753-6.687zm160.76-64.383c-9.846-4.285-24.024-10.536-31.508-13.89l-13.605-6.101-.395-22.436c-.219-12.465.173-22.436.881-22.436 1.165 0 9.624 3.675 46.773 20.321 7.091 3.178 13.695 6.096 14.681 6.484 1.386.551 1.79-4.337 1.79-21.643 0-12.293.556-22.353 1.233-22.353s8.088 3.211 16.471 7.135l15.235 7.132v45.814l-3.223-1.26c-1.772-.693-8.926-3.9-15.896-7.126-6.97-3.227-12.917-5.866-13.212-5.866s-.714 9.902-.93 22.005l-.397 22.004-17.898-7.784zm99.176-46.28l-14.68-6.977v-22.272c0-12.249.482-22.276 1.074-22.28.591-.006 7.68 3.022 15.754 6.73l14.68 6.741v22.628c0 12.445-.482 22.577-1.074 22.518-.59-.06-7.678-3.252-15.754-7.088zM81.226 665.93l-14.677-6.729-.002-23.189-.003-23.188 15.754 7.311 15.754 7.311v22.681c0 12.476-.48 22.647-1.074 22.608-.59-.041-7.678-3.104-15.75-6.804l-.002-.001zm290.793-51.375l-14.613-6.62-.425-22.72c-.274-14.75.077-22.516 1.008-22.131.787.323 8.037 3.652 16.11 7.396l14.681 6.807v21.98c0 12.09-.482 21.965-1.074 21.943-.59-.021-7.65-3.014-15.687-6.655zm97.356-.489l-14.644-6.959-.395-23.299-.395-23.301-16.068-7.225-16.069-7.224-.043-22.93-.043-22.932-15.396-6.812c-8.467-3.747-15.878-6.8-16.47-6.787-.59.013-1.074 9.993-1.074 22.176v22.152l-13.963-6.559c-21.145-9.93-18.977-11.571-18.977 14.36 0 12.302-.485 22.367-1.077 22.367-.594 0-14.458-6.124-30.81-13.606-16.353-7.483-30.046-13.604-30.432-13.604-.383 0-.697 9.667-.697 21.481 0 14.131-.519 21.482-1.515 21.482-.83 0-12.915-5.231-26.853-11.625-13.938-6.395-31.785-14.364-39.662-17.712a5447.837 5447.837 0 0 1-21.84-9.332l-7.52-3.246v-46.649l31.046 14.206c17.073 7.814 31.591 14.207 32.26 14.207.668 0 1.038-10.065.82-22.369l-.395-22.367-29.359-13.469c-16.146-7.407-34.545-15.999-40.884-19.091-11.586-5.65-24.719-11.498-25.83-11.498-.33 0-.598 9.989-.598 22.199 0 12.684-.569 22.198-1.327 22.198-.73 0-7.659-2.871-15.396-6.379l-14.068-6.379-.394-22.98c-.217-12.639-.045-22.979.383-22.979.425 0 6.98 2.898 14.564 6.443 7.586 3.544 14.342 6.445 15.016 6.445.673 0 1.223-30.253 1.223-67.229s.482-67.504 1.074-67.844c.592-.338 7.842 2.452 16.111 6.2l15.038 6.816.377 46.026.38 46.026 15.217 7.124c8.368 3.918 15.45 7.124 15.733 7.124s.517-9.99.517-22.198c0-13.291.554-22.199 1.38-22.199.76 0 8.17 3.026 16.47 6.723l15.09 6.724v91.959l14.68 6.741c8.074 3.707 15.164 6.736 15.755 6.732.591-.007 1.073-9.677 1.073-21.491 0-14.218.516-21.483 1.523-21.483 1.602 0 17.16 6.894 25.688 11.383l5.013 2.639.396 22.465.396 22.466 14.933 7.043c8.213 3.875 15.61 7.045 16.434 7.045.98 0 1.5-7.467 1.5-21.482 0-11.814.416-21.482.924-21.482.507 0 7.25 2.899 14.982 6.444 7.733 3.545 14.76 6.444 15.615 6.444 1.071 0 1.422-7.125 1.128-22.933-.276-14.893.076-22.726 1.006-22.342.788.324 8.038 3.652 16.112 7.396l14.68 6.805v45.558l10.383 4.75a3358.27 3358.27 0 0 1 21.841 10.111c20.746 9.711 29.61 13.619 30.89 13.619.693 0 1.438-9.919 1.655-22.041l.396-22.041 15.038 6.773 15.038 6.774.395 23.143c.217 12.729.136 23.145-.179 23.145s-6.82-2.9-14.458-6.444c-7.637-3.545-14.484-6.445-15.217-6.445-.792 0-1.332 18.276-1.332 45.113 0 24.813-.482 45.063-1.074 45.002-.592-.051-7.664-3.234-15.719-7.062zM49 513.528l-15.396-7.273v-45.773c0-41.494.216-45.688 2.307-44.888 1.27.488 8.357 3.581 15.754 6.876l13.447 5.988v46.269c0 25.449-.16 46.227-.357 46.173-.2-.053-7.288-3.37-15.755-7.372zm78.805-102.175c-.438-.438-14.242-6.849-30.673-14.243l-29.874-13.444-.394-22.276c-.217-12.253-.06-22.277.351-22.277s7.031 2.825 14.716 6.278c7.685 3.454 18.16 7.989 23.28 10.08 5.12 2.091 12.854 5.55 17.185 7.685l7.878 3.885.395 22.556c.354 20.19-.204 24.416-2.864 21.756zM16.776 360.599l-14.68-6.976V309.136l6.086 2.662c3.35 1.463 10.438 4.635 15.754 7.05l9.667 4.389v22.26c0 12.241-.48 22.219-1.073 22.169-.592-.051-7.68-3.231-15.754-7.067zm31.507-31.26l-14.68-6.685v-22.562c0-12.41.392-22.563.87-22.563s7.566 3.005 15.752 6.683l14.885 6.681v22.678c0 12.474-.482 22.626-1.074 22.565-.589-.064-7.679-3.122-15.753-6.797zM672.54 228.986c-14.467-5.754-15.902-6.631-12.89-7.862 1.864-.764 6.251-2.635 9.747-4.158 15.186-6.617 16.463-6.808 24.71-3.685 4.183 1.583 9.214 3.41 11.183 4.06 1.971.647 5.832 2.155 8.582 3.347l5 2.165-4.283 1.737c-7.982 3.238-10.002 4.084-17.176 7.201-3.939 1.712-7.482 3.238-7.877 3.393-.392.152-8.04-2.635-16.996-6.198z\"></path><path fill=\"#5B422D\" d=\"M501.563 1132.184l-15.396-7.271v-22.089c0-12.15.561-21.876 1.246-21.612.684.263 7.762 3.377 15.727 6.923l14.484 6.444.023 22.557c.015 12.406-.135 22.504-.333 22.438-.192-.064-7.283-3.39-15.75-7.39zm17.58-176.858l.037-182.983 14.645-6.533 14.643-6.533.38-45.383c.208-24.96.091-45.383-.259-45.383-.348 0-6.883 2.899-14.52 6.445-7.639 3.544-14.127 6.443-14.424 6.443-.295 0-.52-31.097-.504-69.103l.035-69.103 15.72-7.005 15.72-7.004V482.27l15.203-7.116c8.361-3.915 15.771-6.764 16.471-6.333.697.432 1.268 10.735 1.268 22.898 0 12.164.482 22.074 1.074 22.023.59-.051 7.842-3.434 16.111-7.519l15.04-7.428.714-22.688.715-22.688 13.096-5.955c7.2-3.275 21.21-9.501 31.13-13.833l18.038-7.877.02-23.369c.018-22.987-.029-23.354-2.947-22.428-1.63.518-14.037 6.096-27.568 12.398-13.53 6.301-26.715 12.339-29.295 13.418l-4.689 1.962.395-22.241.395-22.244 31.297-14.22c17.215-7.821 31.877-14.22 32.582-14.22.707 0 1.283 9.414 1.283 20.918 0 18.646.252 20.824 2.31 20.035 1.267-.486 8.341-3.573 15.718-6.858l13.412-5.973.395-22.143.393-22.142 16.47-7.534 16.47-7.532.396 21.343c.217 11.738.62 21.344.893 21.344.277 0 6.75-2.9 14.39-6.445 7.636-3.545 14.761-6.443 15.83-6.443 1.07 0 8.194-2.901 15.831-6.445 7.64-3.546 14.45-6.445 15.14-6.445s1.253 10.157 1.253 22.572v22.572l-15.754 7-15.754 7v45.369l7.518-3.342c4.137-1.838 18.215-8.275 31.285-14.304s24.51-10.962 25.42-10.962c1.182 0 1.658 6.173 1.658 21.482 0 11.814.273 21.481.611 21.481s6.941-2.871 14.68-6.379l14.068-6.379.393-22.623.393-22.623 16.076-7.298 16.078-7.298.377-46.023.38-46.021-11.12 5.183c-6.115 2.852-14.986 6.649-19.71 8.439-4.73 1.79-14.233 5.859-21.126 9.045l-12.53 5.79v-43.586l11.813-5.285c33.563-15.013 92.377-42.152 125.54-57.927 10.558-5.023 20.708-9.514 22.556-9.977l3.355-.842v21.637c0 11.901.332 21.639.738 21.639.408 0 6.957-2.905 14.553-6.455 7.596-3.551 13.97-6.289 14.162-6.087.684.71 1.334 92.54.98 137.972l-.357 45.947-14.68 6.601-14.682 6.603-.395 22.282c-.217 12.254.174 22.282.867 22.282.691 0 7.314-2.831 14.715-6.291l13.457-6.29.365 137.612c.2 75.688-.123 138.031-.719 138.544s-14.762 6.992-31.482 14.4l-30.4 13.47-.033 22.557c-.018 12.406.201 22.558.484 22.558s6.246-2.659 13.248-5.906a6401.956 6401.956 0 0 1 30.992-14.23l18.26-8.323v136.983l-32.582 14.681a25295.502 25295.502 0 0 0-65.52 29.66 95750.927 95750.927 0 0 1-69.462 31.553 65311.639 65311.639 0 0 0-79.484 36.138l-42.965 19.569-.395-21.242c-.29-15.572-.86-21.248-2.148-21.259-.965-.009-8.359 2.996-16.434 6.678l-14.68 6.695v44.768l-12.53 5.577c-6.894 3.064-28 12.602-46.905 21.188-18.902 8.591-35.178 15.948-36.16 16.357-1.389.575-1.79-4.167-1.79-21.012 0-11.967-.562-21.541-1.245-21.278-.686.263-7.764 3.378-15.729 6.922l-14.482 6.445-.025 21.665c-.02 15.618-.527 22.049-1.818 23.041-.982.756-12.422 6.086-25.42 11.846-12.996 5.758-26.689 11.996-30.434 13.861l-6.803 3.392.024-182.978zm113.105 86.354l13.605-6.201.396-22.365c.217-12.303.057-22.365-.357-22.365-1.35 0-27.203 11.799-29.039 13.253-1.289 1.021-1.79 7.393-1.79 22.727 0 16.131.437 21.288 1.79 21.232.983-.044 7.913-2.868 15.395-6.281zm102.043-138.082l9.666-4.39V876.83c0-12.581-.56-22.17-1.28-21.9-.706.264-7.796 3.361-15.755 6.886l-14.473 6.41v45.082l6.088-2.661a1617.48 1617.48 0 0 0 15.754-7.049zm125.46-11.67l14.481-6.443.025-22.477.025-22.476-15.396 7.028-15.396 7.029-.396 22.38c-.223 12.763.156 22.169.89 21.892.705-.268 7.801-3.389 15.766-6.933zm-160.815-17.981l13.514-6.271V845.43c0-12.234-.242-22.245-.537-22.245-.297 0-7.545 3.199-16.11 7.11l-15.575 7.111-.395 22.354c-.46 25.995-2.722 24.317 19.103 14.187zm-50.034-23.102l30.607-13.871V791.838l-20.408 9.296c-11.225 5.112-24.92 11.321-30.434 13.795-5.516 2.477-10.832 5.102-11.816 5.836-2.414 1.803-2.58 43.953-.172 43.953.89 0 15.39-6.244 32.223-13.873zm308.235-3.313l14.484-6.446.023-22.51.025-22.509-13.963 6.53c-7.682 3.593-14.77 6.862-15.754 7.269-2.102.86-2.645 45.391-.545 44.587.687-.265 7.765-3.377 15.73-6.921zm-226.844-34.28l15.096-7.067v-21.576c0-11.864-.578-21.573-1.283-21.573s-8.117 3.188-16.469 7.091l-15.188 7.091v21.552c0 12.795.56 21.554 1.373 21.554.756-.004 8.168-3.185 16.471-7.072zm113.557-51.158l30.436-13.844v-45.187l-18.262 8.313c-10.04 4.572-24.543 11.256-32.225 14.849l-13.963 6.538v21.58c0 16.305.438 21.582 1.791 21.587.984.002 15.484-6.221 32.223-13.836zm-215.899-39.132c21.986-9.69 20.051-6.643 20.051-31.57 0-11.797-.482-21.46-1.074-21.473-.59-.014-15.074 6.271-32.186 13.964l-31.11 13.987-.04 22.469-.037 22.469 15.396-6.923c8.467-3.81 21.518-9.624 29-12.923zm366.992-29.892l9.668-4.391v-22.412c0-20.017-.246-22.315-2.307-21.525-1.27.485-8.357 3.58-15.754 6.873l-13.447 5.989v45.176l6.086-2.661c3.35-1.463 10.438-4.637 15.754-7.049zm-53.707-21.203l30.436-13.844v-45.204l-12.53 5.729c-6.894 3.151-21.23 9.738-31.866 14.638l-19.334 8.909-.395 21.8c-.309 16.925.012 21.801 1.432 21.807 1.003.006 15.521-6.22 32.257-13.835zM664.83 660.416l14.68-6.695v-45.326l-8.234 3.722c-4.527 2.047-11.617 5.252-15.754 7.124l-7.52 3.403v22.219c0 12.218.482 22.224 1.074 22.23.592.01 7.68-2.995 15.754-6.677zm99.328-45.68c9.764-4.369 23.875-10.708 31.357-14.085l13.605-6.141.395-22.567c.217-12.411-.154-22.347-.828-22.077-.672.27-15.189 6.878-32.262 14.685l-31.037 14.194v21.969c0 12.081.23 21.967.508 21.967s8.495-3.578 18.262-7.945zM634.04 582.781l12.53-5.799v-44.458l-3.222 1.263c-1.77.691-8.86 3.869-15.754 7.059l-12.53 5.8v44.457l3.222-1.261c1.774-.695 8.861-3.871 15.754-7.061zm241.77-18.596l30.7-14.098.394-22.422c.217-12.333.205-22.424-.023-22.424-.232 0-14.588 6.421-31.902 14.269l-31.482 14.265-.396 22.255c-.215 12.239.15 22.253.813 22.253.657 0 15.013-6.344 31.896-14.098zm-208.83-42.987l12.531-5.799v-22.264c0-12.246-.295-22.264-.656-22.264s-7.45 3.18-15.754 7.066l-15.098 7.067V529.517l3.223-1.26c1.773-.693 8.861-3.869 15.754-7.059zm63.015-74.757l13.963-6.308v-45.021l-14.68 6.841-14.68 6.839-.395 22.554c-.217 12.404.104 22.293.717 21.978.612-.315 7.395-3.413 15.075-6.883zm227.83-150.195l13.848-6.345v-21.225c0-11.673-.275-21.224-.61-21.224-.339 0-6.942 2.869-14.68 6.378l-14.069 6.379-.396 21.681c-.217 11.925.158 21.46.834 21.19.673-.269 7.456-3.345 15.073-6.834zm-585.87 731.989l-14.68-6.684V929.327l15.395 7.029 15.396 7.031.377 45.878c.208 25.232-.113 45.826-.717 45.767-.6-.062-7.698-3.121-15.772-6.797zm-127.587-58.893c-8.144-3.802-15.41-7.518-16.15-8.26-.758-.758-1.174-10.767-.95-22.907l.396-21.562 16.112 7.226 16.111 7.226v22.682c0 12.475-.16 22.642-.357 22.595-.198-.05-7.022-3.2-15.162-7zm61.706-17.225l-14.68-7.005v-22.297c0-13.902.54-22.295 1.433-22.295.787 0 8.196 3.062 16.466 6.804l15.035 6.803.003 22.557c.002 17.124-.428 22.541-1.786 22.497-.986-.035-8.398-3.212-16.47-7.064zm195.847-2.964l-15.038-6.988-.396-22.254c-.229-13.07.157-22.254.94-22.254.734 0 7.84 2.997 15.79 6.66l14.456 6.662v22.697c0 12.484-.16 22.646-.358 22.582-.192-.063-7.122-3.259-15.394-7.105zm-324.743-9.958l-14.68-6.977v-45.512l-16.112-7.772-16.11-7.771-.396-22.689c-.219-12.532.165-22.469.856-22.198.687.271 8.115 3.657 16.506 7.526l15.256 7.037v45.308l11.811 5.396c6.497 2.968 13.747 6.363 16.112 7.544l4.301 2.148.395 22.557c.308 17.573-.008 22.537-1.433 22.467-1.004-.047-8.43-3.228-16.506-7.064zm226.283-34.126l-14.68-6.685v-22.562c0-12.41.483-22.53 1.074-22.49.592.04 7.843 3.159 16.111 6.932l15.038 6.86.395 22.427c.308 17.479-.009 22.403-1.433 22.315-1.004-.064-8.43-3.12-16.505-6.797zM81.222 894.48l-16.11-7.317v-21.964c0-16.612.436-21.968 1.79-21.975.983-.006 8.395 3.023 16.47 6.731l14.68 6.74v22.629c0 12.443-.162 22.593-.358 22.549-.198-.041-7.609-3.368-16.472-7.393zm194.416-94.24l-15.038-7.021-.393-22.934-.393-22.938 6.121 2.676a1561.917 1561.917 0 0 1 15.79 7.065l9.666 4.39v22.976c0 12.635-.16 22.936-.357 22.888-.197-.046-7.123-3.243-15.396-7.102zm194.06-2.542c-7.878-3.66-14.795-7.319-15.374-8.129-1.787-2.505-1.317-43.723.498-43.723.877 0 8.288 3.038 16.471 6.753l14.875 6.753v22.606c0 12.434-.482 22.557-1.074 22.498-.592-.058-7.52-3.1-15.397-6.758zm-422.13-9.97l-13.966-6.561v-22.673c0-12.471.257-22.673.567-22.673.313 0 7.402 3.189 15.754 7.092l15.187 7.091v22.268c0 16.929-.43 22.238-1.79 22.143-.985-.07-8.073-3.079-15.753-6.687zm160.76-64.383c-9.846-4.285-24.024-10.536-31.508-13.89l-13.605-6.101-.395-22.436c-.219-12.465.173-22.436.881-22.436 1.165 0 9.624 3.675 46.773 20.321 7.091 3.178 13.695 6.096 14.681 6.484 1.386.551 1.79-4.337 1.79-21.643 0-12.293.556-22.353 1.233-22.353s8.088 3.211 16.471 7.135l15.235 7.132v45.814l-3.223-1.26c-1.772-.693-8.926-3.9-15.896-7.126-6.97-3.227-12.917-5.866-13.212-5.866s-.714 9.902-.93 22.005l-.397 22.004-17.898-7.784zm99.176-46.28l-14.68-6.977v-22.272c0-12.249.482-22.276 1.074-22.28.591-.006 7.68 3.022 15.754 6.73l14.68 6.741v22.628c0 12.445-.482 22.577-1.074 22.518-.59-.06-7.678-3.252-15.754-7.088zM81.226 665.93l-14.677-6.729-.002-23.189-.003-23.188 15.754 7.311 15.754 7.311v22.681c0 12.476-.48 22.647-1.074 22.608-.59-.041-7.678-3.104-15.75-6.804l-.002-.001zm290.793-51.375l-14.613-6.62-.425-22.72c-.274-14.75.077-22.516 1.008-22.131.787.323 8.037 3.652 16.11 7.396l14.681 6.807v21.98c0 12.09-.482 21.965-1.074 21.943-.59-.021-7.65-3.014-15.687-6.655zm97.356-.489l-14.644-6.959-.395-23.299-.395-23.301-16.068-7.225-16.069-7.224-.043-22.557c-.023-12.407.163-22.558.413-22.558s14.482 6.445 31.626 14.322c17.144 7.876 31.438 14.321 31.768 14.321s.598-9.99.598-22.198c0-12.21.483-22.203 1.073-22.208.593-.005 7.683 3.024 15.755 6.731l14.68 6.74v22.628c.001 12.445-.24 22.628-.537 22.628-.295 0-6.784-2.9-14.422-6.444-7.637-3.545-14.484-6.445-15.217-6.445-.792 0-1.332 18.276-1.332 45.113 0 24.813-.482 45.063-1.074 45.002-.59-.056-7.662-3.239-15.717-7.067zM262.75 564.505c-14.572-6.733-29.717-13.527-33.656-15.099-3.938-1.569-13.122-5.507-20.409-8.749l-13.248-5.894V488.288l31.046 14.205c17.073 7.814 31.591 14.207 32.26 14.207.668 0 1.038-10.065.82-22.368l-.395-22.368-29.359-13.474c-16.146-7.408-35.214-16.318-42.37-19.797-7.157-3.479-15.696-7.399-18.977-8.712l-5.965-2.387V291.541l3.271.819c1.8.452 8.89 3.416 15.753 6.588l12.482 5.769v91.66l13.932 6.511c7.663 3.581 15.38 6.874 17.15 7.318l3.216.807.396-22.204.395-22.204 15.038 6.878 15.038 6.879.378 46.028.38 46.027 13.493 6.264c21.696 10.07 19.406 11.741 19.406-14.156 0-12.263.256-22.295.566-22.295.313 0 7.402 3.19 15.754 7.091l15.187 7.092v45.502l15.754 7.31 15.754 7.309v22.284c0 12.255-.485 22.283-1.077 22.283-.594 0-14.458-6.124-30.81-13.605-16.353-7.484-30.046-13.605-30.432-13.605-.383 0-.697 9.667-.697 21.482 0 16.259-.436 21.47-1.79 21.43-.984-.034-13.712-5.566-28.284-12.298zm109.918-41.067l-15.396-7.159v-21.988c0-12.095.416-21.988.924-21.988.507 0 7.25 2.9 14.982 6.445 7.733 3.544 14.73 6.443 15.547 6.443.964 0 1.487-7.807 1.487-22.197 0-12.211.296-22.198.657-22.198s7.45 3.18 15.754 7.065l15.096 7.067v22.389c0 25.902 2.07 24.181-17.956 14.931-6.694-3.095-12.789-5.624-13.54-5.624-.797 0-1.537 9.225-1.766 21.986l-.396 21.987-15.393-7.159zM49 513.528l-15.396-7.273v-45.773c0-41.494.216-45.688 2.307-44.888 1.27.488 8.357 3.581 15.754 6.876l13.447 5.988v46.269c0 25.449-.16 46.227-.357 46.173-.2-.053-7.288-3.37-15.755-7.372zm96.312-47.699l-13.604-6.276-.393-22.982-.396-22.981 8.271 3.736c4.548 2.056 11.652 5.268 15.787 7.141l7.521 3.404v22.217c0 16.87-.43 22.192-1.79 22.119-.985-.056-7.913-2.925-15.396-6.378zm-17.507-54.476c-.438-.438-14.242-6.849-30.673-14.243l-29.874-13.444-.394-22.276c-.217-12.253-.09-22.277.28-22.277s8.281 3.436 17.581 7.633a9304.186 9304.186 0 0 0 30.868 13.863l13.964 6.231v22.656c0 12.461-.214 22.656-.477 22.656s-.835-.359-1.275-.799zM16.776 360.599l-14.68-6.976V309.137l6.086 2.66c3.35 1.463 10.438 4.635 15.754 7.05l9.667 4.389v22.26c0 12.241-.48 22.219-1.073 22.169s-7.68-3.23-15.754-7.066zm31.507-31.26l-14.68-6.685v-22.562c0-12.41.256-22.563.566-22.563.313 0 7.402 3.19 15.754 7.092l15.187 7.091v22.269c0 12.248-.482 22.216-1.074 22.155-.589-.064-7.679-3.122-15.753-6.797z\"></path><path fill=\"#3B6121\" d=\"M550.613 1078.108c0-24.419-.254-44.396-.564-44.396-.313 0-7.4 3.189-15.754 7.091l-15.188 7.091v-92.357l12.531-5.522c20.928-9.224 18.977-5.928 18.977-32.082v-22.622l15.754-6.963 15.754-6.966v-91.039l-6.086 2.661c-3.348 1.463-10.438 4.635-15.754 7.049l-9.668 4.392v-68.686c0-37.775-.31-68.683-.688-68.683-.38 0-6.17 2.53-12.863 5.622-20.032 9.256-17.959 11.014-17.936-15.195l.02-22.65 13.014-5.694c20.064-8.78 18.455-6.082 18.455-30.907 0-11.771-.55-21.401-1.223-21.401-.674 0-7.43 2.899-15.014 6.445-7.588 3.544-14.125 6.444-14.533 6.444-.406 0-.74-10.635-.74-23.631 0-13.727.563-23.631 1.342-23.631.738 0 7.826-3.007 15.754-6.682l14.412-6.681v-46.843l15.238-7.133c8.381-3.923 15.471-7.133 15.754-7.133s.516 10.312.516 22.915c0 12.956.572 22.915 1.314 22.915 1.328 0 30.301-12.75 31.625-13.92.396-.348 1.04-10.95 1.434-23.563l.715-22.933 13.096-5.954c7.2-3.275 21.21-9.501 31.13-13.833l18.038-7.877.02-23.369c.018-22.987-.029-23.354-2.947-22.428-1.63.518-14.037 6.096-27.568 12.398-13.53 6.302-26.715 12.34-29.295 13.418l-4.689 1.962.395-22.241.395-22.244 31.297-14.219c17.215-7.822 31.877-14.221 32.582-14.221.707 0 1.283 9.414 1.283 20.918 0 18.646.252 20.824 2.31 20.035 1.267-.485 8.341-3.573 15.718-6.857l13.412-5.974.393-22.143.395-22.142 16.47-7.533 16.468-7.533.398 21.343c.217 11.738.62 21.344.893 21.344.277 0 6.75-2.9 14.39-6.444 7.636-3.546 14.761-6.444 15.83-6.444 1.07 0 8.194-2.901 15.831-6.445 7.64-3.546 14.45-6.444 15.14-6.444s1.253 10.156 1.253 22.571v22.572l-15.754 7-15.754 7v45.369l7.518-3.342c4.137-1.837 18.215-8.275 31.285-14.304s24.51-10.962 25.42-10.962c1.182 0 1.658 6.173 1.658 21.482 0 11.814.273 21.481.611 21.481s6.941-2.87 14.68-6.379l14.068-6.379.393-22.979c.22-12.831.977-22.98 1.72-22.98.728 0 8.122-3.207 16.435-7.127l15.11-7.125v-91.656l-11.1 5.176c-6.106 2.846-14.968 6.641-19.692 8.431-4.729 1.789-14.232 5.86-21.125 9.045l-12.53 5.79v-43.586l11.813-5.285c33.563-15.013 92.377-42.152 125.54-57.927 10.558-5.023 20.708-9.513 22.556-9.977l3.355-.842v21.637c0 11.901.332 21.639.738 21.639s6.945-2.901 14.531-6.445c7.584-3.546 14.023-6.445 14.311-6.445.283 0 .35 41.271.146 91.714l-.367 91.713-15.037 6.916-15.037 6.917-.379 46.4-.377 46.401-15.742 6.992-15.732 6.991v45.238l13.963-6.503c7.68-3.577 16.863-7.673 20.408-9.102 3.545-1.432 11.44-4.896 17.545-7.701l11.1-5.1v46.544l-14.375 6.326c-7.906 3.479-14.979 7.055-15.715 7.94-.738.89-1.52 11.501-1.738 23.586l-.396 21.967-15.037 6.774-15.039 6.775-.395-22.04c-.29-16.267-.854-22.024-2.148-21.978-.965.036-15.609 6.386-32.545 14.11l-30.79 14.046-.38 45.325c-.23 27.717.146 45.323.975 45.323.74 0 7.6-2.899 15.234-6.443 7.64-3.546 14.451-6.445 15.143-6.445.688 0 1.252 10.032 1.252 22.295 0 25.794-2.066 24.085 17.955 14.834 6.691-3.091 12.48-5.621 12.861-5.621.38 0 .69 10.194.69 22.654v22.654l-15.755 6.965-15.754 6.964V856.015l6.088-2.658a1640.662 1640.662 0 0 0 15.887-7.11c5.391-2.448 10.063-4.449 10.383-4.449s.584 9.974.584 22.162v22.164l3.223-1.235c1.771-.678 15.678-7.106 30.902-14.284 15.225-7.18 27.953-13.053 28.285-13.053s.605 10.203.605 22.674v22.677l-32.189 14.408-32.188 14.405-.393-21.895-.395-21.896-31.867 14.436-31.865 14.435-.014 22.293-.014 22.296-31.854 14.406-31.852 14.408-.396-21.211c-.3-16.179-.834-21.21-2.246-21.21-1.605 0-33.795 14.528-76.127 34.363-7.09 3.321-16.11 7.192-20.05 8.603-3.939 1.408-12.8 5.178-19.692 8.374l-12.53 5.815v44.714l-15.1 7.065c-8.304 3.888-15.714 7.068-16.47 7.068-.814 0-1.373-8.732-1.373-21.481 0-11.814-.256-21.482-.566-21.482s-7.4 3.189-15.754 7.091l-15.188 7.091v-22.941c0-26.642 2.307-24.879-19.39-14.81l-13.478 6.256-.396 23.266-.393 23.268-16.107 7.229-16.109 7.232-.004 22.321-.004 22.322-14.682 6.695c-8.072 3.684-15.162 6.688-15.754 6.678-.59-.008-1.072-19.994-1.072-44.413l-.002.006zm17.037-52.953l14.473-6.41V973.723l-15.396 7.028-15.396 7.029-.395 22.381c-.232 13.226.145 22.181.924 21.891.726-.267 7.833-3.373 15.79-6.897zm41.325-64.585l6.088-2.662v-22.249c0-12.237-.482-22.254-1.074-22.258-.59-.007-7.68 3.023-15.754 6.729l-14.68 6.742v45.134l9.666-4.39c5.318-2.41 12.408-5.583 15.754-7.046zm133.171-15.085c7.691-3.654 18.656-8.786 24.367-11.402l10.383-4.756V884.838l-3.223 1.261c-1.77.692-8.86 3.869-15.754 7.061l-12.53 5.8v-22.851c0-12.565-.317-22.849-.706-22.849-.39 0-7.162 2.899-15.049 6.444s-14.979 6.444-15.762 6.444c-.88 0-1.424-8.352-1.424-21.913v-21.914l16.111-7.201 16.111-7.203.395 21.956c.217 12.075.695 21.955 1.066 21.955.861 0 26.23-11.508 36.492-16.555 4.332-2.131 16.256-7.532 26.494-12.007 10.24-4.474 29.092-12.882 41.891-18.686l23.273-10.554v-10.969c0-6.034.426-26.543.945-45.574.8-29.283.633-34.594-1.076-34.538-1.109.035-15.875 6.386-32.81 14.107l-30.792 14.044-.717 24.001-.715 24.003-15.523 7.003c-8.537 3.853-15.77 7.003-16.076 7.003s-.729-10.237-.945-22.751l-.395-22.752-14.324 6.388a6348.633 6348.633 0 0 0-31.83 14.337l-17.508 7.949-.393 22.897-.395 22.896-15.039 6.774-15.037 6.774-.395-21.974c-.262-14.62-.914-21.974-1.949-21.974-1.768 0-61.516 26.974-63.197 28.53-.604.557-.924 21.331-.717 46.166l.38 45.152 15.036-6.86c8.271-3.776 15.504-6.896 16.076-6.938.572-.039 1.215 9.877 1.432 22.034l.396 22.107 19.334-8.565c10.635-4.712 24.813-11.068 31.508-14.125l12.172-5.563.396 22.717.393 22.718 7.82-3.459c4.305-1.895 14.117-6.443 21.81-10.099zM868.2 888.962l6.086-2.661v-23.119c0-20.666-.246-23.023-2.309-22.232-1.268.486-8.355 3.58-15.754 6.874l-13.447 5.989v46.589l9.668-4.391c5.32-2.415 12.407-5.586 15.756-7.049zM638.693 763.62l8.594-4.166.393-22.946.393-22.945 15.361-6.797c8.45-3.737 15.844-6.787 16.436-6.771.592.013 1.072 9.976 1.072 22.139v22.114l15.756-7.312 15.754-7.309v-44.88c0-24.686-.416-44.88-.924-44.88s-7.248 2.898-14.98 6.443c-7.732 3.544-14.408 6.445-14.832 6.445-.426 0-.77-9.99-.77-22.199 0-14.391-.524-22.198-1.487-22.198-.818 0-7.814 2.899-15.545 6.444-7.734 3.544-14.479 6.446-14.984 6.446-.508 0-.924-20.286-.924-45.079v-45.077l-3.275 1.245c-5.42 2.062-58.938 27.567-60.117 28.652-.604.555-.924 21.082-.717 45.619l.38 44.61 30.79-14.106c16.938-7.761 31.275-13.822 31.865-13.472 1.95 1.157 1.275 42.929-.715 44.479-.986.768-15.002 7.387-31.15 14.71-16.146 7.318-30.164 13.938-31.148 14.707-2.244 1.751-2.598 45.442-.365 45.442.783 0 7.875-2.899 15.762-6.443 7.887-3.546 14.658-6.445 15.047-6.445.391 0 .707 9.98.707 22.181v22.182l7.52-3.335c4.127-1.83 11.377-5.206 16.103-7.498zm210.852-95.861l24.67-11.182.395-22.981c.451-26.46-2.066-22.395 20.084-32.426l12.53-5.676v-45.127c0-24.817-.448-45.125-.995-45.125s-15.047 6.25-32.223 13.892l-31.23 13.891v92.688l-16.469 7.739-16.47 7.737v44.469l7.52-3.361c4.135-1.847 18.62-8.391 32.188-14.538zm-49.377-23.382l9.668-4.391v-45.173c0-24.846-.52-45.173-1.156-45.173-1.602 0-60.879 27.116-62.254 28.476-.61.606-.934 11.135-.717 23.396l.395 22.291 15.525-7.007c8.537-3.853 15.79-7.007 16.111-7.007.324 0 .588 9.969.588 22.148v22.147l6.086-2.662c3.35-1.46 10.44-4.632 15.754-7.045zm-98.818-46.571l11.1-5.129v-45.148c0-24.833-.254-45.149-.566-45.149-.31 0-7.4 3.189-15.754 7.091l-15.188 7.091v90.405l4.654-2.015c2.562-1.108 9.652-4.324 15.754-7.146zm-134.414-30.912l15.188-7.091V538.25c0-11.854-.293-21.552-.654-21.552-1.172 0-27.219 11.947-29.064 13.33-1.289.969-1.789 7.274-1.789 22.649 0 11.719.256 21.307.566 21.307.311.002 7.401-3.188 15.753-7.09zm389.853-39.688l14.885-6.682V475.129l-4.654 2.016c-2.56 1.107-9.65 4.322-15.754 7.144l-11.1 5.13v22.234c0 12.229.391 22.235.87 22.235s7.566-3.008 15.753-6.682zm-289.81-6.008l12.531-5.799v-22.264c0-12.246-.295-22.264-.656-22.264s-7.45 3.18-15.754 7.066l-15.098 7.067V529.517l3.223-1.26c1.773-.693 8.861-3.869 15.754-7.059zm226.798-57.779l13.445-5.99V413.687l-6.086 2.66a1550.69 1550.69 0 0 0-15.754 7.05l-9.666 4.39v21.696c0 19.358.248 21.601 2.307 20.811 1.27-.489 8.358-3.582 15.754-6.875zm-163.783-16.978l13.963-6.308v-45.021l-14.68 6.841-14.68 6.839-.395 22.554c-.217 12.404.104 22.293.717 21.978.612-.315 7.395-3.413 15.075-6.883zm228.231-11.667l13.447-5.989V383.676l-15.754 7.311-15.754 7.312v22.118c0 19.747.248 22.022 2.307 21.232 1.27-.486 8.357-3.581 15.754-6.875zm-.4-138.528l13.847-6.345v-21.225c0-11.673-.275-21.224-.61-21.224-.339 0-6.942 2.869-14.68 6.378l-14.069 6.379-.396 21.681c-.217 11.925.158 21.46.834 21.19.673-.269 7.456-3.345 15.073-6.834zm14.17 430.186l.395-22.612 16.111-7.199 16.111-7.2v-46.792l6.088-2.662c3.346-1.463 10.436-4.635 15.754-7.049l9.666-4.391-.023 46.128-.018 46.129-29.96 13.256c-16.48 7.29-30.987 13.648-32.24 14.132-2.037.78-2.24-1.549-1.885-21.74z\"></path><path fill=\"#4F3624\" d=\"M550.613 1078.108c0-24.419-.254-44.396-.564-44.396-.313 0-7.4 3.189-15.754 7.091l-15.188 7.091v-92.357l12.531-5.522c20.928-9.224 18.977-5.928 18.977-32.082v-22.622l15.754-6.963 15.754-6.966v-91.039l-6.086 2.661c-3.348 1.463-10.438 4.635-15.754 7.049l-9.668 4.392v-68.686c0-37.775-.31-68.683-.688-68.683-.38 0-6.17 2.53-12.863 5.622-20.032 9.256-17.959 11.014-17.936-15.195l.02-22.65 13.014-5.694c20.064-8.78 18.455-6.082 18.455-30.907 0-11.771-.55-21.401-1.223-21.401-.674 0-7.43 2.899-15.014 6.445-7.588 3.544-14.143 6.444-14.568 6.444-.424 0-.598-10.429-.38-23.173l.392-23.172 15.04-6.848 15.036-6.849.395-23.057.395-23.056 15.15-7.076c8.332-3.891 15.406-7.074 15.72-7.074s.565 9.989.565 22.198c0 13.969.535 22.198 1.443 22.198.795 0 14.813-6.184 31.15-13.741 16.338-7.556 30.527-14.076 31.531-14.488 1.445-.593 1.744 4.065 1.432 22.321l-.395 23.072-20.05 9.455a14814.037 14814.037 0 0 1-31.866 14.982l-11.814 5.529v45.134c0 42.396.152 45.075 2.506 44.172 1.38-.525 15.395-6.882 31.148-14.122 15.754-7.238 29.13-12.87 29.72-12.516 1.946 1.173 1.274 42.938-.718 44.488-.984.768-15.002 7.387-31.148 14.71-16.146 7.319-30.166 13.938-31.148 14.707-2.244 1.751-2.6 45.443-.367 45.443.783 0 7.875-2.9 15.762-6.444 7.887-3.546 14.645-6.445 15.014-6.445.367 0 .846 9.914 1.063 22.033l.396 22.035 14.32-6.422c7.877-3.532 15.125-7.083 16.111-7.889 1.293-1.06 1.79-7.682 1.79-23.863v-22.396l15.395-6.812c8.47-3.746 15.881-6.803 16.471-6.787.592.013 1.074 9.976 1.074 22.139v22.114l15.754-7.312 15.754-7.309v-44.88c0-24.686-.416-44.88-.924-44.88s-7.248 2.898-14.98 6.443c-7.732 3.544-14.408 6.445-14.832 6.445-.426 0-.77-9.99-.77-22.199 0-14.391-.524-22.197-1.487-22.197-.818 0-7.814 2.898-15.545 6.443-7.734 3.544-14.479 6.446-14.984 6.446-.508 0-.924-20.339-.924-45.198v-45.198l15.754-7.31 15.754-7.311V379.015l15.1-7.066c8.303-3.888 15.715-7.067 16.47-7.067.845 0 1.372 17.344 1.372 45.266 0 35.646.381 45.113 1.791 44.542.984-.398 8.395-3.787 16.47-7.53l14.68-6.807V394.77l15.22-7.125c8.371-3.919 15.457-6.888 15.746-6.597.291.29.69 20.615.893 45.167.203 24.554.781 44.643 1.291 44.646.51 0 7.76-3.19 16.111-7.09l15.188-7.093v-45.535l14.68-6.806c8.074-3.742 15.484-7.131 16.471-7.53 1.387-.562 1.79 4.313 1.79 21.625 0 12.293.483 22.359 1.073 22.37.592.008 7.682-2.997 15.754-6.68l14.68-6.695V381.96l16.436-7.723 16.436-7.723.395-23.064.393-23.066 15.574-7.11c8.564-3.909 15.814-7.109 16.111-7.109.295 0 .537 9.989.537 22.198 0 12.208.484 22.187 1.074 22.172.592-.016 14.932-6.345 31.865-14.063l30.793-14.035.395-23.239.395-23.241 6.051-2.646c3.326-1.454 10.406-4.623 15.73-7.04l9.682-4.396-.37 68.746-.374 68.745-15.037 6.915-15.039 6.917-.375 46.4-.377 46.402-15.746 6.994-15.734 6.991v45.236l13.963-6.502c7.682-3.578 16.865-7.675 20.408-9.104 3.547-1.432 11.441-4.896 17.545-7.7l11.1-5.1v46.542l-14.373 6.327c-7.906 3.479-14.98 7.055-15.717 7.94-.736.889-1.52 11.501-1.736 23.586l-.396 21.967-15.039 6.774-15.037 6.775-.395-22.04c-.29-16.267-.854-22.024-2.148-21.977-.963.035-15.609 6.385-32.545 14.11l-30.79 14.045-.38 45.325c-.229 27.719.146 45.323.975 45.323.742 0 7.6-2.899 15.234-6.443 7.641-3.546 14.451-6.445 15.141-6.445s1.254 10.032 1.254 22.295c0 25.794-2.066 24.086 17.955 14.834 6.693-3.091 12.482-5.621 12.861-5.621s.69 10.194.69 22.654v22.654l-15.755 6.965-15.754 6.964V856.007l6.086-2.659c3.35-1.464 10.5-4.662 15.89-7.109 5.39-2.448 10.062-4.449 10.382-4.449.322 0 .582 9.973.582 22.162v22.164l3.223-1.233c1.773-.68 15.682-7.107 30.904-14.287 15.225-7.179 27.953-13.052 28.287-13.052.332 0 .604 10.203.604 22.674v22.677l-32.189 14.407-32.188 14.406-.393-21.895-.395-21.896-31.867 14.438-31.867 14.435-.012 22.293-.014 22.296-31.854 14.406-31.854 14.408-.395-21.211c-.3-16.179-.834-21.21-2.246-21.21-1.605 0-33.795 14.528-76.127 34.363-7.09 3.323-16.11 7.193-20.05 8.603s-12.8 5.178-19.692 8.374l-12.533 5.815v44.714l-15.098 7.065c-8.303 3.888-15.713 7.068-16.469 7.068-.814 0-1.373-8.732-1.373-21.481 0-11.814-.256-21.482-.566-21.482s-7.4 3.189-15.754 7.091l-15.188 7.091v-22.941c0-26.642 2.307-24.879-19.39-14.81l-13.478 6.256-.396 23.266-.395 23.268-16.107 7.229-16.107 7.232-.004 22.321-.004 22.322-14.682 6.695c-8.074 3.684-15.162 6.688-15.754 6.679-.59-.009-1.072-19.994-1.072-44.413h-.003v.011zm17.037-52.953l14.473-6.41V973.723l-15.396 7.028-15.396 7.029-.395 22.381c-.232 13.226.145 22.181.924 21.891.726-.267 7.833-3.373 15.79-6.897zm41.325-64.585l6.088-2.662v-22.249c0-12.237-.482-22.254-1.074-22.258-.59-.007-7.68 3.023-15.754 6.729l-14.68 6.742v45.134l9.666-4.39c5.318-2.41 12.408-5.583 15.754-7.046zm133.171-15.085c7.691-3.654 18.656-8.786 24.367-11.402l10.383-4.756V884.838l-3.223 1.261c-1.77.692-8.86 3.869-15.754 7.061l-12.53 5.8v-22.851c0-12.565-.317-22.849-.706-22.849-.39 0-7.162 2.899-15.049 6.444s-14.979 6.444-15.762 6.444c-.88 0-1.424-8.352-1.424-21.913v-21.914l16.111-7.201 16.111-7.203.395 21.956c.217 12.075.695 21.955 1.066 21.955.861 0 26.23-11.508 36.492-16.555 4.332-2.131 16.256-7.532 26.494-12.007 10.24-4.474 29.092-12.882 41.891-18.686l23.273-10.554v-10.969c0-6.034.426-26.543.945-45.574.8-29.283.633-34.594-1.076-34.538-1.109.035-15.875 6.386-32.81 14.107l-30.792 14.044-.717 24.001-.715 24.003-15.523 7.003c-8.537 3.853-15.77 7.003-16.076 7.003s-.729-10.237-.945-22.751l-.395-22.752-14.324 6.388a6348.633 6348.633 0 0 0-31.83 14.337l-17.508 7.949-.393 22.897-.395 22.896-15.039 6.774-15.037 6.774-.395-21.974c-.262-14.62-.914-21.974-1.949-21.974-1.768 0-61.516 26.974-63.197 28.53-.604.557-.924 21.331-.717 46.166l.38 45.152 15.036-6.86c8.271-3.776 15.504-6.896 16.076-6.938.572-.039 1.215 9.877 1.432 22.034l.396 22.107 19.334-8.565c10.635-4.712 24.813-11.068 31.508-14.125l12.172-5.563.396 22.717.393 22.718 7.82-3.459c4.305-1.895 14.117-6.443 21.81-10.099zM868.2 888.962l6.086-2.661v-23.119c0-20.666-.246-23.023-2.309-22.232-1.268.486-8.355 3.58-15.754 6.874l-13.447 5.989v46.589l9.668-4.391c5.32-2.415 12.407-5.586 15.756-7.049zm-18.654-221.203l24.67-11.182.395-22.981c.451-26.46-2.066-22.395 20.084-32.426l12.53-5.676v-45.127c0-24.817-.448-45.125-.995-45.125s-15.047 6.25-32.223 13.892l-31.23 13.891v92.688l-16.469 7.739-16.47 7.737v44.469l7.52-3.361c4.135-1.847 18.62-8.391 32.188-14.538zm-49.377-23.382l9.668-4.391v-45.173c0-24.846-.52-45.173-1.156-45.173-1.602 0-60.879 27.116-62.254 28.476-.61.606-.934 11.135-.717 23.396l.395 22.291 15.525-7.007c8.537-3.853 15.79-7.007 16.111-7.007.324 0 .588 9.969.588 22.148v22.147l6.086-2.662c3.35-1.46 10.44-4.632 15.754-7.045zm-98.818-46.571l11.1-5.129v-45.148c0-24.833-.254-45.149-.566-45.149-.31 0-7.4 3.189-15.754 7.091l-15.188 7.091v90.405l4.654-2.015c2.562-1.108 9.652-4.324 15.754-7.146zm-134.414-30.912l15.188-7.091V538.25c0-11.854-.293-21.552-.654-21.552-1.172 0-27.219 11.947-29.064 13.33-1.289.969-1.789 7.274-1.789 22.649 0 11.719.256 21.307.566 21.307.311.002 7.401-3.188 15.753-7.09zm389.853-39.688l14.885-6.682V475.129l-4.654 2.016c-2.56 1.107-9.65 4.322-15.754 7.144l-11.1 5.13v22.234c0 12.229.391 22.235.87 22.235s7.566-3.008 15.753-6.682zm-63.012-63.787l13.445-5.99V413.687l-6.086 2.66a1550.69 1550.69 0 0 0-15.754 7.05l-9.666 4.39v21.696c0 19.358.248 21.601 2.307 20.811 1.27-.489 8.358-3.582 15.754-6.875zm64.448-28.645l13.447-5.989V383.676l-15.754 7.311-15.754 7.312v22.118c0 19.747.248 22.022 2.307 21.232 1.27-.486 8.357-3.581 15.754-6.875zm13.77 291.658l.395-22.612 16.111-7.199 16.111-7.2v-46.792l6.088-2.662c3.346-1.463 10.436-4.635 15.754-7.049l9.666-4.391-.023 46.128-.018 46.129-29.96 13.256c-16.48 7.29-30.987 13.648-32.24 14.132-2.037.78-2.24-1.549-1.885-21.74z\"></path><path fill=\"#362518\" d=\"M582.443 1041.338l.395-22.662 12.617-6.083c6.941-3.345 14.191-6.476 16.111-6.958l3.494-.875v44.131l-15.395 6.982c-8.469 3.839-15.896 7.239-16.508 7.555-.61.317-.93-9.625-.714-22.09zm97.067-44.146c0-12.21-.256-22.198-.566-22.198s-7.4 3.189-15.754 7.091l-15.188 7.091V943.39l13.514-6.271c21.717-10.08 19.426-11.742 19.426 14.087v22.234l9.668-4.392c5.316-2.413 12.406-5.585 15.754-7.048l6.086-2.662v45.914l-15.098 7.068c-8.303 3.888-15.713 7.067-16.469 7.067-.817.003-1.373-8.99-1.373-22.195zm65.88-30.065v-22.188l13.612-6.361c21.715-10.146 19.465-11.836 19.006 14.268l-.396 22.464-15.52 7.003c-8.538 3.854-15.79 7.006-16.112 7.006-.326-.002-.59-9.988-.59-22.192zm-194.777-3.195v-22.76l13.45-5.989c7.395-3.294 14.483-6.388 15.753-6.874 2.061-.79 2.307 1.537 2.307 21.859v22.746l-14.473 6.41c-7.957 3.523-15.047 6.623-15.754 6.887-.72.268-1.283-9.479-1.283-22.282v.003zm323.858-52.311c.104-10.438.586-31.136 1.074-45.994l.887-27.018 15.04-6.771 15.036-6.771.38 45.152c.222 26.753-.17 45.701-.966 46.497-1.607 1.606-28.408 13.878-30.31 13.878-.759 0-1.249-8.139-1.142-18.977v.004h.001zm130.14-17.115v-22.075l13.447-5.99c7.396-3.293 14.484-6.387 15.754-6.874 2.06-.79 2.307 1.477 2.303 21.109l-.004 21.993-13.244 5.997c-7.283 3.298-14.37 6.429-15.748 6.956-2.32.889-2.508-.682-2.508-21.116zm-194.775-2.511v-23.083l6.086-2.662c3.35-1.463 10.438-4.635 15.754-7.049l9.668-4.392v46.497l-14.47 6.409c-7.96 3.524-15.048 6.625-15.755 6.888-.723.269-1.283-9.611-1.283-22.608zm-225.959-80.431l.393-23.074 15.04-6.775 15.036-6.775.396 22.224c.227 12.705-.188 22.806-.967 23.583-1.264 1.266-28.209 13.896-29.643 13.896-.357-.003-.47-10.386-.255-23.079zm194.773-42.992l.396-23.062 13.604-6.201c7.484-3.411 14.41-6.235 15.396-6.277 1.36-.059 1.791 5.292 1.791 22.188v22.266l-12.53 5.8c-6.894 3.188-13.999 6.372-15.79 7.072l-3.258 1.273.391-23.059zm-99.14-.605V745.69l8.234-3.639c4.53-2.001 15.971-7.357 25.422-11.903 9.453-4.545 20.568-9.718 24.705-11.495l7.518-3.233v-46.222l15.396-6.812c8.47-3.747 15.896-6.802 16.506-6.787.611.013.934 10.15.717 22.527-.453 25.904 2.051 21.923-20.086 31.947l-12.53 5.676v44.449l-22.558 10.908c-27.664 13.377-40.32 19.143-42.025 19.143-.72-.004-1.299-9.912-1.299-22.282zm227.713-11.819V733.51l15.09-6.722c8.301-3.697 15.73-6.725 16.506-6.725.893 0 1.271 8.305 1.023 22.357l-.395 22.356-15.523 7.003c-8.537 3.853-15.787 7.003-16.11 7.003-.324.004-.59-10.183-.59-22.634zm97.388-44.805v-22.884l6.086-2.662c3.35-1.463 10.453-4.642 15.791-7.065l9.701-4.404-.393 22.921-.395 22.921-15.396 7.029-15.396 7.028v-22.884h.002zm-453.998-44.661v-46.151l15.26-6.822c8.391-3.751 15.414-6.651 15.61-6.443.194.209.58 20.681.856 45.491l.498 45.111-5.014 2.438c-2.756 1.342-10.006 4.709-16.109 7.482l-11.102 5.045v-46.151h.001zm259.547-49.894l.395-23.073 15.037-6.83c8.27-3.759 15.54-6.374 16.152-5.814.611.561.934 10.634.715 22.389l-.398 21.37-8.592 4.135c-4.727 2.274-11.992 5.657-16.148 7.518l-7.553 3.382.392-23.077zm161.834-27.992l.395-22.426 15.037-6.86c8.27-3.774 15.521-6.894 16.111-6.934.592-.038 1.074 10.115 1.074 22.564v22.64l-15.09 6.722c-8.297 3.698-15.727 6.722-16.506 6.722-.89-.002-1.269-8.329-1.02-22.428zm-259.22-19.259l.392-23.066 31.865-14.433 31.865-14.432v-45.203l-6.086 2.656c-3.348 1.46-14.143 6.343-23.99 10.852-9.846 4.506-24.988 11.279-33.654 15.051-8.664 3.771-19.459 8.524-23.988 10.563l-8.236 3.707V378.334l13.45-5.988c7.395-3.295 14.483-6.389 15.753-6.875 2.09-.801 2.307 3.352 2.307 44.382 0 24.896.482 45.233 1.072 45.194.594-.04 7.844-3.159 16.113-6.932l15.037-6.858.717-23.403.715-23.403 15.04-6.849 15.036-6.849.38 45.06c.226 27.059.917 45.062 1.731 45.062.742 0 8.145-3.182 16.447-7.069l15.098-7.067v-45.333l15.395-6.811c8.471-3.747 15.863-6.802 16.436-6.788.572.013 1.215 9.914 1.432 21.999l.396 21.973 15.037-6.776 15.037-6.778.395 22.041c.217 12.121.98 22.04 1.69 22.04.712 0 7.544-2.9 15.18-6.445 7.638-3.545 14.448-6.443 15.14-6.443.688 0 1.252 9.891 1.252 21.981v21.982l-14.68 6.804c-8.072 3.744-15.469 7.125-16.432 7.517-1.328.538-1.852-4.68-2.148-21.533l-.396-22.245-31.865 14.518-31.865 14.517v44.884l-19.693 8.989c-10.83 4.942-29.035 13.483-40.459 18.979-20.77 9.991-35.652 16.798-36.73 16.798-.323-.005-.405-10.385-.187-23.072zm-193.669-3.193v-21.965l14.682-6.695c8.072-3.683 15.162-6.688 15.754-6.679s1.072 9.898 1.072 21.979v21.961l-14.883 6.683c-8.186 3.675-15.273 6.682-15.754 6.682-.476-.002-.87-9.885-.87-21.966zm128.897-12.52v-22.903l6.086-2.66c3.348-1.464 10.438-4.637 15.754-7.05l9.668-4.392v45.811l-6.088 2.662a1552.36 1552.36 0 0 0-15.752 7.049l-9.668 4.39v-22.907zm-64.125-16.563l.393-22.344 28.342-13.416c15.588-7.378 29.943-13.819 31.904-14.313l3.563-.894-.396 21.938-.396 21.94-29.359 13.758c-16.146 7.566-30.502 14.188-31.9 14.715-2.382.896-2.52-.492-2.15-21.384zm-33.264-31.354v-22.249l6.088-2.659a1581.225 1581.225 0 0 0 15.754-7.051l9.668-4.39V514.8l-14.682 6.695c-8.07 3.683-15.162 6.688-15.754 6.678-.589-.008-1.074-10.028-1.074-22.266zm422.491-100.08c0-15.804-.479-22.317-1.639-22.317-.9 0-7.965 2.898-15.699 6.445-7.73 3.543-14.39 6.444-14.793 6.444-.406 0-.914-9.97-1.13-22.151l-.396-22.153-15.396 7.034-15.395 7.032v-45.806l15.188-7.091c8.354-3.901 15.441-7.091 15.754-7.091s.566 9.989.566 22.198c0 12.208.482 22.187 1.072 22.172.592-.016 14.934-6.313 31.865-13.999l30.793-13.971.395-23.021.393-23.021 14.645-6.68c8.055-3.674 15.13-6.672 15.72-6.663.591.009 1.06 10.167 1.042 22.573l-.033 22.557-15.72 7.004-15.724 7.007v92.041l-14.47 6.408c-7.96 3.525-15.05 6.624-15.755 6.888-.72.269-1.283-9.294-1.283-21.839zm-97.36-1.945l.023-22.521 14.484-6.443c7.965-3.546 15.043-6.66 15.727-6.923.686-.264 1.244 9.596 1.244 21.905v22.383l-12.529 5.801c-6.893 3.189-13.982 6.366-15.754 7.061l-3.223 1.26.028-22.523z\"></path></svg>\n    ";
      var robloxIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1333.35 1333.35\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M272.91 0L0 1060.43l1060.43 272.91L1333.34 272.9 272.91-.01zm316.86 536.5l207 53.25-53.28 207.02-207-53.28 53.28-207z\" fill=\"#1a81e2ff\" fill-rule=\"nonzero\"/></svg>\n    ";
      var discordIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#7289da\" aria-label=\"Discord\" viewBox=\"0 0 512 512\" id=\"discord\" width=\"22px\" height=\"22px\"><rect width=\"512\" height=\"512\" rx=\"15%\"></rect><path fill=\"#fff\" d=\"m346 392-21-25c41-11 57-39 57-39-52 49-194 51-249 0 0 0 14 26 56 39l-23 25c-70-1-97-48-97-48 0-104 46-187 46-187 47-33 90-33 90-33l3 4c-58 16-83 42-83 42 68-46 208-42 263 0 1-1-33-28-86-42l5-4s43 0 90 33c0 0 46 83 46 187 0 0-27 47-97 48z\"></path><ellipse cx=\"196\" cy=\"279\" rx=\"33\" ry=\"35\"></ellipse><ellipse cx=\"312\" cy=\"279\" rx=\"33\" ry=\"35\"></ellipse></svg>\n    ";
      var whatsappButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "WhatsApp (Grupo)",
        icon: whatsappIcon,
        className: "whatsapp-button",
        onClick: function onClick() {
          return window.open("https://go.choxypop.com/wagroup", "_blank");
        }
      });
      var minecraftButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Realm",
        icon: minecraftIcon,
        className: "minecraft-button",
        onClick: function onClick() {
          return window.open("https://minecraft.choxypop.com/", "_blank");
        }
      });
      var robloxButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Roblox (Grupo)",
        icon: robloxIcon,
        className: "roblox-button",
        onClick: function onClick() {
          return window.open("https://roblox.choxypop.com/", "_blank");
        }
      });
      var discordButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "Discord",
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
      var deviantartIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28.87 28.87\" id=\"deviantart\"><g id=\"Layer_2\"><g id=\"Layer_1-2\"><rect width=\"28.87\" height=\"28.87\" rx=\"6.48\" ry=\"6.48\" style=\"fill:#05cc47\"></rect><path d=\"M18.63 7.69h-2.54l-1.43 2.72h-4.42v3.38h2.64l-2.64 5.03v2.36h2.57l1.43-2.71h4.39v-3.38h-2.61l2.61-4.98V7.69z\" style=\"fill:#fff\"></path></g></g></svg>\n    ";
      var whatsappIcon = "\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"22px\" height=\"22px\" viewBox=\"0 0 1024 1024\" id=\"whatsapp\"><defs><path id=\"b\" d=\"M1023.941 765.153c0 5.606-.171 17.766-.508 27.159-.824 22.982-2.646 52.639-5.401 66.151-4.141 20.306-10.392 39.472-18.542 55.425-9.643 18.871-21.943 35.775-36.559 50.364-14.584 14.56-31.472 26.812-50.315 36.416-16.036 8.172-35.322 14.426-55.744 18.549-13.378 2.701-42.812 4.488-65.648 5.3-9.402.336-21.564.505-27.15.505l-504.226-.081c-5.607 0-17.765-.172-27.158-.509-22.983-.824-52.639-2.646-66.152-5.4-20.306-4.142-39.473-10.392-55.425-18.542-18.872-9.644-35.775-21.944-50.364-36.56-14.56-14.584-26.812-31.471-36.415-50.314-8.174-16.037-14.428-35.323-18.551-55.744-2.7-13.378-4.487-42.812-5.3-65.649-.334-9.401-.503-21.563-.503-27.148l.08-504.228c0-5.607.171-17.766.508-27.159.825-22.983 2.646-52.639 5.401-66.151 4.141-20.306 10.391-39.473 18.542-55.426C34.154 93.24 46.455 76.336 61.07 61.747c14.584-14.559 31.472-26.812 50.315-36.416 16.037-8.172 35.324-14.426 55.745-18.549 13.377-2.701 42.812-4.488 65.648-5.3 9.402-.335 21.565-.504 27.149-.504l504.227.081c5.608 0 17.766.171 27.159.508 22.983.825 52.638 2.646 66.152 5.401 20.305 4.141 39.472 10.391 55.425 18.542 18.871 9.643 35.774 21.944 50.363 36.559 14.559 14.584 26.812 31.471 36.415 50.315 8.174 16.037 14.428 35.323 18.551 55.744 2.7 13.378 4.486 42.812 5.3 65.649.335 9.402.504 21.564.504 27.15l-.082 504.226z\"></path></defs><linearGradient id=\"a\" x1=\"512.001\" x2=\"512.001\" y1=\".978\" y2=\"1025.023\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#61fd7d\"></stop><stop offset=\"1\" stop-color=\"#2bb826\"></stop></linearGradient><use xlink:href=\"#b\" fill=\"url(#a)\" overflow=\"visible\"></use><path fill=\"#FFF\" d=\"M783.302 243.246c-69.329-69.387-161.529-107.619-259.763-107.658-202.402 0-367.133 164.668-367.214 367.072-.026 64.699 16.883 127.854 49.017 183.522l-52.096 190.229 194.665-51.047c53.636 29.244 114.022 44.656 175.482 44.682h.151c202.382 0 367.128-164.688 367.21-367.094.039-98.087-38.121-190.319-107.452-259.706zM523.544 808.047h-.125c-54.767-.021-108.483-14.729-155.344-42.529l-11.146-6.612-115.517 30.293 30.834-112.592-7.259-11.544c-30.552-48.579-46.688-104.729-46.664-162.379.066-168.229 136.985-305.096 305.339-305.096 81.521.031 158.154 31.811 215.779 89.482s89.342 134.332 89.312 215.859c-.066 168.243-136.984 305.118-305.209 305.118zm167.415-228.515c-9.177-4.591-54.286-26.782-62.697-29.843-8.41-3.062-14.526-4.592-20.645 4.592-6.115 9.182-23.699 29.843-29.053 35.964-5.352 6.122-10.704 6.888-19.879 2.296-9.176-4.591-38.74-14.277-73.786-45.526-27.275-24.319-45.691-54.359-51.043-63.543-5.352-9.183-.569-14.146 4.024-18.72 4.127-4.109 9.175-10.713 13.763-16.069 4.587-5.355 6.117-9.183 9.175-15.304 3.059-6.122 1.529-11.479-.765-16.07-2.293-4.591-20.644-49.739-28.29-68.104-7.447-17.886-15.013-15.466-20.645-15.747-5.346-.266-11.469-.322-17.585-.322s-16.057 2.295-24.467 11.478-32.113 31.374-32.113 76.521c0 45.147 32.877 88.764 37.465 94.885 4.588 6.122 64.699 98.771 156.741 138.502 21.892 9.45 38.982 15.094 52.308 19.322 21.98 6.979 41.982 5.995 57.793 3.634 17.628-2.633 54.284-22.189 61.932-43.615 7.646-21.427 7.646-39.791 5.352-43.617-2.294-3.826-8.41-6.122-17.585-10.714z\"></path></svg>\n    ";
      var instagramIcon = "\n      <svg width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 64 64\"><defs><style>.cls-1{fill:url(#radial-gradient);}.cls-2{fill:#fff;}</style><radialGradient cx=\"-578.95\" cy=\"-837.6\" gradientTransform=\"translate(499.5 629.5) scale(0.75)\" gradientUnits=\"userSpaceOnUse\" id=\"radial-gradient\" r=\"197.06\"><stop offset=\"0\" stop-color=\"#f9ed32\"/><stop offset=\"0.36\" stop-color=\"#ee2a7b\"/><stop offset=\"0.44\" stop-color=\"#d22a8a\"/><stop offset=\"0.6\" stop-color=\"#8b2ab2\"/><stop offset=\"0.83\" stop-color=\"#1b2af0\"/><stop offset=\"0.88\" stop-color=\"#002aff\"/></radialGradient></defs><title/><g data-name=\"3-instagram\" id=\"_3-instagram\"><rect class=\"cls-1\" height=\"64\" rx=\"11.2\" ry=\"11.2\" transform=\"translate(64 64) rotate(180)\" width=\"64\"/><path class=\"cls-2\" d=\"M44,56H20A12,12,0,0,1,8,44V20A12,12,0,0,1,20,8H44A12,12,0,0,1,56,20V44A12,12,0,0,1,44,56ZM20,12.8A7.21,7.21,0,0,0,12.8,20V44A7.21,7.21,0,0,0,20,51.2H44A7.21,7.21,0,0,0,51.2,44V20A7.21,7.21,0,0,0,44,12.8Z\"/><path class=\"cls-2\" d=\"M32,45.6A13.6,13.6,0,1,1,45.6,32,13.61,13.61,0,0,1,32,45.6Zm0-22.4A8.8,8.8,0,1,0,40.8,32,8.81,8.81,0,0,0,32,23.2Z\"/><circle class=\"cls-2\" cx=\"45.6\" cy=\"19.2\" r=\"2.4\"/></g></svg>\n    ";
      var facebookIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" viewBox=\"0 0 512 509.64\"><rect fill=\"#0866FF\" width=\"512\" height=\"509.64\" rx=\"115.612\" ry=\"115.612\"/><path fill=\"#fff\" d=\"M287.015 509.64h-92.858V332.805h-52.79v-78.229h52.79v-33.709c0-87.134 39.432-127.522 124.977-127.522 16.217 0 44.203 3.181 55.651 6.361v70.915c-6.043-.636-16.536-.953-29.576-.953-41.976 0-58.194 15.9-58.194 57.241v27.667h83.618l-14.365 78.229h-69.253V509.64z\"/></svg>\n    ";
      var tiktokIcon = "\n      <svg width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"Layer_1\" style=\"enable-background:new 0 0 64 64;\" version=\"1.1\" viewBox=\"0 0 64 64\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#314A52;}.st1{fill-rule:evenodd;clip-rule:evenodd;}.st2{fill:#FE2C55;}.st3{fill:#25F4EE;}.st4{fill:#FFFFFF;}</style><g id=\"TikTok\"><path class=\"st0\" d=\"M3,13C3,7.5,7.5,3,13,3h38c5.5,0,10,4.5,10,10v38c0,5.5-4.5,10-10,10H13C7.5,61,3,56.5,3,51V13z\"/><path class=\"st1\" d=\"M9.5,5.1c1-0.5,2.1-0.8,4-0.9C15.4,4,17.8,4,21.2,4h21.6c3.4,0,5.8,0,7.7,0.2c1.9,0.2,3.1,0.4,4,0.9   c1.9,1,3.4,2.5,4.4,4.4c0.5,1,0.8,2.1,0.9,4c0.1,1.7,0.2,3.8,0.2,6.6c-0.1,12.2-7.7,22.7-19,28.1c-3.5,2.3-9.8,3.8-17,3.8   c-11,0-19.9-3.6-20-7.9c0-0.4,0-0.8,0-1.3V21.2c0-3.4,0-5.8,0.2-7.7c0.2-1.9,0.4-3.1,0.9-4C6,7.6,7.6,6,9.5,5.1z M42.9,0H21.1   c-3.3,0-5.9,0-8,0.2C11,0.3,9.3,0.7,7.6,1.5C5,2.9,2.9,5,1.5,7.6C0.7,9.3,0.3,11,0.2,13.2C0,15.2,0,17.8,0,21.1v21.8   c0,3.3,0,5.9,0.2,8c0.2,2.1,0.5,3.9,1.4,5.5C2.9,59,5,61.1,7.6,62.5c1.6,0.8,3.4,1.2,5.5,1.4c2.1,0.2,4.7,0.2,8,0.2h21.8   c3.3,0,5.9,0,8-0.2c2.1-0.2,3.9-0.5,5.5-1.4c2.6-1.3,4.8-3.5,6.1-6.1c0.8-1.6,1.2-3.4,1.4-5.5c0.2-2.1,0.2-4.7,0.2-8V21.1   c0-3.3,0-5.9-0.2-8c-0.2-2.1-0.5-3.9-1.4-5.5C61.1,5,59,2.9,56.4,1.5c-1.6-0.8-3.4-1.2-5.5-1.4C48.8,0,46.2,0,42.9,0z\"/><path class=\"st2\" d=\"M54,22c-6.6,0-12-5.4-12-12h-8v32c0,3.3-2.7,6-6,6c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6c0.7,0,1.4,0.1,2,0.3v-8.2   C29.3,28,28.7,28,28,28c-7.7,0-14,6.3-14,14c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14V26c3.3,2.5,7.5,4,12,4V22z\"/><path class=\"st3\" d=\"M52,20c-6.6,0-12-5.4-12-12h-8v32c0,3.3-2.7,6-6,6c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6c0.7,0,1.4,0.1,2,0.3v-8.2   C27.3,26,26.7,26,26,26c-7.7,0-14,6.3-14,14c0,7.7,6.3,14,14,14c7.7,0,14-6.3,14-14V24c3.3,2.5,7.5,4,12,4V20z\"/><path class=\"st4\" d=\"M52,21.8c-3-0.5-5.6-2.1-7.4-4.4c-2.3-1.8-3.9-4.4-4.4-7.4H34v32c0,3.3-2.7,6-6,6c-2.2,0-4.1-1.2-5.1-2.9   c-1.7-1.1-2.9-3-2.9-5.1c0-3.3,2.7-6,6-6c0.7,0,1.4,0.1,2,0.3V28c-7.7,0-14,6.3-14,14c0,3.4,1.2,6.4,3.2,8.8c2.4,2,5.5,3.2,8.8,3.2   c7.7,0,14-6.3,14-14V24c3.3,2.5,7.5,4,12,4V21.8z\"/></g></svg>\n    ";
      var youtubeIcon = "\n      <svg width=\"22px\" height=\"22px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 28.87 28.87\" id=\"youtube\"><g id=\"Layer_2\"><g id=\"Layer_1-2\"><rect width=\"28.87\" height=\"28.87\" rx=\"6.48\" ry=\"6.48\" style=\"fill:#fd3832\"></rect><path d=\"M8 19.77a1.88 1.88 0 0 1-1.24-1.21c-.54-1.48-.7-7.66.34-8.88A2 2 0 0 1 8.46 9c2.79-.3 11.41-.26 12.4.1a1.94 1.94 0 0 1 1.22 1.17c.59 1.53.61 7.09-.08 8.56a1.89 1.89 0 0 1-.87.88c-1.04.52-11.75.51-13.13.06zm4.43-2.9l5-2.6-5-2.62z\" style=\"fill:#fff;fill-rule:evenodd\"></path></g></g></svg>\n    ";
      var blueskyIcon = "\n      <svg width=\"22\" height=\"22\" viewBox=\"0 0 48 48\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.8576 6.06892C16.1772 10.1191 21.8992 18.3312 24 22.7383C26.1009 18.3315 31.8225 10.119 37.1424 6.06892C40.9808 3.14646 47.2 0.885231 47.2 8.08059C47.2 9.5176 46.3876 20.1522 45.9111 21.8787C44.2548 27.8812 38.2196 29.4122 32.8511 28.4856C42.2351 30.1053 44.6223 35.4704 39.4668 40.8355C29.6756 51.0249 25.394 38.2789 24.2964 35.013C24.0953 34.4142 24.0012 34.1341 23.9998 34.3723C23.9984 34.1341 23.9043 34.4142 23.7032 35.013C22.6061 38.2789 18.3246 51.0252 8.5328 40.8355C3.37728 35.4704 5.7644 30.1049 15.1486 28.4856C9.77992 29.4122 3.74456 27.8812 2.08856 21.8787C1.61207 20.1521 0.799683 9.51744 0.799683 8.08059C0.799683 0.885231 7.01904 3.14646 10.8573 6.06892H10.8576Z\" fill=\"#1185FE\"/></svg>\n    ";
      var twitterIcon = "\n      <svg width=\"22\" height=\"22\" xmlns=\"http://www.w3.org/2000/svg\" shape-rendering=\"geometricPrecision\" text-rendering=\"geometricPrecision\" image-rendering=\"optimizeQuality\" fill-rule=\"evenodd\" clip-rule=\"evenodd\" viewBox=\"0 0 512 509.64\"><rect width=\"512\" height=\"509.64\" rx=\"115.61\" ry=\"115.61\"/><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z\"/></svg>\n      ";
      var deviantartButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "DeviantArt",
        icon: deviantartIcon,
        className: "deviantart-button",
        onClick: function onClick() {
          return window.open("https://www.deviantart.com/choxypop", "_blank");
        }
      });
      var whatsappButton = new _base_Button_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
        label: "WhatsApp",
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
      logo.style.borderRadius = "20px";
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
    this.header = new _statical_CardHeader_js__WEBPACK_IMPORTED_MODULE_0__["default"]("https://raw.githubusercontent.com/ChoxyPop/contenido/main/profile.webp", "Foto de perfil de ChoxyPop", "Creando", "ChoxyPop", "Femboy de minicomics, memes y videojuegos.");
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
    this.backgroundManager = new _components_decorative_BackgroundManager_js__WEBPACK_IMPORTED_MODULE_8__["default"]("background-noise.png", {
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
      var stampSvg = new _components_decorative_StampElement_js__WEBPACK_IMPORTED_MODULE_6__["default"]("stamp.svg");
      stampSvg.initialize();
      var cardStampManager = new _components_decorative_CardStampManager_js__WEBPACK_IMPORTED_MODULE_7__["default"]("stamp.svg", cardElement);
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