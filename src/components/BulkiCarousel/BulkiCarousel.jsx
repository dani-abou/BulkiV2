import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import useEmblaCarousel from 'embla-carousel-react';
import Image from "next/legacy/image";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from 'react';
import {
  StyledCarouselDiv, StyledImage, StyledImagesDiv, StyledScrollButton, StyledThumbnailFlexbox, StyledThumbnailViewport, StyledViewPort
} from "./style";
import Thumbnail from "./thumbnail";


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
        {urls.map((image, index) => <StyledImage key={index}>
          <Image src={image} alt={image} layout='fill' />
        </StyledImage>)}
      </StyledImagesDiv>
    </StyledViewPort>
    {showButtons &&
      <>
        {selectedIndex !== 0 && <StyledScrollButton onClick={scrollPrev} nextbutton={false}>
          <ChevronLeftRoundedIcon fontSize='large' />
        </StyledScrollButton>
        }
        {
          selectedIndex !== urls.length - 1 &&
          <StyledScrollButton onClick={scrollNext} nextbutton={true}>
            <ChevronRightRoundedIcon fontSize='large' />
          </StyledScrollButton>
        }
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

BulkiCarousel.proptypes = {
  //Order array of the image paths
  urls: PropTypes.arrayOf(PropTypes.string).isRequired,
  //Whether to show the scroll buttons
  showButton: PropTypes.bool,
  //Whether the carousel is draggable -- drag to traverse images
  draggable: PropTypes.bool,
  //Whether the clickable thumbnails are visible at bottom of carousel
  showThumbnails: PropTypes.bool
}

export default BulkiCarousel