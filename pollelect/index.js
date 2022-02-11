const express = require('express');
const connection = require('./connection')
const {User} = require('./models/init')
const userRouter = require('./routes/user')
const app = express();
app.use(express.json());
app.use('/users', userRouter)
const md = async function (req, res, next) {
    res.db = await connection(`mongodb://localhost:27017/${req.query.name}`)
    next()
}

app.get('/', md, (req, res) => {
    User(res.db).find({_id: '6151d20e638a1891236e5581'}, function (err, d) {
        console.log(d)
    })
    res.send('')
})
app.listen(3000)


