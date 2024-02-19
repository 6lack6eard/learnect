var express = require('express');
var router = express.Router();
// var db = require('../dbConfig');

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');

const userModel = require('../models/users.model');
const remIdModel = require('../models/remId.model');
const cbtCourseModel = require('../models/cbtCourse.model');
const testModel = require('../models/tests.model');
const questionModel = require('../models/questions.model');
const resultModel = require('../models/result.model');
const resultStatModel = require('../models/resultStat.model');

router.get('/test', async (req, res) => {
  result = await db.funcselect('select * from user;');
  console.log(result);
  /* db.query('select * from user;', (err, result) => {
    if(err) throw err;

    // result = db.fetch(result);
    res.status(200).send({result : result});
  }); */
});

/* ========== STUDENT PART =========== */

/* LOGIN user */
router.post('/login', async (req, res) => {

  // checking mail exist in db
  const user = await userModel.findOne({ email: req.body.email });
  if(!user) return res.status(400).send("Email is wrong");

  // checking password
  const validPass = (req.body.pass === user.pass);
  if(!validPass) return res.status(400).send("Invalid Password");

  // checking authorized role account
  const authorizedRole = (user.role === "student");
  if(!authorizedRole) return res.status(400).send("Only accessible to students");

  // checking deactivated account
  const deactivatedAcc = (user.status === "0");
  if(deactivatedAcc) return res.status(400).send("Your account is deactivated. Kindly contact authorities.");

  // checking activated account
  const activatedAcc = (user.status === "1");
  if(!activatedAcc) return res.status(400).send("Some error occured");

  // update last login

    // user.lastLogin = new Date();
    // console.log(user.lastLogin);

  // token generation
  const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({token: token, result: user});
});


/* GET user profile */
router.get('/profile/:studentId', verify, async (req, res) => {
  try {
    const viewProfile = await userModel.findById(req.params.studentId);
    res.json(viewProfile);
  } catch (err) {
    res.json({message : err});
  }
});


/* Edit user profile */
router.put('/edit-profile/:studentId', verify, async (req, res) => {

  // check if the provided email already exists
  const user = await userModel.findOne({ email: req.body.email });
  if(user) return res.status(400).send("Email already exists");
 
  try {
    let editedProfile;

    if (typeof req.body.email !== 'undefined' && req.body.email.length !== 0) {  
      this.editedProfile = await userModel.findOneAndUpdate(
        { _id : req.params.studentId },
        { email : req.body.email }
      );
    }

    if (typeof req.body.mobile !== 'undefined' && req.body.mobile.length !== 0) {            
      this.editedProfile = await userModel.findOneAndUpdate(
        { _id : req.params.studentId },
        { mobile : req.body.mobile }
      );
    }

    if (typeof req.body.address !== 'undefined' && req.body.address.length !== 0) {            
      this.editedProfile = await userModel.findOneAndUpdate(
        { _id : req.params.studentId },
        { address : req.body.address }
      );
    }

    if (typeof req.body.school !== 'undefined' && req.body.school.length !== 0) {            
      this.editedProfile = await userModel.findOneAndUpdate(
        { _id : req.params.studentId },
        { school : req.body.school }
      );
    }

    res.status(200).save(editedProfile);
  } 
  catch (err) {
    res.json({message : err});
  }
});


/* Update password */
router.put('/profile/:studentId/updatePassword', verify, async (req, res) => {
  try {
    const userProfile = await userModel.findByIdAndUpdate(
      {_id : req.params.studentId},
      {pass: req.body.pass});
    res.save(userProfile);
  } catch (err) {
    res.json({message : err});
  }
});


/* Get tests of cbt Course */
router.get('/get-cbt-course/:studentId/:cName', verify, async (req, res) => {
  try {
    const user = await userModel.findById(req.params.studentId);
    if(user.cbtCourse.includes(req.params.cName)){
      const test = await testModel.find({courseName : req.params.cName});
      res.send({status : 200, result : test});      
    }
    else{
      res.send({status : 400, message : "Course is not assigned to you"});
    }
  }
  catch(err){
    res.send({status : 400, message : "Something went wrong"});    
  }  
});


