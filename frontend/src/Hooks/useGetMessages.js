import { useEffect, useState } from "react"
import useConversation from "../zustang/useConversation"
import toast from "react-hot-toast"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true)
            try {
                // Corrected: Added fetch function to make the HTTP request
                const res = await fetch(`${API_BASE_URL}/api/message/${selectedConversation._id}`,{
                    credentials: "include",
                })
                const data = await res.json()
                setMessages(data)
            } catch (err) {
                toast.error(err.message)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) {
            getMessage()
        }
    }, [selectedConversation?._id, setMessages])

    return { messages, loading }
}

export default useGetMessages
