import { InputLabel, MenuItem } from "@mui/material"
import { useState } from "react"
import { v1 } from "uuid"
import PrimabullInput from "../PrimabullInput/PrimabullInput"
import { StyledFormControl, StyledLabel, StyledSelect } from './style'

const PrimabullSelect = ({ options, className, required, label, onChange, ...props }) => {
  const [open, setOpen] = useState(false);

  return <div className={className} style={{ height: '100%' }}>
    {label && <StyledLabel >{label}  {required && '*'}</StyledLabel>}
    <StyledSelect {...props} onChange={e => onChange(e.target.value)}>
      {options.map(option => {
        return <option key={option.key} value={option.value}>
          {option.label}
        </option>
      })}
    </StyledSelect>
  </div>
}

export default PrimabullSelect