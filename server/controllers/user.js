import { compare } from "bcrypt";
import {User} from "../models/user.js"
import { sendToken } from "../utils/features.js";
const login=async (req,res)=>{
    const {username,password}=req.body;

    const user=await User.findOne({username});
    if(!user)
        return res.status(400).json({message:"Invalid username"});
    const isMatch=await compare(password,user.password);

    if(!isMatch)
        return res.status(400).json({message:"Invalid credentials"});
    sendToken(res,user,200, "Welcome Back,");

}

const newUser=async(req,res)=>{
    const {name,
        username,
        password, 
        bio
    }=req.body;
   const avatar={
    public_id:"Sdfsf",
    url:"sudgyas",
   };
   const user=await User.create({
    name,
    bio,
    username,
    password,
    avatar

   })
   //sendToken(res,user,201,"User created");
   // res.status(201).json({message:"User done"});
}

const getMyProfile=async(req,res)=>{
    const user=await User.findById(req.user);
    res.status(200).json({
        success:true,
        data:user,
    });
}

const logOut=async(req,res)=>{
    //const user=await User.findById(req.user);
    return res.status(200).cookie("hvhds","",{
        maxAge:0,
        sameSite:"none",
        httpOnly:true,
        secure:true
    }).json({
        success:true,
        message:"Logged Out"
    });
}

const searchUser=async(req,res)=>{
    //const user=await User.findById(req.user);
    const {name}=req.query;


    
    return res.status(200).json({
        success:true,
        message:"Logged Out"
    });
}





export  {login, newUser, getMyProfile, logOut, searchUser}