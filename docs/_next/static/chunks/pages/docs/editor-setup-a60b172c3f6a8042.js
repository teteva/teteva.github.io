(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6551],{9485:function(a,b){"use strict";b.Z="/_next/static/media/intellisense.4e58a9bdbd9d42f7bb625b5954c968f8.png"},57874:function(a,b){"use strict";b.Z="/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg"},51103:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/editor-setup",function(){return c(65635)}])},65635:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return k}}),c(67294);var d=c(3905),e=c(41664),f=c(5679),g=c(53339),h=c(74296),i={Layout:g.L,meta:{title:"Editor Setup",description:"Plugins and configuration settings that can improve the developer experience when working with Tailwind CSS."},slug:"editor-setup",tableOfContents:[{title:"Syntax support",slug:"syntax-support",children:[]},{title:"IntelliSense for VS Code",slug:"intelli-sense-for-vs-code",children:[]},{title:"JetBrains IDEs",slug:"jet-brains-id-es",children:[]}]},j=h.X_;function k(a){var b=a.components,g=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(j,Object.assign({},i,g,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(f.X,{level:2,id:"syntax-support",nextElement:{type:"paragraph"}},"Syntax support"),(0,d.kt)("p",null,"Tailwind CSS uses a lot of custom CSS at-rules like ",(0,d.kt)("inlineCode",{parentName:"p"},"@tailwind"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"@apply"),", and ",(0,d.kt)("inlineCode",{parentName:"p"},"@screen"),", and in many editors this can trigger warnings or errors where these rules aren’t recognized."),(0,d.kt)("p",null,"The solution to this is almost always to install a plugin for your editor/IDE for PostCSS language support instead of regular CSS. For example, VS Code has a ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=csstools.postcss"}),"PostCSS Language Support")," plugin you can use that works great with Tailwind CSS."),(0,d.kt)("p",null,"In some cases, you may need to disable native CSS linting/validations if your editor is very strict about the syntax it expects in your CSS files."),(0,d.kt)(f.X,{level:2,id:"intelli-sense-for-vs-code",nextElement:{type:"paragraph"}},"IntelliSense for VS Code"),(0,d.kt)("p",null,"The official ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"}),"Tailwind CSS IntelliSense")," extension for Visual Studio Code enhances the Tailwind development experience by providing users with advanced features such as autocomplete, syntax highlighting, and linting."),(0,d.kt)("img",{src:c(9485).Z,alt:"Tailwind CSS IntelliSense extension for Visual Studio Code",width:1344,height:672,className:"rounded-lg"}),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Autocomplete"),". Intelligent suggestions for class names, as well as ",(0,d.kt)(e.default,{href:"/docs/functions-and-directives",passHref:!0},(0,d.kt)("a",null,"CSS functions and directives")),"."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Linting"),". Highlights errors and potential bugs in both your CSS and your markup."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Hover Previews"),". See the complete CSS for a Tailwind class name by hovering over it."),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("strong",{parentName:"li"},"Syntax Highlighting"),". Provides syntax definitions so that Tailwind features are highlighted correctly.")),(0,d.kt)("p",null,"Check out the project ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindcss/intellisense"}),"on GitHub")," to learn more, or ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"vscode:extension/bradlc.vscode-tailwindcss"}),"add it to Visual Studio Code")," to get started now."),(0,d.kt)(f.X,{level:2,id:"jet-brains-id-es",nextElement:{type:"paragraph"}},"JetBrains IDEs"),(0,d.kt)("p",null,"JetBrains IDEs like WebStorm, PhpStorm, and others include support for intelligent Tailwind CSS completions in your HTML and when using ",(0,d.kt)("inlineCode",{parentName:"p"},"@apply"),"."),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://www.jetbrains.com/help/webstorm/tailwind-css.html"}),"Learn more about Tailwind CSS support in JetBrains IDEs ","→")))}k.isMDXComponent=!0,k.layoutProps=i},53339:function(a,b,c){"use strict";c.d(b,{L:function(){return l}});var d=c(85893),e=c(21744),f=c(9008),g=c(11163),h=c(57874),i=c(68224),j=c(54713);function k(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function l(a){var b=(0,g.useRouter)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.D,{suffix:"/"===b.pathname?void 0:"Tailwind CSS",children:a.layoutProps.meta.metaTitle||a.layoutProps.meta.title}),(0,d.jsxs)(f.default,{children:[(0,d.jsx)("meta",{name:"twitter:card",content:"summary"},"twitter:card"),(0,d.jsx)("meta",{name:"twitter:image",content:"https://tailwindcss.com".concat(h.Z)},"twitter:image")]}),(0,d.jsx)(e.C,function(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){k(a,b,c[b])})}return a}({nav:j.u},a))]})}l.nav=j.u}},function(a){a.O(0,[6401,6852,4713,2474,9774,2888,179],function(){return a(a.s=51103)}),_N_E=a.O()}])