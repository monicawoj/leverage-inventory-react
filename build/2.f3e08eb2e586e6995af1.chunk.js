(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/containers/UserResultsPage/index.js":function(e,o,n){"use strict";n.r(o);var t=n("./node_modules/react/index.js"),r=n.n(t),i=(n("./node_modules/prop-types/index.js"),n("./node_modules/styled-components/dist/styled-components.browser.esm.js")),a=i.a.div.withConfig({displayName:"styles__StyledDescriptionHolder",componentId:"zpx7hd-0"})(["width:100%;p{font-size:16px;margin-bottom:20px;}"]),s=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),l=function(e){var o=e.links,n=o.slice(0,o.length-1).map(function(e){return s("span",{},e.name,s("a",{href:e.url},void 0,e.name)," |")}),t=o[o.length-1],r=s("span",{},t.name,s("a",{href:t.url},void 0,t.name));return s("p",{},void 0,n,r)},c=[{name:"Agency",url:"http://levinventory.wpengine.com/?page_id=42"},{name:"Allocentrism",url:"http://levinventory.wpengine.com/?page_id=34"},{name:"Coalitions",url:"http://levinventory.wpengine.com/?page_id=38"},{name:"Ethos",url:"http://levinventory.wpengine.com/?page_id=31"},{name:"Exchange",url:"http://levinventory.wpengine.com/?page_id=35"},{name:"Intentionality",url:"http://levinventory.wpengine.com/?page_id=40"},{name:"Logos",url:"http://levinventory.wpengine.com/?page_id=33"},{name:"Might",url:"http://levinventory.wpengine.com/?page_id=36"},{name:"Networks",url:"http://levinventory.wpengine.com/?page_id=37"},{name:"Pathos",url:"http://levinventory.wpengine.com/?page_id=32"},{name:"Situation Awareness",url:"http://levinventory.wpengine.com/?page_id=41"},{name:"Team-building",url:"http://levinventory.wpengine.com/?page_id=39"}],d=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),p=d("p",{},void 0,"Your Leverage Inventory results are displayed in two views: ",d("strong",{},void 0,"Absolute")," and ",d("strong",{},void 0,"Percentile"),". Both views translate your influence activity into ",d("a",{href:"https://leverageinventory.com/about/influence-tactics/"},void 0,"12 influence tactics"),":"),u=d(l,{links:c}),f=d("p",{},void 0,"Each influence tactic maps to a unique subset of assessment questions, with individual scores that make up an average. The ",d("strong",{},void 0,"Absolute")," view reflects your average score for each influence tactic (1 = Rarely or Never, 2 = Occasionally, 3 = Often, 4 = Almost Always.) The ",d("strong",{},void 0,"Percentile")," view reflects how much you favor each tactic compared to other groups of people. The default comparison group for this view is your immediate class. For example, if you scored in the 80th percentile for a tactic, you use that tactic more than 80% of your classmates."),m=d("p",{},void 0,"You may notice the tick marks on each axis are not spaced equally. This is intentional. If the tick marks were spaced equally on the axis, the corresponding area for each score would not be proportionate, and thus would create a skewed view. Instead, the tick marks are spaced on the axis so that the areas of different scores are directly proportionate."),v=function(e){var o=e.children;return d(a,{},void 0,p,u,f,o,m)},y=n("./node_modules/react-router-dom/index.js"),h=i.a.div.withConfig({displayName:"styles__StyledHeader",componentId:"gjedsy-0"})(["height:60px;display:flex;flex-direction:row;justify-content:flex-end;align-items:center;a,button{font-size:16px;text-transform:uppercase;border-radius:5px;border-color:rgb(216,216,216) rgb(209,209,209) rgb(186,186,186);border-style:solid;border-width:1px;padding:10px;text-align:center;cursor:pointer;text-decoration:none;&:hover{color:mediumpurple;background-color:#f9f8fb;}}"]),g=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),b=g(h,{},void 0,g(y.Link,{to:"/print",target:"_blank"},void 0,"Print Results")),w=function(){return b},x=i.a.div.withConfig({displayName:"styles__StyledDiv",componentId:"q3dmov-0"})(["fieldset{width:300px;}.options{display:flex;flex-direction:row;align-items:center;justify-content:center;div{padding:10px;}.radio{display:flex;flex-direction:row;align-items:center;justify-content:center;label{text-transform:uppercase;}}}"]),S=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),_=S("legend",{},void 0,"Select a comparison group"),k=S("div",{},void 0,"vs."),N=function(e){var o=e.groups,n=e.selectedGroup,t=e.changeComparisonGroup;console.log(n);var r=o.map(function(e){return S("label",{className:"radio column"},e.name,S("input",{type:"radio",name:e.name,onChange:function(){return t(e.name,e.submissions)},checked:e.name===n.name}),e.name.toUpperCase())});return S(x,{},void 0,S("fieldset",{},void 0,_,S("div",{className:"options"},void 0,k,S("div",{className:"control columns"},void 0,r))),S("div",{className:"submissions-holder"},void 0,"This group contains: ",S("span",{},void 0,n.submissions)," submissions."))},j=i.a.div.withConfig({displayName:"styles__StyledToggleHolder",componentId:"sc-132g888-0"})(["width:300px;height:100px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center;button{border:none;padding:5px;font-size:16px;cursor:pointer;&:hover{color:mediumpurple;}}button:first-of-type{border-right:1px solid black;}"]),A=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),C=function(e){var o=e.view,n=e.changeView,t=e.user,i=e.comparisonGroup,a=e.changeComparisonGroup,s={groups:t.groups.map(function(e){return{name:e,submissions:t.group_avgs[e].Submissions}}),selectedGroup:i,changeComparisonGroup:a},l="absolute"===o?null:r.a.createElement(N,s);return A("form",{},void 0,A(j,{},void 0,A("button",{className:"absolute",onClick:function(e){e.preventDefault(),n("absolute")}},void 0,"Absolute"),A("button",{className:"percentile",onClick:function(e){e.preventDefault(),n("percentile")}},void 0,"Percentile")),l)},$=n("./app/components/ColorLegend/index.js"),P=n("./app/components/OpenEndedResponses/index.js"),G=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),D=G("footer",{},void 0,"Created by ",G("a",{href:"http://monicawojciechowski.com"},void 0,"Monica Wojciechowski"),", 2018."),I=function(){return D},z=n("./app/components/RadialBarChart/index.js"),E=n("./app/components/HorizontalBarChart/index.js"),T=n("./app/utils/parseData.js"),R=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),q=R("h2",{className:"has-text-centered is-size-3"},void 0,"Self Assessment"),L=function(e){var o=e.data,n=e.view,r=e.comparisonGroup,i=Object(T.a)(o,n,r.name),a=i.selfData,s=i.sortedSelfData,l=void 0;return l="absolute"===n?R(t.Fragment,{},void 0,R("div",{className:"column is-half"},void 0,R(E.a,{data:s})),R("div",{className:"column is-half"},void 0,R(z.a,{data:a,type:n}))):R("div",{className:"column"},void 0,R(z.a,{data:a,type:n})),R("section",{className:"section"},void 0,q,R("div",{className:"columns is-multiline"},void 0,l))},O=i.a.div.withConfig({displayName:"styles__StyledBox",componentId:"h8wpib-0"})(["margin-bottom:0 !important;"]),B=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),F=B("h2",{className:"has-text-centered is-size-3"},void 0,"Self Assessment"),H=B("h2",{className:"has-text-centered is-size-3"},void 0,"360 Assessment"),V=B("h2",{className:"has-text-centered is-size-3"},void 0,"Self Assessment"),J=B("h2",{className:"has-text-centered is-size-3"},void 0,"360 Assessment"),M=function(e){var o=e.data,n=e.view,r=e.comparisonGroup,i=Object(T.a)(o,n,r.name),a=i.selfData,s=i.sortedSelfData,l=i.thirdPartyData,c=i.sortedThirdPartyData,d=void 0;return d="absolute"===n?B(t.Fragment,{},void 0,B(O,{className:"column is-half box"},void 0,F,B(E.a,{data:s}),B(z.a,{data:a,type:n})),B(O,{className:"column is-half box"},void 0,H,B(E.a,{data:c}),B(z.a,{data:l,type:n}))):B(t.Fragment,{},void 0,B(O,{className:"column is-half box"},void 0,V,B(z.a,{data:a,type:n})),B(O,{className:"column is-half box"},void 0,J,B(z.a,{data:l,type:n}))),B("section",{className:"section"},void 0,B("div",{className:"columns is-multiline"},void 0,d))},U=n("./app/components/LoadingIndicator/index.js"),Y=n("./app/components/ErrorIndicator/index.js"),W=i.a.div.withConfig({displayName:"styles__StyledDiv",componentId:"sc-1uofczm-0"})(["display:flex;justify-content:space-between;align-items:center;"]),K=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(o,n,t,r){var i=o&&o.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&i)for(var s in i)void 0===n[s]&&(n[s]=i[s]);else n||(n=i||{});if(1===a)n.children=r;else if(a>1){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:e,type:o,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}}(),Q=K(U.a,{}),X=K(Y.a,{}),Z=K(w,{}),ee=K($.a,{}),oe=K(P.a,{}),ne=K(I,{}),te=function(e){var o=e.view,n=e.user,t=e.loading,i=e.error,a=e.changeView,s=e.comparisonGroup,l=e.changeComparisonGroup,c=n.hasEnough360Ratings,d={view:o,user:n,changeView:a,changeComparisonGroup:l,comparisonGroup:s},p=void 0;return p=K(c?M:L,{data:n,view:o,comparisonGroup:s}),t?Q:i?X:K("div",{},void 0,Z,K(v,{},void 0,K(W,{},void 0,r.a.createElement(C,d),ee),p),oe,ne)};n.d(o,"default",function(){return te})}}]);