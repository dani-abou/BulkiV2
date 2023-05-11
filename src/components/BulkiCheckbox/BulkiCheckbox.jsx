import { Checkbox, FormControlLabel } from "@mui/material";
import { BulkiCaption } from "../../common/styles";
import { StyledLabel } from "./style";

const BulkiCheckbox = ({ label, className, ...props }) => {
  return <FormControlLabel label={<StyledLabel>{label}</StyledLabel>}
    control={<Checkbox {...props} className={className} />} />
}

export default BulkiCheckbox;