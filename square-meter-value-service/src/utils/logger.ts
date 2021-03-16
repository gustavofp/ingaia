import winston, { Logger } from 'winston';

const logger: Logger = winston.createLogger({
    format: winston.format.json(),
    defaultMeta: { service: 'square-meter' },
    transports: [
        //
        // - Write all logs with level `error` and below to `error.log`
        // - Write all logs with level `info` and below to `combined.log`
        //
        new winston.transports.Console(),
        new winston.transports.File({ filename: '../../logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: '../../logs/combined.log' }),
    ],
})

export default logger