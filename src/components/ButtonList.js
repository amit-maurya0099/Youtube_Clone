import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
const List=["All","For You","Popular","Gaming","Songs","Live","Sports","Trailers","News","Recently Uploaded","Watched","Movies","Thrillers","Action","Entertainment"];

const ButtonList = () => {
  return (
    <>
      <div className='flex sticky top-16 my-2 mx-2 justify-between overflow-x-scroll w-[1300px] no-scrollbar '>
       
      {
      List.map((item,index)=>(
       <Link to={`/results/${item}`} key={index}> <Button name={item} ></Button></Link>
      ))
      }
     
    </div>
      </>
  )
}

export default ButtonList
