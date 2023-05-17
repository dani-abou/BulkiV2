import GalleryCard from './galleryCard';
import GalleryCarousel from "./galleryCarousel"
import GalleryIconButton from './galleryIconButton'
import { StyledButtonTest } from './style'
import PrimabullButton from '../src/components/PrimabullButton';
import GalleryModal from './galleryModal';
import { signOut } from '../src/common/authentication';
import { useRouter } from "next/router"
import GalleryForm from './galleryForm';
import PrimabullSelect from '../src/components/PrimabullSelect';
import { useState } from 'react';
import GallerySelect from './gallerySelect';
import GalleryRadio from './galleryRadio';
import PrimabullSurface from '../src/components/PrimabullSurface/PrimabullSurface';

const Gallery = () => {
  const router = useRouter()
  return <PrimabullSurface>
    <GalleryRadio />
  </PrimabullSurface>
}

export default Gallery 