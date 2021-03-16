import logger from './logger';

const handleError = (error: Error): void => {
    logger.error('An error ocurred', error)
}

export default {
    handleError
}