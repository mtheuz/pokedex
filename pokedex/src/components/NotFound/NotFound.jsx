import React from 'react'
import './NotFound.css'
function NotFound({searchResult}) {
  return (
    <div>{!searchResult ? 
    <div className='wrapper-notfound'>
        <p>Pokemon não encontrado!</p>
        <img src="src\assets\img\pikachu-detetive.png" alt="" />
    </div> : true}
    </div>
  )
}

export default NotFound