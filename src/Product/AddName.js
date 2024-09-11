import * as React from 'react'

import TextField from '@mui/material/TextField'

const AddNodes = React.memo(({ setName, name }) => {
    const setNameValue = ({ target }) => {
        const newNotesValue = target.value
        setName(newNotesValue)
    }

    return (
        <TextField
            value={name}
            onChange={setNameValue}
            style={{ marginTop: "30px" }}
            id="standard-basic"
            type="title"
            fullWidth
            label="Name"
            variant="standard"
        />
    )
})

export default AddNodes



