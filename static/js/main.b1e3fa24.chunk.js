(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(4),s=n.n(o),r=n(2),c=n(5),i=n(6),a=n(8),l=n(7),u=n(1),h=n.n(u),d=(n(13),n(14),n(0)),b=function(t){var e=t.goods;return Object(d.jsx)("ul",{children:e.map((function(t){return Object(d.jsx)("li",{className:"goods__li",children:t},t)}))})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],g=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(c.a)(this,n);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(t=e.call.apply(e,[this].concat(s))).state={goods:j,isShowed:!1},t.showGoods=function(){t.setState({isShowed:!0})},t.revers=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).reverse()}}))},t.sortAlplabetically=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortByLength=function(){t.setState((function(t){return{goods:Object(r.a)(t.goods).sort((function(t,e){return t.length-e.length}))}}))},t.reset=function(){t.setState((function(){return{goods:j,isShowed:!0}}))},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.goods;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"App"}),this.state.isShowed?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(b,{goods:t}),Object(d.jsx)("button",{type:"button",onClick:this.revers,children:"Reverse"}),Object(d.jsx)("button",{type:"button",onClick:this.sortAlplabetically,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",onClick:this.sortByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",onClick:this.reset,children:"Reset"})]}):Object(d.jsx)("button",{type:"button",onClick:this.showGoods,children:"Start"})]})}}]),n}(h.a.Component),p=g;s.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.b1e3fa24.chunk.js.map