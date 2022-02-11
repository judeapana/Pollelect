const mongoose = require('mongoose');
const {String, Array, Boolean, Decimal128} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    name: {type: String, trim: true, unique: true},
    from: {type: Number, min: 0, required: [true, 'required']},
    to: {type: Number, required: [true, 'required']},
    price: {type: Decimal128, required: [true, 'required']},
    bonus: {type: Decimal128, default: 0, required: [true, 'required']},
    active: {type: Boolean, required: [true, 'required']},
})


schema.query.get;
schema.query.update;
schema.query.remove;
schema.query.create;

module.exports = schema