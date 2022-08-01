import { StyledInput, StyledInputDiv, StyledInputEnd } from "./style"

const BulkiInput = ({ prefix, suffix, className, ...props }) => {
  return <StyledInputDiv className={className}>
    {prefix && <StyledInputEnd borderOn='right'>{prefix}</StyledInputEnd>}
    <StyledInput {...props} />
    {suffix && <StyledInputEnd borderOn='left'>{suffix}</StyledInputEnd>}
  </StyledInputDiv>
}

export default BulkiInput;