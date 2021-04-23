
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


        for (let i=0; i<user.courses.length; i++){

            if (courseId===user.courses[i].courseId){

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


exports.getUserCourses =  async (userId) => {


    try {

        const user = await User.findById(userId)

        const courses = []


        for (let i=0;i<user.courses.length; i++){


            let course = await Course.findById(user.courses[i].courseId)

            courses.push({...course._doc, startDate: user.courses[i].startDate, endDate: user.courses[i].endDate})

        }

        return courses

    } catch (err){

        throw err;

    }

}

exports.startUserCourse =  async (userId, courseId) => {

    try {

        const user = await User.findById(userId)
        const course = await Course.findById(courseId)
        const newDate = new Date().getTime()
        
        for (let i=0; i<user.courses.length; i++){

            if (user.courses[i].courseId === courseId) {
                if (user.courses[i].startDate){
                    return user
                }
                user.courses[i].startDate = newDate
            }
        }



        //add to course's last ten times 

        if (course.last10StartTimes.length >= 10){
            course.last10StartTimes.shift()
        }

        course.last10StartTimes.push(newDate)

        //add to courses pupils
        course.pupilIds.push(userId)

        const savedUser = await user.save()
        const savedCourse = await course.save()

        return savedUser

    } catch (err){
        throw err;
    }
}

exports.finishUserCourse =  async (userId, courseId) => {

    try {

        const user = await User.findById(userId)
        const course = await Course.findById(courseId)
        const newDate = new Date().getTime()
        let completionTime = 0;

        console.log('hithit')
        

        //add enddate to user's courses

        for (let i=0; i<user.courses.length; i++){

            if (user.courses[i].courseId === courseId) {
                //return if already completed
                if (user.courses[i].endDate){

                    return user
                }

                user.courses[i].endDate = newDate

                // completionTime = Number(user.courses[i].endDate) - Number(user.courses[i].startDate)
                completionTime = (Number(user.courses[i].endDate) - Number(user.courses[i].startDate))               

            }
        }


        //add to course's times taken

        if (course.timesTaken){
            course.timesTaken = course.timesTaken + 1
        }else{
            course.timesTaken = 1
        }

        //add to course's average completion time

        
        if (course.avgCompletionTime){

            course.avgCompletionTime = ((course.timesTaken - 1) * course.avgCompletionTime + completionTime )/ course.timesTaken
        }else{
            course.avgCompletionTime = completionTime
        }

        const savedCourse = await course.save()
        const savedUser = await user.save()

    
        return savedUser

    } catch (err){
        throw err;
    }
}


exports.rateUserCourse =  async (userId, courseId, rating) => {

    try {

        const user = await User.findById(userId)
        const course = await Course.findById(courseId)


        for (let i=0; i<user.courses.length; i++){

            if (user.courses[i].courseId === courseId) {

                if (user.courses[i].rating){

                    //if new rating is different
                    if (user.courses[i].rating != rating){

                        //decrement preious rating from course rating

                        if (user.courses[i].rating === 1){
                            course.rating.one = course.rating.one - 1
                        }
                        if (user.courses[i].rating === 2){
                            course.rating.two = course.rating.two - 1
                        }
                        if (user.courses[i].rating === 3){
                            course.rating.three = course.rating.three - 1
                        }
                        if (user.courses[i].rating === 4){
                            course.rating.four = course.rating.four - 1
                        }
                        if (user.courses[i].rating === 5){
                            course.rating.five = course.rating.five - 1
                        }



                    }else {
                        return user
                    }

                }

                user.courses[i].rating = rating

                //increment new rating to course rating
                if (rating === 1){
                    course.rating.one = course.rating.one + 1
                }

                if (rating === 2){
                    course.rating.two = course.rating.two + 1
                }

                if (rating === 3){
                    course.rating.three = course.rating.three + 1
                }

                if (rating === 4){
                    course.rating.four = course.rating.four + 1
                }

                if (rating === 5){
                    course.rating.five = course.rating.five + 1
                }

            }
        }



        
        
        const savedCourse = await course.save()
        const savedUser = await user.save()

    
        return savedUser



    } catch (err){
        throw err;
    }
}




exports.removeUserCourse =  async (userId, courseId) => {

    try {

        const user = await User.findById(userId)
        const course = await Course.findById(courseId)


        //remove from user's courses
        
        for (let i=0; i<user.courses.length; i++){

            if (user.courses[i].courseId === courseId) {
                user.courses.splice(i, 1)

            }
        }


        //remove from coures's pupil ids
        for (let i=0; i<course.pupilIds.length; i++){

            if (course.pupilIds[i] === userId) {
                course.pupilIds.splice(i, 1)

            }
        }

        const savedCourse = await course.save()
        const savedUser = await user.save()

    
        return savedUser
    } catch (err){
        throw err;
    }
}

