(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{100:function(e,t,n){e.exports={menu:"Slider_menu__lH7zg",link:"Slider_link__1iZUu",search:"Slider_search__38aHa",slider:"Slider_slider__169B1"}},101:function(e,t,n){"use strict";(function(e){var c=n(7),a=n(1),i=n(41),s=n.n(i),l=n(0),r=n(8),o=n(9);t.a=function(){var t=Object(l.useState)(),n=Object(c.a)(t,2),i=n[0],j=n[1];return Object(l.useEffect)((function(){r.a.get("/people").then((function(e){var t=e.data;j(t)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:s.a.main_title,children:"\u041d\u0430\u0448\u0456 \u0432\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0456"}),Object(a.jsx)("div",{className:s.a.main,children:i&&i.map((function(t){var n;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:s.a.person,children:[Object(a.jsx)(o.b,{className:s.a.name,to:"/person/"+t._id,children:Object(a.jsx)("img",{alt:"person",src:"data:".concat(null===t||void 0===t||null===(n=t.gallery)||void 0===n?void 0:n.contentType,";base64,").concat(e.from(t.gallery.data,"base64").toString("base64"))})}),Object(a.jsxs)("div",{className:s.a.text,children:[Object(a.jsx)(o.b,{className:s.a.name,to:"/person/"+t._id,children:Object(a.jsx)("h3",{children:t.fName+" "+t.sName})}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:" \u0412\u0447\u0435\u043d\u0435 \u0437\u0432\u0430\u043d\u043d\u044f: "}),t.scinceTitle]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("strong",{children:"\u041d\u0430\u0443\u043a\u043e\u0432\u0438\u0439 \u0441\u0442\u0443\u043f\u0456\u043d\u044c: "}),t.scinceLevel]})]})]})]},t._id)}))})]})}}).call(this,n(36).Buffer)},102:function(e,t,n){"use strict";(function(e){var c=n(21),a=n(7),i=n(1),s=n(0),l=n(35),r=n.n(l),o=n(8),j=n(110),_=n(113),d=n(111),b=n(29),h=n(103),u=n.n(h),O=n(109);t.a=function(){var t,n,l=Object(s.useState)({desc:"",title:"",gallery:[]}),h=Object(a.a)(l,2),m=h[0],x=h[1],p=Object(s.useState)(""),f=Object(a.a)(p,2),v=f[0],g=f[1],N=Object(s.useState)(),w=Object(a.a)(N,2),k=w[0],S=w[1],y=Object(s.useState)(""),C=Object(a.a)(y,2),M=C[0],H=C[1];return Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{className:r.a.title,children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u043d\u043d\u044f"}),Object(i.jsx)("div",{className:r.a.table_list,children:Object(i.jsxs)(j.a,{variant:"outlined",fullWidth:!0,children:[Object(i.jsx)(_.a,{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c, \u0449\u043e \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438"}),Object(i.jsxs)(d.a,{error:!v,value:null!==v&&void 0!==v?v:"",onChange:function(e){g(e.target.value),o.a.get("/".concat(e.target.value)).then((function(e){var t=e.data;S(t),console.log(t)})).catch((function(e){return console.log(e)}))},label:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c, \u0449\u043e \u0441\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0442\u0438",children:[Object(i.jsx)(b.a,{value:"news",children:"\u041d\u043e\u0432\u0438\u043d\u0438"}),Object(i.jsx)(b.a,{value:"science_process",children:"\u041d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441"}),Object(i.jsx)(b.a,{value:"Science_activity",children:"\u041d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0430 \u0434\u0456\u044f\u043b\u044c\u043d\u0456\u0441\u0442\u044c"}),Object(i.jsx)(b.a,{value:"science",children:"\u041d\u0430\u0443\u043a\u0430"}),Object(i.jsx)(b.a,{value:"people",children:"\u0412\u0438\u043a\u043b\u0430\u0434\u0430\u0447\u0456"}),Object(i.jsx)(b.a,{value:"vstup",children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430\u043c"}),Object(i.jsx)(b.a,{value:"reviews",children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438"}),Object(i.jsx)(b.a,{value:"blog",children:"\u0411\u043b\u043e\u0433"}),Object(i.jsx)(b.a,{value:"pages",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})]})]})}),k&&Object(i.jsx)("div",{className:r.a.table_list,children:Object(i.jsxs)(j.a,{variant:"outlined",fullWidth:!0,children:[Object(i.jsx)(_.a,{children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443"}),Object(i.jsx)(d.a,{error:!M,value:M,onChange:function(e){H(e.target.value);var t=k[e.target.value],n=t.title,a=t.desc,i=t.gallery;x(Object(c.a)(Object(c.a)({},m),{},{title:n,desc:a,gallery:i}))},label:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443",children:k.length&&(null===k||void 0===k?void 0:k.map((function(e,t){return Object(i.jsx)(b.a,{value:"".concat(t),children:e.title},t)})))})]})}),M&&Object(i.jsxs)("div",{className:r.a.container,children:[Object(i.jsx)("h3",{children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"}),Object(i.jsx)("input",{className:r.a.title_input,value:m.title,type:"text",onChange:function(e){var t=e.target;x(Object(c.a)(Object(c.a)({},m),{},{title:t.value}))}}),Object(i.jsx)("h3",{children:"\u0424\u043e\u0442\u043e"}),Object(i.jsx)(u.a,{multiple:!0,onDone:function(e){console.log(e),e.length&&x(Object(c.a)(Object(c.a)({},m),{},{gallery:e[0].base64,value:e[0].value}))}}),Object(i.jsx)("img",{className:r.a.img_view,src:"data:".concat(null===m||void 0===m||null===(t=m.gallery[0])||void 0===t?void 0:t.contentType,";base64,").concat(e.from(m.gallery[0].data,"base64").toString("base64")),alt:"photos",defaultValue:null===(n=k[M])||void 0===n?void 0:n.gallery}),Object(i.jsx)("h3",{children:"\u041e\u043f\u0438\u0441"}),Object(i.jsx)(O.a,{initialValue:m.desc,value:m.desc,init:{height:500,menubar:!1,plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect | bold italic backcolor |               alignleft aligncenter alignright alignjustify |               bullist numlist outdent indent | removeformat | help"},onEditorChange:function(e,t){x(Object(c.a)(Object(c.a)({},m),{},{desc:e}))}})]}),Object(i.jsx)("button",{className:r.a.btn,onClick:function(){console.log("handleSubmit ===",v+"/"+k[M]._id,m);var e=localStorage.getItem("_token");o.a.patch(v+"/"+k[M]._id,m,{headers:{authorization:"bear "+e}}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},children:"\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438"})]})}}).call(this,n(36).Buffer)},104:function(e,t,n){"use strict";(function(e){var c=n(7),a=n(1),i=n(51),s=n.n(i),l=n(0),r=n(8);t.a=function(){var t=Object(l.useState)([]),n=Object(c.a)(t,2),i=n[0],o=n[1];return Object(l.useEffect)((function(){r.a.get("/vstups").then((function(e){var t=e.data;o(t)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:s.a.main_title,children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430\u043c"}),Object(a.jsx)("div",{className:s.a.main,children:i&&(null===i||void 0===i?void 0:i.map((function(t){var n;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:s.a.text,children:[Object(a.jsx)("h3",{className:s.a.name,children:t.title}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.desc}}),Object(a.jsx)("img",{alt:"reviews_photo",src:"data:".concat(null===(n=t.gallery)||void 0===n?void 0:n.contentType,";base64,").concat(e.from(t.gallery[0].data,"base64").toString("base64"))})]})]},t._id)})))})]})}}).call(this,n(36).Buffer)},105:function(e,t,n){"use strict";(function(e){var c=n(7),a=n(1),i=n(52),s=n.n(i),l=n(0),r=n(8);t.a=function(){var t,n=window.location.pathname.split("/")[2],i=Object(l.useState)(),o=Object(c.a)(i,2),j=o[0],_=o[1],d=Object(l.useState)(),b=Object(c.a)(d,2),h=b[0],u=b[1];return Object(l.useEffect)((function(){r.a.get("/people/"+n).then((function(t){var n=t.data;_(n),u(e.from(n.gallery.data,"base64").toString("base64"))})).catch((function(e){console.log(e)}))}),[n]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:s.a.main,children:[Object(a.jsx)("h1",{className:s.a.fio,children:(null===j||void 0===j?void 0:j.fName)+" "+(null===j||void 0===j?void 0:j.sName)}),Object(a.jsxs)("div",{className:s.a.desc,children:[Object(a.jsx)("img",{alt:"news_photo",src:"data:".concat(null===j||void 0===j||null===(t=j.gallery)||void 0===t?void 0:t.contentType,";base64,").concat(h)}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"\u041d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0456 \u043f\u0443\u0431\u043b\u0456\u043a\u0430\u0446\u0456\u0457:"}),Object(a.jsx)("div",{className:s.a.left_text,dangerouslySetInnerHTML:{__html:null===j||void 0===j?void 0:j.desc}})]})]})]})})}}).call(this,n(36).Buffer)},106:function(e,t,n){"use strict";(function(e){var c=n(7),a=n(1),i=n(53),s=n.n(i),l=n(0),r=n(8),o=n(13);t.a=function(){var t=Object(o.g)().id,n=Object(l.useState)(),i=Object(c.a)(n,2),j=i[0],_=i[1];return Object(l.useEffect)((function(){r.a.get("/new/"+t).then((function(e){var t=e.data;_(t)})).catch((function(e){console.log(e)}))}),[t]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:s.a.main,children:[Object(a.jsx)("h1",{className:s.a.fio,children:null===j||void 0===j?void 0:j.title}),Object(a.jsxs)("div",{className:s.a.desc,children:[Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:s.a.left_text,dangerouslySetInnerHTML:{__html:null===j||void 0===j?void 0:j.desc}})}),null===j||void 0===j?void 0:j.gallery.map((function(t,n){return Object(a.jsx)("img",{alt:"news_photo",src:"data:".concat(null===t||void 0===t?void 0:t.contentType,";base64,").concat(e.from(t.data,"base64").toString("base64"))},n)}))]})]})})}}).call(this,n(36).Buffer)},107:function(e,t,n){"use strict";(function(e){var c=n(7),a=n(1),i=n(58),s=n.n(i),l=n(0),r=n(8);t.a=function(){var t=Object(l.useState)(),n=Object(c.a)(t,2),i=n[0],o=n[1];return Object(l.useEffect)((function(){r.a.get("/reviews").then((function(e){var t=e.data;o(t)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:s.a.main_title,children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u0435\u043a\u043e\u043d\u043e\u043c\u0456\u043a\u0438 \u0417\u0423\u041d\u0423"}),Object(a.jsx)("div",{className:s.a.main,children:i&&i.map((function(t){var n;return Object(a.jsxs)("div",{children:[Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:s.a.text,children:[Object(a.jsx)("h3",{className:s.a.name,children:t.title}),Object(a.jsx)("div",{dangerouslySetInnerHTML:{__html:t.desc}}),Object(a.jsx)("img",{alt:"reviews_photo",src:"data:".concat(null===(n=t.gallery)||void 0===n?void 0:n.contentType,";base64,").concat(e.from(t.gallery[0].data,"base64").toString("base64"))})]})]},t._id)}))})]})}}).call(this,n(36).Buffer)},108:function(e,t,n){"use strict";(function(e){var c=n(7),a=n(1),i=n(59),s=n.n(i),l=n(0),r=n(8),o=n(13);t.a=function(){var t=Object(o.g)().id,n=Object(l.useState)(),i=Object(c.a)(n,2),j=i[0],_=i[1];return Object(l.useEffect)((function(){r.a.get("/science_activity/"+t).then((function(e){var t=e.data;_(t)})).catch((function(e){console.log(e)}))}),[t]),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:s.a.main,children:[Object(a.jsx)("h1",{className:s.a.fio,children:null===j||void 0===j?void 0:j.title}),Object(a.jsxs)("div",{className:s.a.desc,children:[Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:s.a.left_text,dangerouslySetInnerHTML:{__html:null===j||void 0===j?void 0:j.desc}})}),null===j||void 0===j?void 0:j.gallery.map((function(t,n){return Object(a.jsx)("img",{alt:"news_photo",src:"data:".concat(null===t||void 0===t?void 0:t.contentType,";base64,").concat(e.from(t.data,"base64").toString("base64"))},n)}))]})]})})}}).call(this,n(36).Buffer)},124:function(e,t,n){},14:function(e,t,n){e.exports={burger_container:"MobileMenu_burger_container__3_T00",header:"MobileMenu_header__3BTJX",close:"MobileMenu_close__1Wj6X",list_container:"MobileMenu_list_container__Sm31t",link:"MobileMenu_link__msvzx",link_container:"MobileMenu_link_container__3HK7n",link_p_last:"MobileMenu_link_p_last__2ta1e",menu:"MobileMenu_menu__3Spcm",home:"MobileMenu_home__i5wUe"}},15:function(e,t,n){e.exports={container:"SideBarWrapper_container__2GCEI",info:"SideBarWrapper_info__bUChu",main:"SideBarWrapper_main__3CQff",title:"SideBarWrapper_title__ZCCWj",abit_info:"SideBarWrapper_abit_info__1yUmb",news:"SideBarWrapper_news__1Wozf",scince_info:"SideBarWrapper_scince_info__TCzVD",main_title:"SideBarWrapper_main_title__23OkG",links:"SideBarWrapper_links__1M13A"}},150:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),i=n.n(a),s=n(11),l=n.n(s),r=(n(124),n(7)),o=n(87),j=n.n(o),_=n(9),d=n(13),b=n(17),h=n.n(b),u=n(91),O=n.n(u),m=n(92),x=n.n(m),p=n(93),f=n.n(p),v=n(94),g=n.n(v),N=n(185),w=n(64),k=n.n(w),S=n(6),y=n.p+"static/media/LOGO-TNEU-100x100-1.fb9ffcc3.png",C=function(){var e=Object(d.f)(),t=Object(a.useState)(""),n=Object(r.a)(t,2),i=n[0],s=n[1],l=Object(S.a)({root:{"& .MuiOutlinedInput-root":{borderRadius:"0","& fieldset":{borderColor:"#3b5998"},"&:hover fieldset":{borderColor:"#3b5998"}}}})(N.a);return Object(c.jsx)("header",{className:h.a.header_container,children:Object(c.jsxs)("div",{className:h.a.header,children:[Object(c.jsxs)("div",{className:h.a.img_title,children:[Object(c.jsx)("div",{className:h.a.logo,children:Object(c.jsx)(_.b,{to:"/",children:Object(c.jsx)("img",{src:y,alt:"logo"})})}),Object(c.jsx)("div",{className:h.a.title,children:Object(c.jsx)(_.b,{to:"/",className:h.a.link,children:Object(c.jsx)("h2",{className:h.a.name,children:"\u041a\u0430\u0444\u0435\u0434\u0440\u0430 \u0435\u043a\u043e\u043d\u043e\u043c\u0456\u043a\u0438 \u0442\u0430 \u0435\u043a\u043e\u043d\u043e\u043c\u0456\u0447\u043d\u043e\u0457 \u0442\u0435\u043e\u0440\u0456\u0457"})})})]}),Object(c.jsx)("div",{className:h.a.search,children:Object(c.jsx)("div",{className:h.a.search_container,children:Object(c.jsx)(l,{label:"\u041f\u043e\u0448\u0443\u043a",variant:"outlined",size:"small",type:"search",value:i,autoFocus:!0,onChange:function(e){s(e.target.value)},InputProps:{endAdornment:Object(c.jsx)(k.a,{onClick:function(){console.log(i),e.push("/news")},className:h.a.search_icon})}})})}),Object(c.jsxs)("div",{className:h.a.social,children:[Object(c.jsx)("p",{className:h.a.social_title,children:"\u041c\u0438 \u0432 \u0441\u043e\u0446\u043c\u0435\u0440\u0435\u0436\u0430\u0445:"}),Object(c.jsx)("a",{href:"https://www.facebook.com/economicsTNEU/",children:Object(c.jsx)(O.a,{className:h.a.fb})}),Object(c.jsx)("a",{href:"https://instagram.com/kafedra_eet?igshid=1sexx39r6cwxd",children:Object(c.jsx)(x.a,{className:h.a.insta})}),Object(c.jsx)("a",{href:"https://www.youtube.com",children:Object(c.jsx)(f.a,{className:h.a.youtube})}),Object(c.jsx)("a",{href:"mailto:kaf_et@wunu.edu.ua",children:Object(c.jsx)(g.a,{className:h.a.email})})]})]})})},M=n(40),H=n.n(M),A=n(97),B=n.n(A),E=n(98),P=n.n(E),T=n(14),I=n.n(T),U=n(95),z=n.n(U),L=n(96),G=n.n(L),W=function(e){var t=e.isOpen,n=e.setIsOpen,a=function(){n(!t)};return!!t&&Object(c.jsxs)("div",{className:I.a.burger_container,children:[Object(c.jsxs)("h2",{className:I.a.header,children:["\u041c\u0435\u043d\u044e ",Object(c.jsx)(z.a,{onClick:a,className:I.a.close})]}),Object(c.jsx)("div",{className:I.a.list_container,children:Object(c.jsxs)("div",{className:I.a.menu,children:[Object(c.jsxs)("h3",{className:I.a.link_container,children:[Object(c.jsx)(G.a,{className:I.a.home}),Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430"})]}),Object(c.jsx)("h3",{className:I.a.link_p,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/kafedra",children:"\u041f\u0440\u043e \u043a\u0430\u0444\u0435\u0434\u0440\u0443"})}),Object(c.jsx)("h3",{className:I.a.link_p,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/vstupnykam",children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430\u043c"})}),Object(c.jsx)("h3",{className:I.a.link_p,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/science_process",children:"\u041d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441"})}),Object(c.jsx)("h3",{className:I.a.link_p,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/science",children:"\u041d\u0430\u0443\u043a\u0430"})}),Object(c.jsx)("h3",{className:I.a.link_p,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/news",children:"\u041d\u043e\u0432\u0438\u043d\u0438"})}),Object(c.jsx)("h3",{className:I.a.link_p,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/blog",children:"\u0411\u043b\u043e\u0433"})}),Object(c.jsx)("h3",{className:I.a.link_p_last,children:Object(c.jsx)(_.b,{onClick:a,className:I.a.link,to:"/reviews",children:"\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u0435\u043a\u043e\u043d\u043e\u043c\u0456\u043a\u0438 \u0417\u0423\u041d\u0423"})})]})})]})},V=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(c.jsxs)("div",{className:H.a.menu_container,children:[Object(c.jsxs)("div",{className:H.a.burger_container,children:[Object(c.jsxs)("div",{className:H.a.burger_icon,onClick:function(){i(!n)},children:[Object(c.jsx)(B.a,{})," ",Object(c.jsx)("span",{children:"\u041c\u0415\u041d\u042e"})]}),Object(c.jsxs)("div",{className:H.a.search_share,children:[Object(c.jsx)(k.a,{className:H.a.search_icon}),Object(c.jsx)(P.a,{className:H.a.share_icon})]})]}),Object(c.jsx)(W,{isOpen:n,setIsOpen:i})]})},X=n(66),Q=n.n(X),Z=n(18),R=n.n(Z),F=n(8),J=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)(""),l=Object(r.a)(s,2),o=l[0],j=l[1];return Object(a.useEffect)((function(){F.a.get("/news").then((function(e){var t=e.data;j(t.splice(0,3))})).catch((function(e){console.log(e)})),F.a.get("/sciences_activity").then((function(e){var t=e.data;i(t.splice(0,3))})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{className:R.a.info,children:[Object(c.jsx)("h3",{className:R.a.title,children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430\u043c: "}),Object(c.jsxs)("div",{className:R.a.abit_info,children:[Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/documents-entrant/",children:"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 \u0437\u0430\u044f\u0432 \u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432"})}),Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/schedule-entrance/",children:"\u0420\u043e\u0437\u043a\u043b\u0430\u0434 \u0432\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u044c"})}),Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/certification-testing-entrance-test/",children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0456 \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u043d\u044f"})}),Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/decision-entrant/",children:"\u0420\u0456\u0448\u0435\u043d\u043d\u044f \u043f\u0440\u0438\u0439\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u043a\u043e\u043c\u0456\u0441\u0456\u0457"})}),Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/ranking-lists-entrant/",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432\u0456 \u0441\u043f\u0438\u0441\u043a\u0438"})}),Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/questions-and-answers-entrant/",children:"\u0417\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456"})}),Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/entrant/",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u043f\u0440\u0438\u0439\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u043a\u043e\u043c\u0456\u0441\u0456\u0457"})})]}),Object(c.jsx)("h3",{className:R.a.title,children:"\u041d\u043e\u0432\u0438\u043d\u0438: "}),Object(c.jsx)("div",{className:R.a.news,children:o&&(null===o||void 0===o?void 0:o.map((function(e){return Object(c.jsxs)("p",{className:R.a.links,children:[Object(c.jsx)(_.b,{to:"/new/"+e._id,children:e.title}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:[" ",e.short_desc]})]},e._id)})))}),Object(c.jsx)("h3",{className:R.a.title,children:"\u041d\u0430\u0443\u043a\u043e\u0432\u0430 \u0434\u0456\u044f\u043b\u044c\u043d\u0456\u0441\u0442\u044c: "}),Object(c.jsx)("div",{className:R.a.scince_info,children:n&&(null===n||void 0===n?void 0:n.map((function(e){return Object(c.jsx)("p",{className:R.a.links,children:Object(c.jsx)(_.b,{to:"/science_activity/"+e._id,children:e.title})})})))})]})},K=n(100),D=n.n(K),Y=n.p+"static/media/slider.97d40e48.jpg",q=function(){return Object(c.jsx)("div",{className:D.a.slider,children:Object(c.jsx)("img",{src:Y,alt:"slider"})})},$=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){F.a.get("/pages").then((function(e){var t=e.data;i(t)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)(q,{}),Object(c.jsxs)("div",{className:Q.a.container,children:[Object(c.jsx)(J,{}),Object(c.jsxs)("div",{className:Q.a.main,children:[Object(c.jsx)("h1",{className:Q.a.main_title,children:null===n||void 0===n?void 0:n.title}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:null===n||void 0===n?void 0:n.desc}})]})]})]})},ee=n(73),te=n.n(ee),ne=function(){return Object(c.jsx)("footer",{className:te.a.footer_container,children:Object(c.jsx)("p",{className:te.a.footer,children:" \xa9 2020. \u041a\u0430\u0444\u0435\u0434\u0440\u0430 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u0443 "})})},ce=n(101),ae=n(15),ie=n.n(ae),se=function(e){var t=e.Component,n=Object(a.useState)(""),i=Object(r.a)(n,2),s=i[0],l=i[1],o=Object(a.useState)(""),j=Object(r.a)(o,2),d=j[0],b=j[1];return Object(a.useEffect)((function(){F.a.get("/news").then((function(e){var t=e.data;l(t.splice(0,3))})).catch((function(e){console.log(e)})),F.a.get("/sciences_activity").then((function(e){var t=e.data;b(t.splice(0,3))})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{className:ie.a.container,children:[Object(c.jsxs)("div",{className:ie.a.info,children:[Object(c.jsx)("h3",{className:ie.a.title,children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0438\u043a\u0430\u043c: "}),Object(c.jsxs)("div",{className:ie.a.abit_info,children:[Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/documents-entrant/",children:"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 \u0437\u0430\u044f\u0432 \u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/schedule-entrance/",children:"\u0420\u043e\u0437\u043a\u043b\u0430\u0434 \u0432\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u044c"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/certification-testing-entrance-test/",children:"\u0412\u0441\u0442\u0443\u043f\u043d\u0456 \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u043d\u044f"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/decision-entrant/",children:"\u0420\u0456\u0448\u0435\u043d\u043d\u044f \u043f\u0440\u0438\u0439\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u043a\u043e\u043c\u0456\u0441\u0456\u0457"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/ranking-lists-entrant/",children:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433\u043e\u0432\u0456 \u0441\u043f\u0438\u0441\u043a\u0438"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/questions-and-answers-entrant/",children:"\u0417\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f \u0442\u0430 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0456"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)("a",{href:"http://www.tneu.edu.ua/entrant/",children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438 \u043f\u0440\u0438\u0439\u043c\u0430\u043b\u044c\u043d\u043e\u0457 \u043a\u043e\u043c\u0456\u0441\u0456\u0457"})})]}),Object(c.jsx)("h3",{className:ie.a.title,children:"\u041d\u043e\u0432\u0438\u043d\u0438: "}),Object(c.jsx)("div",{className:ie.a.news,children:s&&(null===s||void 0===s?void 0:s.map((function(e){return Object(c.jsxs)("p",{className:ie.a.links,children:[Object(c.jsx)(_.b,{to:"/new/"+e._id,children:e.title}),Object(c.jsx)("br",{}),Object(c.jsxs)("p",{children:[" ",e.short_desc]})]},e._id)})))}),Object(c.jsx)("h3",{className:ie.a.title,children:"\u041d\u0430\u0443\u043a\u043e\u0432\u0430 \u0434\u0456\u044f\u043b\u044c\u043d\u0456\u0441\u0442\u044c: "}),Object(c.jsxs)("div",{className:ie.a.science_info,children:[d&&(null===d||void 0===d?void 0:d.map((function(e){return Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)(_.b,{to:"/science_activity/"+e._id,children:e.title})})}))),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)(_.b,{to:"/science_activity/1",children:"\u0420\u043e\u0437\u043a\u043b\u0430\u0434 \u0432\u0441\u0442\u0443\u043f\u043d\u0438\u0445 \u0432\u0438\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u043d\u044c"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)(_.b,{to:"/",children:"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 \u0437\u0430\u044f\u0432 \u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)(_.b,{to:"/",children:"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 \u0437\u0430\u044f\u0432 \u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432"})}),Object(c.jsx)("p",{className:ie.a.links,children:Object(c.jsx)(_.b,{to:"/",children:"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u0440\u0438\u0439\u043e\u043c\u0443 \u0437\u0430\u044f\u0432 \u0456 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0456\u0432"})})]})]}),Object(c.jsx)("div",{className:ie.a.main,children:Object(c.jsx)(t,{})})]})},le=n(102),re=n(104),oe=n(105),je=n(106),_e=n(54),de=n.n(_e),be=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){F.a.get("/news").then((function(e){var t=e.data;i(t)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:de.a.main_title,children:"\u041d\u043e\u0432\u0438\u043d\u0438"}),Object(c.jsx)("div",{className:de.a.main,children:n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:de.a.text,children:[Object(c.jsx)(_.b,{className:de.a.name,to:"/new/"+e._id,children:Object(c.jsx)("h3",{children:e.title})}),Object(c.jsx)("p",{children:e.short_desc})]})]},e._id)}))})]})},he=n(55),ue=n.n(he),Oe=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){F.a.get("/sciences").then((function(e){var t=e.data;i(t)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:ue.a.main_title,children:"\u041d\u0430\u0443\u043a\u0430"}),Object(c.jsx)("div",{className:ue.a.main,children:n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:ue.a.text,children:[Object(c.jsx)("h3",{className:ue.a.name,children:e.title}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.desc}})]})]},e._id)}))})]})},me=n(56),xe=n.n(me),pe=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){F.a.get("/science_process").then((function(e){var t=e.data;i(t)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:xe.a.main_title,children:"\u041d\u0430\u0432\u0447\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u0441"}),Object(c.jsx)("div",{className:xe.a.main,children:n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:xe.a.text,children:[Object(c.jsx)("h3",{className:xe.a.name,children:e.title}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.desc}})]})]},e._id)}))})]})},fe=n(57),ve=n.n(fe),ge=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){F.a.get("/blog").then((function(e){var t=e.data;i(t)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{className:ve.a.main_title,children:"\u0411\u043b\u043e\u0433"}),Object(c.jsx)("div",{className:ve.a.main,children:n&&n.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:ve.a.text,children:[Object(c.jsx)("h3",{className:ve.a.name,children:e.title}),Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:e.desc}})]})]},e._id)}))})]})},Ne=n(107),we=n(108),ke=n(21),Se=n(67),ye=n.n(Se),Ce=function(){var e=Object(a.useState)({email:"",pass:""}),t=Object(r.a)(e,2),n=t[0],i=t[1],s=Object(d.f)();return Object(c.jsx)("div",{className:ye.a.container,children:Object(c.jsxs)("div",{className:ye.a.wrapper,children:[Object(c.jsx)("h3",{children:"Email"}),Object(c.jsx)("input",{type:"email",onChange:function(e){return i(Object(ke.a)(Object(ke.a)({},n),{},{email:e.target.value}))}}),Object(c.jsx)("h3",{children:"Password"}),Object(c.jsx)("input",{type:"password",onChange:function(e){return i(Object(ke.a)(Object(ke.a)({},n),{},{pass:e.target.value}))}}),Object(c.jsx)("div",{className:ye.a.submit,children:Object(c.jsx)("button",{onClick:function(){F.a.post("/login",n).then((function(e){localStorage.setItem("_token",e.data.token),s.push("/admin")})).catch((function(e){s.push("/admin"),console.log(e)}))},children:"Login"})})]})})},Me=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1];return Object(a.useEffect)((function(){i(localStorage.getItem("_token"))}),[n]),Object(c.jsx)("div",{className:j.a.container,children:Object(c.jsxs)(_.a,{children:[Object(c.jsx)(C,{}),Object(c.jsx)(V,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:$}),n&&Object(c.jsx)(d.a,{path:"/admin",component:le.a}),Object(c.jsx)(d.a,{path:"/login",component:Ce}),Object(c.jsx)(d.a,{path:"/kafedra",children:Object(c.jsx)(se,{Component:ce.a})}),Object(c.jsx)(d.a,{path:"/person/:id",children:Object(c.jsx)(se,{Component:oe.a})}),Object(c.jsx)(d.a,{path:"/vstupnykam",children:Object(c.jsx)(se,{Component:re.a})}),Object(c.jsx)(d.a,{path:"/science_process",children:Object(c.jsx)(se,{Component:pe})}),Object(c.jsx)(d.a,{path:"/science",children:Object(c.jsx)(se,{Component:Oe})}),Object(c.jsx)(d.a,{path:"/science_activity/:id",children:Object(c.jsx)(se,{Component:we.a})}),Object(c.jsx)(d.a,{path:"/news",children:Object(c.jsx)(se,{Component:be})}),Object(c.jsx)(d.a,{path:"/new/:id",children:Object(c.jsx)(se,{Component:je.a})}),Object(c.jsx)(d.a,{path:"/blog",children:Object(c.jsx)(se,{Component:ge})}),Object(c.jsx)(d.a,{path:"/reviews",children:Object(c.jsx)(se,{Component:Ne.a})})]}),Object(c.jsx)(ne,{})]})})};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(Me,{})}),document.getElementById("root"))},17:function(e,t,n){e.exports={header_container:"Header_header_container__1tTnF",header:"Header_header__3Q3hW",title:"Header_title__1JQfb",logo:"Header_logo__1Qxhy",search:"Header_search__3dux1",search_container:"Header_search_container__3PgRG",search_icon:"Header_search_icon__3ru40",fb:"Header_fb__nYEzD",youtube:"Header_youtube__FSuMh",email:"Header_email__1q8jU",insta:"Header_insta__3OoAO",social_title:"Header_social_title__3CxPK",name:"Header_name__3VELH",contacs:"Header_contacs__3EvGN",social:"Header_social__3prdg",link:"Header_link__3aPFz",img_title:"Header_img_title__13Dlk"}},18:function(e,t,n){e.exports={info:"SideBar_info__3MQB2",main:"SideBar_main__XLoZt",title:"SideBar_title__2nRtP",abit_info:"SideBar_abit_info__147GV",news:"SideBar_news__29Kt-",scince_info:"SideBar_scince_info__1f6XQ",main_title:"SideBar_main_title__1XUQZ",links:"SideBar_links__1tp94"}},35:function(e,t,n){e.exports={container:"Create_container__3wYpT",options:"Create_options__1UcC4",text_view:"Create_text_view__1cNlH",title:"Create_title__Mrpxa",btn:"Create_btn__Mm4Ld",img_view:"Create_img_view__3C50S",title_input:"Create_title_input__1wYmN",table_list:"Create_table_list__3Uidb",tabs:"Create_tabs__1DIw1",tabs_active:"Create_tabs_active__1UWQE"}},40:function(e,t,n){e.exports={menu:"Menu_menu__1OZQl",link:"Menu_link__JQGyK",link_p:"Menu_link_p__6ASoo",link_p_last:"Menu_link_p_last__aQfcR",search:"Menu_search__ssTMu",slider:"Menu_slider__3x1Jk",link_container:"Menu_link_container__3C6gP",home:"Menu_home__1tPU7",burger_container:"Menu_burger_container__23_zP",share_icon:"Menu_share_icon__1v110",search_icon:"Menu_search_icon__1OG44",search_share:"Menu_search_share__1kZXP",burger_icon:"Menu_burger_icon__lUc0Q"}},41:function(e,t,n){e.exports={main_title:"Kafedra_main_title__3dJ9v",person:"Kafedra_person__CJ-mS",photo:"Kafedra_photo__8Vebz",text:"Kafedra_text__dFAaV",name:"Kafedra_name__ukoo4"}},51:function(e,t,n){e.exports={main_title:"Vstupnykam_main_title__1ChGz",person:"Vstupnykam_person__3Rtgh",photo:"Vstupnykam_photo__ssI0h",text:"Vstupnykam_text__o-0fW",name:"Vstupnykam_name__VUwcv"}},52:function(e,t,n){e.exports={main_title:"People_main_title__3OzaY",person:"People_person__1MuMs",photo:"People_photo__2Db2D",text:"People_text__3WzTG",name:"People_name__1UL5X",fio:"People_fio__3ACQf",desc:"People_desc__2U0A7",left_text:"People_left_text__2zHZD"}},53:function(e,t,n){e.exports={main_title:"SingleNews_main_title__3Qsi-",person:"SingleNews_person__3-YX9",photo:"SingleNews_photo__3aAwc",text:"SingleNews_text__q24AN",name:"SingleNews_name__2og6r",fio:"SingleNews_fio__3z_lX",desc:"SingleNews_desc__1drXg",left_text:"SingleNews_left_text__3XpUs"}},54:function(e,t,n){e.exports={main_title:"News_main_title__3vZhu",person:"News_person__OX4r9",photo:"News_photo__GVG5h",text:"News_text__28Qvp",name:"News_name__1EuIM"}},55:function(e,t,n){e.exports={main_title:"Science_main_title__3YVgZ",person:"Science_person__12kVe",photo:"Science_photo__xcAtq",text:"Science_text__2s3l_",name:"Science_name__1etjt"}},56:function(e,t,n){e.exports={main_title:"ScienceProcess_main_title__39Izf",person:"ScienceProcess_person__38mq6",photo:"ScienceProcess_photo__7IzEv",text:"ScienceProcess_text__2Br2w",name:"ScienceProcess_name__PFU8z"}},57:function(e,t,n){e.exports={main_title:"Blog_main_title__2DSB8",person:"Blog_person__1ZxIH",photo:"Blog_photo__1HPi3",text:"Blog_text__30x2U",name:"Blog_name__2JmrU"}},58:function(e,t,n){e.exports={main_title:"Reviews_main_title__3P_Gy",person:"Reviews_person__3cJuM",photo:"Reviews_photo__2zGX3",text:"Reviews_text__zBXRE",name:"Reviews_name__16UsU"}},59:function(e,t,n){e.exports={main_title:"ScienceActivity_main_title__Wgr-E",person:"ScienceActivity_person__2-_ZL",photo:"ScienceActivity_photo__2N_LG",text:"ScienceActivity_text__278jv",name:"ScienceActivity_name__2sxup",fio:"ScienceActivity_fio__kC5rH",desc:"ScienceActivity_desc__3aKeu",left_text:"ScienceActivity_left_text__1hgX-"}},66:function(e,t,n){e.exports={container:"Home_container__3iAzj",info:"Home_info__n1eA9",main:"Home_main__2Z3kd",title:"Home_title__CX1GF",abit_info:"Home_abit_info__rTU_r",news:"Home_news__1BG_C",scince_info:"Home_scince_info__2OP64",main_title:"Home_main_title__260H_"}},67:function(e,t,n){e.exports={container:"Login_container__30tAy",submit:"Login_submit__1sdwP",wrapper:"Login_wrapper__jBGr1"}},73:function(e,t,n){e.exports={footer_container:"Footer_footer_container__34r1c",footer:"Footer_footer__liFvC"}},8:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(99),a=n.n(c).a.create({baseURL:"https://tneu.herokuapp.com/api/v1"})},87:function(e,t,n){e.exports={App:"App_App__3IT6_","App-logo":"App_App-logo__32zM4","App-logo-spin":"App_App-logo-spin__2-tcw","App-header":"App_App-header__2N3_9","App-link":"App_App-link__2_O2c",container:"App_container__31ljZ",container_sidebar:"App_container_sidebar__IGYE3"}}},[[150,1,2]]]);
//# sourceMappingURL=main.0f2d6c2c.chunk.js.map