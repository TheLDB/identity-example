const express = require('express');

const app = express();

app.listen(8080, () => null);

app.get('/api/auth/createFlow', require('./api/createFlow'));

app.get('/callback', require('./api/callback'));