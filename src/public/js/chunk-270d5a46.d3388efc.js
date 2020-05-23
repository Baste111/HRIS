(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-270d5a46"],{"013f":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-content",[r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6",lg:"4"}},[r("div",{staticClass:"mb-10 text-center"},[r("v-avatar",{staticClass:"text-center mb-5",attrs:{size:100}},[r("v-img",{attrs:{src:n("cf05"),"lazy-src":n("cf05")}})],1),r("h2",[t._v("Human Resources Information System")])],1),r("div",{staticClass:"mb-10"},[r("span",{staticClass:"overline d-block mb-2"},[t._v("Login your credentials.")]),r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-text-field",{attrs:{outlined:"",label:"Username",error:t.hasError(t.accountError.username),"error-messages":t.accountError.username},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),r("v-col",{attrs:{cols:"12"}},[r("custom-password-field",{attrs:{outlined:"",label:"Password",type:"password",password:t.form.password,error:t.hasError(t.accountError.password),"error-messages":t.accountError.password,"custom-action":t.login},on:{"update:password":function(e){return t.$set(t.form,"password",e)}}})],1),r("v-col",{attrs:{cols:"12"}},[r("v-btn",{attrs:{color:"primary",block:"",loading:t.isLoading,disabled:!t.isFormValid},on:{click:t.login}},[t._v("Login")])],1)],1),r("p",{staticClass:"body-2 font-weight-bold d-block text-center mt-10"},[t._v(" Copyright © UDM Dev Team "+t._s((new Date).getFullYear())+". ")])],1)])],1)],1)],1)],1)},a=[],o=(n("96cf"),n("1da1")),s=n("ef09"),i=n("7c76"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-text-field",{attrs:{label:t.label,type:t.type,outlined:t.outlined,"append-icon":t.icon,error:t.error,"error-messages":t.errorMessages},on:{"click:append":function(e){t.shouldReveal=!t.shouldReveal},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.customAction(e)}},model:{value:t.passwordLocal,callback:function(e){t.passwordLocal=e},expression:"passwordLocal"}})},u=[],l={name:"custom-password-field",props:{customAction:{type:Function,required:!1},error:{type:Boolean,required:!1},outlined:{type:Boolean,required:!1},errorMessages:{type:String,required:!1},label:{type:String,required:!1},password:{type:String,required:!0}},data:function(){return{shouldReveal:!1,passwordLocal:""}},computed:{icon:function(){return this.shouldReveal?"mdi-eye-off":"mdi-eye"},type:function(){return this.shouldReveal?"text":"password"}},watch:{password:function(t){this.passwordLocal=t},passwordLocal:function(t){this.$emit("update:password",t)}},created:function(){this.passwordLocal=this.password}},d=l,f=n("2877"),v=n("6544"),p=n.n(v),h=n("8654"),g=Object(f["a"])(d,c,u,!1,null,null,null),m=g.exports;p()(g,{VTextField:h["a"]});var b={username:"",password:""},y={components:{CustomPasswordField:m},data:function(){return{isLoading:!1,form:Object.assign({},b),defaultForm:b}},mixins:[i["a"]],computed:{accountError:function(){return this.$store.state.account.error},isFormValid:function(){return this.form.username&&this.form.password},currentAccountActions:function(){return this.$store.state.account.current.actions}},watch:{"$store.state.account.isAuthenticated":function(t){if(t){var e=this.currentAccountActions[0].to;this.$router.push(e),this.$store.commit(s["d"],{})}}},methods:{login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,n={username:t.form.username,password:t.form.password},e.next=4,t.$store.dispatch(s["a"],n);case 4:t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()}}},w=y,x=n("7496"),j=n("8212"),O=n("8336"),k=n("62ad"),C=n("a523"),S=n("a75b"),z=n("adda"),E=n("0fd9"),L=Object(f["a"])(w,r,a,!1,null,null,null);e["default"]=L.exports;p()(L,{VApp:x["a"],VAvatar:j["a"],VBtn:O["a"],VCol:k["a"],VContainer:C["a"],VContent:S["a"],VImg:z["a"],VRow:E["a"],VTextField:h["a"]})},"0fd9":function(t,e,n){"use strict";n("99af"),n("4160"),n("caad"),n("13d5"),n("4ec9"),n("b64b"),n("d3b7"),n("ac1f"),n("2532"),n("3ca3"),n("5319"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),o=(n("4b85"),n("2b0e")),s=n("d9f7"),i=n("80d2"),c=["sm","md","lg","xl"],u=["start","end","center"];function l(t,e){return c.reduce((function(n,r){return n[t+Object(i["C"])(r)]=e(),n}),{})}var d=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},f=l("align",(function(){return{type:String,default:null,validator:d}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},p=l("justify",(function(){return{type:String,default:null,validator:v}})),h=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=l("alignContent",(function(){return{type:String,default:null,validator:h}})),m={align:Object.keys(f),justify:Object.keys(p),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function y(t,e,n){var r=b[t];if(null!=n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var w=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:v}},p),{},{alignContent:{type:String,default:null,validator:h}},g),render:function(t,e){var n=e.props,a=e.data,o=e.children,i="";for(var c in n)i+=String(n[c]);var u=w.get(i);return u||function(){var t,e;for(e in u=[],m)m[e].forEach((function(t){var r=n[t],a=y(e,t,r);a&&u.push(a)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(t,"align-".concat(n.align),n.align),Object(r["a"])(t,"justify-".concat(n.justify),n.justify),Object(r["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(i,u)}(),t(n.tag,Object(s["a"])(a,{staticClass:"row",class:u}),o)}})},3408:function(t,e,n){},"4ec9":function(t,e,n){"use strict";var r=n("6d61"),a=n("6566");t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),a)},"62ad":function(t,e,n){"use strict";n("4160"),n("caad"),n("13d5"),n("45fc"),n("4ec9"),n("a9e3"),n("b64b"),n("d3b7"),n("ac1f"),n("3ca3"),n("5319"),n("2ca0"),n("159b"),n("ddb0");var r=n("ade3"),a=n("5530"),o=(n("4b85"),n("2b0e")),s=n("d9f7"),i=n("80d2"),c=["sm","md","lg","xl"],u=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),l=function(){return c.reduce((function(t,e){return t["offset"+Object(i["C"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(i["C"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(u),offset:Object.keys(l),order:Object.keys(d)};function v(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var a=e.replace(t,"");r+="-".concat(a)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var p=new Map;e["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},u),{},{offset:{type:[String,Number],default:null}},l),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,a=e.data,o=e.children,i=(e.parent,"");for(var c in n)i+=String(n[c]);var u=p.get(i);return u||function(){var t,e;for(e in u=[],f)f[e].forEach((function(t){var r=n[t],a=v(e,t,r);a&&u.push(a)}));var a=u.some((function(t){return t.startsWith("col-")}));u.push((t={col:!a||!n.cols},Object(r["a"])(t,"col-".concat(n.cols),n.cols),Object(r["a"])(t,"offset-".concat(n.offset),n.offset),Object(r["a"])(t,"order-".concat(n.order),n.order),Object(r["a"])(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(i,u)}(),t(n.tag,Object(s["a"])(a,{class:u}),o)}})},6566:function(t,e,n){"use strict";var r=n("9bf2").f,a=n("7c73"),o=n("e2cc"),s=n("0366"),i=n("19aa"),c=n("2266"),u=n("7dd0"),l=n("2626"),d=n("83ab"),f=n("f183").fastKey,v=n("69f3"),p=v.set,h=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var l=t((function(t,r){i(t,l,e),p(t,{type:e,index:a(null),first:void 0,last:void 0,size:0}),d||(t.size=0),void 0!=r&&c(r,t[u],t,n)})),v=h(e),g=function(t,e,n){var r,a,o=v(t),s=m(t,e);return s?s.value=n:(o.last=s={index:a=f(e,!0),key:e,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=s),r&&(r.next=s),d?o.size++:t.size++,"F"!==a&&(o.index[a]=s)),t},m=function(t,e){var n,r=v(t),a=f(e);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==e)return n};return o(l.prototype,{clear:function(){var t=this,e=v(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,d?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),r=m(e,t);if(r){var a=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==r&&(n.first=a),n.last==r&&(n.last=o),d?n.size--:e.size--}return!!r},forEach:function(t){var e,n=v(this),r=s(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!m(this,t)}}),o(l.prototype,n?{get:function(t){var e=m(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),d&&r(l.prototype,"size",{get:function(){return v(this).size}}),l},setStrong:function(t,e,n){var r=e+" Iterator",a=h(e),o=h(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:a(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),l(e)}}},"6d61":function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("94ca"),s=n("6eeb"),i=n("f183"),c=n("2266"),u=n("19aa"),l=n("861d"),d=n("d039"),f=n("1c7e"),v=n("d44e"),p=n("7156");t.exports=function(t,e,n){var h=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),m=h?"set":"add",b=a[t],y=b&&b.prototype,w=b,x={},j=function(t){var e=y[t];s(y,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!l(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!l(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(o(t,"function"!=typeof b||!(g||y.forEach&&!d((function(){(new b).entries().next()})))))w=n.getConstructor(e,t,h,m),i.REQUIRED=!0;else if(o(t,!0)){var O=new w,k=O[m](g?{}:-0,1)!=O,C=d((function(){O.has(1)})),S=f((function(t){new b(t)})),z=!g&&d((function(){var t=new b,e=5;while(e--)t[m](e,e);return!t.has(-0)}));S||(w=e((function(e,n){u(e,w,t);var r=p(new b,e,w);return void 0!=n&&c(n,r[m],r,h),r})),w.prototype=y,y.constructor=w),(C||z)&&(j("delete"),j("has"),h&&j("get")),(z||k)&&j(m),g&&y.clear&&delete y.clear}return x[t]=w,r({global:!0,forced:w!=b},x),v(w,t),g||n.setStrong(w,t,h),w}},8212:function(t,e,n){"use strict";n("a9e3");var r=n("5530"),a=(n("3408"),n("a9ad")),o=n("24b2"),s=n("80d2"),i=n("58df");e["a"]=Object(i["a"])(a["a"],o["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48},tile:Boolean},computed:{classes:function(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,"v-avatar--tile":this.tile}},styles:function(){return Object(r["a"])({height:Object(s["g"])(this.size),minWidth:Object(s["g"])(this.size),width:Object(s["g"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})}}]);
//# sourceMappingURL=chunk-270d5a46.d3388efc.js.map