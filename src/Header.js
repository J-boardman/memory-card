import React from 'react'
import pokeball from './img/mega-ball.png'

const Header = (props) => {
  const {score, highScore} = props.stats;
  return (
    <header className=' w-screen h-24 bg flex text-center justify-evenly items-center bg-[color:#d988ff] mb-4 px-2 text-2xl shadow-xl'>
      <p>Current Score: {score}</p>
      <img src={pokeball} alt="pokeball" className=' h-20'/>
      <p>High Score: {highScore}</p>
    </header>
  )
}

export default Header