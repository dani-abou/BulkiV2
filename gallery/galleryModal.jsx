import { useState } from "react"
import BulkiButton from "../src/components/BulkiButton"
import BulkiModal from "../src/components/BulkiModal"

const GalleryModal = () => {
  const [show, setShow] = useState(false)
  return <>
    <BulkiButton onClick={() => setShow(true)}>Show Modal</BulkiButton>
    <BulkiModal show={show} onClose={() => setShow(false)} />
  </>
}

export default GalleryModal