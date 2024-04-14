// 스타일 시트, 자바스크립트 데이터를 import
/* 
./ : 현재 있는 공간
../: 한번 나가서
/  : 프로젝트 경로
/src : src폴더로 들어가서
 */
import { useState } from 'react'
import data from './data'
import './styles.css'

export default function Accordion(){
  // 선택된 title의 번호를 저장할 state(UI와 연결된 변수)
  let [selected, setSelected] = useState(null)
  // 플래그(단일선택 //다중선택)            false = 단일 | true = 다중선택
  let [enableMultiSelection, setEnableMultiSelection] = useState(false)
  let [selectedList, setSelectedList] = useState([])
  function clickTitle(id){
    console.log(id);
    // 아이디를 selected 에 넣음(+한번 더 누르면 내용이 없어지게)  
    // id값이 seleted와 다르면 id값으로, 같으면 null
    id !== selected ? setSelected(id) : setSelected(null) 
  }

  // 다중 선택일때는 선택된 이들을 모두 보관 ==> 배열이용
  function multiSelectTitle(id){
    // 배열의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 []로 감싼다
    // 객체의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 {}로 감싼다
    let copyList = [...selectedList]
    //console.log(selectedList.indexOf(id))   // 다중선택배열에서 id값을 검사
    // 만약 배열 안에서 id를 찾을 수 없다면 -1, 찾으면 위치
    let findIdxOfId = selectedList.indexOf(id) // 아이디 이미 있으면 그 위치
    //있는지 검사 ==> 없으면 추가
    if(findIdxOfId === -1){
      copyList.push(id)
    }else{
      //있었으면 배열에서 제거 splice(인덱스, 몇개없앨건지)
      copyList.splice(findIdxOfId,1)  //찾은 인덱스로부터 1개업ㅄㅂ앰
    }
    setSelectedList(copyList)
    // console.log(selectedList)
  }

  return(
    <div className="wrapper">
      <button onClick={() => {setEnableMultiSelection(!enableMultiSelection)
      console.log(enableMultiSelection)}}>다중 선택 ON/OFF</button>
      <div className="accordion">
        {
          data.map((element, idx)=>{
            return(
              <div>
                <div className="item" key={idx}>
                  <div className="title" onClick={()=>{
                    enableMultiSelection === true ?
                    multiSelectTitle(element.id) : clickTitle(element.id)
                    }}>
                    <h3>{element.title}</h3>
                    <span>+</span>
                  </div>
                  {

                    enableMultiSelection === true ?
                    selectedList.indexOf(element.id) !== -1 && <div className='content'>{element.content}</div> 
                    : selected === element.id && <div className='content'>{element.content}</div>
                    // (selectd === element.id && enableMultiSelection === false) ? 
                    // <div className = "content">{element.content}</div> :
                    // null
                  }
                </div>
              </div>
            )
          })
        }


      </div>
    </div>
  )
}