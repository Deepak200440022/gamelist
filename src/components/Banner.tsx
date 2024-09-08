import React, { useEffect } from 'react'

function Banner({banner}) {
    // useEffect(()=>{
    //     console.log("banner", banner)
    // })
  return (
    <div className='relative '>
        <div className='absolute bottom-0 p-5
         bg-gradient-to-t from-slate-900 to-transparent w-full '>
        <h2 className='font-bold text-[24px] text-black dark:text-white'>{banner.name}</h2>
        <button className='bg-blue-500 text-white px-2 p-1 rounded-md'>Get now</button>
        </div>
        <div className='h-full'>
            <img src={banner.background_image}
            className='object-cover rounded-xl w-full md:h-[320px] '/>
        </div>
    </div>
  )
}

export default Banner