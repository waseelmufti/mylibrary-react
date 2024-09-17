import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {
    return (
        <div>
            <section className="section hero is-fullheight is-error-section">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered">
                            <div className="column is-two-thirds-tablet is-half-desktop is-one-third-widescreen">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot has-text-centered">
                    <div className="logo"></div>
                </div>
            </section>
        </div>
    );
};

export default Auth;