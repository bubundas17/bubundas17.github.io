(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=118},130:function(t,e,n){"use strict";var r=n(35);n.n(r).a},131:function(t,e,n){"use strict";var r=n(36);n.n(r).a},132:function(t,e,n){},133:function(t,e,n){"use strict";var r=n(37);n.n(r).a},134:function(t,e,n){var r={"./alert.js":135,"./index.js":136,"./tasks.js":137};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=134},135:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o}),n.d(e,"actions",function(){return a});var r=function(){return{show:!1,message:"",color:"success",timeout:6e3}},o={setMessage:function(t,e){t.message=e},show:function(t,e){t.show=e},color:function(t,e){t.color=e}},a={show:function(t,e){var n=t.commit,r=e.color,o=e.message;n("setMessage",o),n("show",!0),n("color",r),setTimeout(function(){n("setMessage",""),n("show",!1),n("color","success")},6e3)},hide:function(t){var e=t.commit;e("setMessage",""),e("show",!1),e("color","success")}}},136:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return a}),n.d(e,"getters",function(){return i}),n.d(e,"mutations",function(){return s});n(25);var r=n(14),o=n.n(r),a=function(){return{test:1,taskList:[{name:"Do Project In Hack Day",completed:!1,todo:[{name:"Choose Teammates",done:!1},{name:"Start alone :(",done:!0},{name:"Decide what project to do",done:!0},{name:"Make Wireframe",done:!0},{name:"Decide what framework to use",done:!0},{name:"Start Building",done:!0},{name:"Keep Building",done:!0},{name:"Check For Bugs",done:!0},{name:"Submit The Project",done:!1}]}]}},i={tasks:function(t){return t.taskList}},s={addTask:function(t,e){t.taskList.push({name:e,completed:!1,todo:[]})},toggleTask:function(t,e){t.taskList[e].completed=!t.taskList[e].completed},margeTask:function(t,e){t.taskList[e.index]=o()({},t.taskList[e.index],e.obj)},removeTask:function(t,e){t.taskList.splice(e,1)},addTodo:function(t,e){t.taskList[e.task].todo.push({done:!1,name:e.name})},removeTodo:function(t,e){t.taskList[e.task].todo.splice(e.todo,1)},toggleTodo:function(t,e){try{t.taskList[e.task].todo[e.todo].done=!t.taskList[e.task].todo[e.todo].done}catch(t){console.log(t)}}}},137:function(t,e){},138:function(t,e,n){"use strict";n.r(e);n(57),n(44),n(45);var r=n(21),o=n.n(r),a=(n(25),n(48),n(95),n(3)),i=n.n(a),s=(n(68),n(69),n(26),n(73),n(74),n(51),n(72),n(102),n(114),n(0)),u=(n(53),n(118)),c=u.keys();function l(t){var e=u(t);return e.default||e}var f={},d=!0,p=!1,h=void 0;try{for(var m,v=c[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){var x=m.value;f[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=l(x)}}catch(t){p=!0,h=t}finally{try{d||null==v.return||v.return()}finally{if(p)throw h}}var y=f,g=(n(81),n(119),n(120),n(122),n(124),n(125),n(128),n(14)),w=n.n(g),_=function(){return{}};function b(t){return t.then(function(t){return t.default||t})}function k(t,e){var n=t.options.data||_;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),w()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function C(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function $(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function E(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function R(t){return Promise.all(E(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=C(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function T(t){return j.apply(this,arguments)}function j(){return(j=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",w()({},e,{meta:$(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function S(t,e){return A.apply(this,arguments)}function A(){return(A=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=B(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,T(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,T(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function N(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function L(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?q:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l=a[c.name||"pathMatch"],f=void 0;if(null==l){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(l)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(f=s(l[d]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===d?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(l).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(l),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=P.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],d=n[2],p=n[3],h=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=d&&null!=f&&f!==d,g="+"===v||"*"===v,w="?"===v||"*"===v,_=n[2]||s,b=h||m;r.push({name:p||o++,prefix:d||"",delimiter:_,optional:w,repeat:g,partial:y,asterisk:!!x,pattern:b?I(b):x?".*":"[^"+U(_)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function D(t,e){var n={},r=w()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function M(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var P=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function q(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function U(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function I(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function B(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var F=n(82),H=n.n(F),J=n(56),K=function(){return b(n.e(3).then(n.bind(null,145)))},z=function(){return b(n.e(2).then(n.bind(null,146)))};s.default.use(J.a),window.history.scrollRestoration="manual";var Q=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var X=n(83),V=n.n(X).a,W={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};Y.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var f={};G.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(a))});var d=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),d)return d.call(a,t)};var p=[t("router-view",r)];return o.keepAlive&&(p=[t("keep-alive",{props:o.keepAliveProps},p)]),t("transition",{props:l,on:f},p)}},Y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],G=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],Z={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},tt={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},et=(n(130),n(11)),nt=Object(et.a)(tt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);nt.options.__file="nuxt-error.vue";var rt=nt.exports,ot={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||L(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:W,NuxtError:rt}},at={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},it=(n(131),Object(et.a)(at,void 0,void 0,!1,null,null,null));it.options.__file="nuxt-loading.vue";var st=it.exports,ut=(n(132),{name:"Alerts",computed:{alertinfo:function(){return this.$store.state.alert}}}),ct=(n(133),Object(et.a)(ut,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{timeout:t.alertinfo.timeout,color:t.alertinfo.color,"multi-line":!1,bottom:"",right:""},model:{value:t.alertinfo.show,callback:function(e){t.$set(t.alertinfo,"show",e)},expression:"alertinfo.show"}},[t._v("\n    "+t._s(t.alertinfo.message)+"\n    "),n("v-btn",{attrs:{dark:"",flat:""},nativeOn:{click:function(e){return t.hideAlert(e)}}},[t._v("Close")])],1)},[],!1,null,"1db6001d",null));ct.options.__file="Alerts.vue";var lt={components:{Alerts:ct.exports},data:function(){return{title:"Tasks Project"}}},ft=Object(et.a)(lt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{light:""}},[n("v-toolbar",{staticClass:"teal darken-2",attrs:{fixed:"",app:"",dark:""}},[n("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),n("v-spacer")],1),t._v(" "),n("v-content",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("alerts"),t._v(" "),n("v-footer",{attrs:{fixed:t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)},[],!1,null,null,null);ft.options.__file="default.vue";var dt={_default:ft.exports},pt={head:{title:"tasks",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js + Vuetify.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&dt["_"+t]||(t="default"),this.layoutName=t,this.layout=dt["_"+t],this.layout},loadLayout:function(t){return t&&dt["_"+t]||(t="default"),Promise.resolve(dt["_"+t])}},components:{NuxtLoading:st}},ht=n(55);s.default.use(ht.a);var mt=n(134),vt=mt.keys(),xt={},yt=vt.find(function(t){return t.includes("./index.")});if(yt&&(xt=qt(yt)),"function"!=typeof xt){xt.modules||(xt.modules={});var gt=!0,wt=!1,_t=void 0;try{for(var bt,kt=vt[Symbol.iterator]();!(gt=(bt=kt.next()).done);gt=!0){var Ct=bt.value,$t=Ct.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"");if("index"!==$t){var Et=$t.split(/\//);if($t=Et[Et.length-1],["state","getters","actions","mutations"].includes($t)){It(Ut(xt,Et,!0),Ct,$t)}else{var Rt="index"===$t;Rt&&Et.pop();var Tt=Ut(xt,Et),jt=qt(Ct);if(Tt[$t=Et.pop()]=Tt[$t]||{},Rt){var St={};if(Tt[$t].appends){St.appends=Tt[$t].appends;var At=!0,Ot=!1,Nt=void 0;try{for(var Lt,Dt=Tt[$t].appends[Symbol.iterator]();!(At=(Lt=Dt.next()).done);At=!0){var Mt=Lt.value;St[Mt]=Tt[$t][Mt]}}catch(t){Ot=!0,Nt=t}finally{try{At||null==Dt.return||Dt.return()}finally{if(Ot)throw Nt}}}Tt[$t]=Object.assign({},Tt[$t],jt,St),Tt[$t].namespaced=!0}else Tt[$t]=Object.assign({},jt,Tt[$t]),Tt[$t].namespaced=!0}}}}catch(t){wt=!0,_t=t}finally{try{gt||null==kt.return||kt.return()}finally{if(wt)throw _t}}}var Pt=xt instanceof Function?xt:function(){return new ht.a.Store(Object.assign({strict:!1},xt,{state:xt.state instanceof Function?xt.state():{}}))};function qt(t){var e=mt(t),n=e.default||e;if(n.commit)throw new Error("[nuxt] store/"+t.replace("./","")+" should export a method which returns a Vuex instance.");if(n.state&&"function"!=typeof n.state)throw new Error("[nuxt] state should be a function in store/"+t.replace("./",""));return n}function Ut(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(1===e.length)return n?t:t.modules;var r=e.shift();return t.modules[r]=t.modules[r]||{},t.modules[r].namespaced=!0,t.modules[r].modules=t.modules[r].modules||{},Ut(t.modules[r],e,n)}function It(t,e,n){var r=mt(e);t.appends=t.appends||[],t.appends.push(n),t[n]=r.default||r}var Bt=n(84),Ft=n.n(Bt);s.default.use(Ft.a),s.default.mixin({methods:{showAlert:function(t,e){this.$store.dispatch("alert/show",{color:t,message:e})},hideAlert:function(){this.$store.dispatch("alert/hide")}}});var Ht=n(85),Jt=function(t){var e=t.store;window.onNuxtReady(function(){Object(Ht.a)({key:"storage"})(e)})};s.default.component(V.name,V),s.default.component(W.name,W),s.default.component(Z.name,Z),s.default.component(ot.name,ot),s.default.use(H.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Kt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function zt(){return(zt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u,c;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new J.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:Q,routes:[{path:"/",component:K,name:"index"},{path:"/:id",component:z,name:"id"}],fallback:!1});case 2:return n=t.sent,(r=Pt(e)).$router=n,o=w()({router:n,store:r,nuxt:{defaultTransition:Kt,transitions:[Kt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Kt,{name:t}):Object.assign({},Kt,t):Kt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,o.context._errored=!!t,t=t?M(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},pt),r.app=o,a=e?e.next:function(t){return o.router.push(t)},e?i=n.resolve(e.url).route:(u=N(n.options.base),i=n.resolve(u).route),t.next=11,S(o,{route:i,next:a,error:o.nuxt.error.bind(o),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 11:c=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");o[t="$"+t]=e,r[t]=o[t];var n="__nuxt_"+t+"_installed__";s.default[n]||(s.default[n]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=16;break;case 16:t.next=19;break;case 19:if("function"!=typeof Jt){t.next=22;break}return t.next=22,Jt(o.context,c);case 22:t.next=25;break;case 25:return t.abrupt("return",{app:o,store:r,router:n});case 26:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Qt,Xt,Vt=[],Wt=window.__NUXT__||{};if(Object.assign(s.default.config,{silent:!0,performance:!1}),!s.default.config.$nuxt){var Yt=s.default.config.errorHandler;s.default.config.errorHandler=function(t,e,n){var r=null;if("function"==typeof Yt){for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];r=Yt.apply(void 0,[t,e,n].concat(a))}if(!0===r)return r;if(e&&e.$root){var u=Object.keys(s.default.config.$nuxt).find(function(t){return e.$root[t]});u&&e.$root[u].error&&"render function"!==n&&e.$root[u].error(t)}if("function"==typeof Yt)return r;console.error(t.message||t)},s.default.config.$nuxt={}}function Gt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Zt(t,e,n){return te.apply(this,arguments)}function te(){return(te=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Qt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?D(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,R(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function ee(t,e){return Wt.serverRendered&&e&&k(t,e),t._Ctor=t,t}function ne(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():O(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function re(t,e,n){return oe.apply(this,arguments)}function oe(){return(oe=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,l,f,d,p,h,m,v,x,y,g,w,_=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return Vt=e===n?[]:$(n,o=[]).map(function(t,e){return L(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&_.$loading.finish&&_.$loading.finish(),n.path!==t.path&&_.$loading.pause&&_.$loading.pause(),a||(a=!0,r(t))},t.next=7,S(Qt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=Qt.nuxt.dateErr,this._hadError=!!Qt.nuxt.err,(c=$(e,u=[])).length){t.next=25;break}return t.next=14,ne.call(this,c,Qt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof rt.layout?rt.layout(Qt.context):rt.layout);case 18:return l=t.sent,t.next=21,ne.call(this,c,Qt.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return Qt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(Gt(c,e,n)),t.prev=27,t.next=30,ne.call(this,c,Qt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!Qt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(Qt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,ne.call(this,c,Qt.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!Qt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:d=!0,t.prev=46,p=!0,h=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(p=(x=v.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(Qt.context);case 58:if(d=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:p=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),h=!0,m=t.t0;case 70:t.prev=70,t.prev=71,p||null==v.return||v.return();case 73:if(t.prev=73,!h){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(d){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=L(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,_._pathChanged&&_._queryChanged||t._path!==Vt[n])t._dataRefresh=!0;else if(!_._pathChanged&&_._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return _._diffQuery[t]}))}if(!_._hadError&&_._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=O(t.options.asyncData,Qt.context).then(function(e){k(t,e),_.$loading.increase&&_.$loading.increase(s)});o.push(c)}if(_.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(Qt.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){_.$loading.increase&&_.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(g=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,g));case 97:return Vt=[],b=g,s.default.config.errorHandler&&s.default.config.errorHandler(b),"function"==typeof(w=rt.layout)&&(w=w(Qt.context)),t.next=103,this.loadLayout(w);case 103:this.error(g),this.$nuxt.$emit("routeChanged",e,n,g),r(!1);case 106:case"end":return t.stop()}var b},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function ae(t,e){E(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,n.components[r]=t),t})}function ie(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?rt.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Qt.context)),this.setLayout(e)}function se(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=$(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.default.set(t.$data,r,n[r])}}),ie.call(n,t)})}function ue(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Xt.afterEach(function(e,n){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function ce(){return(ce=i()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Qt=e.app,Xt=e.router,e.store,t.next=5,Promise.all((u=void 0,u=N((a=Xt).options.base,a.options.mode),E(a.match(u),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=ee(C(e),Wt.data?Wt.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 5:if(n=t.sent,r=new s.default(Qt),o=function(){r.$mount("#__nuxt"),s.default.nextTick(function(){ue(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(Gt(n,Xt.currentRoute)),Vt=Xt.currentRoute.matched.map(function(t){return L(t.path)(Xt.currentRoute.params)})),r.$loading={},Wt.error&&r.error(Wt.error),Xt.beforeEach(Zt.bind(r)),Xt.beforeEach(re.bind(r)),Xt.afterEach(ae),Xt.afterEach(se.bind(r)),!Wt.serverRendered){t.next=19;break}return o(),t.abrupt("return");case 19:re.call(r,Xt.currentRoute,Xt.currentRoute,function(t){if(!t)return ae(Xt.currentRoute,Xt.currentRoute),ie.call(r,Xt.currentRoute),void o();Xt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 20:case"end":return t.stop()}var a,u},t,this)}))).apply(this,arguments)}s.default.config.$nuxt.$nuxt=!0,function(t){return zt.apply(this,arguments)}().then(function(t){return ce.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},86:function(t,e,n){t.exports=n(138)}},[[86,4,1,5]]]);