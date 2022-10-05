"use strict";
exports.id = 3506;
exports.ids = [3506];
exports.modules = {

/***/ 38584:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var _PopperUnstyled = _interopRequireDefault(__webpack_require__(45264));

var _system = __webpack_require__(43047);

var _utils = __webpack_require__(77462);

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _styles = __webpack_require__(26178);

var _jsxRuntime = __webpack_require__(85893);

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PopperRoot = (0, _styles.styled)(_PopperUnstyled.default, {
  name: 'MuiPopper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Popper](https://mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/material-ui/api/popper/)
 */

const Popper = /*#__PURE__*/React.forwardRef(function Popper(inProps, ref) {
  const theme = (0, _system.useThemeWithoutDefault)();
  const props = (0, _styles.useThemeProps)({
    props: inProps,
    name: 'MuiPopper'
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PopperRoot, (0, _extends2.default)({
    direction: theme == null ? void 0 : theme.direction
  }, props, {
    ref: ref
  }));
});
 false ? 0 : void 0;
var _default = Popper;
exports["default"] = _default;

/***/ }),

/***/ 28598:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Popper.default;
  }
}));

var _Popper = _interopRequireDefault(__webpack_require__(38584));

/***/ }),

/***/ 21023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.testReset = testReset;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(7071));

var _extends2 = _interopRequireDefault(__webpack_require__(10434));

var React = _interopRequireWildcard(__webpack_require__(67294));

var _propTypes = _interopRequireDefault(__webpack_require__(45697));

var _clsx = _interopRequireDefault(__webpack_require__(57966));

var _utils = __webpack_require__(77462);

var _base = __webpack_require__(22050);

var _system = __webpack_require__(43047);

var _styled = _interopRequireDefault(__webpack_require__(90948));

var _useTheme = _interopRequireDefault(__webpack_require__(2734));

var _useThemeProps = _interopRequireDefault(__webpack_require__(71657));

var _capitalize = _interopRequireDefault(__webpack_require__(98216));

var _Grow = _interopRequireDefault(__webpack_require__(17973));

var _Popper = _interopRequireDefault(__webpack_require__(28598));

var _useEventCallback = _interopRequireDefault(__webpack_require__(2068));

var _useForkRef = _interopRequireDefault(__webpack_require__(51705));

var _useId = _interopRequireDefault(__webpack_require__(27909));

var _useIsFocusVisible = _interopRequireDefault(__webpack_require__(79674));

var _useControlled = _interopRequireDefault(__webpack_require__(49299));

var _tooltipClasses = _interopRequireWildcard(__webpack_require__(48999));

var _jsxRuntime = __webpack_require__(85893);

const _excluded = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "title", "TransitionComponent", "TransitionProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

const useUtilityClasses = ownerState => {
  const {
    classes,
    disableInteractive,
    arrow,
    touch,
    placement
  } = ownerState;
  const slots = {
    popper: ['popper', !disableInteractive && 'popperInteractive', arrow && 'popperArrow'],
    tooltip: ['tooltip', arrow && 'tooltipArrow', touch && 'touch', `tooltipPlacement${(0, _capitalize.default)(placement.split('-')[0])}`],
    arrow: ['arrow']
  };
  return (0, _base.unstable_composeClasses)(slots, _tooltipClasses.getTooltipUtilityClass, classes);
};

