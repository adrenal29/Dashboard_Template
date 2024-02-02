import React from 'react'
import "../App.css"
const GraphBox = () => {
    return (
        <div className='flex flex-wrap'>
            <div className="first " >
                <div className='flex rounded-lg p-2 pl-6 pr-6 m-2  border border-500-gray' style={{minHeight:'25vh'}}>
                    <div className="data w-1/2">
                    <h2 className='font-semibold mb-2 ' style={{ fontSize: '2.2vh' }}>Total Employess</h2>
                    <h2 className='text-4xl font-semibold mb-2 mt-5'>216</h2>
                    <h2 className=' font-semibold mb-2 mt-5 text-gray-400' >120 Men <br></br> 96 Women</h2>
                    </div>
                    <div className="fig p-5">
                            <img src="./Graph.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="sec" >
                <div className='flex rounded-lg p-2 pl-6 pr-6 m-2  border border-500-gray ' style={{minHeight:'25vh'}}>
                    <div className="data w-1/2">
                    <h2 className='font-semibold mb-2 ' style={{ fontSize: '2.2vh' }}>Total Employess</h2>
                    <h2 className='text-4xl font-semibold mb-2 mt-5'>24</h2>
                    <h2 className=' font-semibold mb-2 mt-5 text-gray-400' >6 Men <br></br> 10 Women</h2>
                    </div>
                    <div className="fig p-5">
                            <img src="./Graph.png" alt="" />
                    </div>
                </div>
            </div>
          

        </div>
    )
}

export default GraphBox