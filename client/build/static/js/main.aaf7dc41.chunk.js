(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},118:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},208:function(e,t){},226:function(e,t,a){},227:function(e,t,a){},228:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){},231:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(35),o=a.n(c),l=a(3),u=a(4),i=a(6),s=a(5),m=a(7),d=a(17),p=(a(95),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),f=a(8),E=a(31),h=a.n(E),b=a(45),v=a(20),y=a(23),g=a(46),O=a.n(g),P="https://poe-bookstore.herokuapp.com/api";function C(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?C(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):C(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var N=function(e){var t=e.products;return t.data?t.data.map(function(e){var a=t.cart.find(function(t){return t.productId===e.id});return j({},e,{quantity:a?a.quantity:0})}):t.data},T=function(e){return e.products.request},k=function(e){var t=e.products;return Math.ceil(t.amount/t.productsPerPage)},w=function(e){return e.products.sort},q=function(e){return e.products.cart},_=function(e){return e.products.store},D=function(e){return e.products.promotion},A=function(e){var t=e.products,a=0,n=!0,r=!1,c=void 0;try{for(var o,l=t.cart[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){a+=o.value.quantity}}catch(u){r=!0,c=u}finally{try{n||null==l.return||l.return()}finally{if(r)throw c}}return a},S=function(e){return"app/".concat("products","/").concat(e)},x=S("LOAD_PRODUCT"),I=S("START_REQUEST"),R=S("END_REQUEST"),U=S("ERROR_REQUEST"),L=S("RESET_REQUEST"),$=S("LOAD_PRODUCTS_BY_PAGE"),M=S("SORT_PRODUCTS"),Q=S("ADD_CART_PRODUCT"),B=S("REMOVE_CART_PRODUCT"),F=S("DELETE_CART_PRODUCT"),H=S("ADD_DISCOUNT_CODE"),W=S("CART_PAY"),Y=function(e){return{payload:e,type:x}},Z=function(){return{type:I}},z=function(){return{type:R}},G=function(e){return{error:e,type:U}},J=function(e){return{payload:e,type:$}},V=function(e){return{payload:e,type:Q}},K=function(e){return{payload:e,type:B}},X=function(e){return{payload:e,type:F}},ee={data:[{id:"1",title:"",author:"",extraInfo:"",image:null,description:"",price:0}],request:{success:!1,error:null,pending:!1},cart:[],sort:"TITLE_ASC",promotion:0,store:{}},te=function(e,t){var a=!0,n=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;if(l.productId===t)return l.quantity++,Object(v.a)(e)}}catch(u){n=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return e.push({productId:t,quantity:1}),e},ae=function(e,t){var a=!0,n=!1,r=void 0;try{for(var c,o=e[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;if(l.productId===t&&l.quantity>0)return l.quantity--,Object(v.a)(e)}}catch(u){n=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return e},ne=function(e,t){return e.splice(e.findIndex(function(e){return e.productId===t}),1),Object(v.a)(e)},re=function(e,t){var a=!0,n=!1,r=void 0;try{for(var c,o=t[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var l=c.value;e[l.id]=l}}catch(u){n=!0,r=u}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}return j({},e)};a(116),a(117);var ce=function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Ready to read?")},oe=a(12),le=(a(118),function(e){var t=e.links,a=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(oe.b,{className:a.pathname===e.path?"active":"",to:e.path},e.title))}))}),ue=Object(d.f)(function(e){return r.a.createElement(le,e)}),ie=a(86),se=a(87),me=function(e){return[{path:"/",title:"Home"},{path:"/faq",title:"FAQ"},{path:"/Terms of use",title:"Terms of Use"},{path:"/contact",title:"Contact"},{path:"/cart",title:r.a.createElement("span",null,r.a.createElement(se.a,{icon:ie.a})," ",e>0?r.a.createElement("span",null,"(",e,")"):null)}]},de=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.count;return r.a.createElement("nav",{className:"navbar"},r.a.createElement(ce,null),r.a.createElement(ue,{links:me(e)}))}}]),t}(r.a.Component),pe=Object(f.b)(function(e){return{count:A(e)}},function(e){return{}})(de),fe=(a(122),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.count;return r.a.createElement("nav",{className:"footer"},r.a.createElement("p",null,"All rights reserved Agnieszka Matyja 2019"),r.a.createElement(ue,{links:me(e)}))}}]),t}(r.a.Component)),Ee=Object(f.b)(function(e){return{count:A(e)}},function(e){return{}})(fe),he=(a(123),function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement(pe,null),r.a.createElement("div",{className:"children"},t),r.a.createElement(Ee,null)))});a(124),a(125);var be=function(e,t){return e.length<1?"Error":e.lenght<=t?e:e.substr(0,e.lastIndexOf(" ",t))+"..."},ve=a(24),ye=(a(126),function(e){var t=e.children,a=Object(ve.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},a,{className:"small-title"}),t)}),ge=function(e){var t=e.id,a=e.title,n=e.author,c=e.description,o=e.image,l=e.quantity,u=e.extraInfo,i=e.price,s=e.addCartProduct,m=e.removeCartProduct,d=e.deleteCartProduct;return r.a.createElement("article",{className:"product-in-cart relat"},r.a.createElement(oe.b,{to:"/products/"+t},r.a.createElement("div",{className:"first"},r.a.createElement("img",{src:"data:image/jpeg;base64,".concat(o),alt:"cover"}),r.a.createElement("span",{className:"extra"},u),r.a.createElement("br",null)),r.a.createElement("div",{className:"second"},r.a.createElement(ye,null,a),r.a.createElement("p",{className:"author"},n),r.a.createElement("p",{className:"description"},be(c,250)),r.a.createElement("p",{className:"price"},"Price: $",i))),r.a.createElement("p",{className:"quantity"},r.a.createElement("span",null,"Quantity: "),r.a.createElement("button",{className:"remove-button",onClick:function(){return m(t)}},"-"),r.a.createElement("span",null,l),r.a.createElement("button",{className:"add-button",onClick:function(){return s(t)}},"+"),r.a.createElement("button",{className:"delete-button",onClick:function(){return d(t)}},"Remove product")))},Oe=a(10),Pe=(a(127),function(e){var t=e.id,a=e.title,n=e.author,c=(e.description,e.image),o=e.quantity,l=e.extraInfo,u=e.price,i=e.addCartProduct;e.removeCartProduct,e.deleteCartProduct;return r.a.createElement("article",{className:"product-summary relat".concat(o>0?" bought":"")},r.a.createElement(oe.b,{to:"/products/"+t},r.a.createElement("div",{className:"first"},r.a.createElement("img",{src:"data:image/jpeg;base64,".concat(c),alt:"cover"}),r.a.createElement("span",{className:"extra"},l),r.a.createElement("br",null)),r.a.createElement("div",{className:"second"},r.a.createElement(ye,null,a),r.a.createElement("p",{className:"author"},n),r.a.createElement("p",{className:"price"},"Price: $",u),o>0?r.a.createElement("p",{className:"quantity"},"Quantity: ",o):null)),0===o?r.a.createElement("button",{onClick:function(){i(t),Oe.ToastsStore.warning("Item added to the cart.")},className:"addToCart"},"Add to cart"):null)}),Ce=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.products,a=e.inCart,n=e.addCartProduct,c=e.removeCartProduct,o=e.deleteCartProduct;return r.a.createElement("div",null,r.a.createElement("section",{className:"products-list"},t.map(function(e){return a?r.a.createElement(ge,Object.assign({key:e.id,addCartProduct:n,removeCartProduct:c,deleteCartProduct:o},e)):r.a.createElement(Pe,Object.assign({key:e.id,addCartProduct:n,removeCartProduct:c,deleteCartProduct:o},e))})))}}]),t}(r.a.Component),je=a(37),Ne=(a(179),function(){return r.a.createElement(je.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),Te=a(25),ke=(a(180),function(e){var t=e.variant,a=void 0===t?"":t,n=e.children,c=Object(ve.a)(e,["variant","children"]);return r.a.createElement(je.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(a)}),function(){switch(a){case"info":return r.a.createElement(Te.c,null);case"success":return r.a.createElement(Te.a,null);case"warning":case"error":return r.a.createElement(Te.b,null);default:return r.a.createElement(Te.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},n)))}),we=(a(181),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={presentPage:a.props.initialPage||1},a.changePage=function(e){var t=a.props.onPageChange;a.setState({presentPage:e}),t(e)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.pages,t=this.state.presentPage,a=this.changePage;return r.a.createElement("div",{className:"pagination"},r.a.createElement("ul",{className:"pagination__list"},t>1?r.a.createElement("li",{key:"less",onClick:function(){a(t-1)}},r.a.createElement("a",{className:"pagination__list__item"},"<")):null,Object(v.a)(Array(e||[])).map(function(e,n){return r.a.createElement("li",{key:++n,onClick:function(){a(n)},className:"pagination__list__item".concat(n===t?" pagination__list__item--active":"")},n)}),t<e?r.a.createElement("li",{key:"more",onClick:function(){a(t+1)}},r.a.createElement("a",{className:"pagination__list__item"},">")):null))}}]),t}(r.a.Component)),qe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).loadProductsPage=function(e){var t=a.props;(0,t.loadProductsByPage)(e,t.productsPerPage||6,t.sort)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.loadProductsPage(1)}},{key:"render",value:function(){var e=this.props,t=e.products,a=e.request,n=e.initialPage,c=e.pages,o=e.addCartProduct,l=e.removeCartProduct,u=e.deleteCartProduct;return null!==t||a.pending||a.error?!a.pending&&a.success&&null!==t&&t.length>0?r.a.createElement("div",null,r.a.createElement(Ce,{products:t,inCart:!1,addCartProduct:o,removeCartProduct:l,deleteCartProduct:u}),r.a.createElement(we,{pages:c,onPageChange:this.loadProductsPage,initialPage:n||1})):a.pending||null===a.success?r.a.createElement(Ne,null):a.pending||null===a.error||void 0===a.error?a.pending||!a.success||null!==t&&0!==t.length?r.a.createElement(Ne,null):r.a.createElement(ke,{variant:"info"},"No products"):r.a.createElement(ke,{variant:"error"},a.error):(this.loadProductsPage(n),r.a.createElement(Ne,null))}}]),t}(r.a.Component),_e=Object(f.b)(function(e){return{products:N(e),cart:q(e),request:T(e),pages:k(e),initialPage:(t=e,t.products.presentPage),sort:w(e)};var t},function(e){return{loadProductsByPage:function(t,a,n){return e(function(e,t,a){return function(){var n=Object(b.a)(h.a.mark(function n(r){var c,o,l,u;return h.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r(Z()),n.prev=1,c=(e-1)*t,o=t,n.next=6,O.a.get("".concat(P,"/products/range/").concat(c,"/").concat(o,"/").concat(a));case 6:l=n.sent,u={products:l.data.products,amount:l.data.amount,productsPerPage:t,presentPage:e},r(J(u)),r(z()),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(1),console.log(n.t0),r(G(n.t0.message));case 16:case"end":return n.stop()}},n,null,[[1,12]])}));return function(e){return n.apply(this,arguments)}}()}(t,a,n))},addCartProduct:function(t){return e(V(t))},removeCartProduct:function(t){return e(K(t))},deleteCartProduct:function(t){return e(X(t))}}})(qe),De=(a(182),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sort,a=e.sortProducts;return r.a.createElement("nav",{className:"widget"},r.a.createElement("p",null,"Sort by:"),r.a.createElement("p",{className:"sort "+("TITLE_ASC"===t?"active":""),onClick:function(){a("TITLE_ASC")}},r.a.createElement("a",null,"Title A\u2013Z")),r.a.createElement("p",{className:"sort "+("TITLE_DESC"===t?"active":""),onClick:function(){a("TITLE_DESC")}},r.a.createElement("a",null,"Title Z\u2013A")),r.a.createElement("p",{className:"sort "+("AUTHOR_ASC"===t?"active":""),onClick:function(){a("AUTHOR_ASC")}},r.a.createElement("a",null,"Author A\u2013Z")),r.a.createElement("p",{className:"sort "+("AUTHOR_DESC"===t?"active":""),onClick:function(){a("AUTHOR_DESC")}},r.a.createElement("a",null,"Author Z\u2013A")),r.a.createElement("p",{className:"sort "+("PRICE_ASC"===t?"active":""),onClick:function(){a("PRICE_ASC")}},r.a.createElement("a",null,"Price ascending")),r.a.createElement("p",{className:"sort "+("PRICE_DESC"===t?"active":""),onClick:function(){a("PRICE_DESC")}},r.a.createElement("a",null,"Price descending")))}}]),t}(r.a.Component)),Ae=Object(f.b)(function(e){return{sort:w(e)}},function(e){return{sortProducts:function(t){return e({payload:t,type:M})}}})(De),Se=(a(183),function(e){return e.added&&setTimeout(function(){Oe.ToastsStore.warning("Item added to the cart.")}),r.a.createElement("div",{className:"home"},r.a.createElement(Ae,null),r.a.createElement(_e,{productsPerPage:6}),r.a.createElement(Oe.ToastsContainer,{store:Oe.ToastsStore,position:Oe.ToastsContainerPosition.BOTTOM_CENTER}))}),xe=a(88),Ie=a.n(xe),Re=function(e){var t=e.children,a=Object(ve.a)(e,["children"]);return r.a.createElement("p",Object.assign({},a,{className:"html-box"}),Ie()(t))},Ue=(a(226),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).addToCart=function(){var e=a.props,t=e.product,n=e.addCartProduct,r=e.history;n(t.id),r.push("/added")},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.loadProduct)(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.product,a=e.request;return!a.pending&&a.success&&t?r.a.createElement("article",{className:"single-product"},r.a.createElement("div",{className:"first"},r.a.createElement("img",{src:"data:image/jpeg;base64,".concat(t.image),alt:"cover"})),r.a.createElement("div",{className:"second relat"},r.a.createElement("h2",null,t.title),r.a.createElement("h2",{className:"extra"},t.extraInfo),r.a.createElement("b",null,t.author),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(Re,null,t.description.replace(/\n/g,"<br />")),r.a.createElement("b",{className:"price"},"$",t.price),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.addToCart},"Add to cart"))):a.pending||null===a.success?r.a.createElement(Ne,null):a.pending||null===a.error||void 0===a.error?a.pending||!a.success||t?r.a.createElement(Ne,null):r.a.createElement(ke,{variant:"info"},"No product"):r.a.createElement(ke,{variant:"error"},a.error)}}]),t}(r.a.Component)),Le=Object(d.f)(function(e){return r.a.createElement(Ue,e)}),$e=Object(f.b)(function(e){return{product:(t=e,t.products.product),request:T(e)};var t},function(e){return{loadProduct:function(t){return e(function(e){return function(){var t=Object(b.a)(h.a.mark(function t(a){var n;return h.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a(Z()),t.prev=1,t.next=4,O.a.get("".concat(P,"/products/")+e);case 4:n=t.sent,a(Y(n.data)),a(z()),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),404===t.t0.response.status?(a(Y(null)),a(z())):a(G(t.t0.message));case 13:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(t))},addCartProduct:function(t){return e(V(t))}}})(Le),Me=function(e){return r.a.createElement("div",null,r.a.createElement($e,{id:e.match.params.id}))},Qe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Frequently Asked Questions"),r.a.createElement("h3",null,"What is the discount code?"),r.a.createElement("p",null,'"promo" :-)'),r.a.createElement("br",null),r.a.createElement("h3",null,"Lorem ipsum dolor sit amet?"),r.a.createElement("p",null,"Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.a.createElement("br",null),r.a.createElement("h3",null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur?"),r.a.createElement("p",null,"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",r.a.createElement("br",null)," Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))},Be=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Terms of Use"),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "))},Fe=(a(227),function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("h1",null,"Author"),r.a.createElement("p",null,"Agnieszka Matyja"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/agnieszka-matyja-405623132/"},"LinkedIn")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/agmatyja"},"GitHub"))),r.a.createElement("p",null,"The background picture licensed under Creative Commons Attribution 3.0 Unported (",r.a.createElement("a",{href:"https://creativecommons.org/licenses/by/3.0/"},"CC BY 3.0"),"). Image source: ",r.a.createElement("a",{href:"http://www.vectorbackground.net/fresh-and-green-leaves-background.html"},"link")))});a(83),a(228);function He(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var We=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).cartPay=function(){a.props.history.push("/payment")},a.addCartProduct=function(e){(0,a.props.addCartProduct)(e),Oe.ToastsStore.warning("Item added to the cart")},a.removeCartProduct=function(e){(0,a.props.removeCartProduct)(e),Oe.ToastsStore.warning("Item removed from the cart")},a.deleteCartProduct=function(e){(0,a.props.deleteCartProduct)(e),Oe.ToastsStore.warning("Item removed from the cart")},a.promoCodeChanged=function(e){var t=a.props.addDiscountCode;a.setState({promoCode:e.target.value}),"promo"===e.target.value&&(t(10),Oe.ToastsStore.warning("Discount code added! Now use have 10% discount!"))},a.state={promoCode:""},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.store,n=t.cart,c=t.promotion;if(0===n.length)return r.a.createElement("h1",{className:"center"},"The cart is empty.");var o=n.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?He(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):He(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},a[e.productId],{quantity:e.quantity})}),l=0;return o.forEach(function(e){l+=e.price*e.quantity}),r.a.createElement("div",{class:"cart"},r.a.createElement(Ce,{products:o,inCart:!0,addCartProduct:this.addCartProduct,removeCartProduct:this.removeCartProduct,deleteCartProduct:this.deleteCartProduct}),r.a.createElement("div",{class:"buy"},c>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"promotion-info"},"10% discount code activated"),r.a.createElement("p",{className:"total"},"Total: ",r.a.createElement("s",null,"$",l)," $",l*(1-c/100))):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"discount-code",placeholder:"Discount code",value:this.state.promoCode,onChange:function(t){return e.promoCodeChanged(t)}}),r.a.createElement("p",{className:"total"},"Total: $",l)),r.a.createElement("button",{class:"pay",onClick:this.cartPay},"Proceed to payment")),r.a.createElement(Oe.ToastsContainer,{store:Oe.ToastsStore,position:Oe.ToastsContainerPosition.BOTTOM_CENTER}))}}]),t}(r.a.Component),Ye=Object(d.f)(function(e){return r.a.createElement(We,e)}),Ze=Object(f.b)(function(e){return{store:_(e),cart:q(e),promotion:D(e)}},function(e){return{addCartProduct:function(t){return e(V(t))},removeCartProduct:function(t){return e(K(t))},deleteCartProduct:function(t){return e(X(t))},addDiscountCode:function(t){return e({payload:t,type:H})}}})(Ye),ze=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Cart"),r.a.createElement(Ze,null))};a(229),a(230);function Ge(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Je=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.store,a=e.cart,n=e.promotion,c=a.map(function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ge(a,!0).forEach(function(t){Object(y.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ge(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},t[e.productId],{quantity:e.quantity})}),o=0;return c.forEach(function(e){o+=e.price*e.quantity}),r.a.createElement("div",{class:"payment-summary"},r.a.createElement("table",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"wide left"},"Author"),r.a.createElement("th",{className:"wide left"},"Title"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price per item"),r.a.createElement("th",null,"Price")),c.map(function(e){return r.a.createElement("tr",null,r.a.createElement("td",{className:"wide left"},e.author),r.a.createElement("td",{className:"wide left"},e.title),r.a.createElement("td",{className:"numbers"},e.quantity),r.a.createElement("td",{className:"numbers"},"$",e.price),r.a.createElement("td",{className:"numbers"},"$",e.price*e.quantity))}),r.a.createElement("tr",null,r.a.createElement("td",{className:"total left",colspan:"4"},"Total"),r.a.createElement("td",{className:"total numbers"},"$",o)),n>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4",className:"left"},"Discount"),r.a.createElement("td",{className:"numbers"},"-$",o*(n/100))),r.a.createElement("tr",null,r.a.createElement("td",{colspan:"4",className:"total left"},"PAYMENT"),r.a.createElement("td",{className:"total numbers"},"$",o*(1-n/100)))):null))}},{key:"componentWillUnmount",value:function(){this.props.cartPay()}}]),t}(r.a.Component),Ve=Object(d.f)(function(e){return r.a.createElement(Je,e)}),Ke=Object(f.b)(function(e){return{store:_(e),cart:q(e),promotion:D(e)}},function(e){return{cartPay:function(){return e((console.log(111),{type:W}))}}})(Ve),Xe=function(){return r.a.createElement("div",{className:"payment-page"},r.a.createElement("h1",{className:"center"},"Thank you for your payment!"),r.a.createElement(Ke,null))},et=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404 Not Found"))},tt=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(he,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",exact:!0,component:Se}),r.a.createElement(d.a,{path:"/added",component:function(){return r.a.createElement(Se,{added:!0})}}),r.a.createElement(d.a,{path:"/faq",exact:!0,component:Qe}),r.a.createElement(d.a,{path:"/Terms of Use",exact:!0,component:Be}),r.a.createElement(d.a,{path:"/contact",exact:!0,component:Fe}),r.a.createElement(d.a,{path:"/products/:id",exact:!0,component:Me}),r.a.createElement(d.a,{path:"/cart",exact:!0,component:ze}),r.a.createElement(d.a,{path:"/payment",exact:!0,component:Xe}),r.a.createElement(d.a,{component:et})))}}]),t}(r.a.Component);a(231),a(232),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at=a(19),nt=a(89),rt=Object(at.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case I:return j({},e,{request:{pending:!0}});case R:return j({},e,{request:{pending:!1,success:!0}});case U:return j({},e,{request:{pending:!1,error:t.error,success:!1}});case L:return j({},e,{request:{pending:!1,error:null,success:null}});case x:return j({},e,{product:t.payload,store:re(e.store,[t.payload])});case M:return j({},e,{data:null,sort:t.payload});case Q:return j({},e,{cart:te(e.cart,t.payload)});case B:return j({},e,{cart:ae(e.cart,t.payload)});case F:return j({},e,{cart:ne(e.cart,t.payload)});case H:return j({},e,{promotion:t.payload});case W:return j({},e,{promotion:0,cart:[]});case $:return j({},e,{productsPerPage:t.payload.productsPerPage,presentPage:t.payload.presentPage,amount:t.payload.amount,data:Object(v.a)(t.payload.products),store:re(e.store,t.payload.products)});default:return e}}}),ct=Object(at.e)(rt,Object(at.d)(Object(at.a)(nt.a)));o.a.render(r.a.createElement(function(){return r.a.createElement(f.a,{store:ct},r.a.createElement(oe.a,null,r.a.createElement(tt,null)))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},90:function(e,t,a){e.exports=a(233)},95:function(e,t,a){}},[[90,1,2]]]);
//# sourceMappingURL=main.aaf7dc41.chunk.js.map