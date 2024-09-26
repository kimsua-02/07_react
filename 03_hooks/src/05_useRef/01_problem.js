// useRef 는 값을 바꾸면 기억은 하되, 렌더링은 안 함.

import { useState } from 'react'

const CounterRef = () => {
    const [counter, setCounter] = useState(0);

    console.log("counter 렌더링 됨"); 

    const increseCount = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={increseCount}>카운트 증가</button>
            <hr/>
        </>
    )
};
// 카운트 증가 버튼 클릭시 숫자가 증가됨가 동시에 렌더링이 지속적으로 됨.

export default CounterRef;