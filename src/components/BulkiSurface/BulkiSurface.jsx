import { StyledPaper } from "./style"

const BulkiSurface = ({ children, className }) => {
  return <StyledPaper className={className}>
    {children}
  </StyledPaper>
}

export default BulkiSurface