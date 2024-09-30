

const Navbar = () => {
    return (
        <div>
            <ul>
                <li><NavLink to={"/home"}>홈</NavLink></li>
                <li><NavLink to={"/coffeeMenu"}>메뉴</NavLink></li>
                <li><NavLink to={"/orderCheck"}>주문 확인</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;