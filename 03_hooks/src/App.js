import { useState } from 'react';
import UseEffectBasic from './01_useEffect/01_useEffect-basic';
import UseEffectMount from './01_useEffect/02_useEffect-mount';
import UseEffectUpdate from './01_useEffect/03_useEffect-update';
import { Container } from './01_useEffect/04_useEffect-cleanp';
import TimeAdd from './01_useEffect/05_timer';

function App() {
  const [message,setMessage] = useState("안녕하신지요");
  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    <TimeAdd/>
    </>
  );
}

export default App;
