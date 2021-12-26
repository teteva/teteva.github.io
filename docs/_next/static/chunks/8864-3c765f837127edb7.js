"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8864],{2512:function(a,b){b.Z="/_next/static/media/installation.9713bc44d9403301b053edfbc12e7b1c.jpg"},59533:function(a,b,c){c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:c})]})}},19904:function(a,b,c){c.d(b,{E:function(){return j}});var d=c(85893),e=c(66311),f=c(86010),g=c(67294);function h(a){var b=a.className;return(0,d.jsx)("div",{className:(0,f.Z)("pointer-events-none absolute inset-0",b)})}function i(a){var b=a.children,c=a.selectedIndex,g=a.myIndex,i=a.marker,j=c===g,k={leading:j?null:c===g-1?"capped":"normal",trailing:j?null:c===g+1?"capped":"normal"};return(0,d.jsxs)(e.O,{className:(0,f.Z)("flex items-center relative z-10 overflow-hidden px-4 py-1",j?"text-sky-300":"text-gray-400"),children:[(0,d.jsx)("span",{className:"z-10",children:b}),"close"===i&&(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}),"modified"===i&&(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}),!j&&(0,d.jsx)(h,{className:(0,f.Z)("bg-gray-700/50 border-y border-gray-500/30","capped"===k.leading&&"border-l rounded-tl","capped"===k.trailing&&"border-r rounded-tr")}),"normal"===k.trailing&&(0,d.jsx)(h,{className:"inset-y-px border-r border-gray-200/5 z-20"}),j&&(0,d.jsx)(h,{className:"border-b border-b-sky-300"})]})}function j(a){var b=a.children,c=a.actions,h=(0,g.useState)(0),j=h[0],k=h[1];return(0,d.jsxs)(e.O.Group,{as:"div",onChange:k,className:"not-prose bg-gray-800 rounded-xl shadow-md",children:[(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)(e.O.List,{className:"flex text-gray-400 text-xs leading-6 overflow-hidden rounded-tl-xl pt-2",children:b.map(function(a,b){return(0,d.jsx)(i,{myIndex:b,selectedIndex:j,children:a.props.filename},a.props.filename)})}),(0,d.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,d.jsx)("div",{className:(0,f.Z)("flex-auto flex justify-end bg-gray-700/50 border-y border-gray-500/30 pr-4",j===b.length-1?"rounded-tl border-l":"")})}),c?(0,d.jsx)("div",{className:"absolute top-2 right-4 h-8 flex",children:c({selectedIndex:j})}):null]}),(0,d.jsx)(e.O.Panels,{className:"flex overflow-auto",children:b.map(function(a){return(0,d.jsx)(e.O.Panel,{className:"flex-none min-w-full p-5 text-sm leading-6 text-gray-50 ligatures-none",children:a.props.children},a.props.filename)})})]})}},62223:function(a,b,c){c.d(b,{R:function(){return m}});var d=c(85893),e=c(86010),f=c(67294),g=c(82931),h=c.n(g),i=c(95877),j=c(19904),k=c(59533),l=c(49196);function m(a){var b=a.steps,f=a.code,g=a.level,h="h".concat(void 0===g?2:g);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"hidden sm:block absolute top-0 left-[15%] pt-[40%] 2xl:left-[40%] 2xl:pt-[8%] dark:hidden",children:(0,d.jsx)("img",{src:c(2512).Z,alt:"",className:"w-[52.6875rem] max-w-none"})}),(0,d.jsx)("ol",{className:"relative space-y-2 mb-16",style:{counterReset:"step"},children:b.map(function(a,c){return(0,d.jsxs)("li",{className:(0,e.Z)("relative pl-10 xl:grid grid-cols-5 gap-16 before:content-[counter(step)] before:absolute before:left-0 before:flex before:items-center before:justify-center before:w-[calc(1.375rem+1px)] before:h-[calc(1.375rem+1px)] before:text-[0.625rem] before:font-bold before:text-gray-700 before:rounded-md before:shadow-sm before:ring-1 before:ring-gray-900/5 dark:before:bg-gray-700 dark:before:text-gray-200 dark:before:ring-0 dark:before:shadow-none dark:before:highlight-white/5",c!==b.length-1&&"pb-8 after:absolute after:top-[calc(1.875rem+1px)] after:bottom-0 after:left-[0.6875rem] after:w-px after:bg-gray-200 dark:after:bg-gray-200/5"),style:{counterIncrement:"step"},children:[(0,d.jsxs)("div",{className:"mb-6 col-span-2 xl:mb-0",children:[(0,d.jsx)(h,{className:"text-sm leading-6 text-gray-900 font-semibold mb-2 dark:text-gray-200",children:a.title}),(0,d.jsx)("div",{className:"prose prose-sm dark:prose-dark",children:(0,d.jsx)(a.body,{})})]}),a.code&&(0,d.jsx)(p,{code:a.code,highlightedCode:f[c]})]},a.title)})})]})}function n(a){var b=a.code,c=(0,f.useState)({state:"idle",i:0}),g=c[0],j=g.state,k=g.i,m=c[1];return(0,f.useEffect)(function(){if("copied"===j){var a=window.setTimeout(function(){m({state:"idle",i:k+1})},1500);return function(){window.clearTimeout(a)}}},[j,k]),(0,d.jsxs)("div",{className:"relative flex -mr-2",children:[(0,d.jsx)("button",{type:"button",className:(0,e.Z)({"text-gray-500 hover:text-gray-400":"idle"===j,"text-sky-400":"copied"===j}),onClick:function(){navigator.clipboard.writeText(h()(b.replace(/^[+->]/gm," "))).then(function(){m({state:"copied",i:k+1})})},children:(0,d.jsxs)("svg",{fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",className:"w-8 h-8",children:[(0,d.jsx)("path",{d:"M13 10.75h-1.25a2 2 0 0 0-2 2v8.5a2 2 0 0 0 2 2h8.5a2 2 0 0 0 2-2v-8.5a2 2 0 0 0-2-2H19"}),(0,d.jsx)("path",{d:"M18 12.25h-4a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5a1 1 0 0 1-1 1ZM13.75 16.25h4.5M13.75 19.25h4.5"})]})}),(0,d.jsx)(l.u,{className:"absolute bottom-full left-1/2 mb-3.5 pb-1 -translate-x-1/2",show:"copied"===j,enter:"transform ease-out duration-200 transition origin-bottom",enterFrom:"scale-95 translate-y-0.5 opacity-0",enterTo:"scale-100 translate-y-0 opacity-100",leave:"transition ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,d.jsxs)(i.Z,{className:"relative bg-sky-500 text-white font-mono text-[0.625rem] leading-6 font-medium px-1.5 rounded-lg",children:["Copied",(0,d.jsx)("svg",{"aria-hidden":"true",width:"16",height:"6",viewBox:"0 0 16 6",className:"text-sky-500 absolute top-full left-1/2 -mt-px -ml-2",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15 0H1V1.00366V1.00366V1.00371H1.01672C2.72058 1.0147 4.24225 2.74704 5.42685 4.72928C6.42941 6.40691 9.57154 6.4069 10.5741 4.72926C11.7587 2.74703 13.2803 1.0147 14.9841 1.00371H15V0Z",fill:"currentColor"})})]})})]})}function o(a){var b=a.code,c=a.lang,f=a.pad;return(0,d.jsx)("pre",{className:(0,e.Z)("text-sm leading-6 text-gray-50 flex ligatures-none",f&&"overflow-auto"),children:(0,d.jsx)("code",{className:(0,e.Z)("flex-none min-w-full",f&&"p-5"),dangerouslySetInnerHTML:{__html:b.split("\n").map(function(a){return"terminal"===c&&(a="<span class=\"flex\"><svg viewBox=\"0 -9 3 24\" aria-hidden=\"true\" class=\"flex-none overflow-visible text-pink-400 w-auto h-6 mr-3\"><path d=\"M0 0L3 3L0 6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg><span class=\"flex-auto\">".concat(a,"</span></span>")),a}).join("terminal"===c?"":"\n")}})})}function p(a){var b=a.code,c=a.highlightedCode;return Array.isArray(b)?(0,d.jsx)("div",{className:"col-span-3",children:(0,d.jsx)(j.E,{actions:function(a){var c=a.selectedIndex;return(0,d.jsx)(n,{code:b[c].code})},children:b.map(function(a,b){var e=a.name,f=a.lang;return(0,d.jsx)(k.M,{filename:e,children:(0,d.jsx)(o,{code:c[b],lang:f})},e)})})}):(0,d.jsxs)("div",{className:"relative z-10 -ml-10 col-span-3 bg-gray-800 rounded-xl shadow-lg xl:ml-0 dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10",children:[(0,d.jsx)(q,{name:b.name,children:(0,d.jsx)(n,{code:b.code})}),(0,d.jsx)("div",{className:"relative",children:(0,d.jsx)(o,{code:c,lang:b.lang,pad:!0})})]})}function q(a){var b=a.name,c=a.children;return(0,d.jsxs)("div",{className:"relative flex text-gray-400 text-xs leading-6",children:[(0,d.jsx)("div",{className:"mt-2 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:b}),(0,d.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,d.jsx)("div",{className:"flex-auto -mr-px bg-gray-700/50 border border-gray-500/30 rounded-tl"})}),c&&(0,d.jsx)("div",{className:"absolute top-2 right-0 h-8 flex items-center pr-4",children:c})]})}},6774:function(a,b,c){c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.translucent,i=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==h&&h&&"dark:bg-gray-800/50"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),i&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}},74903:function(a,b,c){c.d(b,{i:function(){return f}});var d=c(85893),e=c(66278);function f(a){var b=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("main",{className:"max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none",children:b}),(0,d.jsx)(e.$,{})]})}}}])