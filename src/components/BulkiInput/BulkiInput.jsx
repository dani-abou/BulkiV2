import { StyledInput, StyledAdornment } from "./style"
import { InputBase } from "@mui/material";
import PropTypes from "prop-types"

const BulkiInput = ({ prefix, suffix, className, width = '100%', ...props }) => {
  return <StyledInput
    className={className}
    width={width}
    inputProps={{
      sx: {
        flex: "1 1",
        marginLeft: '10px',
        marginRight: '10px'
      }
    }}
    sx={{
      width: width,
    }}
    InputProps={{
      startAdornment: <StyledAdornment $prefix>{prefix}</StyledAdornment>,
      endAdornment: <StyledAdornment>{suffix}</StyledAdornment>,
      style: {
        padding: 0,
      }
    }}
    {...props}
  />
}

BulkiInput.propTypes = {
  //Left side adornmnent within text field
  prefix: PropTypes.element,
  //Right side adornmnent within text field
  suffix: PropTypes.element,
  //Width of element
  width: PropTypes.number,
  //Height of element
  height: PropTypes.number

}


export default BulkiInput;