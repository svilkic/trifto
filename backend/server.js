import express from "express";
import dotnev from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotnev.config();
connectDB();
const app = express();

app.get("/", (req, res) => res.send("API is running..."));

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`SHOP API is running in ${process.env.NODE_ENV} on ${PORT}`)
);
