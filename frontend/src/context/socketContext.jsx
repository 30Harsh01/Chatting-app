import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./authContex";
import io from 'socket.io-client';

export const SocketContext = createContext();
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log("API_BASE_URL",API_BASE_URL)

export const useSocketContext=()=>{
    return useContext(SocketContext)
}

export const SocketContextProvider  = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authuser } = useAuthContext();

    useEffect(() => {
        if (authuser) {
            const socket = io(API_BASE_URL,{    //backend
                query:{
                    userId:authuser._id,
                },
            });   
            setSocket(socket);

            socket.on('getOnlineUsers',(users)=>{
                setOnlineUsers(users)
            })

            return()=>socket.close()
        }
            else{
                if(socket){
                    socket.close()
                    setSocket(null)
                }
            }
    },[authuser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};


