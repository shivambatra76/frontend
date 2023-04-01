import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPassword, setIsValidPassword] = useState(false);

    const handleEmailChange = (event) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValidEmail(emailRegex.test(event.target.value));
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
        setIsValidPassword(passwordRegex.test(event.target.value));
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle submission logic here
    };

    const isSubmitDisabled = !isValidEmail || !isValidPassword || password !== confirmPassword;

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="email"
                value={email}
                onChange={handleEmailChange}
                error={!isValidEmail}
                helperText={!isValidEmail && 'Invalid email'}
            />
            <TextField
                label="Password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={!isValidPassword}
                helperText={!isValidPassword && 'Invalid password. Must be at least 8 characters long, and contain at least 1 special character and 1 number.'}
            />
            <TextField
                label="Confirm Password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                error={password !== confirmPassword}
                helperText={password !== confirmPassword && 'Passwords do not match'}
            />
            <Button variant="contained" color="primary" type="submit" disabled={isSubmitDisabled}
            >
                Sign Up
            </Button>
        </form>
    );
};

export default Signup;
