import React,{useState} from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SideLongBar from "./SideLongBar"
import RecommendedVideos from "./RecommendedVideos"
const Home = () => {

  return (
    <div>
      <Header  />
      <hr/>
      <div className="flex w-full ">
     <Sidebar/>
   
     <RecommendedVideos/>

    </div>
    </div>
  );
};

export default Home;
