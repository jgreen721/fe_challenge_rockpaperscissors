import React from 'react'
import "./RulesBtn.css"

const RulesBtn = ({showRules,setShowRules}) => {
  return (
    <button onClick={()=>setShowRules(!showRules)} className="btn rules-btn">{showRules ? 'Hide' : 'Rules'}</button>
  )
}

export default RulesBtn