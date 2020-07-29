const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// require('dotenv').config({ path: __dirname + '/.env'});
require('dotenv').config();
//this is creating the connection to MongoDB
require('./config/mongoose.config');
const heyuserRoutes = require('./routes/heyusers.routes');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));

function middleware(req, res, next){
    console.log('inside middleware Yall!');
    next();
}
app.use(middleware);
heyuserRoutes(app);

app.listen(8000, () => console.log('listening now!'));