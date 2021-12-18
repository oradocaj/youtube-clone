import React, { useState } from 'react';
import './Header.css';
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
//es7 snippets extension

function Header() {
    const [inputSearch, setInputSearch] = useState('');

    return (
        <div className="header">
            
            <div className='header__left'>
                <MenuIcon />
                <Link to={'youtube-clone/'}>
                    <img
                        className='header__logo' 
                        src='https://www.transparentpng.com/thumb/youtube-logo/hd-youtube-logo-image-5.png' 
                        alt="" 
                    />                
                </Link>
            </div>

            <div className='header__input'>
                <input 
                onChange={e => setInputSearch(e.target.value)}
                value={inputSearch} 
                placeholder=' Search' 
                type="text" 
                />
                <Link className='header__link' to={`youtube-clone/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
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
