const mongoose = require('mongoose');
const config = require('./env'); 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
    return conn;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); 
  }
};

module.exports = connectDB;