(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(9),c=a.n(r),i=a(18),s=a(36),o=a(71),l=a(81),u="CREATE",d="UPDATE",p="DELETE",j="FETCH_ALL",b="LIKE",m=Object(s.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;case b:case d:return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case u:return[].concat(Object(l.a)(e),[t.payload]);case p:return e.filter((function(e){return e._id!==t.payload}));default:return e}}}),f=a(52),h=a(158),x=a(159),g=a(153),O=a(162),v=a(157),y=a(156),C=a(150),w=a(152),k=a(161),N=a(154),I=a(155),E=a(78),S=a.n(E),D=a(79),_=a.n(D),z=a(77),F=a.n(z),T=a(72),W=a.n(T),A=a(14),B=a.n(A),L=a(23),R=a(37),M=a.n(R),H="http://localhost:5000/posts",J=function(e){return M.a.patch("".concat(H,"/").concat(e,"/likePost"))},P=function(e,t){return M.a.patch("".concat(H,"/").concat(e),t)},K=function(e){return M.a.delete("".concat(H,"/").concat(e))},U=function(e){return function(){var t=Object(L.a)(B.a.mark((function t(a){var n,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c=e,M.a.post(H,c);case 3:n=t.sent,r=n.data,a({type:u,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var c}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},V=function(e,t){return function(){var a=Object(L.a)(B.a.mark((function a(n){var r,c;return B.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,P(e,t);case 3:r=a.sent,c=r.data,n({type:d,payload:c}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},q=a(147),G=Object(q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),Q=a(5),X=function(e){var t=e.post,a=e.setCurrentId,n=Object(i.b)(),r=G();return Object(Q.jsxs)(C.a,{className:r.card,children:[Object(Q.jsx)(w.a,{className:r.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),Object(Q.jsxs)("div",{className:r.overlay,children:[Object(Q.jsx)(g.a,{variant:"h6",children:t.creator}),Object(Q.jsx)(g.a,{variant:"body2",children:W()(t.createdAt).fromNow()})]}),Object(Q.jsx)("div",{className:r.overlay2,children:Object(Q.jsx)(k.a,{style:{color:"white"},size:"small",onClick:function(){return a(t._id)},children:Object(Q.jsx)(F.a,{fontSize:"medium"})})}),Object(Q.jsx)("div",{className:r.details,children:Object(Q.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(Q.jsx)(g.a,{className:r.title,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(Q.jsx)(N.a,{children:Object(Q.jsx)(g.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(Q.jsxs)(I.a,{className:r.cardActions,children:[Object(Q.jsxs)(k.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(L.a)(B.a.mark((function t(a){var n,r;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,J(e);case 3:n=t.sent,r=n.data,a({type:b,payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Q.jsx)(S.a,{fontSize:"small"})," Like ",t.likeCount," "]}),Object(Q.jsxs)(k.a,{size:"small",color:"primary",onClick:function(){return n((e=t._id,function(){var t=Object(L.a)(B.a.mark((function t(a){return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,K(e);case 3:a({type:p,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e},children:[Object(Q.jsx)(_.a,{fontSize:"small"})," Delete"]})]})]})},Y=Object(q.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),Z=function(e){var t=e.setCurrentId,a=Object(i.c)((function(e){return e.posts})),n=Y();return a.length?Object(Q.jsx)(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3,children:a.map((function(e){return Object(Q.jsx)(v.a,{item:!0,xs:12,sm:6,md:6,children:Object(Q.jsx)(X,{post:e,setCurrentId:t})},e._id)}))}):Object(Q.jsx)(y.a,{})},$=a(19),ee=a(83),te=a(160),ae=a(80),ne=a.n(ae),re=Object(q.a)((function(e){return{root:{fontFamily:"Roboto","& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),ce=function(e){var t=e.currentId,a=e.setCurrentId,r=Object(n.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),c=Object(f.a)(r,2),s=c[0],o=c[1],l=Object(i.c)((function(e){return t?e.posts.find((function(e){return e._id===t})):null})),u=Object(i.b)(),d=re();Object(n.useEffect)((function(){l&&o(l)}),[l]);var p=function(){a(0),o({creator:"",title:"",message:"",tags:"",selectedFile:""})},j=function(){var e=Object(L.a)(B.a.mark((function e(a){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),0===t?(u(U(s)),p()):(u(V(t,s)),p());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(Q.jsx)(ee.a,{className:d.paper,children:Object(Q.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(d.root," ").concat(d.form),onSubmit:j,children:[Object(Q.jsx)(g.a,{variant:"h6",children:t?'Editing "'.concat(l.title,'"'):"Creating a Memory"}),Object(Q.jsx)(te.a,{name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:s.creator,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{creator:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{title:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{message:e.target.value}))}}),Object(Q.jsx)(te.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return o(Object($.a)(Object($.a)({},s),{},{tags:e.target.value.split(",")}))}}),Object(Q.jsx)("div",{className:d.fileInput,children:Object(Q.jsx)(ne.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return o(Object($.a)(Object($.a)({},s),{},{selectedFile:t}))}})}),Object(Q.jsx)(k.a,{className:d.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(Q.jsx)(k.a,{variant:"contained",color:"secondary",size:"small",onClick:p,fullWidth:!0,children:"Clear"})]})})},ie=a(51),se=Object(q.a)((function(e){return Object(ie.a)({appBar:{backgroundColor:"rgba(-255, -255, -255, 0.6);transparent",borderRadius:15,margin:"0 0 0 0",marginBottom:"90px",padding:"30px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},heading:{color:"rgba(0,183,255, 1)",fontFamily:"Roboto"},image:{marginLeft:"15px"}},e.breakpoints.down("sm"),{mainContainer:{flexDirection:"column-reverse"}})})),oe=a.p+"static/media/memories.844fd798.png",le=function(){var e=Object(n.useState)(0),t=Object(f.a)(e,2),a=t[0],r=t[1],c=Object(i.b)(),s=se();return Object(n.useEffect)((function(){c(function(){var e=Object(L.a)(B.a.mark((function e(t){var a,n;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M.a.get(H);case 3:a=e.sent,n=a.data,t({type:j,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,c]),Object(Q.jsxs)(h.a,{maxWidth:"xl",children:[Object(Q.jsxs)(x.a,{className:s.appBar,position:"sticky",children:[Object(Q.jsx)(g.a,{className:s.heading,variant:"h2",align:"center",children:"ReminDr"}),Object(Q.jsx)("img",{className:s.image,src:oe,alt:"icon",height:"60"})]}),Object(Q.jsx)(O.a,{in:!0,children:Object(Q.jsx)(h.a,{children:Object(Q.jsxs)(v.a,{className:s.mainContainer,container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3,children:[Object(Q.jsx)(v.a,{item:!0,xs:12,sm:7,children:Object(Q.jsx)(Z,{setCurrentId:r})}),Object(Q.jsx)(v.a,{item:!0,xs:12,sm:4,children:Object(Q.jsx)(ce,{currentId:a,setCurrentId:r})})]})})})]})},ue=(a(117),Object(s.d)(m,Object(s.c)(Object(s.a)(o.a))));c.a.render(Object(Q.jsx)(i.a,{store:ue,children:Object(Q.jsx)(le,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.4d4e75f7.chunk.js.map