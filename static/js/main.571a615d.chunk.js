(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var n=o(3),s=o.n(n),c=o(4),r=o(5),i=o(7),a=o(6),l=o(1),u=o.n(l),h=(o(12),o(13),o(0)),b=function(t){var e=t.goods;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("li",{className:"li",children:t},t)}))})},d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(o,t);var e=Object(a.a)(o);function o(){var t;Object(c.a)(this,o);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))).state={goods:[].concat(d),isShowed:!1},t.showGoods=function(){t.setState({isShowed:!0})},t.revers=function(){t.setState({goods:[].concat(d).reverse()})},t.sortAlplabetically=function(){t.setState({goods:[].concat(d).sort((function(t,e){return t.localeCompare(e)}))})},t.reset=function(){t.setState({goods:[].concat(d)})},t.sortByLength=function(){t.setState({goods:[].concat(d).sort((function(t,e){return t.length-e.length}))})},t}return Object(r.a)(o,[{key:"render",value:function(){var t=this.state.goods;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"App"}),this.state.isShowed&&Object(h.jsx)(b,{goods:t}),!this.state.isShowed&&Object(h.jsx)("button",{type:"button",onClick:this.showGoods,children:"Start"}),Object(h.jsx)("button",{type:"button",onClick:this.revers,children:"Reverse"}),Object(h.jsx)("button",{type:"button",onClick:this.sortAlplabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"}),Object(h.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"})]})}}]),o}(u.a.Component),p=j;s.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.571a615d.chunk.js.map