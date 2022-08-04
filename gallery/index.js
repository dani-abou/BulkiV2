import BulkiPage from '../src/common/BulkiPage';
import GalleryCard from './galleryCard';
import GalleryCarousel from "./galleryCarousel"
import { StyledGalleryFrame } from './style'

const Gallery = () => {
  return <BulkiPage>
    <GalleryCarousel />
  </BulkiPage>
}

export default Gallery