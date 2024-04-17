import React from 'react'
import useConversation from '../zustang/useConversation';

export default function Conversation(props) {
  const captalizedfirstletter=(s)=>{
    return s[0].toUpperCase() + s.slice(1);
  }
    const{selectedConversation,setSelectedConversation}= useConversation()
    const isSlected=selectedConversation?._id===props.conversation._id
  return (
    <>
    <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'
    onClick={()=>setSelectedConversation(props.conversation)}>
        <div className='avatar online'>
            <div className='w-12 rounded-full' >
                <img src={props.conversation.profilePic} alt="Avatar" />
            </div>
        </div>
      <div className='flex flex-col flex-1'>
        <div className='flex flex-col flex-1'>
            <p className='font-bold text-gray-200'>{captalizedfirstletter(props.conversation.username)}</p>
            {/* <span className='text-xl'>emoji</span> */}
        </div>
      </div>
    </div>
    {!props.lastInx&& <div className='divider my-0 py-0 h-1'/>}
    </>
  )
}
