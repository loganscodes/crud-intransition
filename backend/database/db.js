import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()


const db = new Sequelize(
        process.env.DBA_NAME, 
        process.env.DBA_USER, 
        process.env.DBA_PASSWORD, 
    {
        host: process.env.DBA_HOST,
        dialect: 'mysql'
    }
)

export default db