import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';


    const handelGoogleSignIn = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_url)
        })
        // .finally(()=>setIsLoading(false));
    }
    return (
        <div>
            <h1>Please Login</h1>
            <button onClick={handelGoogleSignIn}type="button" class="btn btn-primary">Google Login</button>
        </div>
    );
};

export default Login;