import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'

function App() {
  const[searchPokemon, setSearchPokemon] = useState("")
  return (
    <>
      <NavBar/>
      <Search searchPokemon={searchPokemon} setSearchPokemon ={setSearchPokemon} />

    </>
  )
}

export default App
