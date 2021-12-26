(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2208],{17193:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gradient-color-stops",function(){return c(60284)}])},60284:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return v}}),c(67294);var d=c(3905);c(41664);var e,f=c(5679),g=c(83434),h=c(72308),i=c(63469),j=c(74296),k=c(33432),l=c(40230),m=c(49852),n=c(22649),o=c(29549),p=c(55390),q=i.L,r={utilities:k.Z,preview:function(a){var b,c=[a["--tw-gradient-from"],a["--tw-gradient-to"],a["--tw-gradient-stops"]].filter(function(a){return void 0!==a})[0];return(0,d.kt)("td",{className:"transparent"===c?"bg-checkered":void 0,style:{backgroundColor:null===(b=null==c?void 0:c.match(/(#[a-f0-9]+|currentColor)/i))|| void 0===b?void 0:b[0]}},(0,d.kt)("div",{className:"w-24"}))}},s=(e="Heading",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),t={Layout:q,classes:r,meta:{title:"Gradient Color Stops",description:"Utilities for controlling the color stops in background gradients."},slug:"gradient-color-stops",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Starting color",slug:"starting-color",children:[]},{title:"Ending color",slug:"ending-color",children:[]},{title:"Middle color",slug:"middle-color",children:[]},{title:"Fading to transparent",slug:"fading-to-transparent",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},u=j.X_;function v(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(u,Object.assign({},t,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(f.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.kt)(f.X,{level:3,id:"starting-color",nextElement:{type:"paragraph"}},"Starting color"),(0,d.kt)("p",null,"Set the starting color of a gradient using the ",(0,d.kt)("inlineCode",{parentName:"p"},"from-{color}")," utilities."),(0,d.kt)(g.e,{containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"space-y-2 mx-5\">\n    <div class=\"flex justify-between\">\n      <div class=\"flex flex-col space-y-2 items-center -translate-x-5\">\n        <div class=\"rounded-full h-10 w-10 bg-indigo-500 border-4 border-white shadow-lg\"></div>\n        <div class=\"bg-gray-300 w-0.5 h-4\"></div>\n      </div>\n    </div>\n    <div class=\"p-4 rounded-lg bg-gradient-to-r from-indigo-500\">&nbsp;</div>\n  </div>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-gradient-to-r ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"from-indigo-500")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)(f.X,{level:3,id:"ending-color",nextElement:{type:"paragraph"}},"Ending color"),(0,d.kt)("p",null,"Set the ending color of a gradient using the ",(0,d.kt)("inlineCode",{parentName:"p"},"to-{color}")," utilities."),(0,d.kt)(g.e,{containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"space-y-2 mx-5\">\n    <div class=\"flex justify-between\">\n      <div class=\"flex flex-col space-y-2 items-center -translate-x-5\">\n        <div class=\"rounded-full h-10 w-10 bg-cyan-500 border-4 border-white shadow-lg\"></div>\n        <div class=\"bg-gray-300 w-0.5 h-4\"></div>\n      </div>\n      <div class=\"flex flex-col space-y-2 items-center translate-x-5\">\n        <div class=\"rounded-full h-10 w-10 bg-blue-500 border-4 border-white shadow-lg\"></div>\n        <div class=\"bg-gray-300 w-0.5 h-4\"></div>\n      </div>\n    </div>\n    <div class=\"p-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500\">&nbsp;</div>\n  </div>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-gradient-to-r from-cyan-500 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"to-blue-500")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Gradients to ",(0,d.kt)("strong",{parentName:"p"},"do not")," fade in from transparent by default. To fade in from transparent, reverse the gradient direction and use a ",(0,d.kt)("inlineCode",{parentName:"p"},"from-{color}")," utility."),(0,d.kt)(f.X,{level:3,id:"middle-color",nextElement:{type:"paragraph"}},"Middle color"),(0,d.kt)("p",null,"Add a middle color to a gradient using the ",(0,d.kt)("inlineCode",{parentName:"p"},"via-{color}")," utilities."),(0,d.kt)(g.e,{containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"space-y-2 mx-5\">\n    <div class=\"flex justify-between\">\n      <div class=\"flex flex-col space-y-2 items-center -translate-x-5\">\n        <div class=\"rounded-full h-10 w-10 bg-indigo-500 border-4 border-white shadow-lg\"></div>\n        <div class=\"bg-gray-300 w-0.5 h-4\"></div>\n      </div>\n      <div class=\"flex flex-col space-y-2 items-center\">\n        <div class=\"rounded-full h-10 w-10 bg-purple-500 border-4 border-white shadow-lg\"></div>\n        <div class=\"bg-gray-300 w-0.5 h-4\"></div>\n      </div>\n      <div class=\"flex flex-col space-y-2 items-center translate-x-5\">\n        <div class=\"rounded-full h-10 w-10 bg-pink-500 border-4 border-white shadow-lg\"></div>\n        <div class=\"bg-gray-300 w-0.5 h-4\"></div>\n      </div>\n    </div>\n    <div class=\"p-4 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500\">&nbsp;</div>\n  </div>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-gradient-to-r from-indigo-500 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"via-purple-500")," to-pink-500 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Gradients with a ",(0,d.kt)("inlineCode",{parentName:"p"},"from-{color}")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"via-{color}")," will fade out to transparent by default if no ",(0,d.kt)("inlineCode",{parentName:"p"},"to-{color}")," is present."),(0,d.kt)(f.X,{level:3,id:"fading-to-transparent",nextElement:{type:"paragraph"}},"Fading to transparent"),(0,d.kt)("p",null,"Gradients fade out to transparent by default, without requiring you to add ",(0,d.kt)("inlineCode",{parentName:"p"},"to-transparent")," explicitly. Tailwind intelligently calculates the ",(0,d.kt)("em",{parentName:"p"},"right")," “transparent” value to use based on the starting color to avoid ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://bugs.webkit.org/show_bug.cgi?id=150940"}),"a bug in Safari")," that causes fading to simply the ",(0,d.kt)("inlineCode",{parentName:"p"},"transparent")," keyword to fade through gray, which just looks awful."),(0,d.kt)(p.qm,{mdxType:"TipBad"},"Don't add `to-transparent` explicitly"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-gradient-to-r from-blue-500 to-transparent",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)(p.Vw,{mdxType:"TipGood"},"Only specify a from color and fade to transparent automatically"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-gradient-to-r from-blue-500",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("hr",null),(0,d.kt)(s,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.kt)(s,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.kt)(o.k,{featuredClass:"from-pink-500",mdxType:"HoverFocusAndOtherStates"},(0,d.kt)(h.X,{preview:"\n  <div class=\"flex justify-center\">\n    <button type=\"button\" class=\"bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md\">\n      Hover me\n    </button>\n  </div>\n",src:void 0,snippet:"<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>button</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>button<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>bg-gradient-to-r from-green-400 to-blue-500 <span class=\"code-highlight bg-code-highlight\">hover:from-pink-500 hover:to-yellow-500</span> ...<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  Hover me\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>button</span><span class=\"token punctuation\">></span></span>",previewClassName:void 0,color:void 0,min:!1})),(0,d.kt)(s,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.kt)(m.p,{defaultClass:"bg-gradient-to-r from-purple-400",featuredClass:"from-yellow-500",mdxType:"BreakpointsAndMediaQueries"}),(0,d.kt)("hr",null),(0,d.kt)(f.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,d.kt)(f.X,{level:3,id:"customizing-your-theme",nextElement:{type:"jsx"}},"Customizing your theme"),(0,d.kt)(n.h,{name:"gradient",configKey:"gradientColorStops",mdxType:"CustomizePluginColors"}),(0,d.kt)(f.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,d.kt)(l.k,{property:"from|via|to-{color}",featuredClass:"from-[#243c5a]",mdxType:"ArbitraryValues"}))}v.isMDXComponent=!0,v.layoutProps=t},72308:function(a,b,c){"use strict";c.d(b,{X:function(){return l}});var d=c(85893),e=c(67294),f=c(86010);function g(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}c(20409);var h={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function j(a){var b=(0,e.useRef)(),c=(0,e.useState)(!1),f=c[0],h=c[1],i=(0,e.useState)({}),j=i[0],k=i[1];return(0,e.useEffect)(function(){var a=function(){k({height:b.current.contentDocument.body.scrollHeight})};if(f){var c=new window.ResizeObserver(a);return a(),c.observe(b.current.contentDocument.body),function(){c.disconnect()}}},[f]),(0,d.jsx)("iframe",function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){g(a,b,c[b])})}return a}({},a,{ref:b,onLoad:function(){return h(!0)},style:j}))}function k(a){var b=a.color,c=a.snippet;return(0,d.jsx)("div",{className:(0,f.Z)("overflow-hidden rounded-b-xl",h[b],{"bg-gray-800":!h[b]}),children:(0,d.jsx)("pre",{className:(0,f.Z)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-gray-50",{"bg-black bg-opacity-75":h[b]}),children:(0,d.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:c}})})})}function l(a){var b=a.preview,c=a.src,e=a.snippet,g=a.previewClassName,h=a.color,l=void 0===h?"gray":h;return(0,d.jsxs)("div",{className:"not-prose relative overflow-hidden mb-8",children:[b?(0,d.jsx)("div",{className:(0,f.Z)("rounded-t-xl overflow-hidden",i[l],g,{"p-10":!g}),dangerouslySetInnerHTML:{__html:b}}):(0,d.jsx)(j,{src:c,className:(0,f.Z)("w-full rounded-t-xl",i[l])}),(0,d.jsx)(k,{color:l,snippet:e})]})}},55390:function(a,b,c){"use strict";c.d(b,{Vw:function(){return e},qm:function(){return f},"$o":function(){return g}});var d=c(85893);function e(a){var b=a.children;return(0,d.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,d.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-cyan-500 text-white flex items-center justify-center ring-2 ring-cyan-500 dark:bg-sky-500 dark:ring-sky-500",children:[(0,d.jsx)("svg",{width:"6",height:"4.5",className:"overflow-visible","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M6 0L2 4.5L0 2.5",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-cyan-500/30 rounded-full dark:bg-sky-400/30"})]}),(0,d.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-gray-900 dark:text-gray-200",children:b})]})}function f(a){var b=a.children;return(0,d.jsxs)("div",{className:"flex items-start my-6 space-x-4",children:[(0,d.jsxs)("div",{className:"relative mt-1 w-4 h-4 rounded-full bg-rose-400 text-white flex items-center justify-center ring-2 ring-rose-400 dark:bg-red-400 dark:ring-red-400",children:[(0,d.jsx)("svg",{width:"6",height:"6",className:"overflow-visible","aria-hidden":"true",children:(0,d.jsx)("path",{d:"M0 0L6 6M6 0L0 6",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("div",{className:"absolute top-full mt-1 left-[0.46875rem] w-px h-[1.375rem] bg-rose-200 rounded-full dark:bg-red-200/25"})]}),(0,d.jsx)("p",{className:"m-0 flex-1 text-base font-semibold text-gray-900 dark:text-gray-200",children:b})]})}function g(a){var b=a.children;return(0,d.jsxs)("div",{className:"not-prose mt-6 -mb-1 flex space-x-2",children:[(0,d.jsx)("svg",{className:"flex-none w-5 h-5 text-gray-400 dark:text-gray-600",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,d.jsx)("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",clipRule:"evenodd"})}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium dark:text-gray-200",children:b})]})}}},function(a){a.O(0,[3430,6401,4756,3432,6852,3469,2474,8109,3740,9774,2888,179],function(){return a(a.s=17193)}),_N_E=a.O()}])