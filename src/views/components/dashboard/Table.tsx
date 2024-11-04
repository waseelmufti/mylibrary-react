import React from 'react'

interface TableProps {
    tableHeading: string | null;
    children: any,
    totalPages: number,
    currentPage: number,
    onPageChange?: (page: number) => void;
}


const Table : React.FC<TableProps> = ({tableHeading, children, totalPages, currentPage, onPageChange}) => {
    const pageNumbers = [];
    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i);
    }

    
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
                                    {pageNumbers.map(number => (
                                            <button 
                                                key={number}
                                                type="button" 
                                                className={`button ${number === currentPage ? 'is-active' : ''}`}
                                                onClick={() => onPageChange && onPageChange(number)}
                                            >
                                                {number+1}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="level-right">
                                <div className="level-item">
                                    <small>Page {currentPage+1} of {totalPages}</small>
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
