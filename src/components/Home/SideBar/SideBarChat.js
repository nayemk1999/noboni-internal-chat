import { Avatar } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import db from '../../../firebase';
import './SideBarChat.css'
const SideBarChat = ({ addNewChat, name, id, address }) => {
    const createChat = () => {
        const chatName = prompt('Enter Your Name')
        if (chatName) {
            db.collection("contactList").add({
                name: chatName,
                address: 'Dhaka,Bangladesh'
            })
        }
    }
    return !addNewChat ? (
        <Link to={`/${id}`}>
            <div className='sidebar-chat'>
                <Avatar></Avatar>
                <div className="chat-info">
                    <h6>{name}</h6>
                    <p>{address}</p>
                </div>
            </div>
        </Link >

    ) :
        (
            <div onClick={createChat} className="sidebar-chat">
                <h4>Add New Chat</h4>
            </div>
        )
        ;
};

export default SideBarChat;