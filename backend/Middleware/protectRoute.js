import  jwt from "jsonwebtoken";
import User from "../Model/userSchema.js";

const protectRoute=async(req,res,next)=>{
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"no token provided"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET) 
        if(!decoded){
            return res.status(401).json({message:"invalid token"})
        }

        const user=await User.findById(decoded.userId).select("-password");
        if(!user){
            res.status(404).json({messsage:"user not found"})
        }
        req.user=user
        console.log(req.user)
        next()

    } catch (error) {
        console.log("error in protectRoute",error)
        res.status(500).json({message:"Internal server error"})
    }
}

export default protectRoute