import React from "react";

import modal from './Modal'
import { Input, Button } from './StyledComponents'


const handleClick = (e, cb, credentials) => {
  e.preventDefault();
  cb(credentials);
};

const handleChange = (cb, inputType, input) => {
  cb(inputType, input);
};

const Signup = ({
  signup,
  closeModal,
  username,
  password,
  showModal,
  email,
  addText,
  error,
}) => {

  return modal({
    showModal,
    handleClose: () => closeModal('signup')
  })(
    [
      <div className="modal-title">SIGNUP</div>,
      <div className="error">{ error }</div>,
      <Input
        value={ email }
        onChange={ e => handleChange(addText, "email", e.target.value) }
        placeholder="Email"
        type="text"
        required
      />,
      <Input
        value={ username }
        onChange={ e => handleChange(addText, "username", e.target.value) }
        placeholder="Username"
        type="text"
        required
      />,
      <Input
        value={ password }
        onChange={ e => handleChange(addText, "password", e.target.value) }
        placeholder="Password"
        type="text"
        required
      />,
      <Button
        onClick={ e => 
          handleClick(e, signup, { username, password, email }) 
        }
      >
        Submit
      </Button>
    ]
  );
};

export default Signup;
