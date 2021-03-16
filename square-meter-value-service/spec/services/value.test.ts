import service from '../../src/services/value'
import mongo from '../../src/config/mongo'
import { Mongoose, Types } from 'mongoose'

describe('Testing value service', () => {
    test('should return correct result', async () => {
        const id = Types.ObjectId();
        const mongooseMock: Mongoose = jest.genMockFromModule('mongoose')
        const mockResult = { _id: id, price: 20 }
        mongooseMock.models.Value = {
            findOne: jest.fn().mockReturnValue(mockResult)
        } as any;
        const getConnectionMock = jest.fn().mockReturnValue(Promise.resolve(mongooseMock))
        mongo.getConnection = getConnectionMock;

        const result = await service.get(id);

        expect(result).toEqual(mockResult)
    })
})
