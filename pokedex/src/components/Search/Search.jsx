import React, { useState } from 'react'
import './Search.css'
function Search({setSearchPokemon, searchPokemon}) {
  return (
    <div className='wrapper'>

        <input 
        className='search-bar'
        value={searchPokemon} 
        placeholder='Digite o nome do pokemon' 
        type="text" 
        onChange={(e) => setSearchPokemon(e.target.value)}/>

        <button className='search-button' type="button">Pesquisar</button>
    </div>
  )
}

export default Search