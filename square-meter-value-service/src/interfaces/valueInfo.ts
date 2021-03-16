import { Types } from 'mongoose'

export default interface IValueInfo {
    _id: Types.ObjectId,
    price: number,
}