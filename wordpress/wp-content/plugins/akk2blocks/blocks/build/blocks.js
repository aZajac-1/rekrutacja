/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./blocks/index.js":
/*!*************************!*\
  !*** ./blocks/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_responsiveImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/responsiveImage */ "./blocks/js/responsiveImage.js");


/***/ }),

/***/ "./blocks/js/components/CustomSwitch.js":
/*!**********************************************!*\
  !*** ./blocks/js/components/CustomSwitch.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);


var CustomSwitch = function CustomSwitch(_ref) {
  var label = _ref.label,
    checked = _ref.checked,
    onChange = _ref.onChange,
    help = _ref.help;
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: label,
    checked: checked,
    onChange: onChange,
    help: help
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomSwitch);

/***/ }),

/***/ "./blocks/js/components/ResponsiveRange.js":
/*!*************************************************!*\
  !*** ./blocks/js/components/ResponsiveRange.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


var ResponsiveRange = function ResponsiveRange(_ref) {
  var label = _ref.label,
    value = _ref.value,
    onChange = _ref.onChange,
    _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    help = _ref.help;
  var handleValueChange = function handleValueChange(newValue) {
    onChange(_objectSpread(_objectSpread({}, value), {}, {
      value: newValue
    }));
  };
  var handleUnitChange = function handleUnitChange(newUnit) {
    onChange(_objectSpread(_objectSpread({}, value), {}, {
      unit: newUnit
    }));
  };
  var getMaxValue = function getMaxValue(unit) {
    switch (unit) {
      case 'px':
        return 1920;
      case '%':
      case 'vw':
      case 'vh':
        return 100;
      default:
        return max;
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid"
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: label,
    value: value === null || value === void 0 ? void 0 : value.value,
    onChange: handleValueChange,
    min: min,
    max: getMaxValue(value === null || value === void 0 ? void 0 : value.unit),
    step: step,
    help: help
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.SelectControl, {
    value: (value === null || value === void 0 ? void 0 : value.unit) || "%",
    onChange: handleUnitChange,
    options: [{
      label: "%",
      value: "%"
    }, {
      label: "px",
      value: "px"
    }, {
      label: "vw",
      value: "vw"
    }, {
      label: "vh",
      value: "vh"
    }]
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveRange);

/***/ }),

/***/ "./blocks/js/responsiveImage.js":
/*!**************************************!*\
  !*** ./blocks/js/responsiveImage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_CustomSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CustomSwitch */ "./blocks/js/components/CustomSwitch.js");
