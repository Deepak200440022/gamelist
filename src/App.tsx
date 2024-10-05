import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { ThemeProvider } from './context/Theme';

function App() {
  const [mode, setMode] = useState('light');



  useEffect(() => {
    setMode(localStorage.getItem('mode') || 'light');
  }, [setMode]);

  return (
    <ThemeProvider value={{ mode, setMode }}>
      <div className={`${mode} ${mode === 'dark' ? 'bg-black' : ''} h-full`}>
        <Header />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
