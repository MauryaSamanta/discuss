import express from "express";
import {getMyProfile, login, logOut, newUser, searchUser} from "../controllers/user.js";
import  {multerUpload}  from "../middlewares/multer.js";
import { isAuth } from "../middlewares/auth.js";
const app=express.Router();

app.post("/login",login);
app.post("/new",multerUpload.single("avatar"),newUser);
app.get("/me",isAuth, getMyProfile);
app.get("/logout",isAuth,logOut);

app.get("/search", searchUser);
export default app;


