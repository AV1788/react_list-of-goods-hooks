(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),r=n.n(c),o=n(6),a=n(8),l=n(1),i=(n(13),n(14),n(4)),u=n.n(i),h=n(0),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.alphabet="alphabet",t.length="length",t.reverse="reverse",t.none=""}(s||(s={}));var g=function(){var t=Object(l.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(l.useState)(!1),i=Object(o.a)(r,2),g=i[0],j=i[1],p=function(t,e){var n=e.sortText,c=e.isReverse,r=Object(a.a)(t);return n&&r.sort((function(t,e){switch(n){case s.alphabet:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),n&&c&&(r.sort((function(t,e){switch(n){case s.alphabet:return t.localeCompare(e);case s.length:return t.length-e.length;default:return 0}})),r=r.reverse()),""===n&&c&&(r=b.reverse()),r}(b,{sortText:n,isReverse:g});return Object(h.jsxs)("div",{className:"section content",children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{onClick:function(){return c(s.alphabet)},type:"button",className:u()("button","is-info",{"is-light":n!==s.alphabet}),children:"Sort alphabetically"}),Object(h.jsx)("button",{onClick:function(){return c(s.length)},type:"button",className:u()("button","is-success",{"is-light":n!==s.length}),children:"Sort by length"}),Object(h.jsx)("button",{onClick:function(){j(!g)},type:"button",className:u()("button","is-warning",{"is-light":!0!==g}),children:"Reverse"}),(n||g)&&Object(h.jsx)("button",{onClick:function(){c(""),j(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(h.jsx)("ul",{children:p.map((function(t){return Object(h.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.28f6e943.chunk.js.map