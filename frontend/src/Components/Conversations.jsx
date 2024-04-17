import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../Hooks/useGetConversations'

export default function Conversations() {
  const { loading, conversations } = useGetConversations()

  return (
    <div className='py-2 flex flex-col overflow-auto'>
      {/* Check if conversations is not null or undefined before mapping */}
      {conversations && conversations.map((conversation, idx) => (
        <Conversation key={conversation._id} conversation={conversation} lastInx={idx === conversations.length - 1} />
      ))}
    </div>
  )
}
