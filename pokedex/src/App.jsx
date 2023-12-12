import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Search from "./components/Search/Search";
import NotFound from "./components/NotFound/NotFound";
import { getAllPokemons, getPokemon } from "./api/api";
import Loading from "./components/Loading/Loading";
import Pokedex from "./components/Pokedex/Pokedex";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [allPokemons, setAllPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [activateSearch, setActivateSearch] = useState(false);
  const [page, setpage] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(30);
  const[offset,setOffset] = useState(0)
  const itemPage = 48;

  const onNextClick = () => {
    setpage(page + 1);
    setOffset(offset + 48)
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  const onPreviousClick = () => {

    setpage(page -1)
    if(offset != 0)
      setOffset(offset - 48)
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adiciona um efeito de rolagem suave
    });
  };

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const resultAllPokemons = await getAllPokemons(48, offset);
      const pokemonData = resultAllPokemons.results.map(async (pokemon) => {
        return await getPokemon(pokemon.url);
      });

      const resultPromisses = await Promise.all(pokemonData);
      setAllPokemons(resultPromisses);
      setLoading(false);
      setNumberOfPages(Math.ceil(resultAllPokemons.count / itemPage));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  return (
    <>
      <NavBar />
      <Search
        setSearchResult={setSearchResult}
        setLoading={setLoading}
        setActivateSearch={setActivateSearch}
      />
      <NotFound searchResult={searchResult} loading={loading} />
      {loading ? <Loading /> : false}
      {!activateSearch && !loading ? <Pokedex pokemons={allPokemons} /> : false}
      {!loading && searchResult ? (
        <Navigation
          page={page}
          numberOfPages={numberOfPages}
          onNextClick={onNextClick}
          onPreviousClick={onPreviousClick}
        />
      ) : (
        false
      )}
    </>
  );
}

export default App;
