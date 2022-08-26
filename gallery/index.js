import GalleryCard from './galleryCard';
import GalleryCarousel from "./galleryCarousel"
import GalleryIconButton from './galleryIconButton'
import { StyledGalleryFrame, StyledButtonTest } from './style'
import BulkiButton from '../src/components/BulkiButton';
import GalleryModal from './galleryModal';

const Gallery = () => {
  return <StyledGalleryFrame>
    <GalleryModal>Child </GalleryModal>
  </StyledGalleryFrame>
}

export default Gallery 