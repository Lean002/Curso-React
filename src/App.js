import logo from './logo.svg';
import NavBar from './components/NavBar/navbar';
import Home from './components/Home/home';
import Selector from './components/Home/selector';
import About from './components/Home/about';
import './App.css';
import './components/estilos.css'
import CharacterDetail from './components/CharacterDetail/characterDetail';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>    
      <CharacterDetail/>
      <About/>
    </div>
  );
}

export default App;
