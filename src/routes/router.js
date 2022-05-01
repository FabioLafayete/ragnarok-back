const express = require('express');

const LoginController = require('../controller/login_controller');

const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('Its work!');
});

//LOGIN....
routes.get('/login', LoginController.getLogin);
routes.post('/login', LoginController.postCreateLogin);




module.exports = routes;