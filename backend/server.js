import express from 'express'
import  conn  from './database/conn.js'
import dotenv from 'dotenv'
import authRoutes from './Routes/authRoutes.js' 
import messageRoutes from './Routes/messageRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import cookieParser from 'cookie-parser'
const app=express()
dotenv.config()
const PORT=process.env.PORT||3000
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)
app.use('/api/user',userRoutes)






app.listen(PORT,()=>{
    conn()
    console.log(`listening to port ${PORT}`)
})
