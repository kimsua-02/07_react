import { useState, useTransition } from 'react'



const Counter = () => {
// Counter 는 상태 변수이다.
    const [count, setCount] = useState(0);
    // setCount 는 count 상태를 업데이트하는 함수이다.
    // useState(0) 는 count 라는 상태 변수를 생성하고 초기 값 0 을 할당함.

    return(
        <>
            <div>
                <p>You Click {count} times</p>
                <button onClick={() => setCount(count + 1)}>+ 1</button>
                {/* 버튼을 클릭하면 setCount 함수를 호출하여 count 의 값을 1 증가시킴. */}
                {/* 상태가 업데이트 되면 컴포넌트는 다시 렌더링 되고 업데이트 된 count 값이 화면이 표시 됨. */}
            </div>
        </>
    )
}

// 두 개의 상태 변수 todos 와 text 를 생성
// addTodo 함수는 새로운 할 일을 todos 배열에 추가하고 text 상태를 빈 문자열로 리셋한다.
const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = () => {
        setTodos([...todos, text]);
        setText('');
    };

    return(
        <div>
            <h1>추가할 목록 작성</h1>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoApp;

// export default Counter;