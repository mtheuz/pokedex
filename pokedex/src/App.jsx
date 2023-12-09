import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import NotFound from './components/NotFound/NotFound'
import { getAllPokemons } from './api/api'
import Loading from './components/Loading/Loading'

function App() {
  const[searchResult, setSearchResult] = useState([])
  const[allPokemons, setAllPokemons] = useState(" ")
  const [loading, setLoading] = useState(false)

  const fetchPokemons = async () =>{
    setLoading(true)
    const resultAllPokemons = await getAllPokemons()
    setAllPokemons(resultAllPokemons)
    setLoading(false)
    console.log(resultAllPokemons)
    
  }

  useEffect(()=>{
    fetchPokemons()
  },[])

  return (
    <>
      <NavBar/>
      <Search  setSearchResult = {setSearchResult} setLoading={setLoading}/>
      <NotFound searchResult={searchResult} loading={loading}/>
      {loading? <Loading/> : false}
      
    </>
  )
}

export default App
