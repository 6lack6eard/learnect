var express = require('express');
var router = express.Router();

const userModel = require('../models/users.model');
const questionModel = require('../models/questions.model');
const testModel = require('../models/tests.model');
const resultModel = require('../models/result.model');
const resultStatModel = require('../models/resultStat.model');
const remIdModel = require('../models/remId.model');


// create result
router.post('/create-result', async (req, res) => {
    try {
        // check if result already exists
        const resultAlreadyAvailable = await resultModel.findOne({
            userId : req.body.userId,
            testId : req.body.testId
        });
        if(resultAlreadyAvailable) {
            return res.status(200).send({message : 'Result already exist', result : resultAlreadyAvailable});
        }

        // check if test exists
        const test = await testModel.findOne({_id : req.body.testId});
        if(!test) {
            return res.status(400).send({message : 'Couldn\'t find test'});
        }

        // start time
        function getTime(){
            var currentTime = new Date();
            var localTime = (currentTime.getTime() - (currentTime.getTimezoneOffset() * 60000));
            return localTime;
        }

        // end time
        function getEndTime(){
            var currentTime = new Date();
            var localTime = (currentTime.getTime() - ((currentTime.getTimezoneOffset() * 60000) - ((1000 * 60) * test.time)));
            return localTime;
        }

        // update testid
        const remId = await remIdModel.findOne({remTittle : 'RemTable'});
        const id = (remId.remResultId + 1);
        const remIdUpdate = await remIdModel.findOneAndUpdate(
            {remTittle : 'RemTable'},
            {remResultId : id}
        );
        remIdUpdate.save();

        let resultId = (remIdUpdate.remResultId).toString().padStart(6, '0');
        
        const result = new resultModel({
            resultId : `R${resultId}`,
            userId : req.body.userId,
            testId : req.body.testId,
            updatedTime : test.time,

            startTime : getTime(),
            endTime : getEndTime()
        });

        

        result.save(function(error){
            if (error) {
                res.status(400).send({message : 'Unable to store result'});
            } else {
                res.status(200).send({message : 'Result created successfully', result : result});
            }
        })

    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})


// get result
router.put('/get-result', async (req, res) => {
   
    try {
        const result = await resultModel.findOne({
            userId : req.body.userId,
            testId : req.body.testId
        });
        res.status(200).send({result : result});

    } catch (error) {
        res.status(400).send({message : 'Something went wrong'})
    }
})


// pause timer
router.put('/pause-time', async (req, res) => {
    try {

        // start time
        function getTime(){
            var currentTime = new Date();
            var localTime = (currentTime.getTime() - (currentTime.getTimezoneOffset() * 60000));
            return localTime;
        }

        const result = await resultModel.findOne({
            userId : req.body.userId,
            testId : req.body.testId
        });

        if (result.pauseTime === 0 || !result.pauseTime) {
            result.pauseTime = getTime();
            console.log(result.pauseTime);            
        }
    

        result.save(function(error){
            if(error) {
                res.status(400).send({message : 'Unable to save'});
            }
            else{
                res.status(200).send({message : 'Result pause time updated'});
            }
        });
        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})


// resume timer
router.put('/resume-time', async (req, res) => {
    try {

        // start time
        function getTime(){
            var currentTime = new Date();
            var localTime = (currentTime.getTime() - (currentTime.getTimezoneOffset() * 60000));
            return localTime;
        }

        const result = await resultModel.findOne({
            userId : req.body.userId,
            testId : req.body.testId
        });

        console.log("resumed" + result.endTime);
        
        var pauseTime = result.pauseTime;
        var adjustTime = (getTime() - pauseTime);

        result.endTime = result.endTime + adjustTime;
        result.pauseTime = 0;
        result.save(function(error){
            if(error) {
                res.status(400).send({message : 'Unable to save'});
            }
            else{
                res.status(200).send({message : 'Result pause time updated'});
            }
        });
        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})


// create result stats
router.post('/create-result-stat', async (req, res) => {
    try {

        const resultStatAlreadyExist = await resultStatModel.findOne({
            resultId: req.body.resultId,
            userId: req.body.userId,
            testId: req.body.testId,
            questionId: req.body.questionId
        });

        if(resultStatAlreadyExist){
            resultStatAlreadyExist.answer = req.body.answer;

            resultStatAlreadyExist.save(function(error){
                if(error) {
                    res.status(400).send({message : 'Result Stat is not updated'})
                }
                else {
                    res.status(200).send({message: 'Result Stat updated successfully', result : resultStatAlreadyExist});
                }
            })
        }
        else{            
            const resultStat = new resultStatModel({
                resultId: req.body.resultId,
                userId: req.body.userId,
                testId: req.body.testId,
                questionId: req.body.questionId,
                
                answer: req.body.answer
            });
            
            resultStat.save(function(error){
                if(error) {
                    res.status(400).send({message : 'Result Stat is not saved'})
                }
                else {
                    res.status(200).send({message: 'Result Stat created successfully', result : resultStat});
                }
            })
        }
        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})


// get result stats
router.put('/get-result-stat', async (req, res) => {
    try {

        const resultStat = await resultStatModel.findOne({
            resultId: req.body.resultId,
            userId: req.body.userId,
            testId: req.body.testId,
            questionId: req.body.questionId
        });

        res.status(200).send({result : resultStat});
        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})


// clear response
router.put('/clear-answer-result-stat', async (req, res) => {
    try {

        const resultStat = await resultStatModel.findOne({
            resultId: req.body.resultId,
            userId: req.body.userId,
            testId: req.body.testId,
            questionId: req.body.questionId
        });

        resultStat.answer = null;

        resultStat.save(function(error) {
            if(error) {
                res.status(400).send({message : 'Unable to clear result stat response'});
            }
            else {
                res.status(200).send({message : 'Result Stat response cleared successfully', result : resultStat})
            }
        })
        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'})
    }
})


// fetch data of test
router.put('/presubmit', async (req, res) => {
    try {  
        
        var answer = 0;
        var notAnswer = 0;

        var userId = req.body.userId;
        var testId = req.body.testId;
        var resultId = req.body.resultId;

        const test =  await testModel.findOne({
            _id : testId
        });

        const resultStatList = await resultStatModel.find({
            userId : userId,
            testId : testId,
            resultId : resultId
        });

        for (let i = 0; i < resultStatList.length; i++) {
            if(resultStatList[i].answer){
                answer = answer + 1;
            }            
        }

        notAnswer = test.questionList.length - answer;

        res.status(200).send({answer : answer, notAnswer : notAnswer});

        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})


// submit test
router.put('/submit', async (req, res) => {
    try {
        var totalMarks = 0;
        var correctMarks = 0;
        var incorrectMarks = 0;
        var leftMarks = 0;
        
        var totalQuestion = 0;
        var correctAnswer = 0;
        var incorrectAnswer = 0;
        var leftQuestion = 0;
        
        var percentage;

        var userId = req.body.userId;
        var testId = req.body.testId;
        var resultId = req.body.resultId;

        const test = await testModel.findOne({
            _id : testId
        });

        const result = await resultModel.findOne({
            userId : userId,
            testId : testId,
            resultId : resultId
        });

        const resultStatList = await resultStatModel.find({
            userId : userId,
            testId : testId,
            resultId : resultId
        });

        // checking answers and updating marks for every question in test
        for (let i = 0; i < test.questionList.length; i++) {
           
            // question details for the test question id
            var question = await questionModel.findOne({
                _id : test.questionList[i]
            });

            // question details for the test question id
            var resultStat = await resultStatModel.findOne({
                userId : userId,
                testId : testId,
                resultId : resultId,
                questionId : test.questionList[i]
            });

            // total marks
            totalMarks = totalMarks + Number(question.marks);

            // if result not exist
            if(!resultStat && question){                
                totalQuestion = totalQuestion + 1;
                leftQuestion = leftQuestion + 1;
                leftMarks = leftMarks + Number(question.marks);
            }
            // correct answer
            else if((resultStat.answer == question.answer) && resultStat){
                resultStat.marks = question.marks;
                resultStat.negMarks = 0;
                correctAnswer = correctAnswer + 1;
                totalQuestion = totalQuestion + 1;

            }
            // undefined or null answer
            else if((resultStat.answer == null || resultStat.answer == undefined) && resultStat){
                resultStat.marks = 0;
                resultStat.negMarks = 0;
                totalQuestion = totalQuestion + 1;
                leftQuestion = leftQuestion + 1;
                leftMarks = leftMarks + Number(question.marks);
            }
            //negative marking if enabled in test
            else if(test.negMarking && resultStat){
                if((resultStat.answer !== question.answer) && resultStat){
                    resultStat.negMarks = question.negMarks;
                    resultStat.marks = 0;
                    incorrectAnswer = incorrectAnswer + 1;
                    totalQuestion = totalQuestion + 1;

                }
            }
            // not attempt answer
            else if(resultStat.answer !== question.answer){
                resultStat.negMarks = 0;
                resultStat.marks = 0;
                incorrectAnswer = incorrectAnswer + 1;
                totalQuestion = totalQuestion + 1;

            }
            
            // save resultStat if exist
            if (resultStat){
                resultStat.save();
            }
        }

        // updating result
        for (let i = 0; i < resultStatList.length; i++){
            correctMarks = correctMarks + Number(resultStatList[i].marks);
            if(test.negMarking){
                incorrectMarks = incorrectMarks + Number(resultStatList[i].negMarks);
            }
        }

        percentage = ((correctMarks - incorrectMarks) * (100 / totalMarks)).toFixed(2);

        function calResult(){
            if(percentage >= test.percentage) {
                return 'Pass';
            }
            else {
                return 'Fail';
            }
        }
    

        result.totalMarks = totalMarks;
        result.correctMarks = correctMarks;
        result.negMarks = incorrectMarks;
        result.obtainedMarks = (correctMarks - incorrectMarks);

        result.totalQuestion = totalQuestion;
        result.totalAttempt = correctAnswer + incorrectAnswer;
        result.correctAnswer = correctAnswer;
        result.incorrectAnswer = incorrectAnswer;
        
        result.notAttemptQuestion = leftQuestion;
        result.notAttemptMarks = leftMarks;

        result.percentage = `${percentage}%`;
        result.result = calResult();

        result.save(function(error){
            if(error) {
                res.status(400).send({message : 'error occured'});
            }
            else {
                res.status(200).send({result : result});
            }
        })

        
    } catch (error) {
        res.status(400).send({message : 'Something went wrong'});
    }
})




module.exports = router;