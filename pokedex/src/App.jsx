import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Search from './components/Search/Search'

function App() {
  const[searchResult, setSearchResult] = useState([])
  return (
    <>
      <NavBar/>
      <Search  setSearchResult = {setSearchResult} />
    </>
  )
}

export default App
