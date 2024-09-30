
import coffees from "../data/CoffeeMenu-detail.json";

export function getCoffeeList(){
    return coffees;
}

export function getCoffeeMenuDetail(id){
    return coffees.filter(coffee => coffee.id === parseInt(id))[0];
}
