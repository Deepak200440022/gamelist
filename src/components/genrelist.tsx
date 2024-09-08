import React, { useEffect } from 'react'

function Genrelist({games}) {
    useEffect(()=>{
    },[])
  return (
    <div>
        <h2 className='font-bold mt-5 text-[35px] text-black dark:text-white'>{games.name}</h2>
        <div className='grid grid-cols-1 mt-5 md: grid-cols-2 lg:grid-cols-3 gap-6'>
        {
            games.list.map((item)=>(
                <div className='p-3 pb-7 h-full rounded-lg cursor-pointer  hover:bg-gray-300  group hover:dark:bg-gray-700 hover:scale-110 transition-all duration-200 ease-in-out'>
                    <img src={item.background_image} className='w-full h-80% 
                    object-cover rounded-xl'/>
                    <h2 className='text-[20px] font-bold text-black dark:text-white'>{item.name} 
                        <span className='p-1 ml-2 bg-green-100 text-green-800 rounded-md text-[15px] font-medium'> {item.metacritic}</span></h2>
                    <h2 className='text-[20px] text-gray-500 dark:text-gray-400'>⭐{item.rating} 💬{item.ratings_count} 🔥{item.suggestions_count}</h2>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default Genrelist;