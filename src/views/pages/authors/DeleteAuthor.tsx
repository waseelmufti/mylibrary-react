import React from 'react'
import { AuthorsFormProps } from './AuthorsForm';
import AuthorService from '../../../services/AuthorService';
import { useNotification } from '../../../stores/NotificationContext';
import { Navigate, useNavigate } from 'react-router-dom';

const DeleteAuthor: React.FC<AuthorsFormProps> = (props) => {
    const { addNotification } = useNotification();
    let navigate = useNavigate();
    const deleteAuthorHandler = async () => {
        const response = await AuthorService().deleteAuthor(props.selectedAuthor);
        if("status" in response){
            props.onClose && props.onClose();
            addNotification(`Author ${response.status} successfully`, "success");
        }else if("errors" in response){
            addNotification(response.errors, "danger");
        }
        navigate('/authors', { replace: true });
    }
    return (
        <>
            <form className="box content">
                <h3 className="has-text-centered title">Delete Author</h3>
                <hr />
                <p>Are you sure you want to delete this author?</p>
                <hr />
                <div className="field is-grouped">
                <div className="control">
                <button type="button" className="button is-primary" onClick={deleteAuthorHandler}>Confirm</button>
                </div>
                <div className="control">
                <button type="button" className="button is-info is-outlined" onClick={props.onClose}><span>Cancel </span></button>
                </div>
                </div>
            </form>
        </>
    )
};

export default DeleteAuthor;
