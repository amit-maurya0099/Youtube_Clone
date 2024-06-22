import React from 'react'



const SearchVideoCard = ({info}) => {
    const {snippet}=info;
    const{description,thumbnails,channelTitle,publishTime}=snippet;
  return (
    <>
    
   <div className=' flex m-5 w-[90%]  h-[180px] '>
    <div className=' w-[450px] shadow-xl  bg-white '>
        <img alt="/" src={thumbnails.medium.url} className='object-contain rounded-lg'></img>
    </div>
    <div className='w-full  shadow-xl rounded-lg '>
        <div className='p-2 m-2' >
        <div className='font-bold'>{description}</div>
        <div className='font-semibold '>{channelTitle}</div>
        <div>{publishTime}</div>
        </div>
    </div>
    
   </div>
    </>
  )
}

export default SearchVideoCard
