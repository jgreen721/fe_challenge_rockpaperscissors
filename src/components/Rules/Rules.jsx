import React from 'react'
import { ChoiceBtn } from '..'
import "./Rules.css"

const Rules = ({showRules,setShowRules,spockVersion}) => {
  const moves = [
    {id:1,move:"paper",icon:"./images/icon-paper.svg",background:"rules-bg"},
    {id:2,move:"scissors",icon:"./images/icon-scissors.svg",background:"rules-bg"},
    {id:3,move:"rock",icon:"./images/icon-rock.svg",background:"rules-bg"}
  ]
  return (
    <div className={showRules ? "rules-card" : "rules-card hide-rules"}>
      <div className="top-rules-row">
      <h1 className="rules-h1">RULES</h1>
    <img onClick={()=>setShowRules(false)} className="icon-close" src="./images/icon-close.svg" alt="" />
</div>
      <div className="rules-flow-chart-div">
       
        <img src={spockVersion ? "./images/image-rules-bonus.svg" : "./images/image-rules.svg"} alt="" />
      </div>

    </div>
  )
}

export default Rules