/* Get test details from id */
router.get('/get-test/:testId', verify, async (req, res) => {
  try {
    const test = await testModel.findById(req.params.testId);
    res.send({status : 200, result : test});
    
  } catch (err) {
    res.send({status : 400, message : 'Something went wrong'});
  }
});


/* get result */
router.get('/get-result/:studentId', verify, async (req, res) => {
  try {
    const result = await resultModel.find({userId : req.params.studentId});

    res.status(200).send({result : result});
    
  } catch (error) {
    res.status(400).send({message : 'Something went wrong'});
  }
});


/* get a result */
router.get('/get-result/:studentId/:testId', verify, async (req, res) => {
  try {
    const result = await resultModel.findOne({testId : req.params.testId, userId : req.params.studentId});

    res.status(200).send({result : result});
    
  } catch (error) {
    res.status(400).send({message : 'Something went wrong'});
  }
});


/* get toper result */
router.get('/get-topper-result/:testId', async (req, res) => {
  try {

    var topperResult;
    const resultList = await resultModel.find({testId : req.params.testId});
    
    if(resultList.length > 1){      
      for (let i = 0; i < (resultList.length - 1); i++) {
        if((resultList[i].obtainedMarks) < (resultList[i+1].obtainedMarks)) {
          console.log("here");
          topperResult = resultList[i+1];
        }
      }
    }
    else{
      topperResult = resultList[0];
    }

    // console.log(topperResult);
    res.status(200).send({result : topperResult});
    
  } catch (error) {
    res.status(400).send({message : 'Something went wrong'});
  }
});


