import React from 'react'
import Button from './Button'
const List=["All","For You","Popular","Gaming","Songs","Live","Sports","Trailers","News","Recently Uploaded","Watched","Movies","Thrillers","Action","Entertainment"];

const ButtonList = () => {
  return (
    <>
      <div className='flex sticky top-16 my-2 mx-2 justify-between overflow-x-scroll w-[1300px] no-scrollbar '>
       
      {List.map((item,index)=>(
        <Button name={item} key={index}></Button>
      ))}
     
    </div>
      </>
  )
}

export default ButtonList
