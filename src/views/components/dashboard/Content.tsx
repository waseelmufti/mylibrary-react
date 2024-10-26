import React from 'react';
import { Outlet } from 'react-router-dom';
import NotificationContainer from './NotificationContainer';

function Content() {
  return (
    <>
    <section className="section is-title-bar">
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <ul>
            <li>Admin</li>
            <li>Dashboard</li>
          </ul>
        </div>
      </div>
      <div className="level-right">
        <div className="level-item">
          <div className="buttons is-right">
            <a href="https://github.com/vikdiesel/admin-one-bulma-dashboard" target="_blank" className="button is-primary">
              <span className="icon"><i className="mdi mdi-github-circle"></i></span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="hero is-hero-bar">
    <div className="hero-body">
      <div className="level">
        <div className="level-left">
          <div className="level-item"><h1 className="title">
            Dashboard
          </h1></div>
        </div>
        <div className="level-right" style={{"display": "none"}}>
          <div className="level-item"></div>
        </div>
      </div>
    </div>
  </section>
  <section className="section is-main-section">
  <NotificationContainer />
    <Outlet />
  </section>
    </>
  );
}

export default Content;
