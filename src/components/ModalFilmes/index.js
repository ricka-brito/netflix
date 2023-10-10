import 'bootstrap/dist/css/bootstrap.min.css';


import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ModalFilmes(props) {

    const { visible, close, data } = props;



    return (
    <>
      <Modal show={visible} onHide={() => close(!visible)}>
        <Modal.Header closeButton>
          <Modal.Title>Título da modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>{data}</Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  )
}


