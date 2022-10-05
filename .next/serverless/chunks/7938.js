"use strict";
exports.id = 7938;
exports.ids = [7938];
exports.modules = {

/***/ 26447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.style = exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _system = __webpack_require__(43047);

var _utils = __webpack_require__(77462);

var _styled = _interopRequireDefault(__webpack_require__(90948));

var _useThemeProps = _interopRequireDefault(__webpack_require__(71657));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["component", "direction", "spacing", "divider", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Return an array with the separator React element interspersed between
 * each React node of the input children.
 *
 * > joinChildren([1,2,3], 0)
 * [1,0,2,0,3]
 */
function joinChildren(children, separator) {
  const childrenArray = React.Children.toArray(children).filter(Boolean);
  return childrenArray.reduce((output, child, index) => {
    output.push(child);

    if (index < childrenArray.length - 1) {
      output.push( /*#__PURE__*/React.cloneElement(separator, {
        key: `separator-${index}`
      }));
    }

    return output;
  }, []);
}

const getSideFromDirection = direction => {
  return {
    row: 'Left',
    'row-reverse': 'Right',
    column: 'Top',
    'column-reverse': 'Bottom'
  }[direction];
};

const style = ({
  ownerState,
  theme
}) => {
  let styles = (0, _extends2.default)({
    display: 'flex',
    flexDirection: 'column'
  }, (0, _system.handleBreakpoints)({
    theme
  }, (0, _system.unstable_resolveBreakpointValues)({
    values: ownerState.direction,
    breakpoints: theme.breakpoints.values
  }), propValue => ({
    flexDirection: propValue
  })));

  if (ownerState.spacing) {
    const transformer = (0, _system.createUnarySpacing)(theme);
    const base = Object.keys(theme.breakpoints.values).reduce((acc, breakpoint) => {
      if (typeof ownerState.spacing === 'object' && ownerState.spacing[breakpoint] != null || typeof ownerState.direction === 'object' && ownerState.direction[breakpoint] != null) {
        acc[breakpoint] = true;
      }

      return acc;
    }, {});
    const directionValues = (0, _system.unstable_resolveBreakpointValues)({
      values: ownerState.direction,
      base
    });
    const spacingValues = (0, _system.unstable_resolveBreakpointValues)({
      values: ownerState.spacing,
      base
    });

    if (typeof directionValues === 'object') {
      Object.keys(directionValues).forEach((breakpoint, index, breakpoints) => {
        const directionValue = directionValues[breakpoint];

        if (!directionValue) {
          const previousDirectionValue = index > 0 ? directionValues[breakpoints[index - 1]] : 'column';
          directionValues[breakpoint] = previousDirectionValue;
        }
      });
    }

    const styleFromPropValue = (propValue, breakpoint) => {
      return {
        '& > :not(style) + :not(style)': {
          margin: 0,
          [`margin${getSideFromDirection(breakpoint ? directionValues[breakpoint] : ownerState.direction)}`]: (0, _system.getValue)(transformer, propValue)
        }
      };
    };

    styles = (0, _utils.deepmerge)(styles, (0, _system.handleBreakpoints)({
      theme
    }, spacingValues, styleFromPropValue));
  }

  styles = (0, _system.mergeBreakpointsInOrder)(theme.breakpoints, styles);
  return styles;
};

exports.style = style;
const StackRoot = (0, _styled.default)('div', {
  name: 'MuiStack',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    return [styles.root];
  }
})(style);
const Stack = /*#__PURE__*/React.forwardRef(function Stack(inProps, ref) {
  const themeProps = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiStack'
  });
  const props = (0, _system.unstable_extendSxProp)(themeProps);
  const {
    component = 'div',
    direction = 'column',
    spacing = 0,
    divider,
    children
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const ownerState = {
    direction,
    spacing
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(StackRoot, (0, _extends2.default)({
    as: component,
    ownerState: ownerState,
    ref: ref
  }, other, {
    children: divider ? joinChildren(children, divider) : children
  }));
});
 false ? 0 : void 0;
var _default = Stack;
exports["default"] = _default;

/***/ }),

/***/ 37938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(64836);

__webpack_unused_export__ = ({
  value: true
});
Object.defineProperty(exports, "Z", ({
  enumerable: true,
  get: function () {
    return _Stack.default;
  }
}));

var _Stack = _interopRequireDefault(__webpack_require__(26447));

/***/ })

};
;