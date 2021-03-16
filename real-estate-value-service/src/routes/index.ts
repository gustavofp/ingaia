import { Router } from 'express'
import healthRouter from './health'
import valueRouter from './value'
import IRouter from '../interfaces/router';

const create = (): Router => {
    const router: Router = Router()

    router.use(valueRouter.PATH, valueRouter.create())
    router.use(healthRouter.PATH, healthRouter.create())

    return router;
}

const moduleRouter: IRouter = {
    create
}
export default moduleRouter;