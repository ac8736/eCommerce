import express from "express";
import { getUsers, createUser } from "../controllers/user.js";
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);

export default userRouter;
