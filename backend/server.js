import express from 'express'
import conn from './database/conn.js'
import dotenv from 'dotenv'
import authRoutes from './Routes/authRoutes.js'
import messageRoutes from './Routes/messageRoutes.js'
import userRoutes from './Routes/userRoutes.js'
import cookieParser from 'cookie-parser'
import { app, server } from './socket/socket.js'
import cors from 'cors'

dotenv.config()

app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://secretchatss.netlify.app"
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.options("*", cors());

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  conn();
  console.log(`Listening on port ${PORT}`);
});
