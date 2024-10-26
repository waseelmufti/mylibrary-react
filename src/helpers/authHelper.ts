export const getToken : () => string | null = () => {
    let tokenString : string | null = localStorage.getItem("token");
    tokenString = tokenString ? JSON.parse(tokenString) : null;
    
    return tokenString;
}

export const saveToken : (userToken: string | null) => void = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
}

export const removeToken : () => void = () => {
    localStorage.removeItem("token");
}