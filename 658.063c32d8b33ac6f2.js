"use strict";(self.webpackChunkbase_project=self.webpackChunkbase_project||[]).push([[658],{2658:(k,d,o)=>{o.r(d),o.d(d,{ResultModule:()=>R});var a=o(6895),p=o(2510),t=o(4650),M=o(5630),x=o(7070),O=o(1397),P=o(9366),u=o(9549),h=o(4144),l=o(9602),c=o(4006);const C=function(n){return{"padding-left":n}};function f(n,i){if(1&n&&(t.TgZ(0,"nav",12)(1,"a",13),t._uU(2,"Metro Yantra"),t.qZA(),t.TgZ(3,"label",14),t._uU(4," Print version: "),t.qZA(),t.TgZ(5,"span",15)(6,"a",16)(7,"button",17),t._uU(8,"Android"),t.qZA()()(),t.TgZ(9,"span",15)(10,"a",18)(11,"button",17),t._uU(12,"Windows"),t.qZA()()(),t.TgZ(13,"label",14),t._uU(14," Non print version: "),t.qZA(),t.TgZ(15,"span",19)(16,"a",20)(17,"button",17),t._uU(18,"Android"),t.qZA()()(),t.TgZ(19,"span",19)(20,"a",21)(21,"button",17),t._uU(22,"Windows"),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngStyle",t.VKq(2,C,e.screenWidth>1280?"100px":"20px")),t.xp6(10),t.Q6J("ngStyle",t.VKq(4,C,e.screenWidth>1280?"100px":"20px"))}}function b(n,i){if(1&n&&(t.TgZ(0,"div",22)(1,"span"),t._uU(2),t.qZA(),t.TgZ(3,"span",23),t._uU(4),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.Oqu(e.draw_time),t.xp6(2),t.Oqu(e.single_number)}}const m=function(n){return{"margin-top":n}},_=[{path:"",component:(()=>{class n{constructor(e,s,r,g,S){this.resultService=e,this.gameResultService=s,this.gameService=r,this.authService=g,this.datepipe=S,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.resultList=[],this.columnNumber=12,this.columnNumber2=7,this.columnNumber3=1,this.activeTripleContainerValue=0,this.todayResult=[],this.buttonColours="#0047AB",this.buttonColour=["#0047AB","#009900","#CC0033","#9900CC"],this.todayResultAutoRefreshControl=null,this.today=(new Date).toLocaleString(),this.pipe=new a.uU("en-US"),this.isAuthenticated=!1,this.isAdmin=!1,this.isDeveloper=!1,this.isStockist=!1,this.isSuperStockist=!1,this.isTerminal=!1,this.isIntervalActive=0,this.todaysDate=null,this.searchResultByDate(),this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight,this.todaysDate=this.datepipe.transform(new Date,"yyyy-MM-dd")}ngOnInit(){this.userSub=this.authService.userBehaviorSubject.subscribe(e=>{e?(this.user=e,this.isAuthenticated=e.isAuthenticated,this.isAdmin=e.isAdmin,this.isDeveloper=e.isDeveloper,this.isStockist=e.isStockist,this.isTerminal=e.isTerminal,this.isSuperStockist=e.isSuperStockist):(this.isAuthenticated=!1,this.isAdmin=!1,this.isDeveloper=!1,this.isStockist=!1,this.isTerminal=!1,this.isSuperStockist=!1)}),this.currentDateResult=this.resultService.getCurrentDateResult(),this.resultService.getCurrentDateResultListener().subscribe(e=>{this.currentDateResult=e}),this.selectedGame=1,this.resultService.getTodayResultByGameId(this.selectedGame),this.resultService.getTodayResultByGameIdListener().subscribe(e=>{this.todayResult=e}),this.resultList=this.gameResultService.getResultList(),this.gameResultService.getResultListListener().subscribe(e=>{this.resultList=e}),this.games=this.gameService.getGame(),this.gameService.getGameListener().subscribe(e=>{this.games=e}),this.todayResultAutoRefreshControl=setInterval(()=>{this.searchResultByDate()},2e3)}ngOnDestroy(){clearInterval(this.todayResultAutoRefreshControl)}isActiveTripleContainter(e){return this.activeTripleContainerValue==e}setActiveGame(e){this.selectedGame=e.id,this.resultService.getTodayResultByGameId(this.selectedGame),this.buttonColours=this.buttonColour[e.id-1]}searchResultByDate(){const e=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd");console.log(e),this.isIntervalActive=this.todaysDate===e?1:0,this.resultService.getTodayResultByGameId(e).subscribe(s=>{this.todayResult=s.data})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(M.I),t.Y36(x.W),t.Y36(O.h),t.Y36(P.e),t.Y36(a.uU))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-result"]],decls:16,vars:8,consts:[["class","navbar navbar-expand-lg navbar-dark","style","background-color: rgb(6, 7, 82);",4,"ngIf"],[2,"background-color","rgb(255, 183, 0)","padding","4px",3,"ngStyle"],[1,"col-6",2,"display","flex","border","1px solid rgb(0, 0, 0)"],[2,"color","rgb(0, 0, 0)","flex-grow","3","width","0%"],[2,"padding-top","6px"],["id","selectedDate","matInput","",2,"background-color","aliceblue","color","rgb(0, 0, 0)",3,"ngModel","matDatepicker","ngModelChange"],["matIconSuffix","",2,"color","rgb(255, 255, 255)","flex-grow","2",3,"for"],[2,"color","aliceblue","flex-grow","1"],["picker",""],[1,"text-center","text-dark"],[2,"border","2px solid rgb(0, 8, 255)"],["class","d-flex m-1 p-1","style","border: 1px solid black;  background-color: rgba(151, 1, 1, 0.646);",4,"ngFor","ngForOf"],[1,"navbar","navbar-expand-lg","navbar-dark",2,"background-color","rgb(6, 7, 82)"],["href","#",1,"navbar-brand"],[3,"ngStyle"],[1,"nav-item","active",2,"flex","row"],["href","metro_yanta_api/storage/installer/Metro_Yantra_PrintVersion.apk"],[1,"btn","btn-outline-warning","my-2","my-sm-0","m-2"],["href","metro_yanta_api/storage/installer/Metro_Yantra_PrintVersion.zip"],[1,"nav-item","active"],["href","metro_yanta_api/storage/installer/Metro_Yantra_NonPrintVersion.apk"],["href","metro_yanta_api/storage/installer/Metro_Yantra_NonPrintVersion.zip"],[1,"d-flex","m-1","p-1",2,"border","1px solid black","background-color","rgba(151, 1, 1, 0.646)"],[2,"padding-left","150px"]],template:function(e,s){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,f,23,6,"nav",0),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"mat-label",3),t._uU(5,"Choose result date"),t.qZA(),t.TgZ(6,"span",4)(7,"input",5),t.NdJ("ngModelChange",function(g){return s.StartDateFilter=g}),t.qZA()(),t._UZ(8,"mat-datepicker-toggle",6)(9,"mat-datepicker",7,8),t.qZA(),t.TgZ(11,"div",9)(12,"h1"),t._uU(13,"-: Metro Yantra Online :-"),t.qZA()(),t.TgZ(14,"div",10),t.YNc(15,b,5,2,"div",11),t.qZA()()),2&e){const r=t.MAs(10);t.xp6(1),t.Q6J("ngIf",!s.isAuthenticated),t.xp6(1),t.Q6J("ngStyle",t.VKq(6,m,s.screenWidth<=1280?"100px":"20px")),t.xp6(5),t.Q6J("ngModel",s.StartDateFilter)("matDatepicker",r),t.xp6(1),t.Q6J("for",r),t.xp6(7),t.Q6J("ngForOf",s.todayResult)}},dependencies:[a.sg,a.O5,a.PC,u.hX,h.Nt,l.Mq,l.hl,l.nW,c.Fj,c.JJ,c.On],styles:["@media screen and (min-width: 601px){.x1[_ngcontent-%COMP%]{font-size:69px}.x2[_ngcontent-%COMP%]{font-size:62px}.x3[_ngcontent-%COMP%]{font-size:55px}.x4[_ngcontent-%COMP%]{font-size:51px}.x5[_ngcontent-%COMP%]{font-size:46px}.x6[_ngcontent-%COMP%]{font-size:41px}.x7[_ngcontent-%COMP%]{font-size:32px}.x8[_ngcontent-%COMP%]{font-size:23px}.x9[_ngcontent-%COMP%]{font-size:14px}.x10[_ngcontent-%COMP%]{font-size:7px}}@media screen and (max-width: 600px){.x1[_ngcontent-%COMP%]{font-size:30px}.x2[_ngcontent-%COMP%]{font-size:27px}.x3[_ngcontent-%COMP%]{font-size:24px}.x4[_ngcontent-%COMP%]{font-size:22px}.x5[_ngcontent-%COMP%]{font-size:20px}.x6[_ngcontent-%COMP%]{font-size:16px}.x7[_ngcontent-%COMP%]{font-size:14px}.x8[_ngcontent-%COMP%]{font-size:10px}.x9[_ngcontent-%COMP%]{font-size:6px}.x10[_ngcontent-%COMP%]{font-size:3px}#result-div[_ngcontent-%COMP%]{margin-top:150px}}.mobile[_ngcontent-%COMP%]   #title-1-div[_ngcontent-%COMP%]{text-align:center;font-weight:bolder;color:#fff;background-color:#8a2be2}.mobile[_ngcontent-%COMP%]   #title-1-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;font-size:10px}.mobile[_ngcontent-%COMP%]   #title-2-div[_ngcontent-%COMP%]{background-color:#f77c2b;color:#fff;text-align:center}.mobile[_ngcontent-%COMP%]   #title-2-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;font-size:14px}.mobile[_ngcontent-%COMP%]   #title-3-div[_ngcontent-%COMP%]{color:#b11a1a;text-align:center}.mobile[_ngcontent-%COMP%]   #title-3-div[_ngcontent-%COMP%]   #title-3-div-child-1[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   #title-3-div[_ngcontent-%COMP%]   #title-3-div-child-2[_ngcontent-%COMP%]{font-size:16px}.mobile[_ngcontent-%COMP%]   #title-4-div[_ngcontent-%COMP%]{color:red;text-align:center}.mobile[_ngcontent-%COMP%]   #title-4-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:10px}.mobile[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]{color:red;text-align:center}.mobile[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-size:14px;box-shadow:3px 3px 2px #888}.mobile[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#f77c2b}.mobile[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .mobile[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:17px;padding:1px!important}.desktop[_ngcontent-%COMP%]   #title-1-div[_ngcontent-%COMP%]{text-align:center;font-weight:bolder;color:#fff;background-color:#8a2be2}.desktop[_ngcontent-%COMP%]   #title-1-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;font-size:23px}.desktop[_ngcontent-%COMP%]   #title-2-div[_ngcontent-%COMP%]{background-color:#f77c2b;color:#fff;text-align:center}.desktop[_ngcontent-%COMP%]   #title-2-div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{text-align:center;font-size:32px}.desktop[_ngcontent-%COMP%]   #title-3-div[_ngcontent-%COMP%]{color:#b11a1a;text-align:center}.desktop[_ngcontent-%COMP%]   #title-3-div[_ngcontent-%COMP%]   #title-3-div-child-1[_ngcontent-%COMP%], .desktop[_ngcontent-%COMP%]   #title-3-div[_ngcontent-%COMP%]   #title-3-div-child-2[_ngcontent-%COMP%]{font-size:36px}.desktop[_ngcontent-%COMP%]   #title-4-div[_ngcontent-%COMP%]{color:red;text-align:center}.desktop[_ngcontent-%COMP%]   #title-4-div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:23px}.desktop[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]{color:red;text-align:center;width:100%}.desktop[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{font-size:23px;box-shadow:10px 10px 5px #888}.desktop[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]{text-align:center;color:#fff;background-color:#f77c2b}.desktop[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:41px;padding:5px!important}.desktop[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{background-color:#eae6e6}.desktop[_ngcontent-%COMP%]   #table-div[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{font-size:41px;padding:5px!important}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid black;padding:.15rem!important}.cards[_ngcontent-%COMP%]{overflow:auto;height:90vh;margin-left:5px}.image-card[_ngcontent-%COMP%]{max-width:300px;margin:10px;box-shadow:3px 3px 8px #0000004d}.picture-ripple-container[_ngcontent-%COMP%]{background-color:transparent;box-shadow:3px 3px 8px #0000004d;margin-top:5px;border-radius:3px}ngb-carousel[_ngcontent-%COMP%]{margin:5px}.result-heading[_ngcontent-%COMP%]{color:#fff}@media only screen and (max-width: 300px){#result-div[_ngcontent-%COMP%]{margin-top:150px!important}}"]}),n})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(_),p.Bz]}),n})();var y=o(3238);let R=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[a.ez,v,u.lN,h.c,l.FA,y.XK,c.u5]}),n})()}}]);