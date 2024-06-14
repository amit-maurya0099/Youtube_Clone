import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/ChatSlice';
import { generateRandomName, randomMessage } from '../utils/helper';


const LiveChat = () => {
    const dispatch=useDispatch();
    const chatMessages=useSelector((store)=>store.chat.messages)

    useEffect(()=>{
        const i=setInterval(()=>{
        dispatch(addMessage({
            name:generateRandomName(),
            message:randomMessage(20),
        }))

        },1000)
        return ()=>clearInterval(i);
            
         

    },[])
  return (
    <> 
    <div className=' absolute flex justify-center  bg-white rounded-lg w-[350px] mx-14  border  '>
          <p className='font-bold '>Live Chat</p>
        </div>
      <div className='w-[350px] h-[450px] bg-slate-100 border border-gray-500 mx-14 rounded-lg overflow-y-scroll flex flex-col-reverse'>
       
        {chatMessages.map((c,index)=>(
            <ChatMessage key={index} name={c.name} message={c.message}/>

        ))}
        
      </div>
      
    </>
  )
}

export default LiveChat;
