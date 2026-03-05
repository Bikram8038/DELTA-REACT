
import './App.css'
import Lottery from './Lottery.jsx'
import Ludo from './Ludo.jsx'
import Ticket from './Ticket.jsx'
import Todo from './TodoList.jsx'
import {sum} from './Lottery.js'

function App() {

  let winningCondition=(ticket)=>{
      // return ticket.every((num)=>num===ticket[0]);
      return ticket[0]==0;
  }
  return (
    <>
      {/* <Ludo/> */}
      {/* <Todo></Todo> */}
      <Lottery n={3} winningCondition={winningCondition}/>
      {/* <Ticket ticket={[6,5,4]}/>
      <Ticket ticket={[4,9,5,1]}/> */}


    </>
  )
}

export default App
