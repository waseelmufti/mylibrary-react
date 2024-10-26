import React from 'react';

function Home() {
    return (
        <>
            <div className="tile is-ancestor">
                <div className="tile is-parent">
                    <div className="card tile is-child">
                        <div className="card-content">
                            <div className="level is-mobile">
                                <div className="level-item">
                                    <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                        Clients
                                    </h3>
                                        <h1 className="title">
                                            512
                                        </h1>
                                    </div>
                                </div>
                                <div className="level-item has-widget-icon">
                                    <div className="is-widget-icon"><span className="icon has-text-primary is-large"><i
                                        className="mdi mdi-account-multiple mdi-48px"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="card tile is-child">
                        <div className="card-content">
                            <div className="level is-mobile">
                                <div className="level-item">
                                    <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                        Sales
                                    </h3>
                                        <h1 className="title">
                                            $7,770
                                        </h1>
                                    </div>
                                </div>
                                <div className="level-item has-widget-icon">
                                    <div className="is-widget-icon"><span className="icon has-text-info is-large"><i
                                        className="mdi mdi-cart-outline mdi-48px"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tile is-parent">
                    <div className="card tile is-child">
                        <div className="card-content">
                            <div className="level is-mobile">
                                <div className="level-item">
                                    <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                        Performance
                                    </h3>
                                        <h1 className="title">
                                            256%
                                        </h1>
                                    </div>
                                </div>
                                <div className="level-item has-widget-icon">
                                    <div className="is-widget-icon"><span className="icon has-text-success is-large"><i
                                        className="mdi mdi-finance mdi-48px"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon"><i className="mdi mdi-finance"></i></span>
                        Performance
                    </p>
                    <a href="#" className="card-header-icon">
                        <span className="icon"><i className="mdi mdi-reload"></i></span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="chart-area">
                        <div style={{ "height": "100%" }}>
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div></div>
                                </div>
                            </div>
                            <canvas id="big-line-chart" width="2992" height="1000" className="chartjs-render-monitor" style={{ "display": "block", "height": "400px", "width": "1197px" }}></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
