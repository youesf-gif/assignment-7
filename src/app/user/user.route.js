import { Router } from "express";
import userController from "./user.controller.js";

const userRouter = Router();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.patch("/:id", userController.upadteUser);
userRouter.delete("/:id", userController.deleteUser);
userRouter.get("/:id", userController.getUser);

export default userRouter;
