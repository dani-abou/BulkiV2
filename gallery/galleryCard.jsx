import BulkiCard from "../src/components/BulkiCard";
import cans from "../public/cans.png"

const header = 'Cans, all that random other info people like to include, aluminon '

const GalleryCard = () => {
  return <BulkiCard
    header={header}
    imageSrc={cans}
  > <div>ttttt</div>
  </BulkiCard>
}

export default GalleryCard