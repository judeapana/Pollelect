const mongoose = require('mongoose')

module.exports = async function connectionFactory(host) {
    return mongoose.createConnection(host);
}