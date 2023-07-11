import React, {useRef} from 'react'
import "./ChoiceBtn.css"

const ChoiceBtn = ({handlePlayerMove,btnData}) => {
  const btnRef = useRef();


  const handleBtnPress=()=>{
    if(btnRef.current.classList.contains('spin-btn'))return;
    btnRef.current.classList.add("spin-btn")
    setTimeout(()=>{
      btnRef.current.classList.remove("spin-btn");
      handlePlayerMove(btnData.move);

    },2000);
  }
  return (
    <button onClick={handleBtnPress} ref={btnRef} className={`choice-btn ${btnData.background}`}>
        {/* <div className={`choice-bg-div ${btnData.background}`}> */}
            <div className="choice-icon-div">
                <img className="choice-icon" src={btnData.icon} alt="icon" />
            </div>
        {/* </div> */}
    </button>
  )
}

export default ChoiceBtn