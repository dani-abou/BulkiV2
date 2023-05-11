import { InputBase } from "@mui/material";
import PropTypes from "prop-types";
import { BulkiCaption } from "../../common/styles/tags";
import { StyledAdornment, StyledHelper, StyledInput, StyledLabel } from "./style";

const BulkiInput = ({ label, className, required, error, helperText, ...props }) => {
  return <div className={className} >
    {label && <StyledLabel >{label}  {required && '*'}</StyledLabel>}
    <StyledInput required={required} $error={error} {...props} />
    {helperText && <StyledHelper >{helperText}</StyledHelper>}
  </div>
}

BulkiInput.propTypes = {
  //Left side adornmnent within text field
  prefix: PropTypes.element,
  //Right side adornmnent within text field
  suffix: PropTypes.element,
}


export default BulkiInput;