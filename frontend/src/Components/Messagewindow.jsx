import React, { useEffect, useRef } from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import { TiMessages } from 'react-icons/ti'
import useConversation from '../zustang/useConversation'
import useGetMessages from '../Hooks/useGetMessages'
import { useAuthContext } from '../context/authContex'
import useListenMessage from '../Hooks/useListenMessage'
export default function Messagewindow() {
    const lastMessageRef = useRef()
    const { messages, loading } = useGetMessages();
    useListenMessage();
    // console.log(messages)

    const { selectedConversation, setSelectedConversation } = useConversation()
    const captalizedfirstletter = (s) => {
        return s[0].toUpperCase() + s.slice(1);
    }
    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" })
        }, 10)
        // return () => setSelectedConversation(null)
    }, [messages])
    return (
        <div className='md:min-w-[450px] flex flex-col '>
            {!selectedConversation ? <NoChatSelected /> : <>
                {/* header */}
                <div className='bg-slate-500 px-4 py-2 mb-2' >
                    <span className='text-white font-bold'>
                        {captalizedfirstletter(selectedConversation.username)}
                    </span>
                </div>
                {/* Messages */}
                <div className='px-4 flex-1 overflow-auto'>
                    {/* Message */}

                    {!loading && messages.length > 0 && messages.map((message) => (
                        <div key={message._id} ref={lastMessageRef} >
                            <Message message={message} />
                        </div>
                    ))}


                    {loading && <p className='text-center'>Getting messages</p>}
                    {!loading && messages.length === 0 && (
                        <p className='text-center'>Send a message to start the conversation</p>
                    )}
                </div>
                {/* message input */}
                <MessageInput />
            </>}
        </div>
    )
};

const NoChatSelected = () => {
    
  const captalizedfirstletter=(s)=>{
    return s[0].toUpperCase() + s.slice(1);
  }
    const { authuser } = useAuthContext()
    // console.log(authuser.fullname)
    const user = authuser.fullname
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200-semibold flex flex-col items-center gap-2">
                {/* <p>{`Hello ${captalizedfirstletter(user)}`}</p> */}
                <p>Select a chat to start</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    )
};