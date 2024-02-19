const mongoose = require('mongoose');

const topicSchema = mongoose.Schema({
    subjectId : String,
    topicId : String,
    topicName : String
});

const topicModel = mongoose.model('Topics', topicSchema);

module.exports = topicModel;