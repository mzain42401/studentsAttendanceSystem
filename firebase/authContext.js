import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { createContext } from "react";
import { auth } from "./firebase";


export const AuthContext = createContext()

const authData = () => {


    const addStudent = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

    return {
        addStudent
    }

}




const AuthProvider = (props) => {
    const data = authData()
    return (
        <AuthContext.Provider value={data} >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider