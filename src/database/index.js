const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Login = require('../models/Login');

const connection = new Sequelize(dbConfig);

Login.init(connection);

//Login.associate(connection.models);


module.exports = connection;