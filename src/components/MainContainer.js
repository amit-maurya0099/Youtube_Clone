import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import SideBar from './SideBar'

const MainContainer = () => {
  return (
    
    <div className=' flex w-[1500px] h-[400px]'>
  
      <SideBar />
      <div>
      <ButtonList/>
      <VideoContainer/>
    </div>
    </div>
  )
}

export default MainContainer
