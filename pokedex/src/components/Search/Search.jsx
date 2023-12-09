import React, { useState } from 'react'
import './Search.css'
import { searchPokemon } from '../../api/api'
function Search({setSearchResult}) {
  const[searchPokemonInput, setsSearchPokemonInput] = useState("ditto")

  const buttonHandler = async () =>{
    if(searchPokemonInput){
      const pokemon = searchPokemonInput.toLowerCase()
      const result = await searchPokemon(pokemon)
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