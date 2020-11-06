(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{57:function(e,t,n){},61:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(16),o=n.n(i),r=(n(56),n(57),n(5)),l=n.n(r),h=n(13),d=n(7),j=n(8),b=n(6),m=n(10),p=n(9),u=n(15),O=n.n(u),x=n(22),f=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={username:"",email:"",password1:"",password2:""},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleRegistration",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var a,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},c=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/registration/",a);case 5:return s=e.sent,e.next=8,s.json().catch(c);case 8:(i=e.sent).key&&O.a.set("Authorization","Token ".concat(i.key));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Register"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.handleRegistration(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"email"}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",name:"email",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password1"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password1",name:"password1",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password2"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password2",name:"password2",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})]})}}]),n}(s.a.Component),g=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={username:"",password:"",register:!1},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleLogin",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var a,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},c=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/login/",a);case 5:return s=e.sent,e.next=8,s.json().catch(c);case 8:(i=e.sent).key&&(O.a.set("Authorization","Token ".concat(i.key)),this.props.history.push("/employee"));case 10:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Login"}),Object(a.jsxs)("form",{className:"col-4",onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"title",children:"username"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"username",name:"username",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"title",children:"password"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"password",name:"password",value:this.state.title,onChange:this.handleChange})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})]})}}]),n}(s.a.Component),v=n(68),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={newEvents:[]},a}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/events/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({newEvents:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state.newEvents);var e=this.state.newEvents.map((function(e){return Object(a.jsxs)(v.a.Item,{children:[Object(a.jsx)("img",{className:"d-block w-100",src:e.image,alt:"First slide"}),Object(a.jsxs)(v.a.Caption,{children:[Object(a.jsx)("h3",{children:e.title}),Object(a.jsx)("p",{children:e.body})]})]},e.id)}));return Object(a.jsx)("div",{children:Object(a.jsx)(v.a,{children:e})})}}]),n}(s.a.Component),y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Home"}),Object(a.jsx)("div",{className:"carousel",children:Object(a.jsx)(k,{})})]})}}]),n}(s.a.Component),C=n(50),N=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={locations:[],map:{},maps:{}},a.renderMarkers=a.renderMarkers.bind(Object(b.a)(a)),a.addMarkers=a.addMarkers.bind(Object(b.a)(a)),a.addToState=a.addToState.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"addToState",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/locations/");case 2:return a=e.sent,e.next=5,a.json();case 5:return c=e.sent,e.next=8,this.setState({locations:c});case 8:return e.next=10,this.setState({map:t});case 10:return e.next=12,this.setState({maps:n});case 12:this.addMarkers();case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"addMarkers",value:function(){for(var e=this.state.locations,t=0;t<e.length;t++)console.log("hello"),this.renderMarkers(e[t])}},{key:"renderMarkers",value:function(e){console.log("hello",e);var t=this.state.map,n=this.state.maps,a=parseFloat(e.lat),c=parseFloat(e.lng),s=new n.InfoWindow({content:"<h5>".concat(e.name,"</h5><p>hours: ").concat(e.hours,'</p> <a href="https://www.google.com/maps/place/').concat(e.address,'">').concat(e.address,"</a>")}),i=new n.Marker({position:{lat:a,lng:c},map:t,title:"Desiard Street Shelter"});return i.addListener("click",(function(){s.open(t,i)})),i}},{key:"render",value:function(){var e=this;return console.log("maps: ",this.state.maps),console.log("map: ",this.state.map),Object(a.jsx)("div",{children:Object(a.jsx)("div",{style:{height:"400px",width:"400px"},children:Object(a.jsx)(C.a,{bootstrapURLKeys:{key:"AIzaSyD_ypcJt0g5ztjIqyTG6RplaHFJ7boMbqI"},defaultCenter:{lat:32.5059041,lng:-92.11102670000001},defaultZoom:12,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,a=t.maps;return e.addToState(n,a)}})})})}}]),n}(s.a.Component),w=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={},a}return Object(j.a)(n,[{key:"render",value:function(){return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsx)(N,{})})}}]),n}(s.a.Component),L=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={image:null,preview:"",title:"",body:""},a.handleImage=a.handleImage.bind(Object(b.a)(a)),a.addImage=a.addImage.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleImage",value:function(e){var t=this,n=e.target.files[0];this.setState({image:n});var a=new FileReader;a.onloadend=function(){t.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"addImage",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("image",this.state.image),n.append("title",this.state.title),n.append("body",this.state.body),console.log(n),a={method:"POST",headers:{"X-CSRFToken":O.a.get("csrftoken")},body:n},c=function(e){return console.warn(e)},e.next=10,fetch("/api/v1/events/",a);case 10:return s=e.sent,e.next=13,s.json().catch(c);case 13:i=e.sent,console.log(i),i.key&&O.a.set("Authorization","Token ".concat(i.key));case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("form",{className:"col-12 col-md-6 mb-5 form",onSubmit:function(t){return e.addImage(t)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"image",children:"Add picture"}),Object(a.jsx)("input",{type:"file",id:"image",name:"image",onChange:this.handleImage}),Object(a.jsx)("img",{className:"image-preview",src:this.state.preview,alt:""})]}),Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:this.state.title,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"body",children:"Body"}),Object(a.jsx)("textarea",{rows:"5",type:"text",className:"form-control",id:"body",name:"body",value:this.state.body,onChange:this.handleChange}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary mt-2",children:"Add Event"})]})})}}]),n}(s.a.Component),S=n(38),F=n(39),T=n(26),E=n.n(T),I=n(67),M=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={locations:[],pickedLocation:{},isEditing:!1},a.editGeoCode=a.editGeoCode.bind(Object(b.a)(a)),a.deleteLocation=a.deleteLocation.bind(Object(b.a)(a)),a.editLocation=a.editLocation.bind(Object(b.a)(a)),a.handleEdit=a.handleEdit.bind(Object(b.a)(a)),a.editChecked=a.editChecked.bind(Object(b.a)(a)),a.handleClose=a.handleClose.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleClose",value:function(){this.setState({isEditing:!1})}},{key:"componentDidMount",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("api/v1/locations/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({locations:n});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"editGeoCode",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,a,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.a.setApiKey("AIzaSyD_ypcJt0g5ztjIqyTG6RplaHFJ7boMbqI"),E.a.setLanguage("en"),e.next=4,E.a.fromAddress(this.state.pickedLocation.address);case 4:return t=e.sent,n=t.results[0].geometry.location,a=n.lat,c=n.lng,(s=Object(F.a)({},this.state.pickedLocation)).lat=a,s.lng=c,e.next=11,this.setState({pickedLocation:s});case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleEdit",value:function(e){var t=Object(F.a)({},this.state.pickedLocation);t[e.target.name]=e.target.value,this.setState({pickedLocation:t})}},{key:"editChecked",value:function(e){var t=Object(F.a)({},this.state.pickedLocation),n=t.categories,a=e.target.checked,c=e.target.value;if(a)t.categories=[].concat(Object(S.a)(t.categories),[c]);else{var s=n.indexOf(c);s>-1&&(n.splice(s,1),t.categories=n)}this.setState({pickedLocation:t})}},{key:"editLocation",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var a,c,s,i,o,r,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.editGeoCode();case 3:return a=this.state.pickedLocation.dayOpen+" - "+this.state.pickedLocation.dayClose+" - "+this.state.pickedLocation.hourOpen+" - "+this.state.pickedLocation.hourClose,c=this.state.pickedLocation.lat.toString(),s=this.state.pickedLocation.lng.toString(),i={method:"PUT",headers:{"X-CSRFToken":O.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify({name:this.state.pickedLocation.name,address:this.state.pickedLocation.address,lat:c,lng:s,hours:a,categories:this.state.pickedLocation.categories,dayOpen:this.state.pickedLocation.dayOpen,dayClose:this.state.pickedLocation.dayClose,hourOpen:this.state.pickedLocation.hourOpen,hourClose:this.state.pickedLocation.hourClose,website:this.state.pickedLocation.website})},o=function(e){return console.warn(e)},e.next=10,fetch("/api/v1/locations/".concat(n,"/"),i);case 10:return r=e.sent,e.next=13,r.json().catch(o);case 13:return h=e.sent,e.next=16,console.log(h);case 16:return e.next=18,this.setState({pickedLocation:[]});case 18:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"deleteLocation",value:function(){var e=Object(h.a)(l.a.mark((function e(t,n){var a,c,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"DELETE",headers:{"X-CSRFToken":O.a.get("csrftoken"),"Content-Type":"application/json"}},c=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/locations/".concat(n,"/"),a);case 5:return s=e.sent,e.next=8,s.json().catch(c);case 8:return i=e.sent,e.next=11,console.log(i);case 11:return e.next=13,this.setState({pickedLocation:[]});case 13:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,n,c,i,o,r,l=this;console.log(this.state.pickedLocation.categories);var h=this.state.locations.map((function(e){return Object(a.jsx)("button",{className:" btn location-title",onClick:function(){return l.setState({pickedLocation:e,isEditing:!0})},children:e.name},e.id)}));return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("div",{className:"row locations-list-row",children:Object(a.jsx)("div",{id:"locations-list",className:"col-8 card",children:h})}),Object(a.jsxs)(I.a,{dialogClassName:"location-form-modal",show:this.state.isEditing,onHide:this.handleClose,children:[Object(a.jsx)(I.a.Header,{closeButton:!0,children:"Edit a Location"}),Object(a.jsx)(I.a.Body,{children:Object(a.jsxs)("form",{className:"col-12 mb-5 form location-form",onSubmit:function(e){return l.editLocation(e,l.state.pickedLocation.id)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.pickedLocation.name,onChange:this.handleEdit}),Object(a.jsx)("label",{htmlFor:"address",children:"Address"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"adress",name:"address",value:this.state.pickedLocation.address,onChange:this.handleEdit}),Object(a.jsx)("label",{htmlFor:"website",children:"Website"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"website",name:"website",value:this.state.pickedLocation.website,onChange:this.handleEdit}),Object(a.jsxs)("div",{className:"form-group row",children:[Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{htmlFor:"dayOpen",children:"Days open from: "}),Object(a.jsxs)("select",{type:"text",id:"dayOpen",className:"form-control input-sm",name:"dayOpen",value:this.state.pickedLocation.dayOpen,onChange:this.handleEdit,children:[Object(a.jsx)("option",{children:"Mon"}),Object(a.jsx)("option",{children:"Tues"}),Object(a.jsx)("option",{children:"Wed"}),Object(a.jsx)("option",{children:"Thur"}),Object(a.jsx)("option",{children:"Fri"}),Object(a.jsx)("option",{children:"Sat"}),Object(a.jsx)("option",{children:"Sun"})]})]}),Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{htmlFor:"dayClose",children:"To: "}),Object(a.jsxs)("select",{type:"text",id:"dayClose",className:"form-control input-sm",name:"dayClose",value:this.state.pickedLocation.dayClose,onChange:this.handleEdit,children:[Object(a.jsx)("option",{children:"Mon"}),Object(a.jsx)("option",{children:"Tues"}),Object(a.jsx)("option",{children:"Wed"}),Object(a.jsx)("option",{children:"Thur"}),Object(a.jsx)("option",{children:"Fri"}),Object(a.jsx)("option",{children:"Sat"}),Object(a.jsx)("option",{children:"Sun"})]})]})]}),Object(a.jsxs)("div",{className:"form-group row",children:[Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{htmlFor:"hourOpen",children:"Hours open from: "}),Object(a.jsxs)("select",{cols:"5",type:"text",id:"hourOpen",className:"form-control input-sm",name:"hourOpen",value:this.state.pickedLocation.hourOpen,onChange:this.handleEdit,children:[Object(a.jsx)("option",{children:"12am"}),Object(a.jsx)("option",{children:"1am"}),Object(a.jsx)("option",{children:"2am"}),Object(a.jsx)("option",{children:"3am"}),Object(a.jsx)("option",{children:"4am"}),Object(a.jsx)("option",{children:"5am"}),Object(a.jsx)("option",{children:"6am"}),Object(a.jsx)("option",{children:"7am"}),Object(a.jsx)("option",{children:"8am"}),Object(a.jsx)("option",{children:"9am"}),Object(a.jsx)("option",{children:"10am"}),Object(a.jsx)("option",{children:"11am"}),Object(a.jsx)("option",{children:"12pm"}),Object(a.jsx)("option",{children:"1pm"}),Object(a.jsx)("option",{children:"2pm"}),Object(a.jsx)("option",{children:"3pm"}),Object(a.jsx)("option",{children:"4pm"}),Object(a.jsx)("option",{children:"5pm"}),Object(a.jsx)("option",{children:"6pm"}),Object(a.jsx)("option",{children:"7pm"}),Object(a.jsx)("option",{children:"8pm"}),Object(a.jsx)("option",{children:"9pm"}),Object(a.jsx)("option",{children:"10pm"}),Object(a.jsx)("option",{children:"11pm"})]})]}),Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{htmlFor:"hourClose",children:"To: "}),Object(a.jsxs)("select",{type:"text",id:"hourClose",className:"form-control",name:"hourClose",value:this.state.pickedLocation.hourClose,onChange:this.handleEdit,children:[Object(a.jsx)("option",{children:"12am"}),Object(a.jsx)("option",{children:"1am"}),Object(a.jsx)("option",{children:"2am"}),Object(a.jsx)("option",{children:"3am"}),Object(a.jsx)("option",{children:"4am"}),Object(a.jsx)("option",{children:"5am"}),Object(a.jsx)("option",{children:"6am"}),Object(a.jsx)("option",{children:"7am"}),Object(a.jsx)("option",{children:"8am"}),Object(a.jsx)("option",{children:"9am"}),Object(a.jsx)("option",{children:"10am"}),Object(a.jsx)("option",{children:"11am"}),Object(a.jsx)("option",{children:"12pm"}),Object(a.jsx)("option",{children:"1pm"}),Object(a.jsx)("option",{children:"2pm"}),Object(a.jsx)("option",{children:"3pm"}),Object(a.jsx)("option",{children:"4pm"}),Object(a.jsx)("option",{children:"5pm"}),Object(a.jsx)("option",{children:"6pm"}),Object(a.jsx)("option",{children:"7pm"}),Object(a.jsx)("option",{children:"8pm"}),Object(a.jsx)("option",{children:"9pm"}),Object(a.jsx)("option",{children:"10pm"}),Object(a.jsx)("option",{children:"11pm"})]})]})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"overnight",value:"overnight",onChange:this.editChecked,checked:null===(e=this.state.pickedLocation.categories)||void 0===e?void 0:e.includes("overnight")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"overnight",children:"overnight"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"food",value:"food",onChange:this.editChecked,checked:null===(t=this.state.pickedLocation.categories)||void 0===t?void 0:t.includes("food")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"food",children:"food"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"mental health",value:"mental health",onChange:this.editChecked,checked:null===(n=this.state.pickedLocation.categories)||void 0===n?void 0:n.includes("mental health")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"mental health",children:"mental health"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"medicine",value:"medicine",onChange:this.editChecked,checked:null===(c=this.state.pickedLocation.categories)||void 0===c?void 0:c.includes("medicine")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"medicine",children:"medicine"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"financial assistance",value:"financial assistance",onChange:this.editChecked,checked:null===(i=this.state.pickedLocation.categories)||void 0===i?void 0:i.includes("financial assistance")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"financial assistance",children:"financial assistance"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"long term housing",value:"long term housing",onChange:this.editChecked,checked:null===(o=this.state.pickedLocation.categories)||void 0===o?void 0:o.includes("long term housing")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"long term housing",children:"long term housing"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"vocational training",value:"vocational training",onChange:this.editChecked,checked:null===(r=this.state.pickedLocation.categories)||void 0===r?void 0:r.includes("vocational training")}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"vocational training",children:"vocational training"})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})]})}}]),n}(s.a.Component),A=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={name:"",address:"",categories:[],lat:"",lng:"",dayOpen:"Mon",dayClose:"Fri",hourOpen:"8am",hourClose:"5pm",website:"",show:!1},a.getGeoCode=a.getGeoCode.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleChecked=a.handleChecked.bind(Object(b.a)(a)),a.addLocation=a.addLocation.bind(Object(b.a)(a)),a.handleClose=a.handleClose.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"getGeoCode",value:function(){var e=Object(h.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E.a.setApiKey("AIzaSyD_ypcJt0g5ztjIqyTG6RplaHFJ7boMbqI"),E.a.setLanguage("en"),e.next=4,E.a.fromAddress(this.state.address);case 4:return t=e.sent,n=t.results[0].geometry.location,a=n.lat,c=n.lng,e.next=8,this.setState({lat:a});case 8:return e.next=10,this.setState({lng:c});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){this.setState(Object(x.a)({},e.target.name,e.target.value))}},{key:"handleChecked",value:function(e){var t=this.state.categories,n=e.target.checked,a=e.target.value;if(n)this.setState({categories:[].concat(Object(S.a)(this.state.categories),[a])});else{var c=t.indexOf(a);c>-1&&(t.splice(c,1),this.setState({categories:t}))}}},{key:"addLocation",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,c,s,i,o,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,this.getGeoCode();case 3:return n=this.state.dayOpen+" - "+this.state.dayClose+" - "+this.state.hourOpen+" - "+this.state.hourClose,a=this.state.lat.toString(),c=this.state.lng.toString(),s={method:"POST",headers:{"X-CSRFToken":O.a.get("csrftoken"),"Content-Type":"application/json"},body:JSON.stringify({name:this.state.name,address:this.state.address,lat:a,lng:c,hours:n,categories:this.state.categories,dayOpen:this.state.dayOpen,dayClose:this.state.dayClose,hourOpen:this.state.hourOpen,hourClose:this.state.hourClose,website:this.state.website})},i=function(e){return console.warn(e)},e.next=10,fetch("api/v1/locations/",s);case 10:return o=e.sent,e.next=13,o.json().catch(i);case 13:return r=e.sent,e.next=16,console.log(r);case 16:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("button",{onClick:function(){return e.setState({show:!0})},children:"add location"}),Object(a.jsxs)(I.a,{dialogClassName:"location-form-modal",show:this.state.show,onHide:this.handleClose,children:[Object(a.jsx)(I.a.Header,{closeButton:!0,children:"Add a Location"}),Object(a.jsx)(I.a.Body,{children:Object(a.jsxs)("form",{className:"col-12 mb-5 form location-form",onSubmit:function(t){return e.addLocation(t)},children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"name",name:"name",value:this.state.name,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"address",children:"Address"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"adress",name:"address",value:this.state.address,onChange:this.handleChange}),Object(a.jsx)("label",{htmlFor:"website",children:"Website"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"website",name:"website",value:this.state.website,onChange:this.handleChange}),Object(a.jsxs)("div",{className:"form-group row days-open",children:[Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{id:"open-info-lable",htmlFor:"dayOpen",children:"Days open from: "}),Object(a.jsxs)("select",{type:"text",id:"dayOpen ",className:"form-control input-sm",name:"dayOpen",value:this.state.dayOpen,onChange:this.handleChange,children:[Object(a.jsx)("option",{children:"Mon"}),Object(a.jsx)("option",{children:"Tues"}),Object(a.jsx)("option",{children:"Wed"}),Object(a.jsx)("option",{children:"Thur"}),Object(a.jsx)("option",{children:"Fri"}),Object(a.jsx)("option",{children:"Sat"}),Object(a.jsx)("option",{children:"Sun"})]})]}),Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{id:"open-info-lable",htmlFor:"dayClose",children:"To:"}),Object(a.jsxs)("select",{type:"text",id:"dayClose",className:"form-control input-sm",name:"dayClose",value:this.state.dayClose,onChange:this.handleChange,children:[Object(a.jsx)("option",{children:"Mon"}),Object(a.jsx)("option",{children:"Tues"}),Object(a.jsx)("option",{children:"Wed"}),Object(a.jsx)("option",{children:"Thur"}),Object(a.jsx)("option",{children:"Fri"}),Object(a.jsx)("option",{children:"Sat"}),Object(a.jsx)("option",{children:"Sun"})]})]})]}),Object(a.jsxs)("div",{className:"form-group row hours-open",children:[Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{id:"open-info-lable",htmlFor:"hourOpen",children:"Hours open from: "}),Object(a.jsxs)("select",{cols:"5",type:"text",id:"hourOpen",className:"form-control input-sm",name:"hourOpen",value:this.state.hourOpen,onChange:this.handleChange,children:[Object(a.jsx)("option",{children:"12am"}),Object(a.jsx)("option",{children:"1am"}),Object(a.jsx)("option",{children:"2am"}),Object(a.jsx)("option",{children:"3am"}),Object(a.jsx)("option",{children:"4am"}),Object(a.jsx)("option",{children:"5am"}),Object(a.jsx)("option",{children:"6am"}),Object(a.jsx)("option",{children:"7am"}),Object(a.jsx)("option",{children:"8am"}),Object(a.jsx)("option",{children:"9am"}),Object(a.jsx)("option",{children:"10am"}),Object(a.jsx)("option",{children:"11am"}),Object(a.jsx)("option",{children:"12pm"}),Object(a.jsx)("option",{children:"1pm"}),Object(a.jsx)("option",{children:"2pm"}),Object(a.jsx)("option",{children:"3pm"}),Object(a.jsx)("option",{children:"4pm"}),Object(a.jsx)("option",{children:"5pm"}),Object(a.jsx)("option",{children:"6pm"}),Object(a.jsx)("option",{children:"7pm"}),Object(a.jsx)("option",{children:"8pm"}),Object(a.jsx)("option",{children:"9pm"}),Object(a.jsx)("option",{children:"10pm"}),Object(a.jsx)("option",{children:"11pm"})]})]}),Object(a.jsxs)("div",{className:"col-xs-2 form-group form-inline",children:[Object(a.jsx)("label",{id:"open-info-lable",htmlFor:"hourClose",children:"To: "}),Object(a.jsxs)("select",{type:"text",id:"hourClose",className:"form-control",name:"hourClose",value:this.state.hourClose,onChange:this.handleChange,children:[Object(a.jsx)("option",{children:"12am"}),Object(a.jsx)("option",{children:"1am"}),Object(a.jsx)("option",{children:"2am"}),Object(a.jsx)("option",{children:"3am"}),Object(a.jsx)("option",{children:"4am"}),Object(a.jsx)("option",{children:"5am"}),Object(a.jsx)("option",{children:"6am"}),Object(a.jsx)("option",{children:"7am"}),Object(a.jsx)("option",{children:"8am"}),Object(a.jsx)("option",{children:"9am"}),Object(a.jsx)("option",{children:"10am"}),Object(a.jsx)("option",{children:"11am"}),Object(a.jsx)("option",{children:"12pm"}),Object(a.jsx)("option",{children:"1pm"}),Object(a.jsx)("option",{children:"2pm"}),Object(a.jsx)("option",{children:"3pm"}),Object(a.jsx)("option",{children:"4pm"}),Object(a.jsx)("option",{children:"5pm"}),Object(a.jsx)("option",{children:"6pm"}),Object(a.jsx)("option",{children:"7pm"}),Object(a.jsx)("option",{children:"8pm"}),Object(a.jsx)("option",{children:"9pm"}),Object(a.jsx)("option",{children:"10pm"}),Object(a.jsx)("option",{children:"11pm"})]})]})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"overnight",value:"overnight",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"overnight",children:"overnight"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"food",value:"food",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"food",children:"food"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"mental health",value:"mental health",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"mental health",children:"mental health"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"medicine",value:"medicine",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"medicine",children:"medicine"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"financial assistance",value:"financial assistance",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"financial assistance",children:"financial assistance"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"long term housing",value:"long term housing",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"long term housing",children:"long term housing"})]}),Object(a.jsxs)("div",{className:"form-check form-check-inline",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"vocational training",value:"vocational training",onChange:this.handleChecked}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"vocational training",children:"vocational training"})]})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Save"})]})})]})]})}}]),n}(s.a.Component),D=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={page:"Events"},a.handleClick=a.handleClick.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleClick",value:function(e){this.setState({page:e})}},{key:"render",value:function(){var e,t=this,n=this.state.page;return"Events"===n?e=Object(a.jsx)(L,{}):"Locations"===n&&(e=Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)(M,{}),Object(a.jsx)(A,{})]})),Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("section",{id:"employee-pages",className:"row",children:[Object(a.jsx)("button",{className:" btn",onClick:function(){return t.handleClick("Events")},children:"Events"}),Object(a.jsx)("button",{className:" btn",onClick:function(){return t.handleClick("Locations")},children:"Locations"})]}),e]})}}]),n}(s.a.Component),R=n(27),G=n(12),H=(n(61),function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={loggedIn:!!O.a.get("Authorization")},a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a}return Object(j.a)(n,[{key:"handleLogout",value:function(){var e=Object(h.a)(l.a.mark((function e(t){var n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")}},a=function(e){return console.warn(e)},e.next=5,fetch("/api/v1/rest-auth/logout/",n);case 5:return c=e.sent,e.next=8,c.json().catch(a);case 8:"Successfully logged out."===e.sent.detail&&(O.a.remove("Authorization"),this.props.history.push("/"));case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("div",{className:"banner"}),Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg",children:[Object(a.jsx)(R.b,{to:"/",children:Object(a.jsx)("button",{className:"btn menu-button",type:"button",children:"Home"})}),Object(a.jsx)(R.b,{to:"/login",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Login"})}),Object(a.jsx)(R.b,{to:"/register",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Register"})}),Object(a.jsx)(R.b,{to:"/gethelp",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Get Help"})}),Object(a.jsx)(R.b,{to:"/employee",children:Object(a.jsx)("button",{className:"btn  menu-button",type:"button",children:"Employee"})}),Object(a.jsx)("button",{className:"btn  menu-button",type:"button",onClick:this.handleLogout,children:"Logout"})]}),Object(a.jsxs)(G.c,{children:[Object(a.jsx)(G.a,{path:"/",exact:!0,component:y}),Object(a.jsx)(G.a,{path:"/login",component:g}),Object(a.jsx)(G.a,{path:"/register",component:f}),Object(a.jsx)(G.a,{path:"/gethelp",component:w}),Object(a.jsx)(G.a,{path:"/employee",component:D})]})]})}}]),n}(s.a.Component)),J=Object(G.f)(H),z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(R.a,{children:Object(a.jsx)(J,{})})}),document.getElementById("root")),z()}},[[65,1,2]]]);
//# sourceMappingURL=main.87cb45cd.chunk.js.map