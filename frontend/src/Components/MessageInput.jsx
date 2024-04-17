import React, { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../Hooks/useSendMessage'

export default function MessageInput() {
  const [message,setMessage]=useState(" ")
  const {loading,sendMessage}=useSendMessage()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!message){return}
    await sendMessage(message);
    setMessage(" ")
  }
  const handleOnChange=(e)=>{
    setMessage(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='px-4 my-3'>
    <div className='w-full relative'>
        <input  value={message} onChange={handleOnChange} type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-600 text-white'placeholder='Send a message'/>
        <button  type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
            {/* <BsSend/> */}
            {loading?<div className='loading loading-spinner'></div>:<BsSend/>}
        </button>
    </div>
    </form>
  )
}
