import React from 'react';
import axios from 'axios';
import "./Signup.scss";

const url = "http://localhost:8080/user";

const Signup  = () =>{

    const submitHandler = (event) =>{
        event.preventDefault();
        const username = event.target.username.value.trim();
        const email = event.target.email.value.trim();
        const password = event.target.password.value.trim();
       
        axios.post(url,{username,email,password})
            .then(res =>{
    
            })
            .catch(err => {
                console.log("error");
            });
    }
 return (
    <div className="register">
        <form className="register__form" method="POST" onSubmit ={submitHandler}>
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

export default Signup;