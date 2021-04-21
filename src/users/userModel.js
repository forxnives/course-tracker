const mongoose = require('mongoose');
const { Schema } = mongoose;
const argon2 = require('argon2');


const userCourseSubSchema = new Schema({

    courseId: {
        type: String,
        required: true
    },

    rating: {
        type: Number,
        enum: [1, 2, 3, 4, 5]
    },

    startDate: String,
    endDate: String

})



const userSchema = new Schema({
    

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    
    firstName: {

        type: String,
        requried: true

    },

    lastName: {

        type: String,
        requried: true

    },


    displayPicPath: String,

    departmentId: {
        type: String,
        required: true

    },

    courses:[userCourseSubSchema],

    isAdmin: {
        type: Boolean,
        required: true,
        default: false

    }

})

userSchema.pre('save', async function(next) {
    const user = this;
    
    try {
      if (user.isModified('password') || user.isNew) {
        // validate password is long enough and has special characters
        const hashedPassword = await argon2.hash(user.password);
        user.password = hashedPassword;
      }
      next();
    } catch(e) {

      next(e);
    }
  })
  
//   comparison function for when user logins
//   password in this case will be PLAINTEXT, readable password


  userSchema.methods.comparePasswords = function(password) {
    const user = this;

    return argon2.verify(user.password, password);
  }





const User = mongoose.model('User', userSchema);
module.exports = { userSchema, userCourseSubSchema, User };

