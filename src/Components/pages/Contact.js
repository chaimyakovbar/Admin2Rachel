// import React, { useState } from 'react'
// import { postUsers } from '../../api/user'
// import styled from '@emotion/styled'
// import Button from '@mui/material/Button'
// import TextField from '@mui/material/TextField'


// const Contact = () => {
//     const [name, setName] = useState("")
//     const [number, setNumber] = useState(null)
//     const [email, setEmail] = useState("")
//     const [note, setNote] = useState("")

//     const getUsrData = async () => {
//       const data = {
//         name,
//         number,
//         email,
//         note,
//       };
//      await postUsers(data)
//      deleteData()
//     }
//     const deleteData = () => {
//         setName("");
//         setNumber("");
//         setEmail("");
//         setNote("");
//     }

//     return (

//         <div style={{width:"600px", marginLeft:"20%"}}>
//         <TextField value={name} onChange={(e) => setName(e.target.value)} style={{ marginTop: "30px" }} id="standard-basic" type="title" fullWidth  label="Name" variant="standard"/>
//         <TextField value={number} onChange={(e) => setNumber(e.target.value)} style={{ marginTop: "30px" }} id="standard-basic" type="title" fullWidth  label="Number" variant="standard"/>
//         <TextField value={email} onChange={(e) => setEmail(e.target.value)} style={{ marginTop: "30px" }} id="standard-basic" type="title" fullWidth  label="Email" variant="standard"/>
//         <TextField value={note} onChange={(e) => setNote(e.target.value)} style={{ marginTop: "30px" }} id="standard-basic" type="title" fullWidth  label="Note" variant="standard"/>
      
//       <SaveButton onClick={getUsrData} type="submit">Approval</SaveButton>
//         </div>
//     )
// }

// export default Contact




// const SaveButton = styled(Button)`
//   color: black;
//   font-size: 15px;
//   background-color: rgb(131, 191, 133);
//   transition: transform 0.6s ease-in-out; 
//   &:hover {
//     background-color: green;
//     transform: scale(1.15);
//   }
// `



    

