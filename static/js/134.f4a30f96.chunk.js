"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[134],{440:function(t,n,r){r.d(n,{Z:function(){return a}});var e=r(87),u=r(184);function a(t){var n=t.id,r=t.title,a=t.name,c=t.path,i=t.propState;return(0,u.jsx)("li",{children:(0,u.jsx)(e.rU,{state:i,to:c,children:null!==r&&void 0!==r?r:a})},n)}},134:function(t,n,r){r.r(n),r.d(n,{default:function(){return p}});var e=r(439),u=r(440),a=r(791),c=r(87),i=r(689),o=r(468),s=r(184);function p(){var t=(0,c.lr)(),n=(0,e.Z)(t,2),r=n[0],p=n[1],f=(0,a.useState)([]),h=(0,e.Z)(f,2),l=h[0],d=h[1],v=(0,i.TH)(),m=r.get("query"),g=(0,a.useRef)(!0);(0,a.useEffect)((function(){m&&""!==m&&g.current&&((0,o.Pt)(m.trim()).then((function(t){return d(t.results)})),g.current=!1)}),[m]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("form",{onSubmit:function(t){t&&t.preventDefault(),""!==m.trim()&&(0,o.Pt)(m.trim()).then((function(t){return d(t.results)}))},children:[(0,s.jsx)("input",{type:"text",onChange:function(t){g.current&&(g.current=!1);var n=t.currentTarget.value;if(""===n)return p({});p({query:n})},value:null!==m&&void 0!==m?m:""}),(0,s.jsx)("button",{type:"submit",children:"Search"})]}),(0,s.jsx)("ul",{children:l.map((function(t){var n=t.id,r=t.title,e=t.name;return(0,s.jsx)(u.Z,{propState:{from:v},path:"".concat(n),id:n,title:r,name:e},n)}))})]})}},468:function(t,n,r){r.d(n,{Pg:function(){return l},Pt:function(){return v},TP:function(){return g},aO:function(){return f}});var e=r(861),u=r(687),a=r.n(u),c=r(340),i="https://api.themoviedb.org/3/trending/all/day?language=en-US",o="https://api.themoviedb.org/3/movie/",s="https://api.themoviedb.org/3/search/movie?query=",p={params:{api_key:"3c41cda8ab41cc0930ce9dd36c8f89cb"}};function f(){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(i,p).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return(d=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(o+n,p).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(a().mark((function t(n){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+n,p).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(a().mark((function t(n,r){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(o+n+"/".concat(r),p).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=134.f4a30f96.chunk.js.map