const TooltipPopper = (0, _styled.default)(_Popper.default, {
  name: 'MuiTooltip',
  slot: 'Popper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.popper, !ownerState.disableInteractive && styles.popperInteractive, ownerState.arrow && styles.popperArrow, !ownerState.open && styles.popperClose];
  }
})(({
  theme,
  ownerState,
  open
}) => (0, _extends2.default)({
  zIndex: (theme.vars || theme).zIndex.tooltip,
  pointerEvents: 'none'
}, !ownerState.disableInteractive && {
  pointerEvents: 'auto'
}, !open && {
  pointerEvents: 'none'
}, ownerState.arrow && {
  [`&[data-popper-placement*="bottom"] .${_tooltipClasses.default.arrow}`]: {
    top: 0,
    marginTop: '-0.71em',
    '&::before': {
      transformOrigin: '0 100%'
    }
  },
  [`&[data-popper-placement*="top"] .${_tooltipClasses.default.arrow}`]: {
    bottom: 0,
    marginBottom: '-0.71em',
    '&::before': {
      transformOrigin: '100% 0'
    }
  },
  [`&[data-popper-placement*="right"] .${_tooltipClasses.default.arrow}`]: (0, _extends2.default)({}, !ownerState.isRtl ? {
    left: 0,
    marginLeft: '-0.71em'
  } : {
    right: 0,
    marginRight: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '100% 100%'
    }
  }),
  [`&[data-popper-placement*="left"] .${_tooltipClasses.default.arrow}`]: (0, _extends2.default)({}, !ownerState.isRtl ? {
    right: 0,
    marginRight: '-0.71em'
  } : {
    left: 0,
    marginLeft: '-0.71em'
  }, {
    height: '1em',
    width: '0.71em',
    '&::before': {
      transformOrigin: '0 0'
    }
  })
}));
const TooltipTooltip = (0, _styled.default)('div', {
  name: 'MuiTooltip',
  slot: 'Tooltip',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.tooltip, ownerState.touch && styles.touch, ownerState.arrow && styles.tooltipArrow, styles[`tooltipPlacement${(0, _capitalize.default)(ownerState.placement.split('-')[0])}`]];
  }
})(({
  theme,
  ownerState
}) => (0, _extends2.default)({
  backgroundColor: theme.vars ? theme.vars.palette.Tooltip.bg : (0, _system.alpha)(theme.palette.grey[700], 0.92),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  color: (theme.vars || theme).palette.common.white,
  fontFamily: theme.typography.fontFamily,
  padding: '4px 8px',
  fontSize: theme.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: 'break-word',
  fontWeight: theme.typography.fontWeightMedium
}, ownerState.arrow && {
  position: 'relative',
  margin: 0
}, ownerState.touch && {
  padding: '8px 16px',
  fontSize: theme.typography.pxToRem(14),
  lineHeight: `${round(16 / 14)}em`,
  fontWeight: theme.typography.fontWeightRegular
}, {
  [`.${_tooltipClasses.default.popper}[data-popper-placement*="left"] &`]: (0, _extends2.default)({
    transformOrigin: 'right center'
  }, !ownerState.isRtl ? (0, _extends2.default)({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  }) : (0, _extends2.default)({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  })),
  [`.${_tooltipClasses.default.popper}[data-popper-placement*="right"] &`]: (0, _extends2.default)({
    transformOrigin: 'left center'
  }, !ownerState.isRtl ? (0, _extends2.default)({
    marginLeft: '14px'
  }, ownerState.touch && {
    marginLeft: '24px'
  }) : (0, _extends2.default)({
    marginRight: '14px'
  }, ownerState.touch && {
    marginRight: '24px'
  })),
  [`.${_tooltipClasses.default.popper}[data-popper-placement*="top"] &`]: (0, _extends2.default)({
    transformOrigin: 'center bottom',
    marginBottom: '14px'
  }, ownerState.touch && {
    marginBottom: '24px'
  }),
  [`.${_tooltipClasses.default.popper}[data-popper-placement*="bottom"] &`]: (0, _extends2.default)({
    transformOrigin: 'center top',
    marginTop: '14px'
  }, ownerState.touch && {
    marginTop: '24px'
  })
}));
const TooltipArrow = (0, _styled.default)('span', {
  name: 'MuiTooltip',
  slot: 'Arrow',
  overridesResolver: (props, styles) => styles.arrow
})(({
  theme
}) => ({
  overflow: 'hidden',
  position: 'absolute',
  width: '1em',
  height: '0.71em'
  /* = width / sqrt(2) = (length of the hypotenuse) */
  ,
  boxSizing: 'border-box',
  color: theme.vars ? theme.vars.palette.Tooltip.bg : (0, _system.alpha)(theme.palette.grey[700], 0.9),
  '&::before': {
    content: '""',
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: 'currentColor',
    transform: 'rotate(45deg)'
  }
}));
let hystersisOpen = false;
let hystersisTimer = null;

function testReset() {
  hystersisOpen = false;
  clearTimeout(hystersisTimer);
}

function composeEventHandler(handler, eventHandler) {
  return event => {
    if (eventHandler) {
      eventHandler(event);
    }

    handler(event);
  };
} // TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.


