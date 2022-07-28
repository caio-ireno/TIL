const {Router} = require('express')
const UsersController = require('../controller/UsersController')

const route = Router()

route.get('/users', UsersController.usersList)
route.get('/users/:userId', UsersController.user)
route.post('/users', UsersController.createUser)

module.exports = route