(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{32:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(0),s=n.n(r),c=n(24),o=n.n(c),i=(n(31),n(32),n(12)),l=n.n(i),u=n(15),h=n(7),b=n(8),j=n(11),d=n(10),p=n(9),m=n(13),O=n.n(m),g=n(18),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleRegistration",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},r=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",a);case 5:return s=e.sent,e.next=8,s.json().catch(r);case 8:(c=e.sent).key&&O.a.set("Authorization","Token ".concat(c.key));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.handleRegistration(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"email"}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password1"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password1",name:"password1",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password2"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password2",name:"password2",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})}}]),n}(s.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",register:!1},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleLogin=a.handleLogin.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,s,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},r=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/login/",a);case 5:return s=e.sent,e.next=8,s.json().catch(r);case 8:(c=e.sent).key&&O.a.set("Authorization","Token ".concat(c.key));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password",name:"password",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})]})}}]),n}(s.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home"})})}}]),n}(s.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Get Help"})})}}]),n}(s.a.Component),C=n(16),k=n(2),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a.handleLogout=a.handleLogout.bind(Object(j.a)(a)),a}return Object(b.a)(n,[{key:"handleLogout",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/logout/",n);case 5:return r=e.sent,e.next=8,r.json().catch(a);case 8:"Successfully logged out."===e.sent.detail&&O.a.remove("Authorization");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)(C.a,{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(a.jsx)(C.b,{to:"/",children:Object(a.jsx)("button",{className:"btn menu-button",type:"button",children:"Home"})}),Object(a.jsx)(C.b,{to:"/login",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Login"})}),Object(a.jsx)(C.b,{to:"/register",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Register"})}),Object(a.jsx)(C.b,{to:"/gethelp",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Get Help"})}),Object(a.jsx)("button",{className:"btn  menu-button",type:"button",onClick:this.handleLogout,children:"Logout"})]}),Object(a.jsxs)(k.c,{children:[Object(a.jsx)(k.a,{path:"/",exact:!0,component:v}),Object(a.jsx)(k.a,{path:"/login",component:x}),Object(a.jsx)(k.a,{path:"/register",component:f}),Object(a.jsx)(k.a,{path:"/gethelp",component:y})]})]})}}]),n}(s.a.Component),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),N()}},[[39,1,2]]]);
//# sourceMappingURL=main.88501c16.chunk.js.map