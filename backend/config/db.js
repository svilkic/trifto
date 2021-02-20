import mongoose from "mongoose";
import { exit } from "process";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    exit(1);
  }
};

export default connectDB;
