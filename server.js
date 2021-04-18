const express = require('express');
const coursesRouter = require('./src/courses/coursesRouter');


const cors = require('cors');


const connectDB = require('./config/db');

const port = process.env.PORT || 8082;

const app = express();



connectDB();









  app.use(cors({
    origin : "http://localhost:3000",
    credentials: true,
  }))

app.use('/courses', coursesRouter);



app.listen(port, () => console.log(`Server running on port ${port}`));