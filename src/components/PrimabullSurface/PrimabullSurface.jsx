import { StyledPaper } from "./style"

const PrimabullSurface = ({ children, className, ...props }) => {
  return <StyledPaper className={className} {...props}>
    {children}
  </StyledPaper >
}

export default PrimabullSurface