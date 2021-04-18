const mongoose = require('mongoose');

const { Schema } = mongoose;

const departmentModel = new Schema({

    name: {
        type: String,
        required: true
    },

    courseIds: [String],


})





const Department = mongoose.model('Department', departmentModel);

    
module.exports = { departmentModel, Department };