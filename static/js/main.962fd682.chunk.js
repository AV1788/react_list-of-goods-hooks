(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r,s=n(7),c=n.n(s),o=n(6),a=n(8),i=n(1),l=(n(13),n(14),n(4)),u=n.n(l),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function j(e,t){var n=t.sortText,s=t.reverseText,c=Object(a.a)(e);return n&&c.sort((function(e,t){switch(n){case r.alphabet:return e.localeCompare(t);case r.length:return e.length-t.length;default:return 0}})),n!==r.reverse&&s===r.reverse?c=c.reverse():s===r.reverse?c=h.reverse():n===r.alphabet&&s===r.reverse&&(c=j(c,{sortText:n,reverseText:s})),c}!function(e){e.alphabet="alphabet",e.length="length",e.reverse="reverse"}(r||(r={}));var p=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(i.useState)(""),a=Object(o.a)(c,2),l=a[0],p=a[1],d=j(h,{sortText:n,reverseText:l});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return s(r.alphabet)},type:"button",className:u()("button","is-info",{"is-light":n!==r.alphabet}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return s(r.length)},type:"button",className:u()("button","is-success",{"is-light":n!==r.length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){p(l?"":r.reverse)},type:"button",className:u()("button","is-warning",{"is-light":l!==r.reverse}),children:"Reverse"}),(n||l)&&Object(b.jsx)("button",{onClick:function(){s(""),p("")},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:d.map((function(e){return Object(b.jsx)("li",{"data-cy":"Good",children:e},e)}))})]})};c.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.962fd682.chunk.js.map