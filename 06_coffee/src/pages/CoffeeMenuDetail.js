import { useParams, useState, useEffect } from "react";
import { getCoffeeMenuDetail } from '../api/CoffeeMenuApi';
import { Link } from 'react-router-dom';

const CoffeeMenuDetail = () => {
    const {id} = useParams();

    const [coffee, setCoffee] = useState({
        coffeeName : '',
        price : '',
        detail : {description : ''},
        order : {orderCheck : ''}
    },[]);

    useEffect(() => {
        setCoffee(getCoffeeMenuDetail(id));
    },[]);

    return (
        <>
            <Link to={`/coffeeMenu/${coffee.id}`}>
                <div>

                </div>
            </Link>
        </>
    )
};

export default CoffeeMenuDetail;