import React from 'react'
import styled from 'styled-components'

function Buttons(){
    const StyledButtons = styled.div`
    display: flex;
    flex-direction: row;
    
    button {
        background: green;
        color: #fff;
        padding: 10px;
        margin: 5px;
        width: 150px;
        border: none;
        border-radius: 10px;
        box-sizing: border-box;
        cursor: pointer;
    }`
      
      
    return (
        <StyledButtons className="buttons">
    <button>Anterior</button>
    <button>Següent</button>
    </StyledButtons>
    )
}

export default Buttons
