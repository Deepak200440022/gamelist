import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import { ThemeProvider } from './context/Theme'



function App() {
  const [mode,setmode]=useState("light")
  useEffect(()=>{
    setmode(localStorage.getItem('mode') || 'light')
  },[])
  return (
  <ThemeProvider>
     <div className={`${mode} ${mode=='dark'?'bg-black':null} h-full`}>
      <Header />
      <Home />
    </div>
  </ThemeProvider>
  )
}

export default App
