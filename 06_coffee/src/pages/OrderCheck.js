import { useState, useEffect } from 'react';
import { ordercheck } from 'react-router-dom';
import CoffeeMenuItem from '../components/CoffeeMenuItem';

const OrderCheck = () => {
    const orderCheck = order.get("coffeeName");
    const [coffeeList, setCoffeeList] = useState([]); 

    useEffect(() => {
        setCoffeeList(ordercheck(orderCheck));
    },[]);

    return (
        <>
            <h2>주문 확인</h2>
            <div className="">
                {coffeeList.map(coffee => <CoffeeMenuItem key={coffee.id} coffee={coffee}/>)}
            </div>
        </>
    )
}

export default OrderCheck;