import { InputBase } from "@mui/material";
import PropTypes from "prop-types";
import { StyledAdornment, StyledInput } from "./style";

const BulkiInput = ({ prefix, suffix, className, width = '100%', ...props }) => {
  return <StyledInput
    className={className}
    width={width}
    inputProps={{
      sx: {
        flex: "1 1",
        marginLeft: '10px',
        marginRight: '10px',
      }
    }}
    sx={{
      width: width,
      padding: 0
    }}
    InputProps={{
      startAdornment: <StyledAdornment $prefix>{prefix}</StyledAdornment>,
      endAdornment: suffix,
      style: {
        padding: 0,
      }
    }}
    color='secondary'
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