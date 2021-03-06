import React from 'react';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import Login from './views/Login';

import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
    return (
        <div>
            <Router>
                <Login path="login" />
                {/* When user joins they will be directed to the main page to login or "join" */}
                <Route path="/" exact component={Join} />
                {/* after user "joins" or logs in they are redirect to the Chat */}
                <Route path="/chat" component={Chat} />
            </Router>
        </div>
    );
};

export default App;