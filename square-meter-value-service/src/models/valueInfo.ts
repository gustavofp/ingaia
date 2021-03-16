import mongoose, { Schema } from "mongoose"
const ValueInfo = {
    name: 'Value',
    collection: 'values',
    schema: {
        _id: Schema.Types.ObjectId,
        price: Schema.Types.Number
    }
}

export default ValueInfo
