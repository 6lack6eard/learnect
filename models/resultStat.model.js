const mongoose = require('mongoose');

const resultStatSchema = mongoose.Schema({
    resultId: String,
    userId: String,
    testId: String,
    questionId: String,

    startTime: Number,
    endTime: Number,
    updatedTime: Number,
    resumeTime: Date,
    finalizedTime: Date,

    answer: String,
    marks: String,
    negMarks: String
});

const resultStatModel = mongoose.model('ResultStats', resultStatSchema);

module.exports = resultStatModel;