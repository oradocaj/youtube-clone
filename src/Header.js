import React from 'react';
import './Header.css';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from '@mui/material';

function Header() {
    return (
        <div className="header">
            
            <div className='header__left'>
                <MenuIcon />
                <img
                    className='header__logo' 
                    src='https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-5.png' 
                    alt="" 
                />
            </div>

            <div className='header__input'>
                <input placeholder='Search' type="text" />
                <SearchIcon className='header__inputButton'/>
            </div>

            <div className='header__icons'>
                <VideoCallIcon className='header__icon' />
                <AppsIcon className='header__icon' />
                <NotificationsIcon className='header__icon' />
                <Avatar
                    alt="Ogic Rogic"
                    src="https://avatars.githubusercontent.com/u/81166740?s=400&u=374c92a97cc84ddbee9d210fed03d4aae069865f&v=4"
                />
            </div>

        </div>
    )
};

export default Header;
