import React from 'react';
import './App.css';
import Navegation from './components/router/Navegation';
import About from './components/router/About';
import Shopping from './components/router/Shopping';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Details from './components/router/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navegation />
        <Route path="/about" exact component={About}/>
        <Route path="/Deputados" exact component={Shopping}/>
        <Route path="/shopping/:id" component={Details}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
