import controller from '../../src/controllers/value';
import { NextFunction, Request, Response } from 'express'
import service from '../../src/services/value'
import IValueInfo from '../../src/interfaces/valueInfo'
import { Types } from 'mongoose'
import errorHandler from '../../src/utils/errorHandler'

describe('Testing Controller', () => {
    test('should call response function when success', async (done) => {
        const req: Request = {
            params: {
                id: '604f4e513c9ef0811c3724c3'
            }
        } as unknown as Request
        const res: Response = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response
        const next: NextFunction = jest.fn() as unknown as NextFunction

        const mockResult: IValueInfo = { _id: Types.ObjectId(req.params.id), price: 20 }
        service.get = jest.fn().mockReturnValue(Promise.resolve({mockResult}))

        try {
            await controller.get(req, res, next)

            expect(res.send).toHaveBeenCalled()

            done()
        } catch (err) {
            expect(err).toBe(null)

            done(err)
        }
    })

    test('should return response with status 400', async (done) => {
        const req: Request = {
            params: {
                id: null
            }
        } as unknown as Request
        const res: Response = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response
        const next: NextFunction = jest.fn() as unknown as NextFunction
        errorHandler.handleError = jest.fn()
        try {
            await controller.get(req, res, next)

            expect(res.status).toHaveBeenCalledWith(400)

            done()
        } catch (err) {
            expect(err).toBe(null)
            done(err)
        }
    })
})
