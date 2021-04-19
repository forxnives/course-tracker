const express = require('express');
const bodyParser = require('body-parser')

const coursesRouter = require('./src/courses/coursesRouter');


const cors = require('cors');





const connectDB = require('./config/db');

const port = process.env.PORT || 8082;  

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}));





connectDB();









  app.use(cors({
    origin : "http://localhost:3000",
    credentials: true,
  }))

app.use('/courses', coursesRouter);



app.listen(port, () => console.log(`Server running on port ${port}`));