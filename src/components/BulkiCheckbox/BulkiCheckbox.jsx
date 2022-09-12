import { Checkbox, FormControlLabel } from "@mui/material";

const BulkiCheckbox = ({ label, className, ...props }) => {
  return <FormControlLabel label={label}
    control={<Checkbox {...props} className={className} />} />
}

export default BulkiCheckbox;