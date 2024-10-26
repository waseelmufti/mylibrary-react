import { config } from '../config/config';
import { getToken } from '../helpers/authHelper';

const AuthorService = () => {
    const baseUrl = `${config.apiUrl}/authors`;
    const token = getToken();

    const getAuthors = async () => {

        const response = await fetch(baseUrl, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            method: "GET",
        });
        const authors = await response.json();
        console.log(authors);
        return {authors};
    }

    const storeAuthor = async (data: any) => {

        const request = await fetch(baseUrl, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            method: "POST",
            body: JSON.stringify(data)
        });
        const response = await request.json();
        if(response.status == 201){
            return "created";
        }
        return response;
    }


    return {
        getAuthors,
        storeAuthor
    };
};

export default AuthorService;
