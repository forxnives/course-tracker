const express = require('express');
const router = express.Router();
const { getDepartment } = require('./departmentController');



router.route('/')

.get(async (req, res) => {
    
    try {
  
      const departments = await getDepartment()
      res.json({ data:  departments });
    
    } catch (err) {
      res.status(400).json({message: err.message})
    }

})

module.exports = router;