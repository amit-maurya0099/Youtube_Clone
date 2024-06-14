import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants";
import VideoCard from './VideoCard';
import {Link} from "react-router-dom"

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])
  
  const getVideos=async()=>{
     const data=await fetch(YOUTUBE_VIDEOS_API);
     const json=await data.json();
     
     setVideos(json.items); 

  }

  return (
    <div className=' w-[100%] h-[180%] overflow-y-auto'>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5'>
     
      {videos.map((video)=>{
        return(
         <Link to={"/watch?v="+video.id} key={video.id} ><VideoCard info={video}/></Link>
      )})}
        </div>
   
  </div>
  )
}

export default VideoContainer;
