import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from "@mui/icons-material/Chat"
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./index.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
        <div className="navbar-left">
            <span className='logo'>
                AceBook
            </span>
        </div>
        <div className="navbar-middle">
            <div className="serchbar-wrapper">
                <SearchOutlinedIcon />
                <input type="text" placeholder='serch for friends post or video' className="search" />
            </div>
        </div>
        <div className="navbar-right">
            <div className="navbar-links">
                <span>Homepage</span>
                <span>Timeline</span>
            </div>
            <div className="icon-wrapper">
                <div className="navbar-icon">
                    <PersonIcon style={{color:"#fff"}}/>
                    <span>1</span>
                </div>
                <div className="navbar-icon">
                    <ChatIcon style={{color:"#fff"}}/>
                    <span>1</span>
                </div>
                <div className="navbar-icon">
                    <NotificationsIcon style={{color:"#fff"}}/>
                    <span>1</span>
                </div>
            </div>
            <img className="profile-pic" src='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80' alt='profile-pic'/>
        </div>
    </div>
  )
}

export default Navbar