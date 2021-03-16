import { Request, Response, NextFunction } from 'express'
import value from '../services/value';
import valueService from '../services/value'
import errorHandler from '../utils/errorHandler';

const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { meters } = req.params

        if (!meters) {
            return res.status(400)
        }

        const squareMeters = Number(meters)
        if (squareMeters < 10 || squareMeters > 10000) {
            return res.status(422)
        }

        const squareMeterValue = await valueService.getSquareMeterValue();
        const cachedPrice = await valueService.getCache(squareMeters, squareMeterValue)

        if (cachedPrice) {
            return res.status(200).send({ price: cachedPrice, source: 'cache' })
        }

        const price = (squareMeterValue * squareMeters)

        await valueService.setCache(squareMeters, squareMeterValue, price)

        return res.status(200).send({ price, source: 'calc' })
    } catch(error) {
        errorHandler.handleError(error)
        next(error)
    }
};

export default {
    get
}


