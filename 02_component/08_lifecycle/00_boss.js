// React - lifecycle 정리

/* 
   ★ life cycle ★
    ▶ 컴포넌트 라이프 사이클 메소드는 총 9가지가 존재함.
        라이프 사이클 메소드는 클래스형 컴포넌트에서만 사용 가능함.
     ▷ life cycle method categoly
         1. Mount
           => DOM 이 생성된 후 웹 브라우저상 나타나는 것
         2. Update
           => 컴포넌트의 상태가 바뀌는 경우를 의미함.
              총 4가지 업데이트 상황이 있음.
               - props 변경
               - state 변경
               - 부모 컴포넌트 리렌더링
               - this.forceupdate 로 강제 렌더링
         3. UnMount
           => 컴포넌트를 DOM 에서 제거하는 것.
*/

/* 
    static getDerivedStateFromProps(){ ... }
*/ 