import { useState } from 'react';

const hardCalculator = (num) => {
    console.log("어려운 계산기");

    for(let i = 0; i < 98989898; i++){}
    return num + 1000;
}

const easyCalculator = (num) => {
    console.log("쉬운 계산기");
    return num + 1;
}

const ComplexCalcultor = () => {
    const [hardNum, setHardNum] = useState(0);
    const [easyNum, setEasyNum] = useState(0);
    
    const hardSum = hardCalculator(hardNum);
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

export default ComplexCalcultor;