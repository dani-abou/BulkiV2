import { InputLabel, MenuItem } from "@mui/material"
import { useState } from "react"
import { v1 } from "uuid"
import { StyledFormControl, StyledSelect } from './style'

const BulkiSelect = ({ options, className, required, label, ...props }) => {
  const [open, setOpen] = useState(false);

  const selectOption = option => {
    if (props.onChange) props.onChange(option);
    setOpen(false)
  }
  return <StyledFormControl fullwidth required={required}>
    <InputLabel >{label}</InputLabel>
    <StyledSelect
      className={className}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      required={required}
      label={label}
      {...props}
    >
      {
        options.map(option => {
          return <MenuItem key={v1()} onClick={() => selectOption(option)} >
            {option.label}
          </MenuItem>
        })
      }
    </StyledSelect>
  </StyledFormControl>

}

export default BulkiSelect