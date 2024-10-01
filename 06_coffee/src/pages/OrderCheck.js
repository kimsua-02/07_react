import { useState, useEffect, useOrderParams } from 'react';


const OrderCheck = () => {
    const [Order] = useOrderParams();

    const Check = Order.get("coffeeName");
    const [coffeeList, setCoffeeList] = useState(''); 

    useEffect(() => {
        setCoffeeList(Order(Check));
    },[]);

    return (
        <>
            <h2>주문 확인</h2>
            <div className="Check">
                <ul>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default OrderCheck;