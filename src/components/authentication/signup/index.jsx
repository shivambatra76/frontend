import React from 'react';
import {useNavigate} from "react-router-dom"
const SignUp = props => {
    const navigation = useNavigate();
    return (
        <>
        <div>
            Sign Up

        </div>
        <button onClick={()=>navigation("/")}>Go to Login page</button>
        </>
    );
};



export default SignUp;