var express = require('express');
var router = express.Router();

const multer = require('multer');
const questionModel = require('../models/questions.model');
const remIdModel = require('../models/remId.model');


// Image Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        if (!file) {
            return null;
        } else {
            return cb(null, "./upload")
        }
    },
    filename: (req, file, cb) => {
        if (!file) {
            return null;
        } else {
            return cb(null, `${file.fieldname}_${Date.now()}.jpg`);
        }
    }
});
const questionImage = multer({
    storage: storage,
    limits: 10000000
});


// genrate question id
async function genQuestionId(){
    const remId = await remIdModel.findOne({remTittle : 'RemTable'});
    const id = (remId.remQuestionId + 1);

    const remIdUpdate = await remIdModel.findOneAndUpdate(
        {remTittle : 'RemTable'},
        {remQuestionId : id}
    );
    remIdUpdate.save();
    // console.log(remIdUpdate.remQuestionId);
    return (remIdUpdate.remQuestionId);
}


// GET all questions
router.get('/question-list', async function(req, res, next) {
    await questionModel.find( function(err, questionListRecord) {
        if(err) {
            res.send({status: 500, message: 'Unable to find questions'});
        }
        else {
            res.send({status: 200, result: questionListRecord});
        }
    })
});


// GET one question
router.get('/question-list/:questionId', async ( req, res ) => {
    try {
        const viewQuestion = await questionModel.findById(req.params.questionId);
        res.send(viewQuestion);
    } catch (err) {
        res.json({message : err});
    }
});


