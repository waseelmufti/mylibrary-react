import React from 'react';
import "./Spinner.scss";

function Spinner() {
    return (
        <div id="spinner" className="spinner">
            <div className="spinner-container">
                <div className="sk-double-bounce">
                    <div className="sk-child sk-double-bounce1"></div>
                    <div className="sk-child sk-double-bounce2"></div>
                </div>
            </div>
        </div>
    );
}

export default Spinner;
