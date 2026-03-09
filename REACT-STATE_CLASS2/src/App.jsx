
import './App.css'
import Lottery from './Lottery.jsx'
import Ludo from './Ludo.jsx'
import Ticket from './Ticket.jsx'
import Todo from './TodoList.jsx'
import {sum} from './Lottery.js'
import Form from './Form.jsx'

function App() {

  let winningCondition=(ticket)=>{
      return ticket[1]==0;
  }
  return (
    <>
    <Form/>
    </>
  )
}

export default App
