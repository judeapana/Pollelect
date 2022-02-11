const connection = require('../connection')
const {Organisation} = require('../models/init')

const conn = async function (req) {
    res.main = await connection(`mongodb://localhost:27017/main`)
    Organisation(res.main).find({name: req.subdomain}).then(async (res) => {
        if (!res)
            res.status(404).send()
        else
            res.db = await connection(`mongodb://localhost:27017/${req.subdomain}`)
    }).catch((error) => {
        res.status(500).send()
    })
    next()
}
module.exports = {
    conn
}