import { useCart } from "../../common/context";
import { PrimabullBody1 } from "../../common/styles";
import { StyledMobileTotals, StyledTotalDiv } from "./style";

export default function MobileTotals() {

  const { totals } = useCart();

  return <StyledMobileTotals>
    <StyledTotalDiv style={{ marginBottom: '6px' }}>
      <PrimabullBody1>Subtotal</PrimabullBody1>
      <PrimabullBody1>${totals.subtotal}</PrimabullBody1>
    </StyledTotalDiv>
    <StyledTotalDiv style={{ marginBottom: '15px' }}>
      <PrimabullBody1>Shipping</PrimabullBody1>
      <PrimabullBody1>${totals.shippingTotal}</PrimabullBody1>
    </StyledTotalDiv>
    <StyledTotalDiv >
      <PrimabullBody1 style={{ fontWeight: 600, fontSize: '20px' }}>Total</PrimabullBody1>
      <PrimabullBody1 style={{ fontWeight: 500, fontSize: '20px' }}>${totals.total}</PrimabullBody1>
    </StyledTotalDiv>
  </StyledMobileTotals>
}