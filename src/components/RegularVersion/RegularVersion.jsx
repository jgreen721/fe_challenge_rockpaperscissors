import React from 'react'
import {ChoiceBtn} from "../"
import "./RegularVersion.css"

const RegularVersion = ({handlePlayerMove}) => {
    const moves = [
        {id:1,move:"paper",icon:"./images/icon-paper.svg",background:"paper-bg"},
        {id:2,move:"scissors",icon:"./images/icon-scissors.svg",background:"scissors-bg"},
        {id:3,move:"rock",icon:"./images/icon-rock.svg",background:"rock-bg"},
        // {id:4,move:"lizard",icon:"./images/icon-lizard.svg",background:"lizard-bg"},
        // {id:5,move:"spock",icon:"./images/icon-spock.svg",background:"spock-bg"}
      ]
  return (
           <div className="choices-content">
        <div className="choice-row">
          <div  className="choice-column">
          <ChoiceBtn handlePlayerMove={handlePlayerMove} btnData={moves[0]}/>
          <div className="line line-top"></div>
          </div>
          <div  className="choice-column">
          <ChoiceBtn handlePlayerMove={handlePlayerMove}  btnData={moves[1]}/>
          <div className="line line-left"></div>
          </div>
        </div>

        <div className="choice-row">
          <div  className="choice-column">
          <ChoiceBtn handlePlayerMove={handlePlayerMove}  btnData={moves[2]}/>
          <div  className="line line-right"></div>

          </div>
          </div>
        
        </div>
  )
}

export default RegularVersion