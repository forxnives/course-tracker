
const {Course}  = require('./courseModel');
const {Department} = require('../departments/departmentModel')


exports.retrieveCourses =  async () => {


    try {

        const courses = await Course.find({})

        return courses

        // const invoices = [];

        // for ( let i = 0; i < customer.invoices.length; i++) {
        //     let invoice = await Invoice.findById(customer.invoices[i])
        //     invoices.push(invoice)
        // }
        // return invoices


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