(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9745],{10982:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tailwind-ui-now-with-react-and-vue-support",function(){return c(1417)}])},1417:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return k},"default":function(){return l}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(85225),g=c(24541),h=c(61882),i={meta:{title:"Tailwind UI: Now with React + Vue support",description:"Last year we released Tailwind UI — a huge directory of professionally designed UI examples built with Tailwind CSS. Today we’re excited to add first class support for React and Vue 3 to all of the examples in Tailwind UI, which makes it even easier to adapt them for your projects.",date:"2021-04-14T16:01:00.000Z",authors:[g.Oq],image:h.Z},slug:"tailwind-ui-now-with-react-and-vue-support",tableOfContents:[{title:"Functional and accessible",slug:"functional-and-accessible",children:[]},{title:"Fully customizable",slug:"fully-customizable",children:[]},{title:"Get started",slug:"get-started",children:[]}]},j=f.B,k=!0;function l(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(j,Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Last year we released ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com"}),"Tailwind UI")," — a huge directory of professionally designed UI examples built with Tailwind CSS. Up until now, all of the examples in Tailwind UI have been pure HTML which is sort of the lowest common denominator for all web developers, and makes it possible to adapt them to any templating language or JavaScript framework."),(0,d.kt)("p",null,"Today we’re excited to add first class support for React and Vue 3 to all of the examples in Tailwind UI, which makes it even easier to adapt them for your projects."),(0,d.kt)("a",{href:"https://tailwindui.com"},(0,d.kt)("img",{src:h.Z,alt:"Tailwind UI: Now for React and Vue"})),(0,d.kt)("p",null,"It’s been ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://blog.tailwindcss.com/building-react-and-vue-support-for-tailwind-ui"}),"a long journey")," but I am super proud of where we ended up on this one, and really think it’s going to make Tailwind UI a useful tool for a whole new group of Tailwind CSS users."),(0,d.kt)(e.X,{level:2,id:"functional-and-accessible",nextElement:{type:"paragraph"}},"Functional and accessible"),(0,d.kt)("p",null,"All of the React and Vue examples in Tailwind UI are powered ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev"}),"Headless UI")," which is a library of components we developed to decouple all of the complicated JS behavior you need to build complex components like modals and dropdowns from the actual styles and markup."),(0,d.kt)("p",null,"Headless UI handles all of the ARIA attribute management, keyboard interactions, focus handling, and more for you, meaning all of the React and Vue examples provided in Tailwind UI are fully functional, with no need to write any of that complex JS stuff yourself. All of that gnarly complexity is safely tucked away in your ",(0,d.kt)("inlineCode",{parentName:"p"},"node_modules")," folder where we can make improvements and fix bugs on your behalf, without you ever having to change your own code."),(0,d.kt)(e.X,{level:2,id:"fully-customizable",nextElement:{type:"paragraph"}},"Fully customizable"),(0,d.kt)("p",null,"With Headless UI, we’ve managed to abstract away all of the complicated JS functionality without taking away any control over the actual markup. That means that the entire design is still in entirely under your control."),(0,d.kt)("pre",Object.assign({},{className:"language-jsx"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-jsx"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"import")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token imports"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," useState ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"from")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'react'"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"import")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token imports"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"Switch")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"from")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@headlessui/react'"),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"classNames"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token parameter"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token spread operator"}),"..."),"classes"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"return")," classes",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"filter"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token known-class-name class-name"}),"Boolean"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token method function property-access"}),"join"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"' '"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"export")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword module"}),"default")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"function")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token maybe-class-name"}),"Example")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword"}),"const")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"enabled",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," setEnabled",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"useState"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token boolean"}),"false"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token keyword control-flow"}),"return")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Switch")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"checked"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"enabled",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"onChange"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),"setEnabled",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"classNames"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"\n        enabled ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"?")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'bg-indigo-600'")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'bg-gray-200'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'"),"\n      ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n    ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"sr-only",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"Use setting"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"span"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n      "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"span"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"aria-hidden"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"true",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"className"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script language-javascript"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token script-punctuation punctuation"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token function"}),"classNames"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"("),"\n          enabled ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"?")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'translate-x-5'")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'translate-x-0'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),"\n          ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'"),"\n        ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),")"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}")),"\n      ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"/>")),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token plain-text"}),"\n    "),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token class-name"}),"Switch")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))),(0,d.kt)("p",null,"You can copy a React or Vue example from Tailwind UI and change absolutely everything about it, from the border radius to the padding to the box shadows to the font-size, all by simply adding utility classes like you’re used to."),(0,d.kt)(e.X,{level:2,id:"get-started",nextElement:{type:"paragraph"}},"Get started"),(0,d.kt)("p",null,"If you’re already a Tailwind UI customer, all of this stuff is available to you today as a totally free update. Just log in to your account, select between HTML, React, or Vue in the dropdown above any component, and grab the code in the format you want."),(0,d.kt)("p",null,"If you haven’t checked out Tailwind UI yet, browse the free preview components to get a feel for how it all works. It’s an awesome tool for moving fast on a new side-project idea, finding inspiration for a new feature you need to build at work, or learning how to implement a specific little UI trick with Tailwind, and a great way to support our work on open-source projects like Tailwind CSS, Headless UI, and Heroicons."),(0,d.kt)(function(a){return console.warn("Component Footer was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},{mdxType:"Footer"},"Want to check it out? ",(0,d.kt)("a",{href:"https://tailwindui.com"},"Visit the Tailwind UI website →")))}l.isMDXComponent=!0,l.layoutProps=i}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,2474,3942,5225,2888,179],function(){return a(a.s=10982)}),_N_E=a.O()}])