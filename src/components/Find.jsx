import { BsSearch } from 'react-icons/bs'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { useState } from 'react'

const Find = () => {
  const [showReason, setShowReason] = useState(false);

  return (
    <div className='my-5 flex items-center gap-3'>
      <div className='relative'>
        <input className='bg-white border w-72 outline-none border-gray-200 pr-3 pl-10 py-1.5 rounded-md' placeholder='Search' type="search" name="search" id="search" />
        <BsSearch className=" text-gray-400 absolute left-3 top-0 mt-3 mr-4" />
      </div>

      <div className='flex items-center gap-3 text-sm font-medium'>
        <div className='relative'>
          <button onClick={()=>setShowReason(true)} className='bg-gray-200 flex items-center gap-3 text-gray-500 border-none px-3 py-1.5 rounded-md'>
            <span>Trigger reason</span>
            <MdOutlineKeyboardArrowDown />
          </button>

            {showReason && <div className='absolute right-0 w-44 mt-2 bg-white border-2 border-gray-200 shadow-md rounded-md'>
              <div className='flex items-start justify-start flex-col gap-2 p-3 w-full'>
                <button onClick={() => setShowReason(false)} className='hover:bg-purple-200 hover:text-gray-800 bg-opacity-60 px-3 py-1.5 text-left rounded-md w-full'>Hard flag</button>
                <button onClick={() => setShowReason(false)} className='hover:bg-purple-200 hover:text-gray-800 bg-opacity-60 px-3 py-1.5 text-left rounded-md w-full'>Temp flag</button>
                <button onClick={() => setShowReason(false)} className='hover:bg-purple-200 hover:text-gray-800 bg-opacity-60 px-3 py-1.5 text-left rounded-md w-full'>Restricted unflag</button>
                <button onClick={() => setShowReason(false)} className='hover:bg-purple-200 hover:text-gray-800 bg-opacity-60 px-3 py-1.5 text-left rounded-md w-full'>Un flag</button>
                <button onClick={() => setShowReason(false)} className='hover:bg-purple-200 hover:text-gray-800 bg-opacity-60 px-3 py-1.5 text-left rounded-md w-full'>Reviewed</button>
              </div>
            </div>}
        </div>
        <button className='bg-gray-200 flex items-center gap-3 text-gray-500 border-none px-3 py-1.5 rounded-md'>
          <span>Risk Level</span>
          <MdOutlineKeyboardArrowDown />
        </button>
      </div>
    </div>
  )
}

export default Find