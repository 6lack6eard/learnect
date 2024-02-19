const mongoose = require('mongoose');

const testSchema = mongoose.Schema({
    courseName: String,
    testName: String,
    time: Number,
    type: String,
    negMarking: Boolean,
    percentage: String,
    questionList: {type : [String]},
});

const testModel = mongoose.model('Tests', testSchema);

module.exports = testModel;