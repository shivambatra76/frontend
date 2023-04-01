import * as React from "react";
import { Fragment, useState } from "react";
import { TextField, Button, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import "./style.css";

const Login = (props) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEmailValid, setEmailValid] = useState(false);
    const [isPassValid, setPassValid] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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
                    <TextField required id="outlined-required" label="Email" onChange={handleEmailChange} />
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput id="outlined-adornment-password" type={showPassword ? 'text' : 'password'} endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    {/* <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" onChange={handlePassChange} /> */}
                    {/* {renderErrorMessage("pass")} */}
                </div>
                <div className="button-container">
                    <Button variant="contained" disabled={!isEmailValid && !isPassValid} type="submit">Login</Button>
                </div>
            </form>
        </Fragment>
    );
};

export default Login;