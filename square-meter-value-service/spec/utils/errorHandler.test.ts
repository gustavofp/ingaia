import errorHandler from '../../src/utils/errorHandler';
import logger from '../../src/utils/logger';

describe('Testing error handler', () => {
    test('should call logger once', () => {
        const error = new Error()
        const infoMock = jest.fn()
        logger.error = infoMock

        errorHandler.handleError(error);

        expect(infoMock.mock.calls.length).toBe(1)
    })
})
