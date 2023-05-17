import { Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, CircularProgress } from '@mui/material'
import Image from "next/legacy/image"
import PropTypes from "prop-types"
import PrimabullCarousel from '../PrimabullCarousel'
import {
  StyledCard, StyledFixedDimensions, StyledHeader, StyledImage, StyledImageDiv
} from './style'


//If images is an array of > 1, then a carousel is shown

const PrimabullCard = ({ image, imageLoading, header, children, className }) => {

  return <StyledCard className={className} >
    <CardActionArea sx={{ height: '100%' }}>
      <StyledImageDiv>
        <StyledImage>
          <Image
            alt={image}
            src={image}
            layout='fill'
            objectFit='cover'
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

PrimabullCard.proptypes = {
  //Path to image
  image: PropTypes.string,
  //Whether the image is loaded
  imageLoading: PropTypes.bool,
  //The Header on the card
  header: PropTypes.string
}

export default PrimabullCard;