"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[998],{5998:(m,u,s)=>{s.r(u),s.d(u,{DeleteCourseModule:()=>d});var l=s(8583),c=s(5855),e=s(639),i=s(1105);function p(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",2),e.TgZ(1,"span",3),e._uU(2),e.qZA(),e.TgZ(3,"span",4),e._uU(4),e.qZA(),e.TgZ(5,"button",5),e.NdJ("click",function(){const f=e.CHM(o).$implicit;return e.oxw().delete(f._id)}),e._uU(6,"Delete Course"),e.qZA(),e.qZA()}if(2&t){const o=n.$implicit;e.xp6(2),e.Oqu(o.cName),e.xp6(2),e.Oqu(o.cType)}}const a=[{path:"",component:(()=>{class t{constructor(o,r){this.lmsCourse=o,this.router=r}ngOnInit(){this.getAllCourses()}getAllCourses(){this.lmsCourse.getCourses().subscribe(o=>{this.courseResult=o,this.courseList=this.courseResult.result})}delete(o){1==confirm("You are about to delete this course.")?this.lmsCourse.deleteCourse(o).subscribe(g=>{this.getAllCourses()}):this.getAllCourses()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(i.u),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-delete-course"]],decls:4,vars:1,consts:[[1,"course-pallet"],["class","course",4,"ngFor","ngForOf"],[1,"course"],[1,"course-name"],[1,"course-type"],[3,"click"]],template:function(o,r){1&o&&(e.TgZ(0,"h2"),e._uU(1,"Choose a course to add Lesctures"),e.qZA(),e.TgZ(2,"div",0),e.YNc(3,p,7,2,"div",1),e.qZA()),2&o&&(e.xp6(3),e.Q6J("ngForOf",r.courseList))},directives:[l.sg],styles:["h2[_ngcontent-%COMP%]{font-size:40px;font-weight:700;color:#87cf35;margin-bottom:16px;padding:20px 0 0 100px}.course-pallet[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:left;margin:0 50px}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]{background:#f9fdf4;width:300px;margin:20px 50px;padding:20px;cursor:pointer;border-radius:6px;box-shadow:0 10px 20px #87cf3533;transition:all .3s}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]:hover{transform:translateY(-10px);box-shadow:0 10px 20px #87cf3580;transition:all .3s}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-name[_ngcontent-%COMP%], .course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-type[_ngcontent-%COMP%]{display:inline-block;font-size:30px;font-weight:700;color:#87cf35;margin-bottom:8px;width:50%}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-type[_ngcontent-%COMP%]{color:#878787}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#ff7878;color:#fff;font-weight:500;font-size:20px;display:block;width:100%;margin:auto;padding:10px 20px;border:none;border-radius:6px;box-shadow:0 10px 10px #ff78784d}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-subject[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.course-pallet[_ngcontent-%COMP%]   .course[_ngcontent-%COMP%]   .course-subject[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:500;font-size:20px}"]}),t})()}];let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(a)],c.Bz]}),t})(),d=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[l.ez,C]]}),t})()}}]);