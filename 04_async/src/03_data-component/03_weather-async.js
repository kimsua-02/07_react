// 마운트 렌더링 이후에 동작

import { useEffect, useState } from "react";

const WeatherAsyncAwait = () => {
    const API_KEY = '207a52923e0d2e1ca4acea1ce48628fc';

    const [position, setPosition] = useState({}); // 현재 위치 저장
    const [cityName, setCityName] = useState(""); // 현재 도시 이름
    const [weather, setWeather] = useState({}); // 날씨 정보 저장
    const [wind, setWind] = useState({}); // 바람 정보 저장


    // .then 으로 구현했던 weather-promise 를 async/await 로 구현.
    // 출력물은 weather-promise 와 똑같이 출력되게 해야 함.
    // 그렇다면~?!~!~~?~?~!!  
    // 우선 , useEffect 내에서 async / await 구문으로 하기 위해서는 

    useEffect (() => {
        const fetch = async () => {
            const data = await response.json();
            setPosition(data);
        }
    },[]) // 최초로 마운트 렌더링 하는 코드.

    return (
        <>
          <h3>오늘의 날씨</h3>
          <h4>{`경도 : ${position.longitude} 위도 : ${position.latitude}`}</h4>
          <h4>{`조회 도시 : ${cityName}`}</h4>
          <h4>{`날씨 : ${weather.main} 날씨 설명 : ${weather.description}`}</h4>
          <h4>{`풍향  : ${wind.deg}도 풍속 : ${wind.speed}m/s`}</h4>
        </>
      );
}

export default Weather;