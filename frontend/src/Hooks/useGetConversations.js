import { useEffect, useState } from "react"
import toast from "react-hot-toast"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch(`${API_BASE_URL}/api/user/hello`,{
                    credentials: "include",
                });
                const data = await res.json();
                // console.log(data)
                if (data.error) {
                    // console.log(data)
                    toast.error(data.error)
                    return
                }
                    // Update the conversations state with the fetched data
                    setConversations(data)
            } catch (error) {
                // console.log(error)
                toast.error(error.message)
            } finally {
                setLoading(false)
            }
        }
        getConversations()
    }, [])

    return { loading, conversations }
}

export default useGetConversations
