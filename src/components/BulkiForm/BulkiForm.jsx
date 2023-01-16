import { Grid } from "@mui/material";
import BulkiButton from "../BulkiButton";
import BulkiCheckbox from "../BulkiCheckbox";
import BulkiInput from "../BulkiInput";
import BulkiSelect from "../BulkiSelect";
import { StyledForm, StyledFormDiv } from "./style";


export const FormInputTypes = {
  input: 'INPUT',
  select: 'SELECT',
  button: 'BUTTON',
  checkbox: 'CHECKBOX',
  fileButton: 'FILE',
  custom: 'CUSTOM'
}

const FormInputs = {
  [FormInputTypes.input]: BulkiInput,
  [FormInputTypes.button]: BulkiButton,
  [FormInputTypes.fileButton]: ({ children, ...props }) => <BulkiButton {...props} component="label">
    <input hidden accept="image/*" multiple type="file" />{children}</BulkiButton>,
  [FormInputTypes.checkbox]: BulkiCheckbox,
  [FormInputTypes.select]: BulkiSelect,
}

const BulkiForm = ({ form, values, onChange, className, showErrors, ...props }) => {
  return <StyledForm {...props}>
    <StyledFormDiv container className={className} spacing={2}>
      {Object.keys(form).map(inputKey => {
        const input = form[inputKey];
        const Component = FormInputs[input.type];
        const width = input.width ? 12 / (100 / input.width) : 6
        return <Grid item
          key={inputKey}
          xs={width} sm={width} lg={width} md={width} xl={width}>
          <Component {...input.additionalProps} value={values[inputKey]}
            error={showErrors && input.additionalProps.required}
            helperText={showErrors ? "Required Field" : ""}
            onChange={e => onChange(inputKey, input.type === FormInputTypes.fileButton ? e.target.files[0] : e.target.value)}>
            {input.type === FormInputTypes.button || input.type === FormInputTypes.fileButton ?
              input?.additionalProps?.label : ""}
          </Component>
        </Grid>
      })}
    </StyledFormDiv>
  </StyledForm>
}

export default BulkiForm;