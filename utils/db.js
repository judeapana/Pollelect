const mongoose = require('mongoose')
const tenant = () => {
    const db = mongoose.createConnection(process.env.MONGODB_URI)
    db.on("error", (error) => {
        console.log(error)
    })
    db.on("open", () => {
        console.log("Connected")
    })
    return db
}

module.exports = {
    tenant
}
