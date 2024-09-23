import React from 'react'
import Test from './Test';
import Container from './Container';
import InputContainer from './InputContainer';


const {useState} = React;

function App() {

  const [todoList, setTodoList] = useState(['하이','안냥']);
  const [input, setInput] = useState("");
  const [color, setColor] = useState("black");

  const changeInput = (e) => {
    setInput(e.target.value);
  }

  const colorChange = (e) => {
    setColor(e.target.value);
  }


  return (
    <>
      <div>
        <h1>TodoList</h1>

        <button>다크모드</button>
        <Container todoList={todoList} setTodoList={setTodoList} color={color}/>
        <InputContainer setTodoList={setTodoList} todoList={todoList}/>
        <input type="text" value={input} onChange={changeInput}/>
        <button onClick={colorChange} value={input}>색변경</button>
      </div>
    </>
  )
  
}

export default App;
