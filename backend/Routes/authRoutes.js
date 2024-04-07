import express from "express";
import bcryptjs from 'bcryptjs'
const router=express.Router()
import User from "../Model/userSchema.js";


//signup
router.post("/signup",async (req,res)=>{
    try {
        const {fullname,username,password,cpassword,gender}=req.body
        if(!fullname||!username||!password||!cpassword||!gender){
            return res.status(400).json({message:"All fields are reuired"})
        }
        if(cpassword!==password){
            return res.status(400).json({message:"Password doesn't match"})
        }
        const usercheck=await User.findOne({username})
        if(usercheck){
            return res.status(400).json({message:"Username already exist"})
        }

        const boyProfilePic=`https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic=`https://avatar.iran.liara.run/public/girl?username=${username}`

        //hashpassword
        const hashpassword=await bcryptjs.hash(password,10)
        const newUser=await new User({
            fullname,
            username,
            password:hashpassword,
            gender,
            profilePic:gender==='male'?boyProfilePic:girlProfilePic
        })
        await newUser.save()
        res.status(201).json({
            _id:newUser._id,
            fullname:newUser.fullname,
            username:newUser.username,
            profilePic:newUser.profilePic
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

export default router