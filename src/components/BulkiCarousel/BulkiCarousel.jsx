import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useState, useEffect } from 'react';
import {
  StyledCarouselDiv, StyledImagesDiv, StyledImage, StyledViewPort, StyledScrollButton,
  StyledThumbnailViewport, StyledThumbnailFlexbox
} from "./style"
import Image from "next/image";
import Thumbnail from "./thumbnail"

const BulkiCarousel = ({ urls, showButtons, draggable, showThumbnails, className }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ draggable: draggable, skipSnaps: false })
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    selectedClass: "",
    dragFree: true
  });

  const scrollPrev = useCallback((e) => {
    e.preventDefault()
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback((e) => {
    e.preventDefault()
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onThumbClick = useCallback(
    (index) => {
      if (!emblaApi || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) {
        emblaApi.scrollTo(index);
      }
    },
    [emblaApi, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi || !emblaThumbs) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbs.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return <StyledCarouselDiv className={className}>
    <StyledViewPort ref={emblaRef}>
      <StyledImagesDiv>
        {urls.map((image, index) => <StyledImage key={index} >
          <Image src={image} alt={image} layout='fill' />
        </StyledImage>)}
      </StyledImagesDiv>
    </StyledViewPort>
    {showButtons &&
      <>
        <StyledScrollButton onClick={scrollPrev} nextButton={false}>
        </StyledScrollButton>
        <StyledScrollButton onClick={scrollNext} nextButton={true}>N</StyledScrollButton>
      </>
    }
    {showThumbnails && <StyledThumbnailViewport ref={thumbViewportRef}>
      <StyledThumbnailFlexbox>
        {urls.map((image, index) =>
          <Thumbnail
            key={index}
            image={image}
            selected={index == selectedIndex}
            onClick={() => onThumbClick(index)} />
        )}
      </StyledThumbnailFlexbox>
    </StyledThumbnailViewport>}

  </StyledCarouselDiv>
}

export default BulkiCarousel