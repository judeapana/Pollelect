const {conn} = require('./index')
const {User} = require('../models/user')
const createUser = (req, res, next) => {
    User(conn(req)).create(req.body, function (err, res) {
        console.log(err)
        console.log(res)
    })
    next()
}

const updateUser = (req, res, next) => {

}

const removeUser = (req, res, next) => {

}

const changeEmail = (req, res, next) => {

}
const changePwd = (req, res, next) => {

}

const changeImg = (req, res, next) => {

}
const changeStatus = (req, res, next) => {

}
module.exports = {
    createUser: createUser
}