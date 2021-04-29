import React from 'react';
import data from '../data'
import styled from 'styled-components'

export default function BookCard() {
  const StyledList = styled.li`
  border: 1px solid #000;
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
  width: 500px;
  box-sizing: border-box;
  list-style: none;
  text-align: center;
`;

  const list = data.map((item) => 
    <StyledList>{item}</StyledList>
  )
  
  
    return (
      <>
      {list}
      </>
    );
  }
