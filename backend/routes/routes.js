import express from 'express'
import { createUser, loginUser } from '../controllers/UserController.js'

const routerUser = express.Router()

routerUser.post('/register', createUser)
routerUser.post('/login', loginUser)


export { routerUser }