import { config } from '../config/config';
import { getToken } from '../helpers/authHelper';
import { fetchApi } from './api';
import { ApiResponse } from './response';

const AuthorService = () => {
    const baseUrl = `${config.apiUrl}/authors`;
    const token = getToken();

    const getAuthors = async (page: number = 1) => {

        const response = await fetchApi(`authors?pageNo=${page}`, { method: "GET" });
        const authors = response ? await response.json() : [];
        return authors;
    }

    const getAuthor = async (id: string) => {
        const response = await fetchApi(`authors/${id}`, {method: "GET"});
        const author = response ? await response.json() : null;
        return author;
    }

    const storeAuthor = async (data: any): Promise<ApiResponse> => {

        const response = await fetchApi("authors", {
            method: "POST",
            body: JSON.stringify(data)
        });

        if(response === null){
            return {errors: {unauthorized: "Unauthorized"}};
        }

        if(response.status === 201){
            return {status: "created"};
        }
        const result = await response.json();
        return { errors: result.errors || { unknown: 'An unknown error occurred' } };
    }
    
    const updateAuthor = async (id: string | null | undefined, data: any): Promise<ApiResponse> => {

        const response = await fetchApi(`authors/${id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        });

        if(response === null){
            return {errors: {unauthorized: "Unauthorized"}};
        }

        if(response.status === 200){
            return {status: "updated"};
        }
        const result = await response.json();
        return { errors: result.errors || { unknown: 'An unknown error occurred' } };
    }

    const deleteAuthor = async (id: string | null | undefined): Promise<ApiResponse> => {

        const response = await fetchApi(`authors/${id}`, { method: "DELETE" });

        if(response === null){
            return {errors: {unauthorized: "Unauthorized"}};
        }
        if(response.status === 200){
            return { status: "deleted" };
        }
        const result = await response.json();
        return { errors: result.errors || { unknown: 'An unknown error occurred' } };
    }

    return {
        getAuthors,
        getAuthor,
        storeAuthor,
        updateAuthor,
        deleteAuthor
    };
};

export default AuthorService;
