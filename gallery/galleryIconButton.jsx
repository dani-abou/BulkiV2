import { BulkiIconButton } from "../src/components/BulkiButton";
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { StyledIconButtonTest } from './style'

const GalleryIconButton = () => {
  return <div style={{ border: '1px solid', width: '80%', height: '80%' }}>
    <StyledIconButtonTest >
      <ChevronRightRoundedIcon fontSize='large' />
    </StyledIconButtonTest>
  </div>
}

export default GalleryIconButton