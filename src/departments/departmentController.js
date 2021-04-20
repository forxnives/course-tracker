
const {Department}  = require('./departmentModel');



exports.getDepartment =  async () => {


    try {

        const depts = await Department.find({})

        return depts


    } catch (err){

        throw err;

    }

}