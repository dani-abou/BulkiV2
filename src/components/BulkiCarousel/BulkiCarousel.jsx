import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react';
import {
  StyledCarouselDiv, StyledImagesDiv, StyledImage, StyledViewPort, StyledScrollButton
} from "./style"
import Image from "next/image";


const BulkiCarousel = ({ urls, className }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback((e) => {
    e.preventDefault()
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback((e) => {
    e.preventDefault()
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return <StyledCarouselDiv className={className}>
    <StyledViewPort ref={emblaRef}>
      <StyledImagesDiv>
        {urls.map((image, index) => <StyledImage key={index} >
          <Image src={image} alt={image} layout='fill' />
        </StyledImage>)}
      </StyledImagesDiv>
    </StyledViewPort>
    <StyledScrollButton onClick={scrollPrev} nextButton={false}>P</StyledScrollButton>
    <StyledScrollButton onClick={scrollNext} nextButton={true}>N</StyledScrollButton>

  </StyledCarouselDiv>
}

export default BulkiCarousel