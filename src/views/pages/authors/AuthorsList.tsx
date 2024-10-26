import React, { useState } from 'react'
import Table from '../../components/dashboard/Table';
import AuthorService from '../../../services/AuthorService';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../components/Modal';
import AuthorsForm from "./AuthorsForm";

export const authorsLoader = async () => {

  return await AuthorService().getAuthors();
}
const AuthorsList: React.FC = (props) => {
  const { authors }: any = useLoaderData();
  const [ mode, setMode ] = useState("create");
  const [ selectedAuthor, setSelectedAuthor ] = useState(null);
  const [ showModal, setShowModal ] = useState(false);

  const showCreateModalHandler = (modalMode = "create", id =  null) => {
    
    if(modalMode === "edit"){
      setMode("edit");
      setSelectedAuthor(id);
    }
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }
  

  const tableData = authors.map((row: any, index: number) => {
    return (
      <tr key={index}>
        <td>
          {index + 1}
        </td>
        <td>
          {row.name}
        </td>
        <td>
          {row.status ? "Active" : "Inactive"}
        </td>
        <td className="is-actions-cell">
          <div className="buttons is-right">
            <button className="button is-small is-primary" type="button" onClick = {() => showCreateModalHandler("edit", row.id)}>
              <span className="icon"><i className="mdi mdi-eye"></i></span>
            </button>
            <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button">
              <span className="icon"><i className="mdi mdi-trash-can"></i></span>
            </button>
          </div>
        </td>
      </tr>
    )
  });

  return (
    <>
      <div className="level">
      <div className="level-left"></div>
        <div className="level-right">
          <div className="level-item">
            <div className="buttons is-right">
              <button className="button is-primary" onClick={() => showCreateModalHandler()}>
                <span>Add Author</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Table tableHeading="Authors">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th className="is-actions-cell">
              <div className="buttons is-right">
                Actions
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </Table>
      {showModal && (<Modal selectedAuthor={selectedAuthor} mode={mode} onClose={closeModalHandler}><AuthorsForm /></Modal>)}
    </>
  )
};

export default AuthorsList;