const Tooltip = /*#__PURE__*/React.forwardRef(function Tooltip(inProps, ref) {
  var _components$Popper, _ref, _components$Transitio, _components$Tooltip, _components$Arrow, _componentsProps$popp;

  const props = (0, _useThemeProps.default)({
    props: inProps,
    name: 'MuiTooltip'
  });
  const {
    arrow = false,
    children,
    components = {},
    componentsProps = {},
    describeChild = false,
    disableFocusListener = false,
    disableHoverListener = false,
    disableInteractive: disableInteractiveProp = false,
    disableTouchListener = false,
    enterDelay = 100,
    enterNextDelay = 0,
    enterTouchDelay = 700,
    followCursor = false,
    id: idProp,
    leaveDelay = 0,
    leaveTouchDelay = 1500,
    onClose,
    onOpen,
    open: openProp,
    placement = 'bottom',
    PopperComponent: PopperComponentProp,
    PopperProps = {},
    title,
    TransitionComponent: TransitionComponentProp = _Grow.default,
    TransitionProps
  } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
  const theme = (0, _useTheme.default)();
  const isRtl = theme.direction === 'rtl';
  const [childNode, setChildNode] = React.useState();
  const [arrowRef, setArrowRef] = React.useState(null);
  const ignoreNonTouchEvents = React.useRef(false);
  const disableInteractive = disableInteractiveProp || followCursor;
  const closeTimer = React.useRef();
  const enterTimer = React.useRef();
  const leaveTimer = React.useRef();
  const touchTimer = React.useRef();
  const [openState, setOpenState] = (0, _useControlled.default)({
    controlled: openProp,
    default: false,
    name: 'Tooltip',
    state: 'open'
  });
  let open = openState;

  if (false) {}

  const id = (0, _useId.default)(idProp);
  const prevUserSelect = React.useRef();
  const stopTouchInteraction = React.useCallback(() => {
    if (prevUserSelect.current !== undefined) {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      prevUserSelect.current = undefined;
    }

    clearTimeout(touchTimer.current);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(closeTimer.current);
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      stopTouchInteraction();
    };
  }, [stopTouchInteraction]);

  const handleOpen = event => {
    clearTimeout(hystersisTimer);
    hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
    // We can skip rerendering when the tooltip is already open.
    // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

    setOpenState(true);

    if (onOpen && !open) {
      onOpen(event);
    }
  };

  const handleClose = (0, _useEventCallback.default)(
  /**
   * @param {React.SyntheticEvent | Event} event
   */
  event => {
    clearTimeout(hystersisTimer);
    hystersisTimer = setTimeout(() => {
      hystersisOpen = false;
    }, 800 + leaveDelay);
    setOpenState(false);

    if (onClose && open) {
      onClose(event);
    }

    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => {
      ignoreNonTouchEvents.current = false;
    }, theme.transitions.duration.shortest);
  });

  const handleEnter = event => {
    if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
      return;
    } // Remove the title ahead of time.
    // We don't want to wait for the next render commit.
    // We would risk displaying two tooltips at the same time (native + this one).


    if (childNode) {
      childNode.removeAttribute('title');
    }

    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hystersisOpen && enterNextDelay) {
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hystersisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const handleLeave = event => {
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef
  } = (0, _useIsFocusVisible.default)(); // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
  // We just need to re-render the Tooltip if the focus-visible state changes.

  const [, setChildIsFocusVisible] = React.useState(false);

  const handleBlur = event => {
    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setChildIsFocusVisible(false);
      handleLeave(event);
    }
  };

  const handleFocus = event => {
    // Workaround for https://github.com/facebook/react/issues/7769
    // The autoFocus of React might trigger the event before the componentDidMount.
    // We need to account for this eventuality.
    if (!childNode) {
      setChildNode(event.currentTarget);
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setChildIsFocusVisible(true);
      handleEnter(event);
    }
  };

  const detectTouchStart = event => {
    ignoreNonTouchEvents.current = true;
    const childrenProps = children.props;

    if (childrenProps.onTouchStart) {
      childrenProps.onTouchStart(event);
    }
  };

  const handleMouseOver = handleEnter;
  const handleMouseLeave = handleLeave;

  const handleTouchStart = event => {
    detectTouchStart(event);
    clearTimeout(leaveTimer.current);
    clearTimeout(closeTimer.current);
    stopTouchInteraction();
    prevUserSelect.current = document.body.style.WebkitUserSelect; // Prevent iOS text selection on long-tap.

    document.body.style.WebkitUserSelect = 'none';
    touchTimer.current = setTimeout(() => {
      document.body.style.WebkitUserSelect = prevUserSelect.current;
      handleEnter(event);
    }, enterTouchDelay);
  };

  const handleTouchEnd = event => {
    if (children.props.onTouchEnd) {
      children.props.onTouchEnd(event);
    }

    stopTouchInteraction();
    clearTimeout(leaveTimer.current);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveTouchDelay);
  };

  React.useEffect(() => {
    if (!open) {
      return undefined;
    }
    /**
     * @param {KeyboardEvent} nativeEvent
     */


    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        handleClose(nativeEvent);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, open]);
  const handleUseRef = (0, _useForkRef.default)(setChildNode, ref);
  const handleFocusRef = (0, _useForkRef.default)(focusVisibleRef, handleUseRef);
  const handleRef = (0, _useForkRef.default)(children.ref, handleFocusRef); // There is no point in displaying an empty tooltip.

  if (typeof title !== 'number' && !title) {
    open = false;
  }

  const positionRef = React.useRef({
    x: 0,
    y: 0
  });
  const popperRef = React.useRef();

  const handleMouseMove = event => {
    const childrenProps = children.props;

    if (childrenProps.onMouseMove) {
      childrenProps.onMouseMove(event);
    }

    positionRef.current = {
      x: event.clientX,
      y: event.clientY
    };

    if (popperRef.current) {
      popperRef.current.update();
    }
  };

  const nameOrDescProps = {};
  const titleIsString = typeof title === 'string';

  if (describeChild) {
    nameOrDescProps.title = !open && titleIsString && !disableHoverListener ? title : null;
    nameOrDescProps['aria-describedby'] = open ? id : null;
  } else {
    nameOrDescProps['aria-label'] = titleIsString ? title : null;
    nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
  }

  const childrenProps = (0, _extends2.default)({}, nameOrDescProps, other, children.props, {
    className: (0, _clsx.default)(other.className, children.props.className),
    onTouchStart: detectTouchStart,
    ref: handleRef
  }, followCursor ? {
    onMouseMove: handleMouseMove
  } : {});

  if (false) {}

  const interactiveWrapperListeners = {};

  if (!disableTouchListener) {
    childrenProps.onTouchStart = handleTouchStart;
    childrenProps.onTouchEnd = handleTouchEnd;
  }

  if (!disableHoverListener) {
    childrenProps.onMouseOver = composeEventHandler(handleMouseOver, childrenProps.onMouseOver);
    childrenProps.onMouseLeave = composeEventHandler(handleMouseLeave, childrenProps.onMouseLeave);

    if (!disableInteractive) {
      interactiveWrapperListeners.onMouseOver = handleMouseOver;
      interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
    }
  }

  if (!disableFocusListener) {
    childrenProps.onFocus = composeEventHandler(handleFocus, childrenProps.onFocus);
    childrenProps.onBlur = composeEventHandler(handleBlur, childrenProps.onBlur);

    if (!disableInteractive) {
      interactiveWrapperListeners.onFocus = handleFocus;
      interactiveWrapperListeners.onBlur = handleBlur;
    }
  }

  if (false) {}

  const popperOptions = React.useMemo(() => {
    var _PopperProps$popperOp;

    let tooltipModifiers = [{
      name: 'arrow',
      enabled: Boolean(arrowRef),
      options: {
        element: arrowRef,
        padding: 4
      }
    }];

    if ((_PopperProps$popperOp = PopperProps.popperOptions) != null && _PopperProps$popperOp.modifiers) {
      tooltipModifiers = tooltipModifiers.concat(PopperProps.popperOptions.modifiers);
    }

    return (0, _extends2.default)({}, PopperProps.popperOptions, {
      modifiers: tooltipModifiers
    });
  }, [arrowRef, PopperProps]);
  const ownerState = (0, _extends2.default)({}, props, {
    isRtl,
    arrow,
    disableInteractive,
    placement,
    PopperComponentProp,
    touch: ignoreNonTouchEvents.current
  });
  const classes = useUtilityClasses(ownerState);
  const PopperComponent = (_components$Popper = components.Popper) != null ? _components$Popper : TooltipPopper;
  const TransitionComponent = (_ref = (_components$Transitio = components.Transition) != null ? _components$Transitio : TransitionComponentProp) != null ? _ref : _Grow.default;
  const TooltipComponent = (_components$Tooltip = components.Tooltip) != null ? _components$Tooltip : TooltipTooltip;
  const ArrowComponent = (_components$Arrow = components.Arrow) != null ? _components$Arrow : TooltipArrow;
  const popperProps = (0, _base.appendOwnerState)(PopperComponent, (0, _extends2.default)({}, PopperProps, componentsProps.popper), ownerState);
  const transitionProps = (0, _base.appendOwnerState)(TransitionComponent, (0, _extends2.default)({}, TransitionProps, componentsProps.transition), ownerState);
  const tooltipProps = (0, _base.appendOwnerState)(TooltipComponent, (0, _extends2.default)({}, componentsProps.tooltip), ownerState);
  const tooltipArrowProps = (0, _base.appendOwnerState)(ArrowComponent, (0, _extends2.default)({}, componentsProps.arrow), ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [/*#__PURE__*/React.cloneElement(children, childrenProps), /*#__PURE__*/(0, _jsxRuntime.jsx)(PopperComponent, (0, _extends2.default)({
      as: PopperComponentProp != null ? PopperComponentProp : _Popper.default,
      placement: placement,
      anchorEl: followCursor ? {
        getBoundingClientRect: () => ({
          top: positionRef.current.y,
          left: positionRef.current.x,
          right: positionRef.current.x,
          bottom: positionRef.current.y,
          width: 0,
          height: 0
        })
      } : childNode,
      popperRef: popperRef,
      open: childNode ? open : false,
      id: id,
      transition: true
    }, interactiveWrapperListeners, popperProps, {
      className: (0, _clsx.default)(classes.popper, PopperProps == null ? void 0 : PopperProps.className, (_componentsProps$popp = componentsProps.popper) == null ? void 0 : _componentsProps$popp.className),
      popperOptions: popperOptions,
      children: ({
        TransitionProps: TransitionPropsInner
      }) => {
        var _componentsProps$tool, _componentsProps$arro;

        return /*#__PURE__*/(0, _jsxRuntime.jsx)(TransitionComponent, (0, _extends2.default)({
          timeout: theme.transitions.duration.shorter
        }, TransitionPropsInner, transitionProps, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(TooltipComponent, (0, _extends2.default)({}, tooltipProps, {
            className: (0, _clsx.default)(classes.tooltip, (_componentsProps$tool = componentsProps.tooltip) == null ? void 0 : _componentsProps$tool.className),
            children: [title, arrow ? /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowComponent, (0, _extends2.default)({}, tooltipArrowProps, {
              className: (0, _clsx.default)(classes.arrow, (_componentsProps$arro = componentsProps.arrow) == null ? void 0 : _componentsProps$arro.className),
              ref: setArrowRef
            })) : null]
          }))
        }));
      }
    }))]
  });
});
 false ? 0 : void 0;
