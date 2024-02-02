import React from 'react'
import "../App.css"
const Activity = () => {
    return (
        <>
            <div className="rounded-lg activity">
                <div className="activityHead m-4 ml-2 mr-2 mt-12 rounded-lg">
                    <h2 className='text-white p-4 pt-2'>Recently Activity</h2>
                    <div className="activityBody p-4 pt-2 rounded-lg">
                        <h2 className='p-4 pt-2 text-white pb-1 text-xs'>10:40 AM , Friday 10 Sept 2021</h2>
                        <h2 className='text-white p-4 text-xl pt-0 pb-1'>You posted a new Job</h2>
                        <h2 className='text-white p-4 text-xs pt-1'>Kindly check requirements and terms to make sure everything is right</h2>
                        <div className="activityBottom flex justify-between p-3">
                            <h2 className='text-white'>Today you make 12 activity</h2>
                            <button className='bg-red-500  pr-3 pl-3 text-white rounded' style={{padding:'2%'}}>See all activity</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Activity