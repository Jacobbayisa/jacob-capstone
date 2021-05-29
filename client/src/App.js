import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home/Home';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import Header from './components/Header/Header';
import UploadRental from './components/UploadRental/UploadRental';
import {AuthContext} from './context/auth';
import Admin from "./pages/Admin/Admin";
import PrivateRoute from './PrivateRoute';

function App() {
  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);

  const setTokens = (data) =>{
    localStorage.setItem("tokens",JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <div className="App">
      <AuthContext.Provider value ={{ authTokens, setAuthTokens:setTokens}}>
        <Router>
          <Header/>
          <Switch>
            <Route exact path ="/" component ={Home}/>
            <Route path = "/login" component ={LoginPage}/>
            <Route path = "/signup" component ={SignupPage}/>
            <Route path = "/upload" component = {UploadRental}/>
            {/* <PrivateRoute path = "/upload" component = {UploadRental}/> */}
            <PrivateRoute path="/admin" component={Admin} />
          </Switch>
        </Router>
        </AuthContext.Provider>
    </div>
  );
}

export default App;
