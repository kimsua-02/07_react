import { Link } from 'react-router-dom';
import CoffeeMenu from '../pages/CoffeeMenu';
// import { price } from '../data/CoffeeMenu-detail.json';

// CoffeeMenuItem 컴포넌트는 홈에서 메뉴 클릭 > 메뉴에서 CoffeeName(아무거나) 클릭 > CoffeeName 의 설명을 구현하는 컴포넌트.
// CoffeeMenuItem 컴포넌트는 CoffeeMenu 를 기반으로 구현됨.

const CoffeeMenuItem = ({coffeeMenu}) => {
    return (
            <Link to={`/coffeeMenuItem/${coffeeMenu}`}>
                <div className="CoffeeMenu">
                    <h3>가격 : {coffeeMenu.price}</h3>
                    <h3>설명 : {coffeeMenu.description}</h3>
                </div>
            </Link>
    )
};

export default CoffeeMenuItem;