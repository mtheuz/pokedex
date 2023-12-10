import React from 'react';
import Pokemon from '../Pokemon/Pokemon';
import './Pokedex.css'
function Pokedex({ pokemons }) {
  return (
    <div className='wrapper-pokedex'>
      {pokemons.map((pokemon) => (
        <Pokemon pokemon={pokemon}/>
      ))}
    </div>
  );
}

export default Pokedex;