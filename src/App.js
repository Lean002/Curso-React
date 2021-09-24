import logo from './logo.svg';
import NavBar from './components/NavBar/navbar';
import Home from './components/Home/home';
import Selector from './components/Home/selector';
import About from './components/Home/about';
import './App.css';
import './components/estilos.css'

function App() {
  return (
    <>
    <NavBar/>
    <Home/>    
    <Selector/>
    <About/>
    </>
  );
}

export default App;
