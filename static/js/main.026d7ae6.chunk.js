(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(4),o=n.n(i),a=(n(10),n(3)),b=function(e){var t=e.id,n=e.name,r=e.email;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:n}),Object(c.jsx)("p",{children:r})]})]})},h=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,t){return Object(c.jsx)(b,{id:e.id,name:e.name,email:e.email},t)}))})},j=function(e){var t=e.searchChange;return Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots...",onChange:t})})},d=function(e){return Object(c.jsx)("div",{style:{overflowY:"scroll",overflowX:"hidden",height:"800px",marginTop:"2rem",paddingTop:"1rem"},children:e.children})};n(11);var l=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),o=Object(a.a)(i,2),b=o[0],l=o[1];Object(r.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){s(e)}))}),[]);var u=n.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));return Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(c.jsx)(j,{searchChange:function(e){l(e.target.value)}}),Object(c.jsx)(d,{children:Object(c.jsx)(h,{robots:u})})]})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(12);o.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(l,{})}),document.getElementById("root")),u()}},[[13,1,2]]]);
//# sourceMappingURL=main.026d7ae6.chunk.js.map