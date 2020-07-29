import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Join.css';

export default function SignIn() {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [color, setColor] = useState('transparent');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <div className="color-picker-wrapper">
                    <select className="color-picker" onChange={e => setColor(e.target.value)} style={{ backgroundColor: color }} >
                        <option value="transparent">Transparent</option>
                        <option value="lightblue">Light Blue</option>
                        <option value="lightcoral">lightcoral</option>
                        <option value="lightcyan">lightcyan</option>
                        <option value="lightgreen">lightgreen</option>
                        <option value="lightslategrey">lightslategrey</option>
                        <option value="lightpink">lightpink</option>
                        <option value="lightyellow">lightyellow</option>
                    </select>
                </div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}&color=${color}`}>
                    <button className={'button mt-20'} type="submit">Sign In</button>
                </Link>
            </div>
        </div>
    );
}

