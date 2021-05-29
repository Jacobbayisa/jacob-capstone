import React, {useState} from 'react';
import {Link,Redirect} from "react-router-dom";
import './Login.scss';
import {useAuth} from '../../context/auth';
const url = "http://localhost:8080/rental";

const Login = () =>{

    
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState("");
    const [password,setPassword] = useState("");
    const { setAuthTokens} = useAuth();
    
    //const referer = props.location.state.referer || '/';

    const postLogin = (e) => {
        e.preventDefault();
        setLoggedIn(true);
        // axios.post("https://ww.somePlace.com/auth/login",{
        //   userName,
        //   password
        // })
        // .then(result =>{
        //   if(result.status === 200){
        //     setAuthTokens(result.data);
        //     setLoggedIn(true);
        //   } else {
        //     setIsError(true);
        //   }
        // }).catch(e => {
        //   setIsError(true);
        // });
      }
    
      if(isLoggedIn){
       return <Redirect to = "/" />;
      }
    return(
        <div className="login">
           <form method="post" onSubmit ={postLogin}>
               <div className="login__input-cont"> 
                <label htmlFor="username">User Name</label>
                <input  type ="text" name="username" required/>
               </div>
               <div className="login__input-cont"> 
                <label htmlFor="password">Password</label>
                <input name="password" type ="password" required/>
               </div>
               <div className="login__submit-cont">
                    <button type="submit" className="login__submit">Login</button>
               </div>
           </form>
           
           <div className="login__button-cont">
                <button className="login__google">Sign in with Google</button>
                <button className="login__facebook">Sign in with Facebook </button>
           </div>
           <div className="login__create-account"> 
            <p>Do Not have account?</p>
            <Link to="/signup"> <a href="" className="login__create-account__link"> Sign Up Here </a> </Link>
           </div>
           
       </div>
    )
}

export default Login;