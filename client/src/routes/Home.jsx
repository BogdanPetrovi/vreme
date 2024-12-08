import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='box box-home'>
      <Link to={'/senzor/1'} className='card'>
        <h2>Senzor 1</h2>
      </Link>
      <Link to={'/senzor/2'} className='card'>
        <h2>Senzor 2</h2>
      </Link>
      <Link to={'/senzor/3'} className='card'>
        <h2>Senzor 3</h2>
      </Link> 
    </div>
  )
}

export default Home
