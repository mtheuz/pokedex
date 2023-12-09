import React from 'react'
import ReactLoading from "react-loading";
import './Loading.css'
function Loading() {
  return (
    <div className='loading'><ReactLoading type='spinningBubbles' color="#263238" /></div>
  )
}

export default Loading