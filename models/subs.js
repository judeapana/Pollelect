const mongoose = require('mongoose');
const {Number, ObjectId} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    orgId: {type: ObjectId, required: [true, 'required']},
    tiers: {type: {enum: ['Free', 'Paid']}, required: [true, 'required']},
    slots: {type: Number, min: 0, default: 50, required: [true, 'required']},
    priceId: {type: ObjectId, ref: 'Price', required: [true, 'required']},
})

schema.query.get;
schema.query.update;
schema.query.remove;
schema.statics.usage
schema.query.subscribe;


module.exports = schema