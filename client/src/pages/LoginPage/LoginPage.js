import React, {useState} from "react";
import { Link,Redirect } from 'react-router-dom';
import Login from '../../components/Login/Login';
import axios from 'axios';
import './LoginPage.scss';

const LoginPage = () => {

    return(
       <div className="loginPage">
           <Login/>
       </div>
    )
}

export default LoginPage;