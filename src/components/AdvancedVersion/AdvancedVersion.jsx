import React from 'react'
import "./AdvancedVersion.css"
import { ChoiceBtn } from '..'

const AdvancedVersion = () => {
    const moves = [
        {id:1,move:"paper",icon:"./images/icon-paper.svg",background:"paper-bg"},
        {id:2,move:"scissors",icon:"./images/icon-scissors.svg",background:"scissors-bg"},
        {id:3,move:"rock",icon:"./images/icon-rock.svg",background:"rock-bg"},
        {id:4,move:"lizard",icon:"./images/icon-lizard.svg",background:"lizard-bg"},
        {id:5,move:"spock",icon:"./images/icon-spock.svg",background:"spock-bg"}
      ]
  return (
    <div className="advanced-version-container">
        <div className="advanced-row">
        <div className="advanced-column">
            <ChoiceBtn btnData={moves[1]}/>
        </div>
        </div>
        <div className="long-row">
            <div className="advanced-column">
            <div className="advanced-line advanced-top-left-line"></div>

            <ChoiceBtn btnData={moves[4]}/>
            <div className="advanced-line advanced-bottom-left-line"></div>

            </div>

            <div className="advanced-column">
            <div className="advanced-line advanced-top-right-line"></div>

            <ChoiceBtn btnData={moves[0]}/>
            <div className="advanced-line advanced-bottom-right-line"></div>


            </div>
        </div>
        <div className="medium-row">
            <div className="advanced-column">

            <ChoiceBtn btnData={moves[3]}/>


            </div>
            {/* <div className="advanced-column"> */}
            <div className="advanced-line advanced-bottom-line"></div>

            {/* </div> */}
            <div className="advanced-column">

            <ChoiceBtn btnData={moves[2]}/>

            </div>
        </div>
    </div>
  )
}

export default AdvancedVersion