import { BulkiCarousel } from "../src/components/BulkiCarousel"

const images = [
  'https://firebasestorage.googleapis.com/v0/b/bulki-aa26c.appspot.com/o/listings%2FmItpIlXzc6dwydWrl1PH%2Fantelope.png?alt=media&token=59704464-d7d9-4f5c-8376-604767ff4ab3',
  'https://firebasestorage.googleapis.com/v0/b/bulki-aa26c.appspot.com/o/listings%2Fvp25ub5s6Ddmk83L113l%2Fcans.png?alt=media&token=65c7ad61-495a-4fa8-a238-0fa578f4c1c7',
]

const GalleryCarousel = () => {
  return <BulkiCarousel urls={images} />
}

export default GalleryCarousel