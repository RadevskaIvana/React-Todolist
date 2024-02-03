import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState('');

   const HandleChangeInput = (e)=>{
    setInputValue(e.target.value)
   };

   const HandleAddTodo = ()=>{
    setTodo([...todo, inputValue])
    setInputValue("")
   };
   
   const HandleDeleteTodo = (e)=>{
    const valueDelete = e.target.getAttribute("value");
    setTodo((prev) => prev.filter((x) => x !== valueDelete));
   }
  return (
    <div className='App'>
     <h1>Todo List </h1>
     <p>A simple React Todo App</p>
     <hr className='line'/>
    
     <div className='container-input'>
       <input type='text' value={inputValue} onChange={HandleChangeInput} placeholder='What is the task today?'/>
       <button onClick={HandleAddTodo}>Add</button>
     </div>
      <div className='todo-container'>
         {todo.map((todo) =>{
          return(
            <div className='card-div' key={todo} value={todo} onClick={HandleDeleteTodo}>{todo}</div>
          );
         })}
      </div>
    </div>
  )
}

export default App
