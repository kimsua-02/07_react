import { useReducer } from 'react';


const reducer = (state,action) => {
    switch(action.type) {
        case 'MINUS':
            return {value:state.value-1}
        case 'PLUS':
            return {value:state.value+1}
        case 'TEXT':
            return {text:action.text}
        default:
            return state;
    }
}

const Counter = () => {
    const [state,dispatch] = useReducer(reducer,{value:0,
        textinput:''
    });
    
    const {textinput} = state;
    const onChangeHandler = e => dispatch(e.target);


    return (
        <>
            <h1>Counter : {state.value}</h1>
            <button onClick={()=>dispatch({type:"MINUS"})}>-1</button>
            <button onClick={()=>dispatch({type:"PLUS"})}>+1</button>
            <input type="TEXT" textinput="textinput" onChange={onChangeHandler}/>
            d
            <div>
                <p>입력한 텍스트 : {textinput}</p>
            </div>
        </>
    )
}

export default Counter;