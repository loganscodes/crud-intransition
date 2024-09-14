import UserModel from '../models/UserModel.js'
import dotenv from 'dotenv'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config()

export const createUser = async(req, res) => {
    
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await UserModel.create({ name, email, password: hashedPassword })
        res.json({
            "message" : 'Usuario creado'
        })
    } catch (error) {
        res.json({ message: error.message })
    }
}

export const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ where: { email } })
        const isValidPassword = await bcrypt.compare(password, user.password)

        if(!user || !isValidPassword) return res.status(401).json('Invalid credential')

        const token = jwt.sign(
            { id: user.id, name: user.name, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )

        res.json({ message: 'Login succesful', token })
        
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message })
    }
}