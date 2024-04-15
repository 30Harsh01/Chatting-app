import React from 'react'
import Message from './Message'
import MessageInput from './MessageInput'
import {TiMessages} from 'react-icons/ti'
export default function Messagewindow() {
    const noChatSelected=false
    return (
        <div className='md:min-w-[450px] flex flex-col '>
            {noChatSelected?<NoChatSelected/>:<>
                {/* header */}
                <div className='bg-slate-500 px-4 py-2 mb-2' >
                    <span className='text-white font-bold'>
                        Harsh
                    </span>
                </div>
                {/* Messages */}
                <div className='px-4 flex-1 overflow-auto'>
                    {/* Message */}
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                    <Message/>
                </div>
                {/* message input */}
                <MessageInput/>
            </>}
        </div>
    )
};

const NoChatSelected=()=>{
    return(
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200-semibold flex flex-col items-center gap-2">
                <p>Welcome Harsh saxena</p>
                <p>Select a chat to start</p>
                <TiMessages className='text-3xl md:text-6xl text-center'/>
            </div>
        </div>
    )
};