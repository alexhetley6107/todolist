import React, { useState } from 'react'
import AddField from './AddField/AddField';
import ToDoItem from './Item/ToDoItem'

const data =[
  {id:'dasfvgswv', title:'Купить бананы', isCompleted: true},
  {id:'jgyulii,i.', title:'Вынести мусор', isCompleted: false},
  {id:'dvsrvsdrfr', title:'Забрать посылку', isCompleted: false},
];

function Home() {

  const [todos, setTodos] = useState(data);

  const changeToDo = (id) => {
    setTodos(todos.map(todo => todo.id === id 
      ? {...todo, isCompleted : !todo.isCompleted} 
      : todo));
  }
  const removeToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id ));
  }
  const addToDo = (title) => {
    setTodos([
      {id:new Date(), title, isCompleted: false},
       ...todos]);
  }
  
  return (
    <div className=' text-white md:w-3/5 w-full mx-auto'>
        <h1 className='font-bold text-4xl text-center mb-9'>To Do List</h1>
        <AddField addToDo={addToDo}/>
        { todos.length > 0
        ?
        todos.map(todo => 
          <ToDoItem todo={todo} key={todo.id} 
            change={changeToDo}
            remove={removeToDo}
          />)
        :
        <h2 className='font-bold text-2xl text-center'>No Tasks</h2>
        
        }
    </div>
  )
}

export default Home