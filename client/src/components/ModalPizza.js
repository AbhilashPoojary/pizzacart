import React from "react";
import { Modal } from "react-bootstrap";

export default function ModalPizza({ pizza, show, setShow }) {
  const handleClose = () => setShow(false);
  return (
    <>
      <Modal
        aria-labelledby='contained-modal-title-vcenter'
        centered
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className='text-center'>
          <img
            className='img-fluid m-auto'
            src={pizza.image}
            alt={pizza.name}
            style={{ margin: "auto" }}
          />
          <p className='text-start'>{pizza.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' onClick={handleClose}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
