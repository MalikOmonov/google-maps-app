(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var o=n(3),a=n(0),c=n.n(a),i=n(8),s=n.n(i),r=n(17),l=n(98),j=n(101),d=n(99),u=n(26),h={users:[{uid:"1",firstName:"John",secondName:" Doe",email:"joe@gmail.com",locations:[{name:"Location 1",coordinates:{lat:-27.470125,lng:153.021072},note:"This is my 1st location"},{name:"Location 2",coordinates:{lat:-34.940329572,lng:138.5249979},note:"This is my 2nd location"},{name:"Location 3",coordinates:{lat:-37.808163434,lng:144.957829502},note:"This is my 3rd location"},{name:"Location 4",coordinates:{lat:-12.4499982,lng:130.83333},note:"This is my 4th location"},{name:"Location 5",coordinates:{lat:-31.951329528,lng:115.855329912},note:"This is my 5th location"}]},{uid:"2",firstName:"Bruce",secondName:" Lee",email:"lee@gmail.com",locations:[{name:"Location 6",coordinates:{lat:-28.470125,lng:153.021072},note:"This is my 6th location"},{name:"Location 7",coordinates:{lat:-35.940329572,lng:138.5249979},note:"This is my 7th location"}]},{uid:"3",firstName:"Chuck",secondName:" Norris",email:"chuck@gmail.com",locations:[{name:"Location 8",coordinates:{lat:-28.470125,lng:154.021072},note:"This is my 8th location"},{name:"Location 9",coordinates:{lat:-35.940329572,lng:139.5249979},note:"This is my 9th location"}]}]};function b(e){var t=h.users[0],n=Object(a.useState)({}),c=Object(r.a)(n,2),i=c[0],s=c[1];return Object(o.jsx)(u.c,{googleMapsApiKey:"AIzaSyBLVHqBpK4pTUHkxRLctTj6a3nHrt1d-uI",children:Object(o.jsxs)(u.a,{mapContainerStyle:{height:"100vh",width:"100%"},zoom:13,center:e.defaultCenter,children:[e.currentPosition.lat&&Object(o.jsx)(u.d,{position:e.currentPosition,children:Object(o.jsx)(u.b,{position:e.currentPosition,children:Object(o.jsx)("p",{children:e.myNote})})}),t.locations.map((function(e){return Object(o.jsx)(u.d,{position:e.coordinates,title:e.name,onClick:function(){return function(e){s(e)}(e)}},e.name)})),i.coordinates&&Object(o.jsx)(u.b,{position:i.coordinates,clickable:!0,onCloseClick:function(){return s({})},children:Object(o.jsxs)("p",{children:[Object(o.jsxs)("b",{children:[t.firstName," ",t.secondName]}),": ",i.note]})})]})})}var m=n(100);function O(e){return Object(o.jsx)(j.a,{children:Object(o.jsx)(m.a,{placeholder:"Enter text to search",variant:"outlined"})})}var x=n(102),p=n(97),f=n(67);function g(e){var t=h.users[0];return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){e.setShowMyNotes(!e.showMyNotes)},children:"List of my notes"}),Object(o.jsx)(f.a,{children:e.showMyNotes?Object(o.jsx)(j.a,{children:t.locations.map((function(t,n){return Object(o.jsx)("p",{children:Object(o.jsxs)(p.a,{onClick:function(){return e.setDefaultCenter(t.coordinates)},children:[n+1,". ",t.note]},n)})}))}):null})]})}function N(e){var t=h.users.filter((function(e,t){return t>0}));return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(x.a,{variant:"contained",color:"primary",onClick:function(){e.setShowOthersNotes(!e.showOthersNotes)},children:"List of other users' notes"}),Object(o.jsx)(f.a,{children:e.showOthersNotes?Object(o.jsx)(j.a,{children:t.map((function(e,t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("b",{children:[e.firstName," ",e.secondName,":"]}),e.locations.map((function(e,t){return Object(o.jsxs)("p",{children:[e.name,": ",e.note]},t)}))]},t)}))}):null})]})}var y=n(96),v=n(105),w=Object(l.a)((function(e){return{button:{borderRadius:3,padding:"0 10px",margin:"10px"}}}));function C(e){var t=w();return Object(o.jsxs)(j.a,{children:[Object(o.jsx)(f.a,{children:"Add a new note to my current location"}),Object(o.jsx)(v.a,{variant:"outlined",placeholder:"Enter a new note",inputProps:{maxLength:100},onBlur:function(t){e.setMyNote(t.target.value),e.setShowNoteDialog(!1)}}),Object(o.jsxs)(j.a,{children:[Object(o.jsx)(x.a,{className:t.button,color:"primary",variant:"contained",type:"submit",children:"Save"}),Object(o.jsx)(x.a,{className:t.button,color:"primary",variant:"contained",onClick:function(){return e.setShowNoteDialog(!1)},children:"Hide"})]})]})}var S=Object(l.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(1),margin:"20px"},boxCenterElement:{margin:5,padding:e.spacing(.5),spacing:3,display:"flex",justifyContent:"center",textAlign:"center"},button:{borderRadius:3,padding:"0 10px",margin:"10px"}}}));function L(e){var t=S(),n=Object(a.useState)("My current position"),c=Object(r.a)(n,2),i=c[0],s=c[1],l=Object(a.useState)(!1),u=Object(r.a)(l,2),h=u[0],m=u[1],p=Object(a.useState)(!1),f=Object(r.a)(p,2),v=f[0],w=f[1],L=Object(a.useState)(!1),k=Object(r.a)(L,2),T=k[0],M=k[1],D=Object(a.useState)({lat:-42.8666632,lng:147.3166654}),P=Object(r.a)(D,2),B=P[0],E=P[1],A=Object(a.useState)({}),H=Object(r.a)(A,2),I=H[0],J=H[1],R=function(e){var t={lat:e.coords.latitude,lng:e.coords.longitude};J(t),E(t)};return Object(o.jsx)(j.a,{className:t.root,children:Object(o.jsxs)(d.a,{container:!0,className:t.boxCenterElement,children:[Object(o.jsxs)(d.a,{item:!0,xs:12,sm:3,children:[Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{className:t.paper,elevation:3,children:Object(o.jsxs)(x.a,{variant:"contained",color:"primary",onClick:function(){navigator.geolocation.getCurrentPosition(R),m(!0)},children:[" ","Find my current location"]})})}),h?Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{className:t.paper,elevation:3,children:Object(o.jsx)(C,{setMyNote:s,setShowNoteDialog:m})})}):null,Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{className:t.paper,elevation:3,children:Object(o.jsx)(g,{showMyNotes:v,setShowMyNotes:w,setDefaultCenter:E})})}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{className:t.paper,elevation:3,children:Object(o.jsx)(N,{showOthersNotes:T,setShowOthersNotes:M,setDefaultCenter:E})})}),Object(o.jsx)(d.a,{item:!0,xs:12,children:Object(o.jsx)(y.a,{className:t.paper,elevation:3,children:Object(o.jsx)(O,{})})})]}),Object(o.jsx)(d.a,{item:!0,xs:12,sm:9,children:Object(o.jsx)(b,{myNote:i,currentPosition:I,defaultCenter:B})})]})})}s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.0726f5d5.chunk.js.map