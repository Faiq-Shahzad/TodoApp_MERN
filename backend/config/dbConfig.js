const mongoose = require('mongoose');

const mongoURL =
  process.env.NODE_ENV == 'test'
    ? process.env.MONGODB_TESTURL
    : process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/TODO_App';

//Connecting to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURL);
    console.log('connected to MONGO DB');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
