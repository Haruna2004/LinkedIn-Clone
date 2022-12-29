import React from 'react'
import './Header.css'
import './avatar1.jpg';
import SearchIcon from '@mui/icons-material/Search'
import HomeIcon from '@mui/icons-material/Home'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'
import HeaderOption from './HeaderOption'

 
const Header = () => {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="logo" />

            <div className="header_search">
                <SearchIcon />
                <input type="text"/>
            </div>
        </div>
        <div className="header_right">
            <HeaderOption Icon={HomeIcon} title='Home' />
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
            <HeaderOption Icon={ChatIcon} title='Message' />
            <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
            <HeaderOption avatar="https://media.licdn.com/dms/image/C5603AQEhz1BgwN5QrQ/profile-displayphoto-shrink_800_800/0/1660292572258?e=1677715200&v=beta&t=Cgbyv5Mn3nKM7_HWe05VZDg9fZm5pi5oI3XgfXD4ceE" title="me"/>
        </div>
    </div>
  )
}

export default Header