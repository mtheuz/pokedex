import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import NotFound from './components/NotFound/NotFound'
import { getAllPokemons } from './api/api'

function App() {
  const[searchResult, setSearchResult] = useState([])
  const[allPokemons, setAllPokemons] = useState(" ")

  const fetchPokemons = async () =>{
    const resultAllPokemons = await getAllPokemons()
    console.log(resultAllPokemons)
    setAllPokemons(resultAllPokemons)
  }

  useEffect(()=>{
    fetchPokemons()
  },[])

  return (
    <>
      <NavBar/>
      <Search  setSearchResult = {setSearchResult} />
      <NotFound searchResult={searchResult}/>

      
    </>
  )
}

export default App
