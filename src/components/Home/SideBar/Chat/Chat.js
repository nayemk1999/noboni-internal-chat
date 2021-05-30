import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicRounded, MoreVertOutlined, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import db from '../../../../firebase';
import './Chat.css'
const Chat = () => {
    const [input, setInput] = useState('')
    const [contacts, setContacts]= useState('')
    const sendMessage= (e) => {
        e.preventDefault();
        console.log('', input)
        setInput('')
    }
    const {id} = useParams();
    
    useEffect(() => {
        if(id){
            db.collection("contactList").doc(id).onSnapshot((snapshot) => 
            setContacts(snapshot.data()))
        }
        
    }, [id])
console.log(contacts);
    return (
        <div className='chat'>
            <div className="chat-header">
                <Avatar src='https://i2.wp.com/nayemkhan.com/wp-content/uploads/2020/11/My-picture0-ox8zgmumk0jnjuqoczmh1692r810mope5gpdregctw.jpg?fit=370%2C370&ssl=1'></Avatar>
                <div className="chat-header-info">
                    <h6>{contacts.name}</h6>
                    <p>Last Seen.....</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchOutlined></SearchOutlined>
                    </IconButton>
                    <IconButton>
                        <AttachFile></AttachFile>
                    </IconButton>
                    <IconButton>
                        <MoreVertOutlined></MoreVertOutlined>
                    </IconButton>
                </div>
            </div>
            <div className="chat-body">
                <Avatar src='https://i2.wp.com/nayemkhan.com/wp-content/uploads/2020/11/My-picture0-ox8zgmumk0jnjuqoczmh1692r810mope5gpdregctw.jpg?fit=370%2C370&ssl=1'></Avatar>
                <p className='chat-message'>
                    <span className={`chat-name ${true && 'chat-receiver'}`}>Name</span>
                    hi how are....
                </p>
            </div>
            <div className="chat-footer">
                <IconButton>
                <InsertEmoticon></InsertEmoticon>
                </IconButton>
                <form action="">
                    <input value={input} onChange={(e)=> setInput(e.target.value)} type="text" name="enter your message" id="" />
                    <button onClick={sendMessage} type="submit">Send</button>
                </form>
                <IconButton>
                   <MicRounded></MicRounded> 
                </IconButton>
                
            </div>
        </div>
    );
};

export default Chat;