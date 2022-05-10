import React from 'react'


const SidebarComponent = ({icon,title}) => {
  return (
    <div className='hover:bg-gray-200  flex flex-col  flex-start w-24 '>
       <div className='h-20 w-20 cursor-pointer ml-8 mt-4  '>
   
      {icon }
     
       <p className="-ml-1 font-normal text-sm "> {title}</p>
      
    </div>
    </div>
  )
}

export default SidebarComponent