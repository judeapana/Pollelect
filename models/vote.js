const mongoose = require("mongoose");
const {Number, ObjectId} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    single_count: {type: Number, min: 0, max: 1, required: [true, 'required']},
    voterId: {type: ObjectId, required: [true, 'required']},
    electionId: {type: ObjectId, ref: 'Election', required: [true, 'required']},
    candidateId: {type: ObjectId, ref: 'Candidate', required: [true, 'required']},
    portfolioId: {type: ObjectId, ref: 'Portfolio', required: [true, 'required']},
})

schema.query.vote;
schema.query.get;
schema.query.create;
schema.query.update;
schema.query.remove;

module.exports = schema
