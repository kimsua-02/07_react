import Navbar from '../components/Navbar';
import { Outlet } from "react-router-dom";
import Home from '../pages/Home';

// 
const Layout = () => {
    return (
        <>
            <h1>커피 주문 사이트</h1>
            <Navbar/>
            <Home/>
            <Outlet/>
        </>
    )
}

export default Layout;