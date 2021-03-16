import server from '../../src/config/server'
import { Express } from 'express';

describe('Testing server creation', () => {
    test('application server should be defined', () => {
        jest.mock('express')

        const application: Express = server.create();

        expect(application).toBeDefined();
    })
})