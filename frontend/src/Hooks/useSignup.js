import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContex'
import { useNavigate } from 'react-router-dom'

export default function useSignup() {
    const [loading, setLoading] = useState(false)
    const {authuser,setAuthuser}=useAuthContext()
    const navigate=useNavigate()
    const signup = async ({ name, username, password, confirmpassword, gender }) => {
        console.log(name, username, password, confirmpassword, gender)
        const inputOk = await handleInputErrors({ name, username, password, confirmpassword, gender })
        if (!inputOk) return

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullname: name, username, password, cpassword: confirmpassword, gender })
            })
            const data = await res.json();
            console.log(data)
            if(data.message){
                toast.error(data.message)
            }
            if (data.error) {
                throw new Error(data.error)
            }
            // Local storage
            await localStorage.setItem('chatt-user',JSON.stringify(data))

            // context
            await setAuthuser(data)
            // console.log(authuser)
            // if(authuser){
            //     navigate('/')
            // }
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, signup }
}

const handleInputErrors = ({ name, username, password, confirmpassword, gender }) => {
    if (!name || !username || !password || !confirmpassword || !gender) {
        toast.error("Please fill all the fields")
        return false
    }
    if (password !== confirmpassword) {
        toast.error("Password doesn't match")
        return false
    }
    if (name.length < 5) {
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