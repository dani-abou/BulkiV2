import { CloseRounded } from "@mui/icons-material";
import { DialogTitle, IconButton, Modal } from "@mui/material";
import { StyledBox } from "./style";


export default function PrimabullModal({ show, onClose, children, className, style, title, ...props }) {
  return <Modal
    open={show}
    onClose={onClose}
    disablePortal
    disableEnforceFocus
    disableAutoFocus
    {...props}
  >

    <StyledBox style={style} className={className}>
      {title && <BootstrapDialogTitle onClose={onClose}>{title}</BootstrapDialogTitle>}
      {children}
    </StyledBox>
  </Modal>
}

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseRounded />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
