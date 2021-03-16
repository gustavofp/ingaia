import axios, { AxiosInstance } from 'axios'
import valueService from '../../src/services/value'
import cache from '../../src/config/redis'

describe('Testing value service', () => {
    test('getSquareMeterValue should return correct price', async () => {
        axios.get = jest.fn().mockResolvedValue({ data: { _id: 'sfsfdsd', price: 10 }})
        const result = await valueService.getSquareMeterValue();

        expect(result).toBe(10)
    })

    test('getCache should return correct price', async () => {
        const cacheResultMock = '10'
        cache.get = jest.fn().mockImplementation((cache, cb) => {
            cb(null, cacheResultMock)
        })
        const result = await valueService.getCache(200, 20);

        expect(result).toBe(10)
    })
    test('setCache should return ok', async () => {
        const cacheResultMock = '10'
        cache.set = jest.fn().mockImplementation((key, price, cb) => {
            cb(null)
        })
        try {
            await valueService.setCache(200, 20, 10);
        } catch(err) {
            expect(err).toBeUndefined()
        }
    })
})
