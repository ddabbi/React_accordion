import logo from './logo.svg';
import './App.css';
import Accordion from './components/accordion';


function App() {
  return (
    // jsx: 자바스크립트 안에서 html 코딩하듯이 xml형식으로 코딩하는 곳
    <div className="App">
      {/* 아코디언 컴포넌트 */}
      <Accordion/>
    </div>
  );
}

export default App;
