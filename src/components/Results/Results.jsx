import React, {useEffect,useState} from 'react'
import "./Results.css"
import {ChoiceBtn} from ".."

const Results = ({playerMove,cpuMove,handleGameReset,playerWins,handleChangeScore}) => {
    const moves = [
        {id:1,move:"paper",icon:"./images/icon-paper.svg",background:"paper-bg",winningColor:"blue"},
        {id:2,move:"scissors",icon:"./images/icon-scissors.svg",background:"scissors-bg",winningColor:"yellow"},
        {id:3,move:"rock",icon:"./images/icon-rock.svg",background:"rock-bg",winningColor:"red"}
      ]
      const [hasScored,setHasScored] = useState(false)


 
  return (
    <div className="results-container">
        <div className="results-column no-pointer">
            <h3 className="results-h3">You Picked</h3>
            {/* <h3 className="selected-choice-h3">{playerMove}</h3> */}
            <div style={{"--color":moves[moves.findIndex(m=>m.move == playerMove)].winningColor}} className={playerWins ? "choice-btn-silhouette victory" : "choice-btn-silhouette"}>
                <div style={{"--i":".25s"}} className="results-choice-btn-div">
                <ChoiceBtn btnData={moves[moves.findIndex(m=>m.move == playerMove)]}/>
                </div>
            </div>
        </div>
        <div className="results-column">
            <h1 className="result-header">{playerWins ? "You Win!" : playerWins == null ? "Players Tied!?" : "You Lose"}</h1>
            <button onClick={handleGameReset} className="play-again-btn">Play Again</button>
        </div>
        <div className="results-column no-pointer">
            <h3 className="results-h3">The House Picked</h3>
            {/* <h3 className="selected-choice-h3">{cpuMove}</h3> */}
            <div className="choice-btn-silhouette">
                <div style={{"--i":"1s"}} className="results-choice-btn-div">
                <ChoiceBtn btnData={moves[moves.findIndex(m=>m.move == cpuMove)]}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Results