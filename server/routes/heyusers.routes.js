const heyusersCtl = require('../controllers/heyusers.controller');

module.exports = app => {
    app.post('/api/heyusers', heyusersCtl.register);
    app.post('/api/heyusers/login', heyusersCtl.login);
    app.delete('/api/heyusers/logout', heyusersCtl.logout);

}
