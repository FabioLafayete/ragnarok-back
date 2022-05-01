const express = require('express');
require('./database/index');
const routes = require('./routes/router');

const app = express();

app.use(express.json());

app.use(routes);

const port = process.env.PORT || 3333;

app.listen(port);