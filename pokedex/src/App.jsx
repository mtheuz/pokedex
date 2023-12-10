import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import NotFound from './components/NotFound/NotFound'
import { getAllPokemons, getPokemon } from './api/api'
import Loading from './components/Loading/Loading'
import Pokedex from './components/Pokedex/Pokedex'

function App() {
  const[searchResult, setSearchResult] = useState([])
  const[allPokemons, setAllPokemons] = useState([])
  const [loading, setLoading] = useState(false)

  

  const fetchPokemons = async () =>{
    try {
      setLoading(true)
      const resultAllPokemons = await getAllPokemons()
      const pokemonData = resultAllPokemons.results.map( async (pokemon)=> {
        return await getPokemon(pokemon.url)
  
      })
  
      const resultPromisses = await Promise.all(pokemonData)
      setAllPokemons(resultPromisses)
      setLoading(false)

    } catch (error) {
      console.log(error.message)
    }
   
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
      <Pokedex pokemons={allPokemons}/>
      
    </>
  )
}

export default App
