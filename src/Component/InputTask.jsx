import React, { useState } from "react";


export default function InputTask() {
    let [length, setLength] = useState(0)
    let [inputText, changeText] = useState("")

    //to create variable for the" too long","too short" length 
    let textLength = ""
    function AddInputT(){

        // To show Length 
        if (inputText.length > 0){

            let T =[...length, inputText]
            setLength(
                T
            );
        }
        console.log(length);
    }

    // To a change listener
    function nameChangeHandler(text) {
         setLength(
            text.length
        )
        changeText(
            text
        )
       
    }

    //to create either "too long" or "too short"
    if(length > 20){
       textLength =  "Too Long"
    } else{
        textLength = "Too Short"
    } 
    return (
        <>
            <div className="container"> 
                <div id="containerDiv">
                    <h1>Enter a Task: {inputText}</h1>
                    <h1>{length}</h1>
                  
                  <div className="InputD">
                    <input type="text" value={inputText} onChange={()=> nameChangeHandler(event.target.value)} placeholder="Enter a task" /> <br />
                    </div>
                    {textLength}
                        

                </div>
            </div>

        </>

    ) 

}