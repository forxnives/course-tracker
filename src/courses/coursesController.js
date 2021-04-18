
const {Course}  = require('./courseModel');


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