

function increse(number, callback){
    setTimeout(() => {
        const result = number + 10;
        if(callback) {
            callback(result);
        }
    },1000)
}
increse(0,result => console.log(result)); // 익명 함수를 인자로 넘겨줌.
// truly 이기 때문에 출력이 된다. falsy 면 출력이 되지 않는다.

// 함수 안에서 다른 함수 호출 하는 게 callback 함수.
// 매개변수이지만 함수이다.



/* 
    여러 번 순차적으로 결과물을 콜백 함수로 전달하기 위해서는
    중첩을사용해서 호출할 수 있다..

    하지만 이러한 형태는 가독성도 좋지 않고 유지보수도 힘들기 때문에
    피해야 하는 패턴 중 하나이다. 이러한 형태를 콜백 지옥이라고 한다..
*/


increse(0,result => {
    console.log(result);
    increse(result,result => {
        console.log(result);
        increse(result,result=>{
            console.log(result);
        })
    })
}
)


/* 
    그래서 비동기 함수를 쓰는 이유?

    1. 시간이 오래 걸리는 작업을  처리하기 위해서

    2. 사용자 인터페이스가 중단되지 않기 위해서

    3. 여러 작업을 동시에 처리하기 위해서
        (실제로 자바스크립트는 그렇게 동작하지 않지만, 이벤트 루프를 통해 동시에 처리되는 것처럼 보임)

    4. 콜백 지옥을 해결하기 위해서

    결국 느린 작업이 전체 프로그램의 흐름을 막지 않도록 하기 위함.
    이러면 사용자에게 더 나은 경험을 제공할 수 있고,
    특히 네트워크 요청, 파일 입출력, 탸이머 같은 시간이 오래 걸리는 작업에서 큰 효과를 발휘한다.
*/