import { StyledInput, StyledInputDiv, StyledInputEnd } from "./style"
import { InputBase } from "@mui/material";


const BulkiInput = ({ prefix, suffix, className, width, height, ...props }) => {
  // return <StyledInput {...props} className={className} />
  return <StyledInput
    {...props} className={className}
    width={width}
    sx={{
      width: width,
      height: height
    }}
    InputProps={{
      startAdornment: prefix,
      endAdornment: suffix,
      style: {
        padding: 0,
      }
    }}
  />
}

export default BulkiInput;