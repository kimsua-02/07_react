import { useState } from 'react'


const TodoList = () => {
    const [toDo, setToDO] = useState("");
    const [toDos, setToDos] = useState([]);

    const onSubmit = (e) => {
        setToDos((currentArray) => [toDo, ...currentArray]);
    };

    return (
        <div>
            <h1>수아쓰 ToDoList {toDos.length}</h1>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={toDo} type="text" placeholder="입력하라! 할 일을!"/>
                <button>추가</button>
            </form>
        </div>
    )
};

export default TodoList;