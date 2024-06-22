
import menu from "./menu.jpg";
import logo from "./logo.jpg";
import user from "./usericon.png";
import lightModeIcon from './light-mode.png'
import darkModeIcon from "./dark-theme.png"
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState } from "react";

import { IoSearch } from "react-icons/io5";
// import { cacheResults } from "../utils/searchSlice";

import { Link,useLocation,useNavigate } from "react-router-dom";


const Header =()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
    
     const [searchQuery,setSearchQuery]=useState("");
    // const searchQuery1=useSelector((store)=>store.search.searchQuery)
    // const [suggestions,setSuggestions]=useState([]);
    // const [showSuggestions,setShowSuggestions]=useState(false);
    const [isDarkMode,setDarkMode]=useState(false);
    // const searchCache=useSelector((store)=>store.search);
    
   

    // useEffect(()=>{

    //    const timer=setTimeout(()=>{
    //     if(searchCache[searchQuery1]){
    //         setSuggestions(searchCache[searchQuery1])
    //     }
    //     else{
    //         getSearchSuggestions();
    //     }

    // },200);
    
    //    return()=>{
    //     clearTimeout(timer);

    //    };

    // },[searchQuery1])

   
   
    
    // const getSearchSuggestions=async()=>{
    //     const data=await fetch(Youtube_Search_api + searchQuery1);
    //     const json=await data.json();
    //     console.log(json)
        
    //      setSuggestions(json.suggestions);
        // dispatch(
        //     cacheResults({
        //         [searchQuery1]:json[1],
        //     }))
        
    // }
    

    const toggleMenuHandler=()=>{
        dispatch(toggleMenu());
    }
    const themeHandler=()=>{
       isDarkMode?setDarkMode(false):setDarkMode(true)
       
    }

   

    return (

        <div className="flex content-center border-solid border-2 shadow-xl h-16 sticky top-0 z-10 bg-white  ">
        <img src={menu} alt="" className="h-14 cursor-pointer" onClick={()=>toggleMenuHandler()}></img>
        <img src={logo} alt="" className="h-14"></img>
       <form  onSubmit={(e)=>{
           e.preventDefault();
           if(searchQuery.length!==0){
            navigate(`/results/${searchQuery}`)}
        
        
       }}>
        <div className="flex  items-center" >
        <input
           placeholder="search" 
           type="text" 
           className="h-[38px] w-[600px]  ml-80 px-5 rounded-l-full border-solid border-gray-300 border-2" 
           value={searchQuery}
           onChange={(e)=>setSearchQuery(e.target.value)}
         
        //    onFocus={()=>setShowSuggestions(true)}
        //    onBlur={()=>setShowSuggestions(false)}
           
          
           
        />
       
   {/* // currently suggestion api having cors error */}
       {/* { showSuggestions && <div className="flex justify-end">
            <div className="w-[65%] bg-white  px-3 rounded-sm shadow-lg ">
          
            
            {suggestions.map((s)=>(
              
          <div key={s} className="flex shadow-sm hover:bg-gray-200 cursor-pointer"> <IoSearch className="m-1" />{s.value}
            </div>
            
            ))}
            

           
        </div>
         </div>} */}
     

      <button type="button" className="border-solid border-gray-300 border-2 h-[38px]  my-3 w-[55px] rounded-r-full bg-gray-200"  
      ><IoSearch className='h-10 mx-2' /></button></div></form>
        <div className=" flex ml-[15%]">
        <button  onClick={themeHandler}><img alt="/" src={isDarkMode? darkModeIcon:lightModeIcon} className="size-10 mx-5"></img></button>
        <img src={user} alt="user" className=" h-10  my-2"></img>
     </div>
        
           
  
        </div>
    )
}
export default Header;
