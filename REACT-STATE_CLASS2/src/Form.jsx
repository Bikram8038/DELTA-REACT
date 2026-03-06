import { useState } from "react"

export default function Form(){

    let [fullName,setfullName]=useState("Ranit");
    let hendelchanges=(event)=>{
          console.log(event.target.value);
        setfullName(event.target.value);
    }

    return (
        <form  onSubmit={handeSubmit}>
            <label htmlFor="fullName">FullName </label>
            <input placeholder="enter your fullname" type="text"  value={formData.fullName} onChange={handelformchanges} id="fullName" name="fullName"/>
            <br></br>
            <br></br>
            <br></br>
            <label htmlFor="userName">UserName </label>
            <input placeholder="enter your Username" type="text"  value={formData.userName} onChange={handelformchanges}  id="userName" name="userName"/>
            <br></br>
            <br></br>
            <br></br>
            <label htmlFor="password">Password </label>
            <input placeholder="enter your PassWord " type="password"  value={formData.password} onChange={handelformchanges}  id="password" name="password"/>
            <br></br>
            <br></br>
            <br></br>
             <button>summit</button>
        </form>
    )
    
     
}