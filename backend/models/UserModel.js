import { DataTypes } from 'sequelize'
import db from '../database/db.js'

const UserModel = db.define('users', {
    name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            notEmpty: true
        }
    },
    password: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        } 
    },
    last_login_time:{
        type: DataTypes.DATE,
        allowNull: true,
    },
    registration_time: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status:{
        type: DataTypes.ENUM('active', 'blocked'),
        defaultValue: 'active'
    }
}, { timestamps: false })


export default UserModel