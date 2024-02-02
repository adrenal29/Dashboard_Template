import React from 'react'
import { Icon } from '@iconify/react'
import "../App.css"
const Schedule = () => {
  return (
    <>
    <div className='border border-500-gray rounded m-2 sch'>
    <div className=' p-5 pt-4 m-2 pb-2 '>
            <div className="scheduleHead flex justify-between mb-2 flex-wrap" >
                <h2 className='text-lg font-semibold'> Upcoming Schedules</h2>
                <select name="" id="" style={{ outline: 'none' }}>
                    <option value="Today,13 Sept 2021">Today,13 Sept 2021</option>
                </select>
            </div>
            <div className="scheduleBody">
                <h2 className='text-sm text-gray-400 pb-2'>Priority</h2>
                <div className="panel border border-500-gray rounded p-4 mb-1 flex justify-between">
                    <div className="panelContent ">
                        <h3 className='text-sm font-semibold'> Review candidate application</h3>
                        <h3 className='text-sm'>5 minutes ago</h3>
                    </div>
                    <div className="panelOptions flex items-center">
                        
                        <Icon icon="mi:options-horizontal" style={{fontSize:'3vh'}} />
                    </div>
                </div>
                <h2 className='text-sm text-gray-400 pb-2'>Other</h2>
                <div className="panel border border-500-gray rounded p-4 mb-1 flex justify-between">
                    <div className="panelContent ">
                        <h3 className='text-sm font-semibold'> Outing schedule for every department</h3>
                        <h3 className='text-sm'>5 minutes ago</h3>
                    </div>
                    <div className="panelOptions flex items-center">
                       
                        <Icon icon="mi:options-horizontal" style={{fontSize:'3vh'}} />
                    </div>
                </div>
            </div>
           
        </div>
         <hr />
         <h2 className='text-center text-red-400 mt-2 pb-2'>Create a new schedule</h2>
         </div>
         </>
  )
}

export default Schedule