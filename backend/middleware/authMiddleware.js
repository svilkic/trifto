import expressAsyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.autorization &&
    req.headers.autorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.autorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not autorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not autorized, no token");
  }
});

export { protect };
