const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
    questionId: String,
    questionFor: String,
    questionType: String,
    subjectId: String,
    topicId: String,
    subTopicId: String,
    hideQuestion: Boolean,
    question: String,
    questionImage: {type: String},
    marks: Number,
    negMarks: Number,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    fillBlank: String,
    passageQuestion: [String],
    col1: [String],
    col2: [String],
    col3: [String],
    hint: String,
    solution: String,
    answer: String,
    multipleAnswer: [String],
    status: String,
    createdDate: {type: Date, default: Date.now}
});

const questionModel = mongoose.model('Questions', questionSchema);

module.exports = questionModel;