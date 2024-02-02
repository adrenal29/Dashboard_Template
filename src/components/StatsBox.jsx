import React from 'react'
import '../App.css'
const StatsBox = ({heading,count,stats,pc,sc}) => {
  return (
    <div className='flex flex-col rounded-lg p-2 pl-6 pr-6 m-2 mt-1 statsBox' style={{backgroundColor:pc,minWidth:'30%'}}>
    <h2 className='font-semibold mb-1' >{heading}</h2> 
    <h2 className='text-4xl font-semibold mb-1'>{count}</h2> 
    <h2 className=' font-semibold mb-1' style={{color:sc}}>{stats}</h2> 
    </div>
  )
}

export default StatsBox