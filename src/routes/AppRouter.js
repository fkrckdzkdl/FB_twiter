import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import Home from "./Home";
import Profile from "components/Profile";

const AppRouter =  (props)=>{    
  return(
            <>
            <Routes>
            {props.isLoggedIn ? 
                <Route path="/" element={<Home />} />
                : 
                    <Route path="/" element={<Auth />} />
                }
                <Route path="/profile" element={<Profile />} />
            </Routes>
            </>
    );
};

export default AppRouter;