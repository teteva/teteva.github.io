(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3355],{51726:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-color",function(){return c(20531)}])},20531:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return u}}),c(67294);var d,e=c(3905),f=c(41664),g=c(5679),h=c(83434),i=c(53339),j=c(74296),k=c(63859),l=c(71728),m=c(87253),n=c(31018),o=c(92817),p=i.L,q={utilities:k.Z,transformProperties:function(a){a.selector;var b=a.properties;return delete b["--tw-bg-opacity"],Object.keys(b).forEach(function(a){b[a]=b[a].replace(" / var(--tw-bg-opacity)","")}),b},preview:function(a){return(0,e.kt)("td",{className:"transparent"===a["background-color"]?"bg-checkered":void 0,style:{backgroundColor:Array.isArray(a["background-color"])?a["background-color"][0]:a["background-color"]}},(0,e.kt)("div",{className:"w-24"}))}},r=(d="Heading",function(a){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",Object.assign({},a))}),s={Layout:p,classes:q,meta:{title:"Background Color",description:"Utilities for controlling an element's background color."},slug:"background-color",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the background color",slug:"setting-the-background-color",children:[]},{title:"Changing the opacity",slug:"changing-the-opacity",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},t=j.X_;function u(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)(t,Object.assign({},s,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)(g.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,e.kt)(g.X,{level:3,id:"setting-the-background-color",nextElement:{type:"paragraph"}},"Setting the background color"),(0,e.kt)("p",null,"Control the background color of an element using the ",(0,e.kt)("inlineCode",{parentName:"p"},"bg-{color}")," utilities."),(0,e.kt)(h.e,{containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"text-center\">\n    <button type=\"button\" class=\"py-2 px-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none\" tabindex=\"-1\">\n      Save changes\n    </button>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"bg-indigo-500")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  Save changes\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(g.X,{level:3,id:"changing-the-opacity",nextElement:{type:"paragraph"}},"Changing the opacity"),(0,e.kt)("p",null,"Control the opacity of an element’s background color using the color opacity modifier."),(0,e.kt)(h.e,{containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"grid grid-cols-1 gap-4 sm:grid-cols-3 text-sm text-white\">\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">bg-sky-500</p>\n      <button class=\"px-4 py-2 font-semibold text-sm bg-sky-500 text-white rounded-md shadow-sm opacity-100\">Button A</button>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">bg-sky-500/75</p>\n      <button class=\"px-4 py-2 font-semibold text-sm bg-sky-500/75 text-white rounded-md shadow-sm opacity-100\">Button B</button>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3 dark:text-gray-400\">bg-sky-500/50</p>\n      <button class=\"px-4 py-2 font-semibold text-sm bg-sky-500/50 text-white rounded-md shadow-sm opacity-100\">Button C</button>\n    </div>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-sky-500",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/100")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-sky-500",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/75")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-sky-500",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/50")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)("p",null,"You can use any value defined in your ",(0,e.kt)(f.default,{href:"/docs/opacity",passHref:!0},(0,e.kt)("a",null,"opacity scale")),", or use arbitrary values if you need to deviate from your design tokens."),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-sky-500",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"/[.06]")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)("hr",null),(0,e.kt)(r,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,e.kt)(r,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,e.kt)(o.k,{featuredClass:"bg-cyan-600",mdxType:"HoverFocusAndOtherStates"},(0,e.kt)(h.e,{hint:"Try hovering over the button to see the background color change",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"text-center\">\n    <button type=\"button\" class=\"py-2 px-3 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold rounded-md shadow focus:outline-none\" tabindex=\"-1\">\n      Subscribe\n    </button>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-cyan-500 ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"hover:bg-cyan-600")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Subscribe",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,e.kt)(r,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,e.kt)(m.p,{featuredClass:"bg-green-500",mdxType:"BreakpointsAndMediaQueries"},(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-blue-500 ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-green-500")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"Subscribe",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,e.kt)("hr",null),(0,e.kt)(g.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,e.kt)(g.X,{level:3,id:"customizing-your-theme",nextElement:{type:"jsx"}},"Customizing your theme"),(0,e.kt)(n.h,{name:"background",configKey:"backgroundColor",mdxType:"CustomizePluginColors"}),(0,e.kt)(g.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,e.kt)(l.k,{property:"color",featuredClass:"bg-[#50d71e]",element:"p",mdxType:"ArbitraryValues"}))}u.isMDXComponent=!0,u.layoutProps=s}},function(a){a.O(0,[3430,6401,4756,3859,6852,4713,2474,5746,8478,9774,2888,179],function(){return a(a.s=51726)}),_N_E=a.O()}])