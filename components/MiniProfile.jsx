import React from 'react'
import profile from "../assets/profile.jpg";
const MiniProfile = () => {
  return (
    <div className='flex justify-between mt-8'>
        <div className='flex items-center'>
            <div className='w-14 h-14'>
                <img src={profile.src} alt='' className='rounded-full'/>
            </div>
            <div className='ml-4'>
            <p className="text-sm font-semibold">quang_minh30</p>
                <p className='text-gray-400 text-[16px]'>Minh Bui</p>
            </div>
        </div>

        <button className="text-xs font-semibold text-[#0095f6]">Switch</button>
    </div>
  )
}

export default MiniProfile