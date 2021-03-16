import { Router } from 'express'
import IRoute from '../interfaces/route';

const PATH: string = '/health'
const create = (): Router => {
    const router:Router = Router()

    router
    .get('/', (req, res) => {
        res.send({
            status: 'ok'
        })
    })

    return router
}

const route: IRoute = {
    create,
    PATH
};
export default route;