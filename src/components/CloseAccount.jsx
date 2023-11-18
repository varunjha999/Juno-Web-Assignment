import React, { useEffect, useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'

const CloseAccount = ({ setShowCloseAccountModal }) => {
  const [activateSubmit, setActivateSubmit] = useState(false);
  const [formData, setFormdata] = useState({
    email: "",
    fileUAR: false,
    reason: "",
    note: "",
    chargeClosureFee: false
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  }

  useEffect(() => {
    if (formData.email && formData.reason && formData.note) {
      setActivateSubmit(true);
    }
  }, [formData]);


  return (
    <div className='inset-0 fixed bg-black bg-opacity-70 z-50 flex items-center justify-center'>
      <div className='w-[30rem] bg-white p-5 rounded-lg'>
        <div className='w-full flex items-center justify-between'>
          <h3 className='text-2xl font-semibold'>Close Account</h3>
          <button onClick={() => setShowCloseAccountModal(false)}>
            <MdOutlineCancel className='text-black text-2xl cursor-pointer' />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='mt-5'>
            <label className='text-gray-400' htmlFor="email">Email</label>
            <input value={formData.email} onChange={handleChange} className='w-full border-2 border-gray-300 bg-white outline-none px-3 py-1.5 rounded-md mt-1' type="email" name="email" id="email" />
          </div>

          <div className='py-5 flex items-center'>
            <label className='text-black mr-6' htmlFor="email">Want to file UAR</label>
            <input value={formData.fileUAR} onChange={handleChange} type="radio" name="UAR" id="yes" />
            <label className='text-black ml-2 mr-4' htmlFor="UAR">Yes</label>
            <input value={formData.fileUAR} onChange={handleChange} type="radio" name="UAR" id="no" />
            <label className='text-black ml-2' htmlFor="UAR">No</label>
          </div>

          <div className='flex w-full flex-col'>
            <label className='text-gray-400' htmlFor="reason">Reason</label>
            <select value={formData.reason} onChange={handleChange} className='w-full border-2 border-gray-300 bg-white outline-none px-3 py-1.5 rounded-md mt-1' name="reason" id="reason">
              <option value="">-- Select --</option>
              <option value="Flagging logistics triggered">Flagging logistics triggered</option>
            </select>
          </div>

          <div className='mt-5 flex flex-col w-full'>
            <label className='text-gray-400' htmlFor="note">Note</label>
            <textarea value={formData.note} onChange={handleChange} className='w-full border-2 border-gray-300 bg-white outline-none px-3 py-1.5 rounded-md mt-1 h-16' name="note" id="note" />
          </div>

          <div className='flex items-center justify-between pt-5'>
            <div>
              <input value={formData.chargeClosureFee} onChange={handleChange} type="radio" name="confirm" id="confirm" />
              <label className='text-black ml-2' htmlFor="confirm">Charge closure fee</label>
            </div>
            <button disabled={activateSubmit} type="submit" className={`bg-gray-200 hover:bg-blue-500 text-gray-800 px-16 py-2 rounded-md ${activateSubmit && "bg-blue-600 text-white"}`}>Close Account</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CloseAccount