import React from 'react'

interface TableProps {
    tableHeading: string | null;
    children: any
}


const Table : React.FC<TableProps> = ({tableHeading, children}) => {
    
  return (
    <>
      <div className="card has-table has-mobile-sort-spaced">
            <header className="card-header">
                <p className="card-header-title">
                    <span className="icon"><i className="mdi mdi-account-multiple"></i></span>
                    {tableHeading}
                </p>
                <span className="card-header-icon">
                    <span className="icon"><i className="mdi mdi-reload"></i></span>
                </span>
            </header>
            <div className="card-content">
                <div className="b-table has-pagination">
                    <div className="table-wrapper has-mobile-cards">
                        <table className="table is-fullwidth is-striped is-hoverable is-sortable is-fullwidth">
                            {children}
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
  )
};

export default Table;
