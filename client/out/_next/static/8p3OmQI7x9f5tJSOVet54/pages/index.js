(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{IxfT:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),i=a("LCX2"),r=a("i9Dg"),l=c.a.createElement;t.a=function(e){var t=e.rowTitle,a=void 0===t?"Other articles":t,c=e.alreadyUsedArticle,s=Object(n.useState)([]),o=s[0],u=s[1],f=Object(n.useContext)(i.a).articleContext.articles;return Object(n.useEffect)((function(){if(f.length){for(var e=[];e.length<3;){var t=Math.floor(Math.random()*f.length);e.includes(f[t])||f[t]===c&&c||e.push(f[t])}u(e)}}),[f,c]),l("section",{className:"other-articles"},l("h1",{className:"other-articles__title"},a),l("div",{className:"other-articles-grid"},o.map((function(e){return l(r.a,{key:e.id,article:e})}))))}},LCX2:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),i=a("hfKm"),r=a.n(i),l=a("2Eek"),s=a.n(l),o=a("XoMD"),u=a.n(o),f=a("Jo+v"),m=a.n(f),h=a("4mXO"),v=a.n(h),d=a("pLtp"),p=a.n(d),b=a("vYYK");function N(e,t){var a=p()(e);if(v.a){var n=v()(e);t&&(n=n.filter((function(t){return m()(e,t).enumerable}))),a.push.apply(a,n)}return a}var _={articles:[]},g=function(e,t){switch(t.type){case"GET_ARTICLES":return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach((function(t){Object(b.a)(e,t,a[t])})):u.a?s()(e,u()(a)):N(Object(a)).forEach((function(t){r()(e,t,m()(a,t))}))}return e}({},e,{articles:t.payload});default:return e}};a.d(t,"a",(function(){return O}));var w=c.a.createElement,O=Object(n.createContext)();t.b=function(e){var t=Object(n.useReducer)(g,_),a=t[0],c=t[1];return w(O.Provider,{value:{articleContext:a,dispatch:c}},e.children)}},RNiq:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),c=a.n(n),i=a("CafY"),r=a("IxfT"),l=a("cOG4"),s=a.n(l),o=a("YNR7"),u=a("YFqc"),f=a.n(u),m=a("LCX2"),h=a("8Kt/"),v=a.n(h),d=c.a.createElement;t.default=function(){var e=Object(n.useContext)(o.a).authContext.isAuth;Object(n.useContext)(m.a).articleContext.articles;return d(i.a,null,d(v.a,null,d("title",null,"NYT Articles | Home")),d("div",{className:"home-page"},d("div",{className:"home-page-baner"},d("img",{src:s.a,className:"home-page-baner__img"}),d("div",{className:"baner-content"},d("h1",{className:"baner-content__title"},"Welcome on the ",d("b",null,"New York Times Articles")," page!"))),d("section",{className:"home-page-info container"},e?d(r.a,{rowTitle:"Recent articles"}):d("h1",{className:"home-page-info__title"},"To see all available articles please"," ",d(f.a,{href:"/login"},d("a",{className:"home-page-info__link"},"Log In")),"!"))))}},cOG4:function(e,t){e.exports="/_next/static/images/baner-718cb1c0c215998c370ee99ba55d90fe.jpg"},i9Dg:function(e,t,a){"use strict";var n=a("q1tI"),c=a.n(n),i=a("YFqc"),r=a.n(i),l=c.a.createElement;t.a=function(e){var t=e.article;return l(r.a,{href:"/article/[id]",as:"/article/".concat(t.id)},l("a",{className:"link-reset"},l("div",{className:"article-tile"},l("img",{src:t.imageUrl,alt:t.title,className:"article-tile__img"}),l("div",{className:"article-tile-content"},l("h1",{className:"article-tile__title"},t.title),l("p",{className:"article-tile__byline"},t.byLine)))))}},vlRD:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a("RNiq")}])}},[["vlRD",1,2,0,3,4]]]);