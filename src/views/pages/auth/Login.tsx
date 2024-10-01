import React from 'react';
import { Form, Navigate, redirect } from 'react-router-dom';
import AuthService from "../../../services/AuthService";
import useToken from '../../../hooks/useToken';
import { useNotification } from '../../../stores/NotificationContext';

function Login() {
    const {token, saveToken} = useToken();
    const { addNotification } = useNotification();

    const loginHandler:any = async(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const authService = AuthService();
        const formData = new FormData(e.currentTarget);
    
        const response = await authService.processLogin(formData);
        if(response.status === "login_success"){
            addNotification("Login successful", "success");
            saveToken(response.token);
            return redirect(`/dashboard`);
        }else if(response.message === "login_invalid"){
            addNotification("Invalid credentials", "danger");
        }else if(response.errors){
            response.errors.map((error: any, idx: string) => {
                return addNotification(Object.values(error)[0], "danger");
            });
        }else{
            addNotification("Something went wrong", "danger");
        }

    }

  if(token){
    return <Navigate to="/dashboard" replace />;
  }
    return (
        <>
            <div className="card has-card-header-background has-shadow">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon">
                            <i className="mdi mdi-lock default"></i>
                        </span>
                        <span>Login</span>
                    </p>
                </header>
                <div className="card-content">
                    <Form method='POST' onSubmit={loginHandler}>
                        <div className="field"><label className="label">E-mail Address</label>
                            <div className="control is-clearfix">
                                <input type="email" autoComplete="on" name="email" required autoFocus className="input" />
                            </div>
                        </div>
                        <div className="field"><label className="label">Password</label>
                            <div className="control is-clearfix">
                                <input type="password" autoComplete="on" name="password" required className="input" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="b-checkbox checkbox is-thin">
                                <input type="checkbox" autoComplete="on" true-value="true" value="true" name="remember_me"/>
                                <span className="check is-black"></span>
                                <span className="control-label"> Remember me </span>
                            </label>
                        </div>
                        <hr />
                        <div className="field">
                            <div className="field-body">
                                <div className="field is-grouped">
                                    <div className="control"><button type="submit" className="button is-info"><span> Login </span></button></div>
                                    <div className="control"><a href="#/password-recovery" className="button is-info is-outlined"><span> Forgot Password? </span></a></div>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login;
