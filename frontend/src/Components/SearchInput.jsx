import React, { useState } from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import useConversation from '../zustang/useConversation'
import useGetConversations from '../Hooks/useGetConversations';
import toast from 'react-hot-toast';

export default function SearchInput() {

  const[search,setSearch]=useState('')
  const {setSelectedConversation}=useConversation();
  const {conversations}=useGetConversations()
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    if(!search) return
    if(search.length<3){
      return toast.error('Search input length should br greater than 3')
    }
    const conversation=conversations.find((c)=>c.username.toLowerCase().includes(search.toLowerCase()))

    if (conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else{
      return toast.error('No such user present')
    }
  }


  return (
    <form onSubmit={handleOnSubmit} className='flex items-center gap-2'>
        <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            {/* Icon */}
            <IoSearchSharp className='w-6 h-6 outline-none' />
        </button>
    </form>
  )
}
