const mongoose = require("mongoose");
const {String, Date} = mongoose.SchemaTypes
const paginate = require('mongoose-paginate-v2');
const schema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'required'],
        unique: true,
        trim: true
    },
    img: [
        String
    ],
    password: {
        type: String,
        required: [true, 'required']
    },
    telephone: {
        type: String,
        required: [true, 'required']
    },
    email: [
        {
            type: String,
            required: [true, 'required']
        }
    ],
    confirmed: {
        type: Boolean,
        required: [true, 'required']
    },
    role: {
        type: {
            enum: ['ADMIN', 'SUPPORT'], required: [true, 'required']
        }
    },
    last_logged_in: {
        type: Date
    },
})

schema.plugin(paginate)

schema.query.create = async function (obj, many = false) {

    this.model.create(obj, function (err, res) {

    })
};

schema.statics.get = function (query = {}, select = "", page = 1, limit = 10, many = true) {
    return this.model.paginate(query, {select, page, limit}, function (error, res) {

    })
}


schema.statics.update = async function (many = true) {

}
schema.statics.remove = async function (many = true) {

}
schema.methods.changeStatus = async function () {

}

schema.methods.changeRole = async function () {

}

schema.methods.changePwd = async function () {

}
schema.methods.changeEmail = async function () {

}

schema.methods.changeUsername = async function () {

}

schema.methods.changeTel = async function () {

}

schema.methods.confirmed = async function () {

}

module.exports = schema
