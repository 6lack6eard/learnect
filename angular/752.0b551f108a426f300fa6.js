"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[752],{5752:(Q,p,s)=>{s.r(p),s.d(p,{AddTestQuestionModule:()=>P});var g=s(8583),c=s(5855),n=s(639),_=s(9472);let d=(()=>{class e{constructor(t){this.gs=t}ngOnChanges(t){t.content&&this.renderMath()}ngOnInit(){this.loadMathConfig(),this.renderMath()}renderMath(){this.mathJaxObject=this.gs.nativeGlobal().MathJax;let t=this;setTimeout(()=>{t.mathJaxObject.Hub.Queue(["Typeset",t.mathJaxObject.Hub],"mathContent")},1e3)}loadMathConfig(){this.mathJaxObject=this.gs.nativeGlobal().MathJax,this.mathJaxObject.Hub.Config({showMathMenu:!1,tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]},menuSettings:{zoom:"Double-Click",zscale:"150%"},CommonHTML:{linebreaks:{automatic:!0}},"HTML-CSS":{linebreaks:{automatic:!0}},SVG:{linebreaks:{automatic:!0}}})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(_.U))},e.\u0275cmp=n.Xpm({type:e,selectors:[["mathjax"]],inputs:{content:"content"},features:[n.TTD],decls:1,vars:1,consts:[["id","mathContent",3,"innerHTML"]],template:function(t,i){1&t&&n._UZ(0,"span",0),2&t&&n.Q6J("innerHTML",i.content,n.oJD)},styles:[""]}),e})();var r=s(1688),l=s(5582);function q(e,o){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&e){const t=o.$implicit;n.xp6(1),n.hij(" ",t," ")}}function Z(e,o){if(1&e&&(n.TgZ(0,"div",17),n.TgZ(1,"strong"),n._uU(2,"Question List"),n.qZA(),n.YNc(3,q,2,1,"span",18),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(3),n.Q6J("ngForOf",t.passageQuestion)}}function C(e,o){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const t=o.$implicit;n.xp6(1),n.hij(" ",t," ")}}function T(e,o){if(1&e&&(n.TgZ(0,"div",19),n.TgZ(1,"span"),n._uU(2,"Column 1"),n.qZA(),n.YNc(3,C,2,1,"div",18),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(3),n.Q6J("ngForOf",t.col1)}}function m(e,o){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const t=o.$implicit;n.xp6(1),n.hij(" ",t," ")}}function M(e,o){if(1&e&&(n.TgZ(0,"div",19),n.TgZ(1,"span"),n._uU(2,"Column 2"),n.qZA(),n.YNc(3,m,2,1,"div",18),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(3),n.Q6J("ngForOf",t.col2)}}function O(e,o){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const t=o.$implicit;n.xp6(1),n.hij(" ",t," ")}}function f(e,o){if(1&e&&(n.TgZ(0,"div",19),n.TgZ(1,"span"),n._uU(2,"Column 3"),n.qZA(),n.YNc(3,O,2,1,"div",18),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(3),n.Q6J("ngForOf",t.col3)}}function A(e,o){if(1&e&&(n.TgZ(0,"div",12),n.TgZ(1,"span"),n._uU(2),n.qZA(),n.TgZ(3,"span"),n._uU(4),n.qZA(),n.TgZ(5,"span"),n._uU(6),n.qZA(),n.TgZ(7,"span"),n._uU(8),n.qZA(),n.qZA()),2&e){const t=n.oxw().$implicit;n.xp6(2),n.hij("Answer 1 : ",t.multipleAnswer[0],""),n.xp6(2),n.hij("Answer 2 : ",t.multipleAnswer[1],""),n.xp6(2),n.hij("Answer 3 : ",t.multipleAnswer[2],""),n.xp6(2),n.hij("Answer 4 : ",t.multipleAnswer[3],"")}}function x(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"div",3),n.TgZ(1,"div",4),n.TgZ(2,"span"),n._uU(3,"Question Id : "),n.TgZ(4,"strong"),n._uU(5),n.qZA(),n.qZA(),n.TgZ(6,"span"),n._uU(7,"Stream : "),n.TgZ(8,"strong"),n._uU(9),n.qZA(),n.qZA(),n.TgZ(10,"span"),n._uU(11,"Type : "),n.TgZ(12,"strong"),n._uU(13),n.qZA(),n.qZA(),n.TgZ(14,"span"),n._uU(15,"Subject : "),n.TgZ(16,"strong"),n._uU(17),n.qZA(),n.qZA(),n.TgZ(18,"span"),n._uU(19,"Topic : "),n.TgZ(20,"strong"),n._uU(21),n.qZA(),n.qZA(),n.TgZ(22,"span"),n._uU(23,"Sub Topic : "),n.TgZ(24,"strong"),n._uU(25),n.qZA(),n.qZA(),n.qZA(),n.TgZ(26,"div",5),n.TgZ(27,"div",6),n.TgZ(28,"span"),n._uU(29,"Maximum Marks : "),n.TgZ(30,"strong"),n._uU(31),n.qZA(),n.qZA(),n.TgZ(32,"span"),n._uU(33,"Negative Marks : "),n.TgZ(34,"strong"),n._uU(35),n.qZA(),n.qZA(),n.qZA(),n.TgZ(36,"div",7),n.TgZ(37,"span"),n._uU(38,"Question : "),n.qZA(),n._UZ(39,"mathjax",8),n.qZA(),n._uU(40),n.YNc(41,Z,4,1,"div",9),n.TgZ(42,"div",10),n.YNc(43,T,4,1,"div",11),n.YNc(44,M,4,1,"div",11),n.YNc(45,f,4,1,"div",11),n.qZA(),n.TgZ(46,"div",12),n.TgZ(47,"span"),n._uU(48),n.qZA(),n.TgZ(49,"span"),n._uU(50),n.qZA(),n.TgZ(51,"span"),n._uU(52),n.qZA(),n.TgZ(53,"span"),n._uU(54),n.qZA(),n.qZA(),n.TgZ(55,"div",13),n.TgZ(56,"span"),n._uU(57,"Answer : "),n.qZA(),n._uU(58),n.qZA(),n.YNc(59,A,9,4,"div",14),n.TgZ(60,"div",13),n.TgZ(61,"span"),n._uU(62,"Hint : "),n.qZA(),n._uU(63),n.qZA(),n.TgZ(64,"div",13),n.TgZ(65,"span"),n._uU(66,"Solution : "),n.qZA(),n._uU(67),n.qZA(),n.qZA(),n.TgZ(68,"div",15),n.TgZ(69,"span"),n._uU(70,"Question Status : "),n.TgZ(71,"strong"),n._uU(72),n.qZA(),n.qZA(),n.TgZ(73,"span"),n._uU(74,"Question Creation Date : "),n.TgZ(75,"strong"),n._uU(76),n.qZA(),n.qZA(),n.TgZ(77,"button",16),n.NdJ("click",function(){const a=n.CHM(t).$implicit;return n.oxw().insertQuestion(a._id)}),n._uU(78,"Add Question"),n.qZA(),n.qZA(),n.qZA()}if(2&e){const t=o.$implicit;n.xp6(5),n.Oqu(t.questionId),n.xp6(4),n.Oqu(t.questionFor),n.xp6(4),n.Oqu(t.questionType),n.xp6(4),n.Oqu(t.subjectId),n.xp6(4),n.Oqu(t.topicId),n.xp6(4),n.Oqu(t.subTopicId),n.xp6(6),n.Oqu(t.marks),n.xp6(4),n.Oqu(t.negMarks),n.xp6(4),n.Q6J("content",t.question),n.xp6(1),n.hij(" ",t.questionImage," "),n.xp6(1),n.Q6J("ngIf",""!=t.passageQuestion),n.xp6(2),n.Q6J("ngIf",""!=t.col1),n.xp6(1),n.Q6J("ngIf",""!=t.col2),n.xp6(1),n.Q6J("ngIf",""!=t.col3),n.xp6(3),n.hij("Option 1 : ",t.option1,""),n.xp6(2),n.hij("Option 2 : ",t.option2,""),n.xp6(2),n.hij("Option 3 : ",t.option3,""),n.xp6(2),n.hij("Option 4 : ",t.option4,""),n.xp6(4),n.hij("",t.answer," "),n.xp6(1),n.Q6J("ngIf",""!=t.multipleAnswer),n.xp6(4),n.hij("",t.hint," "),n.xp6(4),n.hij("",t.solution," "),n.xp6(5),n.Oqu(t.status),n.xp6(4),n.Oqu(t.createdDate)}}const h=[{path:"",component:(()=>{class e{constructor(t,i,u,a){this.questionService=t,this.testService=i,this.activatedRoute=u,this.router=a,this.name="Mathjax "}ngOnInit(){this.getQuestionList(),this.testId=this.activatedRoute.snapshot.paramMap.get("testId")}getQuestionList(){this.questionService.allQuestions().subscribe(t=>{this.questionResult=t,this.questionList=this.questionResult.result})}insertQuestion(t){this.testService.insertQuestionId(this.testId,t).subscribe(i=>{alert("Question added")})}proceed(){this.router.navigate([`testAdmin/previewTest/${this.testId}`])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.a),n.Y36(l.q),n.Y36(c.gz),n.Y36(c.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-add-test-question"]],viewQuery:function(t,i){if(1&t&&n.Gf(d,5),2&t){let u;n.iGM(u=n.CRH())&&(i.childView=u.first)}},decls:6,vars:1,consts:[[1,"question-page"],["class","question",4,"ngFor","ngForOf"],[1,"proceed",3,"click"],[1,"question"],[1,"question-header"],[1,"question-body"],[1,"marking"],[1,"ques"],[3,"content"],["class","para-ques",4,"ngIf"],[1,"row","column"],["class","col-lg-4",4,"ngIf"],[1,"options"],[1,"ans"],["class","options",4,"ngIf"],[1,"question-footer"],[3,"click"],[1,"para-ques"],[4,"ngFor","ngForOf"],[1,"col-lg-4"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0),n.TgZ(1,"h2"),n._uU(2,"Add Questions to Test"),n.qZA(),n.YNc(3,x,79,24,"div",1),n.TgZ(4,"button",2),n.NdJ("click",function(){return i.proceed()}),n._uU(5,"Preview Test"),n.qZA(),n.qZA()),2&t&&(n.xp6(3),n.Q6J("ngForOf",i.questionList))},directives:[g.sg,d,g.O5],styles:[".question-page[_ngcontent-%COMP%]{margin:50px}.question-page[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:40px;font-weight:700;color:#87cf35;margin-bottom:16px}.question-page[_ngcontent-%COMP%]   .proceed[_ngcontent-%COMP%]{background:#87cf35;color:#fff;font-size:20px;font-weight:500;border:none;padding:10px 20px}.question[_ngcontent-%COMP%]{margin:10px 0 50px;padding:50px;background:#f9fdf4;box-shadow:0 10px 10px #e1f5c9;border-radius:20px}.question[_ngcontent-%COMP%]   .question-header[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]   .question-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.question[_ngcontent-%COMP%]   .question-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]   .question-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:#87cf35}.question[_ngcontent-%COMP%]   .question-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]   .question-footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#878787}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]{margin:20px 0}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .ques[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-top:20px}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .ques[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .ans[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;color:#87cf35}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .para-ques[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-between}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .para-ques[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#87cf35}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .marking[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .marking[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:20px;color:#87cf35}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .marking[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#878787}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]{margin:20px 0}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   .col-lg-4[_ngcontent-%COMP%]{padding:0}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:#87cf35}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{font-size:20px;font-weight:500;color:#878787}.question[_ngcontent-%COMP%]   .question-body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:20px;font-weight:500}"]}),e})()}];let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.Bz.forChild(h)],c.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[g.ez,v]]}),e})()}}]);