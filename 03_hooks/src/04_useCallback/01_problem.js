// useMemo 는 값 자체를 기억 / useProblem 은 함수를 기억함.

import { useEffect, useState } from 'react'

const CallBackProblem = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    const printNumber = () => {
        console.log(`current number : ${number}`);
    }

    useEffect(() => {
        console.log("printNumber 값 변화 인지됨");
    },[printNumber]);
    // 함수가 변할 때 실행됨

    return (
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>

            <br/>
            <button onClick={printNumber}>printNumberState</button>
            <hr/>
        </>
    )
};

export default CallBackProblem;