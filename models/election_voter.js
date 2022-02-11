const mongoose = require("mongoose");
const {ObjectId, Boolean} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    voterId: {
        type: ObjectId,
        required: [true, 'required']
    },
    electionId: {
        type: ObjectId,
        ref: 'Election',
        required: [true,'required']
    },
    active: {
        type: Boolean
    }
})
schema.query.get;
schema.query.update;
schema.query.remove;
schema.query.create;



module.exports = schema
