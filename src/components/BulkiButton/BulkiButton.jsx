import { BulkiButtonText } from "../../common/tags";
import { StyledButton } from "./style"
import { forwardRef } from "react";

export const BulkiButtonTypes = {
  borderless: 'BORDERLESS',
  outline: 'OUTLINE',
  primary: 'PRIMARY',
  secondary: 'SECONDARY'
}

const typeStyles = {
  [BulkiButtonTypes['borderless']]: {
    backgroundColor: 'inherit',
    border: 'none',
    color: 'onSurface'
  },
  [BulkiButtonTypes['outline']]: {
    backgroundColor: 'inherit',
    border: 'onSurface',
    color: 'onSurface'
  },
  [BulkiButtonTypes['primary']]: {
    backgroundColor: 'primary',
    border: 'none',
    color: 'surface'
  },
  [BulkiButtonTypes['secondary']]: {
    backgroundColor: 'secondary',
    border: 'none',
    color: 'surface'
  },
}

const BulkiButton = forwardRef(({ type = BulkiButtonTypes['primary'], className, children, ...props }, ref) => {
  return (
    <StyledButton {...props} className={className} typeStyles={typeStyles[type]} ref={ref}>
      <BulkiButtonText>{children}</BulkiButtonText>
    </StyledButton>
  )
})

BulkiButton.displayName = 'BulkiButton';

export default BulkiButton;
