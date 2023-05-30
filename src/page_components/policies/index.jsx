import { PrimabullH3, PrimabullH4 } from "../../common/styles"
import PrimabullSurface from "../../components/PrimabullSurface/PrimabullSurface"

export default function Policy({ header, children }) {
  return <PrimabullSurface style={{ width: '99%' }}>
    <PrimabullH4>{header}</PrimabullH4>
    {/* <br /> */}
    {children}
  </PrimabullSurface>
}