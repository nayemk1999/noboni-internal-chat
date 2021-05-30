import React from 'react';
import './Content.css'
import Chat from './SideBar/Chat/Chat';
import SideBar from './SideBar/SideBar';
const Content = () => {
    return (
        <div className='App'>
            <div className="app-body">
                <SideBar></SideBar>
                <Chat></Chat>
            </div>
        </div>
    );
};

export default Content;