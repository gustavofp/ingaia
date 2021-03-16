import cache from '../../src/config/redis'

describe('Testing cache creation', () => {
    test('cache client should be defined', () => {
        jest.mock('redis')

        expect(cache).toBeDefined();
    })
})
