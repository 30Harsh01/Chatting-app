import React from 'react'
import { useAuthContext } from '../context/authContex'
import useConversation from '../zustang/useConversation'

export default function Message(props) {

  //simpletime format 
  function simplifyTime(timeString) {
    // Parse the time string
    const date = new Date(timeString);

    // Extract the relevant information
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based, so add 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert hours to 12-hour format
    const hours12 = hours % 12 || 12;

    // Format the simplified representation in AM/PM format
    const simpleTime = `${hours12.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
    const simpleDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    // Return an object with simpleTime and simpleDate properties
    return { simpleTime, simpleDate };
}

// Example usage:
const timeString = '2024-04-17T10:03:43.279Z';
const { simpleTime, simpleDate } = simplifyTime(timeString);
console.log(simpleTime); // Output: 10:03:43 AM
console.log(simpleDate); // Output: 2024-04-17




  const { authuser } = useAuthContext()
  const { selectedConversation } = useConversation()
  const fromMe = props.message.senderID === authuser._id
  // const fromMe = authuser && props.message.senderID === authuser._id;

  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authuser.profilePic : selectedConversation.profilePic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : ''

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{props.message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{simpleTime}<br/>{simpleDate} </div>
      {/* <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'></div> */}

    </div>
  )
}
