import PropTypes from 'prop-types';
import { forwardRef } from "react";
import { StyledButton, StyledButtonFlex, StyledTextButton } from "./style";

//Enumerations for different button types
export const BulkiButtonTypes = {
  text: 'TEXT',
  outline: 'OUTLINE',
  primary: 'PRIMARY',
  secondary: 'SECONDARY'
}

//Styles for each button type 
const typeStyles = {
  [BulkiButtonTypes['text']]: {
    variant: 'text',
    custom: StyledTextButton
  },
  [BulkiButtonTypes['outline']]: {
    variant: 'outlined',
    color: 'primary'
  },
  [BulkiButtonTypes['primary']]: {
    variant: 'contained',
  },
  [BulkiButtonTypes['secondary']]: {
    variant: 'contained',
    color: 'secondary'
  },
}

const BulkiButton = forwardRef(({ variant = [BulkiButtonTypes['primary']], className, children, startIcon, ...props }, ref) => {
  const Custom = typeStyles[variant]?.custom
  return (Custom ?
    <Custom
      className={className}
      variant={typeStyles[variant]?.variant}
      color={typeStyles[variant]?.color}
      {...props} ref={ref}>
      <StyledButtonFlex>
        {startIcon}
        {children}
      </StyledButtonFlex>
    </Custom>
    :
    <StyledButton
      className={className}
      classes={[className]}
      variant={typeStyles[variant]?.variant}
      color={typeStyles[variant]?.color}
      ref={ref}{...props} >
      <StyledButtonFlex>
        {startIcon}
        {children}
      </StyledButtonFlex>
    </StyledButton>
  )
})

BulkiButton.displayName = 'BulkiButton';

BulkiButton.propTypes = {
  variant: PropTypes.oneOf([...Object.values(BulkiButtonTypes), undefined])
}

export default BulkiButton;
