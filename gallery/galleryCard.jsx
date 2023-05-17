import PrimabullCard from "../src/components/PrimabullCard";
import cans from "../public/cans.png"

const header = 'Cans, all that random other info people like to include, aluminon '

const GalleryCard = () => {
  return <PrimabullCard
    header={header}
    imageSrc={cans}
  > <div>ttttt</div>
  </PrimabullCard>
}

export default GalleryCard