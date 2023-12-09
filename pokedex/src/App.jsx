import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'
import NotFound from './components/NotFound/NotFound'

function App() {
  const[searchResult, setSearchResult] = useState([])
  return (
    <>
      <NavBar/>
      <Search  setSearchResult = {setSearchResult} />
      <NotFound searchResult={searchResult}/>

      
    </>
  )
}

export default App
