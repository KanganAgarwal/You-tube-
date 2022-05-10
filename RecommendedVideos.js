import {useState,useEffect} from 'react'
import VideoCard from './VideoCard'

const RecommendedVideos = () => {
    const [datas,setDatas]= useState([])
    const getData=async ()=>{
     const res=  await fetch('https://jsonplaceholder.typicode.com/photos')
    const data=await res.json();
    data.length=100
    
    setDatas(data)
    
    }
    useEffect(() => {
       getData()
       }, [datas]); 
  return (
   
      <div className='flex flex-wrap pl-5 bg-gray-50 z-50 h-screen overflow-y-scroll scrollbar scrollbar-thumb-gray-700 scrollbar-track-gray-100'>
          {
              datas.map((data)=>(
         <VideoCard key={data.id} url={data.url} thumbnailUrl={data.thumbnailUrl} title={data.title}/>
              ))
          }

      </div>
   
     
  );
}

export default RecommendedVideos