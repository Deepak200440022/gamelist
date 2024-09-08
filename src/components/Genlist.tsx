import { useEffect, useState } from "react";
import Globalapi from "../pages/services/Globalapi";

function Genlist({gen}:any) {
    const [genlist, setGenlist] = useState([]);
    const [activeindex, setActiveindex] = useState(0);
    useEffect(() => {
        list();
    }, [])

    const list = () => {
        Globalapi.getGenreList.then((resp) => {
            console.log(resp.data.results)
            setGenlist(resp.data.results);
        })
    }
    return (
        <div className="mr-8">
            <h2 className="text-[35px] font-bold dark:text-white">Genre</h2>
            {
                genlist.map((item, index) => (
                    <div onClick={()=>{setActiveindex(index);gen(item.id,item.name)}} className={`flex item items-center gap-4 mb-3 cursor-pointer
                hover:bg-gray-300 group hover:dark:bg-gray-700 mr-4 rounded-lg p-2 ${activeindex==index?"bg-gray-300 dark:bg-gray-700 ":null}`} >
                        <img src={item.image_background}
                            className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-110 transition-all ease-out duration-300 ${activeindex==index?"scale-110":null}`} />
                        <h3 className={`text-[18px] dark:text-white group-hover:font-bold transition-all ease-out duration-300 ${activeindex==index?"font-bold":null}`}>{item.name}</h3>
                    </div>
                ))
            }
        </div>
    )
}
export default Genlist