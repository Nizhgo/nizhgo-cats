import React from "react";
import {firebaseDatabase} from "../Firebase/firebaseConfig";



export function useFirebaseDB() {
    const WriteToDB = (path: string, value: any) => {
        firebaseDatabase.ref(path).set(value);
    }
    const ReadFromDB = (path: string) => {
        return firebaseDatabase.ref(path).once('value');
    }

    return {WriteToDB, ReadFromDB};
}
