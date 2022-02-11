const mongoose = require("mongoose");
const {ObjectId, String, Boolean} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    username: {type: String, required: [true, 'required']},
    full_name: {type: String, required: [true, 'required']},
    email: [{type: String, required: [true, 'required']}],
    phone_numbers: [{type: String}],
    status: {type: Boolean},
    elections: [{type: ObjectId, ref: 'Election'}],
    votes: [{type: ObjectId, ref: 'Vote'}],
})

schema.query.vote;
schema.query.get;
schema.query.create;
schema.query.update;
schema.query.remove;

module.exports = schema