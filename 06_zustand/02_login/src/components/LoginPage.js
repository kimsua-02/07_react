import { useState } from "react";
import userAuthStore from '../store';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [input, setInput] = useState('');
    const {login} = userAuthStore();
    const navi = useNavigate();

    const handleLogin = () => {
        login(input);
        navi("/profile");
    }

    const handleMyPage = () => {
        navi("/profile");
    }

    return (
        <div style={{textAlign : 'center', ma : '50px'}}>
            <h1>로그인</h1>
            <input type="texe" placeholder="이름을 입력하세요" value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleMyPage}>프로필</button>
        </div>
    )
}

export default LoginPage;