/* harmony import */ var _components_ResponsiveRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ResponsiveRange */ "./blocks/js/components/ResponsiveRange.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("akk2blocks/responsive-image", {
  apiVersion: 2,
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Responsive Image", "akk2blocks"),
  icon: "format-image",
  category: "common",
  attributes: {
    imageId: {
      type: "number",
      "default": null
    },
    alt: {
      type: "string",
      "default": ""
    },
    imageUrl: {
      type: "string",
      "default": ""
    },
    imageTitle: {
      type: "string",
      "default": ""
    },
    isLazyLoad: {
      type: "boolean",
      "default": true
    },
    linkUrl: {
      type: "string",
      "default": ""
    },
    openInNewTab: {
      type: "boolean",
      "default": false
    },
    widthDesktop: {
      type: "object",
      "default": {
        value: 100,
        unit: "%"
      }
    },
    heightDesktop: {
      type: "object",
      "default": {
        value: "auto",
        unit: "px"
      }
    },
    widthTablet: {
      type: "object",
      "default": {
        value: 100,
        unit: "%"
      }
    },
    heightTablet: {
      type: "object",
      "default": {
        value: "auto",
        unit: "px"
      }
    },
    widthMobile: {
      type: "object",
      "default": {
        value: 100,
        unit: "%"
      }
    },
    heightMobile: {
      type: "object",
      "default": {
        value: "auto",
        unit: "px"
      }
    }
  },
  edit: function ResponsiveImageEdit(_ref) {
    var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
    var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
      style: {
        "--width-desktop": "".concat(attributes.widthDesktop.value).concat(attributes.widthDesktop.unit),
        "--height-desktop": attributes.heightDesktop.value === "auto" ? "auto" : "".concat(attributes.heightDesktop.value).concat(attributes.heightDesktop.unit),
        "--width-tablet": "".concat(attributes.widthTablet.value).concat(attributes.widthTablet.unit),
        "--height-tablet": attributes.heightTablet.value === "auto" ? "auto" : "".concat(attributes.heightTablet.value).concat(attributes.heightTablet.unit),
        "--width-mobile": "".concat(attributes.widthMobile.value).concat(attributes.widthMobile.unit),
        "--height-mobile": attributes.heightMobile.value === "auto" ? "auto" : "".concat(attributes.heightMobile.value).concat(attributes.heightMobile.unit)
      }
    });
    var imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    };
    var containerStyle = {
      overflow: "hidden"
    };
    var imageElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      style: containerStyle,
      className: "akk2-responsive-image"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("img", {
      src: attributes.imageUrl,
      alt: attributes.alt,
      title: attributes.imageTitle,
      loading: attributes.isLazyLoad ? "lazy" : "eager",
      style: imageStyle,
      className: "responsive-image"
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
      title: "Ustawienia obrazu",
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
      onSelect: function onSelect(media) {
        setAttributes({
          imageUrl: media.url,
          imageId: media.id,
          alt: media.alt || "",
          imageTitle: media.title || ""
        });
      },
      allowedTypes: ["image"],
      value: attributes.imageId,
      render: function render(_ref2) {
        var open = _ref2.open;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
          onClick: open,
          variant: "secondary",
          style: {
            marginBottom: "10px",
            width: "100%"
          }
        }, attributes.imageUrl ? "Zmień obraz" : "Wybierz obraz");
      }
    })), attributes.imageUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      onClick: function onClick() {
        setAttributes({
          imageUrl: "",
          imageId: undefined,
          alt: "",
          imageTitle: ""
        });
      },
      variant: "link",
      isDestructive: true,
      style: {
        marginBottom: "15px"
      }
    }, "Usu\u0144 obraz"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Tekst alternatywny",
      value: attributes.alt,
      onChange: function onChange(value) {
        return setAttributes({
          alt: value
        });
      },
      style: {
        marginBottom: "15px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
      label: "Link URL",
      value: attributes.linkUrl,
      onChange: function onChange(value) {
        return setAttributes({
          linkUrl: value
        });
      },
      style: {
        marginBottom: "15px"
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_CustomSwitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Lazy loading",
      checked: attributes.isLazyLoad,
      onChange: function onChange(value) {
        return setAttributes({
          isLazyLoad: value
        });
      },
      size: "default"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TabPanel, {
      className: "akk2-tab-panel",
      activeClass: "active-tab",
      tabs: [{
        name: "desktop",
        title: "Desktop",
        className: "tab-desktop"
      }, {
        name: "tablet",
        title: "Tablet",
        className: "tab-tablet"
      }, {
        name: "mobile",
        title: "Mobile",
        className: "tab-mobile"
      }]
    }, function (tab) {
      var isDesktop = tab.name === "desktop";
      var isTablet = tab.name === "tablet";
      var isMobile = tab.name === "mobile";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ResponsiveRange__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "Width",
        value: isDesktop ? attributes.widthDesktop : isTablet ? attributes.widthTablet : attributes.widthMobile,
        onChange: function onChange(value) {
          if (isDesktop) {
            setAttributes({
              widthDesktop: value
            });
          } else if (isTablet) {
            setAttributes({
              widthTablet: value
            });
          } else {
            setAttributes({
              widthMobile: value
            });
          }
        },
        min: 0,
        max: 1920
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_ResponsiveRange__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "Height",
        value: isDesktop ? attributes.heightDesktop : isTablet ? attributes.heightTablet : attributes.heightMobile,
        onChange: function onChange(value) {
          if (isDesktop) {
            setAttributes({
              heightDesktop: value
            });
          } else if (isTablet) {
            setAttributes({
              heightTablet: value
            });
          } else {
            setAttributes({
              heightMobile: value
            });
          }
        },
        min: 0,
        max: 1920
      }));
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", blockProps, attributes.imageUrl && (attributes.linkUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
      href: attributes.linkUrl,
      target: attributes.openInNewTab ? "_blank" : "_self",
      rel: attributes.openInNewTab ? "noopener noreferrer" : ""
    }, imageElement) : imageElement)));
  },
  save: function ResponsiveImageSave(_ref3) {
    var attributes = _ref3.attributes;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      style: {
        "--width-desktop": "".concat(attributes.widthDesktop.value).concat(attributes.widthDesktop.unit),
        "--height-desktop": attributes.heightDesktop.value === "auto" ? "auto" : "".concat(attributes.heightDesktop.value).concat(attributes.heightDesktop.unit),
        "--width-tablet": "".concat(attributes.widthTablet.value).concat(attributes.widthTablet.unit),
        "--height-tablet": attributes.heightTablet.value === "auto" ? "auto" : "".concat(attributes.heightTablet.value).concat(attributes.heightTablet.unit),
        "--width-mobile": "".concat(attributes.widthMobile.value).concat(attributes.widthMobile.unit),
        "--height-mobile": attributes.heightMobile.value === "auto" ? "auto" : "".concat(attributes.heightMobile.value).concat(attributes.heightMobile.unit)
      }
    });
    var imageStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    };
    var containerStyle = {
      overflow: "hidden"
    };
    var imageElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", {
      style: containerStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("img", {
      src: attributes.imageUrl,
      alt: attributes.alt,
      title: attributes.imageTitle,
      loading: attributes.isLazyLoad ? "lazy" : "eager",
      style: imageStyle,
      className: "responsive-image"
    }));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("div", blockProps, attributes.imageUrl && (attributes.linkUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement("a", {
      href: attributes.linkUrl,
      target: attributes.openInNewTab ? "_blank" : "_self",
      rel: attributes.openInNewTab ? "noopener noreferrer" : ""
    }, imageElement) : imageElement));
  }
});

/***/ }),

/***/ "./blocks/scss/style.scss":
/*!********************************!*\
  !*** ./blocks/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"blocks": 0,
/******/ 			"./style-blocks": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkakk2blocks"] = globalThis["webpackChunkakk2blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["./style-blocks"], () => (__webpack_require__("./blocks/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-blocks"], () => (__webpack_require__("./blocks/scss/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=blocks.js.map