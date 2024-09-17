import express from 'express'
import { createUser, loginUser } from '../controllers/UserLoginController.js'
import { getAllUsers } from '../controllers/UserController.js'

const routerAccessUser = express.Router()
const routerUser = express.Router()

routerAccessUser.post('/register', createUser)
routerAccessUser.post('/login', loginUser)

routerUser.get('/', getAllUsers)



export {
    routerAccessUser,
    routerUser 
}