import redis, { RedisClient, ClientOpts } from 'redis'
import logger from '../utils/logger'

const options:  ClientOpts = {
    host: 'redis',
    port: 6379
}
const cache: RedisClient = redis.createClient(options)

cache.on('connect', () => {
    logger.info('REDIS READY')
});

cache.on('error', (e: Error) => {
    logger.error('REDIS ERROR', e)
});

export default cache;