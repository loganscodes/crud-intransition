import { DataTypes } from 'sequelize'
import db from '../database/db.js'

const UserModel = db.define('users', {
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING }
})


export default UserModel