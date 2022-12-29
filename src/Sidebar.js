import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
    const recentItem = (topic) => (
            <div className='sidebar_recentItem'>
                <span className='sidebar_hash'>#</span>
                <p>{topic}</p>
            </div>
        )
  return (
    <div className='sidebar'>
        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGFic3RyYWN0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
            <Avatar className='sidebar_avatar'/>
            <h2>Haruna Faruk</h2>
            <h4>harunafaruk2004@gmail.com</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>
                    2,353
                </p>
            </div>
            <div className="sidebar_stat">
                <p>Views on post</p>
                <p className='sidebar_statNumber'>
                    2,448
                </p>
            </div>
        </div>
         <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareEngineering')}
            {recentItem('design')}
            {recentItem('developer')}
         </div>
    </div>
  )
}

export default Sidebar