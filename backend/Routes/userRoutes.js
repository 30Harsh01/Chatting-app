import express from "express"
import protectRoute from "../Middleware/protectRoute.js"
import User from "../Model/userSchema.js"

const router=express.Router()

//get users for sidebar
router.get("/",protectRoute,async(req,res)=>{
    try {
        const loggedInUser=req.user._id
        const alluser=await User.find({_id:{$ne:loggedInUser}}).select("-password")

        res.status(200).json(alluser)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error from userroute"})
    }
})


export default router