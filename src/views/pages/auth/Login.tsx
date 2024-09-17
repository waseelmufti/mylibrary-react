import React from 'react';
import { Form, redirect } from 'react-router-dom';
import AuthService from "../../../services/AuthService";
import { Interface } from 'readline';


export async function loginAction({request, params}: {request: Request, params: any}) {
    const authService = AuthService();
    const formData: FormData = await request.formData();

    const response = authService.processLogin(formData);
    console.log(formData, params);
  
    return null;
    return redirect(`/dashboard`);
}
function Login() {
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
                    <Form method='POST'>
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
