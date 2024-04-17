import {createContext, useContext, useState } from "react";

export const AuthContext=createContext();

//enlist-disabled-next-line react-refresh/only-export-components
export const useAuthContext=()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider=({children})=>{
    const [authuser,setAuthuser]=useState(JSON.parse(localStorage.getItem("chatt-user"))||null)
    return <AuthContext.Provider value={{authuser,setAuthuser}}>{children}</AuthContext.Provider>

}