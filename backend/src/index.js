const express = require('express');
const routes = require('./routes');

const app = express();

//permitir que o back-end consiga entender as requisições como json
app.use(express.json());
//usar as rotas criadas no routes
app.use(routes);

app.listen(3333);