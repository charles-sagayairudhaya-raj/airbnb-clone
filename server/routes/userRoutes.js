import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
} from "../controller/userController.js";

//Router Obj
const router = express.Router();

//***** Create routes */
//Register
router.post("/register", registerUser);

//Login
router.post("/login", loginUser);

//Get user
router.get("/getUser", getUser);

//Export
export default router;
