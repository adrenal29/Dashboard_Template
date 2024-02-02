import React,{useState} from 'react'
import { Icon } from '@iconify/react'
import "../App.css"
const SidebarIcon = () => {
    const [active,setActive]=useState(0);
  return (
    <div className=''> 
        <ul className='flex flex-col mt-5 items-center'>
                    <li className='flex items-center mb-4'  style={{color:active==0?'red':'black'}} onClick={()=>setActive(0)}>
                        <Icon icon="material-symbols:dashboard" className='' />
                       
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==1?'red':'black'}} onClick={()=>setActive(1)}>
                        <Icon icon="ic:baseline-people" className='' />
                       
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==2?'red':'black'}} onClick={()=>setActive(2)}>
                        <Icon icon="uil:calender" className='' />
                        
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==3?'red':'black'}} onClick={()=>setActive(3)}>
                        <Icon icon="clarity:employee-line" className='' />
                       
                    </li>
                    <li className='flex items-center mb-4'  style={{color:active==4?'red':'black'}} onClick={()=>setActive(4)}>
                        <Icon icon="mingcute:department-fill" className='' />
                        
                    </li>
                </ul>
    </div>
  )
}

export default SidebarIcon