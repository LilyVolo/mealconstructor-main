// src/context/auth.context.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5005";

interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthContextType {
  isLoggedIn: boolean;
  isLoading: boolean;
  user: User | null;
  storeToken:(token: string) => void;
  authenticateUser:() => void;
  logOutUser: ()=> void;
}


const AuthContext = React.createContext<AuthContextType>(
 { isLoggedIn: false,
    isLoading: false,
    user: null,
    storeToken: () => {},
    authenticateUser: () => {},
    logOutUser: () => {},
}
)
if (!AuthContext) {
  throw new Error("AuthContext must be used within an AuthProviderWrapper");
}

function AuthProviderWrapper(props:any) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  
  const storeToken = (token: any) => {
    localStorage.setItem('authToken', token);
  }  

  
  const authenticateUser = () => {         
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem('authToken');
    
    // If the token exists in the localStorage
    if (storedToken) {
      // We must send the JWT token in the request's "Authorization" Headers
      axios.get(
        `${API_URL}/auth/verify`, 
        { headers: { Authorization: `Bearer ${storedToken}`} }
      )
      .then((response) => {
        // If the server verifies that the JWT token is valid  
        const user = response.data;
       // Update state variables        
        setIsLoggedIn(true);
        setIsLoading(false);
        setUser(user);        
      })
      .catch((error) => {
        // If the server sends an error response (invalid token) 
        // Update state variables         
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);        
      });      
    } else {
      // If the token is not available (or is removed)
        setIsLoggedIn(false);
        setIsLoading(false);
        setUser(null);      
    }   
  }

  const removeToken = () => {                   
    localStorage.removeItem("authToken");
  }
 
 
  const logOutUser = () => {     
    removeToken();   
    authenticateUser();
  }  
 
  
  useEffect(() => {                                    
    authenticateUser();                  
   }, []);

  
  return (                                                   
    <AuthContext.Provider 
      value={{ 
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOutUser     
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };
