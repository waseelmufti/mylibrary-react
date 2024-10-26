import React, {useState} from 'react'
import AuthorService from '../../../services/AuthorService';
import { useNotification } from '../../../stores/NotificationContext';
import { redirect } from 'react-router-dom';
import { error } from 'console';

const AuthorsForm: React.FC = (props) => {
  const { addNotification } = useNotification();
  const [inputs, setInputs] = useState({
    name: "",
    status: "true"
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (event: any) => {
    const name = event.target.name;
    console.log(event.target.type);
    const value = event.target.type === 'checkbox' ? (event.target.checked ? true: false) : event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = async(event: any) => {
    event.preventDefault();
    console.log("inputs",inputs);
    const response = await AuthorService().storeAuthor(inputs);
    if(response == "create"){
      addNotification("Author created successfully", "success");
      return redirect(`/authors`);
    }else if(response.errors){
      setErrors(response.errors);
    }
    console.log("hello",response);

  }

  const errorList = errors && (errors.map((error, idx) => {
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
                    onChange={handleChange} checked={inputs.status == "true" ? true: false}/>
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
                          <button type="button" className="button is-info is-outlined">
                            <span>Reset </span>
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
