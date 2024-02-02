import React from 'react'
import { Icon } from '@iconify/react'
const Menu = ({handleClick}) => {
    return (
        <div onClick={()=>handleClick()}>
        <div className=" flex align-center p-4 " >
            <img src="./VasitumLogo.png" alt="" className='h-10 w-10' />
            <h1 className='text-5xl'>Vasitum</h1>
        </div>
        <div className="pl-8 mt-10 ">
            <h1 className='text-2xl'>Main Menu</h1>
            <ul className='flex flex-col mt-5 text-4xl'>
                <li className='flex items-center mb-4'>
                    <Icon icon="material-symbols:dashboard" className='mr-8 icon text-2xl' />
                    <h2>Dashboard</h2>
                </li>
                <li className='flex items-center mb-4'>
                    <Icon icon="ic:baseline-people" className='mr-8 icon text-2xl' />
                    <h2>Recruitment</h2>
                </li>
                <li className='flex items-center mb-4'>
                    <Icon icon="uil:calender" className='mr-8 text-2xl ' />
                    <h2>Schedule</h2>
                </li>
                <li className='flex items-center mb-4 '>
                    <Icon icon="clarity:employee-line" className='mr-8 icon text-2xl' />
                    <h2>Employee</h2>
                </li>
                <li className='flex items-center mb-4'>
                    <Icon icon="mingcute:department-fill" className='mr-8 icon text-2xl' />
                    <h2>Department</h2>
                </li>
            </ul>
            <h1 className='mt-10 text-2xl'>Other</h1>
            <ul className='mt-5 text-4xl'>
                <li className='mb-4 flex items-center'>
                    <Icon icon="mingcute:headphone-line" className='mr-8 icon text-2xl' />
                    <h2>Support</h2>
                </li>
                <li className='mb-4 flex items-center'>
                    <Icon icon="material-symbols:settings" className='mr-8 icon text-2xl' />
                    <h2>Settings</h2>
                </li>

            </ul>
        </div>
    </div>
  )
}

export default Menu