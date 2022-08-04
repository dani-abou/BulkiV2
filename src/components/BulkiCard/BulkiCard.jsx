import {
  StyledCard, StyledHeader, StyledImage, StyledFixedDimensions
} from './style'
import Image from 'next/image'
import { BulkiCarousel } from '../BulkiCarousel'

//If images is an array of > 1, then a carousel is shown

const BulkiCard = ({ images, header, children, className }) => {
  return <StyledCard className={className}>
    <StyledImage>
      {
        images.length > 1 ?
          <BulkiCarousel urls={images} /> :
          <Image alt={header} src={images[0] || images} layout='fill' />
      }
    </StyledImage>
    <StyledHeader>{header}</StyledHeader>
    <StyledFixedDimensions>
      {children}
    </StyledFixedDimensions>
  </StyledCard>
}

export default BulkiCard;