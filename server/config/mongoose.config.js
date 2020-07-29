const mongoose = require('mongoose');

//maybe update the mongoose db for localhost/heyYallUsers
mongoose.connect('mongodb://localhost/heyuser', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});