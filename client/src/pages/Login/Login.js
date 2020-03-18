import React from 'react';
import './Login.scss';

const Login = () =>{
    return(
       <div className="login">
           <form>
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
                <button className="login__google">Loggin with Google</button>
                <button className="login__facebook">Loggin with Facebook </button>
           </div>
       </div>
    )
}

export default Login;