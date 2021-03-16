import express, { Router } from 'express'
import bodyParser from 'body-parser'
import router from '../routes'
import { Express } from 'express';
import constants from './constants';
import swaggerUi from 'swagger-ui-express'

import * as swaggerDocument from '../../swagger.json';

const applyDecoders = (server: Express): Express => {
    server.use(bodyParser.json());

    server.use(bodyParser.urlencoded({
        extended: true
    }));

    return server;
}

const applyRouter = (server: Express, applicationRouter: Router): Express => {
    server.use(constants.PATH, applicationRouter)
    server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    return server;
}


const create = (): Express => {
    const server: Express = express();

    const serverWithEncoders: Express = applyDecoders(server);
    const applicationRouter: Router = router.create();
    const serverWithRoutes: Express = applyRouter(serverWithEncoders, applicationRouter)

    return serverWithRoutes;
}

export default {
    create
}