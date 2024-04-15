import React from 'react'

export default function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/boy?username=Harsh" alt="avatar" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-black-500'>Hii whats upp?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
      
    </div>
  )
}
