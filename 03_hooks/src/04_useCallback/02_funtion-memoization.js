

/*
    useMemo :
    특정 값을 메모이제이션한다..
    주로 연산이 비싼 값이나 복잡한 계산..
    사용 목적은 값이 자주 계산되는 것을 방지하여 성능 최적화..

    useCallback :
    특정 함수를 메모이제이션 한다.. 함수의 재생성을 방지한다..
    자식 컴포넌트에 함수를 전달할 때 불필요하게 함수가 생성되는 것을 방지한다..

    useCallback 을 많은 함수에 남용하면 오히려 성능 저하가 발생할 수 있다..
    메모이제이션 자제도 메모리 비용이 들기 때문..
    함수의 재생성에 큰 비용이 없는 경우 굳이 사용할 필요는 없다..
*/

import { useCallback, useEffect, useState } from 'react'

const FunctionMemoization = () => {
    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    // useCallback 과 비교를 위해 작성.
    const noneCallback = () => {  // useMemo 와 작성 방식이 유사함.
        console.log(number);
    }

    // number 가 변할 때만 재정의됨.
    const printNumber = useCallback(() => {
        console.log(`current number : ` + number);
    },[number]);

    useEffect(() => {
        console.log("printNumber 값 변화 인지됨")
    },[printNumber])

    return (
        <>
            <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>

            <br/>
            <button onClick={()=>setToggle(r=>!r)}>{String(toggle)}</button>

            <br/>
            <button onClick={printNumber}>printNumberState</button>
            <button onClick={noneCallback}>noneCallback</button>
            <hr/>
        </>
    )
}

export default FunctionMemoization;
// toggle 버튼을 눌러도 콘솔에 아무 것도 입력이나 실행되지 않음. (toggle 버튼은 클릭 시 true/false 가 바뀌면서 나타남.)
// 출력 화면에서 숫자를 높이거나 낮힌 후 noneCallback 버튼을 클릭 시 높이거나 낮힌 숫자가 콘솔에 나타남.
// noneCallback , printNumber 을 useCallback 에 넣었는가 넣지 않았는가 차이이다.

