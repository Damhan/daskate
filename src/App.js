import React from 'react';
import './App.css';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar/>
        <Switch>
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
