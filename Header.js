import React,{useState} from "react";
import { MenuIcon, SearchIcon,CloudUploadIcon,ViewGridIcon,BellIcon } from '@heroicons/react/outline'
import {MicrophoneIcon} from '@heroicons/react/solid'
import Sidebar from "./Sidebar";
import SideLongBar from "./SideLongBar"
import logo from "./Logo.jpg"
import pic from "./pic.jpg"
const Header = () => {
    

  return (
  
    <div className="flex mt-2 ml-6 justify-between items-center mb-2 sticky z-100 bg-white top-0">

      <div className="flex items-center ml-2 w-1/6 mr-40  "  >
       <MenuIcon   className="h-10 w-10 text-gray-700 "/>
       <img src={logo} alt="yt" className="h-16 ml-6" />
      </div>
      <div className="flex items-center flex-1">
          <div className="flex items-center border rounded-lg border-gray-500 shadow-sm p-[6px] px-4 w-2/3">
          <input type="text" placeholder="Search" className="outline-none flex-1 "/>
          <div className="bg-gray-100 w-16 flex items-center justify-center border-l-[1px] border-gray-400 mt-0 mb-0 h-10">
          <SearchIcon className="h-8 w-8 text-gray-700    "/>
          </div>
          </div>
          <div className="bg-gray-100 rounded-full h-12 w-10 ml-4 items-center  justify-center flex">
             
          <MicrophoneIcon className="h-10 object-contain m-[7px] "/></div>
      </div>
      <div className=" flex justify-center  h-10 space-x-8 mr-6 mb-[2px] w-1/6">
          <CloudUploadIcon className="h-9"/>
          <ViewGridIcon className="h-9"/>
          <BellIcon className="h-9"/>
          <img src={pic} alt="pic" className="h-10 w-10 rounded-full "/>
      </div>
      </div>
    
    
   
    
  );
};

export default Header;