var _default = Tooltip;
exports["default"] = _default;

/***/ }),

/***/ 3506:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



var _interopRequireDefault = __webpack_require__(64836);

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var _exportNames = {
  tooltipClasses: true
};
Object.defineProperty(exports, "default", ({
  enumerable: true,
  get: function () {
    return _Tooltip.default;
  }
}));
Object.defineProperty(exports, "tooltipClasses", ({
  enumerable: true,
  get: function () {
    return _tooltipClasses.default;
  }
}));

var _Tooltip = _interopRequireDefault(__webpack_require__(21023));

var _tooltipClasses = _interopRequireWildcard(__webpack_require__(48999));

Object.keys(_tooltipClasses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _tooltipClasses[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _tooltipClasses[key];
    }
  });
});

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/***/ }),

/***/ 48999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.getTooltipUtilityClass = getTooltipUtilityClass;

var _base = __webpack_require__(22050);

function getTooltipUtilityClass(slot) {
  return (0, _base.generateUtilityClass)('MuiTooltip', slot);
}

const tooltipClasses = (0, _base.generateUtilityClasses)('MuiTooltip', ['popper', 'popperInteractive', 'popperArrow', 'popperClose', 'tooltip', 'tooltipArrow', 'touch', 'tooltipPlacementLeft', 'tooltipPlacementRight', 'tooltipPlacementTop', 'tooltipPlacementBottom', 'arrow']);
var _default = tooltipClasses;
exports["default"] = _default;

/***/ }),

/***/ 27909:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _utils = __webpack_require__(77462);

var _default = _utils.unstable_useId;
exports["default"] = _default;

/***/ })

};
;