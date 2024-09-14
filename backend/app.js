import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './database/db.js'
import { routerUser } from './routes/routes.js'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/auth', routerUser)

try {
    await db.authenticate()
    console.log('Conexion Exitosa')
} catch (error) {
    console.log('error de conexion', error)
}

app.get('/', (req, res) => {
    res.send('Proyecto arriba')
})

app.listen(8000, () => {
    console.log('running on port 8000')
})
