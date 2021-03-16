import mongoose, { Mongoose } from 'mongoose';

const getConnection = async (): Promise<Mongoose> => {
    return mongoose.connect('mongodb://ingaia:ingaia@mongodb:27017/ingaia')
}

export default {
    getConnection
}