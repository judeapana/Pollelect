const mongoose = require("mongoose");
const {ObjectId, String, Date} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    reply: {type: String, required: [true, 'required']},
    date: {type: Date, required: [true, 'required']},
    ticketId: {type: ObjectId, ref: 'Ticket', required: [true, 'required']},
    adminId: {type: ObjectId, ref: 'Admin', required: [true, 'required']}
})

schema.query.get;
schema.query.update;
schema.query.remove;
schema.query.create;

module.exports = schema
