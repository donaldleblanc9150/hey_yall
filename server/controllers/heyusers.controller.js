const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const heyUser = require('../models/heyUser.model');

module.exports = {
    register(req, res) {
        heyUser.create(req.body)
        .then(newheyUser => {
            const token = jwt.sign({
                id: newheyUser._id,
                email: newheyUser.email
            }, process.env.SECRET_KEY);

            // console.log(token)
            res.cookie('token', token, {
                httpOnly: true
            })
            .json({status: 'success'})
        })
        .catch(err => res.status(400).json(err));
    },

    async login(req, res){
        const {email, password} = req.body;
        const heyuser = await heyUser.findOne({ email });
        // const errorMessage = 'Hey yall, please check your email and password.';
        if(heyuser === null) {
            return res.sendStatus(400);
        }
        
        const result = await bcrypt.compare(password, heyuser.password);
        
        if(result == false) {
            return res.sendStatus(400);
        }

        const token = jwt.sign({
            id: heyuser._id,
            email: heyuser.email
        }, process.env.SECRET_KEY);

        res
            .cookie('token', token, {
                httpOnly: true
            })
            .json({ status: 'Success Yall', token });
    },
    
    logout(_, res) {
        res.clearCookie('token');
        res.json({status: 'Success Yall'});
    }
}
