import { useState } from "react";

function init(){
    console.log("inity is render");
    return Math.random();
}

export default function Count(){
    
    let [Count,setCount]=useState(init)
    console.log("Counter is render")
    function handelCount(){
        //call back
        setCount((currCount)=>{
            return currCount+1;
        // });
        // setCount((currCount)=>{
        //     return currCount+1;
        });
        // setCount(25)  //---normal flow
    }
    return(
       <div>
        <h3>count={Count}</h3>
        <button onClick={handelCount}>Increase count</button>
       </div>
    );
}