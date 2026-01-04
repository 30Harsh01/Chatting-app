// import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContex'
import { useNavigate } from 'react-router-dom'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import { useState } from "react";

const useLogout=()=>{
    const [loading,setLoading]=useState(false)
    const {authuser,setAuthuser}=useAuthContext()
    const navigate=useNavigate()
    const logout=async()=>{
        setLoading(true)
        try {
            const res=await fetch(`${API_BASE_URL}/api/auth/signout`,{
                method:"POST",
                headers:{ "Content-Type": "application/json" },
                credentials: "include"
            })
            const data=await res.json()
            if(data.error){
                throw new Error(data.error)
            }
            if(data.message){
                toast.error(data.message)
                // return
            }
            localStorage.removeItem('chatt-user')
            setAuthuser(null)
        } catch (error) {
            toast.error(error)
        }finally{
            setLoading(false)
        }
    }
    return {loading,logout}
}
export default useLogout