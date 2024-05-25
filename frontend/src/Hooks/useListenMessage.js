import { useEffect } from 'react'
import { useSocketContext } from '../context/socketContext'
import useConversation from '../zustang/useConversation'
import notification from '../assets/Sound/received2.mp3'

const useListenMessage = () => {
    const {socket}=useSocketContext()
    const {messages,setMessages}=useConversation()
  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        setMessages([...messages,newMessage])
        const sound=new Audio(notification)
        sound.play()
    })
    return()=> socket?.off("newMessage")
  },[socket,setMessages,messages])
}

export default useListenMessage
