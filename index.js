const express = require('express');
const fs = require('fs');
const https = require('https');
const routes = require('./src/routes/router');
require('./src/database/index');

const app = express();

app.use(express.json());

app.use(routes);

// Certificate
const privateKey = fs.readFileSync('/etc/letsencrypt/live/perfectrobrasil.com.br/privkey.pem', 'utf8');
const certificate = fs.readFileSync('/etc/letsencrypt/live/perfectrobrasil.com.br/cert.pem', 'utf8');
const ca = fs.readFileSync('/etc/letsencrypt/live/perfectrobrasil.com.br/chain.pem', 'utf8');

const credentials = {
	key: privateKey,
	cert: certificate,
	ca: ca
};

const httpsServer = https.createServer(credentials, app);

const port = process.env.PORT || 3333;

httpsServer.listen(port);