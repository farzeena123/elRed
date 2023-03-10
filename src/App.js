import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import MenuHome from './Components/Menu/Menu';
import {Route,Routes} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <Header/>
    <MenuHome/>
    <Routes>
      <Route  path='' />
    </Routes>

    </div>
  );
}

export default App;
