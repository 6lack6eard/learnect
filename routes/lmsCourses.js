var express = require('express');
var router = express.Router();

const lmsCourseModel = require('../models/lmsCourse.model');

// create new course
router.post('/create-course', async ( req, res ) => {

    function courseFinder(courseType){
        if(courseType==="JEE"){
            courseSubject = ["Physics", "Chemistry", "Maths"];
        }
        else{
            courseSubject = ["Physics", "Chemistry", "Bio"];
        }
        return courseSubject;
    };

    const vaildCourse = await lmsCourseModel.findOne({cName : req.body.cName});
    if (vaildCourse) return res.status(400).send('Course Already Exists');

    const lmsCourse = new lmsCourseModel ({
        cType : req.body.cType,
        cName : req.body.cName,
        cSubject : courseFinder(req.body.cType)
    });

    lmsCourse.save(function (err, courseObj) {
        if(err){
            res.send({status: 500, message: 'Unable to create test'});
        }
        else{
            res.send({status: 200, message: 'Test created successfully', courseDetails: lmsCourse});
        }
    });
});


// get all courses
router.get('/get-courses', async ( req, res ) => {
    lmsCourseModel.find(function(err, lmsCourseList){
        if (err) {
            res.send({status: 500, message: 'Some error occured'})
        } else {
            res.send({status: 200, result: lmsCourseList})
        }
    })
});


// get one course
router.get('/get-course/:courseId', async ( req, res ) => {
    try {
        const lmsCourse = await lmsCourseModel.findById(req.params.courseId);
        res.json(lmsCourse);
    } catch (err) {
        res.json({message : err});
    }
});


// delete one course
router.delete('/delete-course/:courseId', async ( req, res ) => {
    try {
        const lmsCourse = await lmsCourseModel.findByIdAndDelete(req.params.courseId);
        res.json(lmsCourse);
    } catch (err) {
        res.json({message : err});
    }
});


// add new lecture to existing course
router.put('/add-course-lecture/:courseId', async (req, res) => {

    try {
        if (typeof req.body.cSubjectDetail1 !== 'undefined' && req.body.cSubjectDetail1.length !== 0) {            
            const updatedLmsCourse = await lmsCourseModel.findOneAndUpdate(
                { _id : req.params.courseId },
                {$addToSet: {
                    cSubjectDetail1 : req.body.cSubjectDetail1
                }
            });
        }

        if (typeof req.body.cSubjectDetail2 !== 'undefined' && req.body.cSubjectDetail2.length !== 0) {
            const updatedLmsCourse = await lmsCourseModel.findOneAndUpdate(
                { _id : req.params.courseId },
                {$addToSet: {
                    cSubjectDetail2 : req.body.cSubjectDetail2
                }
            });
        }

        if (typeof req.body.cSubjectDetail3 !== 'undefined' && req.body.cSubjectDetail3.length !== 0) {
            const updatedLmsCourse = await lmsCourseModel.findOneAndUpdate(
                { _id : req.params.courseId },
                {$addToSet: {
                    cSubjectDetail3 : req.body.cSubjectDetail3
                }
            });
        }

        res.save(updatedLmsCourse);

    } catch (err) {
        res.send({message : "Couldn't add lectures"});
    }
});

// update test to add questions
router.put('/create-test/:testId', async ( req, res ) => {

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

// view created test
router.get('/create-test/:testId', async ( req, res ) => {
    try {
        const viewTest = await testModel.findById(req.params.testId);
        res.json(viewTest);
    } catch (err) {
        res.json({message : err});
    }
});

module.exports = router;