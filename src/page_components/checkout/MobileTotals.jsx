import { useCart } from "../../common/context";
import { BulkiBody1 } from "../../common/styles";
import { StyledMobileTotals, StyledTotalDiv } from "./style";

export default function MobileTotals() {

  const { totals } = useCart();

  return <StyledMobileTotals>
    <StyledTotalDiv style={{ marginBottom: '6px' }}>
      <BulkiBody1>Subtotal</BulkiBody1>
      <BulkiBody1>${totals.subtotal}</BulkiBody1>
    </StyledTotalDiv>
    <StyledTotalDiv style={{ marginBottom: '15px' }}>
      <BulkiBody1>Shipping</BulkiBody1>
      <BulkiBody1>${totals.shippingTotal}</BulkiBody1>
    </StyledTotalDiv>
    <StyledTotalDiv >
      <BulkiBody1 style={{ fontWeight: 600, fontSize: '20px' }}>Total</BulkiBody1>
      <BulkiBody1 style={{ fontWeight: 500, fontSize: '20px' }}>${totals.total}</BulkiBody1>
    </StyledTotalDiv>
  </StyledMobileTotals>
}