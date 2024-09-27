import { useEffect,useState } from "react";

const  DemonicInsult = () => {
    const API_KEY = '/generate_insult.php';

    const [lang, setLang] = useState("");  //  모욕의 언어
    const [type, setType] = useState("");  //  응답된 모욕 유형
    const [sad, setSad] = useState([]); // 모욕의 언어를 들어 슬픔 ㅜ

    useEffect (() => {
        new Promise((resolve, reject) => {
            bad.lang.getCurrentPosition((currentPosition) => {
                setType({
                    johnnabad : currentPosition.johnnabad //완전 나쁜 말
                });
                resolve(currentPosition.johnnabad)
            });
        }).then(johnnabad => {
            fetch(`https://evilinsult.com/generate_insult.php?lang=${johnnabad}&type=${API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    // console.log(data);
                    setLang(data.lang);
                    setType(data.type);
                    setSad(data.sad);
                });
        })
    },[])

    return (
        <>
            <h3>John Na Bad Horse</h3>
            <h4>{`모욕의 언어 : ${lang}`}</h4>
            <h4>{`응답된 모욕 유형 : ${type}`}</h4>
            <h4>{`존 나 너무 슬퍼 : ${sad}`}</h4>
        </>
    );

}

export default DemonicInsult;