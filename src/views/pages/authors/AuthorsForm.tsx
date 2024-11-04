import React, {useEffect, useState} from 'react'
import AuthorService from '../../../services/AuthorService';
import { useNotification } from '../../../stores/NotificationContext';
import { useNavigate } from 'react-router-dom';
import { ApiResponse } from '../../../services/response';

export interface AuthorsFormProps {
  selectedAuthor?: string | null,
  mode?: string,
  onClose?: () => void,
}
const AuthorsForm: React.FC<AuthorsFormProps> = (props) => {
  const authorService = AuthorService();
  const { addNotification } = useNotification();
  let navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    status: "true"
  });

  const [errors, setErrors] = useState<string[]>([]);

  useEffect( () => {
    const fetchAuthor = async () => {
      if(props.selectedAuthor && props.mode === "edit"){
        try{
          const author: any = await authorService.getAuthor(props.selectedAuthor);
          console.log("author",author);
          setInputs({
            name: author.name,
            status: author.status ? "true" : "false"
          });

        }catch(error){
          console.log("error: ",error);
        }
      }     
    }

    fetchAuthor();
  }, [props.selectedAuthor, props.mode]);


  const handleChange = (event: any) => {
    console.log(event);
    const target = event.target;
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? (target.checked ? "true" : "false") : event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(event: any) => {
    event.preventDefault();
    let response: ApiResponse | null = null;
    
    if(props.mode === "create"){
      response = await AuthorService().storeAuthor(inputs);
    }else if(props.mode === "edit"){
      response = await authorService.updateAuthor(props.selectedAuthor, inputs);
    }

    if(response === null) return false;

    if("status" in response){
      addNotification(`Author ${response.status} successfully`, "success");
    }else if("errors" in response){
      // Convert error object to an array of messages
      const errorMessages = Object.values(response.errors);
      setErrors(errorMessages); // Now setErrors expects an array of strings
    }
    props.onClose && props.onClose();
    navigate('/authors', { replace: true });

  }

  const errorList = errors && (errors.map((error: any, idx: string | number) => {
    const err = Object.values(error)[0];
    return(<li key={idx} className="has-text-danger">
      {typeof err === 'string' || typeof err === 'number' ? err : JSON.stringify(err)} 
    </li>)
  }));

  return (
    <>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            <span className="icon">
              <i className="mdi mdi-ballot default"></i>
            </span>
            <span>Add Author</span>
          </p>
        </header>
        <div className="card-content">
          {errorList && (<ul style={{"listStyleType": "disc"}}>{errorList}</ul>)}
          <form onSubmit={handleSubmit}>
            <div className="field">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <label className="label">Author's</label>
                    <input name="name" type="text" placeholder="Enter Author's Name"
                    value={inputs.name || ""} 
                    onChange={handleChange}
                      required={true} className="input" />

                  </div>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label" style={{ "textAlign": "left" }}>
                <label className="label">Status</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <label className="switch is-rounded">
                    <input type="checkbox" name="status" true-value="true"
                    value="true"
                    onChange={handleChange} checked={inputs.status === "true" ? true: false}/>
                    <span className="check is-info"></span>
                    <span className="control-label"></span>
                  </label>
                </div>
              </div>
            </div>
            <hr />
            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <div className="field">
                    <div className="field-body">
                      <div className="field is-grouped">
                        <div className="control">
                          <button type="submit" className="button is-info">
                            <span>Submit</span>
                          </button>
                        </div>
                        <div className="control">
                          <button type="button" className="button is-info is-outlined" onClick={props.onClose}>
                            <span>Cancel </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};

export default AuthorsForm;
