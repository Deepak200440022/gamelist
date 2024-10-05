
import axios from "axios"

 const key = import.meta.env.VITE_NEXT_API_KEY
const axiosCreate = axios.create({
    baseURL:"https://api.rawg.io/api"
})
const getGenreList = axiosCreate.get("/genres?key="+ key1)
const getAllGames = axiosCreate.get("/games?key="+key)
const getGamesbygenre =(id:any)=> axiosCreate.get("/games?key="+key+"&genres="+id)

export default {
    getGenreList,
    getAllGames,
    getGamesbygenre
}