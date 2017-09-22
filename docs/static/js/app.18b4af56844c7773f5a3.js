webpackJsonp([1],{"/FzQ":function(t,e,r){"use strict";e.a={getInitialState:function(){return{loading:!1,user:null,playersRegistered:!1,currentTournament:{id:"",name:"",players:[],last_round_num:0,total_rounds:0,organizer:""},currentRound:{id:"",tournament:"",round_num:"",matches:[],concluded:!1}}},getInitialRoundState:function(){return{id:"",tournament:"",round_num:"",matches:[],concluded:!1}}}},"/RKz":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"",id:"login"}},[r("v-layout",{attrs:{row:""}},[t.redirected?r("v-flex",{staticClass:"text-xs-center",attrs:{xs6:"","offset-xs3":""}},[t._v("\n      I was redirected\n    ")]):t._e()],1),t._v(" "),t.error?r("v-layout",{attrs:{row:"",id:"login-error"}},[r("v-flex",{attrs:{xs10:"","offset-xs1":"",sm6:"","offset-sm3":""}},[r("app-errors",{attrs:{error:t.error},on:{clearError:t.clearError}})],1)],1):t._e(),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":"",sm6:"","offset-sm3":""}},[r("v-card",{attrs:{id:"login-card"}},[r("v-card-text",[r("form",{on:{submit:function(e){e.preventDefault(),t.onLogin(e)}}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"username",label:"Username",id:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-btn",{staticClass:"green",attrs:{type:"submit"}},[t._v("Submit")])],1)],1)],1),t._v(" "),r("v-layout",[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("router-link",{attrs:{to:"/signup",id:"register-link"}},[t._v("Haven't signed up? Click to register")])],1)],1)],1)],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",id:"dummy-user"}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-btn",{on:{click:function(e){t.showDummy=!t.showDummy}}},[t._v("Dummy User")]),t._v(" "),t.showDummy?r("div",[r("p",[t._v("Username: Attila")]),t._v(" "),r("p",[t._v("Password: password")])]):t._e()],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},"4YNx":function(t,e){},"71IO":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"",id:"tournament-info"}},[t.tournamentName?t._e():r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs8:"","offset-xs2":""}},[r("h4",[t._v("You need to create a Tournament or load one of your existing tournaments.")])])],1),t._v(" "),t.tournamentName?r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("h4",{attrs:{id:"tournament-name"}},[t._v(t._s(t.tournamentName))])]),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs10:"","offset-xs1":"",md6:"","offset-md0":"",id:"rounds"}},[r("h5",{staticClass:"text-xs-center white--text"},[t._v("Rounds")]),t._v(" "),r("p",[r("span",{staticClass:"total_rounds white--text"},[t._v("Total: "+t._s(t.totalRounds)+" ")]),t._v(" "),r("span",{staticClass:"complete_rounds white--text"},[t._v("Completed: "+t._s(t.roundsCompleted))])]),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.totalRounds,function(e){return r("v-flex",{key:e,attrs:{xs8:"","offset-xs2":"",md8:"","offset-md2":""}},[r("v-btn",{staticClass:"round-btn text-xs-center",class:{green:e<=t.roundsCompleted,blue:e===t.roundsCompleted+1},attrs:{disabled:e>t.roundsCompleted+1,to:"tournament/rounds/"+e}},[t._v("\n            Round "+t._s(e)+"\n            ")])],1)}))],1),t._v(" "),r("v-flex",{attrs:{xs10:"","offset-xs1":"",md6:"","offset-md0":"",id:"standings"}},[r("h5",{staticClass:"text-xs-center white--text",attrs:{id:"standings-heading"}},[t._v("Standings")]),t._v(" "),r("v-list",{attrs:{id:"standings-list"}},[r("v-list-tile",[r("v-layout",{attrs:{row:"",id:"column-headers"}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs3:""}},[t._v("Standing")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs9:""}},[t._v("Name")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs3:""}},[t._v("Score")])],1)],1),t._v(" "),t._l(t.playerStandings,function(e,s){return r("v-list-tile",{key:e.id},[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs3:""}},[t._v(t._s(s+1)+".")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs9:""}},[t._v(t._s(e.name))]),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs3:""}},[t._v(t._s(e.score))])],1)],1)})],2)],1)],1):t._e()],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},"7Uve":function(t,e){},"8Zjc":function(t,e,r){"use strict";var s=r("1nuA"),n=r.n(s),a=r("mtWM"),o=r.n(a);e.a={data:function(){return{username:"",email:"",password:"",confirmPassword:"",error:""}},methods:{clearError:function(){this.error=""},onSignUp:function(){var t=this;o()({method:"POST",url:"http://127.0.0.1:8000/accounts/registration/",headers:{"Content-type":"application/x-www-form-urlencoded"},data:n.a.stringify({username:this.username,password:this.password,email:this.email})}).then(function(e){e.data.error?t.error=e.data.error:(t.error="",t.$store.commit("setUser",{id:e.data.id,username:e.data.username,token:e.data.auth_token.key}),t.$router.push("/"))})}},computed:{comparePasswords:function(){return this.password===this.confirmPassword||"Passwords do not match"}}}},C2Jk:function(t,e,r){"use strict";e.a={props:["error"],methods:{onClose:function(){this.$emit("clearError")}}}},CvVY:function(t,e,r){"use strict";function s(t){r("qKwr")}var n=r("P/dV"),a=r("/RKz"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-3aee7efa",null);e.a=u.exports},FDTX:function(t,e){},FSHx:function(t,e,r){"use strict";function s(t){r("FDTX")}var n=r("XAs/"),a=r("cDlT"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-3dfaf2f8",null);e.a=u.exports},G7zR:function(t,e){},"Gpb/":function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-navigation-drawer",{attrs:{temporary:""},model:{value:t.sideNav,callback:function(e){t.sideNav=e},expression:"sideNav"}},[r("v-toolbar",[r("v-list",[r("v-list-tile",{attrs:{to:"/register-tournament"}},[r("v-list-tile-action",[r("v-icon",[t._v("home")])],1),t._v(" "),r("v-list-tile-content",[t._v("Swiss Tourney")])],1)],1)],1),t._v(" "),r("v-list",[t._l(t.menuItems,function(e){return r("v-list-tile",{key:e.title,attrs:{to:e.link}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[t._v(t._s(e.title))])],1)}),t._v(" "),t.userLoggedIn?r("v-list-tile",{on:{click:t.logout}},[r("v-list-tile-action",[r("v-icon",[t._v("power_settings_new")])],1),t._v(" "),r("v-list-tile-content",[t._v("Logout")])],1):t._e()],2)],1),t._v(" "),r("v-toolbar",{staticClass:"brown darken-3",attrs:{dark:""}},[r("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){e.stopPropagation(),t.sideNav=!t.sideNav}}}),t._v(" "),r("v-toolbar-title",[r("router-link",{attrs:{to:"/register-tournament",tag:"span",exact:""}},[t._v("Swiss Tourney")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("v-toolbar-items",{staticClass:"hidden-xs-only"},[t._l(t.menuItems,function(e,s){return r("v-btn",{key:s,attrs:{flat:"",to:e.link,exact:""}},[r("v-icon",{attrs:{left:""}},[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1)}),t._v(" "),t.userLoggedIn?r("v-btn",{attrs:{flat:""},on:{click:t.logout}},[r("v-icon",{attrs:{left:""}},[t._v("power_settings_new")]),t._v("\n        Logout\n      ")],1):t._e()],2)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},Hv1c:function(t,e){},IVL0:function(t,e,r){"use strict";e.a={name:"RegisterTournament",data:function(){return{tournamentName:"",playerName:"",tempPlayerList:[],errorText:""}},methods:{addPlayer:function(){this.tempPlayerList.includes(this.playerName)?this.errorText="Two players cannot have same name":(this.tempPlayerList.push(this.playerName),this.playerName="",this.errorText="")},createTournament:function(){0===this.tempPlayerList.length?this.errorText="You need minimum two players for tournament.":this.tempPlayerList.length%2==1?this.errorText="Even number players required for tournament.":this.$store.dispatch("createTournament",{tournamentName:this.tournamentName,tempPlayerList:this.tempPlayerList,router:this.$router})}}}},IcnI:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var s=r("7+uW"),n=r("NYxO"),a=r("mtWM"),o=r.n(a),i=r("qQWK"),u=r.n(i),c=r("/FzQ");s.a.use(n.a);var l=new n.a.Store({plugins:[u()()],state:{stateObject:{loading:!1,user:null,currentTournament:{id:"",name:"",players:[],last_concluded_round:0,total_rounds:0,organizer:""},currentRound:{id:"",tournament:"",round_num:"",matches:[],concluded:!1}}},getters:{loading:function(t){return t.stateObject.loading},user:function(t){return t.stateObject.user},currentTournament:function(t){return t.stateObject.currentTournament},currentRound:function(t){return t.stateObject.currentRound}},mutations:{resetState:function(t){s.a.set(t,"stateObject",c.a.getInitialState())},setUser:function(t,e){t.stateObject.user=e},setTournament:function(t,e){s.a.set(t.stateObject,"currentTournament",e),s.a.set(t.stateObject,"currentRound",c.a.getInitialRoundState())},registerPlayers:function(t,e){s.a.set(t.stateObject.currentTournament,"players",e)},loadRound:function(t,e){s.a.set(t.stateObject,"currentRound",e)},matchRegister:function(t,e){var r=t.stateObject.currentRound.matches.find(function(t){return t.id===e.match_id});s.a.set(r,"result",e.result)},roundConcluded:function(t,e){t.stateObject.currentTournament.last_concluded_round+=e?1:-1,s.a.set(t.stateObject.currentRound,"concluded",e)},setLoading:function(t,e){t.stateObject.loading=e}},actions:{createTournament:function(t,e){var r=e.tempPlayerList.map(function(t){return{name:t}}),s=t.getters.user.token;o()({method:"POST",url:"http://127.0.0.1:8000/api/tournaments/",headers:{Authorization:"Token "+s},data:{name:e.tournamentName,players:r}}).then(function(r){t.commit("setTournament",r.data),t.commit("registerPlayers",r.data.players),e.router.push("/tournament-info")}).catch(function(t){console.log(t)})},createRound:function(t,e){var r=t.state.stateObject.currentTournament.id,s=t.state.stateObject.currentTournament.last_concluded_round+1,n=t.getters.user.token;o()({method:"GET",url:"http://127.0.0.1:8000/api/tournaments/"+r+"/get-pairings",headers:{Authorization:"Token "+n}}).then(function(e){var a=[];for(var i in e.data){var u={white_player:{id:e.data[i][0]},black_player:{id:e.data[i][1]}};a.push(u)}o()({method:"POST",url:"http://127.0.0.1:8000/api/rounds/",headers:{Authorization:"Token "+n},data:{tournament:r,round_num:s,matches:a}}).then(function(e){t.commit("loadRound",e.data)})})},postRoundResults:function(t){var e=this;t.commit("roundConcluded",!0);var r=t.state.stateObject.currentRound.id,s=t.getters.user.token;o()({method:"PUT",url:"http://127.0.0.1:8000/api/rounds/"+r+"/",headers:{Authorization:"Token "+s},data:t.state.stateObject.currentRound}).then(function(t){e.$router.push("/tournament-info")}).catch(function(t){console.log(t)})}}})},M93x:function(t,e,r){"use strict";function s(t){r("Hv1c")}var n=r("xJD8"),a=r("un1v"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,null,null);e.a=u.exports},MwM2:function(t,e,r){"use strict";var s=r("mtWM"),n=r.n(s);e.a={data:function(){return{playerStandings:[]}},computed:{tournamentName:function(){return this.$store.getters.currentTournament.name},totalRounds:function(){return this.$store.getters.currentTournament.total_rounds},roundsCompleted:function(){return this.$store.getters.currentTournament.last_concluded_round}},mounted:function(){var t=this,e=this.$store.getters.currentTournament.id;n()({method:"GET",url:"http://127.0.0.1:8000/api/tournaments/"+e+"/get-standings",auth:{username:"attila",password:"aditya123"}}).then(function(e){t.playerStandings=e.data})}}},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),n=r("M93x"),a=r("IcnI"),o=r("3EgV"),i=r.n(o),u=r("nQJa"),c=r("YaEn");s.a.component("app-errors",u.a),s.a.use(i.a),s.a.config.productionTip=!1,new s.a({store:a.a,el:"#app",router:c.a,template:"<App/>",components:{App:n.a}})},"P/dV":function(t,e,r){"use strict";var s=r("1nuA"),n=r.n(s),a=r("mtWM"),o=r.n(a);e.a={data:function(){return{username:"",password:"",error:"",showDummy:!1}},computed:{redirected:function(){return this.$router.history.current.query.redirected}},methods:{clearError:function(){this.error=""},onLogin:function(){var t=this;this.$store.commit("setLoading",!0),o()({method:"POST",url:"http://127.0.0.1:8000/accounts/login/",headers:{"Content-type":"application/x-www-form-urlencoded"},data:n.a.stringify({username:this.username,password:this.password})}).then(function(e){e.data.error?t.error=e.data.error:(t.error="",t.$store.commit("setUser",{id:e.data.id,username:e.data.username,token:e.data.auth_token.key}),t.$router.push("/register-tournament"))})}}}},QyHU:function(t,e){},Sr4g:function(t,e,r){"use strict";var s=r("mtWM"),n=r.n(s);e.a={data:function(){return{tournaments:[],cardImagesURL:["http://aboutcagayandeoro.com/wp-content/uploads/2016/07/2016-Barangay-Carmen-Fiesta-Chess-Tournament.jpg","http://static.dnaindia.com/sites/default/files/styles/half/public/2016/06/04/467804-chesss.jpg?itok=CHbJ6I6f","http://media4.gradskissnis.rs/2016/04/chess-tournament.jpg","https://i2.wp.com/africachess.net/wp-content/uploads/2017/08/pexels-photo-333889.jpeg?resize=800%2C445&ssl=1"]}},methods:{loadTournament:function(t){var e=this.tournaments.filter(function(e){return e.id===t})[0];this.$store.commit("setTournament",e),this.$router.push("/tournament-info")},randomImageURL:function(){var t=Math.floor(Math.random()*this.cardImagesURL.length);return this.cardImagesURL[t]}},mounted:function(){var t=this,e=this.$store.getters.user.token;n()({method:"GET",url:"http://127.0.0.1:8000/api/tournaments/user/"+this.$store.getters.user.id,headers:{Authorization:"Token "+e}}).then(function(e){t.tournaments=e.data}).catch(function(t){console.log(t)})}}},UbTb:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"",id:"tournaments"}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.tournaments,function(e){return r("v-flex",{key:e.id,staticClass:"text-xs-center tournament",attrs:{xs8:"","offset-xs2":"",md4:"","offset-md1":""}},[r("v-card",[r("v-card-media",{attrs:{src:t.randomImageURL(),height:"150px"}}),t._v(" "),r("v-card-title",{staticClass:"white--text orange",attrs:{aligncenter:""}},[r("h6",[t._v(t._s(e.name))])]),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"orange--text",attrs:{flat:""},on:{click:function(r){t.loadTournament(e.id)}}},[t._v("Load Tourney")])],1)],1)],1)}))],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},V8BA:function(t,e,r){"use strict";function s(t){r("G7zR")}var n=r("MwM2"),a=r("71IO"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-08199a66",null);e.a=u.exports},"XAs/":function(t,e,r){"use strict";var s=r("mtWM"),n=r.n(s);e.a={props:["round_num"],data:function(){return{confirm:!1,resultSubmitted:!1,loading:!0}},methods:{matchRegister:function(t,e){this.$store.commit("matchRegister",{match_id:t.id,result:e})},playerClass:function(t,e){return"undetermined"===t.result?"undetermined":"draw"===t.result?"draw":t.result===e?"winner":"loser"},getPlayerScore:function(t,e){return"undetermined"===t.result?0:"draw"===t.result?.5:t.result===e?1:0},postRoundResults:function(){this.resultSubmitted=!0,this.$store.dispatch("postRoundResults")}},computed:{matches:function(){return this.$store.getters.currentRound.matches},tournamentName:function(){return this.$store.getters.currentTournament.name},roundNum:function(){return this.$store.getters.currentRound.round_num},allResultsObtained:function(){return this.matches.some(function(t){return"undetermined"===t.result})},roundConcluded:function(){return this.$store.getters.currentRound.concluded}},beforeMount:function(){var t=this;this.loading=!0;var e=this.$store.getters.currentTournament.id,r=this.$route.params.round_num,s="http://127.0.0.1:8000/api/tournaments/"+e+"/round/"+r;n()({method:"GET",url:s,auth:{username:"attila",password:"aditya123"}}).then(function(e){e.data.exists?(t.$store.commit("loadRound",e.data),t.loading=!1):(t.$store.dispatch("createRound"),t.loading=!1)})}}},YaEn:function(t,e,r){"use strict";var s=r("7+uW"),n=r("/ocq"),a=r("vPzd"),o=r("FSHx"),i=r("V8BA"),u=r("CvVY"),c=r("r5Tp"),l=r("e07l"),d=r("hlOO");s.a.use(n.a),e.a=new n.a({base:"/",routes:[{path:"/",redirect:"/login"},{path:"/register-tournament",component:a.a,beforeEnter:d.a.needUser},{path:"/tournament/rounds/:round_num",component:o.a,props:!0},{path:"/tournament-info",component:i.a},{path:"/login",component:u.a,beforeEnter:d.a.redirected},{path:"/signup",component:c.a},{path:"/tournaments",component:l.a}]})},aSLh:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"",id:"signup"}},[t.error?r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":"",sm6:"","offset-sm3":""}},[r("app-errors",{attrs:{error:t.error},on:{clearError:t.clearError}})],1)],1):t._e(),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs10:"","offset-xs-1":"",sm6:"","offset-sm3":""}},[r("v-card",{attrs:{id:"signup-card"}},[r("v-card-text",[r("form",{on:{submit:function(e){e.preventDefault(),t.onSignUp(e)}}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"username",label:"Username",id:"username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"email",label:"Email",id:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",rules:[t.comparePasswords]},model:{value:t.confirmPassword,callback:function(e){t.confirmPassword=e},expression:"confirmPassword"}})],1),t._v(" "),r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-btn",{staticClass:"text-xs-center green",attrs:{type:"submit"}},[t._v("Submit")])],1)],1)],1)])],1)],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},"bVQ/":function(t,e,r){"use strict";e.a={data:function(){return{sideNav:!1}},methods:{logout:function(){this.$store.commit("resetState"),this.$router.push("/")}},computed:{userLoggedIn:function(){return!(null===this.$store.getters.user)},menuItems:function(){return this.userLoggedIn?[{icon:"info",title:"Tourney Info",link:"/tournament-info"},{icon:"event_note",title:"Tournaments",link:"/tournaments"}]:[{icon:"person_add",title:"Sign Up",link:"/signup"},{icon:"perm_identity",title:"Log In",link:"/login"}]}}}},bwGm:function(t,e,r){"use strict";function s(t){r("4YNx")}var n=r("bVQ/"),a=r("Gpb/"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-31b87b43",null);e.a=u.exports},cDlT:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"current-round"}},[r("h4",{staticClass:"text-xs-center"},[t._v(t._s(t.tournamentName)+": Round "+t._s(t.round_num))]),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t.loading?r("v-progress-circular",{staticClass:"red--text",attrs:{indeterminate:"",width:10,size:"80"}}):t._e()],1)],1)],1),t._v(" "),t.roundConcluded||t.loading?t._e():r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-space-evenly":""}},t._l(t.matches,function(e,s){return r("v-flex",{key:s,attrs:{xs8:"","offset-xs2":"",sm6:"","offset-sm0":"",md4:"","offset-md0":""}},[r("v-card",[r("v-card-text",[r("v-layout",{staticClass:"player",class:t.playerClass(e,"white"),attrs:{row:""},on:{click:function(r){t.matchRegister(e,"white")}}},[r("v-flex",{staticClass:"app-padding",attrs:{xs9:""}},[t._v("\n                "+t._s(e.white_player.name)+"\n              ")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center app-padding",attrs:{xs3:""}},[t._v(t._s(t.getPlayerScore(e,"white")))])],1),t._v(" "),r("v-layout",{staticClass:"draw-container",attrs:{row:""},on:{click:function(r){t.matchRegister(e,"draw")}}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t._v("DRAW")])],1),t._v(" "),r("v-layout",{staticClass:"player",class:t.playerClass(e,"black"),attrs:{row:""},on:{click:function(r){t.matchRegister(e,"black")}}},[r("v-flex",{staticClass:"app-padding",attrs:{xs9:""}},[t._v("\n                "+t._s(e.black_player.name)+"\n              ")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center app-padding",attrs:{xs3:""}},[t._v(t._s(t.getPlayerScore(e,"black")))])],1)],1)],1)],1)})),t._v(" "),t.confirm?t._e():r("v-layout",{attrs:{row:"",id:"submit-result"}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs8:"","offset-xs2":"",sm6:"","offset-sm3":"",md4:"","offset-md4":""}},[r("v-btn",{staticClass:"error",attrs:{disabled:t.allResultsObtained},on:{click:function(e){t.confirm=!0}}},[t._v("Submit Results")])],1)],1),t._v(" "),t.confirm?r("v-layout",{attrs:{row:"",id:"confirm-submit-result"}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs8:"","offset-xs2":"",sm6:"","offset-sm3":"",md4:"","offset-md4":""}},[r("v-btn",{staticClass:"error",attrs:{disabled:t.allResultsObtained},on:{click:t.postRoundResults}},[t._v("Confirm!")])],1)],1):t._e()],1),t._v(" "),t.roundConcluded&&!t.loading?r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-space-evenly":""}},t._l(t.matches,function(e,s){return r("v-flex",{key:s,attrs:{xs8:"","offset-xs2":"",sm6:"","offset-sm0":"",md4:"","offset-md0":""}},[r("v-card",[r("v-card-text",[r("v-layout",{staticClass:"player",class:t.playerClass(e,"white"),attrs:{row:""}},[r("v-flex",{staticClass:"app-padding",attrs:{xs9:""}},[t._v("\n                "+t._s(e.white_player.name)+"\n              ")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center app-padding",attrs:{xs3:""}},[t._v(t._s(t.getPlayerScore(e,"white")))])],1),t._v(" "),r("v-layout",{staticClass:"draw-container",attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[t._v("DRAW")])],1),t._v(" "),r("v-layout",{staticClass:"player",class:t.playerClass(e,"black"),attrs:{row:""}},[r("v-flex",{staticClass:"app-padding",attrs:{xs9:""}},[t._v("\n                "+t._s(e.black_player.name)+"\n              ")]),t._v(" "),r("v-flex",{staticClass:"text-xs-center app-padding",attrs:{xs3:""}},[t._v(t._s(t.getPlayerScore(e,"black")))])],1)],1)],1)],1)})),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs8:"","offset-xs2":"",sm6:"","offset-sm3":""}},[r("p",{staticClass:"text-xs-center green--text",attrs:{id:"success-msg"}},[t._v("Results have been submitted successfully")])])],1)],1):t._e()],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},e07l:function(t,e,r){"use strict";function s(t){r("QyHU")}var n=r("Sr4g"),a=r("UbTb"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-0f37db8b",null);e.a=u.exports},hlOO:function(t,e,r){"use strict";var s=r("IcnI");e.a={needUser:function(t,e,r){s.a.getters.user?r():r("/login?redirected=true")}}},ixGI:function(t,e){},nQJa:function(t,e,r){"use strict";var s=r("C2Jk"),n=r("r7f7"),a=r("VU/8"),o=a(s.a,n.a,null,null,null);e.a=o.exports},qKwr:function(t,e){},r5Tp:function(t,e,r){"use strict";function s(t){r("7Uve")}var n=r("8Zjc"),a=r("aSLh"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-8a2d8624",null);e.a=u.exports},r7f7:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-alert",{attrs:{error:"",dismissible:"",value:!0},on:{input:t.onClose}},[t._v("\n  "+t._s(t.error)+"\n")])},n=[],a={render:s,staticRenderFns:n};e.a=a},un1v:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("navigation"),t._v(" "),r("router-view")],1)},n=[],a={render:s,staticRenderFns:n};e.a=a},vPzd:function(t,e,r){"use strict";function s(t){r("ixGI")}var n=r("IVL0"),a=r("ydkw"),o=r("VU/8"),i=s,u=o(n.a,a.a,i,"data-v-4f33731b",null);e.a=u.exports},xJD8:function(t,e,r){"use strict";var s=r("bwGm");e.a={name:"app",components:{navigation:s.a}}},ydkw:function(t,e,r){"use strict";var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"register-tournament"}},[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs12:"","offset-xs0":"",sm6:"","offset-sm3":""}},[r("v-card",{attrs:{id:"register-tournament-card"}},[r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs10:"","offset-xs1":"",sm6:"","offset-sm3":""}},[r("v-text-field",{attrs:{"single-line":"",name:"tournament-name",label:"Enter Tournament Name",id:"tournament-name"},model:{value:t.tournamentName,callback:function(e){t.tournamentName=e},expression:"tournamentName"}})],1)],1),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{attrs:{xs8:"","offset-xs1":"",sm6:"","offset-sm3":""}},[r("v-text-field",{attrs:{label:"Player Name",id:"player-name"},model:{value:t.playerName,callback:function(e){t.playerName=e},expression:"playerName"}})],1),t._v(" "),r("v-flex",{attrs:{xs2:""}},[r("v-btn",{staticClass:"green add-btn",attrs:{title:"Add Player"},on:{click:t.addPlayer}},[r("v-icon",[t._v("add")])],1)],1)],1),t._v(" "),t.errorText?r("div",{attrs:{id:"errors"}},[r("p",[t._v(t._s(t.errorText))])]):t._e(),t._v(" "),0!=this.tempPlayerList.length?r("v-layout",{attrs:{row:"",wrap:"",id:"temp-player-list"}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs8:"","offset-xs2":""}},[r("h4",[t._v(t._s(this.tournamentName))])]),t._v(" "),r("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.tempPlayerList,function(e){return r("v-flex",{key:e,staticClass:"text-xs-center",attrs:{xs6:""}},[t._v("\n                "+t._s(e)+"\n              ")])}))],1)],1):t._e(),t._v(" "),r("v-layout",{attrs:{row:""}},[r("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[r("v-btn",{staticClass:"error",attrs:{id:"create-tournament"},on:{click:t.createTournament}},[t._v("Create Tournament")])],1)],1)],1)],1)],1)],1)],1)},n=[],a={render:s,staticRenderFns:n};e.a=a}},["NHnr"]);
//# sourceMappingURL=app.18b4af56844c7773f5a3.js.map