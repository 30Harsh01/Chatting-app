// import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContex'
import { useNavigate } from 'react-router-dom'


import { useState } from "react";

const useLogout=()=>{
    const [loading,setLoading]=useState(false)
    const {authuser,setAuthuser}=useAuthContext()
    const navigate=useNavigate()
    const logout=async()=>{
        setLoading(true)
        try {
            const res=await fetch('/api/auth/signout',{
                method:"POST",
                headers:{ "Content-Type": "application/json" },
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