import './App.css';
import { useState } from 'react';

function App() {
  // 일반변수를 쓰지 않고, state를 쓰던 html은 자동렌더링 되기때문에 state를 씀
  // state 변경하는법 : 1. 등호로 변경금지, 2.두번째 파라미터를 이용하여 변경
  // - 동적인 UI 만드는 step
  // 1. html css로 미리 디자인완성
  // 2. UI의 현재 상태를 state로 저장
  // 3. state에 따라 UI가 어떻게 보일지 작성
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([1,3,4]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <button onClick={()=> {
        let copy = [...글제목];
        copy[0] = '여자코트 추천';
        글제목변경(copy);
      }}>버튼</button>
      <div className="list">
        <h4>{글제목[0]} <span onClick={()=> 따봉변경(따봉+1) }>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={()=> { setModal(true) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(e, i) {
          return (
            <div className="list" key={i}>
              <h4>{ 글제목[i] } <span onClick={()=> {
                console.log(parseInt(따봉[i])+1);
                따봉변경(parseInt(따봉[i])+1)
                  // 따봉변경(parseInt(따봉[i])+1)
                } 
              }>👍</span> {따봉[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      {
        modal === true ? <Modal/> : null
      }
    
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )

}

export default App;
