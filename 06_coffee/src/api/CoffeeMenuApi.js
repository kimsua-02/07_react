// data 폴더 안에 있는 CoffeeMenu-detail.json 파일을 불러옴(커피 메뉴 데이터)
import coffees from "../data/CoffeeMenu-detail.json";

// 1. 메뉴 전체 반환
export function getCoffeeList(){
    return coffees;
}

// 2. 디테일 페이지 함수
export function getCoffeeMenuDetail(id){
    return coffees.filter(coffee => coffee.id === parseInt(id))[0];
}
