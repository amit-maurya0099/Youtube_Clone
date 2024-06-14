import React from 'react'
import user from "./usericon.png"

const ChatMessage = ({name,message}) => {
  return (
    <>
    <div className='p-2 flex items-center shadow-sm '>
        <img alt="user" src={user} className='size-5'/>
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
      
    </>
  )
}

export default ChatMessage
