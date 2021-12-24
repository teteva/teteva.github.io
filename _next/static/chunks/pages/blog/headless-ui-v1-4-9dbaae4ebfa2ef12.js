(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2885],{40185:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/headless-ui-v1-4",function(){return c(32135)}])},32135:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return v},"default":function(){return w}}),c(67294);var d=c(3905);c(41664);var e=c(5679),f=c(85225),g=c(24541),h=c(87247),i=c(73327),j=c(13796),k=c(66311),l=c(49210),m=c(750),n=c(33238),o=c(46213),p=c(54924),q=c(42567),r=c(84758),s=c(93650),t={meta:{title:"Headless UI v1.4: The One With Tabs",description:"We just released Headless UI v1.4, which includes a brand new `Tab` component, and new APIs for manually closing `Popover` and `Disclosure` components more easily.",date:"2021-07-29T12:00:00.000Z",authors:[g.Oq,g.ff],image:h.Z},slug:"headless-ui-v1-4",tableOfContents:[{title:"Tabs",slug:"tabs",children:[{title:"Closing Disclosures and Popovers",slug:"closing-disclosures-and-popovers",children:[]}]},{title:"Try it out",slug:"try-it-out",children:[]}]},u=f.B,v=!0;function w(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(u,Object.assign({},t,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"We just released Headless UI v1.4, which includes a brand new ",(0,d.kt)("inlineCode",{parentName:"p"},"Tab")," component, and new APIs for manually closing ",(0,d.kt)("inlineCode",{parentName:"p"},"Popover")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"Disclosure")," components more easily."),(0,d.kt)("a",{href:"https://headlessui.dev"},(0,d.kt)("img",{src:i.Z,alt:"Headless UI v1.4"})),(0,d.kt)(e.X,{level:2,id:"tabs",nextElement:{type:"paragraph"}},"Tabs"),(0,d.kt)("p",null,"Earlier this year we started working on ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com/ecommerce"}),"Tailwind UI Ecommerce"),", and we realized pretty quickly we were going to need to support tabs in Headless UI to be able to build the new interfaces we were designing."),(0,d.kt)("a",{href:"https://tailwindui.com/ecommerce"},(0,d.kt)("img",{src:j.Z,alt:"Product details interface design from Tailwind UI Ecommerce."})),(0,d.kt)("p",null,"Here’s what we ended up with:"),(0,d.kt)(k.O.Group,{as:"div",className:"my-6 bg-gray-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(k.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"React"),(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(k.O.Panels,null,(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(l.default,{mdxType:"ReactExample1"})),(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(p.default,{mdxType:"VueExample1"})))),(0,d.kt)("p",null,"And yep, those are tabs!"),(0,d.kt)("p",null,"Like all Headless UI components, this totally abstracts away stuff like keyboard navigation for you so you can create custom tabs in a completely declarative way, without having to think about any of the tricky accessibility details."),(0,d.kt)("p",null,(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev/react/tabs"}),"Check out the documentation")," to learn more."),(0,d.kt)(e.X,{level:3,id:"closing-disclosures-and-popovers",nextElement:{type:"paragraph"}},"Closing Disclosures and Popovers"),(0,d.kt)("p",null,"Up until now, there was no way to close a ",(0,d.kt)("inlineCode",{parentName:"p"},"Disclosure")," without clicking the actual button used to open it. For typical disclosure use cases this isn’t a big deal, but it often makes sense to use disclosures for things like mobile navigation, where you want to close it when someone clicks a link ",(0,d.kt)("em",{parentName:"p"},"inside")," of it."),(0,d.kt)("p",null,"Now you can use ",(0,d.kt)("inlineCode",{parentName:"p"},"Disclosure.Button")," or (",(0,d.kt)("inlineCode",{parentName:"p"},"DisclosureButton")," in Vue) within your disclosure panel to close the panel, making it easy to wrap up things like links or other buttons so the panel doesn’t stay open:"),(0,d.kt)(k.O.Group,{as:"div",className:"my-6 bg-gray-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(k.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"React"),(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(k.O.Panels,null,(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(m.default,{mdxType:"ReactExample2"})),(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(q.default,{mdxType:"VueExample2"})))),(0,d.kt)("p",null,"The same thing works with ",(0,d.kt)("inlineCode",{parentName:"p"},"Popover")," components, too:"),(0,d.kt)(k.O.Group,{as:"div",className:"my-6 bg-gray-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(k.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"React"),(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(k.O.Panels,null,(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(n.default,{mdxType:"ReactExample3"})),(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(r.default,{mdxType:"VueExample3"})))),(0,d.kt)("p",null,"If you need finer control, we also pass a ",(0,d.kt)("inlineCode",{parentName:"p"},"close")," function via the render prop/scoped slot, so you can imperatively close the panel when you need to:"),(0,d.kt)(k.O.Group,{as:"div",className:"my-6 bg-gray-800 rounded-xl dark:ring-1 dark:ring-inset dark:ring-white/10"},(0,d.kt)(k.O.List,{className:"relative space-x-2 px-4 pt-3"},(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"React"),(0,d.kt)(k.O,{className:function(a){var b=a.selected;return"py-2 px-4 inline-block rounded-md ".concat(b?"bg-gray-700":"bg-transparent hover:bg-gray-700"," text-sm text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-gray-600")},mdxType:"Tab"},"Vue")),(0,d.kt)(k.O.Panels,null,(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(o.default,{mdxType:"ReactExample4"})),(0,d.kt)(k.O.Panel,{className:"prose focus:outline-none children:!shadow-none children:bg-transparent"},(0,d.kt)(s.default,{mdxType:"VueExample4"})))),(0,d.kt)("p",null,"For more details, check out the updated ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev/react/popover#closing-popovers-manually"}),"Popover")," and ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev/react/disclosure#closing-disclosures-manually"}),"Disclosure")," documentation."),(0,d.kt)(e.X,{level:2,id:"try-it-out",nextElement:{type:"paragraph"}},"Try it out"),(0,d.kt)("p",null,"Headless UI v1.4 is a minor update so there are no breaking changes. To upgrade, just install the latest version via npm:"),(0,d.kt)("pre",Object.assign({},{className:"language-shell"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# For React"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," @headlessui/react\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# For Vue"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," @headlessui/vue")),(0,d.kt)("p",null,"Check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://headlessui.dev"}),"the official website")," for the latest documentation, and check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindui.com"}),"Tailwind UI")," if you want to play tons of styled examples."),(0,d.kt)(function(a){return console.warn("Component Footer was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},{mdxType:"Footer"},"Ready to try it out? ",(0,d.kt)("a",{href:"https://headlessui.dev"},"Visit the Headless UI website →")))}w.isMDXComponent=!0,w.layoutProps=t}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,2474,3942,5225,2888,179],function(){return a(a.s=40185)}),_N_E=a.O()}])