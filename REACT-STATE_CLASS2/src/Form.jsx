import { useState } from "react"

export default function Form(){

    let [fullName,setfullName]=useState("Ranit");
    let hendelchanges=(event)=>{
          console.log(event.target.value);
        setfullName(event.target.value);
    }

    return (
        <form>
            <input placeholder="enter your fullname" type="text"  value={fullName} onChange={hendelchanges}/>
             <button>summit</button>
        </form>
    )
    
     
}