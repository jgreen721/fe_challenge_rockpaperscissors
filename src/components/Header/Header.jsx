import React from 'react'
import "./Header.css"

const Header = ({score,spockVersion}) => {
  return (
    <header className="header">
        <div className="header-title-div">
            <h1 className="rocks-h1 header-h1">Rock</h1>
            <h1 className="paper-h1 header-h1">Paper</h1>
            <h1 className="scissors-h1 header-h1">Scissors</h1>
            {spockVersion && 
            <>
            <h1 className="scissors-h1 header-h1">Lizard</h1>
            <h1 className="scissors-h1 header-h1">Spock</h1>
            </>
}
        </div>
        <div className="score-div">
            <h3 className="score-h3">Score</h3>
            <h1 className="score-h1">{score}</h1>
        </div>
    </header>
  )
}

export default Header