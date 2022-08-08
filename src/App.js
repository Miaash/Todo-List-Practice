import React, {useState} from 'react';
import AddTodo from './components/Todos/AddTodo';
import TodosList from './components/Todos/TodosLIst';
import styled from 'styled-components';

const Title = styled.h3`
  text-align: center;
  color: white;
`


const App = () => {
  const [ addToDo, setAddToDo ] = useState([]);

  // Todo 추가 버튼을 눌렀을 때
  const addToDoHandler = (enteredDate, enteredTodo) => {
    const Todo = {
      id : addToDo.length,
      date : enteredDate,
      text : enteredTodo,
    }
    setAddToDo((prevToDo) => {
      return [
        ...prevToDo,
        Todo
        // {date : enteredDate, text : enteredToDo, id : Math.random().toString()}
      ]
    }) 
  }

  // 삭제 버튼을 눌렀을 때
  const deleteHandler = (id) => {
    const deleteItem = addToDo.filter(todo => todo.id !== id);
    setAddToDo(deleteItem);
    console.log(deleteItem);
  }

  return (
    <div>
      <Title>
        <h1>🤍 To-do List 🤍</h1>
      </Title>
      <section>
       <AddTodo onAddToDo={addToDoHandler}/>
      </section>
      <section>
       <TodosList items={addToDo} onDelete={deleteHandler}/> 
      </section>
    </div>
  );
}


export default App;
