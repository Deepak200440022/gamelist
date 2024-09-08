import axios from "axios"


const key = "f287d1040d394c5fae384e511c6126ed"
const axiosCreate = axios.create({
    baseURL:"https://api.rawg.io/api"
})
const getGenreList = axiosCreate.get("/genres?key="+key)
const getAllGames = axiosCreate.get("/games?key="+key)
const getGamesbygenre =(id)=> axiosCreate.get("/games?key="+key+"&genres="+id)

export default {
    getGenreList,
    getAllGames,
    getGamesbygenre
}