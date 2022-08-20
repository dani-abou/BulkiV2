import {
  StyledCard, StyledHeader, StyledImage, StyledFixedDimensions, StyledImageDiv
} from './style'
import Image from 'next/image'
import { BulkiCarousel } from '../BulkiCarousel'
import { Card, CardContent, CardMedia, CardActionArea, CardHeader, CircularProgress } from '@mui/material'


//If images is an array of > 1, then a carousel is shown

const BulkiCard = ({ image, imageLoading, header, children, className }) => {

  return <StyledCard className={className}>
    <CardActionArea sx={{ height: '100%' }}>
      <StyledImageDiv>
        <StyledImage>
          {
            imageLoading ?
              <CircularProgress />
              :
              <Image
                alt={image}
                src={image}
                layout="fill"
                objectFit='fill'
              />
          }
        </StyledImage>
      </StyledImageDiv>
      <CardContent sx={{ height: '55%' }} >
        <StyledHeader gutterBottom>
          {header}
        </StyledHeader>
        {children}
      </CardContent>
    </CardActionArea>

  </StyledCard >

  // return <StyledCard className={className}>
  //   <StyledImage>
  //     {
  //       images.length > 1 ?
  //         <BulkiCarousel urls={images} showButtons={true} /> :
  //         <Image alt={header} src={images[0] || images} layout='fill' />
  //     }
  //   </StyledImage>
  //   <StyledHeader>{header}</StyledHeader>
  //   <StyledFixedDimensions>
  //     {children}
  //   </StyledFixedDimensions>
  // </StyledCard>
}

export default BulkiCard;