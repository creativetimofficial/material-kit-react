"use strict";
exports.id = 4984;
exports.ids = [4984];
exports.modules = {

/***/ 47034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _base = __webpack_require__(22050);

var _capitalize = _interopRequireDefault(__webpack_require__(98216));

var _styled = _interopRequireDefault(__webpack_require__(90948));

var _useThemeProps = _interopRequireDefault(__webpack_require__(71657));

var _useIsFocusVisible = _interopRequireDefault(__webpack_require__(79674));

var _useForkRef = _interopRequireDefault(__webpack_require__(51705));

var _Typography = _interopRequireDefault(__webpack_require__(89589));

var _linkClasses = _interopRequireWildcard(__webpack_require__(23400));

var _getTextDecoration = _interopRequireWildcard(__webpack_require__(2119));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["className", "color", "component", "onBlur", "onFocus", "TypographyClasses", "underline", "variant", "sx"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useUtilityClasses = ownerState => {
  const {
    classes,
    component,
    focusVisible,
    underline
  } = ownerState;
  const slots = {
    root: ['root', `underline${(0, _capitalize.default)(underline)}`, component === 'button' && 'button', focusVisible && 'focusVisible']
  };
  return (0, _base.unstable_composeClasses)(slots, _linkClasses.getLinkUtilityClass, classes);
};

const LinkRoot = (0, _styled.default)(_Typography.default, {
  name: 'MuiLink',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[`underline${(0, _capitalize.default)(ownerState.underline)}`], ownerState.component === 'button' && styles.button];
  }
})(({
  theme,
  ownerState
}) => {
  return (0, _extends2.default)({}, ownerState.underline === 'none' && {
    textDecoration: 'none'
  }, ownerState.underline === 'hover' && {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }, ownerState.underline === 'always' && (0, _extends2.default)({
    textDecoration: 'underline'
  }, ownerState.color !== 'inherit' && {
    textDecorationColor: (0, _getTextDecoration.default)({
      theme,
      ownerState
    })
  }, {
    '&:hover': {
      textDecorationColor: 'inherit'
    }
  }), ownerState.component === 'button' && {
    position: 'relative',
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    MozAppearance: 'none',
    // Reset
    WebkitAppearance: 'none',
    // Reset
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    [`&.${_linkClasses.default.focusVisible}`]: {
      outline: 'auto'
    }
  });
});
const Link = /*#__PURE__*/React.forwardRef(function Link(inProps, ref) {
  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiLink'
  });
  const {
    className,
    color = 'primary',
    component = 'a',
    onBlur,
    onFocus,
    TypographyClasses,
    underline = 'always',
    variant = 'inherit',
    sx
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0, _useIsFocusVisible.default)();
  const [focusVisible, setFocusVisible] = React.useState(false);
  const handlerRef = (0, _useForkRef.default)(ref, focusVisibleRef);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  const handleFocus = event => {
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const ownerState = (0, _extends2.default)({}, props, {
    color,
    component,
    focusVisible,
    underline,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(LinkRoot, (0, _extends2.default)({
    color: color,
    className: (0, _clsx.default)(classes.root, className),
    classes: TypographyClasses,
    component: component,
    onBlur: handleBlur,
    onFocus: handleFocus,
    ref: handlerRef,
    ownerState: ownerState,
    variant: variant,
    sx: [...(!Object.keys(_getTextDecoration.colorTransformations).includes(color) ? [{
      color
    }] : []), ...(Array.isArray(sx) ? sx : [sx])]
  }, other));
});
 false ? 0 : void 0;
var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ 2119:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.colorTransformations = void 0;

var _system = __webpack_require__(43047);

const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};
exports.colorTransformations = colorTransformations;

const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};

const getTextDecoration = ({
  theme,
  ownerState
}) => {
  const transformedColor = transformDeprecatedColors(ownerState.color);
  const color = (0, _system.getPath)(theme, `palette.${transformedColor}`, false) || ownerState.color;
  const channelColor = (0, _system.getPath)(theme, `palette.${transformedColor}Channel`);

  if ('vars' in theme && channelColor) {
    return `rgba(${channelColor} / 0.4)`;
  }

  return (0, _system.alpha)(color, 0.4);
};

var _default = getTextDecoration;
exports["default"] = _default;

/***/ }),

/***/ 94984:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  linkClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Link.default;
  }
}));
Object.defineProperty(exports, "linkClasses", ({
  enumerable: true,
  get: function () {
    return _linkClasses.default;
  }
}));

var _Link = _interopRequireDefault(__webpack_require__(47034));

var _linkClasses = _interopRequireWildcard(__webpack_require__(23400));

Object.keys(_linkClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _linkClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _linkClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 23400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getLinkUtilityClass = getLinkUtilityClass;

var _base = __webpack_require__(22050);

function getLinkUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiLink', slot);
}

const linkClasses = (0, _base.generateUtilityClasses)('MuiLink', ['root', 'underlineNone', 'underlineHover', 'underlineAlways', 'button', 'focusVisible']);
var _default = linkClasses;
exports["default"] = _default;

/***/ })

};
;