import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const useGetConversations = () => {
    const [loading, setLoading] = useState(false)
    const [conversations, setConversations] = useState([])
    
    useEffect(() => {
        const getConversations = async () => {
            setLoading(true)
            try {
                const res = await fetch('/api/user');
                const data = await res.json();
                // console.log(data)
                if (data.message) {
                    console.log(data)
                    toast.error(data.message)
                    // return
                }
                    // Update the conversations state with the fetched data
                    setConversations(data)
                if(data.error){ 
                    console.log(error)
                    throw new Error(data.error)
                }
            } catch (error) {
                console.log(error)
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
