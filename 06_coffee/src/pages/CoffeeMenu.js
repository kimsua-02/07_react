import { useState, useEffect } from "react";
import { getCoffeeList } from '../api/CoffeeMenuApi';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { id } from '../data/CoffeeMenu-detail.json';


// CoffeeMenu 컴포넌트는 CoffeeMenuItem 에 들어갈 컴포넌트임.

const CoffeeMenu = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const [order, setOrder] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setCoffeeList(getCoffeeList());
    },[]);

    const onClickHandler = () => {
        navigate(`/coffee/orderCheck?coffeeName=${order}`);
    }

    return(
        <>
            <h2>메 뉴</h2>

            <div>
                <ul>
                    <li><Link id={1}>에스프레소 - 3,000원</Link></li>
                    <li><Link id={2}>아메리카노 - 4,000원</Link></li>
                    <li><Link id={3}>카페라떼 - 5,000원</Link></li>
                    <li><Link id={4}>카푸치노 - 5,000원</Link></li>
                    <li><Link id={5}>바닐라 라떼 - 5,500원</Link></li>
                    <li><Link id={6}>와랄라 커피 - 5,900원</Link></li>
                </ul>
                <button onClick={onClickHandler}>주문하기</button>  <button onClick={onClickHandler}>돌아가기</button>
            </div>
        </>
    )
}

export default CoffeeMenu;