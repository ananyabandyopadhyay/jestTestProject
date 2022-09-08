import { useState } from "react";
import style from "./style.module.css"



function Addition() {
    const [firstNumber, setFirstNumber] = useState(1)
    const [secondNumber, setSecondNumber] = useState(1)
    const [result, setResult] = useState("")

    const onChangeText = (e) => {
        if(e.target.value){
            setFirstNumber(e.target.value)
        } else setFirstNumber("")
    }

    const onChangeSecondText = (e) => {
        if(e.target.value){
            setSecondNumber(e.target.value)
        } else setSecondNumber("")
    }
     const onAddition = (a,b) => {
      setResult(Number(a) + Number(b))
    }

  return (
    <div className={style.addition}>
      First Number : 
      <input type="number" data-testid="firstInput" value={firstNumber} onChange={(e)=>onChangeText(e)}/>
      <br />
      <br />

      Second Number : 
      <input type="number" data-testid="secondInput" value={secondNumber}onChange={(e)=>onChangeSecondText(e)}/>
      <br />
      <br />

      <button onClick={()=>onAddition(firstNumber , secondNumber)} data-testid="addButton"> Add </button>
      <br /> <br />
      {result}
    </div>
  );
}

export default Addition;
