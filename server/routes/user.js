import express from "express";
import { getUsers, createUser, loginUser } from "../controllers/user.js";
const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);

export default userRouter;
