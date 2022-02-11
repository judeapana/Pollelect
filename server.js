const express = require('express')
const cors = require('cors')
const app = express()
const {tenant} = require('./utils/db')
require('dotenv').config();
global.connectTenant = tenant()
app.use(cors())
app.use(express.json())
const domain = require('./middleware/subdomain')


app.get("/", (req, res) => {
    domain('test_').then((res)=>{
        console.log(res)
    }).catch((err)=>console.log(res))
    res.send('here')

})

app.listen(3000)
