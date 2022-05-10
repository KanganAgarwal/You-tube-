import {  DotsVerticalIcon } from '@heroicons/react/outline'
import { CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const VideoCard = ({thumbnailUrl,title,url}) => {
  return (
    <div className="w-[330px] mt-8 mr-2 ml-3 ">
      <img src={thumbnailUrl} className="w-[325px] h-[200px]"/>
      <div className='flex space-x-4 items-center mt-2'>
      <img src={url} className="h-12 w-12 rounded-full"/>
      
        <p className='font-semibold flex-1'>{title}
        </p>
      
      
      <DotsVerticalIcon className=' h-6 hover:inline-flex hover:text-gray-800'/>
      </div>

        <div className='flex items-center ml-16 mt-2'>
            <p className=' text-gray-500 font-semibold text-[17px] mr-1'>T-series</p>
            <CheckCircleIcon className='h-5 text-gray-500 mt-1'/>
        </div>
        <div className='flex items-center mt-2  text-gray-400 text-md font-semibold ml-16'>
            <p>32 M Views </p>
            <p className='font-bold mx-1'>.</p>
            <p>5 months ago</p>

        </div>
    </div>
  )
}

export default VideoCard