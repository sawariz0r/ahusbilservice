import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


//Components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Nyheter from './components/pages/nyheter';
import About from './components/pages/about';
import Prices from './components/pages/prices';
import Employees from './components/pages/employees';
import Infoheader from './components/headerComponent/infoheader';

//Includes
import './assets/css/main.css'

function App() {
  return (
    <Router>
    <div className="App">
      

      <Header/>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/Produkter' component={Products}/>
        <Route exact path='/Nyheter' component={Nyheter}/>
        <Route exact path='/About' component={About}/>
        <Route exact path='/Prices' component={Prices}/>
        <Route exact path='/Employees' component={Employees}/>

        <Infoheader/>
    </div>
    </Router>
  );
}

export default App;
