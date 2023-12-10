import React, { useState } from 'react'
import './Search.css'
import { searchPokemon } from '../../api/api'
function Search({setSearchResult, setLoading}) {
  const[searchPokemonInput, setsSearchPokemonInput] = useState("")

  const buttonHandler = async () =>{
    if(searchPokemonInput){
      const pokemon = searchPokemonInput.toLowerCase()
      setLoading(true)
      const result = await searchPokemon(pokemon)
      setLoading(false)
      console.log(result)
      setSearchResult(result)
      return
    }
      
    
  }
  return (
    <div className='wrapper'>

        <input 
        className='search-bar'
        value={searchPokemonInput} 
        placeholder='Digite o nome do pokemon' 
        type="text" 
        onChange={(e) => setsSearchPokemonInput(e.target.value)}/>
        <button className='search-button' type="button" onClick={buttonHandler}>Pesquisar</button>
    </div>
  )
}

export default Search