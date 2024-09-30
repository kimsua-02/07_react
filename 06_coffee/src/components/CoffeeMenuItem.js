import CoffeeMenu from '../pages/CoffeeMenu';

// CoffeeMenuItem 컴포넌트는 CoffeeMenu 를 기반으로 구현됨.

const CoffeeMenuItem = ({coffeeMenu}) => {
    return (
        <Link to={`/coffeeMenu/${coffe.id}`}>
            <div className="CoffeeMenuItem">
                <h2>메 뉴</h2>
                <h3>{coffeeName}{coffeeMenu.price}</h3>
            </div>
        </Link>
    )
};

export default CoffeeMenuItem;