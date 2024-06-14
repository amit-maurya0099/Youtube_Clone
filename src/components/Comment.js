import React from 'react'
import user from './usericon.png';


const Comments = ({data}) => {
    const {name,text,replies}=data;
  return (
    <div className='flex bg-gray-100  my-2 '>
        <img alt="user" src={user} className='h-10 w-10'></img>
        <div className='px-2'>
            <p className='font-bold '>{name}</p>
            <p>{text}</p>
            
        </div>
      
    </div>
  )
}

export default Comments
