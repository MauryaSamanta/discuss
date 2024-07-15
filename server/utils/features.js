import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
const connectDb=(uri)=>{
    mongoose.connect(uri,{dbName:"Talk"})
    .then((data)=>console.log(`Connected`))
    .catch((err)=>{
        throw err;
    });
};


const sendToken=(res,user,code,message)=>{

    const token=jwt.sign({_id:user._id}, process.env.JWT_SECRET);

    return res.status(code).cookie("hvhds", token, {
        maxAge:24*60*60*1000,
        sameSite:"none",
        httpOnly:true,
        secure:true
    }).json({
        success:true,
        token,
        message,
        user,
    })

}

const emitEvent=(req,event,users,data)=>{

};
export  {connectDb, sendToken, emitEvent} 