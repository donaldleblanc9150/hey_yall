import React from 'react';
import axios from 'axios';
import {navigate} from '@reach/router'

export default function LogoutButton() {
    function handleClick() {
        axios.delete('http://localhost:3000/api/heyusers/logout', {
            withCredentials: true
        })
        .then(() => navigate('/login'))
        .catch(console.log);
    }

    return (
        <button onClick={handleClick}>Log Out</button>
    )
};