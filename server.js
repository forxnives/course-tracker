const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const path = require("path")

const coursesRouter = require('./src/courses/coursesRouter');
const departmentRouter = require('./src/departments/departmentRouter');
const userRouter = require('./src/users/userRouter')

const cors = require('cors');

const connectDB = require('./config/db');
require("dotenv").config()

const port = process.env.PORT || 8082;  

const app = express();

app.use(cookieParser());

app.use(cors({
  origin : "http://localhost:3000",
  credentials: true,
}))

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static(path.join(__dirname, "client", "build")))


app.use('/courses', coursesRouter);

app.use('/departments', departmentRouter);

app.use('/users', userRouter)






app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


connectDB().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
})
.catch((err) => console.log(err));









