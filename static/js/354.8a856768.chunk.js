"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[354],{8354:function(n,e,t){t.r(e),t.d(e,{default:function(){return T}});var r,i,a,o,u,c,s,l,d,m=t(168),f=t(225),x=f.Z.li(r||(r=(0,m.Z)(["\n  display: inline-grid;\n  // align-items: center;\n  gap: 20px;\n  border: 1px solid black;\n  margin-bottom: 20px;\n  padding: 30px;\n"]))),p=f.Z.h2(i||(i=(0,m.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n"]))),h=f.Z.p(a||(a=(0,m.Z)(["\n  font-size: 30px;\n"]))),b=t(6052),Z=t(4420),g=t(8571),v=t(184),j=function(n){var e=n.name,t=n.number,r=n.id,i=(0,Z.I0)();return(0,v.jsxs)(x,{children:[(0,v.jsxs)(p,{children:["Name: ",e," "]}),(0,v.jsxs)(h,{children:["Phone: ",t]}),(0,v.jsx)(g.Z,{type:"button",onClick:function(){i((0,b.GK)(r))},variant:"contained",children:"Delete"})]},r)},y=f.Z.ul(o||(o=(0,m.Z)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  column-gap: 20px;\n  padding: 0;\n"]))),w=t(3553),k=function(n){return n.contacts.filter},C=function(n){return n.contacts.contacts},_=(0,w.P1)([C,k],(function(n,e){return n.items.filter((function(n){var t=n.name;return t&&t.toLowerCase().includes(e.toLowerCase())}))})),P=t(2791),I=function(){var n=(0,Z.v9)(_),e=(0,Z.I0)();return(0,P.useEffect)((function(){e((0,b.yF)())}),[e]),(0,v.jsx)(y,{children:n&&n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,v.jsx)(j,{name:e,number:t,id:r},r)}))})},L=t(4942),F=t(1413),N=t(9439),q=f.Z.form(u||(u=(0,m.Z)(["\n  width: 500px;\n  margin-bottom: 15px;\n"]))),z=f.Z.label(c||(c=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 15px;\n"]))),D=(f.Z.input(s||(s=(0,m.Z)(["\n  width: 250px;\n  height: 25px;\n"]))),f.Z.button(l||(l=(0,m.Z)(["\n  width: 120px;\n  height: 23px;\n  border: 1px solid #000;\n  border-radius: 8px;\n  background-color: #fff;\n"]))),t(1792)),K=t(8771),S=t(5218),A=function(){var n=(0,P.useState)({name:"",number:""}),e=(0,N.Z)(n,2),t=e[0],r=e[1],i=(0,Z.I0)(),a=(0,Z.v9)(C).items,o=function(n){var e=n.target,t=e.name,i=e.value;r((function(n){return(0,F.Z)((0,F.Z)({},n),{},(0,L.Z)({},t,i))}))},u=function(){r({name:"",number:""})};return(0,v.jsxs)(q,{onSubmit:function(n){if(n.preventDefault(),t.name.trim()&&t.number.trim())if(a.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))S.ZP.error("".concat(t.name," is already in contacts"));else{var e=(0,F.Z)((0,F.Z)({},t),{},{id:(0,D.x0)()});i((0,b.uK)(e)).then((function(){u()})).catch((function(n){console.log(n.message)}))}else S.ZP.error("Please fill in all the fields")},children:[(0,v.jsx)(S.x7,{toastOptions:{success:{style:{background:"green"}},error:{style:{background:"red"}}}}),(0,v.jsxs)(z,{children:["Name",(0,v.jsx)(K.Z,{value:t.name,onChange:o,type:"text",name:"name",required:!0,variant:"outlined"})]}),(0,v.jsxs)(z,{children:["Number",(0,v.jsx)(K.Z,{value:t.number,onChange:o,type:"tel",name:"number",required:!0,variant:"outlined"})]}),(0,v.jsx)(g.Z,{type:"submit",variant:"contained",children:"Add contact"})]})},E=f.Z.label(d||(d=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),G=t(1146),O=function(){var n=(0,Z.v9)(k),e=(0,Z.I0)();return(0,v.jsxs)(E,{children:["Find contacts by name",(0,v.jsx)(K.Z,{type:"text",value:"".concat(n),onChange:function(n){return function(n){e((0,G.Tv)(n))}(n.target.value)},variant:"outlined"})]})},Q=t(4217),T=function(){return(0,Z.v9)(Q.Qb)&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(A,{}),(0,v.jsx)(O,{}),(0,v.jsx)(I,{})]})}}}]);
//# sourceMappingURL=354.8a856768.chunk.js.map