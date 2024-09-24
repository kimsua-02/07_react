import { useState } from 'react';
import UseEffectBasic from './01_useEffect/01_useEffect-basic';
import UseEffectMount from './01_useEffect/02_useEffect-mount';
import UseEffectUpdate from './01_useEffect/03_useEffect-update';
import { Container } from './01_useEffect/04_useEffect-cleanp';
import Counter from './01_useEffect/Counter';

function App() {
  const [message,setMessage] = useState("안녕하신지요");
  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    <Counter/>
    </>
  );
}

export default App;
