webpackJsonp([1],{"2EII":function(e,t,s){e.exports=s.p+"static/img/webwxgetmsgimg.9882800.jpeg"},"2Lao":function(e,t){},Hktm:function(e,t,s){e.exports=s.p+"static/img/user.f0d7ba3.jpeg"},Jd7B:function(e,t){},Ly37:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},n,!1,function(e){s("2Lao")},null,null).exports,r=s("mtWM"),o=s.n(r),c=s("Rf8U"),d=s.n(c),l=s("/ocq"),u={name:"Login",data:()=>({msg:"this is login vue",name:"",password:"",email:"",loginActive:!0}),methods:{login:async function(){try{let e=await this.$store.dispatch("login",{name:this.name,password:this.password});this.$session.start(),this.$session.set("user",JSON.stringify(e.data[0])),this.$store.commit("updateSessionUser",this.$session.get("user")),this.$store.commit("createWs",this.$session.get("user")),window.location="/#/index"}catch(e){this.$message.error("登录失败，请重新登录",e)}},registry:function(){if(this.loginActive)this.loginActive=!1;else try{this.$store.dispatch("registry",{name:this.name,password:this.password,email:this.email}),this.$message("注册成功，请重新登录"),this.loginActive=!0}catch(e){this.$message.error("注册失败",e)}},cancel:function(){this.loginActive=!0}}},m={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"body"},[s("div",{staticClass:"item"},[s("label",{staticClass:"item-label"},[e._v("请输入用户名")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),s("div",{staticClass:"item"},[s("label",{staticClass:"item-label"},[e._v("请输入密码")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容","show-password":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),e._v(" "),e.loginActive?e._e():s("div",{staticClass:"item"},[s("label",{staticClass:"item-label"},[e._v("请输入邮箱")]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),e.loginActive?s("div",{staticClass:"item-foot"},[s("el-button",{on:{click:e.login}},[e._v("登录")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:e.registry}},[e._v("注册")])],1):e._e(),e._v(" "),e.loginActive?e._e():s("div",{staticClass:"item-foot"},[s("el-button",{attrs:{type:"primary"},on:{click:e.registry}},[e._v("注册")]),e._v(" "),s("el-button",{on:{click:e.cancel}},[e._v("取消")])],1)])},staticRenderFns:[]};var v=s("VU/8")(u,m,!1,function(e){s("apRF")},"data-v-06220f00",null).exports,p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e._l(e.getFriends,function(t){return[s("div",{key:t.ID,staticClass:"item",class:{active:e.isActive(t)},on:{click:function(s){return e.upadteUser(t)}}},[e._m(0,!0),e._v(" "),s("div",{staticClass:"item-right"},[s("div",{staticClass:"title"},[s("div",[e._v(" "+e._s(t.ID)+" ")])]),e._v(" "),s("div",{staticClass:"content"},[e._v(e._s(t.LastMessage))])])])]})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"item-left"},[t("img",{staticClass:"img",attrs:{src:s("Hktm")}})])}]};var h={name:"ChatList",data:function(){return{url:"./webwxgetmsgimg.jpeg",addUserActive:!1}},methods:{logout:function(){window.location="/#/"},addUser:function(){this.addUserActive=!0}},computed:{getSessionName:function(){return JSON.parse(this.$session.get("user")).Name}},components:{userList:s("VU/8")({name:"userList",methods:{upadteUser:function(e){this.$store.commit("setCurrentUser",e)},isActive:function(e){return this.$store.state.currentUser.Name===e.Name}},created:async function(){let e=(await this.$store.dispatch("getAllFriends")).data[0];this.$store.commit("setCurrentUser",e[0]),this.$store.commit("updateUses",e)},computed:{getFriends:function(){return this.$store.state.users}}},p,!1,function(e){s("ajOR")},"data-v-43ba6d76",null).exports}},f={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"list-body"},[s("div",{staticClass:"header"},[e._m(0),e._v(" "),s("div",{staticClass:"action"},[s("el-dropdown",{attrs:{trigger:"click"}},[s("span",{staticClass:"el-dropdown-link"},[s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("span",[e._v(" "+e._s(e.getSessionName))]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{icon:"el-icon-plus"},on:{click:e.logout}},[e._v("logout")]),e._v(" "),s("el-dropdown-item",{attrs:{icon:"el-icon-plus"},on:{click:e.addUser}},[e._v("add user")])],1)],1)],1)]),e._v(" "),s("div",[s("userList")],1)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"icon"},[t("img",{staticClass:"img",attrs:{src:s("2EII")}})])}]};var g=s("VU/8")(h,f,!1,function(e){s("VRZE")},"data-v-78cb6bf4",null).exports,_={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-body"},[e._l(e.getMessages,function(t){return[s("div",{key:t.ID,staticClass:"item-default",class:{"item-right":e.getPosition(t)}},[s("div",{staticClass:"message-item"},[s("div",[s("el-avatar",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"}})],1),e._v(" "),s("div",[e._v(e._s(t.Content))])])])]})],2)},staticRenderFns:[]};var w={name:"userSend",data:function(){return{value:""}},methods:{sendMesage:function(){this.$store.dispatch("sendMessage",{SourceID:JSON.parse(this.$session.get("user")).ID,DestID:this.$store.state.currentUser.ID,Body:this.value}),console.log("ready to send message",this.value),this.cleanInputMessage()},cleanInputMessage:function(){this.value=""}}},I={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"message-body"},[s("div",{staticClass:"message-action"}),e._v(" "),s("div",{staticClass:"message-content"},[s("div",{staticStyle:{margin:"20px 0"}}),e._v(" "),s("el-input",{attrs:{type:"textarea"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),s("div",{staticClass:"message-send"},[s("el-button",{attrs:{size:"mini"},on:{click:e.sendMesage}},[e._v("sendMessage")])],1)])},staticRenderFns:[]};var b={name:"ChatInfo",components:{UserInfo:s("VU/8")({name:"UserInfo",data:function(){return{userID:2,messages:[{ID:1,userID:1,Content:"asdad",Icon:"aaa"},{ID:2,userID:2,Content:"asdad",Icon:"aaa"},{ID:3,userID:1,Content:"asdad",Icon:"aaa"},{ID:4,userID:2,Content:"asdad",Icon:"aaa"},{ID:5,userID:2,Content:"asdad",Icon:"aaa"},{ID:6,userID:1,Content:"asdad",Icon:"aaa"},{ID:7,userID:1,Content:"asdad",Icon:"aaa"},{ID:8,userID:1,Content:"asdad",Icon:"aaa"},{ID:9,userID:1,Content:"asdad",Icon:"aaa"},{ID:0,userID:1,Content:"asdad",Icon:"aaa"}]}},methods:{getPosition:function(e){return e.userID===this.userID}},created:async function(){(await this.$store.dispatch("getMessage",this.$store.state.currentUser.ID)).data},computed:{getMessages:async function(){(await this.$store.dispatch("getMessage"),this.$store.state.currentUser.ID).data}}},_,!1,function(e){s("Jd7B")},"data-v-412fa837",null).exports,userSend:s("VU/8")(w,I,!1,function(e){s("lpY8")},"data-v-07cd5522",null).exports}},C={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("el-container",[s("el-header",[s("el-dropdown",[s("span",{staticClass:"el-dropdown-link"},[e._v("\n                        下拉菜单\n\t\t\t\t\t\t"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",[e._v("黄金糕")]),e._v(" "),s("el-dropdown-item",[e._v("狮子头")]),e._v(" "),s("el-dropdown-item",[e._v("螺蛳粉")])],1)],1)],1),e._v(" "),s("el-main",[s("UserInfo")],1),e._v(" "),s("el-footer",[s("userSend")],1)],1)],1)},staticRenderFns:[]};var y=s("VU/8")(b,C,!1,function(e){s("sPWp")},null,null).exports,U={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:e.active,expression:"active"}],staticClass:"modal-box"},[s("div",{staticClass:"modal-header"},[s("div",[e._v("添加用户")]),e._v(" "),s("div",{staticClass:"el-icon-close",on:{click:e.closeModal}})]),e._v(" "),s("el-input",{attrs:{placeholder:"请输入内容",clearable:""},on:{input:e.inputEvent},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),s("div",{staticClass:"modal-item"},[e._l(e.attrs,function(t){return[e._l(e.usersAndRooms[t],function(a){return[s("div",{key:a.ID,staticClass:"user-list"},[s("div",[e._v(e._s(a.Name))]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(s){return e.addFriend(t,a)}}},[e._v("添加好友")])],1)]})]}),e._v(" "),e.emptyObjects?e._e():s("div",[e._v("暂无查询结果")])],2)],1)},staticRenderFns:[]};var x=s("VU/8")({name:"AddUSer",data:function(){return{value:"",attrs:["Users","Rooms"],usersAndRooms:{},active:!0}},methods:{inputEvent:async function(){""!==this.value?await this.searchUser():this.usersAndRooms={}},searchUser:async function(){try{this.usersAndRooms=(await this.$store.dispatch("searchUsers",{search:this.value})).data}catch(e){this.usersAndRooms={}}},addFriend:async function(e,t){await this.$store.dispatch("addFriend",{key:e,value:this.value})},closeModal:function(){this.active=!1}},computed:{emptyObjects:function(){return this.attrs.some(e=>this.usersAndRooms[e]&&this.usersAndRooms[e].length)}}},U,!1,function(e){s("Ly37")},"data-v-9da0e0e4",null).exports,D={name:"Index",data:()=>({msg:"this is index vue"}),components:{ChatList:g,ChatInfo:y,addUser:x}},$={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"body"},[t("el-container",[t("el-aside",{attrs:{width:"300px"}},[t("ChatList")],1),this._v(" "),t("el-main",[t("ChatInfo")],1)],1)],1)},staticRenderFns:[]};var R=s("VU/8")(D,$,!1,function(e){s("jSaI")},"data-v-7a3a3f4e",null).exports;a.default.use(l.a);var k=new l.a({routes:[{path:"/",name:"Login",component:v},{path:"/index",name:"Index",component:R},{path:"/add-user",name:"AddUSer",component:x}]}),j=s("zL8q"),A=s.n(j),L=s("NYxO");a.default.use(L.a);var S=new L.a.Store({state:{user:{},users:[],currentUser:{},active:!1,ws:{}},mutations:{updateSessionUser:function({commit:e},t){this.state.user=Object.assign({},JSON.parse(t))},setCurrentUser:function({commit:e},t){t.ID!==this.state.currentUser.ID&&(this.state.currentUser=Object.assign({},t))},updateUses:function({commit:e},t){this.state.users=t},createWs:function({commit:e},t){this.state.ws=new WebSocket("ws://localhost:9999/event?id="+JSON.parse(t).Name),this.state.ws.onmessage=function(e){console.log(e.data)},this.state.ws.onopen=function(){console.log("open websocket")}}},actions:{login:async function({context:e},t){return a.default.axios.post("/api/login",Object.assign({},t))},registry:async function({context:e},t){return a.default.axios.post("/api/registry",Object.assign({},t))},getAllFriends:async function(){return a.default.axios.get("/api/friends/"+this.state.user.ID)},searchUsers:async function({context:e},t){return a.default.axios.get("/api/search/users/"+t.search)},addFriend:async function({context:e},t){return"Rooms"===t.key?a.default.axios.post("/user/"+this.state.user.ID+"/room/"+t.value):a.default.axios({method:"post",url:"/api/friends/"+t.value,headers:{userID:this.state.user.ID}})},createGroup:function({context:e},t){return a.default.axios.post("/api/create-group",t.group)},deleteGroup:function({context:e},t){return a.default.axios.delete("/api/delete-group/"+t.groupID)},getMessage:async function({context:e},t){let s={headers:{userID:this.state.user.ID}};return a.default.axios.get("/api/messages/"+t.ID,s)},sendMessage:async function({context:e},t){let s={headers:{userID:this.state.user.ID}};return a.default.axios.post("/api/sendMessage",t,s)}}}),M=s("18Sv"),O=s.n(M);a.default.use(O.a,{persist:!0}),a.default.use(A.a),a.default.prototype.HOST="/api",a.default.use(d.a,o.a),a.default.prototype.httpHeader=function(){return{userID:JSON.parse(this.$session.get("user")).ID}},a.default.config.productionTip=!1,new a.default({el:"#app",store:S,router:k,components:{App:i},template:"<App/>"})},VRZE:function(e,t){},ajOR:function(e,t){},apRF:function(e,t){},jSaI:function(e,t){},lpY8:function(e,t){},sPWp:function(e,t){throw new Error("Module build failed: ModuleBuildError: Module build failed: TypeError: loaderContext.getResolve is not a function\n    at createWebpackLessPlugin (/Users/night/go/src/web-chat/node_modules/less-loader/dist/utils.js:36:33)\n    at getLessOptions (/Users/night/go/src/web-chat/node_modules/less-loader/dist/utils.js:150:31)\n    at Object.lessLoader (/Users/night/go/src/web-chat/node_modules/less-loader/dist/index.js:29:49)\n    at /Users/night/go/src/web-chat/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at iterateNormalLoaders (/Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:221:10)\n    at /Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:236:3\n    at Object.context.callback (/Users/night/go/src/web-chat/node_modules/loader-runner/lib/LoaderRunner.js:111:13)\n    at Object.module.exports (/Users/night/go/src/web-chat/node_modules/vue-loader/lib/selector.js:21:8)")}},["NHnr"]);
//# sourceMappingURL=app.063e98c998f4821d16df.js.map