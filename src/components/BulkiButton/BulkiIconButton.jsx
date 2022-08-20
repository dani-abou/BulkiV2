import { IconButton } from "@mui/material"
import { forwardRef } from "react"

const BulkiIconButton = forwardRef(({ iconSize, className, children, ...props }, ref) => {
  return <IconButton className={className} ref={ref} {...props}>
    {children}
  </IconButton>
})

BulkiIconButton.displayName = 'BulkiIconButton'

export default BulkiIconButton