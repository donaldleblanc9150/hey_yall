import React, { useState, useEffect } from 'react';
import queryString from 'query-string'; //this component will retrieve data from the url
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import './Chat.css';

let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState(''); 
    const [messages, setMessages] = useState([]); 
    const ENDPOINT = 'localhost:5000';

    // useEffect(() => {
    //     const { name, room } = queryString.parse(location.search);

    //     socket = io(ENDPOINT);

    //     setName(name);
    //     setRoom(room)

    //     socket.emit('join', { name, room }, (error) => {
    //         if(error) {
    //             alert(error);
    //         }
    //     }, [ENDPOINT, location.search]);

    //     console.log(socket);

    //     return () => {
    //         socket.emit('disconnect');

    //         socket.off();
    //     }
    // }, [ENDPOINT, location.search]);

    useEffect(() => {
        const { name, room, color } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name)

        socket.emit('join', { name, room, color }, (error) => {
            if(error) {
                alert(error);
            }
        });
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', message => {
            setMessages(messages => [...messages, message]);
        });
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, []);

    //we are now creating a function for sending messages -----

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">

                <InfoBar room={room} />
                <Messages messages={messages} name={name} color={color} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;