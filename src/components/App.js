import React, { useEffect, useState } from "react";
import AppRouter from "routes/AppRouter";
import authService from "fbInstanc";

function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 세션에 로그인(user)이 저장되어 있으면 true
  // 로그아웃하면 false
  useEffect(()=>{
    authService.onAuthStateChanged((user)=> {
        if(user){
          setIsLoggedIn(true);
        }else{
          setIsLoggedIn(false);
        }
        setInit(true);
    });
  },[]);
  return (
  <div>
    {init? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..." }
    <footer>&copy; Rwitter {new Date().getFullYear()} </footer>
  </div>
  );
}

export default App;
