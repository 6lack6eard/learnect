var express = require('express');
var router = express.Router();

const testModel = require('../models/tests.model');


// create new test
router.post('/create-test', function( req, res, next ) {

    const test = new testModel ({
        courseName : req.body.courseName,
        testName : req.body.testName
    });

    test.save(function (err, testObj) {
        if(err){
            res.send({status: 500, message: 'Unable to create test'});
        }
        else{
            res.send({status: 200, message: 'Test created successfully', testId: test._id});
        }
    });
});


// get all test
router.get('test-list', async (req, res) => {
    testModel.find(function(err, testList){
        if(err){
            res.send({status: 400, message : "Unable to find tests."})
        }
        else {
            res.send({status: 200, result : testList})
        }
    });
});


// get one test
router.get('/test-list/:testId', async ( req, res ) => {
    try {
        const test = await testModel.findById(req.params.testId);
        res.send(test);
    } catch (err) {
        res.send({message : err});
    }
});


// update test to add questions
router.put('/add-test-question/:testId', async ( req, res ) => {

    try {
        const questionId = req.body.questionId;

        const updatedTest = await testModel.findOneAndUpdate({
            _id : req.params.testId
        }, {
            $addToSet: {
                questionList : questionId
            }
        });
        res.save(updatedTest);
        
    } catch (err) {
        res.json({message : err});
    }
});


// update test to remove questions
router.put('/remove-test-question/:testId', async (req, res) => {
    try {
        const questionId = req.body.questionId;
        const updatedTest = await testModel.findOne({
            _id : req.params.testId
        });

        for (let i = 0; i < updatedTest.questionList.length; i++) {
            if(updatedTest.questionList[i] === questionId) {
                updatedTest.questionList.splice(i, 1);
            }            
        }

        updatedTest.save( function(err, testObj){
            if(err) {
                res.send({status : 400, message : "Unable to remove question"});
            }
            else {
                res.send({status : 200, message : "Question removed"});
            }
        })

    } catch (err) {
        res.json({message : err});
    }
})

module.exports = router;