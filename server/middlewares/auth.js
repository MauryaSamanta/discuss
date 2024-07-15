import jwt from "jsonwebtoken";



const isAuth=async(req,res,next)=>{
    const token=req.cookies["hvhds"];
    if(!token) return res.status(500).send({message:"Please login"});
    const decode=jwt.verify(token,process.env.JWT_SECRET);
    req.user=decode._id;
    next();
    //console.log(req.user);
}

export {isAuth}