import { useMemo, useState } from 'react'


const SqareCalculator =() => {
    const [numbers, setNumbers] = useState("");

    const sqareNumbers = useMemo(()=>{
        console.log("제곱값 계산 실행");
        return numbers.split(",").map(num=>{
            return isNaN(num)? 0 : num ** 2;
        })
    },[numbers]);

    return (
        <>
            <h1>제곱값 계산</h1>
            <input text="number" value={numbers} onChange={(e) => setNumbers(e.target.value)}/>
            <h3>제곱값 계산 실행</h3>
            <ul>
                <li key={sqareNumbers}>{isNaN}</li>
            </ul>
        </>
    )
}

export default SqareCalculator;

// 완성 못함 조졋네