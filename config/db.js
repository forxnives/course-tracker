const mongoose = require('mongoose');
const config = require('config');


const mongo = process.env.MONGO_URI

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