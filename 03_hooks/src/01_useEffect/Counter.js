import { useEffect, useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState();

    useEffect(() => {
        const id = setInterval(() => {
            setCount(count + 1);
        },(1000));

        return(() => {
            clearInterval(id);
        })

    },[])

    return (
        <>
            <button>타이머 추가</button>
            {<Counter/>};
        </>
    )
}

export default Counter;

