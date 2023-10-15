import './App.css';
import Navbarcomponents from './components/Navbarcomponents';
import Intro from './components/Intro';
import Content from './components/Content'
import './style/main.css'

function App() {
  return (
    <div>
      {/* Intro */}
      <div className='myBG'>
        <Navbarcomponents/>
        <Intro/>
      </div>
      {/* END Intro */}
      <div className='content'>
        <Content/>
      </div>
  </div>
  );
}

export default App
