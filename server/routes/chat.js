import express from "express";
import {getMyProfile, login, logOut, newUser, searchUser} from "../controllers/user.js";
import  {multerUpload}  from "../middlewares/multer.js";
import { isAuth } from "../middlewares/auth.js";
import { newGroupChat } from "../controllers/chat.js";
const app=express.Router();

app.use(isAuth);

app.post("/new",newGroupChat);


export default app;


