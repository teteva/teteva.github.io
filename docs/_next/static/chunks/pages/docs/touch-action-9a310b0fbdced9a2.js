(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1218],{60663:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/touch-action",function(){return c(56627)}])},56627:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return p}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(83434),g=c(53339),h=c(74296);c(15583);var i,j=c(70230),k=c(34782),l=g.L,m=(i="Heading",function(a){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),n={Layout:l,classes:{utilities:{".touch-auto":{"touch-action":"auto"},".touch-none":{"touch-action":"none"},".touch-pan-x":{"touch-action":"pan-x"},".touch-pan-left":{"touch-action":"pan-left"},".touch-pan-right":{"touch-action":"pan-right"},".touch-pan-y":{"touch-action":"pan-y"},".touch-pan-up":{"touch-action":"pan-up"},".touch-pan-down":{"touch-action":"pan-down"},".touch-pinch-zoom":{"touch-action":"pinch-zoom"},".touch-manipulation":{"touch-action":"manipulation"}}},meta:{title:"Touch Action",description:"Utilities for controlling how an element can be scrolled and zoomed on touchscreens."},slug:"touch-action",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the touch action",slug:"setting-the-touch-action",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]}]},o=h.X_;function p(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(o,Object.assign({},n,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(e.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.kt)(e.X,{level:3,id:"setting-the-touch-action",nextElement:{type:"paragraph"}},"Setting the touch action"),(0,d.kt)("p",null,"Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"touch-{action}")," utilities to control how an element can be scrolled (panned) and zoomed (pinched) on touchscreens."),(0,d.kt)(f.e,{hint:"Try panning these images on a touchscreen",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"grid sm:grid-cols-2 gap-x-6 gap-y-14 font-mono font-bold\">\n    <div class=\"flex flex-col items-center\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">touch-auto</p>\n      <div class=\"grid w-full h-48 overflow-auto touch-auto rounded-lg shadow-lg\">\n        <img class=\"col-span-1 col-start-1 col-end-1 w-[150%] max-w-none\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80\" />\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">touch-none</p>\n      <div class=\"w-full h-48 overflow-auto touch-none rounded-lg shadow-lg\">\n        <img class=\"w-[150%] max-w-none\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80\" />\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">touch-pan-x</p>\n      <div class=\"w-full h-48 overflow-auto touch-pan-x rounded-lg shadow-lg\">\n        <img class=\"w-[150%] max-w-none\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80\" />\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">touch-pan-y</p>\n      <div class=\"w-full h-48 overflow-auto touch-pan-y rounded-lg shadow-lg\">\n        <img class=\"w-[150%] max-w-none\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80\" />\n      </div>\n    </div>\n  </div>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-full h-48 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-auto")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-[150%] max-w-none h-auto",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-full h-48 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-none")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-[150%] max-w-none h-auto",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-full h-48 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-pan-x")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-[150%] max-w-none h-auto",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-full h-48 ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"overflow-auto touch-pan-y")," ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"w-[150%] max-w-none h-auto",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"src"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""))," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("hr",null),(0,d.kt)(m,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.kt)(m,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.kt)(k.k,{featuredClass:"touch-pan-x",variant:"focus",mdxType:"HoverFocusAndOtherStates"}),(0,d.kt)(m,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.kt)(j.p,{featuredClass:"touch-pan-x",mdxType:"BreakpointsAndMediaQueries"}))}p.isMDXComponent=!0,p.layoutProps=n},83434:function(a,b,c){"use strict";c.d(b,{e:function(){return l}});var d=c(85893),e=c(86010),f=c(63212),g=c(67294);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j={none:"",md:"p-8"};function k(a){var b=a.as,c=a.style,f=a.padding,g=a.p,h=a.className,k=a.containerClassName,l=a.html,m=a.children,n=a.hint,o=a.lightOnly,p=void 0!==o&&o,q=null!=f?f:void 0===g?"md":g,r=j[q];if(void 0===r)throw Error("Invalid padding value: ".concat(JSON.stringify(q)));return(0,d.jsxs)("div",{className:k,children:[void 0!==n&&(0,d.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,d.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-gray-400 dark:stroke-gray-300"}),(0,d.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-gray-400 dark:stroke-sky-400"})]}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium dark:text-gray-200",children:n})]}),(0,d.jsxs)(void 0===b?"div":b,{style:c,className:(0,e.Z)("not-prose relative bg-gray-50 rounded-xl overflow-hidden",!p&&"dark:bg-gray-800/25"),children:[(0,d.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,e.Z)("absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!p&&"dark:bg-grid-gray-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,d.jsx)("div",i({className:(0,e.Z)("relative rounded-xl overflow-auto",r,h)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,d.jsx)("div",{className:(0,e.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!p&&"dark:border-white/5")})]})]})}function l(a){return a.resizable?(0,d.jsx)(m,i({},a)):(0,d.jsx)(k,i({},a))}function m(a){var b=(0,g.useRef)(),c=(0,f.c$)(0),e=(0,g.useRef)(),h=(0,g.useRef)();return(0,g.useEffect)(function(){var a=new window.ResizeObserver(function(){c.set(0)});return a.observe(b.current),function(){a.disconnect()}},[]),(0,g.useEffect)(function(){h.current.onselectstart=function(){return!1}},[]),(0,d.jsxs)("div",{ref:b,className:"relative",children:[(0,d.jsx)(k,i({as:f.ww.div,style:{marginRight:(0,f.Hm)(c,function(a){return-a})}},a)),(0,d.jsx)("div",{ref:e,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(f.ww.div,{ref:h,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:e,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:c},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,d.jsx)("div",{className:"w-1.5 h-8 bg-gray-500/60 rounded-full"})})})]})}}},function(a){a.O(0,[3430,6401,4756,6852,4713,2474,9566,9774,2888,179],function(){return a(a.s=60663)}),_N_E=a.O()}])