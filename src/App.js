import NavBar from './components/NavBar/navbar';
import Home from './components/Home/home';
import About from './components/About/about';
import './App.css';
import React, {useState, useEffect} from 'react';
import Data from './data/data.json'
import {Switch,Route} from 'react-router-dom';
import CharacterDetail from './components/CharacterDetail/characterDetail';
import Character from './components/character';


function App() {
  const [CharacterInfo, setCharacterInfo] = useState([]); //Hook

  useEffect(() => {
    setCharacterInfo(Data.Characters)
  });

  return (

    <div className="App">
      <NavBar/>
      <Switch>
        <Route path='/charDetail/:code'>
          <Character charInfo={CharacterInfo} nombre={'Leandro'}/>
        </Route>
        <Route path='/' exact>
          <Home charInfo={CharacterInfo}/>          
        </Route>
        <Route path='/charDetail' exact>
          <CharacterDetail charInfo={CharacterInfo}/>
        </Route>        
        <Route path='/about' exact>
          <About/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;