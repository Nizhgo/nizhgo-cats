import React, {createContext, useEffect, useState} from "react";
import {firebaseAuth, firebaseDatabase} from "../utils/firebaseConfig";

export const AuthContext = createContext<any | null>(null);

export const AuthProvider = ({children}: any) =>
{
    const [currentUser, setCurrentUser] = useState<any>(null);
    const [viewedCatsCount, setViewedCatsCount] = useState<number | null>();
    const [userNickname, setUserNickname] = useState();
    const [likedCatsCount, setLikedCatsCount] = useState<number | null>();
    useEffect(() => {
        firebaseAuth.onAuthStateChanged((user) => setCurrentUser(user))
    })

    useEffect(() =>
    {
        if (currentUser) {

            firebaseDatabase.ref(`users/${currentUser.uid}/viewed_cats`).on('value', (snapshot) =>
            {
                setViewedCatsCount(snapshot.val());
            })
        }

    })

    useEffect(() =>  {
        if (currentUser)
        {
            firebaseDatabase.ref(`users/${currentUser.uid}/viewed_cats`).set(viewedCatsCount);

        }
    }, [viewedCatsCount])

    useEffect(() =>  {
        if (currentUser)
        {
            firebaseDatabase.ref(`users/${currentUser.uid}/liked_cats`).on('value', snap =>{
                setLikedCatsCount(snap.numChildren());
            })

        }
    }, [viewedCatsCount])

    useEffect(() => {
        if (currentUser)
            firebaseDatabase.ref(`users/${currentUser.uid}/nickname`).get()
                .then(snapshot => {
                    setUserNickname(snapshot.val());
                });
    })

    return(
        <AuthContext.Provider
        value={{currentUser, setCurrentUser, viewedCatsCount, setViewedCatsCount, userNickname, likedCatsCount}}
        >
            {children}
        </AuthContext.Provider>
    )
}