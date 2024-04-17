import { useState } from "react"
import useConversation from "../zustang/useConversation"
import toast from "react-hot-toast"

const useSendMessage=()=>{
    const[loading,setLoading]=useState(false)
    const{messages,setMessages,selectedConversation}=useConversation()

    const sendMessage=async(message)=>{
        setLoading(true)
        try {
            const res=await fetch(`/api/message/send/${selectedConversation._id}`,{
                method:'post',
                headers:{'Content-Type':"application/json"},
                body:JSON.stringify({message})
            })
            const data=await res.json()
            // if(data.message){
            //     toast.error()
            // }
            setMessages([...messages,data])
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    return{sendMessage,loading}
}

export default useSendMessage