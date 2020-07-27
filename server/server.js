const express = require('express');
require('./config/mongoose.config');

const app = express();

app.listen(8000, () => console.log('listening on port 8000'));
