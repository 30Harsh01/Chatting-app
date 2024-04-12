import express from "express";
import protectroute from '../Middleware/protectRoute.js'
import Conversation from '../Model/conversationSchema.js'
import Message from '../Model/messageSchema.js'

const router=express.Router()

router.post("/send/:id",protectroute,async(req,res)=>{
    try {
        const {message}=req.body
        const {id: receiverID}=req.params;
        // console.log(req.user._id)
        const senderID=req.user._id

       let conversation= await Conversation.findOne({
            participant:{ $all:[senderID,receiverID] }
        })

        if(!conversation){
            conversation=await Conversation.create({
                participant:[senderID,receiverID],
            })
        }
        const newMessage=await new Message({
            senderID,
            receiverID,
            message
        })
        console.log(conversation)

        if(newMessage){
            await conversation.message.push(newMessage._id)
        }
        await conversation.save();
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
    }
})

router.get('/:id',protectroute,async(req,res)=>{
    try {
        const {id:userToChatId}=req.params;
        const senderID=req.user._id
        const conversation=await Conversation.findOne({
            participant:{$all : [senderID,userToChatId]}
        }).populate("message")
        console.log(conversation)
        if(!conversation){
            return res.status(200).json([])
        }
        return res.status(201).json(conversation.message)
    } catch (error) {
        console.log(error)
    }

})

export default router