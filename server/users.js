//this file will create helper functions control everything about users - getting, updating, tracking, manage users, joing, singing in etc.
const users = [];

const addUser = ({ id, name, room, color }) => {
    //we want to take the name adn make it all lowercase...ex.. JavaScript Mastery ---> to javascriptmastery (all one word)
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();
    color = color.trim().toLowerCase();
    //now we are checking to see if another user is attempting to login with the same name as one already logged in

    const existingUser = users.find((user) => user.room === room && user.name === name && user.color === color);

    if(!name || !room) return { error: 'Hey Yall the Username and room are required' };
    if(existingUser) {
        return { error: 'Hey Yall that Username is taken' };
    }

    const user = { id, name, room, color };

    users.push(user);

    return { user };
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1) return users.splice(index, 1)[0];
}

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };