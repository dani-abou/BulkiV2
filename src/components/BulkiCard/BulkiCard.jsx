import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, CircularProgress } from '@mui/material'
import Image from 'next/image'
import PropTypes from "prop-types"
import BulkiCarousel from '../BulkiCarousel'
import {
  StyledCard, StyledFixedDimensions, StyledHeader, StyledImage, StyledImageDiv
} from './style'


//If images is an array of > 1, then a carousel is shown

const BulkiCard = ({ image, imageLoading, header, children, className }) => {

  return <StyledCard className={className}>
    <CardActionArea sx={{ height: '100%' }}>
      <StyledImageDiv>
        <StyledImage>
          <Image
            alt={image}
            src={image}
            layout="fill"
            objectFit='fill'
          />
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