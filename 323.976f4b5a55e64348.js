"use strict";(self.webpackChunkbase_project=self.webpackChunkbase_project||[]).push([[323],{4323:(S,u,i)=>{i.r(u),i.d(u,{SuperStockistModule:()=>k});var l=i(6895),h=i(2510),t=i(4650),r=i(1449),m=i(2257),o=i(9366),g=i(1599),v=i(5620);const d=["PrintTemplate"];let D=(()=>{class e{constructor(a,n,c,C){this.ngxPrinterService=a,this.authService=n,this.masterSuperStockistService=c,this.commonService=C,this.gameData=[],this.selectedGame=null,this.test=null,this.grandBet=0,this.grandWin=0,this.grandProfit=0,this.printWindowSubscription=this.ngxPrinterService.$printWindowOpen.subscribe(p=>{console.log("Print window is open:",p)}),this.$printItems=this.ngxPrinterService.$printItems,this.test=setInterval(()=>{this.masterSuperStockistService.getRefreshedGameData()},5e3),this.commonService.currentTimeBehaviorSubject.asObservable().subscribe(p=>{this.currentTime=p})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.gameData=this.masterSuperStockistService.getGameData(),this.masterSuperStockistService.getGameDataListener().subscribe(a=>{this.gameData=a,this.grandBet=this.gameData[0].total_bet+this.gameData[1].total_bet+this.gameData[2].total_bet+this.gameData[3].total_bet+this.gameData[4].total_bet+this.gameData[5].total_bet,this.grandWin=this.gameData[0].total_win+this.gameData[1].total_win+this.gameData[2].total_win+this.gameData[3].total_win+this.gameData[4].total_win+this.gameData[5].total_win,this.grandProfit=this.gameData[0].profit+this.gameData[1].profit+this.gameData[2].profit+this.gameData[3].profit+this.gameData[4].profit+ +this.gameData[5].profit}),this.grandBet=this.gameData[0].total_bet+this.gameData[1].total_bet+this.gameData[2].total_bet+this.gameData[3].total_bet+this.gameData[4].total_bet+this.gameData[5].total_bet,this.grandWin=this.gameData[0].total_win+this.gameData[1].total_win+this.gameData[2].total_win+this.gameData[3].total_win+this.gameData[4].total_win+this.gameData[5].total_win,this.grandProfit=this.gameData[0].profit+this.gameData[1].profit+this.gameData[2].profit+this.gameData[3].profit+this.gameData[4].profit+ +this.gameData[5].profit}ngOnDestroy(){clearInterval(this.test)}printDiv(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.printDiv("printDiv"),this.ngxPrinterService.printOpenWindow=!1}printTemplate(){this.ngxPrinterService.printAngular(this.PrintTemplateTpl)}printHTMLElementToCurrentWithCustomCSS(){this.ngxPrinterService.printOpenWindow=!1,this.ngxPrinterService.renderClass="current-window",this.ngxPrinterService.printHTMLElement(this.PrintComponent.nativeElement),this.ngxPrinterService.printOpenWindow=!0,this.ngxPrinterService.renderClass="default"}printerMarkerClicked(){alert("Print marker clicked")}}return e.\u0275fac=function(a){return new(a||e)(t.Y36(m.Al),t.Y36(o.e),t.Y36(g.Q),t.Y36(v.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-super-stockist"]],viewQuery:function(a,n){if(1&a&&(t.Gf(d,5),t.Gf(r.$,5,t.SBq)),2&a){let c;t.iGM(c=t.CRH())&&(n.PrintTemplateTpl=c.first),t.iGM(c=t.CRH())&&(n.PrintComponent=c.first)}},decls:13,vars:2,consts:[[1,"col-6"],[1,"d-flex","ml-3"],[1,"col-2",2,"background-color","rgb(107, 205, 247)","border-radius","5px","color","aliceblue"],[1,"col-1"],[1,"mt-2","col-6"],[1,"p-2","bd-highlight"]],template:function(a,n){1&a&&(t.TgZ(0,"div",0),t._uU(1),t.qZA(),t.TgZ(2,"div",1)(3,"div",2)(4,"div"),t._uU(5," Current time "),t._UZ(6,"br"),t.TgZ(7,"h4"),t._uU(8),t.qZA()()(),t._UZ(9,"div",3),t.qZA(),t._UZ(10,"div",4),t.TgZ(11,"div",5),t._UZ(12,"router-outlet"),t.qZA()),2&a&&(t.xp6(1),t.hij(" Welcome to ",n.user.userName,"\n"),t.xp6(7),t.Oqu(n.currentTime))},dependencies:[h.lC]}),e})();const P=[{path:"",canActivate:[i(3311).c],component:D}];let b=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(P),h.Bz]}),e})(),k=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[l.ez,b]}),e})()},3311:(S,u,i)=>{i.d(u,{c:()=>t});var l=i(4650),h=i(9366);let t=(()=>{class r{constructor(o){this.authService=o}canActivate(o,g){return this.authService.isSuperStockist()}}return r.\u0275fac=function(o){return new(o||r)(l.LFG(h.e))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);