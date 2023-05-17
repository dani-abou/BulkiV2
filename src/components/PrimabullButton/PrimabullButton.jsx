import PropTypes from 'prop-types';
import { forwardRef } from "react";
import { StyledButton, StyledButtonFlex, StyledTextButton } from "./style";

//Enumerations for different button types
export const PrimabullButtonTypes = {
  text: 'TEXT',
  outline: 'OUTLINE',
  primary: 'PRIMARY',
  secondary: 'SECONDARY'
}

//Styles for each button type 
const typeStyles = {
  [PrimabullButtonTypes['text']]: {
    variant: 'text',
    custom: StyledTextButton
  },
  [PrimabullButtonTypes['outline']]: {
    variant: 'outlined',
    color: 'primary'
  },
  [PrimabullButtonTypes['primary']]: {
    variant: 'contained',
  },
  [PrimabullButtonTypes['secondary']]: {
    variant: 'contained',
    color: 'secondary'
  },
}

const PrimabullButton = forwardRef(({ variant = [PrimabullButtonTypes['primary']], className, children, startIcon, ...props }, ref) => {
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

PrimabullButton.displayName = 'PrimabullButton';

PrimabullButton.propTypes = {
  variant: PropTypes.oneOf([...Object.values(PrimabullButtonTypes), undefined])
}

export default PrimabullButton;
