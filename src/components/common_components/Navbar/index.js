import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const PageHeader = () => {
    return (
        <div>
            <NavLink to={"login"}> Login</NavLink>
            <NavLink to={"signup"}>SignUp</NavLink>
        </div>
    );
};

export default PageHeader;