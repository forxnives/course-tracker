
const {Course}  = require('./courseModel');
const {Department} = require('../departments/departmentModel')


exports.getCourses =  async () => {


    try {

        const courses = await Course.find({})

        return courses


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

        const savedCourse = await newCourse.save();

        return savedCourse


    } catch (err){

        throw err;

    }

}