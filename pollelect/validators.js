const validate = require("mongoose-validator");
const validator = require('validator')
const pwdVal = require('zxcvbn')

validate.extend('isUnique', async function (value, args) {
    let obj = await this.constructor.findOne({[args]: value})
    if (obj) {
        return obj._id === this._id;
    }
    return true
}, 'is already taken')

validate.extend('isStrongPassword', async function (value, args) {
    return pwdVal(value)?.score > 2
}, 'Your password is not strong')

const usernameValidator = [
    validate({
        validator: function (value) {
            return !validator.equals(value, 'admin')
        },
        arguments: ['admin'],
        message: 'Your username cant contain "{ARGS[0]}"'
    }),
    validate({
        validator: 'isUnique',
        arguments: 'username',
        message: 'Your username is already taken'

    }), validate({
        validator: 'isLength',
        arguments: [3, 20],
        passIfEmpty: false,
        message: 'username  must be between {ARGS[0]} and {ARGS[1]} characters long'

    }),
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: false,
        message: 'Your username must be contain only alpha-numeric characters',
        httpStatus: 400
    })
]


const emailValidator = [
    validate({
        validator: 'isUnique',
        arguments: 'email',
        message: 'Your email is already taken'
    }),
    validate({
        validator: 'isEmail',
        passIfEmpty: false,
        message: 'Invalid email address'
    })
]

const subdomainValidator = [
    validate({
        validator: 'isAlphanumeric',
        passIfEmpty: false,
        message: 'Your subdomain must be contain only alpha-numeric characters',
        httpStatus: 400
    }),
    validate({
        validator: 'isLength',
        arguments: [3, 20],
        passIfEmpty: false,
        message: 'Subdomain name must be between {ARGS[0]} and {ARGS[1]} characters long'
    })
]

const phoneNumberValidator = [
    validate({
        validator: 'isMobilePhone',
        passIfEmpty: false,
        message: 'Invalid mobile number provided'
    })
]

const passwordValidator = [
    validate({
        validator: 'isStrongPassword',
        // message: 'Your password is not strong',
    })
]

module.exports = {
    usernameValidator,
    emailValidator,
    subdomainValidator,
    phoneNumberValidator,
    passwordValidator
}