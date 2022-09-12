import { Select, MenuItem, InputLabel, FormControl } from "@mui/material"
import { useState } from "react"
import { v1 } from "uuid"
import { StyledFormControl } from './style'

const BulkiSelect = ({ options, className, required, value, onChange, ...props }) => {
  const [open, setOpen] = useState(false);

  const selectOption = option => {
    onChange(option);
    setOpen(false)
  }
  return <StyledFormControl shrink fullwidth required={required}>
    <InputLabel id="dummy">Test</InputLabel>
    <Select
      labelId="dummy"
      className={className}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      label='Test'
      shrink
      required={required}
      {...props}>
      {
        options.map(option => {
          return <MenuItem key={v1()} onClick={() => selectOption(option)} >
            {option.label}
          </MenuItem>
        })
      }
    </Select>
  </StyledFormControl>

}

export default BulkiSelect