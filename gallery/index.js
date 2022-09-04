import GalleryCard from './galleryCard';
import GalleryCarousel from "./galleryCarousel"
import GalleryIconButton from './galleryIconButton'
import { StyledGalleryFrame, StyledButtonTest } from './style'
import BulkiButton from '../src/components/BulkiButton';
import GalleryModal from './galleryModal';
import { signOut } from '../src/assets/authentication';
import { useRouter } from "next/router"

const Gallery = () => {
  const router = useRouter()
  return <StyledGalleryFrame>
    <GalleryModal>Child</GalleryModal>
    <BulkiButton onClick={() => signOut(router)}>Sign out</BulkiButton>
  </StyledGalleryFrame>
}

export default Gallery 