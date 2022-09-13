import GalleryCard from './galleryCard';
import GalleryCarousel from "./galleryCarousel"
import GalleryIconButton from './galleryIconButton'
import { StyledGalleryFrame, StyledButtonTest } from './style'
import BulkiButton from '../src/components/BulkiButton';
import GalleryModal from './galleryModal';
import { signOut } from '../src/assets/authentication';
import { useRouter } from "next/router"
import GalleryForm from './galleryForm';
import BulkiSelect from '../src/components/BulkiSelect';
import { useState } from 'react';
import GallerySelect from './gallerySelect';
import GalleryRadio from './galleryRadio';

const Gallery = () => {
  const router = useRouter()
  return <StyledGalleryFrame>
    <GalleryRadio />
  </StyledGalleryFrame>
}

export default Gallery 