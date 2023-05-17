import { useState } from "react"
import PrimabullButton from "../src/components/PrimabullButton"
import PrimabullModal from "../src/components/PrimabullModal"

const GalleryModal = () => {
  const [show, setShow] = useState(false)
  return <>
    <PrimabullButton onClick={() => setShow(true)}>Show Modal</PrimabullButton>
    <PrimabullModal show={show} onClose={() => setShow(false)} />
  </>
}

export default GalleryModal