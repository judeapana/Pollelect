const mongoose = require("mongoose")
const {Boolean, Date, ObjectId} = mongoose.SchemaTypes
const {usernameValidator, passwordValidator} = require('../validators')
const schema = new mongoose.Schema({
    username: {type: String, required: true, unique: true, trim: true, validate: usernameValidator},
    img: {type: String, default: ''},
    password: {type: String, required: [true, 'required'], validate: passwordValidator},
    telephone: {type: String, required: [true, 'required']},
    email: {type: String, required: [true, 'required']},
    status: {type: Boolean},
    orgId: {type: ObjectId, ref: 'Organisation', required: [true, 'required']},
    confirmed: {type: Boolean},
    last_logged_in: {type: Date},
})

schema.plugin(require('mongoose-bcrypt'));

schema.query.get;
schema.query.create;
schema.query.update;
schema.query.remove;
schema.methods.changeEmail;
schema.methods.changePwd;
schema.methods.changeImg;
schema.methods.changeStatus;


module.exports = schema
