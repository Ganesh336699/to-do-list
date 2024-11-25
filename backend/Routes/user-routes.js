import express from "express";
import { signUp } from "../controllers/user-controller.js";
import { login } from "../controllers/user-controller.js";


const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.post("/login", login);


export default userRouter;
