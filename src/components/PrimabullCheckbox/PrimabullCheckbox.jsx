import { Checkbox, FormControlLabel } from "@mui/material";
import { PrimabullCaption } from "../../common/styles";
import { StyledLabel } from "./style";

const PrimabullCheckbox = ({ label, className, ...props }) => {
  return <FormControlLabel label={<StyledLabel>{label}</StyledLabel>}
    control={<Checkbox {...props} className={className} />} />
}

export default PrimabullCheckbox;