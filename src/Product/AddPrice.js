import * as React from 'react'

import TextField from '@mui/material/TextField'

const AddPrice = React.memo(({ setPrice, price }) => {
    const setPriceValue = ({ target }) => {
        const newNotesValue = target.value
        setPrice(newNotesValue)
    }

    return (
        <TextField
            value={price}
            onChange={setPriceValue}
            style={{ marginTop: "30px" }}
            id="standard-basic"
            type="title"
            fullWidth
            label="Price"
            variant="standard"
        />
    )
})

export default AddPrice

