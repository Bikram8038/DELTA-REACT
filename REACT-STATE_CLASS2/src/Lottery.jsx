import { useState } from "react";
import { getTickets ,sum} from "./Lottery.js";
import Ticket from "./Ticket.jsx";
import Button from "./Button.jsx";


export default function Lottery({n,winningCondition}){
  let [ticket,setticket]=useState([getTickets(3)]);
  let winningTicket=winningCondition(ticket);

  let BuyNewTicket=()=>{
    setticket(getTickets(n))
  }

 return(

    <div>
        <h1>Lottery Game !</h1>
        <Ticket ticket={ticket}/>
        <br></br>
        <br></br>
       <Button action={BuyNewTicket}/>
        <h3>{winningTicket &&"Congratulation you win"}</h3>
        
    </div>
 );

}