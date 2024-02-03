import React from 'react'
import '../App.css'
import { Icon } from '@iconify/react'
const Topbar = ({handleMenu}) => {
    return (
        <>
            <div className="flex p-5 pt-2 pb-2 topbar justify-between w-full" >
            <Icon icon="material-symbols:menu"  style={{color: 'gray',fontSize:"2vh"}} className="md:hidden hamburger mt-2" onClick={()=>handleMenu()}/>
                <div className="flex items-center border  search justify-between">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="px-4 py-2  focus:outline-none "
                    />
                    <div className="p-2  rounded-r-md">
                        <Icon icon="material-symbols:search" />
                    </div>
                </div>
                <div className="profile flex items-center ">
                    <Icon icon="carbon:notification-new" style={{ color: 'grey',  }} className='mr-4' />
                    <Icon icon="mdi:message" style={{ color: 'grey' }} className='mr-4' />
                    <Icon icon="carbon:user-avatar-filled" style={{ color: 'grey' }} className='mr-4' />
                    <h2 className='font-semibold user' style={{fontSize:'2.3vh'}}>Admirra John</h2>
                </div>

            </div>
            <hr />

        </>
    )
}

export default Topbar