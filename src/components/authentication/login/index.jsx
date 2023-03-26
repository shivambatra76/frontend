import { Fragment, useState } from "react";
import "./style.css";

const Login = (props) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPassValid, setPassValid] = useState(false);

    const renderErrorMessage = (name) => {
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    }
    const handleSubmit = (event) => event.preventDefault();

    function isValidEmail(email) {
        return /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(email);
      }
    
    const handleEmailChange = event => {
        if (isValidEmail(event.target.value)) setEmailValid(true);
    };
    const handlePassChange = event => {
        console.log(event.target.value.length)
        if (event.target.value.length > 8) setPassValid(true);
    };

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" required onChange={handleEmailChange} />
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required  onChange={handlePassChange}/>
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <button disabled={!isEmailValid && !isPassValid} type="submit">Login</button>
                </div>
            </form>
        </Fragment>
    );
};

export default Login;