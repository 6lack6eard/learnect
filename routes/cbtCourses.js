var express = require('express');
var router = express.Router();

const cbtCourseModel = require('../models/cbtCourse.model');
const remIdModel = require('../models/remId.model');
const subjectModel = require('../models/subject.model');
const topicModel = require('../models/topic.model');
const subTopicModel = require('../models/subTopic.model');


// create new course for test
router.post('/create-course', async (req, res) => {

    function courseFinder(courseType){
        if(courseType==="JEE"){
            courseSubject = ["Physics", "Chemistry", "Math"];
        }
        else if(courseType==="NEET"){
            courseSubject = ["Physics", "Chemistry", "Biology"];
        }
        else if(courseType==="COMMON"){
            courseSubject = ["Physics", "Chemistry", "Math", "Biology", "Mat", "Sst"];
        }
        return courseSubject;
    };

    const vaildCourse = await cbtCourseModel.findOne({cName : req.body.cName});
    if (vaildCourse) return res.send({status: 400, message: 'Course Already Exists'});

    const cbtCourse = new cbtCourseModel ({
        cType : req.body.cType,
        cName : req.body.cName,
        cSubject : courseFinder(req.body.cType)
    });

    cbtCourse.save(function (err, courseObj) {
        if(err){
            res.send({status: 400, message: 'Unable to create test'});
        }
        else{
            res.send({status: 200, message: 'Course created successfully', courseDetails: cbtCourse});
        }
    });
});


// get all courses
router.get('/all-course', async (req, res) => {
    try {
        cbtCourseModel.find(function(err, courseList) {
            if(err) {
                res.send({status : 400, message : 'Unable to find course'});
            }
            else {
                res.send({status : 200, result : courseList});
            }
        })
    } catch (err) {
        res.send({status : 400, message : 'Something went wrong'});
    }
})


// get all test in a course
router.get('test-list/:courseName', async (req, res) => {
    try {
        testModel.find({courseName : req.params.courseName}, function(err, testList){
        if(err){
            res.send({status: 400, message : "Unable to find tests"});
        }
        else {
            res.send({status: 200, result : testList});
        }
    });
    } catch (err) {
        res.send({status : 400, message : 'Something went wrong'});
    }
    
});









// create new topic
router.post('/create-topic', async function (req, res, next) {

    const remId = await remIdModel.findOne({remTittle : 'RemTable'});
    const id = (remId.remTopicId + 1).toString().padStart(3, '0');

    const remIdUpdate = await remIdModel.findOneAndUpdate(
        {remTittle : 'RemTable'},
        {remTopicId : id}
    );
    remIdUpdate.save();

    const topic = new topicModel ({
        subjectId : req.body.subjectId,
        topicId : id,
        topicName : req.body.topicName
    });
    topic.save(function(err) {
        if(err){
            res.status(500).send({message: 'Unable to add topic'});
        }
        else {
            res.send({status: 200, message: 'Topic added successfully', topicDetails: topic});
        }
    });
});


// create new sub topic
router.post('/create-subtopic', async function (req, res, next) {

    const remId = await remIdModel.findOne({remTittle : 'RemTable'});
    const id = (remId.remSubTopicId + 1).toString().padStart(3, '0');

    const remIdUpdate = await remIdModel.findOneAndUpdate(
        {remTittle : 'RemTable'},
        {remSubTopicId : id}
    );
    remIdUpdate.save();

    const subTopic = new subTopicModel ({
        subjectId : req.body.subjectId,
        topicId : req.body.topicId,
        subTopicId : id,
        subTopicName : req.body.subTopicName
    });
    subTopic.save(function(err) {
        if(err){
            res.status(500).send({message: 'Unable to add topic'});
        }
        else {
            res.send({status: 200, message: 'Topic added successfully', subTopicDetails: subTopic});
        }
    });
});


// get Subject 
router.get('/get-subject', function(req, res, next) {
    subjectModel.find( function(err, subjectList) {
        if(err) {
            res.status(500).send({message: 'Unable to find subjects'});
        }
        else {
            res.status(200).send({result: subjectList});
        }
    })
});


// get topic 
router.get('/get-topic/:subjectId', function(req, res, next) {
    topicModel.find({subjectId: req.params.subjectId}, function(err, topicList) {
        if(err) {
            res.status(500).send({message: 'Unable to find topics'});
        }
        else {
            res.status(200).send({result: topicList});
        }
    })
});


// get Sub topic
router.get('/get-subtopic/:topicId', function(req, res, next) {
    subTopicModel.find({topicId: req.params.topicId}, function(err, subtopicList) {
        if(err) {
            res.status(500).send({message: 'Unable to find subtpics'});
        }
        else {
            res.status(200).send({result: subtopicList});
        }
    })
});

module.exports = router;