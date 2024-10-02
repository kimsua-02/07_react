import { useNavigate } from 'react-router-dom'
import useStore from '../store';



const CounterPage = () => {
    const {count, increment, decrement, reset} = useStore();
    const navigate = useNavigate();

    console.log()

    return (
        <div style={{textAlign : 'center', marginTop : '50px'}}>
            <h1>Counter : {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
            <div>
                <button onClick={() => navigate("/status")}>현재 상태 보러가기</button>
            </div>
        </div>

    )
}

export default CounterPage;
