import IValueInfo from '../interfaces/valueInfo'
import ValueInfoModel from '../models/valueInfo'
import mongo from  '../config/mongo'
import { Mongoose, Schema, Model, Types } from 'mongoose'

const get = async (id: Types.ObjectId): Promise<IValueInfo> => {
    const client: Mongoose = await mongo.getConnection();

    const valueInfoModel: Model<any> = client.models[ValueInfoModel.name] || client.model(ValueInfoModel.name ,new Schema(ValueInfoModel.schema), ValueInfoModel.collection)
    return await valueInfoModel.findOne({ _id: id });
}

export default {
    get
}