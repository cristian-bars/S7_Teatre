import React from 'react'
import styled from 'styled-components'
import './App.css';
import Buttons from './components/Buttons';
import ListItem from './components/List'

function App() {
  const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
  width: 50%;
  height: 50px;
  margin: 0 auto;
  border: 2px solid #000;
  border-radius: 20px;
  background: #eee;
  
`;
  return (
    <StyledContainer>
      <Buttons />
    <ul>
      <ListItem />
    </ul>
    </StyledContainer>
  );
}

export default App;
