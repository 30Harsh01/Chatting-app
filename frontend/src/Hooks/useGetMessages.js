import { useEffect, useState } from "react"
import useConversation from "../zustang/useConversation"
import toast from "react-hot-toast"

const useGetMessages = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation()

    useEffect(() => {
        const getMessage = async () => {
            setLoading(true)
            try {
                // Corrected: Added fetch function to make the HTTP request
                const res = await fetch(`/api/message/${selectedConversation._id}`)
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
