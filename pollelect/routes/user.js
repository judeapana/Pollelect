const express = require('express')
const router = express.Router()
const {createUser} = require('../controllers/user')
router.get('/', createUser, (req, res) => {
    res.send('hello')
})

router.post('/', (req, res) => {

})

router.patch('/:id', (req, res) => {

})
router.delete('/:id', (req, res) => {

})
router.patch('/:id/change/pwd/', (req, res) => {

})
router.patch('/:id/change/email', (req, res) => {

})
router.patch('/:id/change/img', (req, res) => {

})
router.patch('/:id/change/status', (req, res) => {

})

module.exports = router