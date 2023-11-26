"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[157],{157:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r,i,a,c,s=t(439),u=t(87),o=t(168),p=t(686),d=p.Z.div(r||(r=(0,o.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),l=p.Z.img(i||(i=(0,o.Z)(["\n"]))),h=p.Z.div(a||(a=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),f=p.Z.div(c||(c=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 20px;\n"]))),v=t(184);function x(n){var e=n.image,t=n.title,r=n.description,i=n.genres,a=n.rating,c=null===i||void 0===i?void 0:i.flatMap((function(n){return n.name})),s=Math.round(10*a);return(0,v.jsxs)(d,{children:[(0,v.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/w500").concat(e),alt:t}),(0,v.jsxs)(h,{children:[(0,v.jsx)("h2",{children:t}),(0,v.jsx)("p",{children:"User Score: ".concat(s,"%")}),(0,v.jsxs)("div",{children:[" ",(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:r})]}),(0,v.jsxs)("div",{children:[" ",(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:null===c||void 0===c?void 0:c.join(", ")})]}),(0,v.jsx)("h4",{children:"Additional information"}),(0,v.jsxs)(f,{children:[(0,v.jsx)(u.rU,{to:"cast",children:"Cast"}),(0,v.jsx)(u.rU,{to:"reviews",children:"Reviews"})]})]})]})}var g=t(791),m=t(689),j=t(468);function w(){var n,e,t=(0,g.useState)({}),r=(0,s.Z)(t,2),i=r[0],a=r[1],c=(0,m.UO)().movieId,o=(0,m.TH)(),p=(0,g.useRef)(null!==(n=null===(e=o.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");(0,g.useEffect)((function(){(0,j.Pg)(c).then((function(n){a(n)}))}),[c]);var d=i.poster_path,l=i.title,h=i.name,f=i.overview,w=i.genres,Z=i.vote_average;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(u.rU,{to:p.current,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f"}),i&&Object.keys(i).length>0?(0,v.jsx)(x,{image:d,title:l||h,description:f,genres:w,rating:Z}):(0,v.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."}),(0,v.jsx)(m.j3,{})]})}},468:function(n,e,t){t.d(e,{Pg:function(){return h},Pt:function(){return v},TP:function(){return g},aO:function(){return d}});var r=t(861),i=t(687),a=t.n(i),c=t(340),s="https://api.themoviedb.org/3/trending/all/day?language=en-US",u="https://api.themoviedb.org/3/movie/",o="https://api.themoviedb.org/3/search/movie?query=",p={params:{api_key:"3c41cda8ab41cc0930ce9dd36c8f89cb"}};function d(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(s,p).then((function(n){return n.data}));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(u+e,p).then((function(n){return n.data}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(o+e,p).then((function(n){return n.data}));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n,e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e,t){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get(u+e+"/".concat(t),p).then((function(n){return n.data}));case 2:return r=n.sent,n.abrupt("return",r);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=157.23fe6eb9.chunk.js.map