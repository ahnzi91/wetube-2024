import express from "express";
import { join, login } from "../controllers/userController";
import { trending } from "../controllers/videoController";

// Create An Global Router
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;    