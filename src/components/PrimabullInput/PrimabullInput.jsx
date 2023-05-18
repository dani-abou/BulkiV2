import { InputBase } from "@mui/material";
import PropTypes from "prop-types";
import { PrimabullCaption } from "../../common/styles/tags";
import { StyledAdornment, StyledHelper, StyledInput, StyledLabel } from "./style";

const PrimabullInput = ({ label, className, required, error, borderless, helperText, variant = 'secondary', ...props }) => {
  return <div className={className} >
    {label && <StyledLabel >{label}  {required && '*'}</StyledLabel>}
    <StyledInput required={required} $error={error} $borderless={borderless} $variant={variant} {...props} />
    {helperText && <StyledHelper >{helperText}</StyledHelper>}
  </div>
}

PrimabullInput.propTypes = {
  //Left side adornmnent within text field
  prefix: PropTypes.element,
  //Right side adornmnent within text field
  suffix: PropTypes.element,
}


export default PrimabullInput;