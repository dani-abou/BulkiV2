import { StyledTextButton, StyledButton } from "./style"
import { forwardRef } from "react";
import { Button } from "@mui/material";

export const BulkiButtonTypes = {
  text: 'TEXT',
  outline: 'OUTLINE',
  primary: 'PRIMARY',
  secondary: 'SECONDARY'
}

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

const BulkiButton = forwardRef(({ type = [BulkiButtonTypes['primary']], className, children, ...props }, ref) => {
  const Custom = typeStyles[type]?.custom
  return (Custom ?
    <Custom
      className={className}
      variant={typeStyles[type]?.variant}
      color={typeStyles[type]?.color}
      {...props} ref={ref}>
      {children}
    </Custom>
    :
    <StyledButton
      className={className}
      variant={typeStyles[type]?.variant}
      color={typeStyles[type]?.color}
      ref={ref}{...props} >
      {children}
    </StyledButton>
  )
})

BulkiButton.displayName = 'BulkiButton';

export default BulkiButton;
