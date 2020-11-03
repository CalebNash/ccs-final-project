(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{35:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),s=n.n(r),o=n(12),c=n.n(o),i=(n(34),n(35),n(15)),l=n.n(i),u=n(19),h=n(7),j=n(8),b=n(13),d=n(10),p=n(9),m=n(14),O=n.n(m),g=n(20),f=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleRegistration",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},r=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",a);case 5:return s=e.sent,e.next=8,s.json().catch(r);case 8:(o=e.sent).key&&O.a.set("Authorization","Token ".concat(o.key));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.handleRegistration(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"email"}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password1"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password1",name:"password1",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password2"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password2",name:"password2",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})}}]),n}(s.a.Component),x=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",register:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(g.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,s,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},r=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/login/",a);case 5:return s=e.sent,e.next=8,s.json().catch(r);case 8:(o=e.sent).key&&(O.a.set("Authorization","Token ".concat(o.key)),this.props.history.push("/employee"));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password",name:"password",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})]})}}]),n}(s.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"Home"})})}}]),n}(s.a.Component),y=n(28),C=function(e){e.latitude,e.longitude;return Object(a.jsx)("div",{style:{height:"400px",width:"400px"},children:Object(a.jsx)(y.a,{bootstrapURLKeys:{key:"AIzaSyD_ypcJt0g5ztjIqyTG6RplaHFJ7boMbqI"},defaultCenter:{lat:32.5093,lng:-92.1193},defaultZoom:12,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){return function(e,t){var n=new t.InfoWindow({content:'<h5>Desiard Street Shelter</h5><p>hours: Mon - Sun 6am - 6pm</p> <a href="https://www.google.com/maps/place/807 Desiard St, Monroe, LA 71201">807 Desiard St, Monroe, LA 71201</a>'}),a=new t.Marker({position:{lat:32.50601,lng:-92.11109},map:e,title:"Desiard Street Shelter"});return a.addListener("click",(function(){n.open(e,a)})),a}(e.map,e.maps)}})})},k=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(C,{})}}]),n}(s.a.Component),w=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"EmployeePage"})})}}]),n}(s.a.Component),S=n(17),N=n(3),L=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={loggedIn:!!O.a.get("Authorization")},a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleLogout",value:function(){var e=Object(u.a)(l.a.mark((function e(t){var n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/logout/",n);case 5:return r=e.sent,e.next=8,r.json().catch(a);case 8:"Successfully logged out."===e.sent.detail&&(O.a.remove("Authorization"),this.props.history.push("/"));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(a.jsx)(S.b,{to:"/",children:Object(a.jsx)("button",{className:"btn menu-button",type:"button",children:"Home"})}),Object(a.jsx)(S.b,{to:"/login",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Login"})}),Object(a.jsx)(S.b,{to:"/register",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Register"})}),Object(a.jsx)(S.b,{to:"/gethelp",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Get Help"})}),Object(a.jsx)("button",{className:"btn  menu-button",type:"button",onClick:this.handleLogout,children:"Logout"})]}),Object(a.jsxs)(N.c,{children:[Object(a.jsx)(N.a,{path:"/",exact:!0,component:v}),Object(a.jsx)(N.a,{path:"/login",component:x}),Object(a.jsx)(N.a,{path:"/register",component:f}),Object(a.jsx)(N.a,{path:"/gethelp",component:k}),Object(a.jsx)(N.a,{path:"/employee",component:w})]})]})}}]),n}(s.a.Component),F=Object(N.f)(L),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(S.a,{children:Object(a.jsx)(F,{})})}),document.getElementById("root")),T()}},[[42,1,2]]]);
//# sourceMappingURL=main.156eaf81.chunk.js.map