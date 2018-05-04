import React from 'react'
import styled from 'styled-components'

import Authenticate from '../components/Authenticate'

const Div = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr;
  grid-row-gap: 1em;
  padding-left: 1em;
  padding-right: 1em;
`;

const AuthDiv = styled.div`
  grid-column: 3/4;
  margin: 1em;
  background-color: darkred;
`;

const Navbar = (props) => {
  return (
    <Div>
      <h1>Catalyst</h1>
      <AuthDiv><Authenticate /></AuthDiv>
    </Div>
  );
};

export default Navbar;