/* get subject vise result */
router.get('/get-subject-result/:studentId/:testId/:resultId', async (req, res) => {
  try {

    var physicsCorrectQuestion = 0;
    var physicsCorrectMark = 0;
    var physicsIncorrectQuestion = 0;
    var physicsIncorrectMark = 0;
    var physicsUnattemptedQuestion = 0;
    var physicsUnattemptedMark = 0;

    var chemistryCorrectQuestion = 0;
    var chemistryCorrectMark = 0;
    var chemistryIncorrectQuestion = 0;
    var chemistryIncorrectMark = 0;
    var chemistryUnattemptedQuestion = 0;
    var chemistryUnattemptedMark = 0;

    var mathCorrectQuestion = 0;
    var mathCorrectMark = 0;
    var mathIncorrectQuestion = 0;
    var mathIncorrectMark = 0;
    var mathUnattemptedQuestion = 0;
    var mathUnattemptedMark = 0;
    
    var biologyCorrectQuestion = 0;
    var biologyCorrectMark = 0;
    var biologyIncorrectQuestion = 0;
    var biologyIncorrectMark = 0;
    var biologyUnattemptedQuestion = 0;
    var biologyUnattemptedMark = 0;

    const test =  await  testModel.findOne({
      _id : req.params.testId
    });

    function subjectFinder() {
      if(test.type == "JEE") {
        return ["Physics", "Chemistry", "Math"];
      }
      else if (test.type == "NEET") {
        return ["Physics", "Chemistry", "Biology"];
      }
    }
    
    for (let i = 0; i < test.questionList.length; i++) {
      
      var question = await questionModel.findOne({
        _id : test.questionList[i]
      });

      var resultStat = await resultStatModel.findOne({
        testId : req.params.testId,
        userId : req.params.studentId,
        resultId : req.params.resultId,
        questionId : test.questionList[i],
      });

      // for physics
      if(question.subjectId === "P"){
        if(!resultStat) {
          physicsUnattemptedQuestion ++;
          physicsUnattemptedMark = physicsUnattemptedMark + Number(question.marks);
        }
        else if(resultStat.marks != 0 && resultStat.negMarks == 0) {
          physicsCorrectQuestion ++;
          physicsCorrectMark = physicsCorrectMark + Number(resultStat.marks);
        } 
        else if(resultStat.marks == 0 && resultStat.negMarks != 0) { 
          physicsIncorrectQuestion ++;
          physicsIncorrectMark = physicsIncorrectMark + Number(resultStat.negMarks);
        }
        else if(resultStat.marks == 0 && resultStat.negMarks == 0) { 
          physicsUnattemptedQuestion ++;
          physicsUnattemptedMark = physicsUnattemptedMark + Number(question.marks);
        }
      }
      
      // for chemistry
      else if(question.subjectId === "C"){
        if(!resultStat) {
          chemistryUnattemptedQuestion ++;
          chemistryUnattemptedMark = chemistryUnattemptedMark + Number(question.marks);
        }
        else if(resultStat.marks != 0 && resultStat.negMarks == 0) {
          chemistryCorrectQuestion ++;
          chemistryCorrectMark = chemistryCorrectMark + Number(resultStat.marks);
        } 
        else if(resultStat.marks == 0 && resultStat.negMarks != 0) { 
          chemistryIncorrectQuestion ++;
          chemistryIncorrectMark = chemistryIncorrectMark + Number(resultStat.negMarks);
        }
        else if(resultStat.marks == 0 && resultStat.negMarks == 0) { 
          chemistryUnattemptedQuestion ++;
          chemistryUnattemptedMark = chemistryUnattemptedMark + Number(question.marks);
        }
      }

      // for math
      else if(question.subjectId === "M"){
        if(!resultStat) {
          mathUnattemptedQuestion ++;
          mathUnattemptedMark = mathUnattemptedMark + Number(question.marks);
        }
        else if(resultStat.marks != 0 && resultStat.negMarks == 0) {
          mathCorrectQuestion ++;
          mathCorrectMark = mathCorrectMark + Number(resultStat.marks);
        } 
        else if(resultStat.marks == 0 && resultStat.negMarks != 0) { 
          mathIncorrectQuestion ++;
          mathIncorrectMark = mathIncorrectMark + Number(resultStat.negMarks);
        }
        else if(resultStat.marks == 0 && resultStat.negMarks == 0) { 
          mathUnattemptedQuestion ++;
          mathUnattemptedMark = mathUnattemptedMark + Number(question.marks);
        }
      }

      // for biology
      else if(question.subjectId === "B"){
        if(!resultStat) {
          biologyUnattemptedQuestion ++;
          biologyUnattemptedMark = biologyUnattemptedMark + Number(question.marks);
        }
        else if(resultStat.marks != 0 && resultStat.negMarks == 0) {
          biologyCorrectQuestion ++;
          biologyCorrectMark = biologyCorrectMark + Number(resultStat.marks);
        } 
        else if(resultStat.marks == 0 && resultStat.negMarks != 0) { 
          biologyIncorrectQuestion ++;
          biologyIncorrectMark = biologyIncorrectMark + Number(resultStat.negMarks);
        }
        else if(resultStat.marks == 0 && resultStat.negMarks == 0) { 
          biologyUnattemptedQuestion ++;
          biologyUnattemptedMark = biologyUnattemptedMark + Number(question.marks);
        }
      }
    }

    res.status(200).json({
      subject : subjectFinder(),
      
      physicsCorrectQuestion : physicsCorrectQuestion ,
      physicsCorrectMark : physicsCorrectMark ,
      physicsIncorrectQuestion : physicsIncorrectQuestion ,
      physicsIncorrectMark : physicsIncorrectMark ,
      physicsUnattemptedQuestion : physicsUnattemptedQuestion ,
      physicsUnattemptedMark : physicsUnattemptedMark ,

      chemistryCorrectQuestion : chemistryCorrectQuestion ,
      chemistryCorrectMark : chemistryCorrectMark ,
      chemistryIncorrectQuestion : chemistryIncorrectQuestion ,
      chemistryIncorrectMark : chemistryIncorrectMark ,
      chemistryUnattemptedQuestion : chemistryUnattemptedQuestion ,
      chemistryUnattemptedMark : chemistryUnattemptedMark ,

      mathCorrectQuestion : mathCorrectQuestion ,
      mathCorrectMark : mathCorrectMark ,
      mathIncorrectQuestion : mathIncorrectQuestion ,
      mathIncorrectMark : mathIncorrectMark ,
      mathUnattemptedQuestion : mathUnattemptedQuestion ,
      mathUnattemptedMark : mathUnattemptedMark ,
      
      biologyCorrectQuestion : biologyCorrectQuestion ,
      biologyCorrectMark : biologyCorrectMark ,
      biologyIncorrectQuestion : biologyIncorrectQuestion ,
      biologyIncorrectMark : biologyIncorrectMark ,
      biologyUnattemptedQuestion : biologyUnattemptedQuestion ,
      biologyUnattemptedMark : biologyUnattemptedMark
    });

  } catch (error) {
    res.status(400).send({message : 'Something went wrong'});
  }
});


