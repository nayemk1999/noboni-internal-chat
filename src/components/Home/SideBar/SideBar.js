import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import db from '../../../firebase';
import './SideBar.css'
import SideBarChat from './SideBarChat';

const SideBar = () => {
    const [contacts, setContacts] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    
    useEffect(() => {
        db.collection("contactList").onSnapshot((snapshot) =>
            setContacts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        )
    }, [])
    return (
        <div className='sidebar'>
            <div className="sidebar-header">
                <Avatar src={loggedInUser.photoURL }></Avatar>
                <div className="sidebar-headerRight">
                    <IconButton>
                        <DonutLarge></DonutLarge>
                    </IconButton>
                    <IconButton>
                        <Chat></Chat>
                    </IconButton>
                    <IconButton>
                        <MoreVert></MoreVert>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="search-container">
                    <SearchOutlined></SearchOutlined>
                    <input placeholder="Enter new Search Chat" type="text" name="" id="" />
                </div>
            </div>
            <div className="sidebar-chats">
                <SideBarChat addNewChat></SideBarChat>
                {
                    contacts.map(contact => <SideBarChat address={contact.data.address} key={contact.id} id={contact.id} name={contact.data.name}></SideBarChat>)
                }
            </div>
        </div>
    );
};

export default SideBar;