const mongoose = require("mongoose")
const {tenant} = require('../utils/db')
const Org =require("../models/organisations")

const domain = async (req) => {
    const db = tenant().useDb(process.env.MONGODB_ADMIN_DB)
    // const Org = await db.model("Org");
    const subdomain = await Org.find({subdomain: req.subdomain}, {subdomain: 1})

    if (req.subdomain)
        global.connectTenant = tenant().useDb(req.subdomain)
    else
        global.connectTenant = null
}

module.exports = domain
