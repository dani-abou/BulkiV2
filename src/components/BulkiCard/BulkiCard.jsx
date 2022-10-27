import {
  StyledCard, StyledHeader, StyledImage, StyledFixedDimensions, StyledImageDiv
} from './style'
import Image from 'next/image'
import BulkiCarousel from '../BulkiCarousel'
import { Card, CardContent, CardMedia, CardActionArea, CardHeader, CircularProgress, CardActions } from '@mui/material'
import PropTypes from "prop-types"


//If images is an array of > 1, then a carousel is shown

const BulkiCard = ({ image, imageLoading, header, children, className }) => {

  return <StyledCard className={className}>
    <CardActionArea sx={{ height: '100%' }}>
      <StyledImageDiv>
        <StyledImage>
          {
            imageLoading || !image ?
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
      <CardContent sx={{ height: '55%', width: '100%' }} >
        <StyledHeader gutterBottom>
          {header}
        </StyledHeader>
        {children}
      </CardContent>
    </CardActionArea>
  </StyledCard >
}

BulkiCard.proptypes = {
  //Path to image
  image: PropTypes.string,
  //Whether the image is loaded
  imageLoading: PropTypes.bool,
  //The Header on the card
  header: PropTypes.string
}

export default BulkiCard;