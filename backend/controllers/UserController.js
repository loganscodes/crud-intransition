import dotenv from 'dotenv'

import UserModel from '../models/UserModel.js'


dotenv.config()

export const getAllUsers = async(req, res) => {
    try {
        const users = await UserModel.findAll()
        res.json(users)
    } catch (error) {
        res.json({ message: error.message })
    }
}