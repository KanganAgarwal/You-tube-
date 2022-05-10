import React from 'react'
import { HomeIcon,LightningBoltIcon,VideoCameraIcon,InboxIcon ,CashIcon,QuestionMarkCircleIcon,RefreshIcon,FlagIcon, CameraIcon, ClockIcon,ThumbUpIcon, FilmIcon, StatusOnlineIcon, AcademicCapIcon, LightBulbIcon, CogIcon, ShieldExclamationIcon} from '@heroicons/react/outline'
import { HomeIcon as HomeSolidIcon } from '@heroicons/react/solid'
import SideLongComponent from './SideLongComponent'
import yt_icon from "./yt_icon.jpg"
import game from "./game.png"
const SideLongBar = () => {
  const video_icon=<img src={yt_icon} />
  const game_icon=<img src={game} />
  return (
    <div className=' hidden lg:flex lg:flex-col w-1/4 bg-white mt-5  hover:overflow-y-scroll scroll-smooth  transition transform duration-300 ease-out h-screen scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 	 '>
    <SideLongComponent title="Home" icon={<HomeSolidIcon width={30} height={40}/>} />
    <SideLongComponent title="Explore" icon={<LightningBoltIcon width={30} height={40}/>}/>
    <SideLongComponent title="Shorts" icon={<VideoCameraIcon width={30} height={40}/>}/>
    <SideLongComponent title="Subscription" icon={<InboxIcon width={30} height={40}/>}/>
    <hr/>
    <SideLongComponent title="Library" icon={<CashIcon width={30} height={40}/>}/>
    <SideLongComponent title="History" icon={<RefreshIcon width={30} height={40}/>}/>
    <SideLongComponent title="Your Videos" icon={<CameraIcon width={30} height={40}/>}/>
    <SideLongComponent title="Watch Later" icon={<ClockIcon width={30} height={40}/>}/>
    <SideLongComponent title="Liked Videos" icon={<ThumbUpIcon width={30} height={40}/>}/>
    <hr/>
    <h2 className='font-semibold text-gray-500  m-4 text-xl'>MORE FROM YOUTUBE</h2>
    <SideLongComponent  title="YouTube Premium" icon={video_icon  }/>
    <SideLongComponent title="Movies" icon={<FilmIcon width={30} height={40}/>}/>
    <SideLongComponent  title="Gaming" icon={game_icon }/>
    <SideLongComponent  title="Live" icon={<StatusOnlineIcon width={30} height={40}/>}/>
    <SideLongComponent  title="Learning" icon={<LightBulbIcon width={30} height={40}/>}/>
    <SideLongComponent  title="Sports" icon={<AcademicCapIcon width={30}  height={40}/>}/> 
    <hr/>
    <SideLongComponent  title="Settings" icon={<CogIcon width={30}  height={40}/>}/> 
    <SideLongComponent  title="Report History" icon={<FlagIcon width={30}  height={40}/>}/> 
    <SideLongComponent  title="Help" icon={<QuestionMarkCircleIcon width={30}  height={40}/>}/> 
    <SideLongComponent  title="Feedback" icon={<ShieldExclamationIcon width={30}  height={40}/>} /> 
    <hr className="mb-4"/>
    </div>
    )
}

export default SideLongBar