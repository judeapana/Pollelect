const mongoose = require('mongoose');
const {String, Array, Boolean, ObjectId} = mongoose.SchemaTypes

const schema = new mongoose.Schema({
    name: {type: String, trim: true, required: [true, 'required'], unique: true},
    active: {type: Boolean},
    subdomain: {type: String, trim: true, lowercase: true, unique: true, required: [true, 'required'],},
    email: {type: String, required: [true, 'required'], unique: true},
    contact: String,
    subs: [{type: ObjectId, ref: 'Subs'}],
    billing: [
        {
            first_name: {type: String},
            last_name: {type: String},
            email: {type: String},
            country: {type: String},
            address: {type: Array},
            city: {type: Array},
            state: {type: String},
            postal_code: {type: String},
        }
    ]
})


schema.query.get;
schema.query.update;
schema.query.remove;
schema.methods.changeStatus;
schema.methods.changeEmail;
schema.query.create;

module.exports = schema