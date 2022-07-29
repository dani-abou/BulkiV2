import { StyledCard, StyledImage, StyledHeader } from './style'
import Image from 'next/image'

const BulkiCard = ({ imageURL, header, children }) => {
  return <StyledCard>
    <StyledImage> <Image alt={header} src={imageURL} /> </StyledImage>
    <StyledHeader>{header}</StyledHeader>
    {children}
  </StyledCard>
}

export default BulkiCard;