import BulkiPage from '../components/BulkiPage';
import GalleryCard from './galleryCard';
import { StyledGalleryFrame } from './style'

const Gallery = () => {
  return <BulkiPage>
    <StyledGalleryFrame>
      <GalleryCard />
    </StyledGalleryFrame>
  </BulkiPage>
}

export default Gallery