(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,r,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return o(8363)}])},8363:function(e,r,o){"use strict";o.r(r),o.d(r,{default:function(){return T}});var t=o(5893);o(1784);let n=({defaultColorScheme:e,localStorageKey:r,forceColorScheme:o})=>o?`document.documentElement.setAttribute("data-mantine-color-scheme", '${o}');`:`try {
  var _colorScheme = window.localStorage.getItem("${r}");
  var colorScheme = _colorScheme === "light" || _colorScheme === "dark" || _colorScheme === "auto" ? _colorScheme : "${e}";
  var computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.setAttribute("data-mantine-color-scheme", computedColorScheme);
} catch (e) {}
`;function a({defaultColorScheme:e="light",localStorageKey:r="mantine-color-scheme-value",forceColorScheme:o,...a}){let i=["light","dark","auto"].includes(e)?e:"light";return(0,t.jsx)("script",{...a,"data-mantine-script":!0,dangerouslySetInnerHTML:{__html:n({defaultColorScheme:i,localStorageKey:r,forceColorScheme:o})}})}function i(e){return"auto"===e||"dark"===e||"light"===e}var l=o(2145),c=o(3877),s=o(5541),m=o(8565),d=o(7294),u=o(5984);function h(){let e=(0,u.rZ)(),r=(0,l.R7)(),o=(0,c.X)(e.breakpoints).reduce((r,o)=>{let t=e.breakpoints[o].includes("px"),n=(0,s.px)(e.breakpoints[o]),a=t?`${n-.1}px`:(0,m.em)(n-.1),i=t?`${n}px`:(0,m.em)(n);return`${r}@media (max-width: ${a}) {.mantine-visible-from-${o} {display: none !important;}}@media (min-width: ${i}) {.mantine-hidden-from-${o} {display: none !important;}}`},"");return(0,t.jsx)("style",{"data-mantine-styles":"classes",nonce:r?.(),dangerouslySetInnerHTML:{__html:o}})}function f(e){return Object.entries(e).map(([e,r])=>`${e}: ${r};`).join("")}function b(e,r){return(Array.isArray(e)?e:[e]).reduce((e,r)=>`${r}{${e}}`,r)}var g=o(3643),$=o(7052),v=o(6167);function p(e,r){return function({color:e,theme:r,autoContrast:o}){return("boolean"==typeof o?o:r.autoContrast)&&(0,v.E)({color:e||r.primaryColor,theme:r}).isLight?"var(--mantine-color-black)":"var(--mantine-color-white)"}({color:e.colors[e.primaryColor][(0,$.j)(e,r)],theme:e,autoContrast:null})}var y=o(7187);function k({theme:e,color:r,colorScheme:o,name:t=r,withColorValues:n=!0}){if(!e.colors[r])return{};if("light"===o){let o=(0,$.j)(e,"light"),a={[`--mantine-color-${t}-text`]:`var(--mantine-color-${t}-filled)`,[`--mantine-color-${t}-filled`]:`var(--mantine-color-${t}-${o})`,[`--mantine-color-${t}-filled-hover`]:`var(--mantine-color-${t}-${9===o?8:o+1})`,[`--mantine-color-${t}-light`]:(0,y.F)(e.colors[r][o],.1),[`--mantine-color-${t}-light-hover`]:(0,y.F)(e.colors[r][o],.12),[`--mantine-color-${t}-light-color`]:`var(--mantine-color-${t}-${o})`,[`--mantine-color-${t}-outline`]:`var(--mantine-color-${t}-${o})`,[`--mantine-color-${t}-outline-hover`]:(0,y.F)(e.colors[r][o],.05)};return n?{[`--mantine-color-${t}-0`]:e.colors[r][0],[`--mantine-color-${t}-1`]:e.colors[r][1],[`--mantine-color-${t}-2`]:e.colors[r][2],[`--mantine-color-${t}-3`]:e.colors[r][3],[`--mantine-color-${t}-4`]:e.colors[r][4],[`--mantine-color-${t}-5`]:e.colors[r][5],[`--mantine-color-${t}-6`]:e.colors[r][6],[`--mantine-color-${t}-7`]:e.colors[r][7],[`--mantine-color-${t}-8`]:e.colors[r][8],[`--mantine-color-${t}-9`]:e.colors[r][9],...a}:a}let a=(0,$.j)(e,"dark"),i={[`--mantine-color-${t}-text`]:`var(--mantine-color-${t}-4)`,[`--mantine-color-${t}-filled`]:`var(--mantine-color-${t}-${a})`,[`--mantine-color-${t}-filled-hover`]:`var(--mantine-color-${t}-${9===a?8:a+1})`,[`--mantine-color-${t}-light`]:(0,y.F)(e.colors[r][Math.max(0,a-2)],.15),[`--mantine-color-${t}-light-hover`]:(0,y.F)(e.colors[r][Math.max(0,a-2)],.2),[`--mantine-color-${t}-light-color`]:`var(--mantine-color-${t}-${Math.max(a-5,0)})`,[`--mantine-color-${t}-outline`]:`var(--mantine-color-${t}-${Math.max(a-4,0)})`,[`--mantine-color-${t}-outline-hover`]:(0,y.F)(e.colors[r][Math.max(a-4,0)],.05)};return n?{[`--mantine-color-${t}-0`]:e.colors[r][0],[`--mantine-color-${t}-1`]:e.colors[r][1],[`--mantine-color-${t}-2`]:e.colors[r][2],[`--mantine-color-${t}-3`]:e.colors[r][3],[`--mantine-color-${t}-4`]:e.colors[r][4],[`--mantine-color-${t}-5`]:e.colors[r][5],[`--mantine-color-${t}-6`]:e.colors[r][6],[`--mantine-color-${t}-7`]:e.colors[r][7],[`--mantine-color-${t}-8`]:e.colors[r][8],[`--mantine-color-${t}-9`]:e.colors[r][9],...i}:i}function w(e,r,o){(0,c.X)(r).forEach(t=>Object.assign(e,{[`--mantine-${o}-${t}`]:r[t]}))}let x=e=>{let r=(0,$.j)(e,"light"),o=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:(0,m.h)(e.defaultRadius),t={variables:{"--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-color-scheme":"light dark","--mantine-webkit-font-smoothing":e.fontSmoothing?"antialiased":"unset","--mantine-moz-font-smoothing":e.fontSmoothing?"grayscale":"unset","--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-heading-text-wrap":e.headings.textWrap,"--mantine-radius-default":o,"--mantine-primary-color-filled":`var(--mantine-color-${e.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${e.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${e.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${e.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${e.primaryColor}-light-color)`},light:{"--mantine-primary-color-contrast":p(e,"light"),"--mantine-color-bright":"var(--mantine-color-black)","--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":"var(--mantine-color-red-6)","--mantine-color-placeholder":"var(--mantine-color-gray-5)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-${r})`,"--mantine-color-default":"var(--mantine-color-white)","--mantine-color-default-hover":"var(--mantine-color-gray-0)","--mantine-color-default-color":"var(--mantine-color-black)","--mantine-color-default-border":"var(--mantine-color-gray-4)","--mantine-color-dimmed":"var(--mantine-color-gray-6)"},dark:{"--mantine-primary-color-contrast":p(e,"dark"),"--mantine-color-bright":"var(--mantine-color-white)","--mantine-color-text":"var(--mantine-color-dark-0)","--mantine-color-body":"var(--mantine-color-dark-7)","--mantine-color-error":"var(--mantine-color-red-8)","--mantine-color-placeholder":"var(--mantine-color-dark-3)","--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-4)`,"--mantine-color-default":"var(--mantine-color-dark-6)","--mantine-color-default-hover":"var(--mantine-color-dark-5)","--mantine-color-default-color":"var(--mantine-color-white)","--mantine-color-default-border":"var(--mantine-color-dark-4)","--mantine-color-dimmed":"var(--mantine-color-dark-2)"}};w(t.variables,e.breakpoints,"breakpoint"),w(t.variables,e.spacing,"spacing"),w(t.variables,e.fontSizes,"font-size"),w(t.variables,e.lineHeights,"line-height"),w(t.variables,e.shadows,"shadow"),w(t.variables,e.radius,"radius"),e.colors[e.primaryColor].forEach((r,o)=>{t.variables[`--mantine-primary-color-${o}`]=`var(--mantine-color-${e.primaryColor}-${o})`}),(0,c.X)(e.colors).forEach(r=>{let o=e.colors[r];if(o&&"object"==typeof o&&"mantine-virtual-color"in o){Object.assign(t.light,k({theme:e,name:o.name,color:o.light,colorScheme:"light",withColorValues:!0})),Object.assign(t.dark,k({theme:e,name:o.name,color:o.dark,colorScheme:"dark",withColorValues:!0}));return}o.forEach((e,o)=>{t.variables[`--mantine-color-${r}-${o}`]=e}),Object.assign(t.light,k({theme:e,color:r,colorScheme:"light",withColorValues:!1})),Object.assign(t.dark,k({theme:e,color:r,colorScheme:"dark",withColorValues:!1}))});let n=e.headings.sizes;return(0,c.X)(n).forEach(r=>{t.variables[`--mantine-${r}-font-size`]=n[r].fontSize,t.variables[`--mantine-${r}-line-height`]=n[r].lineHeight,t.variables[`--mantine-${r}-font-weight`]=n[r].fontWeight||e.headings.fontWeight}),t};var S=o(6762);let C=x(S.t);function M({cssVariablesSelector:e,deduplicateCssVariables:r}){let o=(0,u.rZ)(),n=(0,l.R7)(),a=function({theme:e,generator:r}){let o=x(e),t=r?.(e);return t?(0,g.R)(o,t):o}({theme:o,generator:(0,l.Sm)()}),i=":root"===e&&r,s=function(e,r){let o=f(e.variables),t=o?b(r,o):"",n=f(e.dark),a=f(e.light),i=n?":host"===r?b(`${r}([data-mantine-color-scheme="dark"])`,n):b(`${r}[data-mantine-color-scheme="dark"]`,n):"",l=a?":host"===r?b(`${r}([data-mantine-color-scheme="light"])`,a):b(`${r}[data-mantine-color-scheme="light"]`,a):"";return`${t}${i}${l}`}(i?function(e){let r={variables:{},light:{},dark:{}};return(0,c.X)(e.variables).forEach(o=>{C.variables[o]!==e.variables[o]&&(r.variables[o]=e.variables[o])}),(0,c.X)(e.light).forEach(o=>{C.light[o]!==e.light[o]&&(r.light[o]=e.light[o])}),(0,c.X)(e.dark).forEach(o=>{C.dark[o]!==e.dark[o]&&(r.dark[o]=e.dark[o])}),r}(a):a,e);return s?(0,t.jsx)("style",{"data-mantine-styles":!0,nonce:n?.(),dangerouslySetInnerHTML:{__html:`${s}${i?"":`
  ${e}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${e}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`}`}}):null}M.displayName="@mantine/CssVariables";var j=o(464);function E(e,r){let o="auto"!==e?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";r()?.setAttribute("data-mantine-color-scheme",o)}function N({theme:e,children:r,getStyleNonce:o,withStaticClasses:n=!0,withGlobalClasses:a=!0,deduplicateCssVariables:c=!0,withCssVariables:s=!0,cssVariablesSelector:m=":root",classNamesPrefix:f="mantine",colorSchemeManager:b=function({key:e="mantine-color-scheme-value"}={}){let r;return{get:r=>{if("undefined"==typeof window)return r;try{let o=window.localStorage.getItem(e);return i(o)?o:r}catch{return r}},set:r=>{try{window.localStorage.setItem(e,r)}catch(e){console.warn("[@mantine/core] Local storage color scheme manager was unable to save color scheme.",e)}},subscribe:o=>{r=r=>{r.storageArea===window.localStorage&&r.key===e&&i(r.newValue)&&o(r.newValue)},window.addEventListener("storage",r)},unsubscribe:()=>{window.removeEventListener("storage",r)},clear:()=>{window.localStorage.removeItem(e)}}}(),defaultColorScheme:g="light",getRootElement:$=()=>document.documentElement,cssVariablesResolver:v,forceColorScheme:p,stylesTransform:y}){let{colorScheme:k,setColorScheme:w,clearColorScheme:x}=function({manager:e,defaultColorScheme:r,getRootElement:o,forceColorScheme:t}){let n=(0,d.useRef)(),[a,i]=(0,d.useState)(()=>e.get(r)),l=t||a,c=(0,d.useCallback)(r=>{t||(E(r,o),i(r),e.set(r))},[e.set,l,t]),s=(0,d.useCallback)(()=>{i(r),E(r,o),e.clear()},[e.clear,r]);return(0,d.useEffect)(()=>(e.subscribe(c),e.unsubscribe),[e.subscribe,e.unsubscribe]),(0,j.Y)(()=>{E(e.get(r),o)},[]),(0,d.useEffect)(()=>{if(t)return E(t,o),()=>{};void 0===t&&E(a,o),n.current=window.matchMedia("(prefers-color-scheme: dark)");let e=e=>{"auto"===a&&E(e.matches?"dark":"light",o)};return n.current?.addEventListener("change",e),()=>n.current?.removeEventListener("change",e)},[a,t]),{colorScheme:l,setColorScheme:c,clearColorScheme:s}}({defaultColorScheme:g,forceColorScheme:p,manager:b,getRootElement:$});return!function({respectReducedMotion:e,getRootElement:r}){(0,j.Y)(()=>{e&&r()?.setAttribute("data-respect-reduced-motion","true")},[e])}({respectReducedMotion:e?.respectReducedMotion||!1,getRootElement:$}),(0,t.jsx)(l.XD.Provider,{value:{colorScheme:k,setColorScheme:w,clearColorScheme:x,getRootElement:$,classNamesPrefix:f,getStyleNonce:o,cssVariablesResolver:v,cssVariablesSelector:m,withStaticClasses:n,stylesTransform:y},children:(0,t.jsxs)(u.M2,{theme:e,children:[s&&(0,t.jsx)(M,{cssVariablesSelector:m,deduplicateCssVariables:c}),a&&(0,t.jsx)(h,{}),r]})})}!function(){let e=console.error;console.error=(...r)=>{r.length>1&&"string"==typeof r[0]&&r[0].toLowerCase().includes("extra attributes from the server")&&"string"==typeof r[1]&&r[1].toLowerCase().includes("data-mantine-color-scheme")||e(...r)}}(),N.displayName="@mantine/core/MantineProvider",o(9033);let F={...S.t,fontFamily:"Roboto",breakpoints:{xs:"427px",sm:"769px",md:"1025px",lg:"1441px",xl:"2561px"},colors:{"primary-blue":["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],"primary-gray":["#e5e5e5","#f2f2f2","#cccccc","#b2b2b2","#999999","#808080","#737373","#595959","#333333","#0c0c0c"],...S.t.colors}};function T(e){let{Component:r,pageProps:o}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("head",{children:(0,t.jsx)(a,{})}),(0,t.jsx)("body",{children:(0,t.jsx)(N,{theme:F,children:(0,t.jsx)(r,{...o})})})]})}},9033:function(){},1784:function(){},2145:function(e,r,o){"use strict";o.d(r,{DE:function(){return m},Nu:function(){return s},R7:function(){return c},Sm:function(){return i},XD:function(){return n},dv:function(){return d},sZ:function(){return u},uK:function(){return l}});var t=o(7294);let n=(0,t.createContext)(null);function a(){let e=(0,t.useContext)(n);if(!e)throw Error("[@mantine/core] MantineProvider was not found in tree");return e}function i(){return a().cssVariablesResolver}function l(){return a().classNamesPrefix}function c(){return a().getStyleNonce}function s(){return a().withStaticClasses}function m(){return a().headless}function d(){return a().stylesTransform?.sx}function u(){return a().stylesTransform?.styles}},5984:function(e,r,o){"use strict";o.d(r,{M2:function(){return u},rZ:function(){return d}});var t=o(5893),n=o(7294),a=o(6762),i=o(3643);function l(e){return!(e<0)&&!(e>9)&&parseInt(e.toString(),10)===e}function c(e){if(!(e.primaryColor in e.colors))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color");if("object"==typeof e.primaryShade&&(!l(e.primaryShade.dark)||!l(e.primaryShade.light))||"number"==typeof e.primaryShade&&!l(e.primaryShade))throw Error("[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }")}let s=(0,n.createContext)(null),m=()=>(0,n.useContext)(s)||a.t;function d(){let e=(0,n.useContext)(s);if(!e)throw Error("@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app");return e}function u({theme:e,children:r,inherit:o=!0}){let l=m(),d=(0,n.useMemo)(()=>(function(e,r){if(!r)return c(e),e;let o=(0,i.R)(e,r);return r.fontFamily&&!r.headings?.fontFamily&&(o.headings.fontFamily=r.fontFamily),c(o),o})(o?l:a.t,e),[e,l,o]);return(0,t.jsx)(s.Provider,{value:d,children:r})}u.displayName="@mantine/core/MantineThemeProvider"},5565:function(e,r,o){"use strict";o.d(r,{u:function(){return n}});var t=o(2979);function n(e,r){let o={from:e?.from||r.defaultGradient.from,to:e?.to||r.defaultGradient.to,deg:e?.deg||r.defaultGradient.deg||0},n=(0,t.p)(o.from,r),a=(0,t.p)(o.to,r);return`linear-gradient(${o.deg}deg, ${n} 0%, ${a} 100%)`}},7052:function(e,r,o){"use strict";function t(e,r){return"number"==typeof e.primaryShade?e.primaryShade:"dark"===r?e.primaryShade.dark:e.primaryShade.light}o.d(r,{j:function(){return t}})},2979:function(e,r,o){"use strict";o.d(r,{p:function(){return n}});var t=o(6167);function n(e,r){let o=(0,t.E)({color:e||r.primaryColor,theme:r});return o.variable?`var(${o.variable})`:e}},6167:function(e,r,o){"use strict";o.d(r,{E:function(){return l}});var t=o(7052),n=o(7864);function a(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function i(e,r=.179){return!e.startsWith("var(")&&function(e){if(e.startsWith("oklch("))return(function(e){let r=e.match(/oklch\((.*?)%\s/);return r?parseFloat(r[1]):null}(e)||0)/100;let{r,g:o,b:t}=(0,n.c)(e);return .2126*a(r/255)+.7152*a(o/255)+.0722*a(t/255)}(e)>r}function l({color:e,theme:r,colorScheme:o}){if("string"!=typeof e)throw Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);if("bright"===e)return{color:e,value:"dark"===o?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:i("dark"===o?r.white:r.black,r.luminanceThreshold),variable:"--mantine-color-bright"};if("dimmed"===e)return{color:e,value:"dark"===o?r.colors.dark[2]:r.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:i("dark"===o?r.colors.dark[2]:r.colors.gray[6],r.luminanceThreshold),variable:"--mantine-color-dimmed"};if("white"===e||"black"===e)return{color:e,value:"white"===e?r.white:r.black,shade:void 0,isThemeColor:!1,isLight:i("white"===e?r.white:r.black,r.luminanceThreshold),variable:`--mantine-color-${e}`};let[n,a]=e.split("."),l=a?Number(a):void 0,c=n in r.colors;if(c){let e=void 0!==l?r.colors[n][l]:r.colors[n][(0,t.j)(r,o||"light")];return{color:n,value:e,shade:l,isThemeColor:c,isLight:i(e,r.luminanceThreshold),variable:a?`--mantine-color-${n}-${l}`:`--mantine-color-${n}-filled`}}return{color:e,value:e,isThemeColor:c,isLight:i(e,r.luminanceThreshold),shade:l,variable:void 0}}},7187:function(e,r,o){"use strict";o.d(r,{F:function(){return a},m:function(){return n}});var t=o(7864);function n(e,r){if("string"!=typeof e||r>1||r<0)return"rgba(0, 0, 0, 1)";if(e.startsWith("var("))return`color-mix(in srgb, ${e}, transparent ${(1-r)*100}%)`;if(e.startsWith("oklch"))return e.includes("/")?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${r})`):e.replace(")",` / ${r})`);let{r:o,g:n,b:a}=(0,t.c)(e);return`rgba(${o}, ${n}, ${a}, ${r})`}let a=n},7864:function(e,r,o){"use strict";function t(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)?function(e){let r=e.replace("#","");if(3===r.length){let e=r.split("");r=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}if(8===r.length){let e=parseInt(r.slice(6,8),16)/255;return{r:parseInt(r.slice(0,2),16),g:parseInt(r.slice(2,4),16),b:parseInt(r.slice(4,6),16),a:e}}let o=parseInt(r,16);return{r:o>>16&255,g:o>>8&255,b:255&o,a:1}}(e):e.startsWith("rgb")?function(e){let[r,o,t,n]=e.replace(/[^0-9,./]/g,"").split(/[/,]/).map(Number);return{r,g:o,b:t,a:n||1}}(e):e.startsWith("hsl")?function(e){let r,o,t;let n=e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!n)return{r:0,g:0,b:0,a:1};let a=parseInt(n[1],10),i=parseInt(n[2],10)/100,l=parseInt(n[3],10)/100,c=n[5]?parseFloat(n[5]):void 0,s=(1-Math.abs(2*l-1))*i,m=a/60,d=s*(1-Math.abs(m%2-1)),u=l-s/2;return m>=0&&m<1?(r=s,o=d,t=0):m>=1&&m<2?(r=d,o=s,t=0):m>=2&&m<3?(r=0,o=s,t=d):m>=3&&m<4?(r=0,o=d,t=s):m>=4&&m<5?(r=d,o=0,t=s):(r=s,o=0,t=d),{r:Math.round((r+u)*255),g:Math.round((o+u)*255),b:Math.round((t+u)*255),a:c||1}}(e):{r:0,g:0,b:0,a:1}}o.d(r,{c:function(){return t}})},6762:function(e,r,o){"use strict";o.d(r,{t:function(){return m}});var t=o(8565);o(7294),o(5893);var n=o(7864);function a(e,r){if(e.startsWith("var("))return`color-mix(in srgb, ${e}, black ${100*r}%)`;let{r:o,g:t,b:a,a:i}=(0,n.c)(e),l=1-r,c=e=>Math.round(e*l);return`rgba(${c(o)}, ${c(t)}, ${c(a)}, ${i})`}var i=o(5565),l=o(6167),c=o(7187);let s="-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",m={scale:1,fontSmoothing:!0,focusRing:"auto",white:"#fff",black:"#000",colors:{dark:["#C9C9C9","#b8b8b8","#828282","#696969","#424242","#3b3b3b","#2e2e2e","#242424","#1f1f1f","#141414"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},primaryShade:{light:6,dark:8},primaryColor:"blue",variantColorResolver:({color:e,theme:r,variant:o,gradient:n,autoContrast:s})=>{let m=(0,l.E)({color:e,theme:r}),d="boolean"==typeof s?s:r.autoContrast;if("filled"===o){let r=d&&m.isLight?"var(--mantine-color-black)":"var(--mantine-color-white)";return m.isThemeColor?void 0===m.shade?{background:`var(--mantine-color-${e}-filled)`,hover:`var(--mantine-color-${e}-filled-hover)`,color:r,border:`${(0,t.h)(1)} solid transparent`}:{background:`var(--mantine-color-${m.color}-${m.shade})`,hover:`var(--mantine-color-${m.color}-${9===m.shade?8:m.shade+1})`,color:r,border:`${(0,t.h)(1)} solid transparent`}:{background:e,hover:a(e,.1),color:r,border:`${(0,t.h)(1)} solid transparent`}}if("light"===o){if(m.isThemeColor){if(void 0===m.shade)return{background:`var(--mantine-color-${e}-light)`,hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${(0,t.h)(1)} solid transparent`};let o=r.colors[m.color][m.shade];return{background:(0,c.m)(o,.1),hover:(0,c.m)(o,.12),color:`var(--mantine-color-${m.color}-${Math.min(m.shade,6)})`,border:`${(0,t.h)(1)} solid transparent`}}return{background:(0,c.m)(e,.1),hover:(0,c.m)(e,.12),color:e,border:`${(0,t.h)(1)} solid transparent`}}if("outline"===o)return m.isThemeColor?void 0===m.shade?{background:"transparent",hover:`var(--mantine-color-${e}-outline-hover)`,color:`var(--mantine-color-${e}-outline)`,border:`${(0,t.h)(1)} solid var(--mantine-color-${e}-outline)`}:{background:"transparent",hover:(0,c.m)(r.colors[m.color][m.shade],.05),color:`var(--mantine-color-${m.color}-${m.shade})`,border:`${(0,t.h)(1)} solid var(--mantine-color-${m.color}-${m.shade})`}:{background:"transparent",hover:(0,c.m)(e,.05),color:e,border:`${(0,t.h)(1)} solid ${e}`};if("subtle"===o){if(m.isThemeColor){if(void 0===m.shade)return{background:"transparent",hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${(0,t.h)(1)} solid transparent`};let o=r.colors[m.color][m.shade];return{background:"transparent",hover:(0,c.m)(o,.12),color:`var(--mantine-color-${m.color}-${Math.min(m.shade,6)})`,border:`${(0,t.h)(1)} solid transparent`}}return{background:"transparent",hover:(0,c.m)(e,.12),color:e,border:`${(0,t.h)(1)} solid transparent`}}return"transparent"===o?m.isThemeColor?void 0===m.shade?{background:"transparent",hover:"transparent",color:`var(--mantine-color-${e}-light-color)`,border:`${(0,t.h)(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:`var(--mantine-color-${m.color}-${Math.min(m.shade,6)})`,border:`${(0,t.h)(1)} solid transparent`}:{background:"transparent",hover:"transparent",color:e,border:`${(0,t.h)(1)} solid transparent`}:"white"===o?m.isThemeColor?void 0===m.shade?{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:`var(--mantine-color-${e}-filled)`,border:`${(0,t.h)(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:`var(--mantine-color-${m.color}-${m.shade})`,border:`${(0,t.h)(1)} solid transparent`}:{background:"var(--mantine-color-white)",hover:a(r.white,.01),color:e,border:`${(0,t.h)(1)} solid transparent`}:"gradient"===o?{background:(0,i.u)(n,r),hover:(0,i.u)(n,r),color:"var(--mantine-color-white)",border:"none"}:"default"===o?{background:"var(--mantine-color-default)",hover:"var(--mantine-color-default-hover)",color:"var(--mantine-color-default-color)",border:`${(0,t.h)(1)} solid var(--mantine-color-default-border)`}:{}},autoContrast:!1,luminanceThreshold:.3,fontFamily:s,fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",respectReducedMotion:!1,cursorType:"default",defaultGradient:{from:"blue",to:"cyan",deg:45},defaultRadius:"sm",activeClassName:"mantine-active",focusClassName:"",headings:{fontFamily:s,fontWeight:"700",textWrap:"wrap",sizes:{h1:{fontSize:(0,t.h)(34),lineHeight:"1.3"},h2:{fontSize:(0,t.h)(26),lineHeight:"1.35"},h3:{fontSize:(0,t.h)(22),lineHeight:"1.4"},h4:{fontSize:(0,t.h)(18),lineHeight:"1.45"},h5:{fontSize:(0,t.h)(16),lineHeight:"1.5"},h6:{fontSize:(0,t.h)(14),lineHeight:"1.5"}}},fontSizes:{xs:(0,t.h)(12),sm:(0,t.h)(14),md:(0,t.h)(16),lg:(0,t.h)(18),xl:(0,t.h)(20)},lineHeights:{xs:"1.4",sm:"1.45",md:"1.55",lg:"1.6",xl:"1.65"},radius:{xs:(0,t.h)(2),sm:(0,t.h)(4),md:(0,t.h)(8),lg:(0,t.h)(16),xl:(0,t.h)(32)},spacing:{xs:(0,t.h)(10),sm:(0,t.h)(12),md:(0,t.h)(16),lg:(0,t.h)(20),xl:(0,t.h)(32)},breakpoints:{xs:"36em",sm:"48em",md:"62em",lg:"75em",xl:"88em"},shadows:{xs:`0 ${(0,t.h)(1)} ${(0,t.h)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,t.h)(1)} ${(0,t.h)(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${(0,t.h)(1)} ${(0,t.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,t.h)(10)} ${(0,t.h)(15)} ${(0,t.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,t.h)(7)} ${(0,t.h)(7)} ${(0,t.h)(-5)}`,md:`0 ${(0,t.h)(1)} ${(0,t.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,t.h)(20)} ${(0,t.h)(25)} ${(0,t.h)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,t.h)(10)} ${(0,t.h)(10)} ${(0,t.h)(-5)}`,lg:`0 ${(0,t.h)(1)} ${(0,t.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,t.h)(28)} ${(0,t.h)(23)} ${(0,t.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,t.h)(12)} ${(0,t.h)(12)} ${(0,t.h)(-7)}`,xl:`0 ${(0,t.h)(1)} ${(0,t.h)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,t.h)(36)} ${(0,t.h)(28)} ${(0,t.h)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,t.h)(17)} ${(0,t.h)(17)} ${(0,t.h)(-7)}`},other:{},components:{}}},3643:function(e,r,o){"use strict";function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}o.d(r,{R:function(){return function e(r,o){let n={...r};return t(r)&&t(o)&&Object.keys(o).forEach(a=>{t(o[a])&&a in r?n[a]=e(n[a],o[a]):n[a]=o[a]}),n}}})},3877:function(e,r,o){"use strict";function t(e){return Object.keys(e)}o.d(r,{X:function(){return t}})},5541:function(e,r,o){"use strict";function t(e){let r="string"==typeof e&&e.includes("var(--mantine-scale)")?e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim():e;return"number"==typeof r?r:"string"==typeof r?r.includes("calc")||r.includes("var")?r:r.includes("px")?Number(r.replace("px","")):r.includes("rem")?16*Number(r.replace("rem","")):r.includes("em")?16*Number(r.replace("em","")):Number(r):NaN}o.d(r,{px:function(){return t}})},8565:function(e,r,o){"use strict";function t(e){return"0rem"===e?"0rem":`calc(${e} * var(--mantine-scale))`}function n(e,{shouldScale:r=!1}={}){return function o(n){if(0===n||"0"===n)return`0${e}`;if("number"==typeof n){let o=`${n/16}${e}`;return r?t(o):o}if("string"==typeof n){if(""===n||n.startsWith("calc(")||n.startsWith("clamp(")||n.includes("rgba("))return n;if(n.includes(","))return n.split(",").map(e=>o(e)).join(",");if(n.includes(" "))return n.split(" ").map(e=>o(e)).join(" ");if(n.includes(e))return r?t(n):n;let a=n.replace("px","");if(!Number.isNaN(Number(a))){let o=`${Number(a)/16}${e}`;return r?t(o):o}}return n}}o.d(r,{em:function(){return i},h:function(){return a}});let a=n("rem",{shouldScale:!0}),i=n("em")},464:function(e,r,o){"use strict";o.d(r,{Y:function(){return n}});var t=o(7294);let n="undefined"!=typeof document?t.useLayoutEffect:t.useEffect}},function(e){var r=function(r){return e(e.s=r)};e.O(0,[774,179],function(){return r(6840),r(9090)}),_N_E=e.O()}]);