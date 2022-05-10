import React from 'react'
import SidebarComponent from './SidebarComponent'
import { HomeIcon,LightningBoltIcon,VideoCameraIcon,InboxIcon ,CashIcon} from '@heroicons/react/outline'
import { HomeIcon as HomeSolidIcon } from '@heroicons/react/solid'
const Sidebar = () => {
  return (
    <div className=' hidden lg:flex lg:flex-col w-1/12 bg-white  '>
        <SidebarComponent title="Home" icon={<HomeSolidIcon width={30} height={40}/>}/>
        <SidebarComponent title="Explore" icon={<LightningBoltIcon width={30} height={40}/>}/>
        <SidebarComponent title="Shorts" icon={<VideoCameraIcon width={30} height={40}/>}/>
        <SidebarComponent title="Subsc.." icon={<InboxIcon width={30} height={40}/>}/>
        <SidebarComponent title="Library" icon={<CashIcon width={30} height={40}/>}/>

        
    </div>
  )
}

export default Sidebar