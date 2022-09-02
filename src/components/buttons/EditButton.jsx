import React, { useState } from 'react';
import {FaEdit} from "react-icons/fa"
import "./button.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function EditButton() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <><Button className="editbtn" onClick={handleShow}>Edit <FaEdit /></Button>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Information</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}
