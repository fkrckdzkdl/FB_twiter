import authService,{createUser,userLogin,googleLogin} from "fbInstanc";
import React, { useState } from "react";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";

const Auth = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error,setError] = useState("");

    const onChange = (event)=>{
        //event.target의 속성 값을 변수로 저장하는 방법
        const {target: {name,value}} = event;
        if(name==="email"){
            setEmail(value)
        }else if(name==="password"){
            setPassword(value)
        }
        console.log(value)
    };
    const onSubmit = async (event) =>{
        event.preventDefault();
        try{
            if(newAccount){
                createUser(authService,email,password)
            } else{
                userLogin(authService,email,password)
            }
        }catch(e){
            console.log("에러발생");
            setError(e.message);
        }
        //회원가입 하면 자동으로 로그인
        
    };

    const googleLoginOnClick = ()=>{
        const provider = new GoogleAuthProvider();
        googleLogin(authService,provider);
    }

    return(
    <div>
        <form onSubmit={onSubmit}>
            <input 
                name="email"
                type="text" 
                placeholder="Email" 
                required
                value={email} 
                onChange={onChange}            
            />
            <input 
                name="password"
                type="password" 
                placeholder="Password"
                required 
                value = {password}
                onChange={onChange}            
            />
            <input type="submit" value={newAccount ? "Create Account" : "Log In"} />
        </form>
        {error}
        <div>
            <button onClick={googleLoginOnClick}>Continue with Google</button>
        </div>
    </div>
        )}
export default Auth;