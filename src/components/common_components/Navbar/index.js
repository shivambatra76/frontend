import React from 'react';
import '../../styles/index.css'
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';



const PageHeader = () => {
    return (
        <AppBar className='NavBar'>
            <div className='Logo'>
                <MenuRoundedIcon />
                <p>HOPES</p>
            </div>
            <div className='details'>
                <div className='auth'>
                    <NavLink to={"login"}> Login</NavLink>
                    <NavLink to={"signup"}>SignUp</NavLink>
                </div>
                <Avatar alt="Remy Sharp" src="" />
            </div>


        </AppBar>
    );
};

export default PageHeader;