/* get question details and answer based on question id */
router.get('/get-question-result/:studentId/:testId/:resultId/:questionId', verify, async (req, res) => {

  try {
    const question = await questionModel.findOne({
      _id : req.params.questionId
    });
    const resultStat = await resultStatModel.findOne({
      userId : req.params.studentId,
      testId : req.params.testId,
      resultId : req.params.resultId,
      questionId : req.params.questionId,
    });

    function yourMarks(){
      if(resultStat.marks == 0 && (resultStat.negMarks != 0 || resultStat.negMarks == 0)){
        return resultStat.negMarks;
      }
      else if(resultStat.marks != 0 && resultStat.negMarks == 0){
        return resultStat.marks;
      }
    }

    if(!resultStat){
      res.status(200).json({
        question : question.question,
        correctAnswer : question.answer,
        yourAnswer : '-',
        maxMarks : question.marks,
        yourMarks : '-',
        solution : question.solution
      });
    }
    else{
      res.status(200).json({
        question : question.question,
        correctAnswer : question.answer,
        yourAnswer : resultStat.answer,
        maxMarks : question.marks,
        yourMarks : yourMarks(),
        solution : question.solution
      });
    }
    
  } catch (error) {
    res.status(400).send({message : 'Something went wrong'});
  }

})


/* get test top 10 results */
router.get('/get-top-ten-result/:testId', async (req, res) => {
  try {

    const result = await resultModel.find({
      testId : req.params.testId
    }).sort({
      percentage : -1
    }).limit(10);

    res.status(200).send({result : result});
    
  } catch (error) {
    res.status(400).send({message : 'Something went wrong'});
  }
})






/* ========== STUDENT PART END =========== */


/* ========== ADMIN PART =========== */

