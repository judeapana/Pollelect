const mongoose = require("mongoose");
const {ObjectId, String, Boolean, Date} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        uppercase: true,
        required: [true, 'required']
    },
    beginAt: {
        type: Date,
        required: [true, 'required']
    },
    endAt: {
        type: Date,
        required: [true, 'required']
    },
    status: {
        type: Boolean
    },
    show_res: {
        type: Boolean
    },
    candidates: [
        {
            type: ObjectId,
            ref: 'Candidate'
        }
    ],
    electionCategoryId: {
        type: ObjectId,
        ref: 'ElectionCategory',
        required: [true, 'required']
    },
    votersToElections: [
        {
            type: ObjectId,
            ref: 'ElectionVoter'
        }
    ],
    votes: [
        {
            type: ObjectId,
            ref: 'Vote'
        }
    ],
    portfolios: [
        {
            type: ObjectId,
            ref: 'Portfolio'
        }
    ],

})
schema.query.create;

schema.query.get;
schema.query.update;
schema.query.remove;
schema.methods.endElection;
schema.methods.timeInterval;
schema.query.candidates;
schema.query.byCat;
schema.query.voters;
schema.query.votes;
schema.query.portfolios;

module.exports = schema
