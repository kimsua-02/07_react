import { useState } from 'react';
import UseEffectBasic from './01_useEffect/01_useEffect-basic';
import UseEffectMount from './01_useEffect/02_useEffect-mount';
import UseEffectUpdate from './01_useEffect/03_useEffect-update';
import { Container } from './01_useEffect/04_useEffect-cleanp';
import TimeAdd from './01_useEffect/05_timer';
import Hook from './01_useEffect/07_profile';
import TodoApp from './01_useEffect/07_profile';
import UseReducerBasic from './02_useReducer/01_useReducer-basic';
import ReducerFormControl, { Input } from './02_useReducer/02_reducer-form-control';
import Counter from './02_useReducer/03_mix-useReducer';
import Question from './02_useReducer/03_1_question';
import HardCalculator from './03_useMemo/01_hard-calculator';
import ComplexCalcultor from './03_useMemo/02_complex-calculator';
import UseMemoComponent from './03_useMemo/03_performance-useMemo';
import LocationComponent from './03_useMemo/04_object-type-problem';
import NumSquareCalculator from './03_useMemo/05_Number-square-calculator.js';
import SqareCalculator from './03_useMemo/05_Number-square-calculator.js';

function App() {
  const [message,setMessage] = useState("안녕하신지요");
  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    {/* <TimeAdd/> */}
    {/* <Counter /> */}
    {/* <TodoApp /> */}
    {/* <UseReducerBasic /> */}
    {/* <ReducerFormControl /> */}
    {/* <Input /> */}
    {/* <Counter /> */}
    {/* <Question/> */}
    {/* <HardCalculator/> */}
    {/* <ComplexCalcultor/> */}
    {/* <UseMemoComponent/> */}
    {/* <LocationComponent/> */}
    <SqareCalculator/>

    </>
  );
}

export default App;