/* ADMIN-LOGIN */
router.post('/admin-login', async (req, res) => {

  // checking mail exist in db
  const admin = await userModel.findOne({ email: req.body.email });
  if(!admin) return res.status(400).send("Email is wrong");

  // checking password
  const validPass = (req.body.pass === admin.pass);
  if(!validPass) return res.status(400).send("Invalid Password");

  // checking role
  const validRole = (admin.role === "admin");
  if(!validRole) return res.status(400).send("User not authorized");

  // token generation
  const token = jwt.sign({_id: admin._id, role: admin.role}, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send({token: token});
});


/* ADD NEW STUDENT */
router.post('/addNewStudent', async function(req, res, next) {

  // check if mobile already exists
  const mobileExist = await userModel.findOne({
    mobile : req.body.mobile
  });
  if(mobileExist) return res.status(400).send("Mobile no. is already registered");

  // check if email is already registered
  const emailExist = await userModel.findOne({
    email: req.body.email
  });
  if(emailExist) return res.status(400).send("Email is already already registered");

  let c_name = req.body.name;
  let c_mobile = req.body.mobile;
  let c_email = req.body.email;
  let c_class = req.body.class;
  let c_center = req.body.center;
  let c_stream = req.body.stream;
  let c_session = req.body.session;
  let c_school = req.body.school;
  let c_address = req.body.address;
  
  // gen center
  function centerGen(c_center){
    let g_center;
    
    if(c_center === "Hazratganj"){
      g_center = "HZ";
    }
    else if(c_center === "Aliganj"){
      g_center = "AL";
    }
    else if(c_center === "Gomti Nagar"){
      g_center = "GM";
    }
    else if(c_center === "Indira Nagar"){
      g_center = "IN";
    }

    return g_center;
  }

  // gen session
  function sessionGen(c_session){
    let g_session;
    
    if(c_session === "2020-21"){
      g_session = "20";
    }
    else if(c_session === "2021-22"){
      g_session = "21";
    }
    else if(c_session === "2022-23"){
      g_session = "22";
    }
    else if(c_session === "2023-24"){
      g_session = "23";
    }
    else if(c_session === "2024-25"){
      g_session = "24";
    }
    else if(c_session === "2025-26"){
      g_session = "25";
    }

    return g_session;
  }

  // gen stream
  function streamGen(c_stream){
    let g_stream;
    
    if(c_stream === "JEE"){
      g_stream = "JE";
    }
    else if(c_stream === "NEET"){
      g_stream = "NT";
    }

    return g_stream;
  }

  let g_center = centerGen(c_center);
  let g_session = sessionGen(c_session);
  let g_stream = streamGen(c_stream);

  // gen userid
  function genrate_id(g_center, c_class, g_session, g_stream, srno){
    let genId = `GR${g_center}${c_class}${g_session}${g_stream}${srno}`;

    return genId;
  } 

  // incrementing student id
  const remId = await remIdModel.findOne({remTittle : 'RemTable'});
  const id = (remId.remStudentId + 1);
  const remIdUpdate = await remIdModel.findOneAndUpdate(
      {remTittle : 'RemTable'},
      {remStudentId : id}
  );
  remIdUpdate.save();

  let srno = (remIdUpdate.remStudentId).toString().padStart(6, '0');

  
  // create new user
  const user = new userModel({
    userId: genrate_id(g_center, c_class, g_session, g_stream, srno),
    name: req.body.name,
    mobile: req.body.mobile,
    email: req.body.email,
    class: req.body.class,
    center: req.body.center,
    stream: req.body.stream,
    session: req.body.session,
    school: req.body.sch,
    address: req.body.add,
    pass: "gravity000",
    status: "1",
    role: "student"
  });

  user.save(function(err, userObj){
    if(err){
      res.send({status: 500, message: 'Unable to ADD user'});
    }
    else{
      res.send({status: 200, message: 'User added successfully', userDetails: user});
    }

  });
});


/* UPDATE STUDENT */
router.put('/updateStudent', async (req, res)=>{
  
});


/* DEACTIVATE STUDENT */
router.put('/deactivateStudent', async (req, res)=>{
  try {
    const user = await userModel.findOneAndUpdate(
      {userId: req.body.userId},
      {status: "0"}
    )
    res.save(user);

  } catch (err) {
    res.send({message: "Something went wrong"})
  }
});


/* ACTIVATE STUDENT */
router.put('/activateStudent', async (req, res)=>{
  try {
    const user = await userModel.findOneAndUpdate(
      {userId: req.body.userId},
      {status: "1"}
    )
    res.save(user);

  } catch (err) {
    res.send({message: "Something went wrong"})
  }
});


/* PASSWORD RESET */
router.put('/restPassword', async (req, res)=>{
  try {
    const user = await userModel.findOneAndUpdate(
      {userId: req.body.userId},
      {pass: "gravity000"}
    )
    res.save(user);

  } catch (err) {
    res.send({message: "Something went wrong"})
  }
});


/* ASIGN LMS COURSE */
router.put('/asignLmscourse', async (req, res)=>{
  try {
    const user = await userModel.findOneAndUpdate(
      {userId: req.body.userId},
      {$addToSet: {lmsCourse: req.body.lmsCourse}}
    )
    res.save(user);

  } catch (err) {
    res.send({message: "Something went wrong"})
  }
});


/* ASIGN CBT COURSE */
router.put('/asignCbtcourse', async (req, res)=>{
  try {
    const user = await userModel.findOneAndUpdate(
      {userId: req.body.userId},
      {$addToSet: {cbtCourse: req.body.cbtCourse}}
    )
    user.save(function(err, userObj) {
      if(err) {
        res.send({status : 400, message : 'Course not assigned'});
      }
      else{
        res.send({status : 400, message : 'Course assigned successfully'});
      }
    });

  } catch (err) {
    res.send({status : 400, message: "Something went wrong"})
  }
});

/* ========== ADMIN PART END =========== */


module.exports = router;