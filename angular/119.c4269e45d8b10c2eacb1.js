"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[119],{5119:(Z,a,s)=>{s.r(a),s.d(a,{CourseModule:()=>_});var d=s(8583),r=s(5855),t=s(639),g=s(4981),m=s(671);const u=function(e){return[e]};function p(e,i){if(1&e){const n=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"h3"),t._uU(2,"Test Name : "),t.TgZ(3,"strong"),t._uU(4),t.qZA(),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Description : Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est aliquam odio consectetur rerum reiciendis exercitationem illo voluptatum."),t.qZA(),t.TgZ(7,"table"),t.TgZ(8,"tr"),t.TgZ(9,"th"),t._uU(10,"Total Marks"),t.qZA(),t.TgZ(11,"td"),t._uU(12,"260"),t.qZA(),t.qZA(),t.TgZ(13,"tr"),t.TgZ(14,"th"),t._uU(15,"Total Time"),t.qZA(),t.TgZ(16,"td"),t._uU(17,"1.5 Hours"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(18,"button",3),t._uU(19,"Continue"),t.qZA(),t.TgZ(20,"div",4),t.TgZ(21,"div",5),t.TgZ(22,"div",6),t.TgZ(23,"div",7),t.TgZ(24,"h2",8),t._uU(25,"Instructions"),t.qZA(),t.TgZ(26,"button",9),t.TgZ(27,"span",10),t._uU(28,"\u2718"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(29,"div",11),t.TgZ(30,"ol"),t.TgZ(31,"li"),t._uU(32," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi verita. "),t.qZA(),t.TgZ(33,"li"),t._uU(34," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi verita. "),t.qZA(),t.TgZ(35,"li"),t._uU(36," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi verita. "),t.qZA(),t.TgZ(37,"li"),t._uU(38," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi verita. "),t.qZA(),t.TgZ(39,"li"),t._uU(40," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi verita. "),t.qZA(),t.TgZ(41,"li"),t._uU(42," Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi verita. "),t.qZA(),t.qZA(),t.TgZ(43,"button",12),t.NdJ("click",function(){const c=t.CHM(n).$implicit;return t.oxw().startTest(c._id)}),t._uU(44,"Start Test"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&e){const n=i.$implicit,o=i.index;t.xp6(4),t.Oqu(n.testName),t.xp6(14),t.uIk("data-target","#modal"+t.VKq(5,u,o)),t.xp6(2),t.s9C("id","modal"+o),t.uIk("aria-labelledby","modalLabel"+t.VKq(7,u,o)),t.xp6(4),t.s9C("id","modalLabel"+o)}}const C=[{path:"",component:(()=>{class e{constructor(n,o,l,c){this.userService=n,this.resultService=o,this.activatedRoute=l,this.router=c}ngOnInit(){this.cName=this.activatedRoute.snapshot.paramMap.get("courseId"),this.viewProfile(),this.getTests()}viewProfile(){this.userService.viewProfile().subscribe(n=>{this.profile=n})}getTests(){this.userService.getCbtCourse(this.cName).subscribe(n=>{this.testList=n.result})}startTest(n){this.resultService.createResult({userId:this.profile.userId,testId:n}).subscribe(o=>{alert(o.message),this.router.navigate([`/exam/${n}`])})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(g.K),t.Y36(m.I),t.Y36(r.gz),t.Y36(r.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-course"]],decls:2,vars:1,consts:[[1,"course"],["class","test",4,"ngFor","ngForOf"],[1,"test"],["type","button","data-toggle","modal",1,""],["tabindex","-1","aria-hidden","true",1,"modal","fade",3,"id"],[1,"modal-dialog","modal-xl","modal-dialog-centered","modal-dialog-scrollable"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title",3,"id"],["type","button","data-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],["data-dismiss","modal","aria-label","Close",3,"click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0),t.YNc(1,p,45,9,"div",1),t.qZA()),2&n&&(t.xp6(1),t.Q6J("ngForOf",o.testList))},directives:[d.sg],styles:[".course[_ngcontent-%COMP%]{margin:50px}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]{background:#f9fdf4;padding:20px;margin-bottom:50px;border-radius:20px;box-shadow:0 10px 20px -10px #4d4d4d}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:40px;font-weight:700;color:#87cf35;margin-bottom:16px;font-weight:500}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%;margin-bottom:20px}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:2px solid rgba(77,77,77,.2);font-size:18px}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{background:#87cf35;color:#fff;border:none;padding:10px 20px;font-size:18px;font-weight:500}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:30px;color:#000}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]{padding-top:0}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]{padding-left:15px;margin:20px 0}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin-bottom:10px}.course[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   .modal-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#87cf35;color:#fff;display:block;border:none;width:150px;margin:auto;padding:10px 20px;font-size:18px;font-weight:500}"]}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[r.Bz.forChild(C)],r.Bz]}),e})(),_=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[d.ez,M]]}),e})()}}]);