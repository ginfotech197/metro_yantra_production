"use strict";(self.webpackChunkbase_project=self.webpackChunkbase_project||[]).push([[132],{5480:(J,g,a)=>{a.d(g,{q:()=>l});var p=a(4859),S=a(4144),k=a(4650);let l=(()=>{class d{}return d.\u0275fac=function(u){return new(u||d)},d.\u0275mod=k.oAB({type:d}),d.\u0275inj=k.cJS({imports:[p.ot,S.c]}),d})()},9132:(J,g,a)=>{a.r(g),a.d(g,{MasterStockistModule:()=>ht});var p=a(6895),S=a(2510),k=a(1068),l=a(4006),d=a(2340),Z=a(5226),u=a.n(Z),t=a(4650),L=a(2173),N=a(9366),F=a(1599),Q=a(5620),w=a(7431),T=a(3848),B=a(4859),x=a(9549),V=a(4144),_=a(277),P=a(4784),h=a(3546),q=a(455),v=a(6308),b=a(4385),W=a(3238),I=a(7392),U=a(4537),A=a(8567),M=a(3189);const r=function(o){return{"font-size":o}};function K(o,c){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const e=c.$implicit,i=t.oxw();t.Q6J("ngStyle",t.VKq(4,r,i.screenWidth>=1366?"15px":"30px"))("value",e.userId),t.xp6(1),t.AsE(" ",e.userName," (",e.commission,"%) ")}}function D(o,c){1&o&&(t.TgZ(0,"mat-error"),t._uU(1,"This field is Required "),t.qZA())}function O(o,c){if(1&o&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("Minimum length of name is ",e.stockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function R(o,c){if(1&o&&(t.TgZ(0,"div",58),t.YNc(1,D,2,0,"mat-error",59),t.YNc(2,O,2,1,"mat-error",59),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.stockistMasterForm.get("userName").errors.required),t.xp6(1),t.Q6J("ngIf",e.stockistMasterForm.get("userName").errors.minlength)}}function Y(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr",5)(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"a",60)(13,"img",61),t.NdJ("click",function(){const s=t.CHM(e).$implicit,m=t.oxw();return m.onStockistSelectionTransferPoint(s.userId),t.KtG(m.selectedTab=1)}),t.qZA()(),t.TgZ(14,"a",60)(15,"img",62),t.NdJ("click",function(){const s=t.CHM(e).$implicit,m=t.oxw();return m.onStockistSelection(s.userId),t.KtG(m.selectedTab=2)}),t.qZA()()(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td")(19,"input",63),t.NdJ("click",function(){const s=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.updateBlock(s.userId))}),t.qZA()(),t.TgZ(20,"td")(21,"i",64),t.NdJ("click",function(){const s=t.CHM(e).$implicit,m=t.oxw();return t.KtG(m.editStockist(s))}),t.qZA()()()}if(2&o){const e=c.$implicit,i=c.index,n=t.oxw();t.Q6J("ngStyle",n.getBackgroundColor(i)),t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.userName),t.xp6(2),t.Oqu(e.password),t.xp6(2),t.Oqu(e.balance),t.xp6(2),t.Oqu(e.commission),t.xp6(7),t.AsE("",e.superStockistName," (",e.superStockistPin,")"),t.xp6(2),t.Q6J("checked",1==e.blocked)}}function E(o,c){if(1&o&&(t.TgZ(0,"mat-option",65),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.Q6J("value",e.userId),t.xp6(1),t.hij(" ",e.pin," ")}}function j(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Name"),t.qZA(),t._UZ(3,"input",67),t.TgZ(4,"mat-icon",44),t._uU(5,"person_pin"),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockistTransferPoint.userName)}}function G(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Current balance"),t.qZA(),t._UZ(3,"input",68),t.TgZ(4,"mat-icon",44),t._uU(5,"account_balance_wallet"),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockistTransferPoint.balance)}}function H(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Super stockist owner"),t.qZA(),t._UZ(3,"input",67),t.TgZ(4,"mat-icon",44),t._uU(5,"person_pin"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockistTransferPoint.superStockistName)}}function $(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Super stockist balance"),t.qZA(),t._UZ(3,"input",68),t.TgZ(4,"mat-icon",44),t._uU(5,"account_balance_wallet"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockistTransferPoint.superStockistBalance)}}function X(o,c){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,H,6,7,"mat-form-field",40),t.YNc(2,$,6,7,"mat-form-field",40),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.selectedStockistTransferPoint),t.xp6(1),t.Q6J("ngIf",e.selectedStockistTransferPoint)}}function z(o,c){if(1&o&&(t.TgZ(0,"mat-option",65),t._uU(1),t.qZA()),2&o){const e=c.$implicit;t.Q6J("value",e.userId),t.xp6(1),t.hij(" ",e.pin," ")}}function tt(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Name"),t.qZA(),t._UZ(3,"input",67),t.TgZ(4,"mat-icon",44),t._uU(5,"person_pin"),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockist.userName)}}function et(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Current balance"),t.qZA(),t._UZ(3,"input",68),t.TgZ(4,"mat-icon",44),t._uU(5,"account_balance_wallet"),t.qZA()()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockist.balance)}}function it(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Super stockist owner"),t.qZA(),t._UZ(3,"input",67),t.TgZ(4,"mat-icon",44),t._uU(5,"person_pin"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockist.superStockistName)}}function ot(o,c){if(1&o&&(t.TgZ(0,"mat-form-field",66)(1,"mat-label",5),t._uU(2,"Super stockist balance"),t.qZA(),t._UZ(3,"input",68),t.TgZ(4,"mat-icon",44),t._uU(5,"account_balance_wallet"),t.qZA()()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",t.VKq(3,r,e.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(5,r,e.screenWidth>=1366?"15px":"25px"))("value",e.selectedStockist.superStockistBalance)}}function st(o,c){if(1&o&&(t.TgZ(0,"div",36),t.YNc(1,it,6,7,"mat-form-field",40),t.YNc(2,ot,6,7,"mat-form-field",40),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.selectedStockist),t.xp6(1),t.Q6J("ngIf",e.selectedStockist)}}function nt(o,c){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&o){const e=c.$implicit,i=c.index;t.xp6(2),t.Oqu(i+1),t.xp6(2),t.Oqu(e.rechargedTo.userName),t.xp6(2),t.Oqu(e.rechargedby.userName),t.xp6(2),t.Oqu(e.oldAmount),t.xp6(2),t.Oqu(e.rechargedAmount),t.xp6(2),t.Oqu(e.newAmount),t.xp6(2),t.Oqu(e.dateAndTime)}}function rt(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",69)(1,"div",70)(2,"mat-slide-toggle",71),t.NdJ("change",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.showDevArea=!n.showDevArea)}),t._uU(3),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(3),t.hij("",e.showDevArea?"Hide Developer Area":"Show Developer Area"," ")}}function at(o,c){if(1&o&&(t.TgZ(0,"div",69)(1,"div",72)(2,"pre"),t._uU(3),t.ALo(4,"json"),t.ALo(5,"json"),t.qZA()(),t.TgZ(6,"div",70)(7,"pre"),t._uU(8),t.ALo(9,"json"),t.qZA()(),t._UZ(10,"div",70),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.AsE("        stockistMasterForm = ",t.lcZ(4,3,e.stockistMasterForm.value),"\n        stockists = ",t.lcZ(5,5,e.stockists),"\n      "),t.xp6(5),t.hij("stockistLimitForm = ",t.lcZ(9,7,e.stockistLimitForm.value),"")}}const ct=function(o,c){return{itemsPerPage:o,currentPage:c}};function y(o,c,e){return(o<c?-1:1)*(e?1:-1)}const mt=[{path:"",canActivate:[k.m],component:(()=>{class o{constructor(e,i,n,s,m){this.masterStockistService=e,this.authService=i,this.masterSuperStockistService=n,this.commonService=s,this.transactionReportService=m,this.isProduction=d.N.production,this.showDevArea=!1,this.isStockistUpdateAble=!1,this.stockists=[],this.superStockists=[],this.sortedStockistList=[],this.selectedStockistTransferPoint=null,this.selectedStockist=null,this.highLightedRowIndex=-1,this.pinCheckValidator=!1,this.rechargedToID=null,this.transactionData=[],this.p=1,this.p1=1,this.itemsOnEveryPage=20,this.selectedTab=0,this.searchItem=null,this.screenWidth=window.innerWidth,this.screenHeight=window.innerHeight,this.user=this.authService.userBehaviorSubject.value,this.authService.userBehaviorSubject.subscribe(f=>{this.user=f}),this.stockistMasterForm=new l.nJ({id:new l.p4(null),userName:new l.p4(null,[l.kI.required,l.kI.minLength(2)]),superStockistId:new l.p4(null,[l.kI.required]),pin:new l.p4(null,[l.kI.required]),commission:new l.p4(null,[l.kI.required,l.kI.max(100)])}),this.stockistLimitForm=new l.nJ({beneficiaryUid:new l.p4(null,[l.kI.required]),amount:new l.p4(null,[l.kI.required,l.kI.minLength(2)])})}ngOnInit(){this.stockists=this.masterStockistService.getStockists(),this.sortedStockistList=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(e=>{this.stockists=e,this.sortedStockistList=e}),this.superStockists=this.masterSuperStockistService.getSuperStockists(),this.masterSuperStockistService.getSuperStockistListener().subscribe(e=>{this.superStockists=e})}refreshStockistList(){this.masterStockistService.getAllLatestStockist()}updateBlock(e){this.masterStockistService.updateBlock(e).subscribe()}getTransaction(){this.transactionReportService.getTransactionByUser({rechargedToID:this.rechargedToID,rechargedByID:this.user.userId}).subscribe(i=>{this.transactionData=i.data})}onStockistSelect(e){this.selectedStockist=this.stockists.find(i=>i.userId===e.value)}onStockistSelectTransferPoint(e){this.selectedStockistTransferPoint=this.stockists.find(i=>i.userId===e.value)}editStockist(e){this.highLightedRowIndex=this.stockists.findIndex(n=>n.userId===e.userId),this.stockistMasterForm.patchValue({id:e.userId,userName:e.userName,pin:e.pin,superStockistId:e.superStockistId,commission:e.commission}),this.isStockistUpdateAble=!0}updateStockist(){const e=this.superStockists.findIndex(i=>i.userId===this.stockistMasterForm.value.superStockistId);parseFloat(String(this.superStockists[e].commission))<parseFloat(this.stockistMasterForm.value.commission)?u().fire({position:"top-end",icon:"info",title:"Stockist commission is more than Super Stockist commission",showConfirmButton:!1,timer:2e3}):u().fire({title:"Confirmation",text:"Do you sure to update stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(i=>{i.isConfirmed&&this.masterStockistService.updateStockiist({id:this.stockistMasterForm.value.id,userName:this.stockistMasterForm.value.userName,superStockistId:this.stockistMasterForm.value.superStockistId,commission:this.stockistMasterForm.value.commission}).subscribe(s=>{1===s.success?(this.sortedStockistList[this.highLightedRowIndex]=s.data,this.stockistMasterForm.reset(),this.isStockistUpdateAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Stockist updated",timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},s=>{console.log("data saving error",s)})})}checkPinValidation(){this.commonService.checkPinValidation(this.stockistMasterForm.value.userName).subscribe(e=>{0===e.success?(u().fire({position:"top-end",icon:"error",title:"Pin already exists",showConfirmButton:!1,timer:2e3}),this.pinCheckValidator=!0,this.stockistMasterForm.patchValue({userName:null})):this.pinCheckValidator=!1})}createNewStockist(){const e=this.superStockists.findIndex(i=>i.userId===this.stockistMasterForm.value.superStockistId);parseFloat(String(this.superStockists[e].commission))<parseFloat(this.stockistMasterForm.value.commission)?u().fire({position:"top-end",icon:"info",title:"Stockist commission is more than Super Stockist commission",showConfirmButton:!1,timer:2e3}):u().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(i=>{i.isConfirmed&&this.masterStockistService.saveNewStockist({userName:this.stockistMasterForm.value.userName,pin:this.stockistMasterForm.value.pin,superStockistId:this.stockistMasterForm.value.superStockistId,createdBy:this.user.userId,commission:this.stockistMasterForm.value.commission}).subscribe(s=>{1===s.success?(this.highLightedRowIndex=0,this.stockistLimitForm.reset(),this.stockistMasterForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Stockist Created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},s=>{console.log("data saving error",s)})})}getBackgroundColor(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterStockistForm(){this.stockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isStockistUpdateAble=!1}sortData(e){const i=this.stockists.slice();this.sortedStockistList=e.active&&""!==e.direction?i.sort((n,s)=>{const m="asc"===e.direction;switch(e.active){case"userName":return y(n.userName,s.userName,m);case"pin":return y(n.pin,s.pin,m);case"balance":return y(n.balance,s.balance,m);default:return 0}}):i}rechargeToStockist(){parseInt(this.stockistLimitForm.value.amount)<0?u().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(this.stockistLimitForm.value.amount)>parseInt(String(this.selectedStockistTransferPoint.superStockistBalance))?u().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(e=>{e.isConfirmed&&this.masterStockistService.saveStockistBalance({beneficiaryUid:this.stockistLimitForm.value.beneficiaryUid,amount:this.stockistLimitForm.value.amount,rechargeDoneByUid:this.user.userId,superStockiestID:this.selectedStockistTransferPoint.superStockistId}).subscribe(n=>{if(1===n.success){const s=n.data,m=this.stockists.findIndex(C=>C.userId===s.userId);this.stockists[m].balance=s.balance,this.selectedStockistTransferPoint.superStockistBalance=s.superStockistBalance,this.selectedStockistTransferPoint.balance=s.balance,this.authService.setUserBalanceBy(this.user.balance-this.stockistLimitForm.value.amount),this.highLightedRowIndex=m,this.stockistLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},n=>{console.log("data saving error",n)})})}adjustPointToStockist(){parseInt(this.stockistLimitForm.value.amount)<0?u().fire({position:"top-end",icon:"info",title:"Amount cannot be negative",showConfirmButton:!1,timer:3e3}):parseInt(String(this.selectedStockist.balance))<parseInt(String(this.stockistLimitForm.value.amount))?u().fire({position:"top-end",icon:"info",title:"Low Balance",showConfirmButton:!1,timer:3e3}):u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(e=>{e.isConfirmed&&this.masterStockistService.saveStockistBalance({beneficiaryUid:this.stockistLimitForm.value.beneficiaryUid,amount:-this.stockistLimitForm.value.amount,rechargeDoneByUid:this.user.userId,superStockiestID:this.selectedStockist.superStockistId}).subscribe(n=>{if(1===n.success){const s=n.data,m=this.stockists.findIndex(C=>C.userId===s.userId);this.stockists[m].balance=s.balance,this.selectedStockist.superStockistBalance=s.superStockistBalance,this.selectedStockist.balance=s.balance,this.authService.setUserBalanceBy(this.user.balance-this.stockistLimitForm.value.amount),this.highLightedRowIndex=m,this.stockistLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},n=>{console.log("data saving error",n)})})}onStockistSelectionTransferPoint(e){e.value?(this.selectedStockistTransferPoint=this.stockists.find(i=>i.userId===e.value),this.stockistLimitForm.controls.amount.setValidators([l.kI.max(this.selectedStockistTransferPoint.balance)])):(this.stockistLimitForm.patchValue({beneficiaryUid:e}),this.selectedStockistTransferPoint=this.stockists.find(i=>i.userId===e),this.stockistLimitForm.controls.amount.setValidators([l.kI.max(this.selectedStockistTransferPoint.balance)]))}onStockistSelection(e){e.value?(this.selectedStockist=this.stockists.find(i=>i.userId===e.value),this.stockistLimitForm.controls.amount.setValidators([l.kI.max(this.selectedStockist.balance)])):(this.stockistLimitForm.patchValue({beneficiaryUid:e}),this.selectedStockist=this.stockists.find(i=>i.userId===e),this.stockistLimitForm.controls.amount.setValidators([l.kI.max(this.selectedStockist.balance)]))}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.E),t.Y36(N.e),t.Y36(F.Q),t.Y36(Q.v),t.Y36(w.z))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-master-stockist"]],decls:183,vars:106,consts:[[1,"ml-5",3,"selectedIndex"],["label","Create stockist"],[1,"flex-row","mt-2"],[1,"col-10"],["mat-card-avatar","",1,"example-header-image"],[3,"ngStyle"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,""],["fxFlex","100"],[3,"formGroup"],["formControlName","superStockistId"],[3,"ngStyle","value",4,"ngFor","ngForOf"],["type","text","matInput","","formControlName","userName","placeholder","Enter name",3,"ngStyle","change"],["class","","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["fxFlex","50"],["type","text","matInput","","formControlName","pin","placeholder","Enter name"],["type","text","matInput","","formControlName","commission","placeholder","Commission",3,"ngStyle"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"ngStyle","click"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"ngStyle","disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"ngStyle","click"],[1,"mt-2","col-9",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","5",1,"text-center"],["scope","colgroup","colspan","2",1,"text-center"],["placeholder","Search",1,"col-12",3,"ngModel","ngModelChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-button","","color","primary",3,"click"],[1,"material-icons"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],[3,"pageChange"],["label","Transfer Point"],[1,"d-flex","flex-row","mt-2"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"ngStyle","selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount",3,"ngStyle"],["matSuffix",""],[1,"col-2"],["label","Adjust Point"],["label","Stockist Tranaction Report"],["fxFlex","60"],["bindLabel","pin","bindValue","userId",3,"ngStyle","items","ngModel","ngModelChange"],["mat-raised-button","","color","warn",1,"ml-4",3,"ngStyle","click"],[1,"mt-2",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important"],["scope","colgroup","colspan","7",1,"text-center"],["mat-sort-header","terminalName"],[4,"ngFor","ngForOf"],["class","d-flex",4,"ngIf"],[3,"ngStyle","value"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,""],[4,"ngIf"],[2,"cursor","pointer"],["src","assets/images/transfer_point.png",3,"click"],["src","assets/images/adjust_point.png",3,"click"],["type","checkbox",3,"checked","click"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"ngStyle","value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"ngStyle","value"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,i){1&e&&(t.TgZ(0,"mat-tab-group",0)(1,"mat-tab",1)(2,"div",2)(3,"div",3)(4,"mat-card")(5,"mat-card-header"),t._UZ(6,"div",4),t.TgZ(7,"mat-card-title",5),t._uU(8,"New Stockist Form"),t.qZA()(),t.TgZ(9,"mat-card-content")(10,"div",6)(11,"div",7)(12,"form",8)(13,"div",6)(14,"mat-form-field",7)(15,"mat-label",5),t._uU(16,"Super Stockist"),t.qZA(),t.TgZ(17,"mat-select",9),t.YNc(18,K,2,6,"mat-option",10),t.qZA()(),t.TgZ(19,"mat-form-field",7)(20,"mat-label",5),t._uU(21,"Stockist Name"),t.qZA(),t.TgZ(22,"input",11),t.NdJ("change",function(){return i.checkPinValidation()}),t.qZA(),t.YNc(23,R,3,2,"div",12),t.qZA()(),t.TgZ(24,"div",6)(25,"mat-form-field",13)(26,"mat-label",5),t._uU(27,"PASSWORD"),t.qZA(),t._UZ(28,"input",14),t.qZA(),t.TgZ(29,"mat-form-field",7)(30,"mat-label",5),t._uU(31,"Commission"),t.qZA(),t._UZ(32,"input",15),t.qZA()()()()(),t.TgZ(33,"div",6)(34,"button",16),t.NdJ("click",function(){return i.createNewStockist()}),t._uU(35,"Create"),t.qZA(),t.TgZ(36,"button",17),t.NdJ("click",function(){return i.updateStockist()}),t._uU(37,"Update"),t.qZA(),t.TgZ(38,"button",18),t.NdJ("click",function(){return i.clearMasterStockistForm()}),t._uU(39,"clear"),t.qZA()()()()(),t.TgZ(40,"div",19)(41,"table",20),t.NdJ("matSortChange",function(s){return i.sortData(s)}),t.TgZ(42,"thead")(43,"tr")(44,"th",21),t._uU(45,"Stockist List"),t.qZA(),t.TgZ(46,"th",22)(47,"label"),t._uU(48,"Search"),t.qZA(),t.TgZ(49,"input",23),t.NdJ("ngModelChange",function(s){return i.searchItem=s}),t.qZA()(),t.TgZ(50,"th",24)(51,"button",25),t.NdJ("click",function(){return i.refreshStockistList()}),t._uU(52," Refresh "),t.TgZ(53,"span",26),t._uU(54,"refresh"),t.qZA()()()(),t.TgZ(55,"tr")(56,"th"),t._uU(57,"Id"),t.qZA(),t.TgZ(58,"th",27),t._uU(59,"S name"),t.qZA(),t.TgZ(60,"th",28),t._uU(61,"Pass"),t.qZA(),t.TgZ(62,"th",29),t._uU(63,"Bal"),t.qZA(),t.TgZ(64,"th",29),t._uU(65,"Comm"),t.qZA(),t.TgZ(66,"th"),t._uU(67,"Action"),t.qZA(),t.TgZ(68,"th",29),t._uU(69,"SS Name"),t.qZA(),t.TgZ(70,"th",30),t._uU(71,"Blocked"),t.qZA(),t.TgZ(72,"th",31),t._uU(73,"Edit"),t.qZA()()(),t.TgZ(74,"tbody"),t.YNc(75,Y,22,9,"tr",32),t.ALo(76,"paginate"),t.ALo(77,"filter"),t.qZA()(),t.TgZ(78,"pagination-controls",33),t.NdJ("pageChange",function(s){return i.p1=s}),t.qZA()()()(),t.TgZ(79,"mat-tab",34)(80,"div",35)(81,"div",3)(82,"mat-card")(83,"mat-card-header"),t._UZ(84,"div",4),t.TgZ(85,"mat-card-title",5),t._uU(86,"Recharge Stockist"),t.qZA()(),t.TgZ(87,"mat-card-content")(88,"div",36)(89,"div",37)(90,"form",8)(91,"div",36)(92,"mat-form-field",7)(93,"mat-label",5),t._uU(94,"Stockist"),t.qZA(),t.TgZ(95,"mat-select",38),t.NdJ("selectionChange",function(s){return i.onStockistSelectTransferPoint(s)}),t.YNc(96,E,2,2,"mat-option",39),t.qZA()(),t.YNc(97,j,6,7,"mat-form-field",40),t.YNc(98,G,6,7,"mat-form-field",40),t.qZA(),t.YNc(99,X,3,2,"div",41),t.TgZ(100,"div",6)(101,"mat-form-field",42)(102,"mat-label",5),t._uU(103,"Recharge amount"),t.qZA(),t._UZ(104,"input",43),t.TgZ(105,"mat-icon",44),t._uU(106," money"),t.qZA()()(),t.TgZ(107,"div",36)(108,"button",18),t.NdJ("click",function(){return i.rechargeToStockist()}),t._uU(109,"Save"),t.qZA()()()()()()()(),t._UZ(110,"div",45),t.qZA()(),t.TgZ(111,"mat-tab",46)(112,"div",35)(113,"div",3)(114,"mat-card")(115,"mat-card-header"),t._UZ(116,"div",4),t.TgZ(117,"mat-card-title",5),t._uU(118,"Adjust Point"),t.qZA()(),t.TgZ(119,"mat-card-content")(120,"div",36)(121,"div",37)(122,"form",8)(123,"div",36)(124,"mat-form-field",7)(125,"mat-label",5),t._uU(126,"Stockist"),t.qZA(),t.TgZ(127,"mat-select",38),t.NdJ("selectionChange",function(s){return i.onStockistSelect(s)}),t.YNc(128,z,2,2,"mat-option",39),t.qZA()(),t.YNc(129,tt,6,7,"mat-form-field",40),t.YNc(130,et,6,7,"mat-form-field",40),t.qZA(),t.YNc(131,st,3,2,"div",41),t.TgZ(132,"div",36)(133,"mat-form-field",42)(134,"mat-label",5),t._uU(135,"Recharge amount"),t.qZA(),t._UZ(136,"input",43),t.TgZ(137,"mat-icon",44),t._uU(138," money"),t.qZA()()(),t.TgZ(139,"div",36)(140,"button",18),t.NdJ("click",function(){return i.adjustPointToStockist()}),t._uU(141,"Save"),t.qZA()()()()()()()(),t._UZ(142,"div",45),t.qZA()(),t.TgZ(143,"mat-tab",47)(144,"div",35)(145,"div",3)(146,"mat-card")(147,"mat-card-header"),t._UZ(148,"div",4),t.TgZ(149,"mat-card-title",5),t._uU(150,"Stockist Tranaction Report "),t.qZA()(),t.TgZ(151,"mat-card-content")(152,"div",36)(153,"div",48)(154,"ng-select",49),t.NdJ("ngModelChange",function(s){return i.rechargedToID=s}),t.qZA()()(),t.TgZ(155,"button",50),t.NdJ("click",function(){return i.getTransaction()}),t._uU(156,"Search"),t.qZA()()()(),t._UZ(157,"div",45),t.qZA(),t.TgZ(158,"div",51)(159,"table",52)(160,"thead")(161,"tr")(162,"th",53),t._uU(163,"Transaction List"),t.qZA()(),t.TgZ(164,"tr")(165,"th"),t._uU(166,"Sl No."),t.qZA(),t.TgZ(167,"th",54),t._uU(168,"Recharge To"),t.qZA(),t.TgZ(169,"th",28),t._uU(170,"Recharge By"),t.qZA(),t.TgZ(171,"th",29),t._uU(172,"Old Amount"),t.qZA(),t.TgZ(173,"th",29),t._uU(174,"Recharged Amount"),t.qZA(),t.TgZ(175,"th",30),t._uU(176,"New Amount"),t.qZA(),t.TgZ(177,"th",30),t._uU(178,"Date and Time"),t.qZA()()(),t.TgZ(179,"tbody"),t.YNc(180,nt,15,7,"tr",55),t.qZA()()()()(),t.YNc(181,rt,4,1,"div",56),t.YNc(182,at,11,9,"div",56)),2&e&&(t.Q6J("selectedIndex",i.selectedTab),t.xp6(7),t.Q6J("ngStyle",t.VKq(53,r,i.screenWidth>=1366?"20px":"25px")),t.xp6(5),t.Q6J("formGroup",i.stockistMasterForm),t.xp6(3),t.Q6J("ngStyle",t.VKq(55,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(3),t.Q6J("ngForOf",i.superStockists),t.xp6(2),t.Q6J("ngStyle",t.VKq(57,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(59,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(1),t.Q6J("ngIf",!i.stockistMasterForm.get("userName").valid&&i.stockistMasterForm.get("userName").touched),t.xp6(3),t.Q6J("ngStyle",t.VKq(61,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(4),t.Q6J("ngStyle",t.VKq(63,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(65,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(67,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(69,r,i.screenWidth>=1366?"15px":"25px"))("disabled",!i.isStockistUpdateAble),t.xp6(2),t.Q6J("ngStyle",t.VKq(71,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(11),t.Q6J("ngModel",i.searchItem),t.xp6(26),t.Q6J("ngForOf",t.xi3(76,47,t.xi3(77,50,i.sortedStockistList,i.searchItem),t.WLB(73,ct,i.itemsOnEveryPage,i.p1))),t.xp6(10),t.Q6J("ngStyle",t.VKq(76,r,i.screenWidth>=1366?"20px":"25px")),t.xp6(5),t.Q6J("formGroup",i.stockistLimitForm),t.xp6(3),t.Q6J("ngStyle",t.VKq(78,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(80,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(1),t.Q6J("ngForOf",i.sortedStockistList),t.xp6(1),t.Q6J("ngIf",i.selectedStockistTransferPoint),t.xp6(1),t.Q6J("ngIf",i.selectedStockistTransferPoint),t.xp6(1),t.Q6J("ngIf",i.selectedStockistTransferPoint),t.xp6(3),t.Q6J("ngStyle",t.VKq(82,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(84,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(4),t.Q6J("ngStyle",t.VKq(86,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(9),t.Q6J("ngStyle",t.VKq(88,r,i.screenWidth>=1366?"20px":"25px")),t.xp6(5),t.Q6J("formGroup",i.stockistLimitForm),t.xp6(3),t.Q6J("ngStyle",t.VKq(90,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(92,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(1),t.Q6J("ngForOf",i.sortedStockistList),t.xp6(1),t.Q6J("ngIf",i.selectedStockist),t.xp6(1),t.Q6J("ngIf",i.selectedStockist),t.xp6(1),t.Q6J("ngIf",i.selectedStockist),t.xp6(3),t.Q6J("ngStyle",t.VKq(94,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(2),t.Q6J("ngStyle",t.VKq(96,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(4),t.Q6J("ngStyle",t.VKq(98,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(9),t.Q6J("ngStyle",t.VKq(100,r,i.screenWidth>=1366?"20px":"25px")),t.xp6(5),t.Q6J("ngStyle",t.VKq(102,r,i.screenWidth>=1366?"15px":"25px"))("items",i.stockists)("ngModel",i.rechargedToID),t.xp6(1),t.Q6J("ngStyle",t.VKq(104,r,i.screenWidth>=1366?"15px":"25px")),t.xp6(25),t.Q6J("ngForOf",i.transactionData),t.xp6(1),t.Q6J("ngIf",!i.isProduction),t.xp6(1),t.Q6J("ngIf",!i.isProduction&&i.showDevArea))},dependencies:[p.sg,p.O5,p.PC,T.SP,T.uX,B.lW,x.TO,x.KE,x.hX,x.R9,V.Nt,_.xw,_.SQ,_.Wh,_.yH,P.Zl,h.a8,h.dk,h.dn,h.n5,h.kc,l._Y,l.Fj,l.JJ,l.JL,l.On,l.sg,l.u,q.Rr,v.YE,v.nU,b.gD,W.ey,I.Hw,U.w9,A.LS,p.Ts,M.Z,A._s],styles:["@keyframes _ngcontent-%COMP%_blinkingText{0%{color:#ff3d50}to{color:#222291}}@keyframes _ngcontent-%COMP%_blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}"]}),o})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let ut=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[S.Bz.forChild(mt),S.Bz]}),o})();var dt=a(5480),pt=a(1620);let ht=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,ut,T.Nh,dt.q,pt.o9,h.QW,l.u5,l.UX,q.rP,v.JX,b.LD,I.Ps,U.A0,M.h,A.JX]}),o})()}}]);