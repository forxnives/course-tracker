const express = require('express');
const router = express.Router();
const { getCourses, addCourse, addComment, getSingleCourse, enrolUser, getUserCourses, startUserCourse, finishUserCourse, removeUserCourse, rateUserCourse } = require('./coursesController');


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

    try {
      const { courseId } = req.params;

      const data = await getSingleCourse(courseId)

      res.json({data: data})
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }


  })


  router.route('/enrol').post(async (req, res) => {

    try {
      const { body } = req;

      const data = await enrolUser(body)

      res.json({data: data})
    } catch(err) {
      console.log(err);
      res.status(500).json({ message: 'internal server error' });
    }


  })


  
router.route('/usercourses').put(async (req, res) => {

  
  try {

    const {userId} = req.body


    const courses = await getUserCourses(userId)

    res.json({ data:  courses});
  
  } catch (err) {

    res.status(400).json({message: err.message})
  }

})


router.route('/startcourse').post(async (req, res) => {


  try {

    const {userId, courseId} = req.body

    const user = await startUserCourse(userId, courseId)

    res.json({ data: user });

  } catch(e) {

  }
})

router.route('/finishcourse').post(async (req, res) => {


  try {

    const {userId, courseId} = req.body

    const user = await finishUserCourse(userId, courseId)

    res.json({ data: user });

  } catch(e) {

  }
})

router.route('/ratecourse').post(async (req, res) => {


  try {

    const {userId, courseId, rating} = req.body




    const user = await rateUserCourse(userId, courseId, rating)

    res.json({ data: user });

  } catch(e) {

  }
})


router.route('/removecourse').post(async (req, res) => {


  try {

    const {userId, courseId} = req.body


    const user = await removeUserCourse(userId, courseId)

    res.json({ data: user });

  } catch(e) {

  }
})



  

  module.exports = router;