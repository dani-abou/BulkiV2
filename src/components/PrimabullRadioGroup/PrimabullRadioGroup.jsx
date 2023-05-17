import { FormControlLabel } from "@mui/material";
import { StyledFormLabel, StyledRadioGroup, StyledFormControl, StyledRadio } from "./style"
//option = {label, value}

const PrimabullRadioGroup = ({ options, label, className, ...props }) => {
  return <StyledFormControl className={className}>
    <StyledFormLabel focused={false}>{label}</StyledFormLabel>
    <StyledRadioGroup {...props} >
      {options.map(option => {
        return <FormControlLabel key={option.value}
          label={option.label}
          value={option.value}
          control={<StyledRadio />}
        />
      })}
    </StyledRadioGroup>
  </StyledFormControl>

}

export default PrimabullRadioGroup;