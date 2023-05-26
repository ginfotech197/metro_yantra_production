"use strict";(self.webpackChunkbase_project=self.webpackChunkbase_project||[]).push([[823],{1823:(rt,b,o)=>{o.r(b),o.d(b,{TerminalReportModule:()=>et});var c=o(6895),v=o(2510),D=o(1982),U=o(5226),d=o.n(U),t=o(4650),R=o(7579),s=o(2843),y=o(2340),u=o(262),g=o(8505),M=o(529),q=o(4889),F=o(9366);let J=(()=>{class a{constructor(e,r,n){this.http=e,this.errorService=r,this.authService=n,this.BASE_API_URL=y.N.BASE_API_URL,this.barcodeReportRecords=[],this.terminalSaleRRecords=[],this.userData=JSON.parse(localStorage.getItem("user")),this.barcodeReportRecordsSubject=new R.x,this.terminalSaleRecordsSubject=new R.x}terminalListListener(){return this.barcodeReportRecordsSubject.asObservable()}terminalSaleListListener(){return this.terminalSaleRecordsSubject.asObservable()}cancelTicket(e){return this.http.post(this.BASE_API_URL+"/cancelTicket",{play_master_id:e}).pipe((0,u.K)(this.handleError),(0,g.b)(r=>{if(r.data){this.authService.updateUserBalance(r.point);const n=this.barcodeReportRecords.findIndex(i=>i.play_master_id===r.id);this.barcodeReportRecords[n].is_cancelled=1,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords])}}))}claimPrize(e){return this.http.post(this.BASE_API_URL+"/claimPrize",{play_master_id:e}).pipe((0,u.K)(this.handleError),(0,g.b)(r=>{if(r.point){this.authService.updateUserBalance(r.point);const n=this.barcodeReportRecords.findIndex(i=>i.play_master_id===r.id);this.barcodeReportRecords[n].is_claimed=1,this.barcodeReportRecords[n].is_cancelled=1,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords])}}))}getTerminalReport(e,r,n){return this.http.post(this.BASE_API_URL+"/terminal/barcodeReport",{terminalId:e,startDate:r,endDate:n}).pipe((0,u.K)(this.handleError),(0,g.b)(i=>{i.data&&(this.barcodeReportRecords=i.data,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]))}))}getTerminalSaleReport(e,r,n){return this.http.post(this.BASE_API_URL+"/terminal/terminal_sale_reports",{terminalId:e,startDate:r,endDate:n}).pipe((0,u.K)(this.handleError),(0,g.b)(i=>{i.data&&(this.terminalSaleRRecords=i.data,this.terminalSaleRecordsSubject.next([...this.terminalSaleRRecords]))}))}serverError(e){return e instanceof Response?(0,s._)("backend server error"):(0,s._)(0===e.status?{status:e.status,message:"Backend Server is not Working",statusText:e.statusText}:401===e.status?{status:e.status,message:"Your are not authorised",statusText:e.statusText}:e)}handleError(e){return e.error.message.includes("1062")?(0,s._)("Record already exists"):(0,s._)(e.error.message)}}return a.\u0275fac=function(e){return new(e||a)(t.LFG(M.eN),t.LFG(q.T),t.LFG(F.e))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var O=o(1140),f=o(3848),N=o(4859),T=o(9549),x=o(4144),m=o(4006),Z=o(6308),_=o(3346),A=o(2673),h=o(9602);function E(a,l){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&a){const e=l.$implicit;t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Oqu(e.commission),t.xp6(2),t.Oqu(e.prize_value),t.xp6(2),t.Oqu(e.total-e.commission-e.prize_value)}}function B(a,l){1&a&&(t.TgZ(0,"div",29)(1,"h1"),t._uU(2,"No Data"),t.qZA()())}function k(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"button",30),t.NdJ("click",function(){const i=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.claimPrize(i.play_master_id))}),t._uU(17),t.qZA()(),t.TgZ(18,"td")(19,"button",31),t.NdJ("click",function(){const i=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.cancelTicket(i.play_master_id))}),t._uU(20,"Cancel"),t.qZA()(),t.TgZ(21,"td")(22,"a",32),t.NdJ("click",function(){const i=t.CHM(e).$implicit,p=t.oxw();return t.MAs(85).show(),t.KtG(p.openPopup(i.play_master_id,i.barcode_number))}),t._UZ(23,"i",33),t.qZA()()()}if(2&a){const e=l.$implicit,r=l.index,n=t.oxw();t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(e.draw_time),t.xp6(2),t.Oqu(e.ticket_taken_time),t.xp6(2),t.Oqu(e.barcode_number),t.xp6(2),t.Oqu(e.total_quantity),t.xp6(2),t.Oqu(e.amount),t.xp6(2),t.Oqu(e.prize_value),t.xp6(2),t.Q6J("hidden",0==e.prize_value)("disabled",1==e.is_claimed),t.xp6(1),t.Oqu(e.prize_value>0?e.is_claimed>0?"Claimed":"Claim":"No Prize"),t.xp6(2),t.Q6J("disabled",n.checkBtnEligibility(e))}}function Q(a,l){1&a&&(t.TgZ(0,"div",29)(1,"h1"),t._uU(2,"No Data"),t.qZA()())}function I(a,l){1&a&&(t.TgZ(0,"span"),t._uU(1,"Single"),t.qZA())}function L(a,l){if(1&a&&(t.TgZ(0,"button",46),t._uU(1),t.qZA()),2&a){const e=l.$implicit;t.s9C("matBadge",e.quantity),t.xp6(1),t.Oqu(e.single_number)}}function P(a,l){1&a&&(t.TgZ(0,"span"),t._uU(1,"Triple"),t.qZA())}function w(a,l){if(1&a&&(t.TgZ(0,"div",48)(1,"button",49),t._uU(2),t.qZA()()),2&a){const e=l.$implicit;t.xp6(1),t.s9C("matBadge",e.quantity),t.Q6J("matBadgeHidden",!1),t.xp6(1),t.hij(" ",e.visible_triple_number," ")}}function z(a,l){if(1&a&&(t.TgZ(0,"div",42),t.YNc(1,w,3,3,"div",47),t.qZA()),2&a){const e=l.index,r=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",r.barcodeDetails.triple.slice(10*e,10*e+10))}}function Y(a,l){if(1&a){const e=t.EpF();t.TgZ(0,"div",34)(1,"div",35)(2,"div",36)(3,"h4",37),t._uU(4),t.qZA(),t.TgZ(5,"button",38),t.NdJ("click",function(){t.CHM(e),t.oxw();const n=t.MAs(85);return t.KtG(n.hide())}),t.TgZ(6,"span",39),t._uU(7,"\xd7"),t.qZA()()(),t.TgZ(8,"div",40),t.YNc(9,I,2,0,"span",41),t.TgZ(10,"div",42),t.YNc(11,L,2,2,"button",43),t.qZA(),t.YNc(12,P,2,0,"span",41),t.YNc(13,z,2,1,"div",44),t.qZA(),t._UZ(14,"div",45),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(4),t.hij(" Ticket: ",e.barcodeDetails.barcode," "),t.xp6(5),t.Q6J("ngIf",e.barcodeDetails.single.length),t.xp6(2),t.Q6J("ngForOf",e.barcodeDetails.single),t.xp6(1),t.Q6J("ngIf",e.barcodeDetails.triple.length),t.xp6(1),t.Q6J("ngForOf",e.barcodeDetails.triple.slice(0,e.barcodeDetails.triple.length%10==0?e.barcodeDetails.triple.length/10:e.barcodeDetails.triple.length/10+1))}}const K=[{path:"",canActivate:[D.v],component:(()=>{class a{constructor(e,r,n){this.renderer=e,this.terminalReportService=r,this.adminReportService=n,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new c.uU("en-US"),this.terminalReportData=[],this.terminalSaleReportData=[],this.renderer.setStyle(document.body,"background-image","none"),this.terminalReportService.terminalListListener().subscribe(i=>{this.terminalReportData=i}),this.terminalReportService.terminalSaleListListener().subscribe(i=>{this.terminalSaleReportData=i}),this.getTerminalBarcodeReport(),this.getTerminalSaleReport()}ngOnInit(){}claimPrize(e){d().fire({title:"Please Wait !",html:"adding points ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}}),this.terminalReportService.claimPrize(e).subscribe(r=>{r.point&&d().close()})}checkBtnEligibility(e){return 1==e.is_cancelled||0==e.is_cancelable}cancelTicket(e){d().fire({title:"Confirm Cancel ?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, confirm"}).then(r=>{r.isConfirmed?(d().fire({title:"Please Wait !",html:"Confirming cancel",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}}),this.terminalReportService.cancelTicket(e).subscribe(n=>{n.data?(d().hideLoading(),d().fire({icon:"success",title:"Cancelled",showConfirmButton:!1,timer:1500})):d().fire({icon:"error",title:"Some error occurred",showConfirmButton:!1,timer:2e3})})):r.isDenied&&d().fire("Changes are not saved","","info")})}getTerminalBarcodeReport(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});const e=JSON.parse(localStorage.getItem("user"));var r=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),n=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalReport(e.userId,r,n).subscribe(i=>{i.data&&d().close()})}getTerminalSaleReport(){d().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{d().showLoading()}});const e=JSON.parse(localStorage.getItem("user"));var r=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),n=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalSaleReport(e.userId,r,n).subscribe(i=>{i.data&&d().close()})}openPopup(e,r){this.adminReportService.getBarcodeDetails(e).subscribe(n=>{this.barcodeDetails=n.data})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.Qsj),t.Y36(J),t.Y36(O.Q))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-terminal-report"]],decls:87,vars:21,consts:[[1,"mt-2","mr-3","ml-3"],["label","Terminal sale report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],[3,"ngModel","ngModelChange"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","prize_value"],["mat-sort-header","ntp"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["label","Terminal barcode report"],[1,"",2,"overflow","hidden"],["matSort","",1,"table","table-bordered","table-sm","m-3",2,"border","none !important","height","50px","overflow","hidden"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","barcode_number"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],[1,"text-center"],["type","button",1,"btn","btn-danger",2,"min-width","87px",3,"hidden","disabled","click"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],[4,"ngIf"],[1,"d-flex","flex-row","mt-2"],["class","mr-2",3,"matBadge",4,"ngFor","ngForOf"],["class","d-flex flex-row mt-2",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"mr-2",3,"matBadge"],["colspan","2","class","text-center align-middle mr-3","style","max-width: 100% !important;",4,"ngFor","ngForOf"],["colspan","2",1,"text-center","align-middle","mr-3",2,"max-width","100% !important"],["mat-raised-button","","value","bold","name","fontStyle","aria-label","Font Style",2,"font-size","larger","min-width","97% !important","padding","0px !important","min-height","40px",3,"matBadge","matBadgeHidden"]],template:function(e,r){if(1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"div",2)(3,"div",3)(4,"mat-form-field",4)(5,"mat-label"),t._uU(6,"Start date"),t.qZA(),t.TgZ(7,"input",5),t.NdJ("ngModelChange",function(i){return r.StartDateFilter=i}),t.qZA(),t._UZ(8,"mat-datepicker-toggle",6),t.TgZ(9,"mat-datepicker",7,8),t.NdJ("ngModelChange",function(i){return r.StartDateFilter=i}),t.qZA()()(),t.TgZ(11,"div",3)(12,"mat-form-field",4)(13,"mat-label"),t._uU(14,"End date"),t.qZA(),t.TgZ(15,"input",5),t.NdJ("ngModelChange",function(i){return r.EndDateFilter=i}),t.qZA(),t._UZ(16,"mat-datepicker-toggle",6),t.TgZ(17,"mat-datepicker",7,9),t.NdJ("ngModelChange",function(i){return r.EndDateFilter=i}),t.qZA()()(),t.TgZ(19,"button",10),t.NdJ("click",function(){return r.getTerminalSaleReport()}),t._uU(20,"Search"),t.qZA()(),t.TgZ(21,"table",11)(22,"thead")(23,"tr")(24,"th"),t._uU(25,"Date"),t.qZA(),t.TgZ(26,"th",12),t._uU(27,"Amount"),t.qZA(),t.TgZ(28,"th",13),t._uU(29,"Commission"),t.qZA(),t.TgZ(30,"th",14),t._uU(31,"Prize"),t.qZA(),t.TgZ(32,"th",15),t._uU(33,"NTP"),t.qZA(),t._UZ(34,"th"),t.qZA()(),t.TgZ(35,"tbody"),t.YNc(36,E,11,5,"tr",16),t.qZA()(),t.YNc(37,B,3,0,"div",17),t.qZA(),t.TgZ(38,"mat-tab",18)(39,"div",2)(40,"div",3)(41,"mat-form-field",4)(42,"mat-label"),t._uU(43,"Start date"),t.qZA(),t.TgZ(44,"input",5),t.NdJ("ngModelChange",function(i){return r.StartDateFilter=i}),t.qZA(),t._UZ(45,"mat-datepicker-toggle",6),t.TgZ(46,"mat-datepicker",7,8),t.NdJ("ngModelChange",function(i){return r.StartDateFilter=i}),t.qZA()()(),t.TgZ(48,"div",3)(49,"mat-form-field",4)(50,"mat-label"),t._uU(51,"End date"),t.qZA(),t.TgZ(52,"input",5),t.NdJ("ngModelChange",function(i){return r.EndDateFilter=i}),t.qZA(),t._UZ(53,"mat-datepicker-toggle",6),t.TgZ(54,"mat-datepicker",7,9),t.NdJ("ngModelChange",function(i){return r.EndDateFilter=i}),t.qZA()()(),t.TgZ(56,"button",10),t.NdJ("click",function(){return r.getTerminalBarcodeReport()}),t._uU(57,"Search"),t.qZA()(),t.TgZ(58,"div",19)(59,"table",20)(60,"thead")(61,"tr")(62,"th"),t._uU(63,"Sl.NO"),t.qZA(),t.TgZ(64,"th",21),t._uU(65,"Draw Time"),t.qZA(),t.TgZ(66,"th",22),t._uU(67,"Ticket Time"),t.qZA(),t.TgZ(68,"th",23),t._uU(69,"Barcode"),t.qZA(),t.TgZ(70,"th",24),t._uU(71,"Quantity"),t.qZA(),t.TgZ(72,"th",25),t._uU(73,"Amount"),t.qZA(),t.TgZ(74,"th",14),t._uU(75,"Prize"),t.qZA(),t.TgZ(76,"th"),t._uU(77,"Claim"),t.qZA(),t.TgZ(78,"th"),t._uU(79,"Cancel"),t.qZA(),t._UZ(80,"th"),t.qZA()(),t.TgZ(81,"tbody"),t.YNc(82,k,24,11,"tr",16),t.qZA()(),t.YNc(83,Q,3,0,"div",17),t.qZA()()(),t.TgZ(84,"div",26,27),t.YNc(86,Y,15,5,"div",28),t.qZA()),2&e){const n=t.MAs(10),i=t.MAs(18);t.xp6(7),t.Q6J("matDatepicker",n)("ngModel",r.StartDateFilter),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.Q6J("ngModel",r.StartDateFilter),t.xp6(6),t.Q6J("matDatepicker",i)("ngModel",r.EndDateFilter),t.xp6(1),t.Q6J("for",i),t.xp6(1),t.Q6J("ngModel",r.EndDateFilter),t.xp6(19),t.Q6J("ngForOf",r.terminalSaleReportData),t.xp6(1),t.Q6J("ngIf",0==r.terminalSaleReportData.length),t.xp6(7),t.Q6J("matDatepicker",n)("ngModel",r.StartDateFilter),t.xp6(1),t.Q6J("for",n),t.xp6(1),t.Q6J("ngModel",r.StartDateFilter),t.xp6(6),t.Q6J("matDatepicker",i)("ngModel",r.EndDateFilter),t.xp6(1),t.Q6J("for",i),t.xp6(1),t.Q6J("ngModel",r.EndDateFilter),t.xp6(28),t.Q6J("ngForOf",r.terminalReportData),t.xp6(1),t.Q6J("ngIf",0==r.terminalReportData.length),t.xp6(3),t.Q6J("ngIf",r.barcodeDetails)}},dependencies:[c.sg,c.O5,f.SP,f.uX,N.lW,T.KE,T.hX,T.R9,x.Nt,m.Fj,m.JJ,m.On,Z.YE,Z.nU,_.b6,_.oB,A.k,h.Mq,h.hl,h.nW]}),a})()}];let W=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.Bz.forChild(K),v.Bz]}),a})();var G=o(6823),$=o(5480),H=o(1620),X=o(3546),V=o(455),S=o(9041),tt=o(2514),C=o(3238);let et=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.ez,W,c.ez,G.q,f.Nh,$.q,H.o9,X.QW,m.u5,m.UX,V.rP,Z.JX,S.aE,S.bz,_.At,tt.UU,A.g,h.FA,x.c,m.u5,C.XK,C.si]}),a})()}}]);