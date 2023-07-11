import { useState, useRef } from 'react'
import {Header,RulesBtn,ChoiceBtn,Rules,Results,RegularVersion,AdvancedVersion} from "./components"
import './App.css'

function App() {
 
  const moves = [
    {id:1,move:"paper",icon:"./images/icon-paper.svg",background:"paper-bg"},
    {id:2,move:"scissors",icon:"./images/icon-scissors.svg",background:"scissors-bg"},
    {id:3,move:"rock",icon:"./images/icon-rock.svg",background:"rock-bg"},
    {id:4,move:"lizard",icon:"./images/icon-lizard.svg",background:"lizard-bg"},
    {id:5,move:"spock",icon:"./images/icon-spock.svg",background:"spock-bg"}
  ]
  const [showRules,setShowRules] = useState(false);
  const [score,setScore] = useState(0)
  const [playerMove,setPlayerMove] = useState("");
  const [cpuMove,setCpuMove] = useState("");
  const [playerWins,setPlayerWins] = useState()
  const [spockVersion,setSpockVersion] = useState(false)

 
 



  const handlePlayerMove=(playermove)=>{
      console.log("PlayerMove",playermove);
      let randomNum = Math.random() * 3 | 0;
      let cpuMove = moves[randomNum].move
      setCpuMove(cpuMove);
      setPlayerWins(determineWinner(playermove,cpuMove));
      setPlayerMove(playermove);
    }

  const determineWinner=(playerMove,cpuMove)=>{
    let playerWins;
    if(playerMove == "paper" && cpuMove == "rock")playerWins = true
    if(playerMove == "paper" && cpuMove == "scissors")playerWins = false
    if(playerMove == "rock" && cpuMove == "paper")playerWins = false
    if(playerMove == "rock" && cpuMove == "scissors")playerWins = true
    if(playerMove == "scissors" && cpuMove == "paper")playerWins = true
    if(playerMove == "scissors" && cpuMove == "rock")playerWins = false;
    if(playerMove == cpuMove){
      console.log("TIEEE")
      playerWins = null;
    }
  
    return playerWins;
  }




  const handleGameReset=()=>{
    setPlayerMove("");
    setCpuMove("");
    handleChangeScore();

  }


  const handleChangeScore=()=>{
    if(playerWins == true)setScore(score=>score+1);
    if(playerWins == false)setScore(score=>score-1);
  }

  return (
    <div className="app">
      <Header spockVersion={spockVersion} score={score}/>
      <div className="choices-container">
        {playerMove ? <Results playerWins={playerWins} handleChangeScore={handleChangeScore} handleGameReset={handleGameReset} playerMove={playerMove} cpuMove={cpuMove}/> :
        
        <>
        {spockVersion ?  
              <AdvancedVersion handlePlayerMove={handlePlayerMove}/>

        :
        <RegularVersion handlePlayerMove={handlePlayerMove}/>
        // <div className="choices-content">
        // <div className="choice-row">
        //   <div  className="choice-column">
        //   <ChoiceBtn handlePlayerMove={handlePlayerMove} btnData={moves[0]}/>
        //   <div className="line line-top"></div>
        //   </div>
        //   <div  className="choice-column">
        //   <ChoiceBtn handlePlayerMove={handlePlayerMove}  btnData={moves[1]}/>
        //   <div className="line line-left"></div>
        //   </div>
        // </div>

        // <div className="choice-row">
        //   <div  className="choice-column">
        //   <ChoiceBtn handlePlayerMove={handlePlayerMove}  btnData={moves[2]}/>
        //   <div  className="line line-right"></div>

        //   </div>
        //   </div>
        
        // </div>
}
        </>



}
      </div>
      <Rules spockVersion={spockVersion} setShowRules={setShowRules} showRules={showRules}/>
      <div className="rules-btn-row">
      <button onClick={()=>setSpockVersion(!spockVersion)} className="new-version-btn">Play a <em>{spockVersion ? 'classic' : 'new'}</em> Version!</button>
      <RulesBtn showRules={showRules} setShowRules={setShowRules}/>
      </div>

    </div>
  )
}

export default App
