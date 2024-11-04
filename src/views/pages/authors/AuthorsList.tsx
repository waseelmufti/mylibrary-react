import React, { useEffect, useState } from 'react'
import Table from '../../components/dashboard/Table';
import AuthorService from '../../../services/AuthorService';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../components/Modal';
import AuthorsForm from "./AuthorsForm";
import DeleteAuthor from './DeleteAuthor';

export const authorsLoader = async (pageNumber: number = 0) => {
  return await AuthorService().getAuthors(pageNumber);
}
const AuthorsList: React.FC = (props) => {
  const [currentPage, setCurrentPage] = useState(0);
  // const { authors }: any = useLoaderData();
  const [ mode, setMode ] = useState("create");
  const [ selectedAuthor, setSelectedAuthor ] = useState(null);
  const [ showModal, setShowModal ] = useState(false);
  const [ authors, setAuthors ] = useState<any>({content: [], totalPages: 0});

  useEffect(() => {
    const fetchAuthors = async()=>{
      const _authors = await AuthorService().getAuthors(currentPage);
      setAuthors(_authors);
    }

    fetchAuthors();
  }, [currentPage]);


  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  }



  const showCreateModalHandler = (modalMode = "create", id =  null) => {
    setSelectedAuthor(null);
    if(modalMode === "edit"){
      setMode("edit");
      setSelectedAuthor(id);
    }else{
      setMode("create");
    }
    setShowModal(true);
  }
  
  const closeModalHandler = () => {
    setMode("create");
    setSelectedAuthor(null);
    setShowModal(false);
  }

  const deleteModalHandler = (id = null ) => {
    setMode("delete");
    setSelectedAuthor(id);
    setShowModal(true);
  }
  

  const tableData = authors?.content?.map((row: any, index: number) => {
    return (
      <tr key={row.id}>
        <td>
          {index + 1 + (currentPage * (authors.size ? authors.size : 10))}
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
            <button className="button is-small is-danger jb-modal" data-target="sample-modal" type="button" onClick={() => deleteModalHandler(row.id)}>
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
      <Table tableHeading="Authors" totalPages={authors.totalPages} currentPage={currentPage} onPageChange={handlePageChange}>
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
      {showModal && (<Modal onOpen={showCreateModalHandler} onClose={closeModalHandler}>
        {(["create", "edit"].includes(mode)) && <AuthorsForm selectedAuthor={selectedAuthor} mode={mode} onClose={closeModalHandler} />}
        {(["delete"].includes(mode)) && <DeleteAuthor  onClose={closeModalHandler} selectedAuthor={selectedAuthor} mode={mode} />}
        </Modal>)}
    </>
  )
};

export default AuthorsList;
