const express = require('express');

const OngController = require('../src/controllers/OngController');
const IncidentsController = require('../src/controllers/IncidentController');

const routes = express.Router();

/*
* Métodos HTTP:
*
* GET: Buscar informação no back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/

/*
* Tipos de parâmetros:
*
* Query: Parâmetros nomeados enviados na rota após "?" (filtros, paginação) (ex: /users?name=Diego) -> usa request.query
* Route Params: Parâmetros utilizados para identificar recursos (ex: /users/:id) -> usa request.params    
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos -> usa request.body
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*')
 */

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);

//exportar variáveis para fora do arquivo
module.exports = routes;