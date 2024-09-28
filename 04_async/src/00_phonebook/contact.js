import { Component } from "react";
import { ContactInfo } from './contactInfo';


class Contact  extends Component {
    // 1. 데이터 관리(추가, 수정, 삭제 , 조회) -> 생성자를 통해서 초기화
    constructor(props) {
        super(props)
        this.state={
            keyword:'',    // 실시간으로 입력할 데이터를 저장할 속성명
            selectKey:-1,  // 선택한 항목의 인덱스 번호를 저장
        contactData :[{name:"홍길동", phone:"010-1234-5678"},
                      {name:"김수아", phone:"010-8687-3437"},
                      {name:"김수응", phone:"010-3333-4444"},
                      {name:"김수하", phone:"010-5555-6666"},
                      {name:"채형원", phone:"010-7777-8888"}]
        }
        // 이벤트 연결 구문 작성
        this.handlerChange = this.handlerChange.bind(this);  
    }

    handlerChange(e) {
        this.setState({keyword:e.target.value})
    }

    handlerClick(key){
        this.setState({selectKey:key})
        console.log(key,'is selected');
    }

    render() {
        const mapToComponent=(data) => {
            data=data.sort()
            data=data.filter((contact) => {
                return contact.name.indexOf(this.state.keyword) > -1;
            })

            /* 조건에 만족하는 데이터만 출력할 때 */
            console.log('검색한 data => ', data);
            // --- 배열의 각각의 값을 분리 =>  map 함수 이용 리턴(1) ---
            return data.map((contact,i) => {
                // contact => 배열의 각각 요소를 의미 i => 인덱스 번호
                console.log('contact : ',contact,'i : ', i);
                // key -> 배열의 내부적으로 구분하는 구분자로써 필수
                return (<ContactInfo contact={contact} key={i} onClick={() => this.handlerClick(i)}/>)
            })
        }
        return (
            <div>
                <div className="form-group">
                    <label for="Name">검색</label>
                    <input name="keyword" placeholder="Search" className="form-control"/>
                </div>
                <div>
                    {mapToComponent(this.state.contactData)};
                </div>
            </div>
        )
    }
}

export default Contact;
