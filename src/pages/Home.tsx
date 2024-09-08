import { useEffect, useState } from "react"
import Genlist from "../components/Genlist"
import Globalapi from "./services/Globalapi"
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import Genrelist from "../components/genrelist";


function Home() {
  const [gamesList,setGamesList] =useState([]);
  const [genregames,setGenregames]= useState(
    {
      name:"",
      list:[]

  });
  useEffect(()=>{
    getAllGamesList();
    Getgamesbygenre(4,'Action');
  },[])
  const getAllGamesList = () =>{
    Globalapi.getAllGames.then((resp)=>{
      setGamesList(resp.data.results)
    })
  }
  const Getgamesbygenre = (id,name)=>{
    Globalapi.getGamesbygenre(id).then((resp)=>{
      setGenregames({name: name,list:resp.data.results});
    })
  }
  return (
    <div className='grid grid-cols-4 px-8 h-full'>
      <div className='hidden md:block'>
        <Genlist gen = {(gen,name)=>Getgamesbygenre(gen,name)} />
      </div>
      <div className='col-span-4 md:col-span-3'>
        {gamesList?.length>0&&genregames.list?.length>0?
        <div> 
          <Banner banner={gamesList[Math.floor(Math.random() * gamesList.length)]} />
          <Trending games = {gamesList}/>
          <Genrelist games={genregames}/>
        </div>
        :null}
      </div>
    </div>
  )
}

export default Home