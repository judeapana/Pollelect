const mongoose = require("mongoose");
const {ObjectId, String, Boolean} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    email: {type: String, required: [true, 'required']},
    report: {type: String, required: [true, 'required']},
    solved: {type: Boolean, required: [true, 'required']},
    replies: [{type: ObjectId, ref: 'TicketReply', required: [true, 'required']}]
})

schema.query.get;
schema.query.update;
schema.query.remove;
schema.query.create;


module.exports = schema
