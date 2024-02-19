const mongoose = require('mongoose');

const resultSchema = mongoose.Schema({
    resultId: String,
    userId: String,
    testId: String,

    startTime: Number,
    endTime: Number,
    updatedTime: Number,
    pauseTime: Number,
    resumeTime: Number,
    delayTime: Number,

    totalQuestion: Number,
    totalAttempt: Number,
    notAttemptQuestion: Number,
    correctAnswer: Number,
    incorrectAnswer: Number,

    totalMarks: Number,
    correctMarks: Number,
    negMarks: Number,
    obtainedMarks: Number,
    notAttemptMarks: Number,
    
    result: String,
    percentage: String,

    examFinished: Boolean
});

const resultModel = mongoose.model('Results', resultSchema);

module.exports = resultModel;