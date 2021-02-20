import mongoose from "mongoose";
import dotnev from "dotenv";

import users from "./data/users.js";
import products from "./data/products.js";

import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

import connectDB from "./config/db.js";

dotnev.config();
connectDB();

const importData = async () => {
  try {
    //Delete all from orders
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //Returns all inserted users
    const createdUsers = await User.insertMany(users);

    //Id of admin user
    const adminUser = createdUsers[0]._id;
    //Add admin user to all products
    const sampleProducts = products.map((p) => {
      return { ...p, user: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data inserted!");
    process.exit();
  } catch (error) {
    console.log(`Error Data import: ${error}`);
  }
};

const deleteData = async () => {
  try {
    //Delete all from orders
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(`Error Data import: ${error}`);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else importData();
