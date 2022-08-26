import { forwardRef } from "react"
import { StyledIconButton } from './style'
import PropTypes from 'prop-types'

const BulkiIconButton = forwardRef(({ iconSize, className, children, ...props }, ref) => {

  return <StyledIconButton size={iconSize == 'xlarge' ? 'large' : iconSize === 'xsmall' ? 'small' : 'medium'} className={className} ref={ref} {...props}>
    {children}
  </StyledIconButton>
})

BulkiIconButton.displayName = 'BulkiIconButton'

BulkiIconButton.propTypes = {
  iconSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['xlarge', 'large', 'xsmall', 'small'])
  ])
}

export default BulkiIconButton