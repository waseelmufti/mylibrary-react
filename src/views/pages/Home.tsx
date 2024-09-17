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
            <div className="card has-table has-mobile-sort-spaced">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
                        Clients
                    </p>
                    <a href="#" className="card-header-icon">
                        <span className="icon"><i className="mdi mdi-reload"></i></span>
                    </a>
                </header>
                <div className="card-content">
                    <div className="b-table has-pagination">
                        <div className="table-wrapper has-mobile-cards">
                            <table className="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Company</th>
                                        <th>City</th>
                                        <th>Progress</th>
                                        <th>Created</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Rebecca Bauch</td>
                                        <td data-label="Company">Daugherty-Daniel</td>
                                        <td data-label="City">South Cory</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="79">79</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Oct 25, 2020">Oct 25, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Felicita Yundt</td>
                                        <td data-label="Company">Johns-Weissnat</td>
                                        <td data-label="City">East Ariel</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="67">67</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Jan 8, 2020">Jan 8, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Mr. Larry Satterfield V</td>
                                        <td data-label="Company">Hyatt Ltd</td>
                                        <td data-label="City">Windlerburgh</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="16">16</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Dec 18, 2020">Dec 18, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Mr. Broderick Kub</td>
                                        <td data-label="Company">Kshlerin, Bauch and Ernser</td>
                                        <td data-label="City">New Kirstenport</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="71">71</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Sep 13, 2020">Sep 13, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/barry-weber.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Barry Weber</td>
                                        <td data-label="Company">Schulist, Mosciski and Heidenreich</td>
                                        <td data-label="City">East Violettestad</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="80">80</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Jul 24, 2020">Jul 24, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/bert-kautzer-md.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Bert Kautzer MD</td>
                                        <td data-label="Company">Gerhold and Sons</td>
                                        <td data-label="City">Mayeport</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="62">62</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Mar 30, 2020">Mar 30, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/lonzo-steuber.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Lonzo Steuber</td>
                                        <td data-label="Company">Skiles Ltd</td>
                                        <td data-label="City">Marilouville</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="17">17</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Feb 12, 2020">Feb 12, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/jonathon-hahn.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Jonathon Hahn</td>
                                        <td data-label="Company">Flatley Ltd</td>
                                        <td data-label="City">Billiemouth</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="74">74</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Dec 30, 2020">Dec 30, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/ryley-wuckert.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Ryley Wuckert</td>
                                        <td data-label="Company">Heller-Little</td>
                                        <td data-label="City">Emeraldtown</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="54">54</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Jun 28, 2020">Jun 28, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="is-image-cell">
                                            <div className="image">
                                                <img src="https://avatars.dicebear.com/v2/initials/sienna-hayes.svg" className="is-rounded" />
                                            </div>
                                        </td>
                                        <td data-label="Name">Sienna Hayes</td>
                                        <td data-label="Company">Conn, Jerde and Douglas</td>
                                        <td data-label="City">Jonathanfort</td>
                                        <td data-label="Progress" className="is-progress-cell">
                                            <progress max="100" className="progress is-small is-primary" value="55">55</progress>
                                        </td>
                                        <td data-label="Created">
                                            <small className="has-text-grey is-abbr-like" title="Mar 7, 2020">Mar 7, 2020</small>
                                        </td>
                                        <td className="is-actions-cell">
                                            <div className="buttons is-right">
                                                <button className="button is-small is-primary" type="button">
                                                    <span className="icon"><i className="mdi mdi-eye"></i></span>
                                                </button>
                                                <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
                                                    <span className="icon"><i className="mdi mdi-trash-can"></i></span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="notification">
                            <div className="level">
                                <div className="level-left">
                                    <div className="level-item">
                                        <div className="buttons has-addons">
                                            <button type="button" className="button is-active">1</button>
                                            <button type="button" className="button">2</button>
                                            <button type="button" className="button">3</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="level-right">
                                    <div className="level-item">
                                        <small>Page 1 of 3</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
