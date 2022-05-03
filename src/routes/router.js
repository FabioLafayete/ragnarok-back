const express = require('express');

const LoginController = require('../controller/login_controller');

const routes = express.Router();


routes.get('/', (req, res) => {
    res.send('Its work!');
});

//LOGIN....
routes.post('/login/create', LoginController.postCreateLogin);
routes.post('/login', LoginController.postLogin);




module.exports = routes;