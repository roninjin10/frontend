import React from 'react'
import styled from 'styled-components'

import Question from '../components/Question'
import Answers from './Answers'
import GiveAnswer from '../components/GiveAnswer'
import AskQuestion from '../components/AskQuestion'
import Navbar from './Navbar'

const Layout = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-template-rows: auto auto auto auto auto auto auto auto;
  grid-column-gap: 1em;
  grid-row-gap: 1em;
  
  > .nav {
    background-color: red;
    grid-column: 1/3;
  }

  > .question {
    background-color: orange;
    grid-column: 1/2;
  }

  > .answers {
    background-color: green;
    grid-column: 1/2;
  }

  > .giveanswer {
    background-color: blue;
    grid-column: 1/2;
  }

  > .ask {
    background-color: yellow;
    grid-column: 2/3;
    grid-row: 2/3;
  }
`

const QuestionsPage = (props) => {
  
  return (
    <Layout>
      <div className="nav">
        <Navbar { ...props }/>
      </div>
      <div className="question">
        <Question />
      </div>

      <div className="answers">
        <Answers />

      </div>
      <div className="giveanswer">
       <GiveAnswer /> 
      </div>

      <div className="ask">
        <AskQuestion />
      </div>
      
    </Layout>
  );
};

export default QuestionsPage
