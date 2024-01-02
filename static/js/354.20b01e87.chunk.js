"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[354],{8354:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r,i,o,a,u,c,l,s,d,f,m,p=t(168),x=t(7686),h=x.Z.li(r||(r=(0,p.Z)(["\n  display: inline-grid;\n  // align-items: center;\n  gap: 20px;\n  border: 1px solid black;\n  margin-bottom: 20px;\n  padding: 30px;\n"]))),b=x.Z.h2(i||(i=(0,p.Z)(["\n  font-size: 30px;\n  font-weight: 400;\n"]))),g=x.Z.p(o||(o=(0,p.Z)(["\n  font-size: 30px;\n"]))),Z=x.Z.button(a||(a=(0,p.Z)(["\n  width: 100px;\n  height: 25px;\n  border: 1px solid #000;\n  border-radius: 8px;\n  background-color: #fff;\n"]))),v=t(3634),j=t(4420),w=t(184),y=function(n){var e=n.name,t=n.number,r=n.id,i=(0,j.I0)();return(0,w.jsxs)(h,{children:[(0,w.jsxs)(b,{children:["Name: ",e," "]}),(0,w.jsxs)(g,{children:["Phone: ",t]}),(0,w.jsx)(Z,{type:"button",onClick:function(){i((0,v.GK)(r))},children:"Delete"})]},r)},k=x.Z.ul(u||(u=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: auto auto auto;\n  column-gap: 20px;\n  padding: 0;\n"]))),C=t(3553),_=function(n){return n.contacts.filter},I=function(n){return n.contacts.contacts},L=(0,C.P1)([I,_],(function(n,e){return n.items.filter((function(n){var t=n.name;return t&&t.toLowerCase().includes(e.toLowerCase())}))})),F=t(2791),N=function(){var n=(0,j.v9)(L),e=(0,j.I0)();return(0,F.useEffect)((function(){e((0,v.yF)())}),[e]),(0,w.jsx)(k,{children:n&&n.map((function(n){var e=n.name,t=n.number,r=n.id;return(0,w.jsx)(y,{name:e,number:t,id:r},r)}))})},P=t(4942),q=t(1413),z=t(9439),D=x.Z.form(c||(c=(0,p.Z)(["\n  width: 500px;\n"]))),K=x.Z.label(l||(l=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),S=x.Z.input(s||(s=(0,p.Z)(["\n  width: 250px;\n  height: 25px;\n"]))),A=x.Z.button(d||(d=(0,p.Z)(["\n  width: 120px;\n  height: 23px;\n  border: 1px solid #000;\n  border-radius: 8px;\n  background-color: #fff;\n"]))),E=t(2855),G=function(){var n=(0,F.useState)({name:"",number:""}),e=(0,z.Z)(n,2),t=e[0],r=e[1],i=(0,j.I0)(),o=(0,j.v9)(I).items,a=function(n){var e=n.target,t=e.name,i=e.value;r((function(n){return(0,q.Z)((0,q.Z)({},n),{},(0,P.Z)({},t,i))}))},u=function(){r({name:"",number:""})};return(0,w.jsxs)(D,{onSubmit:function(n){if(n.preventDefault(),t.name.trim()&&t.number.trim())if(o.find((function(n){return n.name.toLowerCase()===t.name.toLowerCase()})))alert("".concat(t.name," is already in contacts"));else{var e=(0,q.Z)((0,q.Z)({},t),{},{id:(0,E.x0)()});console.log(e),i((0,v.uK)(e)).then((function(){u()})).catch((function(n){console.log(n.message)}))}else alert("Please fill in all the fields")},children:[(0,w.jsxs)(K,{children:["Name",(0,w.jsx)(S,{value:t.name,onChange:a,type:"text",name:"name",required:!0})]}),(0,w.jsxs)(K,{children:["Number",(0,w.jsx)(S,{value:t.number,onChange:a,type:"tel",name:"number",required:!0})]}),(0,w.jsx)(A,{type:"submit",children:"Add contact"})]})},Q=x.Z.label(f||(f=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),T=x.Z.input(m||(m=(0,p.Z)(["\n  width: 250px;\n  height: 25px;\n  margin-top: 10px;\n"]))),B=t(1146),H=function(){var n=(0,j.v9)(_),e=(0,j.I0)();return(0,w.jsxs)(Q,{children:["Find contacts by name",(0,w.jsx)(T,{type:"text",value:"".concat(n),onChange:function(n){return function(n){e((0,B.Tv)(n))}(n.target.value)}})]})},J=t(4217),M=function(){return(0,j.v9)(J.Q)&&(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(G,{}),(0,w.jsx)(H,{}),(0,w.jsx)(N,{})]})}}}]);
//# sourceMappingURL=354.20b01e87.chunk.js.map