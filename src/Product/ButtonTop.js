import React from 'react'

import Button from '@mui/material/Button'
import styled from '@emotion/styled'

const DeleteButton = styled(Button)`
    color: black;
    font-size: 15px;
    
    background-color:gray;
    transition: transform 0.6s ease-in-out; 
    &:hover {
      background-color: red;
      transform: scale(1.2);
    }`
    
const ButtonTop = ({handleClose}) => {
  return (
        <DeleteButton onClick={handleClose}>x</DeleteButton>
  )
}

export default ButtonTop