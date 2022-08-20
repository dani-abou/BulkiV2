import BulkiPage from '../src/common/BulkiPage';
import GalleryCard from './galleryCard';
import GalleryCarousel from "./galleryCarousel"
import GalleryIconButton from './galleryIconButton'
import { StyledGalleryFrame, StyledButtonTest } from './style'
import { BulkiButton } from '../src/components/BulkiButton';

const Gallery = () => {
  return <StyledGalleryFrame>
    <GalleryIconButton />
  </StyledGalleryFrame>
}

export default Gallery 