import{u as d,j as e,L as u,r as p}from"./index-B7X2Xi47.js";import{D as f}from"./DocumentTitle-Bv9xnYzZ.js";import{c as h,a as r,B as a,T as x,F as _,b as j,d as i,e as n,E as l,f as g}from"./TextField-DMq34NqP.js";const w="_container_1gfwd_1",N="_title_1gfwd_14",b="_form_1gfwd_20",v="_field_1gfwd_26",R="_input_1gfwd_30",T="_error_1gfwd_34",k="_button_1gfwd_39",q="_link_1gfwd_57",s={container:w,title:N,form:b,field:v,input:R,error:T,button:k,link:q},y=h({name:r().min(3,"Too Short!").required("Required"),email:r().email("Invalid email").required("Required"),password:r().min(6,"Password must be at least 6 characters").required("Required")}),F=()=>{const o=d(),c=(t,{resetForm:m})=>{o(p(t)),m()};return e.jsxs(a,{className:s.container,children:[e.jsx(x,{variant:"h5",gutterBottom:!0,className:s.title,children:"Register"}),e.jsx(_,{initialValues:{name:"",email:"",password:""},validationSchema:y,onSubmit:c,children:({isSubmitting:t})=>e.jsxs(j,{className:s.form,children:[e.jsx(a,{className:s.field,children:e.jsx(i,{name:"email",as:n,label:"Email",fullWidth:!0,variant:"outlined",className:s.input,helperText:e.jsx(l,{name:"email",component:"span",className:s.error})})}),e.jsx(a,{className:s.field,children:e.jsx(i,{name:"email",as:n,label:"Email",fullWidth:!0,variant:"outlined",className:s.input,helperText:e.jsx(l,{name:"email",component:"span",className:s.error})})}),e.jsx(a,{className:s.field,children:e.jsx(i,{name:"password",as:n,label:"Password",type:"password",fullWidth:!0,variant:"outlined",className:s.input,helperText:e.jsx(l,{name:"password",component:"span",className:s.error})})}),e.jsx(g,{className:s.button,type:"submit",variant:"contained",color:"primary",fullWidth:!0,disabled:t,children:"Register"}),e.jsxs(a,{className:s.title,textAlign:"center",mt:2,children:["Already have an account?"," ",e.jsxs(u,{to:"/login",className:s.link,children:["Login"," "]})]})]})})]})};function W(){return e.jsxs("div",{children:[e.jsx(f,{children:"Registration"}),e.jsx(F,{})]})}export{W as default};
//# sourceMappingURL=Register-BjvFAoGr.js.map
