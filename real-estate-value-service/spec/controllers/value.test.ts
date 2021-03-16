import controller from '../../src/controllers/value'
import { NextFunction, Request, Response } from 'express'
import valueService from '../../src/services/value';
import value from '../../src/services/value';

describe('Testing controller', () => {
    test('should return status code 400 when parameter is null', async (done) => {
        const req: Request = {
            params: {
                meters: null
            }
        } as unknown as Request
        const res: Response = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response
        const next: NextFunction = jest.fn() as unknown as NextFunction

        try {
            await controller.get(req, res, next)

            expect(res.status).toHaveBeenCalledWith(400)

            done()
        } catch (err) {
            expect(err).toBe(null)

            done(err)
        }
    })

    test('should return status code 412 when parameter is out of range', async (done) => {
        const req: Request = {
            params: {
                meters: 13000
            }
        } as unknown as Request
        const res: Response = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response
        const next: NextFunction = jest.fn() as unknown as NextFunction

        try {
            await controller.get(req, res, next)

            expect(res.status).toHaveBeenCalledWith(422)

            done()
        } catch (err) {
            expect(err).toBe(null)

            done(err)
        }
    })

    test('should return status code 200 when success, and has cache', async (done) => {
        const req: Request = {
            params: {
                meters: 12
            }
        } as unknown as Request
        const res: Response = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response
        const next: NextFunction = jest.fn() as unknown as NextFunction


        valueService.getSquareMeterValue = jest.fn().mockResolvedValue(10);
        valueService.getCache = jest.fn().mockResolvedValue(200)

        try {
            await controller.get(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.send).toHaveBeenCalledWith({
                source: 'cache',
                price: 200
            })
            done()
        } catch (err) {
            console.log(err);
            
            expect(err).toBe(null)

            done(err)
        }
    })

    test('should return status code 200 when success, and has no cache', async (done) => {
        const req: Request = {
            params: {
                meters: 20
            }
        } as unknown as Request
        const res: Response = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        } as unknown as Response
        const next: NextFunction = jest.fn() as unknown as NextFunction


        valueService.getSquareMeterValue = jest.fn().mockResolvedValue(10);
        valueService.getCache = jest.fn().mockResolvedValue(null)
        valueService.setCache = jest.fn().mockResolvedValue(null)
        try {
            await controller.get(req, res, next)

            expect(res.status).toHaveBeenCalledWith(200)
            expect(res.send).toHaveBeenCalledWith({
                source: 'calc',
                price: 200
            })
            done()
        } catch (err) {
            expect(err).toBe(null)

            done(err)
        }
    })
})
