const mongoose = require('mongoose');

const subTopicSchema = mongoose.Schema({
    subjectId : String,
    topicId : String,
    subTopicId : String,
    subTopicName : String
});

const subTopicModel = mongoose.model('SubTopics', subTopicSchema);

module.exports = subTopicModel;