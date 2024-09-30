import { useState, useEffect } from "react";
import { getCoffeeList } from '../api/CoffeeMenuApi';
import { useNavigate } from "react-router-dom";

// CoffeeMenu 컴포넌트는 CoffeeMenuItem 에 들어갈 컴포넌트임.

const CoffeeMenu = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const [order, setOrder] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setCoffeeList(getCoffeeList());
    },[]);

    const onClickHandler = () => {
        navigate(`/coffee/order?coffeeName=${order}`);
    }

    return(
        <>
            <h2>메 뉴</h2>

            <div>
                <ul>
                    <li><NavLink to={"coffeeMenu"}></NavLink>{{coffeeList} - {price}}</li>
                </ul>
                <input type="order" name="coffeeName" onChange={e => {setOrder(e.target.value)}}/>
                <button onClick={onClickHandler}>주문하기</button>
            </div>
        </>
    )
}

export default CoffeeMenu;