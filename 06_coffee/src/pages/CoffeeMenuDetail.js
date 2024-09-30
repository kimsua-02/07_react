import { useParams, useState, useEffect } from "react";
import { getCoffeeMenuDetail } from '../api/CoffeeMenuApi';

const CoffeeMenuDetail = () => {
    const {id} = useParams();

    const [coffee, setCoffee] = useState({
        coffeeName : '',
        price : '',
        detail : {description : ''}
    },[]);

    useEffect(() => {
        setCoffee(getCoffeeMenuDetail(id));
    },[]);

    return (
        <>
            <h2>{coffeeName}</h2>
            <h3>가격 : {coffee.price}</h3>
            <h3>설명 : {coffee.detail.description}</h3>

            {/* <button onClick={}>장바구니 추가</button><br/>
            <button onClick={}>돌아가기</button> */}
        </>
    )
};

export default CoffeeMenuDetail;