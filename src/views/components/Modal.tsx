import { useState } from 'react';

export interface ModalProps {
    onOpen?: () => void,
    onClose?: () => void,
    children: any
}
const Modal: React.FC<ModalProps> = (props) => {
    const [showModal, setShowModal] = useState(true);

    const openHandler = () => {
        props.onOpen && props.onOpen();
        setShowModal(true);
    }
    const closeHandler = () => {
        setShowModal(false);
        props.onClose && props.onClose();
    }
    return (
        <div id="sample-modal" className={"modal" + (showModal  ? " is-active" : "")}>
            <div className="modal-background jb-modal-close"></div>
            <div className="modal-card">
                {/* <header className="modal-card-head">
                    <p className="modal-card-title">Confirm action</p>
                    <button className="delete jb-modal-close" aria-label="close" onClick={closeHandler}></button>
                </header> */}
                <section className="modal-card-body p-0">
                    {props.children}
                </section>
                {/* <footer className="modal-card-foot">
                    <button className="button jb-modal-close">Cancel</button>
                    <button className="button is-danger jb-modal-close">Delete</button>
                </footer> */}
            </div>
            <button className="modal-close is-large jb-modal-close" aria-label="close" onClick={closeHandler}></button>
        </div>
    );
}

export default Modal;
