import { StyledThumbnailDiv, StyledThumbnailButton } from './style'
import Image from 'next/image'


const Thumbnail = ({ onClick, image, selected }) => (
  <StyledThumbnailDiv selected={selected} onClick={onClick}>
    <Image alt={image} src={image} layout='fill' />
  </StyledThumbnailDiv>
)

export default Thumbnail