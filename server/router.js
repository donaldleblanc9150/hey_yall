const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = express.Router();

const app = express();
app.use(express.json());
app.use(cors({
 credentials: true,
 origin: 'http://localhost:3000'
}));
app.use(cookieParser());

require('./config/mongoose.config');

const userRoutes = require('./routes/heyusers.routes');
userRoutes(app);
router.get('/', (req, res)=> {
    res.send({ response: "Hey Yall the Server is up and running."}).status(200);
});
app.listen(8000, () => console.log());

module.exports = router;