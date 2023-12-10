import React from 'react'
import'./Pokemon.css'
function Pokemon({pokemon}) {
  const typePokemon = {
    normal: "#a8a878",
    fire: "#f05030",
    water: "#6890f0",
    electric: "#f8d030",
    grass: "#78c850",
    ice: "#98d8d8",
    fighting: "#903028",
    poison: "#a040a0",
    ground: "#e0c068",
    flying: "#a890f0",
    psychic: "#f85888",
    bug: "#68a090",
    rock: "#b8a038",
    ghost: "#705898",
    dragon: "#7038f8",
    dark: "#705848",
    steel: "#b8b8d0",
    fairy: "#a8b820"
  };
  const capitalize = (str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const name = capitalize(pokemon.name)
  
  return (
    <div className='card-pokemon'>
      <h1 className='name-pokemon'>{name}</h1>
        <img className='sprite-pokemon' src={pokemon.sprites.front_default} alt={pokemon.name} />
        <div className='types'>
            {pokemon.types.map((tipo) => (
              <div className='types-name' style={{backgroundColor: typePokemon[tipo.type.name]}}>
                {capitalize(tipo.type.name)}
              </div>
            ))}
          </div>
    </div>
  )
}

export default Pokemon