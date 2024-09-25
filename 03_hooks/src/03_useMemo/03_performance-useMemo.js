

/* 
    메모이제이션(memoization)
     - 컴퓨터 프로그램이 동일한 계산을 반복해야 할 때 이전에 계산한 값을 메모리에 저장함으로써
        동일한 계싼의 반복 수행을 제거하여 프로그램 실행 속도를 빠르게 하는 기술.

    useMemo
     - 특정 값이 변경될 때만 메모이제이션 된 값을 재계산하여 성능 개선 useMemo 의
        두번째 인자로 전달된 값이 변경될 때만 연산 수행.
*/

import { useMemo, useState } from 'react';

const hardCalculator = (num) => {
    console.log("어려운 계산기");

    for(let i = 0; i < 989898989; i++){}
    return num + 1000;
}

const easyCalculator = (num) => {
    console.log("쉬운 계산기");
    return num + 1;
}

const UseMemoComponent = () => {
    const [hardNum, setHardNum] = useState(0);
    const [easyNum, setEasyNum] = useState(0);

    const hardSum = useMemo(() => {
        return hardCalculator(hardNum);
    },[hardNum]);

    const easySum = easyCalculator(easyNum);

    return (
        <>
        <h1>어려운 계산기</h1>
        <input type="number" value={hardNum} onChange={e=>setHardNum(e.target.value)}/>
        <span>+ 10000 = {hardSum}</span>

        <h1>쉬운 계산기</h1>
        <input type="number" value={easyNum} onChange={e=>setEasyNum(e.target.value)}/>
        <span>+ 1 = {easySum}</span>
    </>
    )
}

export default UseMemoComponent;
