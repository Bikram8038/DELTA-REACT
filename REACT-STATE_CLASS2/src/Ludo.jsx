import { useState } from "react";

export default function Ludo(){

    let [moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});
    let [Arr,setArr]=useState(["no moves"])

     let handeleBlueMoves=()=>{
        setMoves((preMoves)=>{
            return ({...preMoves, blue: preMoves.blue+1})
        })
       
       
        setArr([...Arr,"blue moves"]);
        console.log(Arr)
       

    }
     let handeleYellowMoves=()=>{
        setMoves((preMoves)=>{
            return ({...preMoves, yellow: preMoves.yellow+1})
        });
    }

    let handelegreenMoves=()=>{
        setMoves((preMoves)=>{
            return ({...preMoves, green: preMoves.green+1})
        })
    } 
    
    let handeleRedMoves=()=>{
        setMoves((preMoves)=>{
            return ({...preMoves, red: preMoves.red+1})
        })
    }

    return (
        <div>
            <p>Game begins!</p>
            <div>
                <p>{Arr}</p>
                <p>Blue Count={moves.blue}</p>
                  <button style={{backgroundColor:"blue"}} onClick={handeleBlueMoves}>+1</button>
                <p>Yellow Count={moves.yellow}</p>
                   <button style={{backgroundColor:"yellow", color:"black"}} onClick={handeleYellowMoves}>+1</button>
                <p>Green Count={moves.green}</p>
                    <button style={{backgroundColor:"green" }} onClick={handelegreenMoves}>+1</button> 
                <p>Red Count={moves.red}</p>
                   <button style={{backgroundColor:"red"}}  onClick={handeleRedMoves}>+1</button>
            </div>
        </div>
    );
}