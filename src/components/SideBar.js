import React from 'react'

import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div  className="bg-white w-[15%] h-full   ">
      <div className='flex  shadow-lg font-normal px-10 text-lg my-5'>
        <ul>
          <li><Link to="/"> Home</Link></li>
          <li ><Link to="/results/shorts">Shorts</Link></li>
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
         <Link  to="/results/trending"><li>Trending</li></Link>
         <Link  to="/results/movies"><li>Movies</li>   </Link>
         <Link  to="/results/shopping"><li>Shopping</li></Link>
         <Link  to="/results/music"><li>Music</li></Link>
         <Link  to="/results/live"><li>Live</li></Link>
         <Link  to="/results/gaming"><li>Gaming</li></Link>
         <Link  to="/results/news"><li>News</li></Link>
         <Link  to="/results/sports"><li>Sport</li></Link>
         <Link  to="/results/fashion"><li>Fashion</li></Link>

        </ul>
      </div>
      </div>

    </div>
  )
}

export default SideBar;
