(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9991],{14:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/introducing-linting-for-tailwindcss-intellisense",function(){return c(38543)}])},38543:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return p},"default":function(){return q}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(85225),g=c(24541),h=c(38749),i=c(76765),j=c(9096),k=c(2488),l=c(18244),m=c(55318),n={meta:{title:"Introducing linting for Tailwind CSS IntelliSense",description:"Today we’re releasing a new version of the Tailwind CSS IntelliSense extension for Visual Studio Code that adds Tailwind-specific linting to both your CSS and your markup.",date:"2020-06-23T18:52:03Z",authors:[g.D7],image:m.Z},slug:"introducing-linting-for-tailwindcss-intellisense",tableOfContents:[{title:"Detecting errors in your CSS",slug:"detecting-errors-in-your-css",children:[]},{title:"Catching conflicts in your HTML",slug:"catching-conflicts-in-your-html",children:[]},{title:"Quick fixes included",slug:"quick-fixes-included",children:[]},{title:"Configuration",slug:"configuration",children:[]},{title:"Conclusion",slug:"conclusion",children:[]}]},o=f.B,p=!0;function q(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(o,Object.assign({},n,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Today we’re releasing a new version of the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"}),"Tailwind CSS IntelliSense extension for Visual Studio Code")," that adds Tailwind-specific linting to both your CSS and your markup."),(0,d.kt)(e.X,{level:2,id:"detecting-errors-in-your-css",nextElement:{type:"paragraph"}},"Detecting errors in your CSS"),(0,d.kt)("p",null,"Tailwind already detects CSS errors, for example when you mistype a screen name in the ",(0,d.kt)("inlineCode",{parentName:"p"},"@screen")," directive. The linting feature for Tailwind CSS IntelliSense surfaces these errors and displays them in context, directly inside your editor. The linter will validate your ",(0,d.kt)("inlineCode",{parentName:"p"},"@tailwind"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"@screen"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"@variants")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"@apply")," directives, as well as any ",(0,d.kt)("inlineCode",{parentName:"p"},"theme")," function calls:"),(0,d.kt)("img",{width:"1524",height:"857",alt:"Screen capture showing CSS linting in action",src:h.Z,srcSet:"".concat(h.Z," 762w, ").concat(i.Z," 1524w"),sizes:"(min-width: 1280px) 51rem, (min-width: 768px) 45rem, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"}),(0,d.kt)(e.X,{level:2,id:"catching-conflicts-in-your-html",nextElement:{type:"paragraph"}},"Catching conflicts in your HTML"),(0,d.kt)("p",null,"There is one more lint rule which analyses class lists in your template files and highlights any instances where utilities seem to be in conflict. For example you probably didn’t intend to have ",(0,d.kt)("inlineCode",{parentName:"p"},"mt-4")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"mt-6")," in the same class list!"),(0,d.kt)("img",{width:"1524",height:"857",alt:"Screen capture showing markup linting in action",src:j.Z,srcSet:"".concat(j.Z," 762w, ").concat(k.Z," 1524w"),sizes:"(min-width: 1280px) 51rem, (min-width: 768px) 45rem, (min-width: 640px) calc(100vw - 3rem), calc(100vw - 2rem)"}),(0,d.kt)(e.X,{level:2,id:"quick-fixes-included",nextElement:{type:"paragraph"}},"Quick fixes included"),(0,d.kt)("p",null,"To make it as easy as possible to fix any issues, all of the lint rules have their own “quick fixes” which can be triggered directly within Visual Studio Code. If you accidentally typed ",(0,d.kt)("inlineCode",{parentName:"p"},"@screen small")," instead of ",(0,d.kt)("inlineCode",{parentName:"p"},"@screen sm"),", the editor can automatically replace ",(0,d.kt)("inlineCode",{parentName:"p"},"small")," with ",(0,d.kt)("inlineCode",{parentName:"p"},"sm")," for you!"),(0,d.kt)("p",null,"As well as simple text replacements there’s also some more interesting quick fixes for the more complex lint rules. Take a look at how the extension can automatically refactor an invalid ",(0,d.kt)("inlineCode",{parentName:"p"},"@apply")," directive:"),(0,d.kt)("video",{src:l.Z,width:"1600",height:"900",controls:!0}),(0,d.kt)(e.X,{level:2,id:"configuration",nextElement:{type:"paragraph"}},"Configuration"),(0,d.kt)("p",null,"We think you’ll love the new lint feature, but if you don’t, or you just want to tweak some behavior, we’ve got you covered. You can decide how each rule violation is treated: is it an ",(0,d.kt)("inlineCode",{parentName:"p"},"error"),", or just a ",(0,d.kt)("inlineCode",{parentName:"p"},"warning"),", or do you want to ",(0,d.kt)("inlineCode",{parentName:"p"},"ignore")," the rule altogether? If you really want to you can disable linting entirely using the new ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwindCSS.validate")," setting."),(0,d.kt)("p",null,"Check out the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindcss/intellisense#tailwindcssvalidate"}),"extension readme")," for more details about configuring the lint rules to suit your workflow."),(0,d.kt)(e.X,{level:2,id:"conclusion",nextElement:{type:"paragraph"}},"Conclusion"),(0,d.kt)("p",null,"Linting is available now in ",(0,d.kt)("inlineCode",{parentName:"p"},"v0.4.0")," of Tailwind CSS IntelliSense! If you already have the extension you may need to reload Visual Studio Code to get the update, and if you don’t you can install it via the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss"}),"extension marketplace"),"."),(0,d.kt)("p",null,"This is the very first iteration of this feature, and we’d love to hear your feedback! Do you have an idea for a new lint rule? Let us know!"),(0,d.kt)(function(a){return console.warn("Component Footer was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},{mdxType:"Footer"},"Want to talk about this post? ",(0,d.kt)("a",{href:"https://github.com/tailwindcss/tailwindcss/discussions/1956"},"Discuss this on GitHub →")))}q.isMDXComponent=!0,q.layoutProps=n}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,2474,3942,5225,2888,179],function(){return a(a.s=14)}),_N_E=a.O()}])