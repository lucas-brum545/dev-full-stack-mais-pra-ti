
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import NewsCard from '../components/NewsCard/NewsCard'
import Footer from '../components/Footer/Footer'
import {noticias} from '../data/noticias'
import './App.css'

function App() {
  const [tema,setTema] = useState(() => {
    return localStorage.getItem('tema') || 'light'
  })
  const [manchete, ...demais] = noticias

  function alterarTema(){
    setTema(t => (t === 'light' ? 'dark' : 'light'))
  }
  // configurar para que tema seja a cor do sistema operacional do usuário
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (mediaQuery.matches) {
      setTema('dark')
    } else {
      setTema('light')
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema)
    localStorage.setItem('tema', tema)
  }, [tema])


  return (
    <>
      <Header tema = {tema} aoAlternarTema={alterarTema}/>

      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </>
  );
}

export default App
