import React, { useEffect } from 'react'

function Trending({games}) {
  const x = Math.floor(Math.random() * (games.length-4));
  // useEffect(()=>{
  //   console.log(games)
  // },[])
  return (
    <div className='mt-5 hidden md:block'>
      <h2 className='font-bold text-[30px] text-black dark:text-white'>Trending...</h2>
      <div className='hidden md:grid lg:grid-cols-4 gap-4 md: grid-cols-3 mt-5 '>
      {games.map((item,index)=>x<=index&&index<x+4&&(
        <div className='rounded-lg p-2  hover:bg-gray-300  group hover:dark:bg-gray-700  group hover:scale-110 transition-all ease-in-out duration-300'>
          <img src={item.background_image} 
          className='h-[270px] object-cover rounded-t-lg'/>
          <h2 className='text-[20px] dark:text-white'>{item.name}</h2>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Trending