import { useState, useEffect, useNavigate } from "react";
import { getCoffeeList } from '../api/CoffeeMenuApi';

const CoffeeMenu = () => {
    const [coffeeList, setCoffeeList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setCoffeeList(getCoffeeList());
    },[]);

    return(
        <>
            <h2>메 뉴</h2>

            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </>
    )
}

export default CoffeeMenu;