// 데이터를 처리하는 로직을 별도의 파일로 분리하여 api 처럼 사용하기 위함.

import menus from "../data/Menu-detail.json";

// 1. 메뉴 전체 반환
export function getMenuList () {
    return menus;
}

// 2. 검색 함수
export function searchMenu(menuName) {
    return menus.filter(menu => menu.menuName.match(menuName)); // match : 일치하는 부분이 있을 시 true 반환함.
}

// 3. 디테일 페이지 함수
export function getMenuDetail(menuCode){
    return menus.filter(menu => menu.menuCode === parseInt(menuCode))[0]; // 혹시라도 중복된 값이 있을 시 필터링 된 결과의 제일 첫번째 값을 반환함.
}

