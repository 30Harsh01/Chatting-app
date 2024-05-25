import { useState } from "react";
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/authContex';
// import { useNavigate } from "react-router-dom";

const useSignin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthuser } = useAuthContext();
  // const navigate = useNavigate();

  const signin = async ({ username, password }) => {
    setLoading(true);
    const inputOk = await handleInputErrors({ username, password });
    if (!inputOk) {
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });
      console.log(res)
      if (!res.ok) {
        throw new Error("Failed to sign in. Please try again.");
      }
      const data = await res.json();
      localStorage.setItem('chatt-user', JSON.stringify(data));
      setAuthuser(data);
      // navigate("/"); // Redirect to home page after successful sign in
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }
  return { loading, signin }
}

const handleInputErrors = async ({ username, password }) => {
  if (!username || !password) {
    toast.error("Please fill all the fields");
    return false;
  }
  if (username.length < 5) {
    toast.error("Username is too short");
    return false;
  }
  if (password.length < 5) {
    toast.error("Password is too short");
    return false;
  }
  return true;
}

export default useSignin;
