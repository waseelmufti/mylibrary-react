// Fetch wrapper helps to centerlize our request / response related logic

import { config } from "../config/config";
import { getToken, removeToken } from "../helpers/authHelper";

interface FetchOptions extends RequestInit {
    headers?: Record<string, string>;
}

export async function fetchApi(endpoint: string, options: FetchOptions = {}, requiresAuth: boolean = true) {
    const url = `${config.apiUrl}/${endpoint}`;
    
    if(requiresAuth){
        const token = getToken();
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
        };
    }else{
        options.headers = {
            ...options.headers,
            'Content-Type': 'application/json',
        };
    }

    try {
        const response = await fetch(url, options);

        // Check if unauthorized
        if (response.status === 401) {
            // Logout user: remove token and redirect
            removeToken();
            window.location.href = '/auth/login'; // Or use React Router for a smoother experience
            return null; // Exit to prevent further processing
        }

        // Return response if successful
        return response;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error; // Handle errors in calling function
    }
}
