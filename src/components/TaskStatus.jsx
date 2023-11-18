import React from 'react'
import { MdOutlineCancel } from 'react-icons/md'


const TaskStatus = ({ tab, setTab , setShowCloseAccountModal}) => {
  return (
    <div className='flex justify-between items-baseline w-full border-b-2'>
      <div className='flex gap-5 text-gray-400 m-[-1px]'>
        <button onClick={()=>setTab("pending")} className={`pb-3 px-3 font-medium ${tab === "pending" && "text-blue-600 border-b-2 border-b-blue-600"}`}>Pending</button>
        <button onClick={()=>setTab("completed")} className={`pb-3 px-3 font-medium ${tab === "completed" && "text-blue-600 border-b-2 border-b-blue-600"}`}>Completed</button>
      </div>

      <button onClick={()=>setShowCloseAccountModal(true)} className='flex focus:border-black items-center gap-2 text-red-500 border-2 border-red-500 text-sm px-2.5 py-1.5 rounded-md font-medium bg-red-600 bg-opacity-10 shadow-md'>
        <MdOutlineCancel />
        <span>Close account</span>
      </button>
    </div>
  )
}

export default TaskStatus