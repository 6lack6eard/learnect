"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[893],{3893:(h,g,i)=>{i.r(g),i.d(g,{AsignCourseModule:()=>A});var c=i(8583),l=i(5855),t=i(665),n=i(639),a=i(4981),m=i(1105),C=i(6409);function d(o,s){if(1&o&&(n.TgZ(0,"option",10),n._uU(1),n.qZA()),2&o){const e=s.$implicit;n.s9C("value",e.cName),n.xp6(1),n.hij(" ",e.cName," ")}}function p(o,s){if(1&o&&(n.TgZ(0,"option",10),n._uU(1),n.qZA()),2&o){const e=s.$implicit;n.s9C("value",e.cName),n.xp6(1),n.hij(" ",e.cName," ")}}const f=[{path:"",component:(()=>{class o{constructor(e,r,u){this.userService=e,this.lmsCourse=r,this.cbtCourse=u,this.asignLmscourseForm=new t.cw({userId:new t.NI("",[t.kI.required]),lmsCourse:new t.NI("",[t.kI.required])}),this.asignCbtcourseForm=new t.cw({userId:new t.NI("",[t.kI.required]),cbtCourse:new t.NI("",[t.kI.required])})}ngOnInit(){this.getAllCourses(),this.getAllCbtCourse()}getAllCourses(){this.lmsCourse.getCourses().subscribe(e=>{this.courseResult=e,this.courseList=this.courseResult.result})}asignLmsCourse(){this.asignLmscourseForm.valid&&this.userService.asignLmscourse(this.asignLmscourseForm.value).subscribe(e=>{alert("Lms Course added successfully"),this.asignLmscourseForm.reset()})}getAllCbtCourse(){this.cbtCourse.getAllCourse().subscribe(e=>{this.cbtCourseList=e.result})}assignCbtCourse(){this.asignCbtcourseForm.valid&&this.userService.asignCbtcourse(this.asignCbtcourseForm.value).subscribe(e=>{alert("Cbt Course added successfully"),this.asignCbtcourseForm.reset()})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(a.K),n.Y36(m.u),n.Y36(C._))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-asign-course"]],decls:32,vars:6,consts:[[1,"addNewStud"],[1,"row"],[1,"col-6",3,"formGroup","ngSubmit"],[1,"form-grp"],["type","text","placeholder","userId","formControlName","userId","id","userId"],["for","userId"],["name","","id","","formControlName","lmsCourse","required",""],[3,"value",4,"ngFor","ngForOf"],["type","submit",3,"disabled"],["name","","id","","formControlName","cbtCourse","required",""],[3,"value"]],template:function(e,r){1&e&&(n.TgZ(0,"div",0),n.TgZ(1,"h2"),n._uU(2,"Asign Course"),n.qZA(),n.TgZ(3,"div",1),n.TgZ(4,"form",2),n.NdJ("ngSubmit",function(){return r.asignLmsCourse()}),n.TgZ(5,"h4"),n._uU(6,"Lms Course"),n.qZA(),n.TgZ(7,"div",3),n._UZ(8,"input",4),n.TgZ(9,"label",5),n._uU(10,"User Id"),n.qZA(),n.qZA(),n.TgZ(11,"div",3),n.TgZ(12,"select",6),n.YNc(13,d,2,2,"option",7),n.qZA(),n.TgZ(14,"label",5),n._uU(15,"Lms Course"),n.qZA(),n.qZA(),n.TgZ(16,"button",8),n._uU(17,"Add Course"),n.qZA(),n.qZA(),n.TgZ(18,"form",2),n.NdJ("ngSubmit",function(){return r.assignCbtCourse()}),n.TgZ(19,"h4"),n._uU(20,"Cbt Course"),n.qZA(),n.TgZ(21,"div",3),n._UZ(22,"input",4),n.TgZ(23,"label",5),n._uU(24,"User Id"),n.qZA(),n.qZA(),n.TgZ(25,"div",3),n.TgZ(26,"select",9),n.YNc(27,p,2,2,"option",7),n.qZA(),n.TgZ(28,"label",5),n._uU(29,"Cbt Course"),n.qZA(),n.qZA(),n.TgZ(30,"button",8),n._uU(31,"Add Course"),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.xp6(4),n.Q6J("formGroup",r.asignLmscourseForm),n.xp6(9),n.Q6J("ngForOf",r.courseList),n.xp6(3),n.Q6J("disabled",!r.asignLmscourseForm.valid),n.xp6(2),n.Q6J("formGroup",r.asignCbtcourseForm),n.xp6(9),n.Q6J("ngForOf",r.cbtCourseList),n.xp6(3),n.Q6J("disabled",!r.asignCbtcourseForm.valid))},directives:[t._Y,t.JL,t.sg,t.Fj,t.JJ,t.u,t.EJ,t.Q7,c.sg,t.YN,t.Kr],styles:[".addNewStud[_ngcontent-%COMP%]{padding:20px 100px}h2[_ngcontent-%COMP%]{font-size:40px;font-weight:700;color:#87cf35;margin-bottom:16px}h4[_ngcontent-%COMP%]{font-size:30px;font-weight:700;color:#87cf35;margin-bottom:8px}form[_ngcontent-%COMP%]{width:500px;margin-top:100px}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:valid + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:20px 10px 10px;border:none;background:rgba(77,77,77,.05)}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:transparent}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown) + label[_ngcontent-%COMP%]{transform:translate(10px,-55px);font-size:14px;transition:all .3s}form[_ngcontent-%COMP%]   .form-grp[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{transform:translate(10px,-37px);display:block;transition:all .3s;pointer-events:none;-webkit-user-select:none;user-select:none;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#87cf35;color:#fff;border-color:#87cf35;width:200px;display:block;padding:10px 0;margin:20px 0;font-size:18px;font-weight:500}form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{background:#6da928;border-color:#6da928}form[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:disabled{opacity:.8;cursor:auto}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[l.Bz.forChild(f)],l.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.ez,b,t.UX]]}),o})()}}]);