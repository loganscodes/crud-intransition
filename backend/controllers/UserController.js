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

export const updateUser = async(req, res) => {
    try {
        const { status } = req.body
        if(!status) return res.status(400).json({ message: 'Status is required' });
        
        const user = await UserModel.findOne({ where: { id:req.params.id } })
        if(!user) return res.status(404).json({ message: 'User not found' });

        await UserModel.update({status}, { where: { id: req.params.id } })

        res.json({ message: 'User status updated' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteUser = async(req, res) => {
    try {
        await UserModel.destroy({ where: { id: req.params.id } })
        res.json({ "message" : "User Deleted" })
    } catch (error) {
        res.json({ message: error.message })
    }
}

