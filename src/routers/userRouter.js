import express from "express";
import { edit, remove, logout, see } from '../controllers/userController';

// Create An User Router
const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/delete", remove);
userRouter.get(":id", see);

export default userRouter;