import { useState } from "react";
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContex'
import { useNavigate } from "react-router-dom";
const useSignin=()=> {
    const [loading, setLoading] = useState(false)
    const {authuser,setAuthuser}=useAuthContext()
    const navigate=useNavigate()
    const signin = async ({ username, password }) => {
        setLoading(true)
        console.log(username, password,)
        const inputOk = await handleInputErrors({  username, password,})
        if (!inputOk) return

        setLoading(true)
        try {
            const res = await fetch("/api/auth/signin", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            })
            const data = await res.json();
            console.log(data)
            if(data.message){
                toast.error(data.message)
                return
            }
            if (data.error) {
                throw new Error(data.error)
            }
            // Local storage
            await localStorage.setItem('chatt-user',JSON.stringify(data))
            // navigate('/')
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
    return { loading, signin }
}

const handleInputErrors = ({ username, password}) => {
    if (!username || !password ) {
        toast.error("Please fill all the fields")
        return false
    }
    if (username.length < 5) {
        toast.error("Username is too short")
        return false
    }
    if (password.length < 5) {
        toast.error("Password is too short")
        return false
    }
    return true
}
export default useSignin