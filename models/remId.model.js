const mongoose = require('mongoose');

const remIdSchema = mongoose.Schema({
    remTittle : String,
    remTopicId : Number,
    remSubTopicId : Number,
    remStudentId : Number,
    remQuestionId : Number,
    remResultId : Number,
    remExamStatsId : Number,
});

const remIdModel = mongoose.model('RemId', remIdSchema);

module.exports = remIdModel;