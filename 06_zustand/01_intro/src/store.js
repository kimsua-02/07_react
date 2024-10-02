// 전역 상태를 담아서 불러옴.

import { create } from "zustand";

// create  가 첫번째로 받아올 인자가 set
const useStore = create((set) => ({
    count : 0, // 상태로 사용할 값.

    // set 은 인자로 state 를 받음. state 는 현재 내부 상태를 의미. 
    // zustand 는 부분 상태 업데이트를 지원하기 때문에 바꾼 곳만 바뀌게 됨. 굳이 다른 것을 불러올 필요가 없음.
    increment : () => setInterval((state) => ({count : state.count+1})),

    decrement : () => setInterval((state) => ({count : state.count-1})),

    reset : () => setInterval({count : 0})
}))

export default useStore;