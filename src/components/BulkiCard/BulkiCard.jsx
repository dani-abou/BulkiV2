import {
  StyledCard, StyledImage, StyledHeader, StyledIDK, StyledFixedDimensions
} from './style'
import Image from 'next/image'

const BulkiCard = ({ imageSrc, header, children, className }) => {
  return <StyledCard className={className}>
    <StyledImage>
      <StyledIDK alt={header} src={imageSrc} layout='fill' />
    </StyledImage>
    <StyledHeader>{header}</StyledHeader>
    <StyledFixedDimensions>
      {children}
    </StyledFixedDimensions>
  </StyledCard>
}

export default BulkiCard;