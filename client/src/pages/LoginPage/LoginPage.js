import React, {useState} from "react";
import { Link,Redirect } from 'react-router-dom';
import Login from '../../components/Login/Login';
import axios from 'axios';
import {useAuth} from '../../context/auth';
import './LoginPage.scss';

const url = "http://localhost:8080/rental";

const LoginPage = (props) =>{
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    const { setAuthTokens} = useAuth();
    
    //const referer = props.location.state.referer || '/';

    const postLogin = () => {
        axios.post("https://ww.somePlace.com/auth/login",{
          userName,
          password
        })
        .then(result =>{
          if(result.status === 200){
            setAuthTokens(result.data);
            setLoggedIn(true);
          } else {
            setIsError(true);
          }
        }).catch(e => {
          setIsError(true);
        });
      }
    
      if(isLoggedIn){
        return <Redirect to = "/" />;
      }

    return(
       <div className="loginPage">
           <Login/>
       </div>
    )
}

export default LoginPage;