"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{387:function(t,n,r){r.r(n),r.d(n,{default:function(){return l}});var e,a,u=r(439),c=r(791),i=r(689),s=r(468),o=r(168),p=r(686),f=p.Z.ul(e||(e=(0,o.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n"]))),h=p.Z.img(a||(a=(0,o.Z)(["\n  width: 200px;\n"]))),d=r(184);function l(){var t=(0,c.useState)([]),n=(0,u.Z)(t,2),r=n[0],e=n[1],a=(0,i.UO)().movieId;return(0,c.useEffect)((function(){(0,s.TP)(a,"credits").then((function(t){return e(t.cast)}))}),[a]),(0,d.jsx)(f,{children:r.length>0?r.map((function(t){var n=t.cast_id,r=t.profile_path,e=t.character,a=t.name;return(0,d.jsxs)("li",{children:[(0,d.jsx)(h,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(r),alt:e}),(0,d.jsx)("p",{children:a}),(0,d.jsxs)("p",{children:["Character: ",e]})]},n)})):(0,d.jsx)("h4",{children:"There is no cast information available"})})}},468:function(t,n,r){r.d(n,{Pg:function(){return d},Pt:function(){return v},TP:function(){return g},aO:function(){return f}});var e=r(861),a=r(687),u=r.n(a),c=r(340),i="https://api.themoviedb.org/3/trending/all/day?language=en-US",s="https://api.themoviedb.org/3/movie/",o="https://api.themoviedb.org/3/search/movie?query=",p={params:{api_key:"3c41cda8ab41cc0930ce9dd36c8f89cb"}};function f(){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(i,p).then((function(t){return t.data}));case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+n,p).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function t(n){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(o+n,p).then((function(t){return t.data}));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t,n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function t(n,r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get(s+n+"/".concat(r),p).then((function(t){return t.data}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=387.eb9257eb.chunk.js.map