import BulkiCard from "../components/BulkiCard/BulkiCard";

const imageURL = ''
const header = 'TEST Header'

const GalleryCard = () => {
  return <BulkiCard
    header={header}
    imageURL={imageURL}
  > CHILDREN
  </BulkiCard>
}

export default GalleryCard