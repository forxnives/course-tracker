const express = require('express');
const router = express.Router();
const { getCourses, addCourse } = require('./coursesController');


router.route('/')


.get(async (req, res) => {
  
    try {
  
      const courses = await getCourses()

      res.json({ data:  courses });
    
    } catch (err) {
      res.status(400).json({message: err.message})
    }

  })
  
  .post(async (req, res) => {

    try {

      const { body } = req;

      const data = await addCourse(body)

      res.json({ data: data });

    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }

  })

  module.exports = router;