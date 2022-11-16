import authService from "fbInstanc";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Profile(){
    const auth = getAuth()
    const navigate = useNavigate();
    const onLogOutClick =()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            
            console.log("로그아웃")
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
    }
    return <button onClick={onLogOutClick}>Log Out</button>
}