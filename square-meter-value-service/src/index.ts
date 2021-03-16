import server  from './config/server'
import logger from './utils/logger'

server.create().listen(3000, () => logger.info('Server started'))