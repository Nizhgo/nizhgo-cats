import React, {createContext, useEffect, useState} from "react";
import {firebaseAuth} from "../utils/firebaseConfig";

export const AuthContext = createContext<any | null>(null);

export const AuthProvider = ({children}: any) =>
{
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => setCurrentUser(user))
    })
    const [currentUser, setCurrentUser] = useState<any>(null);
    return(
        <AuthContext.Provider
        value={{currentUser, setCurrentUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}