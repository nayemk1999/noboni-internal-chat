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
                <Avatar src='https://i2.wp.com/nayemkhan.com/wp-content/uploads/2020/11/My-picture0-ox8zgmumk0jnjuqoczmh1692r810mope5gpdregctw.jpg?fit=370%2C370&ssl=1'></Avatar>
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