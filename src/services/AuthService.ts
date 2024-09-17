import { useState } from "react";
import { config } from "../config/config";

interface LoginFormData {
    email: string,
    password: string,
    remember_me? : boolean
}

const AuthService = () => {
    const baseUrl = `${config.apiUrl}`;
    
    const processLogin = async (formData: FormData) => {
        const url = baseUrl+"/login";
        console.log(url);

        const loginFormData : LoginFormData = {
            email: formData.get('email') as string,
            password: formData.get("password") as string,
            remember_me: formData.get("remember_me") ? true : false
        }
        const response = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(loginFormData)
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

  return {
    processLogin,
  };
};

export default AuthService;