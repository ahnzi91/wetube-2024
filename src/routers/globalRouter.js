import express from "express";
import { join } from "../controllers/userController";
import { trending } from "../controllers/videoController";

// Create An Global Router
const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);

export default globalRouter;