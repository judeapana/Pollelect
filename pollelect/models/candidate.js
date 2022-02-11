const mongoose = require("mongoose")
const {String, Boolean, Number, ObjectId} = mongoose.SchemaTypes
const schema = new mongoose.Schema({
    images: [
        String
    ],
    full_name: {
        type: String,
        required: [true, 'required'],
        uppercase: true,
        trim: true
    },
    status: {
        type: Boolean,
        default: true,
        required: [true, 'required']
    },
    order: {
        type: Number,
        required: [true, 'required']
    },
    electionId: {
        type: ObjectId,
        ref: 'Election',
        required: [true, 'required']
    },
    portfolioId: {
        type: ObjectId,
        ref: 'Portfolio',
        required: [true, 'required']
    },
    votes: [
        {
            type: ObjectId,
            ref: 'Vote'
        }
    ]
})
schema.query.create;


schema.query.get = function (many = true) {

}

schema.query.update = function (many = true) {

}
schema.query.remove = function (many = true) {

}

schema.query.byElection = function (many = true) {

}
schema.query.byPortfolio = function (many = true) {

}
schema.query.byPE = function (many = true) {

}
schema.query.cVotes = function (many = true) {

}

module.exports = schema