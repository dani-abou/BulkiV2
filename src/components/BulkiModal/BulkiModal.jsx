import { Modal } from "@mui/material"
import { StyledBox } from "./style"


const BulkiModal = ({ show, onClose, children, ...props }) => {
  return <Modal
    open={show}
    onClose={onClose}
    disablePortal
    disableEnforceFocus
    disableAutoFocus
  >
    <StyledBox>
      {children}
    </StyledBox>
  </Modal>
}

export default BulkiModal