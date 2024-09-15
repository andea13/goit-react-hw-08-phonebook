"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[354],{8354:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var o,r,i,a,u,c,s,l,d,m=t(168),f=t(225),x=f.Z.li(o||(o=(0,m.Z)(["\n  display: inline-grid;\n  // align-items: center;\n  gap: 20px;\n  border: 1px solid black;\n  margin-bottom: 20px;\n  padding: 30px;\n"]))),p=f.Z.h2(r||(r=(0,m.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n"]))),h=f.Z.p(i||(i=(0,m.Z)(["\n  font-size: 30px;\n"]))),b=t(6052),Z=t(4420),g=t(8571),v=t(184),j=function(n){var e=n.name,t=n.number,o=n.id,r=(0,Z.I0)();return(0,v.jsxs)(x,{children:[(0,v.jsxs)(p,{children:["Name: ",e," "]}),(0,v.jsxs)(h,{children:["Phone: ",t]}),(0,v.jsx)(g.Z,{type:"button",onClick:function(){r((0,b.GK)(o))},variant:"contained",children:"Delete"})]},o)},w=f.Z.ul(a||(a=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  column-gap: 20px;\n  padding: 0;\n"]))),y=t(3553),C=function(n){return n.contacts.filter},k=function(n){return n.contacts.contacts},_=(0,y.P1)([k,C],(function(n,e){return n.items.filter((function(n){var t=n.name;return t&&t.toLowerCase().includes(e.toLowerCase())}))})),P=t(2791),F=function(){var n=(0,Z.v9)(_);console.log("filteredContacts:",n);var e=(0,Z.I0)();return(0,P.useEffect)((function(){e((0,b.yF)())}),[e]),(0,v.jsx)(w,{children:n&&n.map((function(n){var e=n.name,t=n.number,o=n._id;return(0,v.jsx)(j,{name:e,number:t,id:o},o)}))})},I=t(4942),L=t(1413),N=t(9439),z=f.Z.form(u||(u=(0,m.Z)(["\n  width: 500px;\n  margin-bottom: 15px;\n"]))),D=f.Z.label(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n"]))),K=(f.Z.input(s||(s=(0,m.Z)(["\n  width: 250px;\n  height: 25px;\n"]))),f.Z.button(l||(l=(0,m.Z)(["\n  width: 120px;\n  height: 23px;\n  border: 1px solid #000;\n  border-radius: 8px;\n  background-color: #fff;\n"]))),t(1792)),S=t(8771),A=t(5218),E=function(){var n=(0,P.useState)({name:"",number:""}),e=(0,N.Z)(n,2),t=e[0],o=e[1],r=(0,Z.I0)(),i=(0,Z.v9)(k).items,a=function(n){var e=n.target,t=e.name,r=e.value;o((function(n){return(0,L.Z)((0,L.Z)({},n),{},(0,I.Z)({},t,r))}))},u=function(){o({name:"",number:""})};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(A.x7,{toastOptions:{error:{style:{background:"red",duration:2e3,position:"top-right",animation:"custom-enter 1s ease, custom-exit 1s ease"}}}}),(0,v.jsxs)(z,{onSubmit:function(n){if(n.preventDefault(),t.name&&t.name.trim()&&t.number&&t.number.trim())if(i.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))A.ZP.error("".concat(t.name," is already in contacts"));else{var e=(0,L.Z)((0,L.Z)({},t),{},{id:(0,K.x0)()});console.log("New contact:",e),r((0,b.uK)(e)).then((function(){u()})).catch((function(n){console.log(n.message)}))}else A.ZP.error("Please fill out all the fields")},children:[(0,v.jsxs)(D,{children:["Name",(0,v.jsx)(S.Z,{value:t.name,onChange:a,type:"text",name:"name",variant:"outlined",autoComplete:"on"})]}),(0,v.jsxs)(D,{children:["Number",(0,v.jsx)(S.Z,{value:t.number,onChange:a,type:"tel",name:"number",variant:"outlined",autoComplete:"on"})]}),(0,v.jsx)(g.Z,{type:"submit",variant:"contained",children:"Add contact"})]})]})},G=f.Z.label(d||(d=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),O=t(1146),Q=function(){var n=(0,Z.v9)(C),e=(0,Z.I0)();return(0,v.jsxs)(G,{children:["Find contacts by name",(0,v.jsx)(S.Z,{type:"text",value:"".concat(n),onChange:function(n){return function(n){e((0,O.Tv)(n))}(n.target.value)},variant:"outlined"})]})},T=t(4217),q=function(){return(0,Z.v9)(T.Qb)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(E,{}),(0,v.jsx)(Q,{}),(0,v.jsx)(F,{})]})}}}]);
//# sourceMappingURL=354.691b0032.chunk.js.map