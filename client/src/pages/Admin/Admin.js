import React from 'react';
import { useAuth} from "../../context/auth";

const Admin = (props) => {
    const {setAuthTokens} = useAuth();

    const logOut = () =>{
        setAuthTokens();
    }

    return(
        <div>
            <div> Admin Page </div>
            <button onClick ={logOut}> Log out </button>
        </div>
    );
}

export default Admin;