(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9567],{66311:function(a,b,c){"use strict";c.d(b,{O:function(){return w}});var d,e,f,g=c(19642),h=c(67294),i=c(133),j=c(58529),k=c(57471),l=c(62659),m=c(60852),n=c(92506),o=c(35057),p=c(56637);(f=e||(e={}))[f.SetSelectedIndex=0]="SetSelectedIndex",f[f.SetOrientation=1]="SetOrientation",f[f.SetActivation=2]="SetActivation",f[f.RegisterTab=3]="RegisterTab",f[f.UnregisterTab=4]="UnregisterTab",f[f.RegisterPanel=5]="RegisterPanel",f[f.UnregisterPanel=6]="UnregisterPanel",f[f.ForceRerender=7]="ForceRerender";var q=((d={})[e.SetSelectedIndex]=function(a,b){return a.selectedIndex===b.index?a:(0,g.gY)({},a,{selectedIndex:b.index})},d[e.SetOrientation]=function(a,b){return a.orientation===b.orientation?a:(0,g.gY)({},a,{orientation:b.orientation})},d[e.SetActivation]=function(a,b){return a.activation===b.activation?a:(0,g.gY)({},a,{activation:b.activation})},d[e.RegisterTab]=function(a,b){return a.tabs.includes(b.tab)?a:(0,g.gY)({},a,{tabs:[].concat(a.tabs,[b.tab])})},d[e.UnregisterTab]=function(a,b){return(0,g.gY)({},a,{tabs:a.tabs.filter(function(a){return a!==b.tab})})},d[e.RegisterPanel]=function(a,b){return a.panels.includes(b.panel)?a:(0,g.gY)({},a,{panels:[].concat(a.panels,[b.panel])})},d[e.UnregisterPanel]=function(a,b){return(0,g.gY)({},a,{panels:a.panels.filter(function(a){return a!==b.panel})})},d[e.ForceRerender]=function(a){return(0,g.gY)({},a)},d),r=(0,h.createContext)(null);function s(a){var b=(0,h.useContext)(r);if(null===b){var c=new Error("<"+a+" /> is missing a parent <Tab.Group /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}return b}function t(a,b){return(0,i.E)(b.type,q,a,b)}r.displayName="TabsContext";var u=h.Fragment;function v(a){var b=s([w.name,v.name].join("."))[0],c=b.selectedIndex,d=b.orientation;return(0,j.sY)({props:(0,g.gY)({},a,{role:"tablist","aria-orientation":d}),slot:{selectedIndex:c},defaultTag:"div",name:"Tabs.List"})}function w(a){var b,c,d="headlessui-tabs-tab-"+(0,n.M)(),f=s(w.name),q=f[0],r=q.selectedIndex,t=q.tabs,u=q.panels,v=q.orientation,x=q.activation,y=f[1],z=y.dispatch,A=y.change,B=(0,h.useRef)(null),C=(0,k.T)(B,function(a){a&&z({type:e.ForceRerender})});(0,m.e)(function(){return z({type:e.RegisterTab,tab:B}),function(){return z({type:e.UnregisterTab,tab:B})}},[z,B]);var D=t.indexOf(B),E=D===r,F=(0,h.useCallback)(function(a){var b=t.map(function(a){return a.current}).filter(Boolean);if(a.key===l.R.Space||a.key===l.R.Enter){a.preventDefault(),a.stopPropagation(),A(D);return}switch(a.key){case l.R.Home:case l.R.PageUp:return a.preventDefault(),a.stopPropagation(),(0,o.jA)(b,o.TO.First);case l.R.End:case l.R.PageDown:return a.preventDefault(),a.stopPropagation(),(0,o.jA)(b,o.TO.Last)}return(0,i.E)(v,{vertical:function(){return a.key===l.R.ArrowUp?(0,o.jA)(b,o.TO.Previous|o.TO.WrapAround):a.key===l.R.ArrowDown?(0,o.jA)(b,o.TO.Next|o.TO.WrapAround):void 0},horizontal:function(){return a.key===l.R.ArrowLeft?(0,o.jA)(b,o.TO.Previous|o.TO.WrapAround):a.key===l.R.ArrowRight?(0,o.jA)(b,o.TO.Next|o.TO.WrapAround):void 0}})},[t,v,D,A]),G=(0,h.useCallback)(function(){var a;null==(a=B.current)||a.focus()},[B]),H=(0,h.useCallback)(function(){var a;null==(a=B.current)||a.focus(),A(D)},[A,D,B]),I=(0,h.useMemo)(function(){return{selected:E}},[E]),J={ref:C,onKeyDown:F,onFocus:"manual"===x?G:H,onClick:H,id:d,role:"tab",type:(0,p.f)(a,B),"aria-controls":null==(b=u[D])?void 0:null==(c=b.current)?void 0:c.id,"aria-selected":E,tabIndex:E?0:-1};return(0,j.sY)({props:(0,g.gY)({},a,J),slot:I,defaultTag:"button",name:"Tabs.Tab"})}function x(a){var b=s([w.name,x.name].join("."))[0].selectedIndex,c=(0,h.useMemo)(function(){return{selectedIndex:b}},[b]);return(0,j.sY)({props:a,slot:c,defaultTag:"div",name:"Tabs.Panels"})}var y=j.AN.RenderStrategy|j.AN.Static;function z(a){var b,c,d=s([w.name,z.name].join(".")),f=d[0],i=f.selectedIndex,l=f.tabs,o=f.panels,p=d[1].dispatch,q="headlessui-tabs-panel-"+(0,n.M)(),r=(0,h.useRef)(null),t=(0,k.T)(r,function(a){a&&p({type:e.ForceRerender})});(0,m.e)(function(){return p({type:e.RegisterPanel,panel:r}),function(){return p({type:e.UnregisterPanel,panel:r})}},[p,r]);var u=o.indexOf(r),v=u===i,x=(0,h.useMemo)(function(){return{selected:v}},[v]),A={ref:t,id:q,role:"tabpanel","aria-labelledby":null==(b=l[u])?void 0:null==(c=b.current)?void 0:c.id,tabIndex:v?0:-1};return(0,j.sY)({props:(0,g.gY)({},a,A),slot:x,defaultTag:"div",features:y,visible:v,name:"Tabs.Panel"})}w.Group=function(a){var b=a.defaultIndex,c=void 0===b?0:b,d=a.vertical,f=a.manual,i=a.onChange,k=a.selectedIndex,l=void 0===k?null:k,m=(0,g.gK)(a,["defaultIndex","vertical","manual","onChange","selectedIndex"]),n=void 0!==d&&d?"vertical":"horizontal",o=void 0!==f&&f?"manual":"auto",p=(0,h.useReducer)(t,{selectedIndex:null,tabs:[],panels:[],orientation:n,activation:o}),q=p[0],s=p[1],v=(0,h.useMemo)(function(){return{selectedIndex:q.selectedIndex}},[q.selectedIndex]),w=(0,h.useRef)(function(){});(0,h.useEffect)(function(){s({type:e.SetOrientation,orientation:n})},[n]),(0,h.useEffect)(function(){s({type:e.SetActivation,activation:o})},[o]),(0,h.useEffect)(function(){"function"==typeof i&&(w.current=i)},[i]),(0,h.useEffect)(function(){if(!(q.tabs.length<=0)&&(null!==l||null===q.selectedIndex)){var a=q.tabs.map(function(a){return a.current}).filter(Boolean),b=a.filter(function(a){return!a.hasAttribute("disabled")}),d=null!=l?l:c;if(d<0)s({type:e.SetSelectedIndex,index:a.indexOf(b[0])});else if(d>q.tabs.length)s({type:e.SetSelectedIndex,index:a.indexOf(b[b.length-1])});else{var f=a.slice(0,d),g=a.slice(d),h=[].concat(g,f).find(function(a){return b.includes(a)});if(!h)return;s({type:e.SetSelectedIndex,index:a.indexOf(h)})}}},[c,l,q.tabs,q.selectedIndex]);var x=(0,h.useRef)(q.selectedIndex),y=(0,h.useMemo)(function(){return[q,{dispatch:s,change:function(a){x.current!==a&&w.current(a),x.current=a,s({type:e.SetSelectedIndex,index:a})}}]},[q,s]);return h.createElement(r.Provider,{value:y},(0,j.sY)({props:(0,g.gY)({},m),slot:v,defaultTag:u,name:"Tabs"}))},w.List=v,w.Panels=x,w.Panel=z},99460:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/letter-spacing",function(){return c(15401)}])},15401:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return t}}),c(67294);var d,e=c(3905),f=c(41664),g=c(59533),h=c(5679),i=c(83434),j=c(53339),k=c(74296),l=c(19904),m=c(15583),n=c(70230),o=c(34782),p=j.L,q=(d="Heading",function(a){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",Object.assign({},a))}),r={Layout:p,classes:{utilities:{".tracking-tighter":{"letter-spacing":"-0.05em"},".tracking-tight":{"letter-spacing":"-0.025em"},".tracking-normal":{"letter-spacing":"0em"},".tracking-wide":{"letter-spacing":"0.025em"},".tracking-wider":{"letter-spacing":"0.05em"},".tracking-widest":{"letter-spacing":"0.1em"}}},meta:{title:"Letter Spacing",description:"Utilities for controlling the tracking (letter spacing) of an element."},slug:"letter-spacing",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Setting the letter spacing",slug:"setting-the-letter-spacing",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},s=k.X_;function t(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)(s,Object.assign({},r,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)(h.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,e.kt)(h.X,{level:3,id:"setting-the-letter-spacing",nextElement:{type:"paragraph"}},"Setting the letter spacing"),(0,e.kt)("p",null,"Control the letter spacing of an element using the ",(0,e.kt)("inlineCode",{parentName:"p"},"tracking-{size}")," utilities."),(0,e.kt)(i.e,{containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex flex-col gap-8\">\n    <div>\n      <span class=\"font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400\">tracking-tight</span>\n      <p class=\"tracking-tight text-lg font-medium text-gray-900 dark:text-gray-200\">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n    <div>\n      <span class=\"font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400\">tracking-normal</span>\n      <p class=\"tracking-normal text-lg font-medium text-gray-900 dark:text-gray-200\">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n    <div>\n      <span class=\"font-medium text-sm text-gray-500 font-mono mb-3 dark:text-gray-400\">tracking-wide</span>\n      <p class=\"tracking-wide text-lg font-medium text-gray-900 dark:text-gray-200\">\n        The quick brown fox jumps over the lazy dog.\n      </p>\n    </div>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"tracking-tight")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"tracking-normal")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"tracking-wide")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,e.kt)("p",null,"To use a negative letter-spacing value, prefix the class name with a dash to convert it to a negative value."),(0,e.kt)("p",null,"Using negative values doesn’t make a ton of sense with the letter-spacing scale Tailwind includes out of the box, but if you’ve opted to customize your letter-spacing scale to use numbers instead of descriptive words like “wide” the negative value modifier can be useful."),(0,e.kt)(l.E,{mdxType:"SnippetGroup"},(0,e.kt)(g.M,{filename:"HTML"},(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-tracking-2"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"The quick brown fox ...",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"p"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,e.kt)(g.M,{filename:"tailwind.config.js"},(0,e.kt)("pre",Object.assign({},{className:"language-js"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    letterSpacing",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'1'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'0em'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'2'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'0.025em'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'3'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'0.05em'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'4'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'0.1em'"),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"))))),(0,e.kt)("hr",null),(0,e.kt)(q,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,e.kt)(q,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,e.kt)(o.k,{defaultClass:"tracking-tight",featuredClass:"tracking-wide",element:"p",mdxType:"HoverFocusAndOtherStates"}),(0,e.kt)(q,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,e.kt)(n.p,{defaultClass:"tracking-tight",featuredClass:"tracking-wide",element:"p",mdxType:"BreakpointsAndMediaQueries"}),(0,e.kt)("hr",null),(0,e.kt)(h.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,e.kt)(h.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,e.kt)("p",null,"By default, Tailwind provides six tracking utilities. You can change, add, or remove these by editing the ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.letterSpacing")," section of your Tailwind config."),(0,e.kt)(g.M,{filename:"tailwind.config.js"},(0,e.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    letterSpacing"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      tightest"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'-.075em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      tighter"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'-.05em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js deleted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      tight"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'-.025em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      normal"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'0'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js deleted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      wide"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'.025em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      wider"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'.05em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js deleted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      widest"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'.1em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      widest"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'.25em'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,e.kt)("p",null,"Learn more about customizing the default theme in the ",(0,e.kt)(f.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,e.kt)("a",null,"theme customization"))," documentation."),(0,e.kt)(h.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,e.kt)(m.k,{property:"letter-spacing",featuredClass:"tracking-[.25em]",element:"p",mdxType:"ArbitraryValues"}))}t.isMDXComponent=!0,t.layoutProps=r},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:c})]})}},83434:function(a,b,c){"use strict";c.d(b,{e:function(){return l}});var d=c(85893),e=c(86010),f=c(63212),g=c(67294);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j={none:"",md:"p-8"};function k(a){var b=a.as,c=a.style,f=a.padding,g=a.p,h=a.className,k=a.containerClassName,l=a.html,m=a.children,n=a.hint,o=a.lightOnly,p=void 0!==o&&o,q=null!=f?f:void 0===g?"md":g,r=j[q];if(void 0===r)throw Error("Invalid padding value: ".concat(JSON.stringify(q)));return(0,d.jsxs)("div",{className:k,children:[void 0!==n&&(0,d.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,d.jsxs)("svg",{className:"flex-none w-5 h-5",viewBox:"0 0 20 20",fill:"none",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[(0,d.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813Z",className:"stroke-gray-400 dark:stroke-gray-300"}),(0,d.jsx)("path",{d:"M3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",className:"stroke-gray-400 dark:stroke-sky-400"})]}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium dark:text-gray-200",children:n})]}),(0,d.jsxs)(void 0===b?"div":b,{style:c,className:(0,e.Z)("not-prose relative bg-gray-50 rounded-xl overflow-hidden",!p&&"dark:bg-gray-800/25"),children:[(0,d.jsx)("div",{style:{backgroundPosition:"10px 10px"},className:(0,e.Z)("absolute inset-0 bg-grid-gray-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]",!p&&"dark:bg-grid-gray-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]")}),(0,d.jsx)("div",i({className:(0,e.Z)("relative rounded-xl overflow-auto",r,h)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,d.jsx)("div",{className:(0,e.Z)("absolute inset-0 pointer-events-none border border-black/5 rounded-xl",!p&&"dark:border-white/5")})]})]})}function l(a){return a.resizable?(0,d.jsx)(m,i({},a)):(0,d.jsx)(k,i({},a))}function m(a){var b=(0,g.useRef)(),c=(0,f.c$)(0),e=(0,g.useRef)(),h=(0,g.useRef)();return(0,g.useEffect)(function(){var a=new window.ResizeObserver(function(){c.set(0)});return a.observe(b.current),function(){a.disconnect()}},[]),(0,g.useEffect)(function(){h.current.onselectstart=function(){return!1}},[]),(0,d.jsxs)("div",{ref:b,className:"relative",children:[(0,d.jsx)(k,i({as:f.ww.div,style:{marginRight:(0,f.Hm)(c,function(a){return-a})}},a)),(0,d.jsx)("div",{ref:e,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(f.ww.div,{ref:h,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:e,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:c},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,d.jsx)("div",{className:"w-1.5 h-8 bg-gray-500/60 rounded-full"})})})]})}},19904:function(a,b,c){"use strict";c.d(b,{E:function(){return j}});var d=c(85893),e=c(66311),f=c(86010),g=c(67294);function h(a){var b=a.className;return(0,d.jsx)("div",{className:(0,f.Z)("pointer-events-none absolute inset-0",b)})}function i(a){var b=a.children,c=a.selectedIndex,g=a.myIndex,i=a.marker,j=c===g,k={leading:j?null:c===g-1?"capped":"normal",trailing:j?null:c===g+1?"capped":"normal"};return(0,d.jsxs)(e.O,{className:(0,f.Z)("flex items-center relative z-10 overflow-hidden px-4 py-1",j?"text-sky-300":"text-gray-400"),children:[(0,d.jsx)("span",{className:"z-10",children:b}),"close"===i&&(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}),"modified"===i&&(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}),!j&&(0,d.jsx)(h,{className:(0,f.Z)("bg-gray-700/50 border-y border-gray-500/30","capped"===k.leading&&"border-l rounded-tl","capped"===k.trailing&&"border-r rounded-tr")}),"normal"===k.trailing&&(0,d.jsx)(h,{className:"inset-y-px border-r border-gray-200/5 z-20"}),j&&(0,d.jsx)(h,{className:"border-b border-b-sky-300"})]})}function j(a){var b=a.children,c=a.actions,h=(0,g.useState)(0),j=h[0],k=h[1];return(0,d.jsxs)(e.O.Group,{as:"div",onChange:k,className:"not-prose bg-gray-800 rounded-xl shadow-md",children:[(0,d.jsxs)("div",{className:"flex",children:[(0,d.jsx)(e.O.List,{className:"flex text-gray-400 text-xs leading-6 overflow-hidden rounded-tl-xl pt-2",children:b.map(function(a,b){return(0,d.jsx)(i,{myIndex:b,selectedIndex:j,children:a.props.filename},a.props.filename)})}),(0,d.jsx)("div",{className:"flex-auto flex pt-2 rounded-tr-xl overflow-hidden",children:(0,d.jsx)("div",{className:(0,f.Z)("flex-auto flex justify-end bg-gray-700/50 border-y border-gray-500/30 pr-4",j===b.length-1?"rounded-tl border-l":"")})}),c?(0,d.jsx)("div",{className:"absolute top-2 right-4 h-8 flex",children:c({selectedIndex:j})}):null]}),(0,d.jsx)(e.O.Panels,{className:"flex overflow-auto",children:b.map(function(a){return(0,d.jsx)(e.O.Panel,{className:"flex-none min-w-full p-5 text-sm leading-6 text-gray-50 ligatures-none",children:a.props.children},a.props.filename)})})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.translucent,i=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl",void 0!==h&&h&&"dark:bg-gray-800/50"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),i&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:i})]})]})}}},function(a){a.O(0,[3430,6401,4756,6852,4713,2474,9566,9774,2888,179],function(){return a(a.s=99460)}),_N_E=a.O()}])