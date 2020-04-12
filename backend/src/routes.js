const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('../src/controllers/OngController');
const IncidentsController = require('../src/controllers/IncidentController');
const ProfileController = require('../src/controllers/ProfileController');
const SessionController = require('../src/controllers/SessionController');

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

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}), ProfileController.index);

routes.get('/incidents',celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);

routes.post('/incidents', IncidentsController.create);

routes.delete('/incidents/:id',celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);

//exportar variáveis para fora do arquivo
module.exports = routes;