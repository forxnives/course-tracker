const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSubSchema = new Schema({

    userId: {
        type: String,
        required: true
    },

    comment: {
        text: String,
        timeStamp: String,
    }

})



const courseSchema = new Schema({

    // invoiceId: String,

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    site: {
        name: String,
        link: String,
    },

    description: {
        type: String,
        required: true
    },

    topics: {
        type: [String],
        required: true
    },

    image: {
        type: String,
        required: true
    },

    timesTaken: {
        type: Number,
     
    },

    avgCompletionTime: {
        type: Number,

    },

    last10StartTimes: {
        type: [String],

    },

    pupilIds: [String],

    department: {
        type:{
            id: String,
            name: String
        },
        required: true
    },

    keywords: [String],

    rating: {

        one: Number,
        two: Number,
        three: Number,
        four: Number,
        five: Number

    },

    comments: [commentSubSchema],


})



const Course = mongoose.model('Course', courseSchema);


module.exports = { courseSchema, commentSubSchema, Course };