(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{44373:function(t,e,n){"use strict";var r=n(63366),i=n(87462),a=n(67294),o=n(86010),s=n(94780),l=n(41796),u=n(81719),c=n(78884),d=n(75741),f=n(85893);const p=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,u.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.absolute&&e.absolute,e[n.variant],n.light&&e.light,"vertical"===n.orientation&&e.vertical,n.flexItem&&e.flexItem,n.children&&e.withChildren,n.children&&"vertical"===n.orientation&&e.withChildrenVertical,"right"===n.textAlign&&"vertical"!==n.orientation&&e.textAlignRight,"left"===n.textAlign&&"vertical"!==n.orientation&&e.textAlignLeft]}})((({theme:t,ownerState:e})=>(0,i.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(t.vars||t).palette.divider,borderBottomWidth:"thin"},e.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},e.light&&{borderColor:t.vars?`rgba(${t.vars.palette.dividerChannel} / 0.08)`:(0,l.Fq)(t.palette.divider,.08)},"inset"===e.variant&&{marginLeft:72},"middle"===e.variant&&"horizontal"===e.orientation&&{marginLeft:t.spacing(2),marginRight:t.spacing(2)},"middle"===e.variant&&"vertical"===e.orientation&&{marginTop:t.spacing(1),marginBottom:t.spacing(1)},"vertical"===e.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},e.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:t,ownerState:e})=>(0,i.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${(t.vars||t).palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:t,ownerState:e})=>(0,i.Z)({},e.children&&"vertical"===e.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${(t.vars||t).palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:t})=>(0,i.Z)({},"right"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===t.textAlign&&"vertical"!==t.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),m=(0,u.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.wrapper,"vertical"===n.orientation&&e.wrapperVertical]}})((({theme:t,ownerState:e})=>(0,i.Z)({display:"inline-block",paddingLeft:`calc(${t.spacing(1)} * 1.2)`,paddingRight:`calc(${t.spacing(1)} * 1.2)`},"vertical"===e.orientation&&{paddingTop:`calc(${t.spacing(1)} * 1.2)`,paddingBottom:`calc(${t.spacing(1)} * 1.2)`}))),g=a.forwardRef((function(t,e){const n=(0,c.Z)({props:t,name:"MuiDivider"}),{absolute:a=!1,children:l,className:u,component:g=(l?"div":"hr"),flexItem:v=!1,light:y=!1,orientation:b="horizontal",role:w=("hr"!==g?"separator":void 0),textAlign:x="center",variant:V="fullWidth"}=n,S=(0,r.Z)(n,p),E=(0,i.Z)({},n,{absolute:a,component:g,flexItem:v,light:y,orientation:b,role:w,textAlign:x,variant:V}),O=(t=>{const{absolute:e,children:n,classes:r,flexItem:i,light:a,orientation:o,textAlign:l,variant:u}=t,c={root:["root",e&&"absolute",u,a&&"light","vertical"===o&&"vertical",i&&"flexItem",n&&"withChildren",n&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,s.Z)(c,d.V,r)})(E);return(0,f.jsx)(h,(0,i.Z)({as:g,className:(0,o.Z)(O.root,u),role:w,ref:e,ownerState:E},S,{children:l?(0,f.jsx)(m,{className:O.wrapper,ownerState:E,children:l}):null}))}));e.Z=g},75741:function(t,e,n){"use strict";n.d(e,{V:function(){return i}});var r=n(34867);function i(t){return(0,r.Z)("MuiDivider",t)}const a=(0,n(1588).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);e.Z=a},8273:function(t,e,n){"use strict";n.r(e),n.d(e,{CountUp:function(){return i}});var r=function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=function(){function t(t,e,n){var i=this;this.endVal=e,this.options=n,this.version="2.3.2",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:"",enableScrollSpy:!1,scrollSpyDelay:200,scrollSpyOnce:!1},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.once=!1,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration);var n=i.countDown?i.frameVal<i.endVal:i.frameVal>i.endVal;i.frameVal=n?i.endVal:i.frameVal,i.frameVal=Number(i.frameVal.toFixed(i.options.decimalPlaces)),i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,o=t<0?"-":"";e=Math.abs(t).toFixed(i.options.decimalPlaces);var s=(e+="").split(".");if(n=s[0],r=s.length>1?i.options.decimal+s[1]:"",i.options.useGrouping){a="";for(var l=0,u=n.length;l<u;++l)0!==l&&l%3==0&&(a=i.options.separator+a),a=n[u-l-1]+a;n=a}return i.options.numerals&&i.options.numerals.length&&(n=n.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),o+i.options.prefix+n+r+i.options.suffix},this.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},this.options=r(r({},this.defaults),n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined","undefined"!=typeof window&&this.options.enableScrollSpy&&(this.error?console.error(this.error,t):(window.onScrollFns=window.onScrollFns||[],window.onScrollFns.push((function(){return i.handleScroll(i)})),window.onscroll=function(){window.onScrollFns.forEach((function(t){return t()}))},this.handleScroll(this)))}return t.prototype.handleScroll=function(t){if(t&&window&&!t.once){var e=window.innerHeight+window.scrollY,n=t.el.getBoundingClientRect(),r=n.top+n.height+window.pageYOffset;r<e&&r>window.scrollY&&t.paused?(t.paused=!1,setTimeout((function(){return t.start()}),t.options.scrollSpyDelay),t.options.scrollSpyOnce&&(t.once=!0)):window.scrollY>r&&!t.paused&&t.reset()}},t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold&&this.options.useEasing){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;null!==this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,null==this.finalEndVal&&this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: ".concat(t),null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}()},11749:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Presentation/sections/Counters",function(){return n(10820)}])},9866:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(26042),i=n(69396),a=n(99534),o=n(85893),s=n(67294),l=n(45697),u=n.n(l),c=n(61953),d=(0,n(81719).ZP)(c.Z)((function(t){var e=t.theme,n=t.ownerState,r=e.palette,i=e.functions,a=e.borders,o=e.boxShadows,s=n.variant,l=n.bgColor,u=n.color,c=n.opacity,d=n.borderRadius,f=n.shadow,p=n.coloredShadow,h=r.gradients,m=r.grey,g=r.white,v=i.linearGradient,y=a.borderRadius,b=o.colored,w={"grey-100":m[100],"grey-200":m[200],"grey-300":m[300],"grey-400":m[400],"grey-500":m[500],"grey-600":m[600],"grey-700":m[700],"grey-800":m[800],"grey-900":m[900]},x=["transparent","white","black","primary","secondary","info","success","warning","error","light","dark","text","grey-100","grey-200","grey-300","grey-400","grey-500","grey-600","grey-700","grey-800","grey-900"],V=l;V="gradient"===s?["primary","secondary","info","success","warning","error","dark","light"].find((function(t){return t===l}))?v(h[l].main,h[l].state):g.main:x.find((function(t){return t===l}))?r[l]?r[l].main:w[l]:l;var S=u;x.find((function(t){return t===u}))&&(S=r[u]?r[u].main:w[u]);var E=d;["xs","sm","md","lg","xl","xxl","section"].find((function(t){return t===d}))&&(E=y[d]);var O="none";return["xs","sm","md","lg","xl","xxl","inset"].find((function(t){return t===f}))?O=o[f]:p&&(O=b[p]?b[p]:"none"),{opacity:c,background:V,color:S,borderRadius:E,boxShadow:O}})),f=(0,s.forwardRef)((function(t,e){var n=t.variant,s=t.bgColor,l=t.color,u=t.opacity,c=t.borderRadius,f=t.shadow,p=t.coloredShadow,h=(0,a.Z)(t,["variant","bgColor","color","opacity","borderRadius","shadow","coloredShadow"]);return(0,o.jsx)(d,(0,i.Z)((0,r.Z)({},h),{ref:e,ownerState:{variant:n,bgColor:s,color:l,opacity:u,borderRadius:c,shadow:f,coloredShadow:p}}))}));f.defaultProps={variant:"contained",bgColor:"transparent",color:"dark",opacity:1,borderRadius:"none",shadow:"none",coloredShadow:"none"},f.propTypes={variant:u().oneOf(["contained","gradient"]),bgColor:u().string,color:u().string,opacity:u().number,borderRadius:u().string,shadow:u().string,coloredShadow:u().oneOf(["primary","secondary","info","success","warning","error","light","dark","none"])};var p=f},27713:function(t,e,n){"use strict";n.d(e,{Z:function(){return p}});var r=n(26042),i=n(69396),a=n(99534),o=n(85893),s=n(67294),l=n(45697),u=n.n(l),c=n(29630),d=(0,n(81719).ZP)(c.Z)((function(t){var e=t.theme,n=t.ownerState,i=e.palette,a=e.typography,o=e.functions,s=n.color,l=n.textTransform,u=n.verticalAlign,c=n.fontWeight,d=n.opacity,f=n.textGradient,p=i.gradients,h=i.transparent,m=a.fontWeightLight,g=a.fontWeightRegular,v=a.fontWeightMedium,y=a.fontWeightBold,b=o.linearGradient,w={light:m,regular:g,medium:v,bold:y},x="inherit"!==s&&i[s]?i[s].main:"inherit";return(0,r.Z)({opacity:d,textTransform:l,verticalAlign:u,textDecoration:"none",color:x,letterSpacing:"-0.125px",fontWeight:w[c]&&w[c]},f&&{backgroundImage:"inherit"!==s&&"text"!==s&&"white"!==s&&p[s]?b(p[s].main,p[s].state):b(p.dark.main,p.dark.state),display:"inline-block",WebkitBackgroundClip:"text",WebkitTextFillColor:h.main,position:"relative",zIndex:1})})),f=(0,s.forwardRef)((function(t,e){var n=t.color,s=t.fontWeight,l=t.textTransform,u=t.verticalAlign,c=t.textGradient,f=t.opacity,p=t.children,h=(0,a.Z)(t,["color","fontWeight","textTransform","verticalAlign","textGradient","opacity","children"]);return(0,o.jsx)(d,(0,i.Z)((0,r.Z)({},h),{ref:e,ownerState:{color:n,textTransform:l,verticalAlign:u,fontWeight:s,opacity:f,textGradient:c},children:p}))}));f.defaultProps={color:"dark",fontWeight:!1,textTransform:"none",verticalAlign:"unset",textGradient:!1,opacity:1},f.propTypes={color:u().oneOf(["inherit","primary","secondary","info","success","warning","error","light","dark","text","white"]),fontWeight:u().oneOf([!1,"light","regular","medium","bold"]),textTransform:u().oneOf(["none","capitalize","uppercase","lowercase"]),verticalAlign:u().oneOf(["unset","baseline","sub","super","text-top","text-bottom","middle","top","bottom"]),textGradient:u().bool,children:u().node.isRequired,opacity:u().number};var p=f},11670:function(t,e,n){"use strict";var r=n(26042),i=n(99534),a=n(85893),o=n(45697),s=n.n(o),l=n(17857),u=n(9866),c=n(27713);function d(t){var e=t.color,n=t.count,o=t.title,s=t.description,d=(0,i.Z)(t,["color","count","title","description"]);return(0,a.jsxs)(u.Z,{p:2,textAlign:"center",lineHeight:1,children:[(0,a.jsx)(c.Z,{variant:"h1",color:e,textGradient:!0,children:(0,a.jsx)(l.ZP,(0,r.Z)({end:n,duration:1},d))}),o&&(0,a.jsx)(c.Z,{variant:"h5",mt:2,mb:1,children:o}),s&&(0,a.jsx)(c.Z,{variant:"body2",color:"text",children:s})]})}d.defaultProps={color:"info",description:"",title:""},d.propTypes={color:s().oneOf(["primary","secondary","info","success","warning","error","light","dark"]),count:s().number.isRequired,title:s().string,description:s().string},e.Z=d},10820:function(t,e,n){"use strict";n.r(e);var r=n(85893),i=n(36336),a=n(79072),o=n(44373),s=n(9866),l=n(11670);e.default=function(){return(0,r.jsx)(s.Z,{component:"section",py:3,children:(0,r.jsx)(i.Z,{children:(0,r.jsxs)(a.ZP,{container:!0,item:!0,xs:12,lg:9,sx:{mx:"auto"},children:[(0,r.jsx)(a.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{count:70,suffix:"+",title:"Coded Elements",description:"From buttons, to inputs, navbars, alerts or cards, you are covered"})}),(0,r.jsxs)(a.ZP,{item:!0,xs:12,md:4,display:"flex",children:[(0,r.jsx)(o.Z,{orientation:"vertical",sx:{display:{xs:"none",md:"block"},mx:0}}),(0,r.jsx)(l.Z,{count:15,suffix:"+",title:"Design Blocks",description:"Mix the sections, change the colors and unleash your creativity"}),(0,r.jsx)(o.Z,{orientation:"vertical",sx:{display:{xs:"none",md:"block"},ml:0}})]}),(0,r.jsx)(a.ZP,{item:!0,xs:12,md:4,children:(0,r.jsx)(l.Z,{count:4,title:"Pages",description:"Save 3-4 weeks of work when you use our pre-made pages for your website"})})]})})})}},17857:function(t,e,n){"use strict";var r=n(67294),i=n(8273);function a(t){return t&&"object"===typeof t&&"default"in t?t:{default:t}}var o=a(r);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},c.apply(this,arguments)}function d(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var f="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?r.useLayoutEffect:r.useEffect;function p(t){var e=r.useRef(t);return f((function(){e.current=t})),r.useCallback((function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.current.apply(void 0,n)}),[])}var h=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],m={decimal:".",delay:null,prefix:"",suffix:"",duration:2,start:0,startOnMount:!0,enableReinitialize:!0},g=function(t){var e=r.useMemo((function(){return l(l({},m),t)}),[t]),n=e.ref,a=e.startOnMount,o=e.enableReinitialize,s=e.delay,u=e.onEnd,c=e.onStart,f=e.onPauseResume,g=e.onReset,v=e.onUpdate,y=d(e,h),b=r.useRef(),w=r.useRef(),x=r.useRef(!1),V=p((function(){return function(t,e){var n=e.decimal,r=e.decimals,a=e.duration,o=e.easingFn,s=e.end,l=e.formattingFn,u=e.numerals,c=e.prefix,d=e.separator,f=e.start,p=e.suffix,h=e.useEasing,m=e.enableScrollSpy,g=e.scrollSpyDelay,v=e.scrollSpyOnce;return new i.CountUp(t,s,{startVal:f,duration:a,decimal:n,decimalPlaces:r,easingFn:o,formattingFn:l,numerals:u,separator:d,prefix:c,suffix:p,useEasing:h,useGrouping:!!d,enableScrollSpy:m,scrollSpyDelay:g,scrollSpyOnce:v})}("string"===typeof n?n:n.current,y)})),S=p((function(t){var e=b.current;if(e&&!t)return e;var n=V();return b.current=n,n})),E=p((function(){var t=function(){return S(!0).start((function(){null===u||void 0===u||u({pauseResume:O,reset:R,start:A,update:Z})}))};s&&s>0?w.current=setTimeout(t,1e3*s):t(),null===c||void 0===c||c({pauseResume:O,reset:R,update:Z})})),O=p((function(){S().pauseResume(),null===f||void 0===f||f({reset:R,start:A,update:Z})})),R=p((function(){w.current&&clearTimeout(w.current),S().reset(),null===g||void 0===g||g({pauseResume:O,start:A,update:Z})})),Z=p((function(t){S().update(t),null===v||void 0===v||v({pauseResume:O,reset:R,start:A})})),A=p((function(){R(),E()})),j=p((function(t){a&&(t&&R(),E())}));return r.useEffect((function(){x.current?o&&j(!0):(x.current=!0,j())}),[o,x,j,s,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.formattingFn]),r.useEffect((function(){return function(){R()}}),[R]),{start:A,pauseResume:O,reset:R,update:Z,getCountUp:S}},v=["className","redraw","containerProps","children","style"];e.ZP=function(t){var e=t.className,n=t.redraw,i=t.containerProps,a=t.children,s=t.style,u=d(t,v),f=o.default.useRef(null),h=o.default.useRef(!1),m=g(l(l({},u),{},{ref:f,startOnMount:"function"!==typeof a||0===t.delay,enableReinitialize:!1})),y=m.start,b=m.reset,w=m.update,x=m.pauseResume,V=m.getCountUp,S=p((function(){y()})),E=p((function(e){t.preserveValue||b(),w(e)})),O=p((function(){"function"!==typeof t.children||f.current instanceof Element?V():console.error('Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.')}));r.useEffect((function(){O()}),[O]),r.useEffect((function(){h.current&&E(t.end)}),[t.end,E]);var R=n&&t;return r.useEffect((function(){n&&h.current&&S()}),[S,n,R]),r.useEffect((function(){!n&&h.current&&S()}),[S,n,t.start,t.suffix,t.prefix,t.duration,t.separator,t.decimals,t.decimal,t.className,t.formattingFn]),r.useEffect((function(){h.current=!0}),[]),"function"===typeof a?a({countUpRef:f,start:y,reset:b,update:w,pauseResume:x,getCountUp:V}):o.default.createElement("span",c({className:e,ref:f,style:s},i),t.start?V().formattingFn(t.start):"")}}},function(t){t.O(0,[774,373,539,888,179],(function(){return e=11749,t(t.s=e);var e}));var e=t.O();_N_E=e}]);