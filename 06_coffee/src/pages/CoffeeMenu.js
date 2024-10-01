import { useState, useEffect } from "react";
import { getCoffeeList } from '../api/CoffeeMenuApi';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { id } from '../data/CoffeeMenu-detail.json';
import Layout from '../layout/Layout';


// CoffeeMenu 컴포넌트는 CoffeeMenuItem 에 들어갈 컴포넌트임.

const CoffeeMenu = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const [order, setOrder] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setCoffeeList(getCoffeeList());
    },[]);

 
    const onClickHandler = () => {
        
    }

    // 예) 에스프레스 - 3,000원을 클릭하면 메뉴 설명이 나옴.(CoffeeMenuDetail 에서 받아옴.)
    return(
        <>
            <h2>메 뉴</h2>

            <div>
                <ul>
                    <li><Link to={'/Espresso'}>에스프레소 - 3,000원</Link></li>
                    <li><Link to={'/Americano'}>아메리카노 - 4,000원</Link></li>
                    <li><Link to={'/CafeLatte'}>카페라떼 - 5,000원</Link></li>
                    <li><Link to={'/Cappuccino'}>카푸치노 - 5,000원</Link></li>
                    <li><Link to={'/VanillaLatte'}>바닐라 라떼 - 5,500원</Link></li>
                    <li><Link to={'/Signature'}>와랄라 커피 - 5,900원</Link></li>
                </ul>
                  <Link to={"/order"}><button onClick={onClickHandler}>주문하기</button></Link>
            </div>
        </>
    )
};

export default CoffeeMenu;