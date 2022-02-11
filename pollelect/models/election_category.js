const mongoose = require("mongoose");
const {ObjectId, String, Boolean} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'required'],
        trim: true,
        uppercase: true
    },
    status: {
        type: Boolean,
        required: [true, 'required']
    },
    elections: [
        {
            type: ObjectId,
            ref: 'Election'
        }
    ]
})
schema.query.create;

schema.query.get;
schema.query.update;
schema.query.remove;
schema.methods.changeStatus;
schema.query.elections;

module.exports = schema
