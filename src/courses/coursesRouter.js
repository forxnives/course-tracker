const express = require('express');
const router = express.Router();
const { getCourses, addCourse, addComment, getSingleCourse } = require('./coursesController');


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

  router.route('/comment').post(async (req, res) => {

    try {
      const { body } = req;

      const data = await addComment(body)

      res.json({data: data})
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }


  })

  router.route('/single/:courseId').get(async (req, res) => {

    console.log(req.params.courseId)
    try {
      const { courseId } = req.params;

      const data = await getSingleCourse(courseId)

      res.json({data: data})
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }


  })

  module.exports = router;