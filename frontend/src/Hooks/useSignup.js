import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContex'
import { useNavigate } from 'react-router-dom'
import { IoReturnDownBack } from 'react-icons/io5'

export default function useSignup() {
    const [loading, setLoading] = useState(false)
    const {authuser,setAuthuser}=useAuthContext()
    const navigate=useNavigate()
    const signup = async ({ fullname, username, password, cpassword, gender }) => {
        console.log(fullname, username, password,cpassword,gender)
        const inputOk = await handleInputErrors({ fullname, username, password, cpassword, gender })
        if (!inputOk) return

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname, username, password, cpassword, gender })
            })
            const data = await res.json();
            // console.log(data)
            if(data.error){
                toast.error(data.error)
                return
            }
            // Local storage
            await localStorage.setItem('chatt-user',JSON.stringify(data))

            // context
            await setAuthuser(data)
        } catch (error) {
            console.log(error)
            toast.error(error.message)
            return
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup }
}

const handleInputErrors = ({ name, username, password, cpassword, gender }) => {
    if (!fullname || !username || !password || !cpassword || !gender) {
        toast.error("Please fill all the fields")
        return false
    }
    if (password !== cpassword) {
        toast.error("Password doesn't match")
        return false
    }
    if (fullname.length < 5) {
        toast.error("Name is too short")
        return false
    }
    if (username.length < 8) {
        toast.error("Username is too short")
        return false
    }
    if (password.length < 5) {
        toast.error("Password is too short")
        return false
    }
    return true
}