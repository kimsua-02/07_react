import { useCallback, useEffect, useState } from 'react'


const CallbackComponent = () => {
    const [size, setSize] = useState(200);
    const [isDark, setIsDark] = useState(false);

    const genSquareStyle = useCallback(() => {
        return {
            backgroundColor : "orangered",
            width : size,
            height : size
        }
    },[size]);
    // useCallback O :  변할 때만 할당됨.
    // useCallback X :  함수가 재할당 되어 버튼을 클릭할때도 콘솔에서 style 변경이 나타남. (비효율)

    return (
        <>
            <div style={{backgroundColor:isDark? "black":"white"}}/>
                <input type="range" min="100" max="300" onChange={e=>setSize(parseInt(e.target.value))}/>

                <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
                <Square genSquareStyle={genSquareStyle}/>
                <hr/>
        </>
    )
}

const Square = ({genSquareStyle}) => {
    const [style, setStyle] = useState({});

    useEffect(()=>{
        console.log("style 변경");
        setStyle(genSquareStyle());
    },[genSquareStyle]);

    return <div style={style}></div>
}

export default CallbackComponent;