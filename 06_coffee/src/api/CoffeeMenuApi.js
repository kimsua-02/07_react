
import coffees from "../data/CoffeeMenu-detail.json";

export function getCoffeeList(){
    return coffees;
}

export function getCoffeeMenuDetail(coffeeCode){
    return coffees.filter(coffee => coffee.coffeeCode === parseInt(coffeeCode))[0];
}
