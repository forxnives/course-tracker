
const {Course, Comment}  = require('./courseModel');
const {User, UserCourse} = require('../users/userModel')
const {Department} = require('../departments/departmentModel')


exports.getCourses =  async () => {


    try {

        const courses = await Course.find({})

        return courses


    } catch (err){

        throw err;

    }

}

exports.getSingleCourse =  async (courseId) => {


    try {

        const course = await Course.findById(courseId)



        for (let i=0; i < course.comments.length; i++) {
            const user = await User.findById(course.comments[i].userId)

            course.comments[i].userName = user.firstName+ ' ' + user.lastName

        }

        return course


    } catch (err){

        throw err;

    }

}


exports.addCourse =  async (course) => {


    try {

        const department = await Department.findById(course.department)


        if (!department){
            throw new Error('Department doesnt exist')
        }

        const newCourse = new Course({...course, department:{
            name: department.name,
            id: department._id
        }})


        department.courseIds.push(newCourse._id)

        const savedCourse = await newCourse.save();
        const savedDepartment = await department.save();

        return savedCourse


    } catch (err){

        throw err;

    }

}


exports.addComment =  async (body) => {


    try {

        const {userId, courseId, comment} = body


        const course = await Course.findById(courseId)


        if (!course){
            throw new Error('Course doesnt exist')
        }

        const newComment = new Comment({

            userId: userId,
        
            comment: {
                text: comment.text,
                timeStamp: comment.timeStamp,
            }

        })

        // const savedComment = await newComment.save();

        course.comments.push(newComment)

        const savedCourse = await course.save()

        return savedCourse


    } catch (err){

        throw err;

    }

}


exports.enrolUser =  async (body) => {


    try {

        const {courseId, userId} =  body

        const user = await User.findById(userId)

        console.log(user.courses)

        for (let i=0; i<user.courses.length; i++){
            if (courseId===user.courses.courseId){
                return user
            }
        }

        const newUserCourse = await new UserCourse({
            courseId: courseId,
        })

        user.courses.push(newUserCourse)

        const savedUser = await user.save()

        return savedUser

    } catch (err){

        throw err;

    }

}

