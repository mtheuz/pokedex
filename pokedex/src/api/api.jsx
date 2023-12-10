export  const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log('erro message:', error)
        if(error.message.includes('Not Found')){
            return false
        }
    }
}
export  const getAllPokemons = async (limit= 48, offset=0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}.`
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log('erro message:', error)
        if(error.message.includes('Not Found')){
            return false
        }
    }
}
export  const getPokemon = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()

    } catch (error) {
        console.log('erro message:', error)
        if(error.message.includes('Not Found')){
            return false
        }
    }
}