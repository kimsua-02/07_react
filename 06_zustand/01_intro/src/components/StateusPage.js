// CounterPage 에서 숫자를 바꾸고 StateusPage 에서 확인하는 것.

import useStore from '../store';
import { useNavigate } from "react-router-dom";

const StateusPage = () => {
    const {count} = useStore();
    const navigate = useNavigate();

    return (
        <div style={{textAlign : 'center', marginTop : "50px"}}>
            <h1>store Counter : {count}</h1>
            <button onClick={() => navigate("/")}>돌아가기</button>
        </div>
    )
}

export default StateusPage;