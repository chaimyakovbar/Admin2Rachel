import React from 'react'

import Button from '@mui/material/Button'
import styled from '@emotion/styled'

const SaveButton = styled(Button)`
  color: black;
  font-size: 15px;
  background-color: rgb(131, 191, 133);
  transition: transform 0.6s ease-in-out; 
  &:hover {
    background-color: green;
    transform: scale(1.15);
  }
`
const DeleteButton = styled(Button)`
  color: black;
  font-size: 15px;
  background-color: rgb(203, 104, 104);
  transition: transform 0.6s ease-in-out; 
  &:hover {
    background-color: red;
    transform: scale(1.2);
  }
`
const ButtonDown = ({ handleClose, handleSubmit }) => {
  return (
    <div style={{ marginTop: "100px", marginRight: "400px" }}>
      <DeleteButton onClick={handleClose}>Cancel</DeleteButton>
      <SaveButton onClick={handleSubmit} type="submit">Approval</SaveButton>
    </div>
  )
}

export default ButtonDown
