import { useReducer } from 'react';


const reducer = (state,action) => {
    switch(action.type) {
        case "PLUS":
            return{...state,count:state.count+1}
        case "MINUS":
            return{...state,count:state.count-1}
        case "TEXTINPUT":
            return{text:action.text}
        default:
            return state;
    }
}

const Counter = ({state,dispatch}) => {
    return (
        <>
            <h1>Counter : {state.count}</h1>
            <button onClick={()=>dispatch({type:"PLUS"})}>+1</button>
            <button onClick={()=>dispatch({type:"MINUS"})}>-1</button>
        </>
    )
}

const TextInput = ({state,dispatch}) => {
    return (
        <>
            <input type="text" value={state.value}
            onChange={(e)=>dispatch({type:"TEXTINPUT", text:e.target.value})}/>
            <p>입력한 텍스트 : {state.text}</p>        
        </>
    )
}

const Question = () => {
    const all = {count:0, text:''};

    const [state,dispatch] = useReducer(reducer,all);

    return(
        <>
            <Counter state={state} dispatch={dispatch}/>
            <TextInput state={state} dispatch={dispatch}/>
        </>
    )
}

export default Question;