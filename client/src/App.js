import React from 'react';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import FileUpload from './components/FileUpload'

// const App = () => {
//     return (
//         <Router>
//             {/* When user joins they will be directed to the main page to login or "join" */}
//             <Route path="/" exact component={Join} />
//             {/* after user "joins" or logs in they are redirect to the Chat */}
//             <Route path="/chat" component={Chat} />
//             <FileUpload />
//         </Router>
//     );
// };

const App = () => 
    <div className="container mt-4"> Image Upload App 
        <h4 className="display-4 text-center mb-4">
            <i className="fab fa-react"></i> React File Upload
        </h4>    
        <FileUpload />
        </div>



export default App;