const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
//permitir que o back-end consiga entender as requisições como json
app.use(express.json());
//usar as rotas criadas no routes
app.use(routes);
app.use(errors());

module.exports = app;