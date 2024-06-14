import React from 'react'

import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div  className="bg-white w-[200px]   ">
      <div className='flex  shadow-lg font-normal px-10 text-lg my-5'>
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li >Shorts</li>
         <li>Subscriptions</li> 
        </ul>
      </div>
      
      <div>
        <h1 className='font-bold text-lg px-5'>You</h1>
      <div className='flex w-[200px] shadow-lg font-normal px-10 text-lg'>
        <ul>
          <li>Your Channel</li>
          <li>History</li>
          <li>Playlist</li>
          <li>Your videos</li>
          <li>Watch Later</li>
          <li>Liked Videos</li>

        </ul>
      </div>
      </div>
      
      <div>
        <h1 className='font-bold text-lg px-5'>Explore</h1>
      <div className='flex w-[200px] shadow-lg font-normal px-10 text-lg'>
        <ul>
          <li>Trending</li>
          <li>Movies</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Fashion</li>

        </ul>
      </div>
      </div>

    </div>
  )
}

export default SideBar;
