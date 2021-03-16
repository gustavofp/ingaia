import { Request, Response, NextFunction } from 'express'
import IValueInfo from '../interfaces/valueInfo'
import valueService from '../services/value'
import { Types } from 'mongoose'
import errorHandler from '../utils/errorHandler';

const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params

        if (!id) {
            return res.status(400)
        }
        
        const objectId = Types.ObjectId(id)
        const value: IValueInfo = await valueService.get(objectId)
        if (!value) {
            return res.status(204)
        }

        return res.status(200).send(value)
    } catch(error) {
        errorHandler.handleError(error)
        next(error)
    }
};

export default {
    get
}


