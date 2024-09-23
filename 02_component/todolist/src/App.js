import React from 'react'
import Test from './Test';


const {useState} = React;

function App() {

  const [names, setNames] = useState([
    {id:1,name:"하이"},
    {id:2,name:"안냥"}
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(3);

  const onChangeHandler = e => setInputText(e.target.value);

  const onClickHandler = () => {
    const changeNames = names.concat({
      id:nextId,
      name:inputText
    });

    setNames(changeNames);
    setNextId(nextId+1);
    setInputText("");
  }

  const onRemove = id => {
    const changeNames = names.filter(name => name.id !== id);
    setNames(changeNames);
  }

  const nameList = names.map(name => {
    return (
      <li key={name.id}>{name.name}
        <input type="checkbox"/>
      </li>
    )
  });

  return (
    <>
      <ul>
        {nameList}
      </ul>
      <input type="text" value={inputText} onChange={onChangeHandler}/>
      <button onClick={onClickHandler}>추가</button>
    </>
  )
  
}

export default App;
