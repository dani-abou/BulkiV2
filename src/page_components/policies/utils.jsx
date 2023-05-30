import { StyledPolicyHeaders } from "./style"

export function PolicyHeader({ children }) {
  return <><StyledPolicyHeaders>{children}</StyledPolicyHeaders><br /></>
}

export function Break() {
  return <span style={{ height: '10px', display: 'block' }}>{' '}</span>
}
