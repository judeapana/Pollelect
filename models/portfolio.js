const mongoose = require("mongoose");
const {ObjectId, String, Boolean, Number} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    name: {type: String, required: [true, 'required']},
    order: {type: Number, required: [true, 'required']},
    status: {type: Boolean, required: [true, 'required']},
    electionId: {type: ObjectId, ref: 'Election', required: [true, 'required']},
    candidates: [{type: ObjectId, ref: 'Candidate', required: [true, 'required']}],
    votes: [{type: ObjectId, ref: 'Vote'}]
})

schema.query.get;
schema.query.update;
schema.query.remove;
schema.query.byCandidate;
schema.query.byVotes;
schema.query.create;

module.exports = schema
