import React from 'react'

const SideLongComponent = ({icon,title}) => {
  return (
   
   
        <div className='hover:bg-gray-200  flex flex-row items-center mb-3  '>
       <div className='h-10 w-10 cursor-pointer  ml-8'>
   
      {icon }
      </div>
     
      <p className="font-normal text-sm flex-1 font-semibold ml-2 "> {title}</p>

      </div>
    
   
  )
}

export default SideLongComponent