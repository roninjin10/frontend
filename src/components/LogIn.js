import styled from "styled-components";

import React from "react";

const Modal = styled.div`
  display: ${props => props.showModal.logIn ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 1rem 1.5rem;
  width: 24rem;
  border-radius: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  /* Adapt the colours based on primary prop */
  background: red;
  color: white;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const handleClick = (e, cb, credentials) => {
  //You need to figure out how you want to access username, password, and email
  e.preventDefault();
  cb(credentials);
};

const handleClose = (e, cb) => {
  e.preventDefault();
  cb('logIn')
}

const LogIn = ({signIn, closeModal, username, password, showModal}) => {
  console.log(showModal)
  return (
    <Modal showModal={showModal}>
      <ModalContent>
        <Input placeholder="Username" type="text" />
        <Input placeholder="Password" type="text" />
        <Button onClick={e => handleClick(e, signIn, {username, password})}>Submit</Button>
        <Button onClick={(e) => handleClose(e, closeModal)}>Close</Button>
      </ModalContent>
    </Modal>
  );
};

export default LogIn