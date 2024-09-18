import express from 'express'
import { createUser, loginUser } from '../controllers/UserLoginController.js'
import { deleteUser, getAllUsers, updateUser } from '../controllers/UserController.js'

const routerAccessUser = express.Router()
const routerUser = express.Router()

routerAccessUser.post('/register', createUser)
routerAccessUser.post('/login', loginUser)

routerUser.get('/', getAllUsers)
routerUser.put('/:id', updateUser)
routerUser.delete('/:id', deleteUser)

export {
    routerAccessUser,
    routerUser 
}