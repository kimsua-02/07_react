import axios from "axios";

const callApi = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(r => r.json()).then(d => console.log(d)); // fetch 는 수동적으로 json 처리를 해야하기 때문에 가벼움. 최근에 나온 것이기 때문에 구형 형식이 동작하지 않을 수 있음.
}

const axiosCall = () => {
    axios.get("https://jsonplaceholder.typicode.com/users") // axios 는 get 처리를 해줘야 함.
    .then(res => console.log(res.data)); // axios 는 자동으로 json 형식을 줌. 단, 제공해주는 게 많기에 좀 무거움. 모든 형식 잘 동작됨.
}


/* 
    Axios : 요청 처리에 대한 여러 가지 기능을 제공해준다..
    따라서 패키지 크기가 상대적으로 더 크고 무겁다.

    Fetch : 기본 브라우저 내장 API 이다.
    가볍고 빠르다. 하지만 여러 처리를 수동으로 해주어야 한다.
*/

const AxiosCallComponent = () => {
    return (
        <>
            <button onClick={callApi}>fetch 요청</button>
            <button onClick={axiosCall}>axios 요청</button>
        </>
    )
}

export default AxiosCallComponent;