const mongoose = require("mongoose");
const {String, Date} = mongoose.SchemaTypes
const paginate = require('mongoose-paginate-v2');
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    img: [
        String
    ],
    password: {
        type: String,
        required: true
    },
    telephone: {
        type: String,
        required: true
    },
    email: [
        {
            type: String,
            required: true
        }
    ],
    confirmed: {
        type: Boolean
    },
    role: {
        type: {enum: ['ADMIN', 'SUPPORT']}
    },
    last_logged_in: {
        type: Date
    },
})

schema.plugin(paginate)
schema.query.create;

schema.statics.get = function (query = {}, select = "", page = 1, limit = 10, many = true) {
    return this.model.paginate(query, {select, page, limit}, function (error, res) {

    })
}


schema.statics.update = function (many = true) {

}
schema.statics.remove = function (many = true) {

}
schema.methods.changeStatus = function () {

}

schema.methods.changeRole = function () {

}

schema.methods.changePwd = function () {

}
schema.methods.changeEmail = function () {

}

schema.methods.changeUsername = function () {

}

schema.methods.changeTel = function () {

}

schema.methods.confirmed = function () {

}

module.exports = schema
