import express from "express";
import { edit, remove } from '../controllers/userController';

// Create An User Router
const userRouter = express.Router();

userRouter.get("/edit", edit);
userRouter.get("/delete", remove);


export default userRouter;