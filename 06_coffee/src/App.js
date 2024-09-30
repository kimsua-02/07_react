import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import CoffeeMenu from './pages/CoffeeMenu';
import CoffeeMenuDetail from './pages/CoffeeMenuDetail';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="coffeeMenu">
              <Route index element={<CoffeeMenu/>}/>
              <Route path=":id" element={<CoffeeMenuDetail/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
