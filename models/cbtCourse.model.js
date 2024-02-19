const mongoose = require('mongoose');

const cbtCourseSchema = mongoose.Schema({
    cType: String,
    cName: String,
    cSubject: [String]

});

const cbtCourseModel = mongoose.model('CbtCourses', cbtCourseSchema);

module.exports = cbtCourseModel;