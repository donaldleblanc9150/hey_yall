const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.send({ response: "Hey Yall the Server is up and running."}).status(200);
});

module.exports = router;