import { StyledFormDiv, StyledForm } from "./style"
import BulkiInput from "../BulkiInput";
import { Grid } from "@mui/material";
import BulkiButton from "../BulkiButton";
import BulkiCheckbox from "../BulkiCheckbox";
import BulkiSelect from "../BulkiSelect";


export const FormInputTypes = {
  input: 'INPUT',
  select: 'SELECT',
  button: 'BUTTON',
  checkbox: 'CHECKBOX',
  custom: 'CUSTOM'
}

const FormInputs = {
  [FormInputTypes.input]: BulkiInput,
  [FormInputTypes.button]: BulkiButton,
  [FormInputTypes.checkbox]: BulkiCheckbox,
  [FormInputTypes.select]: BulkiSelect
}

const BulkiForm = ({ form, onSubmit, className, showErrors, ...props }) => {
  return <StyledForm onSubmit={onSubmit} {...props}>
    <StyledFormDiv container className={className} spacing={2}>
      {Object.keys(form).map(inputKey => {
        const input = form[inputKey];
        const Component = FormInputs[input.type];
        const width = input.width ? 12 / (100 / input.width) : 6
        return <Grid item
          key={inputKey}
          xs={width} sm={width} lg={width} md={width} xl={width}>
          <Component {...input.additionalProps} error={showErrors && input.additionalProps.required} helperText={showErrors ? "Required Field" : ""} />
        </Grid>
      })}
    </StyledFormDiv>
  </StyledForm>
}

export default BulkiForm;