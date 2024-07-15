import express from "express";
import userRoutes from "./routes/user.js";
import chatRoutes from "./routes/chat.js";
import {connectDb} from "./utils/features.js";
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config({
    path:"./.env"
});

const app=express();
app.use(express.json());
app.use(cookieParser());
//app.use(express.urlencoded());
const port= process.env.PORT || 3000;


connectDb(process.env.MONGO_URI);

app.use("/user",userRoutes);
app.use("/chat",chatRoutes);
app.listen(port,(req,res)=>{
    console.log("Server is up");
})