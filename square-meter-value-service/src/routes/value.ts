import { Router } from 'express'
import IRoute from '../interfaces/route';
import controller from '../controllers/value';

const PATH: string = '/value'
const create = (): Router => {
    const router:Router = Router()

    router
    .get('/:id', controller.get)

    return router
}

const route: IRoute = {
    create,
    PATH
};
export default route;