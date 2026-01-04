import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const server = http.createServer(app);
console.log("FRONTEND_URL",process.env.FRONTEND_URL)
const io = new Server(server, {
    cors: {
        origin: [process.env.FRONTEND_URL], // Ensure your frontend URL is allowed
        methods: ['GET', 'POST']
    }
});

// Added this line to track user sockets
const userSocketMap = {}; // { userId: socketId }

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on('connection', (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    // Fixed issue: Corrected userSocketMap assignment
    if (userId !== "undefined") {
        userSocketMap[userId] = socket.id; // Change socket.io to socket.id
        console.log(`Mapped ${userId} to socket ${socket.id}`);
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        const userId = Object.keys(userSocketMap).find(key => userSocketMap[key] === socket.id);
        if (userId) {
            delete userSocketMap[userId];
            console.log(`Unmapped ${userId} from socket ${socket.id}`);
        }
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
