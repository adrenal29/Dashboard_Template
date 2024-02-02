import React,{useState} from 'react'
import { Icon } from '@iconify/react'
import '../App.css'
const Sidebar = () => {
    const [active,setActive]=useState(0);
    return (
        <>
            <div className="logo flex align-center">
                <img src="./VasitumLogo.png" alt="" className='h-10 w-10' />
                <h1 className='logoHead'>Vasitum</h1>
            </div>
            <div className="pl-8 mainMenu mt-10">
                <h1 >Main Menu</h1>
                <ul className='flex flex-col mt-5'>
                    <li className='flex items-center mb-4' style={{color:active==0?'red':'black'}} onClick={()=>setActive(0)}>
                        <Icon icon="material-symbols:dashboard" className='mr-8 icon' />
                        <h2 >Dashboard</h2>
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==1?'red':'black'}} onClick={()=>setActive(1)}>
                        <Icon icon="ic:baseline-people" className='mr-8 icon' />
                        <h2>Recruitment</h2>
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==2?'red':'black'}} onClick={()=>setActive(2)}>
                        <Icon icon="uil:calender" className='mr-8 icon' />
                        <h2>Schedule</h2>
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==3?'red':'black'}} onClick={()=>setActive(3)}>
                        <Icon icon="clarity:employee-line" className='mr-8 icon' />
                        <h2>Employee</h2>
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==4?'red':'black'}} onClick={()=>setActive(4)}>
                        <Icon icon="mingcute:department-fill" className='mr-8 icon' />
                        <h2>Department</h2>
                    </li>
                </ul>
                <h1 className='mt-10'>Other</h1>
                <ul className='mt-5'>
                    <li className='mb-4 flex items-center'  style={{color:active==5?'red':'black'}} onClick={()=>setActive(5)}>
                        <Icon icon="mingcute:headphone-line" className='mr-8 icon' />
                        <h2>Support</h2>
                    </li>
                    <li className='mb-4 flex items-center'  style={{color:active==6?'red':'black'}} onClick={()=>setActive(6)}>
                        <Icon icon="material-symbols:settings" className='mr-8 icon' />
                        <h2>Settings</h2>
                    </li>

                </ul>
            </div>
            <div className="secMenu">

            </div>
        </>
    )
}

export default Sidebar