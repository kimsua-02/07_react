import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link to={"/"}>홈</Link></li>
                <li><Link to={"/coffeeMenu"}>메뉴</Link></li>
                <li><Link to={"/orderCheck"}>주문 확인</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;