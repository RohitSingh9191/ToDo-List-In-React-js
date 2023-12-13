
import { useState } from 'react';
import './App.css';
import ToDo from './component/ToDo';
import ToDoList from './component/ToDoList';

function App() {
  const [listToDo,setListToDo]=useState([]);

  
  let addList=(inputText)=>{
    if(inputText!==""){
    setListToDo([...listToDo,inputText]);

    }

  }

    const deleteListItem = (key)=>{
      let newListTodo = [...listToDo];
      newListTodo.splice(key,1)
      setListToDo([...newListTodo])

    }
 
  return (
    <div className='main-container'>
      <div className='center-container'>
          <ToDo addList={addList}/>
          <h1 className='app-heading'>TODO</h1>
          <hr/>
          {listToDo.map((listItem,i)=>{
            return (
              <ToDoList key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
            )
          })}
      </div>
    </div>
  );
}
export default App;
