import React from 'react';
import "./Signup.scss";

const Register  = () =>{
 return (
    <div className="register">
        <form className="register__form">
            <div className="register__input-cont"> 
                <label htmlFor="username">User Name</label>
                <input  type ="text" name="username" required/>
            </div>
            <div className ="register__input-cont">
                <label htmlFor="email">Email</label>
                <input  type ="email" name="email" required/>
            </div>
            <div className="register__input-cont"> 
                <label htmlFor="password">Password</label>
                <input name="password" type ="password" required/>
            </div>
            <div className="register__input-cont"> 
                <label htmlFor="confirm-password">Confirm Password</label>
                <input name="confirm-password" type ="password" required/>
            </div>
            <div className="register__submit-cont">
                <button type="submit" className="register__submit">Sign Up</button>
            </div>
        </form>
        
    </div>
 )
}

export default Register;