
import menu from "./menu.jpg";
import logo from "./logo.jpg";
import user from "./usericon.png";
import lightModeIcon from './light-mode.png'
import darkModeIcon from "./dark-theme.png"
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { Youtube_Search_api } from "../utils/constants";
import { IoSearch } from "react-icons/io5";
import { cacheResults } from "../utils/searchSlice";



const Header =()=>{
    const [searchQuery,setSearchQuery]=useState("");
    const [suggestions,setSuggestions]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false);
    const [isDarkMode,setDarkMode]=useState(false);
    const searchCache=useSelector((store)=>store.search);

    useEffect(()=>{

       const timer=setTimeout(()=>{
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        }
        else{
            getSearchSuggestions();
        }

    },200);
    
       return()=>{
        clearTimeout(timer);

       };

    },[searchQuery])
    const getSearchSuggestions=async()=>{
        const data=await fetch(Youtube_Search_api + searchQuery);
        const json=await data.json();
        setSuggestions(json[1]);
        dispatch(
            cacheResults({
                [searchQuery]:json[1],
            }))
        
    }
    const dispatch=useDispatch();

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
        <div >
        <input
           placeholder="search" 
           type="text" 
           className="h-[38px] w-[600px] my-3 ml-80 px-5 rounded-l-full border-solid border-gray-300 border-2" 
           value={searchQuery}
           onChange={(e)=>setSearchQuery(e.target.value)}
           onFocus={()=>setShowSuggestions(true)}
           onBlur={()=>setShowSuggestions(false)}
        />
       

       { showSuggestions && <div className="flex justify-end">
            <div className="w-[65%] bg-white  px-3 rounded-sm shadow-lg ">
          <ul >
            
            {suggestions.map((s)=>(
              
            <li key={s} className="flex shadow-sm hover:bg-gray-200 "><IoSearch className="m-1"/> {s}</li>
            
            ))}
            

          </ul>  
        </div>
         </div>}
     </div>

        <button className="border-solid border-gray-300 border-2 h-[38px]  my-3 w-[55px] rounded-r-full bg-gray-200" ><IoSearch className='h-10 mx-2' /></button>
        <div className=" flex ml-[15%]">
        <button  onClick={themeHandler}><img alt="/" src={isDarkMode? darkModeIcon:lightModeIcon} className="size-10 mx-5"></img></button>
        <img src={user} alt="user" className=" h-10  my-2"></img>
     </div>
        
           
  
        </div>
    )
}
export default Header;
