import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import StatsBox from './components/StatsBox';
import GraphBox from './components/GraphBox';
import Announcement from './components/Announcement';
import Activity from './components/Activity';
import Schedule from './components/Schedule';
import SidebarIcon from './components/SidebarIcon';
import Menu from './components/Menu';
function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu((prev) => !prev)
    console.log(menu)
  }
  return (
    <>
      {
        menu && <div style={{ 'z-index': '2' }} className='w-screen'><Menu handleClick={handleMenu}/></div>
      }
      <div className='flex'>
        <div className="h-screen sidebar  w-1/6 ">
          <Sidebar />
        </div>
        <div className='iconBar'>
          <SidebarIcon className="sideIcon" />
        </div>
        {
          !menu &&
          <div className="content w-full  md:pl-4">
            <Topbar handleMenu={handleMenu} />
            <div className="contentBody p-5 pt-2 md:flex ">
              <div className="left">
                <h1 className='text-xl font-semibold  ml-3'>Dashboard</h1>
                <div className="stats flex justify-between mt-4 flex-wrap">
                  <StatsBox heading="Available Position" stats="4 urgently needed" count="24" pc="#ffefe7" sc="#ff6f6d" />
                  <StatsBox heading="Job Open" stats="4 urgently needed" count="24" pc="#e8f0fb" sc="#599af3" />
                  <StatsBox heading="New Employess" stats="4 urgently needed" count="24" pc="#fdebf9" sc="#f17bd7" />
                </div>
                <GraphBox />
                <Announcement />
              </div>
              <div className="right ">
                <Activity />
                <Schedule />
              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default App
