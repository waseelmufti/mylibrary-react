import React, { useState } from 'react'

const useToken = () => {
    
    const getToken : () => string | null = () => {
        let tokenString : string | null = localStorage.getItem("token");
        tokenString = tokenString ? JSON.parse(tokenString) : null;
        
        return tokenString;
    }
    const[token, setToken] = useState(getToken());

    const saveToken : (userToken: string | null) => void = (userToken) => {
        localStorage.setItem("token", JSON.stringify(userToken));
        setToken(userToken);
    }
    const removeToken : () => void = () => {
        localStorage.removeItem("token");
        setToken(null);

    }
  return {
    token,
    saveToken,
    removeToken
  }
};

export default useToken;
