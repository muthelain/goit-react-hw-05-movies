"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(t,n,e){e.r(n),e.d(n,{default:function(){return s}});var r=e(439),u=e(791),a=e(689),c=e(468),i=e(184);function s(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],s=n[1],o=(0,a.UO)().movieId;return(0,u.useEffect)((function(){(0,c.TP)(o,"reviews").then((function(t){return s(t.results)}))}),[o]),(0,i.jsxs)("ul",{children:[e.length>0&&e.map((function(t){var n=t.author,e=t.content;return(0,i.jsxs)("li",{children:[(0,i.jsx)("h4",{children:n}),(0,i.jsx)("p",{children:e})]},n)})),0===e.length&&(0,i.jsx)("h4",{children:"There is no overviews"})]})}},468:function(t,n,e){e.d(n,{Pg:function(){return d},Pt:function(){return v},TP:function(){return m},aO:function(){return f}});var r=e(861),u=e(687),a=e.n(u),c=e(340),i="https://api.themoviedb.org/3/trending/all/day?language=en-US",s="https://api.themoviedb.org/3/movie/",o="https://api.themoviedb.org/3/search/movie?query=",p={params:{api_key:"3c41cda8ab41cc0930ce9dd36c8f89cb"}};function f(){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(i,p).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+n,p).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(o+n,p).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t,n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(n,e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+n+"/".concat(e),p).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=186.9ef8433a.chunk.js.map