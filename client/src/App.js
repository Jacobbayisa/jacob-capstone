import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Header from './components/Header/Header';
import Upload from './components/upload/upload';

function App() {
  

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path ="/" component ={Home}/>
          <Route path = "/login" component ={Login}/>
          <Route path = "/signup" component ={SignUp}/>
          <Route path = "/upload" component = {Upload}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
