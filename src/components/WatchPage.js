import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { useState } from "react";
import { addMessage } from "../utils/ChatSlice";

const WatchPage=()=>{
    const [searchParams]=useSearchParams();
    const [liveMessage,setLiveMessage]=useState("");
    
    const dispatch=useDispatch();
    useEffect(()=>{
     dispatch(closeMenu()); 
    },[])
    return (

        <div className="ml-10">
            <div className="flex py-5 m-3">
           <div >
             <iframe
             width="780" 
            height="450" 
            src={"https://www.youtube.com/embed/"+searchParams.get("v")}
             title="YouTube video player" 
             frameBorder="0" 
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen></iframe>
            </div>
            <div>
            <LiveChat />
           <form className="mx-14"
           onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"Amit",
                message:liveMessage
            }))
            setLiveMessage("");
           }} >
            <input type="text" placeholder="write message" className=" px-3 w-72 h-8 bg-slate-300 my-1 rounded-full"
              value={liveMessage}
              onChange={(e)=>setLiveMessage(e.target.value)}
             
            ></input>
            <button className="bg-stone-400 text-black cursor-pointer rounded-full m-2 px-2 py-1 "
             >send</button>
            </form>
           
            </div>
            </div>
        <CommentsContainer/>
        </div>
    )
}
export default WatchPage;