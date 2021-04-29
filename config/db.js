const mongoose = require('mongoose');
const config = require('config');


const mongo = process.env.MONGO_URI || "mongodb+srv://AdtelligentAdmin:Fy7YqhRv8ttqG93@cluster0.vtrdo.mongodb.net/CourseTracker?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(
      mongo,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,

      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;