const express = require('express');

const router = express.Router();
const { retrieveCourses } = require('./coursesController');



router.route('/').get(async (req, res) => {
    
  
    try {
  
      const courses = await retrieveCourses()
      console.log(courses)
      res.json({ data:  'courses' });
  
      // res.status(200).send({})
  
    } catch (err) {
      res.status(400).json({message: err.message})
    }


  })

  module.exports = router;