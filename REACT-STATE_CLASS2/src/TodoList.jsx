import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



export default function Todo(){
    let [Todo,setTodo]=useState([{task: "some task" , id:uuidv4() , isDone:false}]) ///array of object
    let [newTodo,setnewTodo]=useState("");

    let addNewTask=()=>{
        setTodo((preTodos)=>[...preTodos,{task:newTodo,id:uuidv4(),isDone:false}])
        setnewTodo("")
        
    }
    let UpdateTodoValue=(event)=>{
           setnewTodo(event.target.value)
    }
    let deleteTodo=(id)=>{
        setTodo((pretodo)=>Todo.filter((pretodo)=>pretodo.id != id))
        
    }

    let UppercaseAll=()=>{
      setTodo((preTodos)=>preTodos.map((todo)=>{
        return{
          ...todo,
          task: todo.task.toUpperCase(),
        };
      }));
    }

     let UpperCaseone=(id)=>{
      setTodo((preTodos)=>preTodos.map((todo)=>{
            if(todo.id==id){
                return{
                ...todo,
                task: todo.task.toUpperCase(),
                };
            }else{
                return{
                    ...todo
                }
            }
       
      }));
    }

    let handleDoneOne=(id)=>{
        setTodo((preTodos)=>preTodos.map((todo)=>{
            if(todo.id==id){
                    return{
                        ...todo,
                        isDone: true
                    }
            }
             else{
                return{
                    ...todo
                } 
            }
        }
    ))
  }
      let handleDoneAll=()=>{
        setTodo((preTodos)=>preTodos.map((todo)=>{
                    return{
                        ...todo,
                        isDone: true
                    }
                 }
             ))
         }

    return(
        <div>
            <input placeholder="add tasks" value={newTodo} onChange={UpdateTodoValue } ></input>
            <br></br>   <br></br>

            <button onClick={addNewTask}>Add</button>
            <br></br> <br></br> <br></br>
            <hr></hr>
            <p>Todo List</p>
            {
                Todo.map((todo)=>(
              
                  <li key={todo.id} style={{marginBottom:"2rem"}}>
                    <span style={todo.isDone ? {textDecorationLine:"line-through"} :{}}>
                        {todo.task}</span>
                    &nbsp;&nbsp;&nbsp;

                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    &nbsp;&nbsp;&nbsp;

                    <button onClick={()=>UpperCaseone(todo.id)}>UpperCaseOne</button>
                    &nbsp;&nbsp;&nbsp;

                    <button  onClick={()=>handleDoneOne(todo.id)} >Done</button>
                    </li>
                
                   ))
            }
            <br></br>  <br></br>
            <button onClick={UppercaseAll}>Upper Case</button>
            <br></br>  <br></br>
            <button onClick={handleDoneAll}>Done All</button>
        </div>
    );
}