// add OBJECTIVE question
router.post('/add-objective-question',questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }

    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(8, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "1",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: file(),
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        answer: req.body.answer,
    });

    // console.log(question.questionId);

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add INTEGER question
router.post('/add-integer-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "2",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        fillBlank: req.body.fillBlank,
        answer: req.body.answer
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add MULTIPLE CHOICE question
router.post('/add-multiple-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }

    const answerArray = [];

    if(req.body.multipleAnswer1){
        answerArray.push(req.body.multipleAnswer1)
    }
    if(req.body.multipleAnswer2){
        answerArray.push(req.body.multipleAnswer2)
    }
    if(req.body.multipleAnswer3){
        answerArray.push(req.body.multipleAnswer3)
    }
    if(req.body.multipleAnswer4){
        answerArray.push(req.body.multipleAnswer4)
    }

    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "3",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        multipleAnswer: answerArray,
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add FILL BLANK question
router.post('/add-fillblank-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "4",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        answer: req.body.answer
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add PARAGRAPH question
router.post('/add-paragraph-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    const questionArray = [];

    if(req.body.passageQuestion1){
        questionArray.push(req.body.passageQuestion1)
    }
    if(req.body.passageQuestion2){
        questionArray.push(req.body.passageQuestion2)
    }
    if(req.body.passageQuestion3){
        questionArray.push(req.body.passageQuestion3)
    }
    if(req.body.passageQuestion4){
        questionArray.push(req.body.passageQuestion4)
    }

    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "5",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: true,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        passageQuestion: questionArray
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add TWO COLUMN question
router.post('/add-twocolumn-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    const col1 = [];

    if(req.body.col1op1){
        col1.push(req.body.col1op1)
    }
    if(req.body.col1op2){
        col1.push(req.body.col1op2)
    }
    if(req.body.col1op3){
        col1.push(req.body.col1op3)
    }
    if(req.body.col1op4){
        col1.push(req.body.col1op4)
    }
    if(req.body.col1op5){
        col1.push(req.body.col1op5)
    }
    
    const col2 = [];

    if(req.body.col2op1){
        col2.push(req.body.col2op1)
    }
    if(req.body.col2op2){
        col2.push(req.body.col2op2)
    }
    if(req.body.col2op3){
        col2.push(req.body.col2op3)
    }
    if(req.body.col2op4){
        col2.push(req.body.col2op4)
    }
    if(req.body.col2op5){
        col2.push(req.body.col2op5)
    }
    

    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "6",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        col1: col1,
        col2: col2,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        answer: req.body.answer
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add THREE COLUMN question
router.post('/add-threecolumn-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    const col1 = [];

    if(req.body.col1op1){
        col1.push(req.body.col1op1)
    }
    if(req.body.col1op2){
        col1.push(req.body.col1op2)
    }
    if(req.body.col1op3){
        col1.push(req.body.col1op3)
    }
    if(req.body.col1op4){
        col1.push(req.body.col1op4)
    }
    if(req.body.col1op5){
        col1.push(req.body.col1op5)
    }
    
    const col2 = [];

    if(req.body.col2op1){
        col2.push(req.body.col2op1)
    }
    if(req.body.col2op2){
        col2.push(req.body.col2op2)
    }
    if(req.body.col2op3){
        col2.push(req.body.col2op3)
    }
    if(req.body.col2op4){
        col2.push(req.body.col2op4)
    }
    if(req.body.col2op5){
        col2.push(req.body.col2op5)
    }
    
    const col3 = [];

    if(req.body.col3op1){
        col3.push(req.body.col3op1)
    }
    if(req.body.col3op2){
        col3.push(req.body.col3op2)
    }
    if(req.body.col3op3){
        col3.push(req.body.col3op3)
    }
    if(req.body.col3op4){
        col3.push(req.body.col3op4)
    }
    if(req.body.col3op5){
        col3.push(req.body.col3op5)
    }

    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "7",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        col1: col1,
        col2: col2,
        col3: col3,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        answer: req.body.answer
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add TWO COLUMN MULTI question
router.post('/add-twocolumnmulti-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    const col1 = [];

    if(req.body.col1op1){
        col1.push(req.body.col1op1)
    }
    if(req.body.col1op2){
        col1.push(req.body.col1op2)
    }
    if(req.body.col1op3){
        col1.push(req.body.col1op3)
    }
    if(req.body.col1op4){
        col1.push(req.body.col1op4)
    }
    if(req.body.col1op5){
        col1.push(req.body.col1op5)
    }
    
    const col2 = [];

    if(req.body.col2op1){
        col2.push(req.body.col2op1)
    }
    if(req.body.col2op2){
        col2.push(req.body.col2op2)
    }
    if(req.body.col2op3){
        col2.push(req.body.col2op3)
    }
    if(req.body.col2op4){
        col2.push(req.body.col2op4)
    }
    if(req.body.col2op5){
        col2.push(req.body.col2op5)
    }
    
    const answerArray = [];

    if(req.body.multipleAnswer1){
        answerArray.push(req.body.multipleAnswer1)
    }
    if(req.body.multipleAnswer2){
        answerArray.push(req.body.multipleAnswer2)
    }
    if(req.body.multipleAnswer3){
        answerArray.push(req.body.multipleAnswer3)
    }
    if(req.body.multipleAnswer4){
        answerArray.push(req.body.multipleAnswer4)
    }
    

    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "8",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        col1: col1,
        col2: col2,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        multipleAnswer: answerArray
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// add THREE COLUMN MULTI question
router.post('/add-threecolumnmulti-question', questionImage.single('questionImage'), async function( req, res, next) {
    
    // for verfiying that image exists in the request
    function file(){
       if (req.file) {
            return req.file.filename;
        } 
    }
    
    const col1 = [];

    if(req.body.col1op1){
        col1.push(req.body.col1op1)
    }
    if(req.body.col1op2){
        col1.push(req.body.col1op2)
    }
    if(req.body.col1op3){
        col1.push(req.body.col1op3)
    }
    if(req.body.col1op4){
        col1.push(req.body.col1op4)
    }
    if(req.body.col1op5){
        col1.push(req.body.col1op5)
    }
    
    const col2 = [];

    if(req.body.col2op1){
        col2.push(req.body.col2op1)
    }
    if(req.body.col2op2){
        col2.push(req.body.col2op2)
    }
    if(req.body.col2op3){
        col2.push(req.body.col2op3)
    }
    if(req.body.col2op4){
        col2.push(req.body.col2op4)
    }
    if(req.body.col2op5){
        col2.push(req.body.col2op5)
    }
    
    const col3 = [];

    if(req.body.col3op1){
        col3.push(req.body.col3op1)
    }
    if(req.body.col3op2){
        col3.push(req.body.col3op2)
    }
    if(req.body.col3op3){
        col3.push(req.body.col3op3)
    }
    if(req.body.col3op4){
        col3.push(req.body.col3op4)
    }
    if(req.body.col3op5){
        col3.push(req.body.col3op5)
    }
    
    const answerArray = [];

    if(req.body.multipleAnswer1){
        answerArray.push(req.body.multipleAnswer1)
    }
    if(req.body.multipleAnswer2){
        answerArray.push(req.body.multipleAnswer2)
    }
    if(req.body.multipleAnswer3){
        answerArray.push(req.body.multipleAnswer3)
    }
    if(req.body.multipleAnswer4){
        answerArray.push(req.body.multipleAnswer4)
    }


    // create new question
    const question = new questionModel({
        questionId: `${req.body.subjectId}${req.body.topicId}${req.body.subTopicId}${(await genQuestionId()).toString().padStart(5, '0')}`,
        questionFor: req.body.questionFor,
        questionType: "9",
        subjectId: req.body.subjectId,
        topicId: req.body.topicId,
        subTopicId: req.body.subTopicId,
        hideQuestion: false,
        status: "1",
        question: req.body.question,
        questionImage: req.file.filename,
        marks: req.body.marks,
        negMarks: req.body.negMarks,
        hint: req.body.hint,
        solution: req.body.solution,
        col1: col1,
        col2: col2,
        col3: col3,
        option1: req.body.option1,
        option2: req.body.option2,
        option3: req.body.option3,
        option4: req.body.option4,
        multipleAnswer: answerArray
    });

    question.save(function (err, quesObj) {
        if(err) {
            res.status(500).send({message: 'Unable to add question'});
        }
        else {
            res.send({status: 200, message: 'Question added successfully', questionDetails: question});
        }
    });
});


// delete question
router.delete('/delete-question/:questionId', async ( req , res ) => {
    try {
        await questionModel.findByIdAndDelete(req.params.questionId);
        res.send({status : 200, message : "Question deleted successfully"});
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;