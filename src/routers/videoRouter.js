import express from "express";
import { watch, getEdit, postEdit } from '../controllers/videoController';

// Create An Video Router
const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);

export default videoRouter;