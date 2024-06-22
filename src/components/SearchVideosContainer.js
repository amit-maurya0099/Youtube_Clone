import React, { useEffect, useState } from 'react'
import SearchVideoCard from "./SearchVideoCard" 
import { Link, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { API_Key } from '../utils/constants';



const SearchVideosContainer = () => {
  const [searchVideos,setSearchVideos]=useState([]);
  const {searchQuery}=useParams();
 
 
  

  
  useEffect(()=>{
    
      getSearchVideos();
      
    
  },[searchQuery])

  const getSearchVideos=async()=>{

  const data=await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${searchQuery}&type=video&key=${process.env.REACT_APP_API_KEY}`)
  const json=await data.json();
 
 
  setSearchVideos(json.items);
 

  }

  return (
    <>
    <div className='mx-5 flex flex-col w-[100%]   overflow-y-scroll'>

    {searchVideos.map((video)=>{
        return(
          <Link to={"/watch?v="+ video.id.videoId} key={video.id.videoId}>
           <SearchVideoCard  info={video}/>
           </Link>
        )

   
      })}
      

       </div>
    </>
  )
}

export default SearchVideosContainer;
