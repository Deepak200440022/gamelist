import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { Themecontext } from './context/Theme'



function App() {
  const [mode,setmode]=useState("light")
  useEffect(()=>{
    setmode(localStorage.getItem('mode')?localStorage.getItem('mode'):'light')
  },[])
  return (
  <Themecontext.Provider value={{mode,setmode}}>
     <div className={`${mode} ${mode=='dark'?'bg-black':null} h-full`}>
      <Header />
      <Home />
    </div>
  </Themecontext.Provider>
  )
}

export default App
