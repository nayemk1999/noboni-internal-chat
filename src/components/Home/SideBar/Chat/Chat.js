import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, MicRounded, MoreVertOutlined, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router';
import firebase from 'firebase'
import { UserContext } from '../../../../App';
import db from '../../../../firebase';
import './Chat.css'
import { useStateValue } from '../../../../Redux/StateProvider';
const Chat = () => {
    const { id } = useParams();
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('')
    const [contacts, setContacts] = useState({})
    const [messages, setMessages] = useState([])
    const sendMessage = (e) => {
        e.preventDefault();
        db.collection("contactList").doc(id).collection("message").add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('')
    }
    useEffect(() => {
        if (id) {
            db.collection("contactList").doc(id).onSnapshot((snapshot) =>
                setContacts(snapshot.data()));

            db.collection("contactList")
                .doc(id)
                .collection("message")
                .orderBy("timestamp", "asc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) =>
                        doc.data())))
        }
    }, [id])

    return (
        <div className='chat'>
            <div className="chat-header">
                <Avatar ></Avatar>
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
                <div className="chat-container">
                    {
                        messages.map((message) => (

                            <p className='chat-message'>
                                <span className={`chat-name ${true && 'chat-receiver'}`}>{message.name}</span>
                                {message.message}
                            </p>
                        ))
                    }
                </div>

            </div>
            <div className="chat-footer">
                <IconButton>
                    <InsertEmoticon></InsertEmoticon>
                </IconButton>
                <form action="">
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text" name="enter your message" id="" />
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