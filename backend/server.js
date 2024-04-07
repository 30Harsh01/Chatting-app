import express from 'express'
import  conn  from './database/conn.js'
import dotenv from 'dotenv'
import authRoutes from './Routes/authRoutes.js' 
const app=express()
dotenv.config()
const PORT=process.env.PORT||3000
app.use(express.json())
app.use('/api/auth',authRoutes)








app.listen(PORT,()=>{
    conn()
    console.log(`listening to port ${PORT}`)
})
