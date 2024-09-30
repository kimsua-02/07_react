import CoffeeMenu from '../pages/CoffeeMenu';


const CoffeeMenuItem = ({coffeeMenu}) => {
    return (
        <Link to={`/coffeeMenu/${coffe.id}`}>
            <div className="CoffeeMenuItem">
                <h2>메 뉴</h2>
                <h3>{coffeeName}-{coffeeMenu.price}</h3>
            </div>
        </Link>
    )
};

export default CoffeeMenuItem;